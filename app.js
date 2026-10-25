/* Southery storefront — menu data, tabs, cart, WhatsApp checkout.
   To update the menu, edit MENU below. price is in rupees.
   photo: false shows the Southery mark instead of a dish photo.
   Categories with list: true render as simple rows without photos. */

var WHATSAPP = '918610071212';

var CATEGORIES = [
  { id: 'biriyani', name: 'Biriyani',
    note: 'Mutton, fish and prawns biriyani are not on the menu right now.' },
  { id: 'malabar', name: 'Malabar dishes', note: 'Mutton stew is not on the menu right now.' },
  { id: 'boxes', name: 'Boxes' },
  { id: 'rice', name: 'Extras', list: true },
  { id: 'drinks', name: 'Drinks', list: true }
];

var MENU = [
  { id: 'chicken-dum-biriyani', cat: 'biriyani', name: 'Chicken Dum Biriyani', price: 279, tag: 'Signature',
    desc: 'Chicken and Kaima rice, sealed and dum cooked in their own steam. Fried onions and cashew on top, raita and pickle on the side.' },
  { id: 'beef-dum-biriyani', cat: 'biriyani', name: 'Beef Dum Biriyani', price: 309,
    desc: 'Slow-cooked beef layered with Kaima rice and left on dum until every grain carries the masala.' },

  { id: 'chicken-fry', cat: 'malabar', name: 'Chicken Fry', price: 199,
    desc: 'Chicken marinated in red chilli and spice, fried until crisp at the edges and juicy inside.' },
  { id: 'beef-fry', cat: 'malabar', name: 'Beef Fry', price: 229, photo: false,
    desc: 'Beef cooked tender, then fried dry with coconut slivers, shallots and curry leaves.' },
  { id: 'chicken-naadan-roast', cat: 'malabar', name: 'Chicken Naadan Roast', price: 219,
    desc: 'Chicken cooked down in a thick onion and tomato masala until it clings to every piece.' },
  { id: 'beef-roast', cat: 'malabar', name: 'Beef Roast', price: 249, tag: 'Most loved',
    desc: 'Beef roasted down slowly until dark at the edges, with coconut slivers and curry leaves.' },
  { id: 'chicken-varutharachathu', cat: 'malabar', name: 'Chicken Varutharachathu', price: 239,
    desc: 'Coconut and spices roasted slowly, ground fine, and simmered with chicken into a deep, nutty gravy.' },
  { id: 'beef-naadan-curry', cat: 'malabar', name: 'Beef Naadan Curry', price: 269,
    desc: 'Beef in a homestyle Kerala gravy. The one you order porotta for.' },
  { id: 'chicken-stew', cat: 'malabar', name: 'Chicken Stew', price: 249,
    desc: 'Chicken simmered gently in coconut milk with whole spices. Mild, fragrant, and made for appam.' },
  { id: 'beef-stew', cat: 'malabar', name: 'Beef Stew', price: 279,
    desc: 'Tender beef and vegetables in a light coconut milk stew, peppery and gentle.' },
  { id: 'vegetable-stew', cat: 'malabar', name: 'Vegetable Stew', price: 129, tag: 'Vegetarian',
    desc: 'Potato, carrot and beans in coconut milk, scented with green chilli and ginger.' },

  { id: 'ghee-rice-chicken-combo', cat: 'boxes', name: 'Ghee Rice Chicken Combo', price: 249,
    desc: 'Fragrant ghee rice with your choice of chicken curry. A full meal in one box.' },
  { id: 'ghee-rice-beef-combo', cat: 'boxes', name: 'Ghee Rice Beef Combo', price: 279,
    desc: 'Fragrant ghee rice with our beef curry. A full meal in one box.' },
  { id: 'biriyani-rice-chicken-combo', cat: 'boxes', name: 'Biriyani Rice Chicken Combo', price: 259,
    desc: 'Spiced biriyani rice paired with our chicken curry, for when you want both in one box.' },
  { id: 'biriyani-rice-beef-combo', cat: 'boxes', name: 'Biriyani Rice Beef Combo', price: 289,
    desc: 'Spiced biriyani rice paired with our beef curry, for when you want both in one box.' },
  { id: 'pathal-chicken-combo', cat: 'boxes', name: 'Neypathal Chicken Combo', price: 219,
    desc: 'Soft, thin neypathal with Chicken Varutharachathu.' },
  { id: 'pathal-beef-combo', cat: 'boxes', name: 'Neypathal Beef Combo', price: 249,
    desc: 'Soft, thin neypathal with our beef curry.' },
  { id: 'appam-chicken-combo', cat: 'boxes', name: 'Appam Chicken Combo', price: 209,
    desc: 'Lacy appam, crisp at the edges and soft in the middle, with your choice of chicken curry.' },
  { id: 'appam-beef-combo', cat: 'boxes', name: 'Appam Beef Combo', price: 239,
    desc: 'Lacy appam, crisp at the edges and soft in the middle, with our beef curry.' },
  { id: 'puttu-chicken-combo', cat: 'boxes', name: 'Puttu Chicken Combo', price: 189,
    desc: 'Steamed rice and coconut puttu with your choice of chicken curry to pour over.' },
  { id: 'puttu-beef-combo', cat: 'boxes', name: 'Puttu Beef Combo', price: 219,
    desc: 'Steamed rice and coconut puttu with our beef curry to pour over.' },
  { id: 'porotta-chicken-combo', cat: 'boxes', name: 'Porotta Chicken Combo', price: 229,
    desc: 'Layered, flaky Malabar porotta with your choice of chicken curry. Best pulled apart by hand.' },
  { id: 'porotta-beef-combo', cat: 'boxes', name: 'Porotta Beef Combo', price: 259,
    desc: 'Layered, flaky Malabar porotta with our beef curry. The Kerala favourite.' },
  { id: 'chapathi-chicken-combo', cat: 'boxes', name: 'Chapathi Chicken Combo', price: 189,
    desc: 'Soft chapathi with your choice of chicken curry. Lighter, and just as satisfying.' },
  { id: 'chapathi-beef-combo', cat: 'boxes', name: 'Chapathi Beef Combo', price: 219,
    desc: 'Soft chapathi with our beef curry. Lighter, and just as satisfying.' },

  { id: 'ghee-rice', cat: 'rice', name: 'Ghee Rice', price: 169, desc: 'Kaima rice cooked in ghee with whole spices and fried onions.' },
  { id: 'biriyani-rice', cat: 'rice', name: 'Biriyani Rice', price: 179, desc: 'Our dum biriyani rice on its own, to pair with any roast or curry.' },

  { id: 'mint-lemon', cat: 'drinks', name: 'Mint Lemon', price: 50, desc: 'Fresh lime and mint.' },
  { id: 'pineapple-lemon', cat: 'drinks', name: 'Pineapple Lemon', price: 50, desc: 'Pineapple with fresh lime.' },
  { id: 'pineapple-juice', cat: 'drinks', name: 'Pineapple', price: 169, desc: 'Cold pressed. No sugar, no water.' },
  { id: 'watermelon-juice', cat: 'drinks', name: 'Water Melon', price: 139, desc: 'Cold pressed. No sugar, no water.' },
  { id: 'melon-magic', cat: 'drinks', name: 'Melon Magic', price: 199, desc: 'A detox smoothie.' }
];


