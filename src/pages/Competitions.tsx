import { useMemo, useState } from 'react'
import PageHeader from '../components/PageHeader'
import CompModal from '../components/CompModal'
import { COMPETITIONS } from '../data/competitions'
import type { Competition, CompYear } from '../data/competitions'

const FHE = COMPETITIONS.find((c) => c.abbr === 'FH+E')!
const FSAE = COMPETITIONS.find((c) => c.abbr === 'FSAE')!

type Selection = { comp: Competition; entry: CompYear }

function ResultCard({
  comp,
  entry,
  align,
  onOpen,
}: {
  comp: Competition
  entry: CompYear
  align: 'left' | 'right'
  onOpen: () => void
}) {
  const top = entry.results.slice(0, 3)
  const extra = entry.results.length - top.length
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group block w-full overflow-hidden border border-line bg-graphite text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-racing hover:shadow-[0_0_20px_rgba(242,46,39,0.35)] ${
        align === 'right' ? 'md:text-right' : ''
      }`}
    >
      {entry.image && (
        <div className="aspect-video w-full overflow-hidden bg-carbon">
          <img
            src={entry.image}
            alt={`${comp.abbr} ${entry.year}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="p-5">
        <span className="font-head text-[11px] uppercase tracking-widest text-racing">{comp.abbr}</span>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-mute">{entry.summary}</p>
        <ul className={`mt-4 flex flex-wrap gap-2 ${align === 'right' ? 'md:justify-end' : ''}`}>
          {top.map((r) => (
            <li key={r} className="border border-line px-2.5 py-1 font-head text-[10px] uppercase tracking-widest text-mute">
              {r}
            </li>
          ))}
          {extra > 0 && (
            <li className="border border-racing px-2.5 py-1 font-head text-[10px] uppercase tracking-widest text-racing">
              +{extra} more
            </li>
          )}
        </ul>
      </div>
    </button>
  )
}

export default function Competitions() {
  const [selected, setSelected] = useState<Selection | null>(null)

  const rows = useMemo(() => {
    const years = new Set<string>()
    COMPETITIONS.forEach((c) => c.years.forEach((y) => years.add(y.year)))
    return [...years]
      .sort((a, b) => Number(b) - Number(a))
      .map((year) => ({
        year,
        fhe: FHE.years.find((y) => y.year === year) ?? null,
        fsae: FSAE.years.find((y) => y.year === year) ?? null,
      }))
  }, [])

  return (
    <div>
      <PageHeader
        eyebrow="Competition History"
        title="On the grid"
        lead="Our track record year by year, across Formula Hybrid + Electric and Formula SAE."
      />

      <section className="mx-auto max-w-[1600px] px-4 pb-24 sm:px-6">
        <div className="mb-8 hidden grid-cols-[1fr_auto_1fr] items-center gap-6 md:grid">
          <h2 className="text-right font-display text-3xl text-ink">FH+E</h2>
          <div className="w-24" />
          <h2 className="font-display text-3xl text-ink">FSAE</h2>
        </div>

        <div className="space-y-6 md:space-y-0">
          {rows.map((row) => (
            <div key={row.year} className="grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-6">
              <div className="hidden md:block md:py-6">
                {row.fhe && (
                  <ResultCard comp={FHE} entry={row.fhe} align="right" onOpen={() => setSelected({ comp: FHE, entry: row.fhe! })} />
                )}
              </div>

              <div className="relative hidden justify-center md:flex md:self-stretch">
                <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-line" aria-hidden="true" />
                <div className="relative z-10 my-auto flex h-16 w-16 items-center justify-center border border-line bg-carbon font-display text-xl text-racing">
                  {row.year}
                </div>
              </div>

              <div className="hidden md:block md:py-6">
                {row.fsae && (
                  <ResultCard comp={FSAE} entry={row.fsae} align="left" onOpen={() => setSelected({ comp: FSAE, entry: row.fsae! })} />
                )}
              </div>

              <div className="md:hidden">
                <div className="mb-3 flex items-center gap-3">
                  <span className="font-display text-2xl text-racing">{row.year}</span>
                  <span className="h-px flex-1 bg-line" />
                </div>
                <div className="space-y-3">
                  {row.fhe && (
                    <ResultCard comp={FHE} entry={row.fhe} align="left" onOpen={() => setSelected({ comp: FHE, entry: row.fhe! })} />
                  )}
                  {row.fsae && (
                    <ResultCard comp={FSAE} entry={row.fsae} align="left" onOpen={() => setSelected({ comp: FSAE, entry: row.fsae! })} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selected && <CompModal comp={selected.comp} entry={selected.entry} onClose={() => setSelected(null)} />}
    </div>
  )
}
