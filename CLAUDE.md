# CLAUDE.md — Southery website

The storefront for Southery, a Malabar cloud kitchen in Edappally, Kochi. Live at https://southery.cloud.
Customers browse the menu, build a cart, and send the order to the kitchen on WhatsApp, then pay by UPI.

## Stack

- Plain static site: `index.html`, `styles.css`, `app.js`. No framework, no build step, no package.json.
- `app.js` is vanilla ES5-style JavaScript (`var`, `function`, one IIFE). Keep it that way. No modules, no transpiling.
- One vendored library: `vendor/qrcode.js`, used to draw the UPI QR code. No CDN scripts.
- Order desk backend: two Vercel Node functions in `api/` (`orders.js`, `kitchen.js`, shared `_lib.js`), no dependencies,
  talking to Upstash Redis over its REST API. Env vars (set in Vercel, never in the repo): `KV_REST_API_URL` and
  `KV_REST_API_TOKEN` (added by connecting Upstash Redis under Storage), and `KITCHEN_PIN`. Without them the site
  still works exactly as before (WhatsApp only) and the desk says it isn't switched on.
- To preview locally, serve the folder with any static server (e.g. `python3 -m http.server`) and open it.
  Use a server rather than opening the file directly, because asset paths are root-absolute (`/assets/...`).

## Deploys (Vercel)

- Every push to `main` redeploys the live site. There is no staging step, so check changes locally first.
- Past changes have gone in as branches merged by pull request; prefer that for anything that touches the page.
- `vercel.json`:
  - `cleanUrls: true`
  - `regions: ["bom1"]`: the `api/` functions run in Mumbai, next to the Upstash database (create it in Mumbai too)
  - everything under `/assets/` is cached for a year as `immutable`. **If you replace an asset, give it a new
    file name** (or the old version stays cached in browsers).
  - `southery.vercel.app` permanently redirects to `https://southery.cloud`.
- Every file in the repo is publicly served, including this one and the README. Never commit secrets.

## File layout

```
index.html        the single page: hero, story, menu (store), promise, visit, footer,
                  plus the cart drawer and the dish-options sheet
kitchen.html      /kitchen: the order desk for the team (PIN-locked, not indexed)
track.html        /track?o=CODE&t=TOKEN: the customer's order tracking page (not indexed)
api/              order API (see Stack)
styles.css        all styles; design tokens on :root
app.js            menu data, tabs, cart, options sheet, delivery check, WhatsApp checkout, UPI payment
vendor/qrcode.js  QR generator, loaded only when the cart opens or the payment step shows (not on every visit)
scripts/          menu-snapshot.js (run after menu changes) and llms-head.md
llms.txt          generated summary and menu for AI assistants
favicon.svg       the Southery mark (also used as the placeholder when a dish has no photo)
assets/
  fonts/          Cabinet Grotesk woff2 (400, 500, 700, 800)
  logo/           script logo in green, gold, ivory (SVG)
  icons/          WhatsApp, Swiggy, Zomato, Google, Instagram
  photos/         dish photos, named <dish-id>.jpg; og-southery.jpg for link previews
  photos/bg/      large background photography (AVIF + JPG)
  nature/         foliage photos behind the glass panels, in pairs (-a / -b), AVIF + JPG
  audio/          background music loop "Spice Garden Morning", forest edition (original composition; one 120 s cycle between 3 s and 123 s)
```

## Common edits

**Menu** — all in `app.js`, near the top:
- `CATEGORIES`: tabs. `list: true` renders a category as simple rows without photos. `note` shows under the tab.
- `MENU`: one object per dish: `id`, `cat`, `name`, `price` (rupees, or `null` for "ask on WhatsApp"),
  `desc`, optional `tag` (e.g. "Signature"), optional `photo: false`.
  `best: true` shows a green "Best Seller" tag (accent green, ivory text) in place of `tag`; `veg: true` shows a green "Veg" tag the same way.
  With `price: null`, optional `ask` replaces the default "Price on request / Direct orders only" label (e.g. `ask: 'Ask for price'`).
- A dish's photo is found by its id: `/assets/photos/<id>.jpg` (720×720), plus WebP copies `<id>-480.webp` and
  `<id>-720.webp` that the page actually loads (the JPG is the fallback). Adding a dish with a photo means adding
  all three files. With no photo, set `photo: false`.
