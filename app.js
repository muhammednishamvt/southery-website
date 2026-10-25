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
    desc: 'Fragrant ghee rice with a chicken curry alongside. A full meal in one box.' },
  { id: 'ghee-rice-beef-combo', cat: 'boxes', name: 'Ghee Rice Beef Combo', price: 279,
    desc: 'Fragrant ghee rice with a beef curry alongside. A full meal in one box.' },
  { id: 'biriyani-rice-chicken-combo', cat: 'boxes', name: 'Biriyani Rice Chicken Combo', price: 259,
    desc: 'Spiced biriyani rice paired with chicken, for when you want both in one box.' },
  { id: 'biriyani-rice-beef-combo', cat: 'boxes', name: 'Biriyani Rice Beef Combo', price: 289,
    desc: 'Spiced biriyani rice paired with beef, for when you want both in one box.' },
  { id: 'pathal-chicken-combo', cat: 'boxes', name: 'Pathal Chicken Combo', price: 219,
    desc: 'Soft, thin Malabar pathal with chicken curry alongside.' },
  { id: 'pathal-beef-combo', cat: 'boxes', name: 'Pathal Beef Combo', price: 249,
    desc: 'Soft, thin Malabar pathal with beef curry alongside.' },
  { id: 'appam-chicken-combo', cat: 'boxes', name: 'Appam Chicken Combo', price: 209,
    desc: 'Lacy appam, crisp at the edges and soft in the middle, with chicken curry.' },
  { id: 'appam-beef-combo', cat: 'boxes', name: 'Appam Beef Combo', price: 239,
    desc: 'Lacy appam, crisp at the edges and soft in the middle, with beef curry.' },
  { id: 'puttu-chicken-combo', cat: 'boxes', name: 'Puttu Chicken Combo', price: 189,
    desc: 'Steamed rice and coconut puttu with chicken curry to pour over.' },
  { id: 'puttu-beef-combo', cat: 'boxes', name: 'Puttu Beef Combo', price: 219,
    desc: 'Steamed rice and coconut puttu with beef curry to pour over.' },
  { id: 'porotta-chicken-combo', cat: 'boxes', name: 'Porotta Chicken Combo', price: 229,
    desc: 'Layered, flaky Malabar porotta with chicken curry. Best pulled apart by hand.' },
  { id: 'porotta-beef-combo', cat: 'boxes', name: 'Porotta Beef Combo', price: 259,
    desc: 'Layered, flaky Malabar porotta with beef curry. The Kerala favourite.' },
  { id: 'chapathi-chicken-combo', cat: 'boxes', name: 'Chapathi Chicken Combo', price: 189,
    desc: 'Soft chapathi with chicken curry. Lighter, and just as satisfying.' },
  { id: 'chapathi-beef-combo', cat: 'boxes', name: 'Chapathi Beef Combo', price: 219,
    desc: 'Soft chapathi with beef curry. Lighter, and just as satisfying.' },

  { id: 'ghee-rice', cat: 'rice', name: 'Ghee Rice', price: 169, desc: 'Kaima rice cooked in ghee with whole spices and fried onions.' },
  { id: 'biriyani-rice', cat: 'rice', name: 'Biriyani Rice', price: 179, desc: 'Our dum biriyani rice on its own, to pair with any roast or curry.' },

  { id: 'mint-lemon', cat: 'drinks', name: 'Mint Lemon', price: 50, desc: 'Fresh lime and mint.' },
  { id: 'pineapple-lemon', cat: 'drinks', name: 'Pineapple Lemon', price: 50, desc: 'Pineapple with fresh lime.' },
  { id: 'pineapple-juice', cat: 'drinks', name: 'Pineapple', price: 169, desc: 'Cold pressed. No sugar, no water.' },
  { id: 'watermelon-juice', cat: 'drinks', name: 'Water Melon', price: 139, desc: 'Cold pressed. No sugar, no water.' },
  { id: 'melon-magic', cat: 'drinks', name: 'Melon Magic', price: 199, desc: 'A detox smoothie.' }
];

