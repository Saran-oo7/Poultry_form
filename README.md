# SM Poultry Farm — website

Single-page site for SM Poultry Farm, Thalaivasal, Attur, Salem: what the farm
sells, how the birds are grown, and the companies it is tied up with.

**Live:** https://poultry-farm-pink.vercel.app

Built with **React 18 + Vite**. No UI library and no icon package — every icon
and illustration is hand-drawn inline SVG animated with CSS, so there are no
image files to host and nothing breaks offline.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:5173

```bash
npm run build     # production build into dist/
npm run preview   # serve the production build
```

> Needs Node.js 18 or newer. On Windows: `winget install OpenJS.NodeJS.LTS`
> (close and reopen the terminal afterwards so `node` is on the PATH).

## Deploying

The repo is connected to Vercel, so **every push to `main` redeploys the live
site** in about 30 seconds:

```bash
git add -A
git commit -m "Update rates"
git push
```

To deploy without a push:

```bash
vercel --prod
```

### Other hosts

Netlify works the same way — build command `npm run build`, output directory
`dist`, Node 20+. Leave `VITE_BASE` unset; these hosts serve from the domain
root and `vite.config.js` falls back to `/`.

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) is a working
GitHub Pages pipeline, set to **manual trigger only** because Pages needs a
public repo on a free account. To switch it on once the repo is public,
uncomment the `push:` block and set Settings → Pages → Source to
"GitHub Actions". It passes the repo name to Vite as `VITE_BASE` so the asset
paths come out right.

## Sections

| Section | What it shows |
| --- | --- |
| Hero | Headline, animated farm scene, counters (birds/cycle, years, FCR, batches) |
| Founder | Animated card for the founder — monogram or photo, and three facts |
| Marquee | Scrolling ticker of what the farm supplies |
| About | Farm story, hatching-egg animation, four strengths |
| What We Sell | Five product cards with rates, weights and filter chips |
| Growth Cycle | Day 0 → day 40 accordion timeline plus an animated weight curve |
| Around the Farm | Six gallery tiles — animated vignettes now, real photos when you have them |
| Tie-Ups | The companies the farm grows for / sells to, plus a contract-growing CTA |
| Contact | Farm details plus an enquiry form that opens a pre-filled WhatsApp message |

## Editing the content

**Everything is in one file: [`src/data/site.js`](src/data/site.js).**

- `founder` — name, role, the line under it, an optional quote and the facts
- `business` — farm name, phone, WhatsApp number, email, address, hours
- `stats` — the four counters under the hero
- `products` — what you sell, with rate, weight band, blurb and tags
- `growthStages` — the day-by-day rearing programme
- `partners` — companies you are tied up with
- `strengths`, `nav`

Rates are hardcoded. When the market moves, edit `price` on the product in
`site.js`, commit and push — the live site follows.

## Adding real photos

Drop a photo in `src/assets/` and the matching section swaps the drawn artwork
for it on the next reload. **The filename is the wiring** — there is no import
to add and no component to edit:

| File | Where it shows |
| --- | --- |
| `hero.jpg` | Hero, in place of the drawn farm scene |
| `founder.jpg` | Founder card, in place of the monogram medallion (also used in the footer) |
| `about.jpg` | About, in place of the hatching-egg animation |
| `brooder.jpg` `feeding.jpg` `eggs.jpg` `range.jpg` `health.jpg` `loading.jpg` | One per tile in "Around the farm" |

`.jpg`, `.jpeg`, `.png` and `.webp` all work. A name you leave out simply keeps
its animation, so a half-finished set still builds and still looks right, and
any other file in the folder is ignored.

About 1600px wide is plenty — the gallery tiles crop to 230px tall and the
About frame to 420px. Vite hashes and compresses them at build time.

Use photos of your own sheds. Photos taken on a phone at the farm look more
convincing here than stock images, and stock or search-result images are
usually someone else's copyright — a visible agency watermark on a live
business site is both a legal problem and a bad look.

The plumbing lives in [`src/assets/photos.js`](src/assets/photos.js).

## Structure

```
src/
  data/site.js            all site content
  hooks/useReveal.js      scroll-into-view animation
  hooks/useCountUp.js     animated number counters
  components/
    Icons.jsx             animated SVG icon set (hen, rooster, chick, egg, feed…)
    Illustrations.jsx     farm scene, hatching egg, growth curve
    Navbar / Hero / Marquee / About / Products /
    GrowthCycle / Gallery / Partners / Contact / Footer / FloatingCTA
  index.css               tokens, buttons, every keyframe
  styles/sections.css     section layouts + responsive rules
```

All animation respects `prefers-reduced-motion`.
