// The dish pages (southery.cloud/biriyani, /malabar-dishes, /combo-boxes): their own words, written by hand.
// Dishes, prices and photos come from the menu in app.js; scripts/menu-snapshot.js builds the pages from both.
// Keep to facts the kitchen has stated. No claims that aren't true.

module.exports = [
  {
    slug: 'biriyani', cat: 'biriyani', label: 'Biriyani',
    title: 'Malabar dum biriyani in Kochi — Southery, Edappally',
    description: 'Chicken and beef dum biriyani on Kaima rice, with mutton, fish and prawns biriyani on direct orders. Cooked in our Edappally kitchen and delivered across Kochi.',
    h1: 'Malabar dum biriyani in Kochi, cooked in Edappally',
    intro: [
      'Our biriyani is made the Malabar way: short-grain Kaima rice layered with the masala and the meat, sealed, and left on dum until every grain carries it.',
      'Chicken and beef biriyani are always on the menu. Mutton, fish and prawns biriyani are cooked for direct orders only. Mutton biriyani is priced below; for fish and prawns, message us on WhatsApp for sizes and prices.'
    ],
    cta: 'Order biriyani'
  },
  {
    slug: 'malabar-dishes', cat: 'malabar', label: 'Malabar dishes',
    title: 'Beef roast, chicken fry and Kerala stews in Kochi — Southery',
    description: 'Beef roast, chicken fry, Chicken Varutharachathu, naadan curries and coconut-milk stews from our Edappally kitchen, delivered across Kochi.',
    h1: 'Malabar roasts, fries, curries and stews',
    intro: [
      'The dishes you order porotta and appam for. Beef roasted down slowly with coconut slivers and curry leaves, chicken fried crisp at the edges, Chicken Varutharachathu in a gravy of slow-roasted coconut, and gentle coconut-milk stews.',
      'Order them on their own, or as a full meal from our combo boxes.'
    ],
    cta: 'Order Malabar dishes'
  },
  {
    slug: 'combo-boxes', cat: 'boxes', label: 'Combo boxes',
    title: 'Kerala combo boxes in Kochi: appam, puttu, porotta — Southery',
    description: 'Appam, puttu, porotta, chapathi, neypathal, ghee rice or biriyani rice with chicken or beef curry, in one box. From {min}, delivered across Kochi from Edappally.',
    h1: 'Combo boxes: a Kerala meal in one box',
    intro: [
      'Each box pairs a Kerala staple with a chicken or beef curry from our kitchen: lacy appam, steamed puttu, flaky Malabar porotta, soft chapathi, thin neypathal, ghee rice or biriyani rice.',
      'Boxes start at {min}.'
    ],
    cta: 'Order a combo box'
  }
];
