import { useEffect, useRef, useState } from 'react'

/**
 * Adds a scroll-reveal animation to an element.
 * Returns a ref plus the class name to apply.
 *
 *   const { ref, cls } = useReveal()
 *   <div ref={ref} className={cls}>...</div>
 */
export default function useReveal({ threshold = 0.15, once = true } = {}) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // No IntersectionObserver (or reduced motion) -> just show it.
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // `bottom < 0` covers content already scrolled past on load (e.g.
          // landing on /#contact) — it must not stay stuck at opacity 0.
          if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) {
            setShown(true)
            if (once) io.unobserve(entry.target)
          } else if (!once) {
            setShown(false)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [threshold, once])

  return { ref, shown, cls: `reveal${shown ? ' is-visible' : ''}` }
}
