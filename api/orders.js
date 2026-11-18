// Customer side of the order desk.
//   GET  /api/orders                 -> { on: true } when order saving is set up
//   GET  /api/orders?o=CODE&t=TOKEN  -> the order's status, for the tracking page
//   POST /api/orders  { order }      -> save a new order (when "Send order on WhatsApp" is tapped)
//   POST /api/orders  { answer: true|false, code, token } -> the customer's "Did you send it?" answer
//   POST /api/orders  { claim: 'paid', code, token }      -> customer tapped "I've paid. Send the screenshot"
var L = require('./_lib');

var CODE = /^SO-\d{4}-[A-Z0-9]{4,6}$/, TOK = /^[a-z0-9]{16,40}$/;

function publicView(o) {
  return { code: o.code, at: o.at, status: o.status, paid: o.paid, payClaim: o.payClaim || null, sent: o.sent, zone: o.zone,
    items: o.items, total: o.total, log: o.log };
}

module.exports = async function (req, res) {
  try {
    if (!L.configured()) return L.send(res, req.method === 'GET' ? 200 : 503, { on: false });

    if (req.method === 'GET') {
      var q = L.query(req);
      if (!q.o) return L.send(res, 200, { on: true });
      if (!CODE.test(q.o) || !TOK.test(q.t || '')) return L.send(res, 404, { error: 'not found' });
      var raw = await L.redis(['GET', L.key(q.o)]);
      var o = raw && JSON.parse(raw);
      if (!o || !L.same(o.token, q.t)) return L.send(res, 404, { error: 'not found' });
      return L.send(res, 200, publicView(o));
    }

    if (req.method !== 'POST') return L.send(res, 405, { error: 'method' });
    var b = await L.body(req);

    // The "Did you send your order on WhatsApp?" answer
    if (typeof b.answer === 'boolean') {
      if (!CODE.test(b.code || '') || !TOK.test(b.token || '')) return L.send(res, 404, { error: 'not found' });
      var raw2 = await L.redis(['GET', L.key(b.code)]);
      var o2 = raw2 && JSON.parse(raw2);
      if (!o2 || !L.same(o2.token, b.token)) return L.send(res, 404, { error: 'not found' });
      o2.sent = b.answer;
      await L.redis([['SET', L.key(b.code), JSON.stringify(o2), 'KEEPTTL'], ['INCR', L.REV]]);
      return L.send(res, 200, { ok: true });
    }

    // "I've paid. Send the screenshot" (the kitchen still checks the UPI app before marking it paid)
    if (b.claim === 'paid') {
      if (!CODE.test(b.code || '') || !TOK.test(b.token || '')) return L.send(res, 404, { error: 'not found' });
      var raw3 = await L.redis(['GET', L.key(b.code)]);
      var o3 = raw3 && JSON.parse(raw3);
      if (!o3 || !L.same(o3.token, b.token)) return L.send(res, 404, { error: 'not found' });
      if (!o3.payClaim) { o3.payClaim = Date.now(); await L.redis([['SET', L.key(b.code), JSON.stringify(o3), 'KEEPTTL'], ['INCR', L.REV]]); }
      return L.send(res, 200, { ok: true });
    }

    // A new order. Light limit per visitor so the desk can't be flooded.
    var hour = Math.floor(Date.now() / 3600000);
    var n = await L.redis([['INCR', 'rl:' + L.ip(req) + ':' + hour], ['EXPIRE', 'rl:' + L.ip(req) + ':' + hour, 3600]]);
    if (n[0] > 20) return L.send(res, 429, { error: 'slow down' });

    var code = L.str(b.code, 20), token = L.str(b.token, 40);
    if (!CODE.test(code) || !TOK.test(token)) return L.send(res, 400, { error: 'bad code' });
    var items = (Array.isArray(b.items) ? b.items : []).slice(0, 40).map(function (i) {
      return { q: Math.max(1, Math.min(99, Math.round(L.num(i.q) || 1))), name: L.str(i.name, 80),
        opts: L.str(i.opts, 200), amount: L.num(i.amount) };
    }).filter(function (i) { return i.name; });
    if (!items.length) return L.send(res, 400, { error: 'no items' });
    var now = Date.now();
    var order = {
      code: code, token: token, at: now,
      name: L.str(b.name, 80), phone: L.str(b.phone, 20).replace(/[^\d+ ]/g, ''), address: L.str(b.address, 400),
      note: L.str(b.note, 300), zone: ['free', 'porter', 'unsure'].indexOf(b.zone) >= 0 ? b.zone : 'unsure',
      km: L.num(b.km), lat: L.num(b.lat), lng: L.num(b.lng),
      items: items, total: L.num(b.total), sent: null, status: 'new', paid: false,
      log: [{ s: 'new', at: now }]
    };
    var ok = await L.redis(['SET', L.key(code), JSON.stringify(order), 'NX', 'EX', L.KEEP]);
    if (ok !== 'OK') return L.send(res, 409, { error: 'exists' });
    await L.redis([['ZADD', 'orders', now, code], ['INCR', L.REV]]);
    return L.send(res, 200, { ok: true });
  } catch (e) {
    return L.send(res, 500, { error: 'server' });
  }
};
