import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap'

export default function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        el.textContent = String(value)
        return
      }
      const obj = { v: 0 }
      gsap.to(obj, {
        v: value,
        duration: 1.6,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        onUpdate: () => {
          el.textContent = String(Math.round(obj.v))
        },
      })
    },
    { scope: ref },
  )

  return <span ref={ref}>0</span>
}
