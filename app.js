/* Southery storefront — menu data, tabs, cart, WhatsApp checkout.
   To update the menu, edit MENU below. price is in rupees.
   photo: false shows the Southery mark instead of a dish photo.
   Categories with list: true render as simple rows without photos. */

var WHATSAPP = '918610071212';

var CATEGORIES = [
  { id: 'biriyani', name: 'Biriyani',
    note: 'Mutton, fish and prawns biriyani are available only when you order directly from us. Message us on WhatsApp for fish and prawns sizes and prices.' },
  { id: 'malabar', name: 'Malabar dishes', note: 'Mutton stew is made to order. Message us on WhatsApp for the price.' },
  { id: 'boxes', name: 'Boxes' },
  { id: 'rice', name: 'Extras', list: true },
  { id: 'drinks', name: 'Drinks', list: true }
];

var MENU = [
  { id: 'chicken-dum-biriyani', cat: 'biriyani', name: 'Chicken Dum Biriyani', price: 299, best: true,
    desc: 'Chicken and Kaima rice, sealed and dum cooked in their own steam. Fried onions and cashew on top, raita and pickle on the side.' },
  { id: 'beef-dum-biriyani', cat: 'biriyani', name: 'Beef Dum Biriyani', price: 329, best: true,
    desc: 'Slow-cooked beef layered with Kaima rice and left on dum until every grain carries the masala.' },
  { id: 'mutton-dum-biriyani', cat: 'biriyani', name: 'Mutton Dum Biriyani', price: 469,
    desc: 'Tender mutton and Kaima rice, cooked low under a sealed lid. Deep, rich and worth the wait.' },
  { id: 'fish-biriyani', cat: 'biriyani', name: 'Fish Biriyani', price: null,
    desc: 'A masala-fried fish fillet laid over fragrant Kaima rice.' },
  { id: 'prawns-biriyani', cat: 'biriyani', name: 'Prawns Biriyani', price: null,
    desc: 'Prawns cooked in a spiced masala and folded through Kaima rice.' },

  { id: 'chicken-naadan-fry', cat: 'malabar', name: 'Chicken Fry', price: 219, best: true,
    desc: 'Chicken marinated in red chilli and spice, fried until crisp at the edges and juicy inside.' },
  { id: 'beef-naadan-fry', cat: 'malabar', name: 'Beef Naadan Fry', price: 249,
    desc: 'Beef cooked tender, then fried dry with coconut slivers, shallots and curry leaves.' },
  { id: 'chicken-naadan-roast', cat: 'malabar', name: 'Chicken Naadan Roast', price: 239,
    desc: 'Chicken cooked down in a thick onion and tomato masala until it clings to every piece.' },
  { id: 'beef-roast', cat: 'malabar', name: 'Beef Roast', price: 259, best: true,
    desc: 'Beef roasted down slowly until dark at the edges, with coconut slivers and curry leaves.' },
  { id: 'chicken-varutharachathu', cat: 'malabar', name: 'Chicken Varutharachathu', price: 259,
    desc: 'Coconut and spices roasted slowly, ground fine, and simmered with chicken into a deep, nutty gravy.' },
  { id: 'beef-naadan-curry', cat: 'malabar', name: 'Beef Naadan Curry', price: 289,
    desc: 'Beef in a homestyle Kerala gravy. The one you order porotta for.' },
  { id: 'chicken-stew', cat: 'malabar', name: 'Chicken Stew', price: 269,
    desc: 'Chicken simmered gently in coconut milk with whole spices. Mild, fragrant, and made for appam.' },
  { id: 'beef-stew', cat: 'malabar', name: 'Beef Stew', price: 279,
    desc: 'Tender beef and vegetables in a light coconut milk stew, peppery and gentle.' },
  { id: 'mutton-stew', cat: 'malabar', name: 'Mutton Stew', price: null, ask: 'Ask for price',
    desc: 'Mutton simmered slowly in coconut milk with pepper, ginger and curry leaves.' },
  { id: 'vegetable-stew', cat: 'malabar', name: 'Vegetable Stew', price: 149, veg: true,
    desc: 'Potato, carrot and beans in coconut milk, scented with green chilli and ginger.' },

  { id: 'ghee-rice-chicken-combo', cat: 'boxes', name: 'Ghee Rice Chicken Combo', price: 269,
    desc: 'Fragrant ghee rice with your choice of chicken curry. A full meal in one box.' },
  { id: 'ghee-rice-beef-combo', cat: 'boxes', name: 'Ghee Rice Beef Combo', price: 289,
    desc: 'Fragrant ghee rice with our beef curry. A full meal in one box.' },
  { id: 'biriyani-rice-chicken-combo', cat: 'boxes', name: 'Biriyani Rice Chicken Combo', price: 279,
    desc: 'Spiced biriyani rice paired with our chicken curry, for when you want both in one box.' },
  { id: 'biriyani-rice-beef-combo', cat: 'boxes', name: 'Biriyani Rice Beef Combo', price: 299,
    desc: 'Spiced biriyani rice paired with our beef curry, for when you want both in one box.' },
  { id: 'pathal-chicken-combo', cat: 'boxes', name: 'Neypathal Chicken Combo', price: 239, best: true,
    desc: 'Soft, thin neypathal with Chicken Varutharachathu.' },
  { id: 'pathal-beef-combo', cat: 'boxes', name: 'Neypathal Beef Combo', price: 269,
    desc: 'Soft, thin neypathal with our beef curry.' },
  { id: 'appam-chicken-combo', cat: 'boxes', name: 'Appam Chicken Combo', price: 229,
    desc: 'Lacy appam, crisp at the edges and soft in the middle, with your choice of chicken curry.' },
  { id: 'appam-beef-combo', cat: 'boxes', name: 'Appam Beef Combo', price: 259,
    desc: 'Lacy appam, crisp at the edges and soft in the middle, with our beef curry.' },
  { id: 'puttu-chicken-combo', cat: 'boxes', name: 'Puttu Chicken Combo', price: 209,
    desc: 'Steamed rice and coconut puttu with your choice of chicken curry to pour over.' },
  { id: 'puttu-beef-combo', cat: 'boxes', name: 'Puttu Beef Combo', price: 239,
    desc: 'Steamed rice and coconut puttu with our beef curry to pour over.' },
  { id: 'porotta-chicken-combo', cat: 'boxes', name: 'Porotta Chicken Combo', price: 249,
    desc: 'Layered, flaky Malabar porotta with your choice of chicken curry. Best pulled apart by hand.' },
  { id: 'porotta-beef-combo', cat: 'boxes', name: 'Porotta Beef Combo', price: 279,
    desc: 'Layered, flaky Malabar porotta with our beef curry. The Kerala favourite.' },
  { id: 'chapathi-chicken-combo', cat: 'boxes', name: 'Chapathi Chicken Combo', price: 209,
    desc: 'Soft chapathi with your choice of chicken curry. Lighter, and just as satisfying.' },
  { id: 'chapathi-beef-combo', cat: 'boxes', name: 'Chapathi Beef Combo', price: 239,
    desc: 'Soft chapathi with our beef curry. Lighter, and just as satisfying.' },

  { id: 'ghee-rice', cat: 'rice', name: 'Ghee Rice', price: 189, desc: 'Kaima rice cooked in ghee with whole spices and fried onions.' },
  { id: 'biriyani-rice', cat: 'rice', name: 'Biriyani Rice', price: 199, desc: 'Our dum biriyani rice on its own, to pair with any roast or curry.' },

  { id: 'mint-lemon', cat: 'drinks', name: 'Mint Lemon', price: 60, desc: 'Fresh lime and mint.' },
  { id: 'pineapple-lemon', cat: 'drinks', name: 'Pineapple Lemon', price: 70, desc: 'Pineapple with fresh lime.' },
  { id: 'pineapple-juice', cat: 'drinks', name: 'Pineapple', price: 179, desc: 'Cold pressed. No sugar, no water.' },
  { id: 'watermelon-juice', cat: 'drinks', name: 'Water Melon', price: 159, desc: 'Cold pressed. No sugar, no water.' },
  { id: 'melon-magic', cat: 'drinks', name: 'Melon Magic', price: 229, desc: 'A detox smoothie.' }
];


