// Writes a plain copy of the menu into index.html, for search engines and AI assistants that read the page
// without running JavaScript (and for visitors with JavaScript off). The live tabs replace it as soon as app.js runs.
// Run after every menu change:  node scripts/menu-snapshot.js
var fs = require('fs'), path = require('path'), vm = require('vm');
var root = path.join(__dirname, '..');
var app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
var data = app.slice(0, app.indexOf('(function () {'));          // the menu data above the main IIFE
var box = {}; vm.runInNewContext(data + ';this.C=CATEGORIES;this.M=MENU;', box);

// A dish's photo goes into the structured data only when the file exists (list tabs such as Extras have none).
function hasPhoto(d) { return d.photo !== false && fs.existsSync(path.join(root, 'assets/photos', d.id + '.jpg')); }
function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function price(d) { return d.price == null ? (d.ask || 'Price on request') : '₹' + d.price; }

var PAGES = require('./pages.js');
function pageFor(catId) { return PAGES.filter(function (p) { return p.cat === catId; })[0]; }

var html = box.C.map(function (c) {
  var items = box.M.filter(function (d) { return d.cat === c.id; }), pg = pageFor(c.id);
  return '<h3>' + (pg ? '<a href="/' + pg.slug + '">' + esc(c.name) + '</a>' : esc(c.name)) + '</h3><ul>' + items.map(function (d) {
    return '<li><b>' + esc(d.name) + '</b> — ' + esc(price(d)) + '. ' + esc(d.desc) + '</li>';
  }).join('') + '</ul>';
}).join('');

var ld = {
  '@context': 'https://schema.org', '@type': 'Menu', '@id': 'https://southery.cloud/#southery-menu', name: 'Southery menu', url: 'https://southery.cloud/#menu',
  inLanguage: 'en-IN',
  hasMenuSection: box.C.map(function (c) {
    return { '@type': 'MenuSection', name: c.name, hasMenuItem: box.M.filter(function (d) { return d.cat === c.id; }).map(function (d) {
      var it = { '@type': 'MenuItem', name: d.name, description: d.desc };
      if (d.price != null) it.offers = { '@type': 'Offer', price: String(d.price), priceCurrency: 'INR' };
      if (d.veg) it.suitableForDiet = 'https://schema.org/VegetarianDiet';
      if (hasPhoto(d)) it.image = 'https://southery.cloud/assets/photos/' + d.id + '.jpg';
      return it;
    }) };
  })
};

var page = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
function put(name, body) {
  var re = new RegExp('(<!-- ' + name + ':start -->)[\\s\\S]*?(<!-- ' + name + ':end -->)');
  if (!re.test(page)) throw new Error('markers for ' + name + ' not found in index.html');
  page = page.replace(re, function (m, a, b) { return a + body + b; });
}
put('menu-snapshot', '<div class="menu-snapshot">' + html + '</div>');
put('menu-ld', '<script type="application/ld+json">' + JSON.stringify(ld).replace(/</g, '\\u003c') + '</script>');
fs.writeFileSync(path.join(root, 'index.html'), page);

// The dish pages: one static page per category in PAGES, written to the site root (cleanUrls serves /biriyani)
var SITE = 'https://southery.cloud';
var today = new Date().toISOString().slice(0, 10);
function rupee(n) { return '₹' + Number(n).toLocaleString('en-IN'); }
PAGES.forEach(function (pg) {
  var cat = box.C.filter(function (c) { return c.id === pg.cat; })[0];
  var items = box.M.filter(function (d) { return d.cat === pg.cat; });
  var min = rupee(Math.min.apply(null, items.filter(function (d) { return d.price != null; }).map(function (d) { return d.price; })));
  var fill = function (s) { return s.replace(/\{min\}/g, min); };
  var url = SITE + '/' + pg.slug, order = '/#menu-' + pg.cat;
  var others = PAGES.filter(function (o) { return o !== pg; });
  var cards = items.map(function (d, i) {
    var img = d.photo === false ? '<img class="dp-dish__mark" src="/favicon.svg" alt="" width="64" height="64">' :
      '<picture><source type="image/webp" srcset="/assets/photos/' + d.id + '-480.webp 480w, /assets/photos/' + d.id + '-720.webp 720w" sizes="(max-width: 560px) 92vw, 360px">' +
      '<img src="/assets/photos/' + d.id + '.jpg" alt="' + esc(d.name) + '" width="720" height="720"' + (i > 2 ? ' loading="lazy"' : '') + ' decoding="async"></picture>';
    var tag = d.best ? '<span class="dish__tag dish__tag--best">Best Seller</span>' : d.veg ? '<span class="dish__tag dish__tag--best">Veg</span>' : '';
    return '<article class="dp-dish" id="' + d.id + '">' + '<div class="dp-dish__photo' + (d.photo === false ? ' dp-dish__photo--none' : '') + '">' + img + tag + '</div>' +
      '<div class="dp-dish__body"><h3>' + esc(d.name) + '</h3><p class="dp-dish__price">' + esc(d.price == null ? (d.ask || 'Price on request, direct orders only') : rupee(d.price)) + '</p>' +
      '<p>' + esc(d.desc) + '</p></div></article>';
  }).join('\n');
  var ld = [
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Southery', item: SITE + '/' },
      { '@type': 'ListItem', position: 2, name: pg.label, item: url } ] },
    { '@context': 'https://schema.org', '@type': 'MenuSection', name: cat.name, url: url,
      isPartOf: { '@type': 'Menu', '@id': SITE + '/#southery-menu' },
      hasMenuItem: items.map(function (d) {
        var it = { '@type': 'MenuItem', name: d.name, description: d.desc, url: url + '#' + d.id };
        if (d.price != null) it.offers = { '@type': 'Offer', price: String(d.price), priceCurrency: 'INR' };
        if (d.veg) it.suitableForDiet = 'https://schema.org/VegetarianDiet';
        if (hasPhoto(d)) it.image = SITE + '/assets/photos/' + d.id + '.jpg';
        return it;
      }) }
  ];
  var out = '<!doctype html>\n<!-- Built by scripts/menu-snapshot.js from app.js and scripts/pages.js. Edit those, not this file. -->\n' +
