// Car portfolio. `placeholder: true` renders a "details coming soon" tile.
// Images hotlink the live NER site as filler — swap to /public/images/cars/ later.
export type Car = {
  name: string
  tagline: string
  year: string
  image?: string
  specs: string[]
  electricSpecs?: number[] // indices tinted with the amber accent
  placeholder?: boolean
}

export const CARS: Car[] = [
  {
    name: '25A',
    tagline: 'Our newest car',
    year: '2025–2026',
    specs: [],
    placeholder: true,
  },
  {
    name: '24A',
    tagline: 'Previous car',
    year: '2024–2025',
    image:
      'https://electricracing.northeastern.edu/wp-content/uploads/2026/02/cropped-ner20250713-29-scaled-1.jpg',
    specs: [
      'All-electric',
      '425 lbs',
      'EMRAX 228 motor',
      'Full in-house carbon fiber bodywork and aerodynamics package',
      'Custom ADBMS battery management system',
      '525 V, 7 kWh accumulator',
      'HaLo WiFi telemetry system',
    ],
    electricSpecs: [0, 4, 5, 6],
  },
  {
    name: '22A',
    tagline: 'Previous car',
    year: '2022–2023',
    image: 'https://electricracing.northeastern.edu/wp-content/uploads/2024/11/fsae24-car-5-scaled.jpg',
    specs: [
      'All-electric',
      '585 lbs',
      'EMRAX 228 motor',
      'Chain drive Drexler differential',
      'Custom 504 V accumulator and BMS',
      'HaLow long-range telemetry system',
      'Independent double wishbone suspension',
    ],
    electricSpecs: [0, 4, 5],
  },
  {
    name: '17D',
    tagline: 'Our first car',
    year: '2017–2021',
    image: 'https://electricracing.northeastern.edu/wp-content/uploads/2024/05/cropped-comp-8-scaled-1.jpg',
    specs: [
      'All-electric',
      '770 lbs',
      'EMRAX 228 motor',
      'Modified GM 10-bolt differential',
      'Custom 302.4 V accumulator and BMS',
      'CAN communication system',
      'Custom GUI and CAN processor for driver assistance',
    ],
    electricSpecs: [0, 4, 5],
  },
]
