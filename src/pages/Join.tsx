import PageHeader from '../components/PageHeader'
import { JOIN, LINKS } from '../data/site'

export default function Join() {
  return (
    <div>
      <PageHeader
        eyebrow="Join Us"
        title="Join the team"
        lead="We don’t select on skills or experience. We select on interest and curiosity. If you want to learn, there’s a place for you here."
      />

      <section className="mx-auto max-w-[1600px] px-4 pb-16 sm:px-6">
        <blockquote className="border-l-2 border-racing pl-6">
          <p className="font-display text-4xl leading-tight text-ink sm:text-5xl">“{JOIN.quote}”</p>
        </blockquote>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-mute">{JOIN.body}</p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute">{JOIN.driverNote}</p>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6">
          <h2 className="text-4xl sm:text-5xl">Three steps to joining</h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {JOIN.steps.map((step) => (
              <li key={step.n} className="border border-line bg-graphite p-7">
                <span className="font-display text-6xl text-racing">{step.n}</span>
                <h3 className="mt-3 text-xl text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{step.text}</p>
              </li>
            ))}
          </ol>
          <a
            href={LINKS.application}
            target="_blank"
            rel="noreferrer"
            className="mt-12 inline-block bg-racing px-6 py-3 font-head text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:opacity-90"
          >
            Open the application
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6">
        <h2 className="text-3xl sm:text-4xl">Have a question? Reach out.</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute">
          All our social and recruitment events are announced on our Instagram. You can also email us directly. We check
          our inboxes daily.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a href={LINKS.instagram} target="_blank" rel="noreferrer" className="border border-line bg-graphite p-6 transition-colors hover:border-racing">
            <span className="font-head text-[11px] uppercase tracking-widest text-mute">Follow</span>
            <p className="mt-2 text-lg text-ink">Instagram</p>
            <p className="mt-1 text-sm text-mute">@nuelectricracing</p>
          </a>
          <a href={`mailto:${LINKS.email}`} className="border border-line bg-graphite p-6 transition-colors hover:border-racing">
            <span className="font-head text-[11px] uppercase tracking-widest text-mute">Email</span>
            <p className="mt-2 text-lg text-ink">Message us</p>
            <p className="mt-1 break-all text-sm text-mute">{LINKS.email}</p>
          </a>
        </div>
      </section>
    </div>
  )
}
