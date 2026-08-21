import ScrollRow from '../components/ScrollRow'
import SubteamText from '../components/SubteamText'
import { EBOARD, DIVISIONS } from '../data/people'

export default function Leadership() {
  return (
    <div className="pt-24">
      {/* E-board keeps photo cards */}
      <section className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6">
        <p className="font-head text-xs uppercase tracking-widest text-racing">Leadership</p>
        <h1 className="mt-3 text-6xl">Executive Board</h1>
        <div className="mt-8">
          <ScrollRow people={EBOARD} />
        </div>
      </section>

      {/* Divisions: subteams as text rosters (heads + leads), no photos */}
      {DIVISIONS.map((division) => {
        const subteams = [...division.subteams].sort((a, b) => b.leads.length - a.leads.length)
        return (
          <section key={division.key} className="border-t border-line">
            <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6">
              <h2 className="text-4xl sm:text-5xl">{division.name}</h2>
              <div className="mt-10 space-y-10">
                {subteams.map((subteam) => (
                  <SubteamText key={subteam.name} subteam={subteam} />
                ))}
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}
