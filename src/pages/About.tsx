import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { LINKS, CORE_VALUES } from '../data/site'

const base = import.meta.env.BASE_URL

const internalLinks = [
  { to: '/teams', label: 'Our Teams' },
  { to: '/car', label: 'Car Portfolio' },
  { to: '/competitions', label: 'Competition History' },
  { to: '/leadership', label: 'Leadership' },
  { to: '/join', label: 'Join Us' },
  { to: '/sponsors', label: 'Sponsors' },
]

const externalLinks = [
  { href: LINKS.instagram, label: 'Instagram' },
  { href: LINKS.sponsorshipPacket, label: 'Sponsorship Packet' },
  { href: LINKS.northeastern, label: 'Northeastern University' },
  { href: LINKS.fhe, label: 'Formula Hybrid + Electric' },
  { href: LINKS.fsae, label: 'Formula SAE' },
  { href: LINKS.sae, label: 'SAE International' },
]

export default function About() {
  return (
    <div>
      <PageHeader
        eyebrow="About"
        title="Who we are"
        lead="Northeastern Electric Racing is a student-run organization building all-electric, formula-style racecars from scratch."
      />

      {/* Team photo (drop a file at /public/images/about/team.jpg) */}
      <section className="mx-auto max-w-[1600px] px-4 sm:px-6">
        <div className="aspect-[21/9] w-full overflow-hidden border border-line bg-graphite">
          <img
            src={`${base}images/about/team.jpg`}
            alt="The Northeastern Electric Racing team"
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6">
        <div className="max-w-3xl space-y-5 text-base leading-relaxed text-mute">
          <p>
            We are a student-run organization at Northeastern University. Every year we design, manufacture, and race an
            all-electric, formula-style vehicle built entirely in-house, from the carbon fiber bodywork to the battery
            management system to the firmware that brings it to life.
          </p>
          <p>
            The team is organized into four divisions: Mechanical, Electrical, Software, and Business. They work
            shoulder to shoulder to take a car from a blank CAD file to the starting line. We recruit on interest and
            curiosity rather than experience, and we mentor every new member along the way.
          </p>
          <p>
            We compete in two intercollegiate series:{' '}
            <strong className="text-ink">Formula Hybrid + Electric</strong>, where we race as car #23 in the Electric
            category, and <strong className="text-ink">Formula SAE</strong>, part of the SAE International Collegiate
            Design Series.
          </p>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6">
          <h2 className="text-3xl sm:text-4xl">Our core values</h2>
          <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {CORE_VALUES.map((v) => (
              <div key={v.name} className="bg-graphite p-7">
                <h3 className="text-2xl text-ink">{v.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-4 py-16 sm:px-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl text-ink">Explore the site</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {internalLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="border border-line px-4 py-2 font-head text-xs uppercase tracking-widest text-ink transition-colors hover:border-racing hover:text-racing"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl text-ink">Around the web</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {externalLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-line px-4 py-2 font-head text-xs uppercase tracking-widest text-ink transition-colors hover:border-racing hover:text-racing"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