- **After any menu change, run `node scripts/menu-snapshot.js`.** It writes a plain copy of the menu into
  `index.html` (between the `menu-snapshot` markers, replaced by the live tabs when app.js runs), the menu's
  structured data (`menu-ld` markers in the head) and `llms.txt` (summary for AI assistants; its top part is
  `scripts/llms-head.md`). Search engines and AI assistants that don't run JavaScript read the menu from these.
- `OPTION_SETS` and `DISH_OPTIONS`: customisation (curry choice, extras, sides), mirroring Swiggy/Zomato.
  `type: 'one'` picks exactly one (first is the default); `type: 'many'` are optional extras up to `max`.

**Ordering settings** — also in `app.js`: `WHATSAPP` number, `UPI` id and payee name, `KITCHEN` lat/lng,
and `FREE_KM` (free-delivery radius, 3 km). Beyond that radius delivery is by Porter: every customer pays for the food by UPI
first, the kitchen books Porter only after that payment is confirmed, and the customer pays the delivery fare to the
Porter rider (UPI on delivery). The site never adds a delivery fare to the bill.
Opening hours: `HOURS` in `app.js` (Tuesday to Sunday, 11 am to 11 pm IST, closed Mondays). The site shows "Open now" /
"Closed now. We open …" under the address, and a note in the cart when closed (orders can still be sent). The same
hours are written in the visit section, the FAQ, the JSON-LD (`openingHoursSpecification`) and `scripts/llms-head.md`.
Treat these values as business details: change them only when Nisham asks.

**Business details elsewhere** — address, phone, founder and links also appear in the JSON-LD block and the meta /
Open Graph tags in `index.html`, and in the visit and footer sections. Keep them in step with `app.js`.