(function () {
  var byId = {}; MENU.forEach(function (d) { byId[d.id] = d; });
  var catById = {}; CATEGORIES.forEach(function (c) { catById[c.id] = c; });
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var rupee = function (n) { return '₹' + n.toLocaleString('en-IN'); };

  function read(k, fallback) {
    try { var v = JSON.parse(localStorage.getItem(k) || 'null'); return v && typeof v === 'object' ? v : fallback; }
    catch (e) { return fallback; }
  }
  function write(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

  var cart = read('southery-cart', {});
  Object.keys(cart).forEach(function (id) { if (!byId[id]) delete cart[id]; }); // drop retired dishes
  function save() { write('southery-cart', cart); }

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

  function photo(d) {
    if (d.photo === false) return '<div class="dish__photo dish__photo--mark"><img src="/favicon.svg" alt="" width="120" height="120">' + tag(d) + '</div>';
    return '<div class="dish__photo"><img src="/assets/photos/' + d.id + '.jpg" alt="' + d.name + '" loading="lazy" width="720" height="720">' + tag(d) + '</div>';
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
    var items = MENU.filter(function (d) { return d.cat === active; });
    dishesEl.innerHTML = items.map(function (d) {
      if (cat.list) {
        return '<div class="row"><div><h3>' + d.name + '</h3><p>' + d.desc + '</p></div>' +
          '<div class="row__buy"><span class="dish__price">' + rupee(d.price) + '</span><span class="dish__ctl" data-ctl="' + d.id + '"></span></div></div>';
      }
      return '<article class="dish">' + photo(d) +
        '<div class="dish__info"><h3>' + d.name + '</h3><p>' + d.desc + '</p></div>' +
        '<div class="dish__buy"><span class="dish__price">' + rupee(d.price) + '</span>' +
        '<span class="dish__ctl" data-ctl="' + d.id + '"></span></div></article>';
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

  function stepper(id, qty) {
    return '<span class="stepper"><button type="button" data-dec="' + id + '" aria-label="Remove one ' + byId[id].name + '">−</button>' +
      '<b aria-live="polite">' + qty + '</b><button type="button" data-inc="' + id + '" aria-label="Add one more ' + byId[id].name + '">+</button></span>';
  }

  function renderControls() {
    $$('[data-ctl]').forEach(function (slot) {
      var id = slot.dataset.ctl, q = cart[id] || 0;
      slot.innerHTML = q ? stepper(id, q) : '<button type="button" class="btn btn--ivory btn--sm" data-inc="' + id + '" aria-label="Add ' + byId[id].name + '">Add</button>';
    });
    renderCart();
  }

  function bump() {
    $$('.cart-count, .cart-float').forEach(function (el) {
      el.classList.remove('is-bump'); void el.offsetWidth; el.classList.add('is-bump');
    });
  }

  document.addEventListener('click', function (e) {
    var inc = e.target.closest('[data-inc]'), dec = e.target.closest('[data-dec]');
    if (!inc && !dec) return;
    var id = (inc || dec).dataset[inc ? 'inc' : 'dec'];
    var refocus = (inc || dec).closest('[data-ctl]') ? id : null;
    if (inc) { cart[id] = (cart[id] || 0) + 1; bump(); }
    else { cart[id] = Math.max(0, (cart[id] || 0) - 1); if (!cart[id]) delete cart[id]; }
    save(); renderControls();
    // keep keyboard focus on the control the person was using
    if (refocus) {
      var slot = $('[data-ctl="' + refocus + '"]');
      var target = slot && (slot.querySelector(inc ? '[data-inc]' : '[data-dec]') || slot.querySelector('button'));
      if (target) target.focus({ preventScroll: true });
    }
  });

  /* ---------- Cart ---------- */
  function totals() {
    var ls = Object.keys(cart).filter(function (id) { return cart[id] > 0; })
      .map(function (id) { return { d: byId[id], q: cart[id] }; });
    var n = 0, t = 0;
    ls.forEach(function (l) { n += l.q; t += l.q * l.d.price; });
    return { ls: ls, n: n, t: t };
  }

  var sentEl = $('[data-sent]'), form = $('[data-checkout]');
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
    $('[data-lines]').innerHTML = s.ls.map(function (l) {
      var img = l.d.cat === 'rice' || l.d.cat === 'drinks' || l.d.photo === false
        ? '<span class="line__mark"><img src="/favicon.svg" alt="" width="40" height="40"></span>'
        : '<img src="/assets/photos/' + l.d.id + '.jpg" alt="" width="64" height="64">';
      return '<li class="line">' + img +
        '<div><p>' + l.d.name + '</p><small>' + rupee(l.d.price) + ' each</small></div>' + stepper(l.d.id, l.q) + '</li>';
    }).join('');
  }

  // remember who and where, so a returning customer doesn't retype it
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
  document.addEventListener('keydown', function (e) {
    if (drawer.hidden) return;
    if (e.key === 'Escape') closeCart();
    if (e.key === 'Tab') { // keep focus inside the dialog
      var f = $$('button:not([disabled]), input, textarea, a[href]', $('.drawer__panel')).filter(function (el) { return el.offsetParent; });
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
  });

  $('[data-send]').addEventListener('click', function () {
    var err = $('[data-error]'), s = totals();
    var name = form.name.value.trim(), addr = form.address.value.trim(), note = form.note.value.trim();
    if (!name || !addr) {
      err.hidden = false; err.textContent = !name ? 'Add your name so we know who the order is for.' : 'Add a delivery address so we know where to bring it.';
      (!name ? form.name : form.address).focus(); return;
    }
    err.hidden = true;
    write('southery-customer', { name: name, address: addr });
    var msg = ['Hi Southery, I’d like to place an order.', ''];
    s.ls.forEach(function (l) { msg.push(l.q + ' × ' + l.d.name + ' — ' + rupee(l.q * l.d.price)); });
    msg.push('', 'Total: ' + rupee(s.t), '', 'Name: ' + name, 'Address: ' + addr);
    if (note) msg.push('Note: ' + note);
    window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(msg.join('\n')), '_blank', 'noopener');
    sentEl.hidden = false; renderCart(); $('[data-restart]').focus();
  });

  $('[data-restart]').addEventListener('click', function () {
    cart = {}; save(); form.note.value = ''; sentEl.hidden = true;
    renderControls(); closeCart();
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
  });

  renderDishes();
})();
