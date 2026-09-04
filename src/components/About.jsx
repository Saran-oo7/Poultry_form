import Icon from './Icons.jsx'
import { HatchScene } from './Illustrations.jsx'
import photo from '../assets/photos.js'
import Reveal from './Reveal.jsx'
import { business, strengths } from '../data/site.js'

// src/assets/about.jpg if it is there, the hatching-egg animation if it is not
const aboutPhoto = photo('about')

export default function About() {
  const years = new Date().getFullYear() - business.founded

  return (
    <section id="about" className="section section-about">
      <div className="container about-grid">
        <Reveal className="about-art">
          <div className={`about-photo${aboutPhoto ? ' has-photo' : ''}`}>
            {aboutPhoto ? (
              <img className="scene" src={aboutPhoto} alt="The farm at Thalaivasal" />
            ) : (
              <HatchScene />
            )}
            <span className="about-badge">
              <strong>{years}</strong>
              <small>years of<br />rearing</small>
            </span>
          </div>
          <div className="about-chips">
            <span><Icon name="award" size={18} /> Since {business.founded}</span>
            <span><Icon name="truck" size={18} /> 5 batches a year</span>
            <span><Icon name="shield" size={18} /> Contract growing</span>
          </div>
        </Reveal>

        <div className="about-copy">
          <Reveal>
            <span className="pill">About the farm</span>
            <h2>
              A family farm at Thalaivasal, rearing birds{' '}
              <span className="hl">since {business.founded}</span>
            </h2>
            <p>
              The farm runs around 10,000 birds a cycle and lifts five batches a
              year, averaging about 15,000 kg of live weight a batch. Everything
              goes out weighed at the gate.
            </p>
            <p>
              Part of the capacity is grown on contract; the rest we sell ourselves
              to traders, meat shops and families around {business.location} who
              would rather buy straight from the shed.
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
