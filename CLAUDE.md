# CLAUDE.md — Southery website

The storefront for Southery, a Malabar cloud kitchen in Edappally, Kochi. Live at https://southery.cloud.
Customers browse the menu, build a cart, and send the order to the kitchen on WhatsApp, then pay by UPI.

## Stack

- Plain static site: `index.html`, `styles.css`, `app.js`. No framework, no build step, no package.json.
- `app.js` is vanilla ES5-style JavaScript (`var`, `function`, one IIFE). Keep it that way. No modules, no transpiling.
- One vendored library: `vendor/qrcode.js`, used to draw the UPI QR code. No CDN scripts.
- To preview locally, serve the folder with any static server (e.g. `python3 -m http.server`) and open it.
  Use a server rather than opening the file directly, because asset paths are root-absolute (`/assets/...`).

## Deploys (Vercel)

- Every push to `main` redeploys the live site. There is no staging step, so check changes locally first.
- Past changes have gone in as branches merged by pull request; prefer that for anything that touches the page.
- `vercel.json`:
  - `cleanUrls: true`
  - everything under `/assets/` is cached for a year as `immutable`. **If you replace an asset, give it a new
    file name** (or the old version stays cached in browsers).
  - `southery.vercel.app` permanently redirects to `https://southery.cloud`.
- Every file in the repo is publicly served, including this one and the README. Never commit secrets.

## File layout

```
index.html        the single page: hero, story, menu (store), promise, visit, footer,
                  plus the cart drawer and the dish-options sheet
styles.css        all styles; design tokens on :root
app.js            menu data, tabs, cart, options sheet, delivery check, WhatsApp checkout, UPI payment
vendor/qrcode.js  QR generator
favicon.svg       the Southery mark (also used as the placeholder when a dish has no photo)
assets/
  fonts/          Cabinet Grotesk woff2 (400, 500, 700, 800)
  logo/           script logo in green, gold, ivory (SVG)
  icons/          WhatsApp, Swiggy, Zomato, Google, Instagram
  photos/         dish photos, named <dish-id>.jpg; og-southery.jpg for link previews
  photos/bg/      large background photography (AVIF + JPG)
  nature/         foliage photos behind the glass panels, in pairs (-a / -b), AVIF + JPG
```

## Common edits

**Menu** — all in `app.js`, near the top:
- `CATEGORIES`: tabs. `list: true` renders a category as simple rows without photos. `note` shows under the tab.
- `MENU`: one object per dish: `id`, `cat`, `name`, `price` (rupees, or `null` for "ask on WhatsApp"),
  `desc`, optional `tag` (e.g. "Signature"), optional `photo: false`.
- A dish's photo is found by its id: `/assets/photos/<id>.jpg` (720×720 shown). Adding a dish with a photo
  means adding that file with the matching name. With no photo, set `photo: false`.
- `OPTION_SETS` and `DISH_OPTIONS`: customisation (curry choice, extras, sides), mirroring Swiggy/Zomato.
  `type: 'one'` picks exactly one (first is the default); `type: 'many'` are optional extras up to `max`.

**Ordering settings** — also in `app.js`: `WHATSAPP` number, `UPI` id and payee name, `KITCHEN` lat/lng,
and `FREE_KM` (free-delivery radius, 3 km). Beyond that radius delivery is by Porter and the kitchen confirms the fare.
Treat these values as business details: change them only when Nisham asks.

**Business details elsewhere** — address, phone, founder and links also appear in the JSON-LD block and the meta /
Open Graph tags in `index.html`, and in the visit and footer sections. Keep them in step with `app.js`.

Browser storage keys: `southery-cart` and `southery-customer` (name and address, remembered for next time).

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
- Lazy-load images below the fold and give every `<img>` width and height.
