import { useParams, Link, NavLink } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { DIVISIONS, EBOARD } from '../data/people'
import type { Subteam } from '../data/people'
import { DIVISION_INFO } from '../data/site'
import { SUBTEAM_INFO } from '../data/subteams'

const EBOARD_NAMES = new Set(EBOARD.map((m) => m.name))
const project = (roleTitle: string) => roleTitle.replace(/\s+Lead$/, '')

function SubteamBlock({ divisionKey, subteam }: { divisionKey: string; subteam: Subteam }) {
  const { name, head, leads } = subteam
  const description = SUBTEAM_INFO[`${divisionKey}/${name}`]
  const showHead = head && !EBOARD_NAMES.has(head.name)

  return (
    <div className="grid gap-6 border-t border-line py-10 md:grid-cols-[1fr_1.2fr]">
      <div>
        <h3 className="text-3xl text-ink">{name}</h3>
        {description && <p className="mt-3 max-w-md text-sm leading-relaxed text-mute">{description}</p>}
      </div>
      <div>
        {showHead && head && (
          <p className="mb-4 text-ink">
            <span className="mr-2 inline-block bg-racing px-2 py-0.5 font-head text-[10px] uppercase tracking-widest text-white">
              Head
            </span>
            {head.name}
          </p>
        )}
        {leads.length > 0 && (
          <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {leads.map((person) => (
              <li key={person.name + person.roleTitle} className="text-sm">
                <span className="text-ink">{person.name}</span>
                <span className="text-mute"> - {project(person.roleTitle)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default function Division() {
  const { key } = useParams<{ key: string }>()
  const division = DIVISIONS.find((d) => d.key === key)

  if (!division) {
    return (
      <div className="mx-auto max-w-[1600px] px-4 pt-32 pb-16 sm:px-6">
        <h1 className="text-5xl">Division not found</h1>
        <Link to="/teams" className="mt-6 inline-block font-head text-sm uppercase tracking-widest text-racing">
          Back to teams
        </Link>
      </div>
    )
  }

  const subteams = [...division.subteams].sort((a, b) => b.leads.length - a.leads.length)

  return (
    <div>
      <PageHeader eyebrow="Teams" title={division.name} lead={DIVISION_INFO[division.key]} />

      <section className="mx-auto max-w-[1600px] px-4 pb-20 sm:px-6">
        {/* Division switcher */}
        <div className="flex flex-wrap gap-2 border-y border-line py-4">
          {DIVISIONS.map((d) => (
            <NavLink
              key={d.key}
              to={`/teams/${d.key}`}
              className={({ isActive }) =>
                `border px-4 py-2 font-head text-xs uppercase tracking-widest transition-colors ${
                  isActive ? 'border-racing bg-racing text-white' : 'border-line text-mute hover:border-racing hover:text-racing'
                }`
              }
            >
              {d.name}
            </NavLink>
          ))}
        </div>

        {/* Chief(s), named only */}
        <div className="mt-6 flex flex-wrap items-baseline gap-x-8 gap-y-2">
          <span className="font-head text-[11px] uppercase tracking-widest text-mute">
            {division.chiefs.length > 1 ? 'Division Chiefs' : 'Division Chief'}
          </span>
          {division.chiefs.map((chief) => (
            <span key={chief.name} className="text-ink">
              {chief.name}
              <span className="text-mute"> - {chief.roleTitle}</span>
            </span>
          ))}
        </div>

        {/* Subteams: the work */}
        <div className="mt-4">
          {subteams.map((subteam) => (
            <SubteamBlock key={subteam.name} divisionKey={division.key} subteam={subteam} />
          ))}
        </div>

        <div className="mt-10">
          <Link to="/leadership" className="font-head text-xs uppercase tracking-widest text-racing hover:underline">
            See the full team on the Leadership page
          </Link>
        </div>
      </section>
    </div>
  )
}
