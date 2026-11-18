// The order desk (southery.cloud/kitchen). Every request carries the shared PIN in the
// x-kitchen-pin header; the PIN lives only in the Vercel env var KITCHEN_PIN.
//   GET  /api/kitchen?days=2                         -> orders from the last N days, newest first
//   POST /api/kitchen { codes: [...], status?, paid? } -> update one or several orders
var L = require('./_lib');

async function allowed(req) {
  var pin = process.env.KITCHEN_PIN;
  var lock = 'pinfail:' + L.ip(req);
  var fails = Number(await L.redis(['GET', lock])) || 0;
  if (fails >= 10) return 'locked';
  if (pin && L.same(req.headers['x-kitchen-pin'] || '', pin)) return 'ok';
  await L.redis([['INCR', lock], ['EXPIRE', lock, 900]]);
  return 'no';
}

module.exports = async function (req, res) {
  try {
    if (!L.configured() || !process.env.KITCHEN_PIN) return L.send(res, 503, { error: 'not set up' });
    var a = await allowed(req);
    if (a === 'locked') return L.send(res, 429, { error: 'locked' });
    if (a !== 'ok') return L.send(res, 401, { error: 'pin' });

    if (req.method === 'GET') {
      var days = Math.max(1, Math.min(30, Number(L.query(req).days) || 2));
      var codes = await L.redis(['ZRANGEBYSCORE', 'orders', Date.now() - days * 86400000, '+inf']);
      if (!codes.length) return L.send(res, 200, { orders: [], now: Date.now() });
      var raws = await L.redis(['MGET'].concat(codes.map(L.key)));
      var orders = raws.filter(Boolean).map(function (r) { var o = JSON.parse(r); delete o.token; return o; });
      orders.sort(function (x, y) { return y.at - x.at; });
      return L.send(res, 200, { orders: orders, now: Date.now() });
    }

    if (req.method !== 'POST') return L.send(res, 405, { error: 'method' });
    var b = await L.body(req);
    var list = (Array.isArray(b.codes) ? b.codes : [b.code]).filter(function (c) { return typeof c === 'string'; }).slice(0, 50);
    var status = L.STATUSES.indexOf(b.status) >= 0 ? b.status : null;
    if (!list.length || (!status && typeof b.paid !== 'boolean')) return L.send(res, 400, { error: 'nothing to do' });
    var raws2 = await L.redis(['MGET'].concat(list.map(L.key)));
    var now = Date.now(), cmds = [], out = [];
    raws2.forEach(function (r, i) {
      if (!r) return;
      var o = JSON.parse(r);
      if (status && o.status !== status) { o.status = status; o.log.push({ s: status, at: now }); }
      if (typeof b.paid === 'boolean') o.paid = b.paid;
      cmds.push(['SET', L.key(list[i]), JSON.stringify(o), 'KEEPTTL']);
      delete o.token; out.push(o);
    });
    if (cmds.length) await L.redis(cmds);
    return L.send(res, 200, { orders: out });
  } catch (e) {
    return L.send(res, 500, { error: 'server' });
  }
};
