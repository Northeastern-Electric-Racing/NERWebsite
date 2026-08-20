// Home page data. Core values now live in site.ts (CORE_VALUES) and are shared
// with the About page, so the two pages never drift.
export const SITE = {
  intro: 'We are a student-run team at Northeastern University building all-electric, formula-style racecars from scratch.',
}

// Chapter images are local files you drop into /public/images/home/
// (chapter-1.jpg ... chapter-4.jpg). Until a file exists, the image is hidden.
export const CHAPTERS = [
  { kicker: 'Chapter 01', title: 'We start with nothing.', text: 'An empty bay, a blank CAD file, and a deadline.' },
  { kicker: 'Chapter 02', title: 'We design every system.', text: 'Chassis, accumulator, firmware, and aero, all in-house.' },
  { kicker: 'Chapter 03', title: 'We build it by hand.', text: 'Carbon laid, cells welded, code flashed, wheels on.' },
  { kicker: 'Chapter 04', title: 'Then we race.', text: 'And tear it all down to do it better next year.' },
]

export const STATS = [
  { value: 525, suffix: 'V', label: 'Accumulator' },
  { value: 7, suffix: 'kWh', label: 'Energy' },
  { value: 425, suffix: 'lb', label: 'Curb weight' },
]
