import { useEffect, useState } from 'react'
import Icon from './Icons.jsx'
import { business, nav } from '../data/site.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  /* solid background once the page scrolls */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* highlight the section currently on screen */
  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter(Boolean)
    if (!sections.length) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  /* lock body scroll while the mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (e, id) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a className="brand" href="#home" onClick={(e) => go(e, 'home')}>
          <span className="brand-mark">
            <Icon name="hen" size={34} />
          </span>
          <span className="brand-text">
            <strong>{business.name}</strong>
            <small>{business.location}</small>
          </span>
        </a>

        <nav className={`nav-links ${open ? 'is-open' : ''}`}>
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? 'is-active' : ''}
              onClick={(e) => go(e, item.id)}
            >
              {item.label}
            </a>
          ))}
          <a className="btn btn-sm btn-primary nav-cta" href={`tel:${business.phone}`}>
            <Icon name="phone" size={16} /> Call now
          </a>
        </nav>

        <button
          className="nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>
      </div>
      {open && <div className="nav-scrim" onClick={() => setOpen(false)} />}
    </header>
  )
}