/* ---------- Ordering settings ---------- */

var UPI = { id: 'southerykitch26ms@fbl', name: 'Southery Kitchen LLP' };

// Kitchen location (Southery Kitchen pin on Google Maps), for the free-delivery radius.
var KITCHEN = { lat: 10.0235231, lng: 76.3064128 };
var FREE_KM = 3;

// Opening hours, Kochi time (IST): 11 am to 11 pm, closed on Mondays (day 1). Also in index.html (visit section,
// FAQ and JSON-LD) and scripts/llms-head.md: keep them in step.
var HOURS = { open: 11 * 60, close: 23 * 60, closedDay: 1 };

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
  var RENAMED = { 'chicken-fry': 'chicken-naadan-fry', 'beef-fry': 'beef-naadan-fry' }; // carts saved before the rename
  (function load() {
    var raw = read('southery-cart', {});
    Object.keys(raw).forEach(function (k) {
      var v = raw[k];
      if (typeof v === 'number') v = { id: k, q: v, sel: defaults(byId[RENAMED[k] || k]) }; // older saved carts
      if (v && RENAMED[v.id]) v.id = RENAMED[v.id];
      if (v && byId[v.id] && byId[v.id].price != null && v.q > 0) cart[keyOf(v.id, v.sel)] = { id: v.id, q: v.q, sel: v.sel || {} };
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
    // WebP at 480 and 720 wide (made from the JPG of the same name); the JPG stays as the fallback
    var base = '/assets/photos/' + d.id;
    return '<div class="dish__photo"><img src="' + photoSrc(d) + '" srcset="' + base + '-480.webp 480w, ' + base + '-720.webp 720w" sizes="(max-width: 560px) 150px, 440px" alt="' + esc(d.name) + '" loading="lazy" decoding="async" width="720" height="720">' + tag(d) + '</div>';
  }
  function tag(d) {
    if (d.best) return '<span class="dish__tag dish__tag--best">Best Seller</span>';
    if (d.veg) return '<span class="dish__tag dish__tag--best">Veg</span>';
    return d.tag ? '<span class="dish__tag">' + d.tag + '</span>' : '';
  }

  function renderDishes() {
    var cat = catById[active];
    $$('.tab', tabsEl).forEach(function (t) {
      var on = t.dataset.cat === active;
      t.setAttribute('aria-selected', on ? 'true' : 'false'); t.tabIndex = on ? 0 : -1;
    });
    dishesEl.setAttribute('aria-labelledby', 'tab-' + active);
    dishesEl.className = cat.list ? 'menu-list' : 'dishes';
    dishesEl.innerHTML = MENU.filter(function (d) { return d.cat === active; }).map(function (d) {
      var price = d.price == null ? (d.ask ? '<span class="dish__price dish__price--ask">' + d.ask + '</span>' : '<span class="dish__price dish__price--ask">Price on request<small>Direct orders only</small></span>') : '<span class="dish__price">' + rupee(d.price) + (d.options ? '<small>Customisable</small>' : '') + '</span>';
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
      if (d.price == null) {
        slot.innerHTML = '<a class="btn btn--ghost btn--sm" href="https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent('Hi Southery, I’d like to order ' + d.name + '. What sizes and prices do you have today?') + '" target="_blank" rel="noopener" aria-label="Ask on WhatsApp about ' + esc(d.name) + '">Ask on WhatsApp</a>';
        return;
      }
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
        : 'You’re about ' + where.km.toFixed(1) + ' km away. We’ll send it with Porter once your payment comes through, and you pay the delivery fare to the rider by UPI.';
    } else st.hidden = true;
    $('[data-delivery-line]').textContent = where.zone === 'free' ? 'Free' : where.zone === 'porter' ? 'Paid to the Porter rider' : where.zone ? 'Free within 3 km, or paid to the rider' : 'Choose below';
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

  var sentEl = $('[data-sent]'), pendEl = $('[data-pending]'), notice = $('[data-notice]');
  function renderCart() {
    var s = totals(), sent = !sentEl.hidden || !pendEl.hidden;
    if (s.n === 0) notice.hidden = true;
    $$('[data-cart-count]').forEach(function (el) { el.textContent = s.n; });
    $$('[data-cart-total]').forEach(function (el) { el.textContent = rupee(s.t); });
    $$('[data-cart-word]').forEach(function (el) { el.textContent = s.n === 1 ? 'item' : 'items'; });
    $('.cart-float').hidden = s.n === 0;
    var fab = $('[data-menu-fab]'); if (fab) fab.classList.toggle('has-cart', s.n > 0);
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
  if (who.phone) form.phone.value = who.phone;

  var drawer = $('[data-drawer]'), lastFocus = null;
  function openCart() {
    if (totals().n > 0) loadQR(); // warm the QR library while they fill in their details
    lastFocus = document.activeElement; drawer.hidden = false;
    requestAnimationFrame(function () { drawer.classList.add('is-open'); });
    document.body.style.overflow = 'hidden'; $('.drawer__head .icon-btn').focus();
  }
  function closeCart(keepPlace) {
    drawer.classList.remove('is-open'); document.body.style.overflow = '';
    setTimeout(function () { drawer.hidden = true; }, 250);
    if (keepPlace !== true && lastFocus) lastFocus.focus();
  }
  // "Add a dish from the menu" (empty cart) and "Add more from the menu" (not-sent notice)
  // close the cart and take you to the menu
  $$('[data-go-menu]').forEach(function (a) { a.addEventListener('click', function (e) {
    e.preventDefault(); closeCart(true);
    var menu = $('#menu'), title = $('#menu-title');
    menu.scrollIntoView({ behavior: 'smooth', block: 'start' });
    title.setAttribute('tabindex', '-1'); title.focus({ preventScroll: true });
  }); });
  $$('[data-open-cart]').forEach(function (b) { b.addEventListener('click', openCart); });
  $$('[data-close-cart]').forEach(function (b) { b.addEventListener('click', function () { closeCart(); }); });

  function trap(e, panel) {
    var f = $$('button:not([disabled]), input, textarea, a[href]', panel).filter(function (el) { return el.offsetParent; });
    if (!f.length) return;
    if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
  }
  /* ---------- Menu download dialog (footer link) ---------- */
  var menuDl = $('[data-menu-dl]'), menuDlFrom = null;
  function openMenuDl(from) {
    menuDlFrom = from; menuDl.hidden = false;
    requestAnimationFrame(function () { menuDl.classList.add('is-open'); });
    document.body.style.overflow = 'hidden';
    $('[data-menu-dl-go]').focus();
  }
  function closeMenuDl() {
    menuDl.classList.remove('is-open'); document.body.style.overflow = '';
    setTimeout(function () { menuDl.hidden = true; }, 250);
    if (menuDlFrom) menuDlFrom.focus();
  }
  if (menuDl) {
    $$('[data-menu-open]').forEach(function (a) {
      a.addEventListener('click', function (e) { e.preventDefault(); openMenuDl(a); });
    });
    $$('[data-menu-dl-close]', menuDl).forEach(function (b) { b.addEventListener('click', closeMenuDl); });
    // The download starts from the link itself; close the dialog just after.
    $('[data-menu-dl-go]').addEventListener('click', function () { setTimeout(closeMenuDl, 300); });
  }

  document.addEventListener('keydown', function (e) {
    if (menuDl && !menuDl.hidden) { if (e.key === 'Escape') closeMenuDl(); if (e.key === 'Tab') trap(e, $('.sheet__panel', menuDl)); return; }
    if (!sheet.hidden) { if (e.key === 'Escape') closeSheet(); if (e.key === 'Tab') trap(e, $('.sheet__panel')); return; }
    if (drawer.hidden) return;
    if (e.key === 'Escape') closeCart();
    if (e.key === 'Tab') trap(e, $('.drawer__panel'));
  });

  /* ---------- Send + pay ---------- */
  function rand(n, abc) {
    var out = '', a = new Uint32Array(n);
    if (window.crypto && crypto.getRandomValues) crypto.getRandomValues(a); else for (var i = 0; i < n; i++) a[i] = Math.random() * 4294967296;
    for (var j = 0; j < n; j++) out += abc.charAt(a[j] % abc.length);
    return out;
  }
  function orderCode() {
    var d = new Date(), p = function (n) { return (n < 10 ? '0' : '') + n; };
    return 'SO-' + p(d.getDate()) + p(d.getMonth() + 1) + '-' + rand(5, 'ABCDEFGHJKMNPQRSTUVWXYZ23456789');
  }
  function trackUrl(p) { return location.origin + '/track?o=' + p.code + '&t=' + p.token; }

  // Orders are also saved to our order desk (southery.cloud/kitchen) once storage is set up on Vercel.
  // Until then this stays false and checkout works exactly as before (WhatsApp only).
  var ordersOn = false;
  if (window.fetch) fetch('/api/orders').then(function (r) { return r.json(); }).then(function (j) { ordersOn = !!j.on; }, function () {});
  function api(data) {
    if (!ordersOn) return;
    try { fetch('/api/orders', { method: 'POST', keepalive: true, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }); } catch (e) {}
  }
  function upiLink(amount, code) {
    var q = 'pa=' + UPI.id + '&pn=' + encodeURIComponent(UPI.name) + '&cu=INR';
    if (amount) q += '&am=' + amount.toFixed(2) + '&tn=' + encodeURIComponent('Southery ' + code);
    return 'upi://pay?' + q;
  }
  // The QR library (56 KB) loads only when a payment step is about to show, not on every visit
  var qrWait = null;
  function loadQR(cb) {
    if (typeof qrcode === 'function') { if (cb) cb(); return; }
    if (!qrWait) {
      qrWait = [];
      var sc = document.createElement('script'); sc.src = '/vendor/qrcode.js'; sc.async = true;
      sc.onload = function () { var w = qrWait; qrWait = null; w.forEach(function (f) { f(); }); };
      sc.onerror = function () { qrWait = null; };
      document.head.appendChild(sc);
    }
    if (cb && qrWait) qrWait.push(cb);
  }
  function qrSvg(text) {
    if (typeof qrcode !== 'function') return '';
    var qr = qrcode(0, 'M'); qr.addData(text); qr.make();
    return qr.createSvgTag({ cellSize: 4, margin: 2, scalable: true });
  }

  $('[data-send]').addEventListener('click', function () {
    var err = $('[data-error]'), s = totals();
    var name = form.name.value.trim(), phone = form.phone.value.trim(), addr = form.address.value.trim(), note = form.note.value.trim();
    var problem = !name ? ['Add your name so we know who the order is for.', form.name]
      : phone.replace(/\D/g, '').length < 10 ? ['Add a phone number so our rider can reach you.', form.phone]
      : !addr ? ['Add a delivery address so we know where to bring it.', form.address]
      : !where.zone ? ['Tell us roughly where you are, so we can sort delivery.', $('[data-locate]')] : null;
    if (problem) { err.hidden = false; err.textContent = problem[0]; problem[1].focus(); return; }
    err.hidden = true;
    write('southery-customer', { name: name, phone: phone, address: addr });

    var code = orderCode(), free = where.zone === 'free', token = rand(20, 'abcdefghijkmnpqrstuvwxyz23456789');
    var track = ordersOn ? trackUrl({ code: code, token: token }) : null;
    var msg = ['Hi Southery, I’d like to place an order.', 'Order ' + code, ''];
    s.ls.forEach(function (l) {
      msg.push(l.q + ' × ' + l.d.name + ' — ' + rupee(l.q * l.unit));
      var o = describe(l); if (o) msg.push('    ' + o);
    });
    msg.push('', (free ? 'Total: ' : 'Food total: ') + rupee(s.t));
    msg.push('Delivery: ' + (free ? 'Free (within 3 km)' : where.zone === 'porter' ? 'Porter. I’ll pay the fare to the rider' : 'Not sure of the distance (Porter beyond 3 km, fare paid to the rider)'));
    msg.push('Payment: UPI' + (free ? ', paying now' : ', after you confirm the total'), '');
    msg.push('Name: ' + name, 'Phone: ' + phone, 'Address: ' + addr);
    if (where.lat != null) msg.push('Location: https://maps.google.com/?q=' + where.lat.toFixed(6) + ',' + where.lng.toFixed(6));
    if (note) msg.push('Note: ' + note);
    if (track) msg.push('', 'Track this order: ' + track);
    window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(msg.join('\n')), '_blank', 'noopener');

    // We can't see whether they pressed send inside WhatsApp, so ask before showing the payment step.
    write('southery-pending', { code: code, free: free, token: track ? token : null });
    api({ code: code, token: token, name: name, phone: phone, address: addr, note: note, zone: where.zone,
      km: where.km, lat: where.lat, lng: where.lng, total: s.t,
      items: s.ls.map(function (l) { return { q: l.q, name: l.d.name, opts: describe(l), amount: l.q * l.unit }; }) });
    notice.hidden = true; pendEl.hidden = false; renderCart();
    $('.drawer__body').scrollTop = 0; $('[data-pending-title]').focus({ preventScroll: true });
  });

  function showPaid(code, free, token) {
    var s = totals();
    var pay = $('[data-pay]');
    // Everyone pays for the food now. Beyond 3 km we book Porter once that payment comes through,
    // and the customer pays the delivery fare to the rider (UPI on delivery).
    var link = upiLink(s.t, code);
    $('[data-sent-title]').textContent = 'Your order is in. Now pay ' + rupee(s.t) + '.';
    $('[data-sent-text]').textContent = free
      ? 'Press send in WhatsApp, then pay by UPI. We start cooking once it comes through.'
      : 'Press send in WhatsApp, then pay for your food by UPI. We start cooking and book Porter once it comes through. Pay the delivery fare to the rider.';
    pay.innerHTML = '<a class="btn btn--gold btn--block pay__app" href="' + link + '">Pay ' + rupee(s.t) + ' with a UPI app</a>' +
      '<div class="pay__qr"><div class="pay__code" data-qr>' + qrSvg(link) + '</div><p>Or scan with GPay, PhonePe, Paytm or any UPI app.</p></div>';
    loadQR(function () { var q = $('[data-qr]'); if (q && !q.firstChild) q.innerHTML = qrSvg(link); });
    pay.insertAdjacentHTML('beforeend', '<p class="pay__id">UPI ID <b>' + UPI.id + '</b> <button type="button" class="btn btn--ghost btn--xs" data-copy-upi>Copy</button></p><p class="pay__ref">Order reference ' + code + '</p>');
    var claimed = (read('southery-pending', null) || {}).claimed;
    pay.insertAdjacentHTML('beforeend', '<div class="pay__proof"><button type="button" class="btn btn--ghost btn--block" data-paid-proof data-code="' + code + '" data-amount="' + s.t + '"' + (claimed ? ' hidden' : '') + '>I’ve paid. Send the screenshot</button>' +
      '<p data-proof-note' + (claimed ? '' : ' hidden') + '>Thank you. Attach your payment screenshot in WhatsApp and send it. We’ll confirm once the payment reaches us.</p></div>');
    if (token) pay.insertAdjacentHTML('beforeend', '<a class="btn btn--ghost btn--block pay__track" href="' + trackUrl({ code: code, token: token }) + '" target="_blank" rel="noopener">Follow your order</a>');
    pendEl.hidden = true; sentEl.hidden = false; renderCart(); $('.drawer__body').scrollTop = 0; $('[data-sent-title]').focus({ preventScroll: true });
  }

  $('[data-pending-yes]').addEventListener('click', function () {
    var p = read('southery-pending', null) || { code: orderCode(), free: where.zone === 'free' };
    p.sent = true; write('southery-pending', p);
    if (p.token) api({ answer: true, code: p.code, token: p.token });
    showPaid(p.code, p.free, p.token);
  });
  $('[data-pending-no]').addEventListener('click', function () {
    var p = read('southery-pending', null);
    if (p && p.token) api({ answer: false, code: p.code, token: p.token });
    try { localStorage.removeItem('southery-pending'); } catch (e) {}
    pendEl.hidden = true; notice.hidden = false; renderCart();
    $('.drawer__body').scrollTop = 0; notice.setAttribute('tabindex', '-1'); notice.focus({ preventScroll: true });
  });
  // Came back later (reload or a new visit) with an unanswered order: ask again when the cart opens
  // (or, if they already said Yes, show the payment step again)
  (function () {
    var p = read('southery-pending', null);
    if (!p || totals().n === 0) return;
    if (p.sent) showPaid(p.code, p.free, p.token); else { pendEl.hidden = false; renderCart(); }
  })();

  sentEl.addEventListener('click', function (e) {
    // "I've paid. Send the screenshot": open our WhatsApp chat ready for the screenshot,
    // and tell the order desk the customer says they've paid
    var pp = e.target.closest('[data-paid-proof]');
    if (pp) {
      var code = pp.dataset.code, amt = pp.dataset.amount;
      var text = 'Hi Southery, I’ve paid ' + (amt ? rupee(Number(amt)) + ' ' : '') + 'for order ' + code + '. Here is the payment screenshot.';
      window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
      var p = read('southery-pending', null);
      if (p) { p.claimed = true; write('southery-pending', p); if (p.token) api({ claim: 'paid', code: p.code, token: p.token }); }
      pp.hidden = true; var note = $('[data-proof-note]'); note.hidden = false; note.setAttribute('tabindex', '-1'); note.focus({ preventScroll: true });
      return;
    }
    var b = e.target.closest('[data-copy-upi]'); if (!b) return;
    var done = function () { b.textContent = 'Copied'; };
    if (navigator.clipboard) navigator.clipboard.writeText(UPI.id).then(done, function () {}); else done();
  });

  $('[data-restart]').addEventListener('click', function () {
    cart = {}; save(); form.note.value = ''; sentEl.hidden = true; $('[data-pay]').innerHTML = '';
    try { localStorage.removeItem('southery-pending'); } catch (e) {}
    renderControls(); closeCart();
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
  });

  /* ---------- Floating Menu button ---------- */
  var fab = $('[data-menu-fab]'), pop = $('[data-menu-pop]'), tog = $('[data-menu-toggle]');
  $('[data-menu-list]').innerHTML = CATEGORIES.map(function (c) {
    var n = MENU.filter(function (d) { return d.cat === c.id; }).length;
    return '<li><button type="button" data-jump="' + c.id + '">' + c.name + '<small>' + n + '</small></button></li>';
  }).join('');
  function setPop(open) {
    pop.hidden = !open; tog.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) pop.querySelector('button').focus();
  }
  tog.addEventListener('click', function () { setPop(pop.hidden); });
  pop.addEventListener('click', function (e) {
    var b = e.target.closest('[data-jump]'); if (!b) return;
    active = b.dataset.jump; renderDishes(); setPop(false);
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
    $('#tab-' + active).focus({ preventScroll: true });
  });
  document.addEventListener('click', function (e) { if (!pop.hidden && !fab.contains(e.target)) setPop(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !pop.hidden) { setPop(false); tog.focus(); } });
  // show the button once the visitor has scrolled past the hero
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (es) { fab.hidden = es[0].isIntersecting; if (!fab.hidden) return; setPop(false); })
      .observe(document.querySelector('.hero'));
  } else fab.hidden = false;

  // fill the Google rating stars the first time the card is seen
  var rating = document.querySelector('[data-rating]');
  if (rating && 'IntersectionObserver' in window) {
    var ro = new IntersectionObserver(function (es) { if (!es[0].isIntersecting) return; rating.classList.add('is-in'); ro.disconnect(); }, { threshold: 0.6 });
    ro.observe(rating);
  } else if (rating) rating.classList.add('is-in');

  renderWhere();
  // Links like southery.cloud/#menu-biriyani (from the dish pages) open that tab and go straight to the menu.
  // The greeting curtain is skipped for these links (see the inline script in index.html).
  function openFromHash(scroll) {
    var m = /^#menu-([a-z]+)$/.exec(location.hash);
    if (!m || !catById[m[1]]) return false;
    active = m[1]; renderDishes();
    if (scroll) {
      var go = function () { document.getElementById('menu').scrollIntoView(); };
      setTimeout(go, 0);
      if (document.readyState !== 'complete') window.addEventListener('load', go, { once: true }); // again once photos and fonts settle
    }
    return true;
  }
  if (!openFromHash(true)) renderDishes();
  window.addEventListener('hashchange', function () { if (openFromHash(true)) $('#tab-' + active).focus({ preventScroll: true }); });

  /* Background music: "Spice Garden Morning" (forest edition), an original 120 s loop: breeze, leaves, a distant stream, songbirds, a far koel, celesta, soft pads at low volume. Off by default; the header button turns it on.
     Browsers only allow sound after the visitor's first tap or key press, so it starts then.
     The header button turns it off or on; the choice is remembered ('southery-music').
     Web Audio loops the 3 s to 93 s region of the file, which is exactly one seamless cycle. */
  (function () {
    var btn = $('[data-music]'), AC = window.AudioContext || window.webkitAudioContext;
    if (!btn || !AC) { if (btn) btn.hidden = true; return; }
    var SRC = '/assets/audio/southery-spice-garden-v2.mp3', LOOP_START = 3, LOOP_END = 123, VOL = 0.055; /* fixed volume, set here only (halved again on 20 Nov 2026, from 0.11) */
    var ctx, gain, buffer, source, loading = false, playing = false, armed = true;
    var on = false; try { on = localStorage.getItem('southery-music') === 'on'; } catch (e) {}
    function show() { btn.setAttribute('aria-pressed', on ? 'true' : 'false'); btn.classList.toggle('is-playing', playing); btn.title = on ? 'Turn music off' : 'Play music'; }
    function fade(to, secs) { var t = ctx.currentTime; gain.gain.cancelScheduledValues(t); gain.gain.setValueAtTime(gain.gain.value, t); gain.gain.linearRampToValueAtTime(to, t + secs); }
    function begin() {
      if (!buffer || !on || document.hidden) return;
      if (!source) {
        source = ctx.createBufferSource(); source.buffer = buffer; source.loop = true;
        source.loopStart = LOOP_START; source.loopEnd = LOOP_END; source.connect(gain); source.start(0, LOOP_START);
      }
      if (ctx.state !== 'running') ctx.resume();
      playing = true; fade(VOL, 2.5); show();
    }
    function start() {
      if (!ctx) { ctx = new AC(); gain = ctx.createGain(); gain.gain.value = 0; gain.connect(ctx.destination); }
      if (ctx.state !== 'running') ctx.resume();
      if (buffer) { begin(); return; }
      if (loading) return; loading = true;
      fetch(SRC).then(function (r) { return r.arrayBuffer(); }).then(function (data) {
        return new Promise(function (ok, bad) { ctx.decodeAudioData(data, ok, bad); });
      }).then(function (b) { buffer = b; begin(); }).catch(function () { btn.hidden = true; });
    }
    function stop() {
      playing = false; show();
      if (!ctx) return;
      fade(0, 0.6); setTimeout(function () { if (!playing && ctx.state === 'running') ctx.suspend(); }, 700);
    }
    function firstTouch(e) {
      if (!armed) return; armed = false;
      document.removeEventListener('pointerdown', firstTouch, true); document.removeEventListener('keydown', firstTouch, true);
      if (on && !btn.contains(e.target)) start();
    }
    document.addEventListener('pointerdown', firstTouch, true); document.addEventListener('keydown', firstTouch, true);
    btn.addEventListener('click', function () {
      armed = false; on = !playing;
      try { localStorage.setItem('southery-music', on ? 'on' : 'off'); } catch (e) {}
      if (on) start(); else stop();
      show();
    });
    document.addEventListener('visibilitychange', function () {
      if (!ctx || !on || !buffer) return;
      if (document.hidden) { fade(0, 0.3); setTimeout(function () { if (document.hidden) ctx.suspend(); }, 350); }
      else begin();
    });
    show();
  })();

  /* Phones and tablets: load the story and promise backgrounds only as they come near */
  (function () {
    var secs = document.querySelectorAll('.story, .promise');
    if (!('IntersectionObserver' in window)) { for (var k = 0; k < secs.length; k++) secs[k].classList.add('is-near'); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-near'); io.unobserve(e.target); } });
    }, { rootMargin: '800px 0px' });
    for (var k = 0; k < secs.length; k++) io.observe(secs[k]);
  })();

  /* Open now / closed: shown in Find the kitchen, and in the cart when the kitchen is closed */
  (function () {
    var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    function status() {
      var ist = new Date(Date.now() + 330 * 60000), day = ist.getUTCDay(), m = ist.getUTCHours() * 60 + ist.getUTCMinutes();
      if (day !== HOURS.closedDay && m >= HOURS.open && m < HOURS.close) return { open: true };
      var next;
      if (day !== HOURS.closedDay && m < HOURS.open) next = 'today';
      else { var d = (day + 1) % 7; if (d === HOURS.closedDay) d = (d + 1) % 7; next = d === (day + 1) % 7 ? 'tomorrow' : DAYS[d]; }
      return { open: false, next: next };
    }
    var now = $('[data-open-now]'), note = $('[data-closed-note]');
    function paint() {
      var s = status(), when = s.next === 'today' ? 'at 11 am' : s.next === 'tomorrow' ? 'tomorrow at 11 am' : s.next + ' at 11 am';
      if (now) { now.hidden = false; now.textContent = s.open ? ' Open now, until 11 pm.' : ' Closed now. We open ' + when + '.'; now.classList.toggle('is-open', s.open); }
      if (note) { note.hidden = s.open; note.textContent = s.open ? '' : 'We’re closed now and open ' + when + '. You can still send your order, and we’ll reply when we open.'; }
    }
    paint(); setInterval(paint, 60000);
  })();

  /* Google Map (about 180 KB and many requests): load it only when the visitor nears the Find us section */
  (function () {
    var f = $('[data-map-src]'); if (!f) return;
    function go() { if (!f.src) f.src = f.getAttribute('data-map-src'); }
    if (!('IntersectionObserver' in window)) { go(); return; }
    var mo = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { go(); mo.disconnect(); } }, { rootMargin: '600px 0px' });
    mo.observe(f);
  })();

  /* Greeting curtain on every page load: Introducing, logo (mango leaf), ക്ലൗഡ് കിച്ചൺ, WebApp (green leaf), then lift. Tap to skip.
     html.greet is set in <head>; the CSS has a failsafe lift if this never runs. */
  (function () {
    var h = document.documentElement, c = $('[data-curtain]');
    if (!c || !/(^| )greet( |$)/.test(h.className)) return;
    var items = c.querySelectorAll('.curtain__word > *'), HOLD = [400, 500, 400, 500], i = 0, t, started = false, lifted = false;
    function lift() {
      if (lifted) return; lifted = true; clearTimeout(t);
      h.classList.add('greet-done');
      setTimeout(function () { h.classList.remove('greet'); h.classList.remove('greet-done'); if (c.parentNode) c.parentNode.removeChild(c); }, 800);
    }
    function next() {
      if (i >= items.length - 1) { lift(); return; }
      items[i].classList.remove('is-on'); i++; items[i].classList.add('is-on');
      c.setAttribute('data-step', i);
      t = setTimeout(next, HOLD[i]);
    }
    function start() { if (started) return; started = true; t = setTimeout(next, HOLD[0]); }
    var logo = c.querySelector('.curtain__logo');
    if (logo.complete) start(); else { logo.addEventListener('load', start); logo.addEventListener('error', start); setTimeout(start, 500); }
    c.addEventListener('click', lift);
  })();

  /* ---------- Add to Home Screen ----------
     Shown after the greeting curtain on every page load (Nisham's choice), except when Southery is already
     running as an installed app. Chrome and Edge hand us a native install prompt (beforeinstallprompt); there the gold
     button installs. iPhone Safari has no prompt, so the dialog shows the Share > Add to Home Screen steps instead,
     and other browsers get their menu steps. Browsers that can't install at all (Firefox on desktop, in-app browsers)
     never see it. */
  (function () {
    var box = $('[data-install]');
    if (!box) return;
    var ua = navigator.userAgent || '';
    var standalone = (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
    var inApp = /FBAN|FBAV|Instagram|Line\/|; wv\)/i.test(ua);
    var ios = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
    var android = /Android/i.test(ua);
    var macSafari = /Macintosh/.test(ua) && /Safari/.test(ua) && !/Chrome|Chromium|Edg\//.test(ua) && !ios;
    var desktopFirefox = /Firefox/.test(ua) && !android;
    var deferred = null, shown = false, from = null;
    var go = $('[data-install-go]'), how = $('[data-install-how]');
    var SHARE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M12 3v12M7.5 7.5 12 3l4.5 4.5M5 11v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8"/></svg>';
    var DOTS = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="5" r="1.8" fill="currentColor"/><circle cx="12" cy="12" r="1.8" fill="currentColor"/><circle cx="12" cy="19" r="1.8" fill="currentColor"/></svg>';

    function steps() {
      if (ios) return 'Tap the Share button ' + SHARE + ' at the bottom of Safari, then choose <b>Add to Home Screen</b>.';
      if (android) return 'Tap the menu ' + DOTS + ' in your browser, then choose <b>Add to Home screen</b> or <b>Install app</b>.';
      if (macSafari) return 'In the Safari menu bar, choose <b>File</b>, then <b>Add to Dock</b>.';
      return 'Click the install icon at the right of the address bar, or open the browser menu and choose <b>Install Southery</b>.';
    }
    // One gold "Install now" button everywhere. With the browser's install prompt it installs in one tap;
    // without one (iPhone, or before Chrome/Brave allow it) the tap shows the two steps instead.
    var showSteps = false;
    function render() {
      var steps_ = showSteps && !deferred;
      go.hidden = steps_;
      how.hidden = !steps_;
      if (steps_) how.innerHTML = steps();
      $('[data-install-later]').textContent = steps_ ? 'Got it' : 'Not now';
    }
    function busy() { return (drawer && !drawer.hidden) || !sheet.hidden || (menuDl && !menuDl.hidden) || /(^| )greet( |$)/.test(document.documentElement.className); }
    function open() {
      if (shown || standalone) return;
      if (busy()) { setTimeout(open, 1500); return; }
      shown = true; from = document.activeElement; render();
      box.hidden = false; requestAnimationFrame(function () { box.classList.add('is-open'); });
      document.body.style.overflow = 'hidden';
      go.focus();
    }
    function close() {
      if (box.hidden) return;
      box.classList.remove('is-open'); document.body.style.overflow = '';
      setTimeout(function () { box.hidden = true; }, 250);
      if (from && from.focus && document.body.contains(from)) from.focus();
    }
    $$('[data-install-close]', box).forEach(function (b) { b.addEventListener('click', close); });
    go.addEventListener('click', function () {
      if (!deferred) { showSteps = true; render(); $('[data-install-later]').focus(); return; }
      var p = deferred; deferred = null;
      p.prompt();
      (p.userChoice || Promise.resolve()).then(close, close);
    });
    document.addEventListener('keydown', function (e) {
      if (box.hidden) return;
      if (e.key === 'Escape') close();
      if (e.key === 'Tab') trap(e, $('.sheet__panel', box));
    });
    window.addEventListener('beforeinstallprompt', function (e) {
      e.preventDefault(); deferred = e;
      if (!box.hidden) render();
    });
    window.addEventListener('appinstalled', function () { deferred = null; close(); });

    if (standalone || inApp || desktopFirefox) return;
    // Wait for the curtain to lift, then a short pause so the page settles first.
    window.addEventListener('load', function () { setTimeout(open, 1200); });
  })();
})();