/* ---------- Ordering settings ---------- */

var UPI = { id: 'southerykitch26ms@fbl', name: 'Southery Kitchen LLP' };

// Kitchen location (Southery Kitchen pin on Google Maps), for the free-delivery radius.
var KITCHEN = { lat: 10.0235231, lng: 76.3064128 };
var FREE_KM = 3;

/* Customisation, matching Swiggy / Zomato.
   one: pick exactly one (first choice is selected by default).
   many: optional extras; max = how many of each a customer can add. */
var OPTION_SETS = {
  'chicken-curry': { title: 'Choose your curry', type: 'one', choices: [
    { id: 'chicken-varutharachathu', name: 'Chicken Varutharachathu', price: 0 },
    { id: 'chicken-stew', name: 'Chicken Stew', price: 10 }
  ] },
  'extra-puttu': { title: 'Extra puttu', type: 'many', max: 1, choices: [
    { id: 'extra-chiratta-puttu', name: 'Extra Chiratta Puttu', price: 30 }
  ] },
  'extra-pathal': { title: 'Extra pathal', type: 'many', max: 1, choices: [
    { id: 'extra-neypathal', name: 'Extra Neypathal', price: 21 }
  ] },
  'sides': { title: 'Extra sides', type: 'many', max: 9, choices: [
    { id: 'salad', name: 'Salad', price: 10 },
    { id: 'chammanthi', name: 'Chammanthi', price: 20 }
  ] }
};

