import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { DIVISIONS } from '../data/people'
import { DIVISION_INFO } from '../data/site'

export default function Teams() {
  return (
    <div>
      <PageHeader
        eyebrow="Teams"
        title="Our divisions"
        lead="Four divisions design and build every part of the car in-house. Explore each one."
      />
      <section className="mx-auto max-w-[1600px] px-4 pb-20 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {DIVISIONS.map((division) => (
            <Link
              key={division.key}
              to={`/teams/${division.key}`}
              className="group border border-line bg-graphite p-8 transition-colors hover:border-racing"
            >
              <h2 className="text-4xl text-ink transition-colors group-hover:text-racing">{division.name}</h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-mute">{DIVISION_INFO[division.key]}</p>
              <span className="mt-5 inline-block font-head text-[11px] uppercase tracking-widest text-racing">
                View team ↗
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
