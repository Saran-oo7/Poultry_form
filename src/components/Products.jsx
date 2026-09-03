import { useState } from 'react'
import Icon from './Icons.jsx'
import Reveal from './Reveal.jsx'
import { products, business } from '../data/site.js'

const filters = [
  { id: 'all', label: 'Everything' },
  { id: 'live', label: 'Live birds', match: ['broiler', 'country', 'chicks'] },
  { id: 'produce', label: 'Eggs & produce', match: ['eggs', 'manure'] },
  { id: 'supply', label: 'Feed & supplies', match: ['feed', 'manure'] },
]

export default function Products() {
  const [filter, setFilter] = useState('all')

  const shown =
    filter === 'all'
      ? products
      : products.filter((p) =>
          filters.find((f) => f.id === filter)?.match.includes(p.id)
        )

  return (
    <section id="products" className="section section-products">
      <div className="container">
        <Reveal className="section-head">
          <span className="pill">What we sell</span>
          <h2>
            Six things leave this farm — and every one of them is{' '}
            <span className="hl">weighed in front of you</span>
          </h2>
          <p>
            Prices below are farm-gate rates and move with the market. Ring us for
            the day's rate and for bulk or standing-order pricing.
          </p>
        </Reveal>

        <div className="filter-row">
          {filters.map((f) => (
            <button
              key={f.id}
              className={`chip ${filter === f.id ? 'is-active' : ''}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {shown.map((p, i) => (
            <Reveal className={`card product accent-${p.accent}`} key={p.id} delay={i * 70}>
              <div className="product-top">
                <span className="product-icon">
                  <Icon name={p.icon} size={54} />
                </span>
                <span className="product-price">
                  <strong>{p.price}</strong>
                  <small>{p.unit}</small>
                </span>
              </div>

              <h3>{p.name}</h3>
              <span className="product-weight">
                <Icon name="chart" size={15} /> {p.weight}
              </span>
              <p>{p.blurb}</p>

              <ul className="tag-list">
                {p.tags.map((t) => (
                  <li key={t}>
                    <Icon name="check" size={11} /> {t}
                  </li>
                ))}
              </ul>

              <a className="product-link" href={`tel:${business.phone}`}>
                Ask today's rate <Icon name="arrow" size={16} />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
