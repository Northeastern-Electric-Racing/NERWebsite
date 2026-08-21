import { useEffect } from 'react'
import type { Competition, CompYear } from '../data/competitions'

export default function CompModal({ comp, entry, onClose }: { comp: Competition; entry: CompYear; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={`${comp.abbr} ${entry.year}`}>
      <div className="absolute inset-0 bg-black/70 opacity-0 [animation:fadeIn_0.2s_ease-out_forwards]" onClick={onClose} />
      <div className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto border border-line bg-graphite opacity-0 [animation:modalIn_0.28s_cubic-bezier(0.16,1,0.3,1)_forwards]">
        <button type="button" onClick={onClose} aria-label="Close" className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center bg-carbon/70 text-ink transition-colors hover:text-racing">
          <span className="text-xl leading-none">×</span>
        </button>
        {entry.image && (
          <div className="aspect-video w-full overflow-hidden bg-carbon">
            <img src={entry.image} alt={`${comp.abbr} ${entry.year}`} className="h-full w-full object-cover" />
          </div>
        )}
        <div className="p-7">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-4xl text-racing">{comp.abbr}</span>
            <span className="font-display text-4xl text-ink">{entry.year}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-mute">{entry.summary}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {entry.results.map((r) => (
              <li key={r} className="border border-line px-3 py-1 font-head text-[11px] uppercase tracking-widest text-mute">
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
