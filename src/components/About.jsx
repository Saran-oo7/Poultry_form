import Icon from './Icons.jsx'
import { HatchScene } from './Illustrations.jsx'
import Reveal from './Reveal.jsx'
import { business, strengths } from '../data/site.js'

export default function About() {
  const years = new Date().getFullYear() - business.founded

  return (
    <section id="about" className="section section-about">
      <div className="container about-grid">
        <Reveal className="about-art">
          <div className="about-photo">
            <HatchScene />
            <span className="about-badge">
              <strong>{years}</strong>
              <small>years of<br />rearing</small>
            </span>
          </div>
          <div className="about-chips">
            <span><Icon name="shield" size={18} /> NLM registered</span>
            <span><Icon name="check" size={18} /> FSSAI supply ready</span>
            <span><Icon name="leaf" size={18} /> Deep litter system</span>
          </div>
        </Reveal>

        <div className="about-copy">
          <Reveal>
            <span className="pill">About the farm</span>
            <h2>
              A small farm that runs on <span className="hl">clean sheds and</span>{' '}
              <span className="hl">straight numbers</span>
            </h2>
            <p>
              We started in {business.founded} with two sheds and 4,000 birds. Today we
              run six sheds across {business.location}, place chicks every fortnight,
              and lift a batch almost every week of the year.
            </p>
            <p>
              Half our capacity is grown on contract for integrators; the rest we sell
              ourselves to traders, meat shops, hotels and families who want to know
              exactly how their chicken was raised.
            </p>
          </Reveal>

          <div className="strength-grid">
            {strengths.map((s, i) => (
              <Reveal className="strength" key={s.title} delay={i * 90}>
                <span className="strength-icon">
                  <Icon name={s.icon} size={30} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
