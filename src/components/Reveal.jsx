import useReveal from '../hooks/useReveal.js'

/**
 * Wrapper that fades + lifts its children into view on scroll.
 * `delay` is in milliseconds and staggers grids nicely.
 */
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const { ref, cls } = useReveal()
  return (
    <Tag
      ref={ref}
      className={`${cls} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
