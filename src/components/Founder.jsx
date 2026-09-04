import Icon from './Icons.jsx'
import Reveal from './Reveal.jsx'
import photo from '../assets/photos.js'
import { founder } from '../data/site.js'

// src/assets/founder.jpg when it is there, the monogram medallion until then
const founderPhoto = photo('founder')

/** Initials for the fallback medallion: "Rajasekaran Viswanathan" -> "RV". */
const initials = founder.name
  .split(/\s+/)
  .filter(Boolean)
  .slice(0, 2)
  .map((w) => w[0].toUpperCase())
  .join('')

export default function Founder() {
  return (
    <section id="founder" className="section section-founder">
      <div className="container">
        <Reveal className="founder-card">
          {/* sweeps across once the card comes into view, and again on hover */}
          <span className="founder-sheen" aria-hidden="true" />

          <div className="founder-portrait">
            <span className="founder-ring" aria-hidden="true" />
            {founderPhoto ? (
              <img src={founderPhoto} alt={founder.name} loading="lazy" />
            ) : (
              <span className="founder-monogram" aria-hidden="true">
                {initials}
              </span>
            )}
            <span className="founder-seal">
              <Icon name="award" size={20} />
            </span>
          </div>

          <div className="founder-body">
            <span className="pill founder-pill">
              <span className="dot" /> {founder.role} · since {founder.since}
            </span>

            <h2 className="founder-name">{founder.name}</h2>
            <p className="founder-line">{founder.line}</p>

            {founder.quote ? (
              <blockquote className="founder-quote">
                <Icon name="quote" size={22} />
                <p>{founder.quote}</p>
              </blockquote>
            ) : null}

            <ul className="founder-facts">
              {founder.facts.map((f, i) => (
                <li key={f.text} style={{ '--i': i }}>
                  <Icon name={f.icon} size={18} />
                  {f.text}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
