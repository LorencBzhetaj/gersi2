# Sufllaqe Gersi — Website (sufllaqegersi.com)

Faqja publike e restorantit Sufllaqe Gersi, fast food familjar në Tiranë.
Dygjuhëshe (**Shqip / Anglisht**), një faqe me seksionet Hero, Menuja (#menuja),
Rreth nesh (#rreth-nesh) dhe Kontakt (#kontakt).

> Kjo është **faqja kryesore** (root `sufllaqegersi.com`). Menuja me QR është projekt
> i veçantë dhe jeton te `menu.sufllaqegersi.com`.

## Stack
Astro + TypeScript, CSS me design tokens, JavaScript minimal (menu mobile, reveal-on-scroll,
ruajtje e seksionit kur ndërrohet gjuha). HTML statik/SSG — menuja shihet pa JS.

## Komandat
```bash
npm install
npm run dev        # http://localhost:4321  (/ = shqip, /en/ = anglisht)
npm run build      # -> dist/
npm run preview    # provë e build-it
npm run check      # typecheck (astro check)
npm run og         # rigjeneron favicon + og-image nga logoja/hero
```

## Ku ndryshoj gjërat
| Çfarë | Skedari |
|------|---------|
| Pjatat, çmimet, përshkrimet (SQ) | `src/data/menu.json` |
| Përshkrimet në anglisht | `src/data/menu.ts` → `foodDescEn` |
| Të dhënat e biznesit (adresë, tel, orar…) | `src/data/business.json` |
| Tekstet e ndërfaqes SQ/EN | `src/i18n/ui.ts` |
| Ngjyrat / tipografia | `src/styles/tokens.css` |
| Fotot | `public/assets/food`, `public/assets/editorial` |

## Dygjuhësia
Dy faqe të plota: `/` (shqip) dhe `/en/` (anglisht). Butoni i gjuhës në header/menu mobile
ndërron **gjithë faqen** (header + të gjitha tekstet) dhe ruan seksionin aktual (hash).
Të dyja kanë `hreflang` (sq / en / x-default). Emrat e pjatave ruhen si në menunë reale;
përshkrimet dhe UI përkthehen.

## SEO i implementuar
- `<title>`, description, canonical absolut, robots (index vetëm në prodhim; preview = noindex)
- Open Graph + Twitter `summary_large_image`, og:image 1200×630 (`/assets/og-image.png`)
- Favicon + apple-touch-icon (gjenerohen nga logoja)
- `robots.txt` dhe `sitemap.xml` (vetëm `/` dhe `/en/`, pa #anchors, me hreflang)
- JSON-LD `@graph`: **Restaurant, WebSite, WebPage, Menu** (me MenuSection + MenuItem/Offer).
  - `servesCuisine`, `priceRange: 150–350 ALL`, `currenciesAccepted: ALL`
  - Pa LodgingBusiness/Hotel. Pa reviews, rating, orar, koordinata, adresë të plotë apo
    telefon **derisa të konfirmohen** — fushat null hiqen automatikisht.

⚠️ **Rich Results Test / Lighthouse NUK janë ekzekutuar** (kërkojnë URL publike). JSON-LD
parse-ohet lokalisht dhe ndjek rregullat e schema-s; validimi zyrtar bëhet pas publikimit.

## Të dhëna që duhen plotësuar (`src/data/business.json`)
Sapo të konfirmohen, shtohen në UI (seksioni Kontakt) dhe në JSON-LD automatikisht:
- `streetAddress` + `postalCode` → shpejton **PostalAddress e plotë** (kërkohet për
  eligibility të LocalBusiness rich results). Tani shfaqet vetëm “Tiranë, Shqipëri”.
- `telephone` (format E.164, p.sh. `+355…`) → rreshti Telefoni + `tel:`
- `openingHours` → rreshti Orari (+ `openingHoursSpecification` në schema)
- `latitude` / `longitude` → `GeoCoordinates`
- `googleMapsUrl` → butoni “Hap në hartë” + `hasMap`
- `socialUrls` (Facebook/Instagram) → ikonat në footer + `sameAs`
- `orderUrl` → destinacioni real i butonit “Porosit tani” (tani çon te #kontakt)
- Konfirmo klasifikimin e **B52** (alkool apo jo) para ndonjë etikete 18+.

Në zhvillim fushat bosh shfaqen si “Për t’u plotësuar”; në prodhim fshihen automatikisht.

## Publikimi (Vercel + Namecheap)
1. Repo i ri GitHub për këtë faqe → projekt i ri Vercel (Astro zbulohet vetë, static).
2. Te projekti i ri → Domains → shto `sufllaqegersi.com` + `www.sufllaqegersi.com`.
   Vercel do të thotë “në përdorim nga projekti `gersi`” → **Move** (konfirmo).
   Kjo i heq nga projekti i menusë; menuja mban vetëm `menu.sufllaqegersi.com`.
3. Zgjidh njërën si primare (p.sh. apex) dhe tjetrën 301 → te primarja (në Vercel).
4. DNS është te Namecheap me nameserverat drejt Vercel (tashmë “Valid”), s’duhet ndryshim.

## Follow-ups (opsionale)
- Self-host fontet Fraunces/Manrope (WOFF2, subset latin-ext) për performancë maksimale;
  tani ngarkohen nga Google Fonts.
- Foto reale të produkteve/lokalit (aktualet janë ilustrime konceptuale).
- Logo vektoriale (SVG) / cutout transparent për header në vend të `logo-on-cream.png`.