'<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n' +
'<title>' + esc(pg.title) + '</title>\n<meta name="description" content="' + esc(fill(pg.description)) + '">\n' +
'<link rel="canonical" href="' + url + '">\n<meta name="theme-color" content="#132721">\n' +
'<link rel="icon" href="/favicon.svg" type="image/svg+xml">\n<link rel="manifest" href="/manifest.webmanifest">\n' +
'<meta property="og:type" content="website">\n<meta property="og:site_name" content="Southery">\n<meta property="og:locale" content="en_IN">\n' +
'<meta property="og:url" content="' + url + '">\n<meta property="og:title" content="' + esc(pg.h1) + ' — Southery">\n' +
'<meta property="og:description" content="' + esc(fill(pg.description)) + '">\n' +
'<meta property="og:image" content="' + SITE + '/assets/photos/og-southery.jpg">\n<meta name="twitter:card" content="summary_large_image">\n' +
'<link rel="preload" href="/assets/fonts/cabinet-800.woff2" as="font" type="font/woff2" crossorigin>\n' +
'<link rel="stylesheet" href="/styles.css">\n' +
ld.map(function (o) { return '<script type="application/ld+json">' + JSON.stringify(o).replace(/</g, '\\u003c') + '</script>'; }).join('\n') +
'\n</head>\n<body class="dp">\n<a class="skip" href="#dishes">Skip to the dishes</a>\n' +
'<header class="dp-top wrap"><a href="/" class="dp-top__logo"><img src="/assets/logo/southery-script-ivory.svg" alt="Southery home" width="150" height="30"></a>' +
'<a class="btn btn--gold btn--sm" href="' + order + '">' + esc(pg.cta) + '</a></header>\n' +
'<main class="wrap dp-main">\n<nav class="dp-crumbs" aria-label="Breadcrumb"><a href="/">Southery</a> <span aria-hidden="true">/</span> <span aria-current="page">' + esc(pg.label) + '</span></nav>\n' +
'<section class="pane dp-intro" aria-labelledby="dp-title"><h1 id="dp-title" class="h2">' + esc(pg.h1) + '</h1>' +
pg.intro.map(function (p) { return '<p>' + esc(fill(p)) + '</p>'; }).join('') + '</section>\n' +
'<section id="dishes" class="dp-dishes" aria-label="' + esc(cat.name) + '">\n' + cards + '\n</section>\n' +
'<section class="pane dp-how" aria-labelledby="how-title"><h2 id="how-title">How to order</h2><ol>' +
'<li>Add dishes to your cart on southery.cloud.</li><li>Send the order to our kitchen on WhatsApp. It goes as one ready-written message.</li><li>Pay by UPI. We start cooking once the payment comes through.</li></ol>' +
'<p>Delivery is free within 3 km of our Edappally kitchen. Further away, we send it with Porter once your payment comes through, and you pay the rider.</p>' +
'<p>Open Tuesday to Sunday, 11 am to 11 pm. Closed on Mondays. Also on Swiggy and Zomato.</p>' +
'<a class="btn btn--ivory" href="' + order + '">' + esc(pg.cta) + '</a></section>\n' +
'<nav class="dp-more" aria-label="More from the menu"><h2>More from our kitchen</h2><ul>' +
others.map(function (o) { return '<li><a href="/' + o.slug + '">' + esc(o.label) + '</a></li>'; }).join('') +
'<li><a href="/#menu">The full menu</a></li></ul></nav>\n</main>\n' +
'<footer class="dp-foot wrap"><p>Southery Kitchen LLP. SNRA 27, Ground Floor, Sahrdaya Nagar Road, Edappally, Cochin, Keralam 682024. ' +
'<a href="https://wa.me/918610071212">WhatsApp +91 86100 71212</a></p></footer>\n</body>\n</html>\n';
  fs.writeFileSync(path.join(root, pg.slug + '.html'), out);
});

// sitemap: the home page and the dish pages
fs.writeFileSync(path.join(root, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  ['/'].concat(PAGES.map(function (p) { return '/' + p.slug; })).map(function (u) {
    return '  <url><loc>' + SITE + u + '</loc><lastmod>' + today + '</lastmod></url>';
  }).join('\n') + '\n</urlset>\n');

// llms.txt: a plain summary for AI assistants (https://llmstxt.org)
var txt = fs.readFileSync(path.join(__dirname, 'llms-head.md'), 'utf8').trim() + '\n\n## Menu\n\n' +
  box.C.map(function (c) {
    return '### ' + c.name + '\n\n' + (c.note ? c.note + '\n\n' : '') + box.M.filter(function (d) { return d.cat === c.id; }).map(function (d) {
      return '- ' + d.name + ' (' + price(d) + (d.veg ? ', vegetarian' : '') + '): ' + d.desc;
    }).join('\n');
  }).join('\n\n') + '\n';
fs.writeFileSync(path.join(root, 'llms.txt'), txt);
console.log('Dish pages written: ' + PAGES.map(function (p) { return '/' + p.slug; }).join(', '));
console.log('Menu snapshot written: ' + box.M.length + ' dishes in ' + box.C.length + ' sections.');
