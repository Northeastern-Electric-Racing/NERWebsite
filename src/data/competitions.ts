export type CompYear = {
  year: string
  summary: string
  results: string[]
  image?: string
}

export type Competition = {
  abbr: string
  name: string
  blurb: string
  years: CompYear[]
}

export const COMPETITIONS: Competition[] = [
  {
    abbr: 'FH+E',
    name: 'Formula Hybrid + Electric',
    blurb:
      'An intercollegiate competition for student-built hybrid and electric formula-style cars, judged on both engineering design and on-track performance.',
    years: [
      {
        year: '2025',
        summary:
          'We attended FH+E with car 24A to compete against 29 other vehicles and proudly placed third overall. For the first time, we completed the 44 km Endurance event, placing second in that category.',
        results: [
          '3rd Place in the EV Category',
          '2nd Place in Endurance',
          '5th Place (tie) in Autocross',
          '6th Place in Acceleration',
          '4th Place in Project Management',
          '5th Place in Engineering Design',
        ],
        image: 'https://electricracing.northeastern.edu/wp-content/uploads/2025/09/NRW_4803-scaled.jpg',
      },
      {
        year: '2024',
        summary:
          'We attended FH+E with our new car, 22A, against 29 other vehicles. We placed 7th overall and took home the IEEE Excellence in Project Management Award for the second year in a row.',
        results: [
          '7th Place in the EV Category',
          'IEEE Excellence in Project Management Award',
          '5th Place (tie) in Acceleration',
          '7th Place in Autocross',
          '5th Place in Endurance',
          '2nd Place in Project Management',
          '16th in Engineering Design',
        ],
        image: 'https://electricracing.northeastern.edu/wp-content/uploads/2024/05/DSC_4740-scaled.jpg',
      },
      {
        year: '2023',
        summary:
          'We brought our car to its second Formula Hybrid + Electric competition, adding two more awards to our repertoire.',
        results: ['6th Place in the EV Category', 'IEEE Excellence in Project Management Award'],
        image: 'https://electricracing.northeastern.edu/wp-content/uploads/2024/05/DSC01642.jpg',
      },
      {
        year: '2022',
        summary:
          'We entered our second FH+E competition, in person this time, and took home seven awards including 2nd Place in the Electric Vehicle Category.',
        results: [
          '2nd Place in the EV Category',
          "Scrutineer's Award for best preparation and documentation",
          '2nd Place in Project Management',
          '3rd Place in Engineering Design',
          '2nd Place in Acceleration',
          '2nd Place in Autocross',
          '3rd Place in Endurance',
        ],
        image: 'https://electricracing.northeastern.edu/wp-content/uploads/2024/05/IMG_20220504_155627-scaled.jpg',
      },
      {
        year: '2021',
        summary:
          'Northeastern Electric Racing virtually participated in our first Formula Hybrid + Electric competition. Our first car, 17D, took home four awards.',
        results: [
          '1st Place in the EV Category',
          '3rd Place in Project Management',
          '3rd Place in Engineering Design',
          '2nd Place in the iRacing event',
        ],
        image: 'https://electricracing.northeastern.edu/wp-content/uploads/2024/05/fhe.png',
      },
    ],
  },
  {
    abbr: 'FSAE',
    name: 'Formula SAE',
    blurb:
      'A global collegiate design series in which students conceive, build, and race a formula-style car against teams from around the world.',
    years: [
      {
        year: '2025',
        summary:
          'Our second FSAE. We passed several critical technical inspections, including the accumulator, mechanical, electrical, and tilt tests, and competed in the Cost, Design, and Business Presentation events, improving our score across the board compared to last year.',
        results: [
          'Passed accumulator, mechanical, electrical, and tilt inspections',
          'Competed in Cost, Design, and Business Presentation events',
        ],
        image: 'https://electricracing.northeastern.edu/wp-content/uploads/2025/09/fsae25-297-scaled.jpg',
      },
      {
        year: '2024',
        summary:
          'Our first FSAE. The goal was simple: pass technical inspection. We not only passed, but crossed the starting line in every dynamic event, including Autocross, Acceleration, Endurance, and Skidpad, and competed in the Cost, Design, and Sales events.',
        results: [
          'Passed technical inspection on first attempt',
          'Completed Autocross, Acceleration, Endurance, and Skidpad',
          'Competed in Cost, Design, and Sales events',
        ],
        image: 'https://electricracing.northeastern.edu/wp-content/uploads/2024/06/IMG_2241-scaled.jpg',
      },
    ],
  },
]
