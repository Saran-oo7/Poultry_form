import Icon from './Icons.jsx'
import Reveal from './Reveal.jsx'
import { partners } from '../data/site.js'

export default function Partners() {
  return (
    <section id="partners" className="section section-partners">
      <div className="container">
        <Reveal className="section-head">
          <span className="pill">Companies we work with</span>
          <h2>
            Who we are <span className="hl">tied up with</span> for growing and
            selling
          </h2>
          <p>
            Contract growing keeps the sheds full; the off-take agreements keep the
            birds moving. Between them we place chicks and lift batches on a fixed
            calendar instead of guessing the market.
          </p>
        </Reveal>

        <div className="partner-grid">
          {partners.map((p, i) => (
            <Reveal className="card partner" key={p.name} delay={i * 80}>
              <span className="partner-logo">
                <Icon name={p.logo} size={40} />
              </span>
              <div className="partner-body">
                <h3>{p.name}</h3>
                <span className="partner-type">{p.type}</span>
                <p>{p.scope}</p>
              </div>
              <span className="partner-since">Since {p.since}</span>
            </Reveal>
          ))}
        </div>

        <Reveal className="tieup-banner">
          <div>
            <h3>Want to place your birds with us?</h3>
            <p>
              We take on contract growing for integrators and buy-back arrangements
              for feed and chick suppliers. Shed capacity is booked one cycle ahead.
            </p>
          </div>
          <a className="btn btn-primary" href="#contact">
            Talk about a tie-up <Icon name="arrow" size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
