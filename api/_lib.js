// Shared helpers for the order API. Storage is Upstash Redis over its REST API
// (added to the Vercel project from Storage, which sets the env vars below), so there are no dependencies.
var crypto = require('crypto');

var URL_ = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
var TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

function configured() { return !!(URL_ && TOKEN); }

// One command: redis(['GET', 'k']). Several: redis([[...], [...]]) runs them as a pipeline.
async function redis(cmd) {
  var many = Array.isArray(cmd[0]);
  var r = await fetch(URL_ + (many ? '/pipeline' : ''), {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + TOKEN, 'Content-Type': 'application/json' },
    body: JSON.stringify(cmd)
  });
  if (!r.ok) throw new Error('storage ' + r.status);
  var j = await r.json();
  if (many) return j.map(function (x) { if (x.error) throw new Error(x.error); return x.result; });
  if (j.error) throw new Error(j.error);
  return j.result;
}

function send(res, status, data) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(data));
}

async function body(req) {
  if (req.body !== undefined && req.body !== null && req.body !== '') {
    return typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  }
  var chunks = [], size = 0;
  for await (var c of req) { size += c.length; if (size > 20000) throw new Error('too large'); chunks.push(c); }
  var s = Buffer.concat(chunks).toString('utf8');
  return s ? JSON.parse(s) : {};
}

function query(req) {
  var u = new URL(req.url, 'http://x');
  var q = {}; u.searchParams.forEach(function (v, k) { q[k] = v; });
  return q;
}

function ip(req) {
  return String(req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').split(',')[0].trim();
}

function str(v, max) { return typeof v === 'string' ? v.trim().slice(0, max) : ''; }
function num(v) { return typeof v === 'number' && isFinite(v) ? v : null; }

function same(a, b) {
  var x = Buffer.from(String(a)), y = Buffer.from(String(b));
  return x.length === y.length && crypto.timingSafeEqual(x, y);
}

var STATUSES = ['new', 'preparing', 'out', 'delivered', 'cancelled'];
var KEEP_DAYS = 60;
function key(code) { return 'order:' + code; }
// Bumped on every change, so the order desk can ask "anything new?" with one cheap read.
var REV = 'orders:rev';

module.exports = { configured: configured, redis: redis, send: send, body: body, query: query, ip: ip,
  str: str, num: num, same: same, REV: REV, STATUSES: STATUSES, KEEP: KEEP_DAYS * 86400, key: key };
