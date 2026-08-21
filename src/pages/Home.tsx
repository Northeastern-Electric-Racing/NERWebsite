import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap, useGSAP } from '../lib/gsap'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CountUp from '../components/CountUp'
import { SITE, STATS, CHAPTERS } from '../data/content'
import { CORE_VALUES } from '../data/site'

const base = import.meta.env.BASE_URL

function Hero() {
  const scope = useRef<HTMLElement>(null)
  const played = useRef(false)

  useGSAP(
    () => {
      if (played.current) return
      played.current = true
      gsap.from('[data-hero]', { opacity: 0, y: 24, duration: 0.8, ease: 'power3.out', stagger: 0.12, delay: 0.1 })
      gsap.from('[data-hero-img]', { opacity: 0, duration: 1.6, ease: 'power2.out', delay: 0.3, clearProps: 'opacity' })
    },
    { scope },
  )

  return (
    <section ref={scope} className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6">
      <img
        data-hero-img
        src={`${base}images/home/hero.webp`}
        alt=""
        className="pointer-events-none absolute right-0 bottom-0 h-[92%] max-w-none opacity-30 brightness-110 sm:h-[102%] lg:opacity-45"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-carbon via-carbon/70 to-transparent" />
      <div className="relative max-w-3xl">
        <p data-hero className="font-head text-xs uppercase tracking-widest text-racing">
          Northeastern University · Formula EV
        </p>
        <h1 data-hero className="mt-4 text-7xl">
          Ambition <span className="text-racing">drives</span> success.
        </h1>
        <p data-hero className="mt-6 max-w-xl text-lg text-mute">
          {SITE.intro}
        </p>
        <p data-hero className="mt-16 font-head text-xs uppercase tracking-widest text-mute">
          Scroll to begin
        </p>
      </div>
    </section>
  )
}

function Story() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const chapters = gsap.utils.toArray<HTMLElement>('[data-chapter]', root.current!)
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: '+=' + chapters.length * 100 + '%',
            pin: true,
            scrub: 1,
          },
        })
        chapters.forEach((ch, i) => {
          if (i !== 0) tl.to(ch, { opacity: 1, ease: 'none', duration: 1 })
          if (i !== chapters.length - 1) tl.to(ch, { opacity: 0, ease: 'none', duration: 1 }, '+=1')
        })
      })
    },
    { scope: root },
  )

  return (
    <section ref={root} className="story relative h-screen overflow-hidden border-y border-line">
      {CHAPTERS.map((c, i) => (
        <div key={c.kicker} data-chapter className="chapter absolute inset-0">
          {/* Full-screen photo */}
          <img
            src={`${base}images/home/chapter-${i + 1}.jpg`}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
          {/* Dark overlay for text legibility */}
          <div className="absolute inset-0 bg-black/55" />
          {/* Text on top */}
          <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
            <p className="font-head text-xs uppercase tracking-widest text-racing">{c.kicker}</p>
            <h2 className="mt-4 max-w-4xl text-5xl sm:text-7xl">{c.title}</h2>
            <p className="mt-6 max-w-xl text-lg text-mute">{c.text}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

function Values() {
  const grid = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('[data-value]', {
          opacity: 0,
          y: 30,
          rotateX: -50,
          transformOrigin: 'center bottom',
          duration: 0.7,
          ease: 'power3.out',
          stagger: { each: 0.08, from: 'center' },
          scrollTrigger: { trigger: grid.current, start: 'top 80%', once: true },
        })
      })
    },
    { scope: grid },
  )

  return (
    <section className="mx-auto max-w-[1200px] px-6 py-24">
      <SectionHeading eyebrow="What we stand for" title="Core values" />
      <div ref={grid} className="perspective mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CORE_VALUES.map((v) => (
          <div key={v.name} data-value className="border border-line bg-graphite p-7">
            <h3 className="text-2xl">{v.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-mute">{v.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="border-y border-line px-6 py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-8 sm:grid-cols-3">
        {STATS.map((s) => (
          <div key={s.label}>
            <div className="font-display text-6xl">
              <CountUp value={s.value} />
              <span className="ml-1 text-3xl text-amber">{s.suffix}</span>
            </div>
            <p className="mt-1 font-head text-xs uppercase tracking-widest text-mute">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function JoinCta() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-24 text-center">
      <Reveal>
        <h2 className="text-4xl sm:text-6xl">Build a racecar with us</h2>
        <p className="mx-auto mt-5 max-w-xl text-mute">We recruit on interest and curiosity, not on your résumé.</p>
        <Link
          to="/join"
          className="mt-8 inline-block bg-racing px-6 py-3 font-head text-sm font-semibold uppercase tracking-widest text-white"
        >
          Join the team
        </Link>
      </Reveal>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <Values />
      <Stats />
      <JoinCta />
    </>
  )
}
