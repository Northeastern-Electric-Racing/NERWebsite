import type { Person } from '../data/people'

// Plain photo card (no modal). Used for the E-board on the Leadership page.
export default function MemberCard({ person }: { person: Person }) {
  const { name, roleTitle, photo, linkedin } = person

  const card = (
    <div className="group border border-line bg-graphite transition-all duration-300 ease-out hover:-translate-y-1 hover:border-racing hover:shadow-[0_0_20px_rgba(242,46,39,0.35)]">
      <div className="aspect-[4/5] w-full overflow-hidden bg-carbon">
        {photo ? <img src={photo} alt={name} loading="lazy" decoding="async" className="h-full w-full object-cover object-top" /> : null}
      </div>
      <div className="p-4">
        <h4 className="truncate text-lg text-ink" title={name}>
          {name}
        </h4>
        <p className="mt-0.5 truncate font-head text-[11px] uppercase tracking-widest text-mute" title={roleTitle}>
          {roleTitle}
        </p>
      </div>
    </div>
  )

  if (linkedin) {
    return (
      <a href={linkedin} target="_blank" rel="noreferrer" aria-label={`${name} on LinkedIn`} className="block">
        {card}
      </a>
    )
  }
  return card
}
