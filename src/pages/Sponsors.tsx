import PageHeader from '../components/PageHeader'
import { SPONSORS, SPONSORSHIP_PACKET } from '../data/sponsors'
import type { Sponsor } from '../data/sponsors'

const base = import.meta.env.BASE_URL

function Logo({ s, className = '' }: { s: Sponsor; className?: string }) {
  const img = (
    <img
      src={`${base}images/sponsors/${s.file}`}
      alt={s.name}
      loading="lazy"
      className={`max-h-full max-w-full object-contain ${className}`}
    />
  )
  return img
}

export default function Sponsors() {
  const featured = SPONSORS.filter((s) => s.blurb)
  const wall = SPONSORS.filter((s) => !s.blurb)

  return (
    <div>
      <PageHeader
        eyebrow="Sponsors"
        title="Our partners"
        lead="Our work would not be possible without the kind support of our sponsors. Interested in joining them?"
      />

      <section className="mx-auto max-w-[1600px] px-4 pb-16 sm:px-6">
        <a
          href={SPONSORSHIP_PACKET}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-racing px-6 py-3 font-head text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:opacity-90"
        >
          Sponsorship packet
        </a>

        {/* Featured */}
        {featured.length > 0 && (
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {featured.map((s) => {
              const inner = (
                <div className="flex h-full flex-col border border-line bg-graphite p-7 transition-colors hover:border-racing">
                  <div className="flex h-20 items-center justify-start">
                    <Logo s={s} className="max-h-14" />
                  </div>
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-mute">{s.blurb}</p>
                </div>
              )
              return s.url ? (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name} className="group block">
                  {inner}
                </a>
              ) : (
                <div key={s.name}>{inner}</div>
              )
            })}
          </div>
        )}

        {/* Logo wall */}
        <div className="mt-16 mb-6 flex items-center gap-4">
          <h2 className="text-xl text-ink">Supporting partners</h2>
          <span className="h-px flex-1 bg-line" />
        </div>
        <div className="grid grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
          {wall.map((s) => {
            const tile = (
              <div className="flex h-32 items-center justify-center bg-graphite p-6 transition-colors hover:bg-carbon">
                <Logo s={s} className="max-h-12" />
              </div>
            )
            return s.url ? (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name}>
                {tile}
              </a>
            ) : (
              <div key={s.name} title={s.name}>
                {tile}
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
