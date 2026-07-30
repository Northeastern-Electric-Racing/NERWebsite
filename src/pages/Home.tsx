import { useEffect, useRef } from 'react'
import { animate, stagger, prefersReducedMotion } from '../lib/motion'
import Reveal from '../components/Reveal'

function Hero() {
  const scope = useRef<HTMLElement>(null)
  const played = useRef(false)

  useEffect(() => {
    if (played.current || prefersReducedMotion()) return
    played.current = true
    const els = scope.current!.querySelectorAll<HTMLElement>('[data-hero]')
    animate(els, {
      opacity: [0, 1],
      translateY: [22, 0],
      duration: 720,
      delay: stagger(110, { start: 120 }),
      ease: 'out(3)',
    })
  }, [])

  return (
    <section ref={scope} className="flex min-h-screen flex-col justify-center px-6">
      <p data-hero className="font-head text-xs uppercase tracking-widest text-racing" style={{ opacity: 0 }}>
        Northeastern University · Formula EV
      </p>
      <h1 data-hero className="mt-4 text-7xl" style={{ opacity: 0 }}>
        Ambition <span className="text-racing">drives</span> success.
      </h1>
      <p data-hero className="mt-6 max-w-xl text-lg text-mute" style={{ opacity: 0 }}>
        some info ab team
      </p>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal className="px-6 py-24">
        <h2 className="text-4xl">Next section</h2>
        <p className="mt-4 text-mute">This one fades in when you scroll to it.</p>
      </Reveal>
    </>
  )
}