import Icon from './Icons.jsx'
import Reveal from './Reveal.jsx'

/*
 * Six tiles from around the farm.
 *
 * Each tile draws an animated SVG vignette by default. To use a real
 * photograph instead, drop the file in src/assets/ and add a `photo` to the
 * entry below:
 *
 *   import brooder from '../assets/brooder.jpg'
 *   { ..., photo: brooder }
 */
const tiles = [
  {
    id: 'brooder',
    title: 'Brooding shed, day 3',
    note: 'Heat lamps at 33°C, paper feeding',
    tone: 'warm',
    icons: ['brooder', 'chick', 'chick'],
    photo: null,
  },
  {
    id: 'feeding',
    title: 'Feeding line',
    note: 'Pan feeders topped up four times a day',
    tone: 'sand',
    icons: ['feed', 'hen'],
    photo: null,
  },
  {
    id: 'eggs',
    title: 'Morning collection',
    note: 'Graded and trayed before 9 AM',
    tone: 'cream',
    icons: ['egg', 'egg', 'egg'],
    photo: null,
  },
  {
    id: 'range',
    title: 'Country bird range',
    note: 'Open run from first light to dusk',
    tone: 'green',
    icons: ['rooster', 'leaf'],
    photo: null,
  },
  {
    id: 'health',
    title: 'Vaccination round',
    note: 'Lasota and IBD on schedule',
    tone: 'blue',
    icons: ['shield', 'chick'],
    photo: null,
  },
  {
    id: 'loading',
    title: 'Night loading',
    note: 'Weighed, crated and away by 4 AM',
    tone: 'dusk',
    icons: ['truck', 'hen'],
    photo: null,
  },
]

function Vignette({ icons }) {
  return (
    <div className="vignette" aria-hidden="true">
      <span className="vg-sun" />
      {icons.map((n, i) => (
        <span className={`vg-item vg-item-${i + 1}`} key={`${n}-${i}`}>
          <Icon name={n} size={i === 0 ? 74 : 48} />
        </span>
      ))}
      <span className="vg-ground" />
    </div>
  )
}

export default function Gallery() {
  return (
    <section className="section section-gallery">
      <div className="container">
        <Reveal className="section-head">
          <span className="pill">Around the farm</span>
          <h2>
            A day here, from the <span className="hl">brooder to the truck</span>
          </h2>
          <p>
            Buyers are welcome to walk the sheds before booking — call ahead so we
            can hand you a pair of shed slippers.
          </p>
        </Reveal>

        <div className="gallery-grid">
          {tiles.map((t, i) => (
            <Reveal className={`tile tone-${t.tone}`} key={t.id} delay={i * 70}>
              {t.photo ? (
                <img src={t.photo} alt={t.title} loading="lazy" />
              ) : (
                <Vignette icons={t.icons} />
              )}
              <div className="tile-cap">
                <strong>{t.title}</strong>
                <span>{t.note}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
