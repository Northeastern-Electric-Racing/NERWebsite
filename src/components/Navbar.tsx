import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

type Item = { to: string; label: string }
type Group = { label: string; items: Item[] }

const HOME: Item = { to: '/', label: 'Home' }
const ABOUT: Item = { to: '/about', label: 'About' }
const TEAM: Group = {
  label: 'Team',
  items: [
    { to: '/leadership', label: 'Leadership' },
    { to: '/teams', label: 'Divisions' },
  ],
}
const CAR: Group = {
  label: 'The Car',
  items: [
    { to: '/car', label: 'Car Portfolio' },
    { to: '/competitions', label: 'Competition History' },
  ],
}
const JOIN: Item = { to: '/join', label: 'Join' }
const SPONSORS: Item = { to: '/sponsors', label: 'Sponsors' }

const linkBase = 'font-head text-xs font-semibold uppercase tracking-widest transition-colors'
const navClass = ({ isActive }: { isActive: boolean }) =>
  `${linkBase} ${isActive ? 'text-racing' : 'text-mute hover:text-ink'}`

function Dropdown({ group }: { group: Group }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onEsc)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onEsc)
    }
  }, [])

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button type="button" className={`${linkBase} text-mute hover:text-ink`} onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        {group.label} <span aria-hidden="true">▾</span>
      </button>
      {open && (
        <div className="absolute left-0 top-full min-w-48 border border-line bg-carbon/95 backdrop-blur">
          {group.items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block whitespace-nowrap px-4 py-3 ${linkBase} ${isActive ? 'text-racing' : 'text-mute hover:text-ink'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const mobileGroups: Group[] = [
    { label: '', items: [HOME, ABOUT] },
    TEAM,
    CAR,
    { label: '', items: [JOIN, SPONSORS] },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen ? 'border-b border-line bg-carbon/95 backdrop-blur' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 sm:px-6">
        <Link to="/" className="font-display text-xl uppercase text-ink" onClick={() => setMenuOpen(false)}>
          NER
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-7 md:flex">
          <NavLink to={HOME.to} end className={navClass}>
            {HOME.label}
          </NavLink>
          <NavLink to={ABOUT.to} className={navClass}>
            {ABOUT.label}
          </NavLink>
          <Dropdown group={TEAM} />
          <Dropdown group={CAR} />
          <NavLink to={JOIN.to} className={navClass}>
            {JOIN.label}
          </NavLink>
          <NavLink to={SPONSORS.to} className={navClass}>
            {SPONSORS.label}
          </NavLink>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="font-head text-sm uppercase tracking-widest text-ink md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {/* Mobile panel */}
      {menuOpen && (
        <div className="border-t border-line bg-carbon md:hidden">
          <div className="mx-auto flex max-w-[1600px] flex-col px-4 py-3 sm:px-6">
            {mobileGroups.map((g, gi) => (
              <div key={gi} className="border-b border-line/50 py-2 last:border-b-0">
                {g.label && (
                  <p className="py-1 font-head text-[10px] uppercase tracking-widest text-racing">{g.label}</p>
                )}
                {g.items.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-2.5 ${linkBase} ${isActive ? 'text-racing' : 'text-mute'}`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
