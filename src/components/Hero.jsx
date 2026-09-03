import Icon from './Icons.jsx'
import { FarmScene } from './Illustrations.jsx'
import { business, stats } from '../data/site.js'
import useCountUp from '../hooks/useCountUp.js'

function Stat({ value, suffix = '', decimals = 0, label, icon }) {
  const { ref, display } = useCountUp(value, { decimals })
  return (
    <div className="stat">
      <span className="stat-icon">
        <Icon name={icon} size={30} />
      </span>
      <div>
        <strong ref={ref}>
          {display}
          {suffix}
        </strong>
        <span>{label}</span>
      </div>
    </div>
  )
}

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="hero">
      {/* soft moving blobs in the background */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="pill pill-hero">
            <span className="dot" /> Fresh batch lifting every week
          </span>

          <h1>
            <span className="line line-1">Farm raised chicken,</span>
            <span className="line line-2">
              grown <em>right</em> — sold
            </span>
            <span className="line line-3">
              <span className="hl">honestly.</span>
            </span>
          </h1>

          <p className="hero-lead">{business.intro}</p>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => scrollTo('products')}>
              See what we sell <Icon name="arrow" size={18} />
            </button>
            <button className="btn btn-ghost" onClick={() => scrollTo('partners')}>
              Our company tie-ups
            </button>
          </div>

          <ul className="hero-ticks">
            <li>
              <Icon name="check" size={14} /> Live weight shown at the gate
            </li>
            <li>
              <Icon name="check" size={14} /> Vaccinated, vet-checked stock
            </li>
            <li>
              <Icon name="check" size={14} /> Delivery inside 60 km
            </li>
          </ul>
        </div>

        <div className="hero-art">
          <FarmScene />
          <div className="float-card float-card-1">
            <Icon name="egg" size={30} />
            <div>
              <strong>3,200 eggs</strong>
              <span>collected today</span>
            </div>
          </div>
          <div className="float-card float-card-2">
            <Icon name="chart" size={30} />
            <div>
              <strong>1.52 FCR</strong>
              <span>last batch average</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="stat-bar">
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