**Questions (FAQ)** — a short section between Our promise and Find the kitchen: four `<details>` questions (hours,
delivery, payment, direct-only biriyanis), mirrored in a `FAQPage` JSON-LD block in the head. Change both together.
Address stays as written: "Edappally, Cochin, Keralam" (Nisham's choice).

**Ratings** — the Swiggy and Zomato rating chips (score and number of ratings) and the Google review count in
`index.html` are typed in by hand. Update them from the apps when they change.

**Greeting curtain** — shown on every page load (skipped for reduced motion; tap to skip): Introducing, logo over
`curtain-logo` leaf photo, ക്ലൗഡ് കിച്ചൺ, WebApp over `curtain-webapp` leaf photo. The words are vector outlines in
`index.html`; timings are `HOLD` in `app.js`. Plan: about a week after the WebApp launch, switch it to once per visit
(Nisham's decision); until then it stays on every load.

**Background music** — off by default. The header button (red with a muted speaker when off, green with moving
bars when on) plays it at a fixed low volume set only in code (`VOL` in `app.js`, 0.11; visitors can't change it on the site); the choice is stored, and for visitors who turned it on it
resumes on their first tap or key press of the next visit (browsers block sound before that). To swap the track,
add a new file with a new name (cache) and update `SRC`, `LOOP_START` and `LOOP_END`; use only licensed or original music.

**After "Send order on WhatsApp"** — the site can't see whether the customer pressed send inside WhatsApp, so the cart
asks "Did you send your order on WhatsApp?". Yes shows the payment step; No returns to the full cart with a red-chilli
notice. The cart is cleared only after Yes, then "Start a new order". An unanswered order is remembered (`southery-pending`)
and asked again when the cart is opened on a later visit.

**Order desk** — when "Send order on WhatsApp" is tapped, the order is also saved (`POST /api/orders`) with a random
token, and the WhatsApp message ends with a "Track this order" link. The Yes/No answer is saved too. Orders keep 60 days.
`/kitchen` (shared PIN; 10 wrong tries locks that device for 15 minutes) lists the last two days, checks every 10 s on screen and 30 s in the
background (one storage read per check, via the `orders:rev` change counter; the full list loads only when it changes),
chimes and shows a gold banner for new orders, and moves orders New → Preparing → Out for delivery → Delivered (or
Cancelled), one at a time or several selected together, with a Paid toggle. Orders the customer said they didn't send
sit under "Not sent". `/track` shows the customer the steps and checks every 30 s while on screen (paused in the background). Order codes are `SO-DDMM-XXXXX`.
Checkout asks for a phone number (for the rider).
Payment proof: the payment step has "I’ve paid. Send the screenshot", which opens our WhatsApp chat with a ready message
(the customer attaches the screenshot there) and marks the order `payClaim` on the desk, which chimes and lists it under
"Check payment". A screenshot is not proof on its own: the team checks the amount in the UPI app before marking Paid.
The button is pressed once: afterwards it gives way to a thank-you note (no "send again"). Once Paid, the card offers "Send payment confirmation on WhatsApp" (prefilled message with the tracking link to the
customer's number); the time it was sent is shown, and `/track` says "Payment received".

Browser storage keys: `southery-cart`, `southery-customer` (name, phone and address, remembered for next time), `southery-music`
and `southery-pending`; on the kitchen page `southery-kitchen-pin` and `southery-kitchen-sound`.

## Brand rules

Calm, rooted, culturally grounded, deliberately not trendy. The site should feel like deep foliage with
light coming through frosted glass.

**Colour** (tokens on `:root` in `styles.css`; use the variables, not raw hex):
| Token | Value | Use |
|---|---|---|
| `--green` | `#132721` | Malabar green, the page ground |
| `--green-deep` | `#0c1a15` | shadows, behind photos |
| `--green-mid` | `#1b3830` | raised surfaces |
| `--ivory` | `#fdf7e3` | text |
| `--ivory-soft` / `--ivory-faint` | ivory at 72% / 14% | secondary text / hairlines |
| `--gold` | `#f7e39c` | the action colour: **one gold action per view** |
| `--wa-green` | `#005200` | the one accent green (ivory text): hover/tap on Add and "+"; "Send order on WhatsApp" turns green on hover once the cart has items, and on phones/tablets it is simply green whenever the cart has items |
| `--chilli` | `#C4340C` | red chilli, caution: hover/tap on "−", error messages (ivory text) |
| `--turmeric` | `#F49A17` | reserved for pop-ups and ad campaigns; not used on the site yet |

The accents are for hover and brief feedback only, never resting colours. One exception: the Swiggy and
Zomato rating chips in the visit section, the "Best Seller" and "Veg" tags on dish photos, and the music button (red when off,
green when on, ivory icon) use the accents as resting fills. On touch screens they show on
tap (`:active`); hover styles sit inside `@media (hover: hover)` so they don't stick after a tap.
Red chilli is too dark for text on the green ground; use it as a fill with ivory text. The accent green
takes ivory text. Use only this one green for accents; don't add other greens.

The page is dark-only: green ground, ivory type. There is no light theme.

**Type**: one family throughout, Cabinet Grotesk, self-hosted in `assets/fonts/`. Headlines are weight 800 with
tight negative letter-spacing (see `.h2`); body is 400 at 17px. Don't add other font families or Google Fonts.
**No Lowan Old Style anywhere.** Older brand guidelines name it for headlines; that is superseded. Headlines use
Cabinet Grotesk too.

**Glass**: content sits on `.pane` panels using the `--glass`, `--glass-rim` and `--glass-blur` tokens over
paired foliage photos. Reuse `.pane` rather than inventing new card styles.

**Buttons**: pill-shaped `.btn` with `--gold`, `--ivory` and `--ghost` variants; `--sm`, `--xs` and `--block` sizes.

**Photography**: dark backgrounds, close and intimate, not over-styled. Ship AVIF with a JPG fallback for large images.

**Voice**: plain, warm, short sentences. No hype, no exclamation marks, no emoji. Menu names keep their Malayalam
dish names (Varutharachathu, Neypathal, Chiratta Puttu, Chammanthi). Spelling is "Biriyani".

## Quality bar

- Keep it accessible: skip link, labelled sections, `:focus-visible` gold outline, dialogs with `aria-modal`,
  Escape closes the cart and sheets, alt text on dish photos.
- Respect `prefers-reduced-motion` for any new animation.
- Check at phone width (breakpoints at 1024, 820 and 560px). Most customers order from their phones.
- Lazy-load images below the fold and give every `<img>` width and height. The Google Map iframe gets its `src`
  only when the visitor nears the Find us section (`data-map-src`).
- An `aria-label` must start with the button's visible text ("Ask on WhatsApp about …"), so voice control works.
