import { useEffect, useRef } from 'react'

/**
 * Reveal — buttery scroll-in wrapper.
 * Adds .is-visible when the element enters viewport.
 * Props: delay (ms), className, as
 */
const Reveal = ({ children, delay = 0, className = '', y = 26 }) => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible')
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add('is-visible')
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms`, ['--reveal-y']: `${y}px` }}
    >
      {children}
    </div>
  )
}

export default Reveal