// Which dishes get which options. Beef combos come with one fixed curry;
// the Neypathal Chicken Combo is served only with Chicken Varutharachathu.
var DISH_OPTIONS = {
  'puttu-chicken-combo': ['chicken-curry', 'extra-puttu'],
  'puttu-beef-combo': ['extra-puttu'],
  'ghee-rice-chicken-combo': ['chicken-curry'],
  'appam-chicken-combo': ['chicken-curry'],
  'porotta-chicken-combo': ['chicken-curry'],
  'chapathi-chicken-combo': ['chicken-curry'],
  'pathal-chicken-combo': ['extra-pathal'],
  'pathal-beef-combo': ['extra-pathal'],
  'chicken-dum-biriyani': ['sides'],
  'beef-dum-biriyani': ['sides']
};
MENU.forEach(function (d) { if (DISH_OPTIONS[d.id]) d.options = DISH_OPTIONS[d.id]; });

(function () {
  var byId = {}; MENU.forEach(function (d) { byId[d.id] = d; });
  var catById = {}; CATEGORIES.forEach(function (c) { catById[c.id] = c; });
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var rupee = function (n) { return '₹' + n.toLocaleString('en-IN'); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  function read(k, fallback) {
    try { var v = JSON.parse(localStorage.getItem(k) || 'null'); return v && typeof v === 'object' ? v : fallback; }
    catch (e) { return fallback; }
  }
  function write(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

  /* ---------- Cart model ----------
     cart = { key: { id, q, sel } }  where sel = { setId: { choiceId: qty } }
     key = dish id plus its selections, so different customisations are separate lines. */
  var cart = {};
  (function load() {
    var raw = read('southery-cart', {});
    Object.keys(raw).forEach(function (k) {
      var v = raw[k];
      if (typeof v === 'number') v = { id: k, q: v, sel: defaults(byId[k]) }; // older saved carts
      if (v && byId[v.id] && v.q > 0) cart[keyOf(v.id, v.sel)] = { id: v.id, q: v.q, sel: v.sel || {} };
    });
  })();
  function save() { write('southery-cart', cart); }

  function defaults(d) {
    var sel = {};
    (d && d.options || []).forEach(function (sid) {
      var set = OPTION_SETS[sid]; sel[sid] = {};
      if (set.type === 'one') sel[sid][set.choices[0].id] = 1;
    });
    return sel;
  }
  function keyOf(id, sel) {
    var parts = [id];
    Object.keys(sel || {}).sort().forEach(function (sid) {
      Object.keys(sel[sid]).sort().forEach(function (cid) { if (sel[sid][cid] > 0) parts.push(cid + 'x' + sel[sid][cid]); });
    });
    return parts.join('|');
  }
  function choice(sid, cid) {
    var set = OPTION_SETS[sid]; if (!set) return null;
    for (var i = 0; i < set.choices.length; i++) if (set.choices[i].id === cid) return set.choices[i];
    return null;
  }
  function unitPrice(line) {
    var p = byId[line.id].price;
    Object.keys(line.sel || {}).forEach(function (sid) {
      Object.keys(line.sel[sid]).forEach(function (cid) { var c = choice(sid, cid); if (c) p += c.price * line.sel[sid][cid]; });
    });
    return p;
  }
  function describe(line) {
    var bits = [];
    Object.keys(line.sel || {}).forEach(function (sid) {
      Object.keys(line.sel[sid]).forEach(function (cid) {
        var c = choice(sid, cid), n = line.sel[sid][cid];
        if (c && n > 0) bits.push(c.name + (n > 1 ? ' ×' + n : ''));
      });
    });
    return bits.join(', ');
  }
  function countOf(id) {
    return Object.keys(cart).reduce(function (n, k) { return n + (cart[k].id === id ? cart[k].q : 0); }, 0);
  }
  function addLine(id, sel, q) {
    var k = keyOf(id, sel);
    if (cart[k]) cart[k].q += q; else cart[k] = { id: id, q: q, sel: sel };
    save(); bump();
  }

  /* ---------- Tabs + dishes ---------- */
  var tabsEl = $('[data-tabs]'), dishesEl = $('[data-dishes]'), noteEl = $('[data-note]');
  var active = 'biriyani';

  CATEGORIES.forEach(function (c) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'tab'; b.setAttribute('role', 'tab'); b.id = 'tab-' + c.id;
    b.setAttribute('aria-controls', 'dishes'); b.dataset.cat = c.id; b.textContent = c.name;
    b.addEventListener('click', function () { active = c.id; renderDishes(); });
    tabsEl.appendChild(b);
  });
  dishesEl.id = 'dishes'; dishesEl.setAttribute('role', 'tabpanel');

  function photoSrc(d) { return d.photo === false ? null : '/assets/photos/' + d.id + '.jpg'; }
  function photo(d) {
    if (!photoSrc(d)) return '<div class="dish__photo dish__photo--mark"><img src="/favicon.svg" alt="" width="120" height="120">' + tag(d) + '</div>';
    return '<div class="dish__photo"><img src="' + photoSrc(d) + '" alt="' + esc(d.name) + '" loading="lazy" width="720" height="720">' + tag(d) + '</div>';
  }
  function tag(d) { return d.tag ? '<span class="dish__tag">' + d.tag + '</span>' : ''; }

  function renderDishes() {
    var cat = catById[active];
    $$('.tab', tabsEl).forEach(function (t) {
      var on = t.dataset.cat === active;
      t.setAttribute('aria-selected', on ? 'true' : 'false'); t.tabIndex = on ? 0 : -1;
    });
    dishesEl.setAttribute('aria-labelledby', 'tab-' + active);
    dishesEl.className = cat.list ? 'menu-list' : 'dishes';
    dishesEl.innerHTML = MENU.filter(function (d) { return d.cat === active; }).map(function (d) {
      var price = '<span class="dish__price">' + rupee(d.price) + (d.options ? '<small>Customisable</small>' : '') + '</span>';
      if (cat.list) {
        return '<div class="row"><div><h3>' + d.name + '</h3><p>' + d.desc + '</p></div>' +
          '<div class="row__buy">' + price + '<span class="dish__ctl" data-ctl="' + d.id + '"></span></div></div>';
      }
      return '<article class="dish">' + photo(d) +
        '<div class="dish__info"><h3>' + d.name + '</h3><p>' + d.desc + '</p></div>' +
        '<div class="dish__buy">' + price + '<span class="dish__ctl" data-ctl="' + d.id + '"></span></div></article>';
    }).join('');
    noteEl.hidden = !cat.note; noteEl.textContent = cat.note || '';
    renderControls();
  }

  tabsEl.addEventListener('keydown', function (e) {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    var i = CATEGORIES.findIndex(function (c) { return c.id === active; });
    i = (i + (e.key === 'ArrowRight' ? 1 : -1) + CATEGORIES.length) % CATEGORIES.length;
    active = CATEGORIES[i].id; renderDishes(); $('#tab-' + active).focus();
  });

  function stepper(attr, val, label, qty) {
    return '<span class="stepper"><button type="button" data-' + attr + '-dec="' + esc(val) + '" aria-label="Remove one ' + esc(label) + '">−</button>' +
      '<b aria-live="polite">' + qty + '</b><button type="button" data-' + attr + '-inc="' + esc(val) + '" aria-label="Add one more ' + esc(label) + '">+</button></span>';
  }

  // dishes without options: plain stepper on the card. Dishes with options: Add opens the sheet.
  function renderControls() {
    $$('[data-ctl]').forEach(function (slot) {
      var d = byId[slot.dataset.ctl], n = countOf(d.id);
      if (d.options) {
        slot.innerHTML = (n ? '<span class="dish__count">' + n + ' in order</span>' : '') +
          '<button type="button" class="btn btn--ivory btn--sm" data-custom="' + d.id + '" aria-label="Add ' + esc(d.name) + ', choose options">Add</button>';
      } else {
        var k = keyOf(d.id, {});
        slot.innerHTML = n ? stepper('line', k, d.name, n) : '<button type="button" class="btn btn--ivory btn--sm" data-line-inc="' + k + '" data-plain="' + d.id + '" aria-label="Add ' + esc(d.name) + '">Add</button>';
      }
    });
    renderCart();
  }

  function bump() {
    $$('.cart-count, .cart-float').forEach(function (el) {
      el.classList.remove('is-bump'); void el.offsetWidth; el.classList.add('is-bump');
    });
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-line-inc], [data-line-dec], [data-custom]');
    if (!t) return;
    if (t.dataset.custom) { openSheet(t.dataset.custom, t); return; }
    var inc = t.hasAttribute('data-line-inc'), k = inc ? t.dataset.lineInc : t.dataset.lineDec;
    var onCard = !!t.closest('[data-ctl]');
    if (inc) {
      if (!cart[k] && t.dataset.plain) cart[k] = { id: t.dataset.plain, q: 0, sel: {} };
      if (cart[k]) { cart[k].q += 1; bump(); }
    } else if (cart[k]) { cart[k].q -= 1; if (cart[k].q <= 0) delete cart[k]; }
    save(); renderControls();
    if (onCard) { // keep keyboard focus on the control the person was using
      var slot = $('[data-ctl="' + k.split('|')[0] + '"]');
      var f = slot && (slot.querySelector(inc ? '[data-line-inc]' : '[data-line-dec]') || slot.querySelector('button'));
      if (f) f.focus({ preventScroll: true });
    }
  });

  /* ---------- Customisation sheet ---------- */
  var sheet = $('[data-sheet]'), sheetBody = $('[data-sheet-body]'), sheetDish = null, sheetSel = null, sheetQty = 1, sheetReturn = null;

  function openSheet(id, from) {
    sheetDish = byId[id]; sheetSel = defaults(sheetDish); sheetQty = 1; sheetReturn = from;
    var src = photoSrc(sheetDish);
    $('[data-sheet-photo]').innerHTML = src ? '<img src="' + src + '" alt="" width="720" height="720">' : '<img class="mark" src="/favicon.svg" alt="" width="120" height="120">';
    $('[data-sheet-title]').textContent = sheetDish.name;
    $('[data-sheet-desc]').textContent = sheetDish.desc;
    sheetBody.innerHTML = sheetDish.options.map(function (sid) {
      var set = OPTION_SETS[sid];
      var head = '<legend>' + set.title + '<span>' + (set.type === 'one' ? 'Pick one' : set.max === 1 ? 'Optional, up to 1' : 'Optional') + '</span></legend>';
      return '<fieldset class="opt">' + head + set.choices.map(function (c, i) {
        var extra = c.price ? '+' + rupee(c.price) : 'Included';
        if (set.type === 'one') {
          return '<label class="opt__row"><input type="radio" name="' + sid + '" value="' + c.id + '"' + (i === 0 ? ' checked' : '') + '>' +
            '<span class="opt__name">' + c.name + '</span><span class="opt__price">' + extra + '</span></label>';
        }
        return '<div class="opt__row" data-extra="' + sid + ':' + c.id + '"><span class="opt__name">' + c.name + '</span>' +
          '<span class="opt__price">' + extra + '</span><span class="opt__ctl"></span></div>';
      }).join('') + '</fieldset>';
    }).join('');
    renderSheet();
    sheet.hidden = false; requestAnimationFrame(function () { sheet.classList.add('is-open'); });
    document.body.style.overflow = 'hidden';
    var first = sheetBody.querySelector('input, button'); (first || $('[data-sheet-close]')).focus();
  }
  function closeSheet() {
    sheet.classList.remove('is-open'); document.body.style.overflow = '';
    setTimeout(function () { sheet.hidden = true; }, 250);
    if (sheetReturn && document.body.contains(sheetReturn)) sheetReturn.focus();
  }
  function renderSheet() {
    $$('[data-extra]', sheetBody).forEach(function (row) {
      var p = row.dataset.extra.split(':'), n = (sheetSel[p[0]] || {})[p[1]] || 0, c = choice(p[0], p[1]);
      row.querySelector('.opt__ctl').innerHTML = n
        ? '<span class="stepper stepper--sm"><button type="button" data-x-dec="' + row.dataset.extra + '" aria-label="Remove one ' + c.name + '">−</button><b>' + n + '</b><button type="button" data-x-inc="' + row.dataset.extra + '" aria-label="Add one more ' + c.name + '"' + (n >= (OPTION_SETS[p[0]].max || 9) ? ' disabled' : '') + '>+</button></span>'
        : '<button type="button" class="btn btn--ghost btn--xs" data-x-inc="' + row.dataset.extra + '" aria-label="Add ' + c.name + '">Add</button>';
    });
    $('[data-sheet-qty]').textContent = sheetQty;
    $('[data-sheet-add]').textContent = 'Add to order  ' + rupee(unitPrice({ id: sheetDish.id, sel: sheetSel }) * sheetQty);
  }
  sheetBody.addEventListener('change', function (e) {
    if (e.target.type !== 'radio') return;
    var o = {}; o[e.target.value] = 1; sheetSel[e.target.name] = o; renderSheet();
  });
  sheetBody.addEventListener('click', function (e) {
    var b = e.target.closest('[data-x-inc], [data-x-dec]'); if (!b) return;
    var inc = b.hasAttribute('data-x-inc'), p = (inc ? b.dataset.xInc : b.dataset.xDec).split(':');
    var g = sheetSel[p[0]] = sheetSel[p[0]] || {};
    g[p[1]] = Math.max(0, Math.min(OPTION_SETS[p[0]].max || 9, (g[p[1]] || 0) + (inc ? 1 : -1))); if (!g[p[1]]) delete g[p[1]];
    renderSheet();
    var row = sheetBody.querySelector('[data-extra="' + p.join(':') + '"]');
    var f = row.querySelector(inc ? '[data-x-inc]' : '[data-x-dec]') || row.querySelector('button'); if (f) f.focus();
  });
  $('[data-sheet-more]').addEventListener('click', function () { sheetQty = Math.min(20, sheetQty + 1); renderSheet(); });
  $('[data-sheet-less]').addEventListener('click', function () { sheetQty = Math.max(1, sheetQty - 1); renderSheet(); });
  $('[data-sheet-add]').addEventListener('click', function () {
    addLine(sheetDish.id, JSON.parse(JSON.stringify(sheetSel)), sheetQty);
    renderControls(); closeSheet();
  });
  $$('[data-sheet-close]').forEach(function (b) { b.addEventListener('click', closeSheet); });

  /* ---------- Delivery ---------- */
  var where = read('southery-where', {}); // { zone: 'free' | 'porter' | 'unsure', lat, lng, km }
  var form = $('[data-checkout]');

  function km(a, b) {
    var R = 6371, r = Math.PI / 180, dLat = (b.lat - a.lat) * r, dLng = (b.lng - a.lng) * r;
    var h = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    return 2 * R * Math.asin(Math.sqrt(h));
  }
  function renderWhere() {
    var st = $('[data-where-status]');
    $$('input[name=zone]', form).forEach(function (r) { r.checked = r.value === where.zone; });
    if (where.km != null) {
      st.hidden = false;
      st.textContent = where.zone === 'free'
        ? 'You’re about ' + where.km.toFixed(1) + ' km from our kitchen. Delivery is free.'
        : 'You’re about ' + where.km.toFixed(1) + ' km away. We’ll send it with Porter and confirm the fare on WhatsApp.';
    } else st.hidden = true;
    $('[data-delivery-line]').textContent = where.zone === 'free' ? 'Free' : where.zone ? 'Porter fare, confirmed on WhatsApp' : 'Choose below';
  }
  $('[data-locate]').addEventListener('click', function () {
    var b = this, st = $('[data-where-status]');
    if (!navigator.geolocation) { st.hidden = false; st.textContent = 'Your browser can’t share location. Choose an option below.'; return; }
    b.disabled = true; b.textContent = 'Finding you…';
    navigator.geolocation.getCurrentPosition(function (p) {
      var me = { lat: p.coords.latitude, lng: p.coords.longitude }, d = km(KITCHEN, me);
      where = { zone: d <= FREE_KM ? 'free' : 'porter', lat: me.lat, lng: me.lng, km: d };
      write('southery-where', where); b.disabled = false; b.textContent = 'Location added'; renderWhere(); renderCart();
    }, function () {
      b.disabled = false; b.textContent = 'Use my location';
      st.hidden = false; st.textContent = 'We couldn’t get your location. Choose an option below.';
    }, { enableHighAccuracy: true, timeout: 10000 });
  });
  form.addEventListener('change', function (e) {
    if (e.target.name !== 'zone') return;
    where = { zone: e.target.value }; write('southery-where', where); renderWhere(); renderCart();
  });

  /* ---------- Cart drawer ---------- */
  function totals() {
    var ls = Object.keys(cart).map(function (k) { var l = cart[k]; return { k: k, d: byId[l.id], q: l.q, sel: l.sel, unit: unitPrice(l) }; });
    var n = 0, t = 0;
    ls.forEach(function (l) { n += l.q; t += l.q * l.unit; });
    return { ls: ls, n: n, t: t };
  }

  var sentEl = $('[data-sent]');
  function renderCart() {
    var s = totals(), sent = !sentEl.hidden;
    $$('[data-cart-count]').forEach(function (el) { el.textContent = s.n; });
    $$('[data-cart-total]').forEach(function (el) { el.textContent = rupee(s.t); });
    $$('[data-cart-word]').forEach(function (el) { el.textContent = s.n === 1 ? 'item' : 'items'; });
    $('.cart-float').hidden = s.n === 0;
    $('[data-empty]').hidden = s.n > 0 || sent;
    form.hidden = s.n === 0 || sent;
    $('.drawer__foot').hidden = sent;
    $('[data-send]').disabled = s.n === 0;
    $('[data-lines]').hidden = sent;
    $('[data-total-label]').textContent = where.zone === 'free' ? 'Total' : 'Food total';
    $('[data-lines]').innerHTML = s.ls.map(function (l) {
      var src = l.d.cat === 'rice' || l.d.cat === 'drinks' ? null : photoSrc(l.d);
      var img = src ? '<img src="' + src + '" alt="" width="64" height="64">' : '<span class="line__mark"><img src="/favicon.svg" alt="" width="40" height="40"></span>';
      var opts = describe(l);
      return '<li class="line">' + img + '<div><p>' + l.d.name + '</p>' + (opts ? '<small class="line__opts">' + esc(opts) + '</small>' : '') +
        '<small>' + rupee(l.unit) + ' each</small></div>' + stepper('line', l.k, l.d.name, l.q) + '</li>';
    }).join('');
  }

  var who = read('southery-customer', {});
  if (who.name) form.name.value = who.name;
  if (who.address) form.address.value = who.address;

  var drawer = $('[data-drawer]'), lastFocus = null;
  function openCart() {
    lastFocus = document.activeElement; drawer.hidden = false;
    requestAnimationFrame(function () { drawer.classList.add('is-open'); });
    document.body.style.overflow = 'hidden'; $('.drawer__head .icon-btn').focus();
  }
  function closeCart() {
    drawer.classList.remove('is-open'); document.body.style.overflow = '';
    setTimeout(function () { drawer.hidden = true; }, 250); if (lastFocus) lastFocus.focus();
  }
  $$('[data-open-cart]').forEach(function (b) { b.addEventListener('click', openCart); });
  $$('[data-close-cart]').forEach(function (b) { b.addEventListener('click', closeCart); });

  function trap(e, panel) {
    var f = $$('button:not([disabled]), input, textarea, a[href]', panel).filter(function (el) { return el.offsetParent; });
    if (!f.length) return;
    if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
  }
  document.addEventListener('keydown', function (e) {
    if (!sheet.hidden) { if (e.key === 'Escape') closeSheet(); if (e.key === 'Tab') trap(e, $('.sheet__panel')); return; }
    if (drawer.hidden) return;
    if (e.key === 'Escape') closeCart();
    if (e.key === 'Tab') trap(e, $('.drawer__panel'));
  });

  /* ---------- Send + pay ---------- */
  function orderCode() {
    var d = new Date(), p = function (n) { return (n < 10 ? '0' : '') + n; };
    return 'SO-' + p(d.getDate()) + p(d.getMonth() + 1) + '-' + Math.floor(1000 + Math.random() * 9000);
  }
  function upiLink(amount, code) {
    var q = 'pa=' + UPI.id + '&pn=' + encodeURIComponent(UPI.name) + '&cu=INR';
    if (amount) q += '&am=' + amount.toFixed(2) + '&tn=' + encodeURIComponent('Southery ' + code);
    return 'upi://pay?' + q;
  }
  function qrSvg(text) {
    if (typeof qrcode !== 'function') return '';
    var qr = qrcode(0, 'M'); qr.addData(text); qr.make();
    return qr.createSvgTag({ cellSize: 4, margin: 2, scalable: true });
  }

  $('[data-send]').addEventListener('click', function () {
    var err = $('[data-error]'), s = totals();
    var name = form.name.value.trim(), addr = form.address.value.trim(), note = form.note.value.trim();
    var problem = !name ? ['Add your name so we know who the order is for.', form.name]
      : !addr ? ['Add a delivery address so we know where to bring it.', form.address]
      : !where.zone ? ['Tell us roughly where you are, so we can sort delivery.', $('[data-locate]')] : null;
    if (problem) { err.hidden = false; err.textContent = problem[0]; problem[1].focus(); return; }
    err.hidden = true;
    write('southery-customer', { name: name, address: addr });

    var code = orderCode(), free = where.zone === 'free';
    var msg = ['Hi Southery, I’d like to place an order.', 'Order ' + code, ''];
    s.ls.forEach(function (l) {
      msg.push(l.q + ' × ' + l.d.name + ' — ' + rupee(l.q * l.unit));
      var o = describe(l); if (o) msg.push('    ' + o);
    });
    msg.push('', (free ? 'Total: ' : 'Food total: ') + rupee(s.t));
    msg.push('Delivery: ' + (free ? 'Free (within 3 km)' : where.zone === 'porter' ? 'Porter, please confirm the fare' : 'Not sure of distance, please confirm'));
    msg.push('Payment: UPI' + (free ? ', paying now' : ', after you confirm the total'), '');
    msg.push('Name: ' + name, 'Address: ' + addr);
    if (where.lat != null) msg.push('Location: https://maps.google.com/?q=' + where.lat.toFixed(6) + ',' + where.lng.toFixed(6));
    if (note) msg.push('Note: ' + note);
    window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(msg.join('\n')), '_blank', 'noopener');

    // payment step
    var pay = $('[data-pay]');
    if (free) {
      var link = upiLink(s.t, code);
      $('[data-sent-title]').textContent = 'Your order is in. Now pay ' + rupee(s.t) + '.';
      $('[data-sent-text]').textContent = 'Press send in WhatsApp if you haven’t yet, then pay by UPI. We start cooking once the payment comes through.';
      pay.innerHTML = '<a class="btn btn--gold btn--block pay__app" href="' + link + '">Pay ' + rupee(s.t) + ' with a UPI app</a>' +
        '<div class="pay__qr"><div class="pay__code">' + qrSvg(link) + '</div><p>Or scan with GPay, PhonePe, Paytm or any UPI app.</p></div>';
    } else {
      $('[data-sent-title]').textContent = 'Your order is on its way to us.';
      $('[data-sent-text]').textContent = 'Press send in WhatsApp if you haven’t yet. We’ll reply with the Porter fare and your final total, then you can pay by UPI.';
      pay.innerHTML = '<div class="pay__qr"><div class="pay__code">' + qrSvg(upiLink()) + '</div><p>Keep this for later. Scan it once we confirm your total.</p></div>';
    }
    pay.insertAdjacentHTML('beforeend', '<p class="pay__id">UPI ID <b>' + UPI.id + '</b> <button type="button" class="btn btn--ghost btn--xs" data-copy-upi>Copy</button></p><p class="pay__ref">Order reference ' + code + '</p>');
    sentEl.hidden = false; renderCart(); $('[data-sent-title]').focus();
  });

  sentEl.addEventListener('click', function (e) {
    var b = e.target.closest('[data-copy-upi]'); if (!b) return;
    var done = function () { b.textContent = 'Copied'; };
    if (navigator.clipboard) navigator.clipboard.writeText(UPI.id).then(done, function () {}); else done();
  });

  $('[data-restart]').addEventListener('click', function () {
    cart = {}; save(); form.note.value = ''; sentEl.hidden = true; $('[data-pay]').innerHTML = '';
    renderControls(); closeCart();
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
  });

  renderWhere();
  renderDishes();
})();
