import type { Subteam } from '../data/people'
import { EBOARD } from '../data/people'
import MemberCard from './MemberCard'

const EBOARD_NAMES = new Set(EBOARD.map((m) => m.name))

export default function SubteamGroup({ subteam }: { subteam: Subteam }) {
  const { name, head, leads } = subteam
  // Show the head in the row, unless the head is a chief already listed on the
  // E-board (avoids repeating Marketing/Operations chiefs).
  const showHead = head && !EBOARD_NAMES.has(head.name)
  const people = showHead ? [head, ...leads] : leads

  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <h3 className="text-3xl text-ink">{name}</h3>
        <span className="h-px flex-1 bg-line" />
      </div>

      {/* One horizontal row; scrolls sideways if there are many people. */}
      <div className="flex gap-4 overflow-x-auto pb-2">
        {people.map((person) => (
          <div key={person.name + person.roleTitle} className="w-40 flex-none sm:w-44">
            <MemberCard person={person} />
          </div>
        ))}
      </div>
    </div>
  )
}
