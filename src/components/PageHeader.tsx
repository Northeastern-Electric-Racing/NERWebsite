// Simple top band for interior pages: eyebrow + big title + optional lead.
export default function PageHeader({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <section className="mx-auto max-w-[1600px] px-4 pt-28 pb-10 sm:px-6">
      <p className="font-head text-xs uppercase tracking-widest text-racing">{eyebrow}</p>
      <h1 className="mt-3 text-6xl sm:text-7xl">{title}</h1>
      {lead && <p className="mt-5 max-w-2xl text-base leading-relaxed text-mute">{lead}</p>}
    </section>
  )
}
