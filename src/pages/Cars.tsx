import PageHeader from '../components/PageHeader'
import { CARS } from '../data/cars'

export default function Cars() {
  return (
    <div>
      <PageHeader
        eyebrow="Car Portfolio"
        title="Our machines"
        lead="Every car we have built. All-electric, formula-style, and designed and manufactured in-house."
      />

      <section className="mx-auto max-w-[1600px] px-4 pb-20 sm:px-6">
        <div className="space-y-20">
          {CARS.map((car, i) => {
            const flip = i % 2 === 1
            return (
              <article key={car.name} className="grid items-center gap-10 lg:grid-cols-2">
                <div className={`border border-line ${flip ? 'lg:order-2' : ''}`}>
                  {car.image ? (
                    <img src={car.image} alt={`Car ${car.name}`} className="aspect-[4/3] w-full object-cover" />
                  ) : (
                    <div className="flex aspect-[4/3] w-full items-center justify-center bg-graphite">
                      <span className="font-head text-xs uppercase tracking-widest text-mute">Image coming soon</span>
                    </div>
                  )}
                </div>
                <div className={flip ? 'lg:order-1' : ''}>
                  <div className="flex items-end gap-4">
                    <span className="font-display text-7xl leading-none text-racing sm:text-8xl">{car.name}</span>
                    <span className="mb-2 font-head text-xs uppercase tracking-widest text-mute">{car.year}</span>
                  </div>

                  {car.placeholder ? (
                    <p className="mt-6 border-y border-line py-6 text-sm text-mute">Technical details coming soon.</p>
                  ) : (
                    <ul className="mt-6 divide-y divide-line border-y border-line">
                      {car.specs.map((spec, idx) => {
                        const electric = car.electricSpecs?.includes(idx)
                        return (
                          <li key={spec} className="flex items-center gap-3 py-3">
                            <span className={`h-1.5 w-1.5 flex-none ${electric ? 'bg-amber' : 'bg-racing'}`} />
                            <span className={`text-sm ${electric ? 'text-ink' : 'text-mute'}`}>{spec}</span>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}
