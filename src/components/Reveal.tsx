import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { revealIn, prefersReducedMotion } from '../lib/motion'

export default function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const startHidden = useRef(!prefersReducedMotion())

  useEffect(() => {
    const el = ref.current
    if (!el || !startHidden.current) return
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealIn(el)
            obs.unobserve(el)
          }
        })
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={className} style={{ opacity: startHidden.current ? 0 : 1 }}>
      {children}
    </div>
  )
}