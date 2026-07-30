import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal>
      <p className="font-head text-xs font-semibold uppercase tracking-widest text-racing">{eyebrow}</p>
      <h2 className="mt-3 text-4xl sm:text-5xl">{title}</h2>
    </Reveal>
  )
}