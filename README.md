# Sunrise Poultry Farm — React portfolio website

A single-page portfolio site for a poultry farm: what the farm sells, how the
birds are grown, and which companies the farm is tied up with.

Built with **React 18 + Vite**. No UI library, no icon package — every icon and
illustration is hand-drawn inline SVG animated with CSS, so nothing breaks
offline and there are no image files to host.

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

## Putting it on GitHub

The repo is already initialised with one commit. Create an empty repo on
GitHub (no README, no .gitignore — this project has both), then:

```bash
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Deploying

### Netlify or Vercel — use this for a private repo

Both deploy private repositories on the free tier and both auto-detect Vite.
Sign in with GitHub, import the repo, and accept the defaults:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Publish / output directory | `dist` |
| Node version | 20 or newer |

Leave `VITE_BASE` unset — these hosts serve from the domain root and
`vite.config.js` already falls back to `/`. Every push to `main` redeploys.

### GitHub Pages — public repos only on a free account

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) is ready but set
to **manual trigger only**, so it will not fail on every push while the repo is
private. To switch it on once the repo is public:

1. Uncomment the `push:` block at the top of the workflow.
2. On GitHub go to **Settings → Pages → Build and deployment** and set
   **Source** to **GitHub Actions** (not "Deploy from a branch").

It then publishes to `https://<your-username>.github.io/<repo-name>/`. The
workflow passes the repo name to Vite as `VITE_BASE` so the asset paths are
right without you editing anything.

### Custom domain

Point the domain at whichever host you picked and leave `VITE_BASE` unset — a
root domain serves assets from `/`.

## Sections

| Section | What it shows |
| --- | --- |
| Hero | Headline, animated sunrise farm scene, live counters (birds/cycle, FCR, years, buyers) |
| Marquee | Scrolling ticker of everything the farm supplies |
| About | Farm story, hatching-egg animation, four strengths |
| What We Sell | Six product cards with prices, weights and filter chips |
| Growth Cycle | Day 0 → day 42 accordion timeline plus an animated weight curve |
| Around the Farm | Six gallery tiles — animated vignettes now, real photos when you have them |
| Tie-Ups | The companies the farm grows for / sells to, plus a contract-growing CTA |
| Reviews | Auto-rotating buyer testimonials |
| Contact | Details plus an enquiry form that opens a pre-filled WhatsApp message |

## Editing the content

**Everything is in one file: [`src/data/site.js`](src/data/site.js).**

- `business` — name, phone, WhatsApp number, email, address, hours
- `stats` — the four counters under the hero
- `products` — what you sell, with price, weight band, blurb and tags
- `growthStages` — the day-by-day rearing programme
- `partners` — companies you are tied up with
- `strengths`, `testimonials`, `nav`

> The partner companies shipped in the file (AgriNest Foods, Kaveri Feed Mills,
> Ovo Hatcheries, FreshLine Retail, GreenAcre Organics, VetCare Animal Health)
> are **placeholder names** so the layout can be demoed. Replace them with the
> real companies you work with before putting this online. The same goes for the
> phone number, address and rates.

## Adding real photos

The illustrations are components, so swapping in photographs is a small change.
Drop your images in `src/assets/` and replace, for example, `<FarmScene />` in
`src/components/Hero.jsx` with:

```jsx
import shed from '../assets/shed.jpg'
...
<img className="scene" src={shed} alt="Our broiler shed at sunrise" />
```

`.scene` already carries the rounded corners and shadow, so it will look right.

For the gallery, it is even simpler — each tile in `src/components/Gallery.jsx`
has a `photo: null` field. Import your image and set it, and the tile swaps the
drawn vignette for the photograph automatically:

```jsx
import brooder from '../assets/brooder.jpg'
...
{ id: 'brooder', title: 'Brooding shed, day 3', /* … */ photo: brooder },
```

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
    GrowthCycle / Gallery / Partners / Testimonials / Contact / Footer / FloatingCTA
  index.css               tokens, buttons, every keyframe
  styles/sections.css     section layouts + responsive rules
```

All animation respects `prefers-reduced-motion`.
