/*
 * Photo drop-in.
 *
 * Put a jpg/jpeg/png/webp in this folder and the section that looks for that
 * name picks it up on the next reload. There is no import to add and no
 * component to edit — the filename is the wiring.
 *
 *   hero.jpg       Hero — replaces the drawn farm scene
 *   about.jpg      About — replaces the hatching-egg animation
 *
 *   brooder.jpg    ┐
 *   feeding.jpg    │
 *   eggs.jpg       ├ Around the farm — one photo per tile
 *   range.jpg      │
 *   health.jpg     │
 *   loading.jpg    ┘
 *
 * Any other file in here is ignored, and a missing name simply keeps the
 * drawn artwork, so a half-finished set still builds and still looks right.
 *
 * Use photos you own — farm shots taken on a phone are fine and beat stock.
 * Roughly 1600px wide is plenty; the tiles crop to 230px tall.
 */
const files = import.meta.glob('./*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

const byName = {}
for (const path of Object.keys(files)) {
  const name = path.replace(/^\.\//, '').replace(/\.[^.]+$/, '')
  byName[name] = files[path]
}

/** URL for the photo saved as `<name>.<ext>`, or null when there isn't one. */
export default function photo(name) {
  return byName[name] ?? null
}
