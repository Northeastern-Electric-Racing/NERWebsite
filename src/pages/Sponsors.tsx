import PageHeader from '../components/PageHeader'
import { SPONSORS, SPONSORSHIP_PACKET } from '../data/sponsors'

function domainOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

export default function Sponsors() {
  const featured = SPONSORS.filter((s) => s.blurb)
  const rest = SPONSORS.filter((s) => !s.blurb)

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

        {featured.length > 0 && (
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {featured.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col border border-line bg-graphite p-7 transition-colors hover:border-racing"
              >
                <h3 className="text-2xl text-ink">{s.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">{s.blurb}</p>
                <span className="mt-5 font-head text-[11px] uppercase tracking-widest text-mute transition-colors group-hover:text-racing">
                  {domainOf(s.url)} ↗
                </span>
              </a>
            ))}
          </div>
        )}

        <div className="mt-16 mb-6 flex items-center gap-4">
          <h2 className="text-xl text-ink">Supporting partners</h2>
          <span className="h-px flex-1 bg-line" />
        </div>
        <div className="grid grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
          {rest.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-[120px] flex-col justify-between bg-graphite p-6 transition-colors hover:bg-carbon"
            >
              <span className="font-display text-2xl text-ink transition-colors group-hover:text-racing">{s.name}</span>
              <span className="font-head text-[10px] uppercase tracking-widest text-mute">{domainOf(s.url)} ↗</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
