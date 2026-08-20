import type { Subteam } from '../data/people'
import { EBOARD } from '../data/people'

const EBOARD_NAMES = new Set(EBOARD.map((m) => m.name))
const project = (roleTitle: string) => roleTitle.replace(/\s+Lead$/, '')

// Text roster for a subteam (no photos): subteam name, head distinguished,
// then leads as name + role stacked. Used on the Leadership page.
export default function SubteamText({ subteam }: { subteam: Subteam }) {
  const { name, head, leads } = subteam
  const showHead = head && !EBOARD_NAMES.has(head.name)

  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <span className="h-5 w-1.5 flex-none bg-amber" aria-hidden="true" />
        <h3 className="text-2xl text-ink">{name}</h3>
        <span className="h-px flex-1 bg-line" />
      </div>

      {showHead && head && (
        <div className="mb-5">
          <span className="mb-1 inline-block bg-racing px-2 py-0.5 font-head text-[10px] uppercase tracking-widest text-white">
            Head
          </span>
          <p className="text-ink">{head.name}</p>
        </div>
      )}

      {leads.length > 0 && (
        <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {leads.map((person) => (
            <li key={person.name + person.roleTitle}>
              <p className="text-ink">{person.name}</p>
              <p className="font-head text-[11px] uppercase tracking-widest text-mute">{project(person.roleTitle)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
