import { useEffect } from 'react'
import type { Person } from '../data/people'

export default function MemberModal({ person, onClose }: { person: Person; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  const { name, roleTitle, photo, linkedin, portfolio } = person
  const linkClass = 'border border-line px-4 py-2 font-head text-xs uppercase tracking-widest text-ink transition-colors hover:border-racing hover:text-racing'

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={name}>
      <div className="absolute inset-0 bg-black/70 opacity-0 [animation:fadeIn_0.2s_ease-out_forwards]" onClick={onClose} />

      <div className="relative z-10 w-full max-w-md border border-line bg-graphite opacity-0 [animation:modalIn_0.28s_cubic-bezier(0.16,1,0.3,1)_forwards]">
        <button type="button" onClick={onClose} aria-label="Close" className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center bg-carbon/70 text-ink transition-colors hover:text-racing">
          <span className="text-xl leading-none">×</span>
        </button>

        <div className="aspect-[4/5] w-full overflow-hidden bg-carbon">
          {photo ? <img src={photo} alt={name} className="h-full w-full object-cover object-top" /> : null}
        </div>

        <div className="p-6">
          <h3 className="text-3xl text-ink">{name}</h3>
          <p className="mt-1 font-head text-xs uppercase tracking-widest text-racing">{roleTitle}</p>

          {(linkedin || portfolio) && (
            <div className="mt-5 flex gap-3">
              {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className={linkClass}>LinkedIn</a>}
              {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className={linkClass}>Portfolio</a>}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
