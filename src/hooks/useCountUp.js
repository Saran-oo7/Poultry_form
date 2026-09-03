import { useEffect, useRef, useState } from 'react'

/**
 * Counts from 0 to `target` once the element scrolls into view.
 * Returns { ref, display } — drop the ref on the number element.
 */
export default function useCountUp(target, { duration = 1600, decimals = 0 } = {}) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const run = () => {
      if (started.current) return
      started.current = true

      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduced) return setValue(target)

      const t0 = performance.now()
      const tick = (now) => {
        const p = Math.min((now - t0) / duration, 1)
        // ease-out cubic so it slows down at the end
        const eased = 1 - Math.pow(1 - p, 3)
        setValue(target * eased)
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    if (typeof IntersectionObserver === 'undefined') {
      run()
      return
    }

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          // `bottom < 0` covers landing deep in the page (e.g. /#products):
          // the counter is already scrolled past and would otherwise stay at 0.
          if (e.isIntersecting || e.boundingClientRect.bottom < 0) run()
        }),
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target, duration])

  const display =
    decimals > 0
      ? value.toFixed(decimals)
      : Math.round(value).toLocaleString('en-IN')

  return { ref, display }
}
