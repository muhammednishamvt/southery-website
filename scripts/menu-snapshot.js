// Writes a plain copy of the menu into index.html, for search engines and AI assistants that read the page
// without running JavaScript (and for visitors with JavaScript off). The live tabs replace it as soon as app.js runs.
// Run after every menu change:  node scripts/menu-snapshot.js
var fs = require('fs'), path = require('path'), vm = require('vm');
var root = path.join(__dirname, '..');
var app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
var data = app.slice(0, app.indexOf('(function () {'));          // the menu data above the main IIFE
var box = {}; vm.runInNewContext(data + ';this.C=CATEGORIES;this.M=MENU;', box);

function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function price(d) { return d.price == null ? (d.ask || 'Price on request') : '₹' + d.price; }

var html = box.C.map(function (c) {
  var items = box.M.filter(function (d) { return d.cat === c.id; });
  return '<h3>' + esc(c.name) + '</h3><ul>' + items.map(function (d) {
    return '<li><b>' + esc(d.name) + '</b> — ' + esc(price(d)) + '. ' + esc(d.desc) + '</li>';
  }).join('') + '</ul>';
}).join('');

var ld = {
  '@context': 'https://schema.org', '@type': 'Menu', name: 'Southery menu', url: 'https://southery.cloud/#menu',
  inLanguage: 'en-IN',
  hasMenuSection: box.C.map(function (c) {
    return { '@type': 'MenuSection', name: c.name, hasMenuItem: box.M.filter(function (d) { return d.cat === c.id; }).map(function (d) {
      var it = { '@type': 'MenuItem', name: d.name, description: d.desc };
      if (d.price != null) it.offers = { '@type': 'Offer', price: String(d.price), priceCurrency: 'INR' };
      if (d.veg) it.suitableForDiet = 'https://schema.org/VegetarianDiet';
      if (d.photo !== false) it.image = 'https://southery.cloud/assets/photos/' + d.id + '.jpg';
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

// llms.txt: a plain summary for AI assistants (https://llmstxt.org)
var txt = fs.readFileSync(path.join(__dirname, 'llms-head.md'), 'utf8').trim() + '\n\n## Menu\n\n' +
  box.C.map(function (c) {
    return '### ' + c.name + '\n\n' + (c.note ? c.note + '\n\n' : '') + box.M.filter(function (d) { return d.cat === c.id; }).map(function (d) {
      return '- ' + d.name + ' (' + price(d) + (d.veg ? ', vegetarian' : '') + '): ' + d.desc;
    }).join('\n');
  }).join('\n\n') + '\n';
fs.writeFileSync(path.join(root, 'llms.txt'), txt);
console.log('Menu snapshot written: ' + box.M.length + ' dishes in ' + box.C.length + ' sections.');
