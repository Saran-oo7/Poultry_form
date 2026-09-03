import { useEffect, useState } from 'react'
import Icon from './Icons.jsx'
import Reveal from './Reveal.jsx'
import { testimonials } from '../data/site.js'

export default function Testimonials() {
  const [i, setI] = useState(0)

  /* auto-advance, pauses when the tab is hidden */
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="section section-quotes">
      <div className="container">
        <Reveal className="section-head">
          <span className="pill pill-light">Buyers</span>
          <h2>What the people who buy from us say</h2>
        </Reveal>

        <Reveal className="quote-stage">
          <span className="quote-mark">
            <Icon name="quote" size={44} />
          </span>
          {testimonials.map((t, idx) => (
            <figure key={t.name} className={`quote ${idx === i ? 'is-active' : ''}`}>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <span className="avatar">{t.name.charAt(0)}</span>
                <span>
                  <strong>{t.name}</strong>
                  <small>{t.role}</small>
                </span>
              </figcaption>
            </figure>
          ))}

          <div className="quote-dots">
            {testimonials.map((t, idx) => (
              <button
                key={t.name}
                className={idx === i ? 'is-active' : ''}
                onClick={() => setI(idx)}
                aria-label={`Show review ${idx + 1}`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
