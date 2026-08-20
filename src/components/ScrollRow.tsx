import { useEffect, useRef, useState } from 'react'
import type { Person } from '../data/people'
import MemberCard from './MemberCard'

export default function ScrollRow({ people }: { people: Person[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(true)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el
      setAtStart(scrollLeft <= 1)
      setAtEnd(scrollLeft + clientWidth >= scrollWidth - 1)
    }
    update()
    const raf = requestAnimationFrame(update)
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [people.length])

  const fadeL = !atStart
  const fadeR = !atEnd
  const mask =
    fadeL && fadeR
      ? 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
      : fadeL
        ? 'linear-gradient(to right, transparent, black 5%)'
        : fadeR
          ? 'linear-gradient(to right, black 95%, transparent)'
          : 'none'

  return (
    <div
      ref={ref}
      className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      style={{ maskImage: mask, WebkitMaskImage: mask }}
    >
      {people.map((person) => (
        <div key={person.name + person.roleTitle} className="w-48 flex-none">
          <MemberCard person={person} />
        </div>
      ))}
    </div>
  )
}
