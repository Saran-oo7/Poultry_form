import { useEffect, useState } from 'react'
import Icon from './Icons.jsx'
import { business } from '../data/site.js'

/* WhatsApp bubble + back-to-top, both appear after the first scroll. */
export default function FloatingCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`floaters ${show ? 'is-show' : ''}`}>
      <button
        className="floater floater-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <Icon name="arrow" size={20} className="rot-up" />
      </button>

      <a
        className="floater floater-wa"
        href={`https://wa.me/${business.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <span className="ping" />
        <Icon name="whatsapp" size={26} />
      </a>
    </div>
  )
}
