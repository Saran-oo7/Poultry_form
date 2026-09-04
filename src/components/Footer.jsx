import Icon from './Icons.jsx'
import photo from '../assets/photos.js'
import { business, founder, nav, products, phoneHref } from '../data/site.js'

const founderPhoto = photo('founder')
const founderInitials = founder.name
  .split(/\s+/)
  .filter(Boolean)
  .slice(0, 2)
  .map((w) => w[0].toUpperCase())
  .join('')

export default function Footer() {
  const go = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      {/* decorative running chicks along the top edge */}
      <div className="footer-run" aria-hidden="true">
        <Icon name="chick" size={30} className="run-chick run-1" />
        <Icon name="chick" size={26} className="run-chick run-2" />
        <Icon name="hen" size={38} className="run-chick run-3" />
      </div>

      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="brand-mark">
            <Icon name="hen" size={34} />
          </span>
          <strong>{business.name}</strong>
          <p>{business.tagline}</p>
          <a className="footer-founder" href="#founder" onClick={(e) => go(e, 'founder')}>
            {founderPhoto ? (
              <img src={founderPhoto} alt={founder.name} loading="lazy" />
            ) : (
              <span className="footer-monogram" aria-hidden="true">
                {founderInitials}
              </span>
            )}
            <div>
              <strong>{founder.name}</strong>
              <span>
                {founder.role} · since {founder.since}
              </span>
            </div>
          </a>

          <div className="footer-social">
            <a href={`https://wa.me/${business.whatsapp}`} aria-label="WhatsApp" target="_blank" rel="noreferrer">
              <Icon name="whatsapp" size={18} />
            </a>
            <a href={phoneHref} aria-label="Call">
              <Icon name="phone" size={18} />
            </a>
            <a href={`mailto:${business.email}`} aria-label="Email">
              <Icon name="mail" size={18} />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Sections</h4>
          <ul>
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} onClick={(e) => go(e, n.id)}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>We supply</h4>
          <ul>
            {products.map((p) => (
              <li key={p.id}>
                <a href="#products" onClick={(e) => go(e, 'products')}>
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Farm</h4>
          <ul className="footer-plain">
            <li>{business.address}</li>
            <li>{business.hours}</li>
            <li>
              <a href={phoneHref}>{business.phone}</a>
            </li>
            <li>
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </span>
        <span>Rates shown are indicative and change with the market.</span>
      </div>
    </footer>
  )
}
