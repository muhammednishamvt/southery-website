// The order desk (southery.cloud/kitchen). Every request carries the shared PIN in the
// x-kitchen-pin header; the PIN lives only in the Vercel env var KITCHEN_PIN.
//   GET  /api/kitchen?days=2&rev=N                   -> orders from the last N days, newest first,
//                                                      or { same: true } when nothing changed since rev N
// A routine check costs one storage read (MGET of the lock counter and the change counter),
// which keeps a desk left open all day well inside Upstash's free plan.
//   POST /api/kitchen { codes: [...], status?, paid?, confirmed? } -> update one or several orders
//                                                      (confirmed: the payment confirmation was sent on WhatsApp)
var L = require('./_lib');

async function allowed(req) {
  var pin = process.env.KITCHEN_PIN;
  var lock = 'pinfail:' + L.ip(req);
  var got = await L.redis(['MGET', lock, L.REV]);
  var fails = Number(got[0]) || 0;
  if (fails >= 10) return { state: 'locked' };
  if (pin && L.same(req.headers['x-kitchen-pin'] || '', pin)) return { state: 'ok', rev: Number(got[1]) || 0 };
  await L.redis([['INCR', lock], ['EXPIRE', lock, 900]]);
  return { state: 'no' };
}

module.exports = async function (req, res) {
  try {
    if (!L.configured() || !process.env.KITCHEN_PIN) return L.send(res, 503, { error: 'not set up' });
    var a = await allowed(req);
    if (a.state === 'locked') return L.send(res, 429, { error: 'locked' });
    if (a.state !== 'ok') return L.send(res, 401, { error: 'pin' });

    if (req.method === 'GET') {
      var q = L.query(req);
      if (q.rev !== undefined && Number(q.rev) === a.rev) return L.send(res, 200, { same: true, rev: a.rev });
      var days = Math.max(1, Math.min(30, Number(q.days) || 2));
      var codes = await L.redis(['ZRANGEBYSCORE', 'orders', Date.now() - days * 86400000, '+inf']);
      if (!codes.length) return L.send(res, 200, { orders: [], rev: a.rev });
      var raws = await L.redis(['MGET'].concat(codes.map(L.key)));
      var orders = raws.filter(Boolean).map(function (r) { return JSON.parse(r); });
      orders.sort(function (x, y) { return y.at - x.at; });
      return L.send(res, 200, { orders: orders, rev: a.rev });
    }

    if (req.method !== 'POST') return L.send(res, 405, { error: 'method' });
    var b = await L.body(req);
    var list = (Array.isArray(b.codes) ? b.codes : [b.code]).filter(function (c) { return typeof c === 'string'; }).slice(0, 50);
    var status = L.STATUSES.indexOf(b.status) >= 0 ? b.status : null;
    if (!list.length || (!status && typeof b.paid !== 'boolean' && b.confirmed !== true)) return L.send(res, 400, { error: 'nothing to do' });
    var raws2 = await L.redis(['MGET'].concat(list.map(L.key)));
    var now = Date.now(), cmds = [], out = [];
    raws2.forEach(function (r, i) {
      if (!r) return;
      var o = JSON.parse(r);
      if (status && o.status !== status) { o.status = status; o.log.push({ s: status, at: now }); }
      if (typeof b.paid === 'boolean') o.paid = b.paid;
      cmds.push(['SET', L.key(list[i]), JSON.stringify(o), 'KEEPTTL']);
      if (b.confirmed === true) o.confirmedAt = now;
      out.push(o);
    });
    if (cmds.length) await L.redis(cmds.concat([['INCR', L.REV]]));
    return L.send(res, 200, { orders: out });
  } catch (e) {
    return L.send(res, 500, { error: 'server' });
  }
};
