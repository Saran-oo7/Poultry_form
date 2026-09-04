import Icon from './Icons.jsx'
import { FarmScene } from './Illustrations.jsx'
import photo from '../assets/photos.js'
import { business, stats } from '../data/site.js'
import useCountUp from '../hooks/useCountUp.js'

// src/assets/hero.jpg if it is there, the drawn scene if it is not
const heroPhoto = photo('hero')

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
            <span className="dot" /> Now taking orders for the next batch
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
              <Icon name="check" size={14} /> Open all days, 7 AM – 8 PM
            </li>
            <li>
              <Icon name="check" size={14} /> Straight from the shed
            </li>
          </ul>
        </div>

        <div className="hero-art">
          {heroPhoto ? (
            <img className="scene" src={heroPhoto} alt="Inside the broiler shed" />
          ) : (
            <FarmScene />
          )}
          <div className="float-card float-card-1">
            <Icon name="hen" size={30} />
            <div>
              <strong>10,000 birds</strong>
              <span>every cycle</span>
            </div>
          </div>
          <div className="float-card float-card-2">
            <Icon name="chart" size={30} />
            <div>
              <strong>1.5 FCR</strong>
              <span>batch average</span>
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
