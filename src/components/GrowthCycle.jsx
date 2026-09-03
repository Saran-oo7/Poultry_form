import { useState } from 'react'
import Icon from './Icons.jsx'
import Reveal from './Reveal.jsx'
import { GrowthCurve } from './Illustrations.jsx'
import { growthStages } from '../data/site.js'

export default function GrowthCycle() {
  const [open, setOpen] = useState(0)

  return (
    <section id="growth" className="section section-growth">
      <div className="container">
        <Reveal className="section-head">
          <span className="pill pill-light">How a bird grows here</span>
          <h2>
            Day 0 to market weight in about{' '}
            <span className="hl">40 days</span>
          </h2>
          <p>
            The same programme runs on our own batches and on the batches we grow on
            contract. Nothing is skipped when nobody is watching.
          </p>
        </Reveal>

        <div className="growth-layout">
          {/* animated timeline */}
          <ol className="timeline">
            {growthStages.map((s, i) => (
              <Reveal
                as="li"
                key={s.day}
                delay={i * 110}
                className={`tl-item ${open === i ? 'is-open' : ''}`}
              >
                <button className="tl-head" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span className="tl-dot">
                    <Icon name={s.icon} size={26} />
                  </span>
                  <span className="tl-title">
                    <small>{s.day}</small>
                    <strong>{s.title}</strong>
                  </span>
                  <span className="tl-weight">{s.weight}</span>
                </button>
                <div className="tl-body">
                  <p>{s.detail}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          {/* weight curve + summary numbers */}
          <Reveal className="growth-side" delay={150}>
            <div className="card growth-card">
              <h3>Average weight gain</h3>
              <GrowthCurve />
              <div className="growth-figures">
                <div>
                  <strong>1.90 kg</strong>
                  <span>average live weight at lifting</span>
                </div>
                <div>
                  <strong>1.5</strong>
                  <span>feed conversion ratio</span>
                </div>
                <div>
                  <strong>6</strong>
                  <span>batches a year</span>
                </div>
                <div>
                  <strong>15,000 kg</strong>
                  <span>average live weight a batch</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
