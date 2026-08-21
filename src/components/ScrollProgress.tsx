import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap'

export default function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.to(bar.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: { trigger: document.documentElement, start: 'top top', end: 'bottom bottom', scrub: 0.3 },
    })
  })

  return <div ref={bar} className="fixed left-0 top-0 z-[60] h-1 w-full origin-left scale-x-0 bg-racing" />
}
