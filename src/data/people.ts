// Single source of truth for Leadership + Division pages.
// Photo convention: firstname-lastname.jpg in /public/images/team/
// (leave photo as '' until the file exists; MemberCard handles the empty case).

export type Person = {
  name: string
  roleTitle: string
  photo: string
  linkedin?: string
  portfolio?: string
}

export type Subteam = {
  name: string
  head?: Person
  leads: Person[]
}

export type Division = {
  key: string
  name: string
  chiefs: Person[]
  subteams: Subteam[]
}

const photo = (name: string) => `${import.meta.env.BASE_URL}images/team/${name.toLowerCase().replace(/[^a-z]+/g, '-').replace(/^-|-$/g, '')}.jpg`
const p = (name: string, roleTitle: string, linkedin?: string): Person => ({ name, roleTitle, photo: photo(name), linkedin })

export const EBOARD: Person[] = [
  p('Riyana Roy', 'President'),
  p('Ethan Herrell', 'Chief Mechanical Engineer'),
  p('Max Meoli', 'Chief Electrical Engineer'),
  p('Chris Pyle', 'Chief Software Engineer'),
  p('Andrew Berkovich', 'Chief Financial Officer'),
  p('Gus Rosen', 'Chief Marketing Officer'),
  p('Sam Ehlers', 'Chief Operations Officer'),
]

export const DIVISIONS: Division[] = [
  {
    key: 'mechanical',
    name: 'Mechanical',
    chiefs: [p('Ethan Herrell', 'Chief Mechanical Engineer')],
    subteams: [
      {
        name: 'Handling',
        head: p('Nathan Yost', 'Head of Handling'),
        leads: [
          p('Rose Cairo', 'Steering Lead'),
          p('Claire Montegut', 'Suspension Lead'),
          p('Mack Speiser', 'Suspension Lead'),
          p('Ciaran Corcoran', 'Hubs and Brakes Lead'),
        ],
      },
      {
        name: 'Structural',
        head: p('Hugo Fowler', 'Head of Structural'),
        leads: [
          p('Christopher Russo', 'Pedals Lead'),
          p('Michael Cairo', 'Chassis Lead'),
          p('Zander Ritchey', 'General Structural Lead'),
          p('Colleen Moraghan', 'Seat/Harness Lead'),
        ],
      },
      {
        name: 'Aerodynamics',
        head: p('Madeleine Behr', 'Head of Aerodynamics'),
        leads: [
          p('Calvin Seto', 'Rear Wing Lead'),
          p('Nolan Leonhardt', 'Front Wing Lead'),
          p('Sarim Momin', 'Bodywork Lead'),
          p('Lin Htet Aung', 'Underbody Lead'),
          p('Zack Kasmaouy', 'CFD Lead'),
        ],
      },
      {
        name: 'Powertrain',
        head: p('Noah Crane', 'Head of Powertrain'),
        leads: [
          p('Catrina Sarno', 'Segment Lead'),
          p('Saul Dreyer', 'Battery Box Lead'),
          p('Adrian Vanegas', 'Transmission Lead'),
          p('Jack Carlin-Nguyen', 'Motor Cooling Lead'),
          p('Celine Li', 'Fusible Links Lead'),
          p('Mustafa Saleh', 'Electrical Integration Lead'),
        ],
      },
      {
        name: 'Performance Analysis',
        leads: [
          p('Ash Taylor', 'Physics Modeling Lead'),
          p('Taye Byun', 'Performance Analysis Lead'),
          p('Raphael Bessin', 'Software Implementation Lead'),
          p('Nicholas Henry', 'Software Implementation Lead'),
        ],
      },
    ],
  },
  {
    key: 'electrical',
    name: 'Electrical',
    chiefs: [p('Max Meoli', 'Chief Electrical Engineer')],
    subteams: [
      {
        name: 'Electronics',
        head: p('John Treadwell', 'Head of Electronics'),
        leads: [
          p('Zorian Passmore', 'VCU & LFIU Lead'),
          p('Drew Bancroft', 'MSB Lead'),
          p('Alex Houslanger', 'Steering Wheel PCB Lead'),
        ],
      },
      {
        name: 'Powertrain',
        head: p('Pablo Sabater', 'Head of Powertrain'),
        leads: [
          p('Zack Sakti', 'BMS Lead'),
          p('Parker Higgins', 'HV Plate Lead'),
          p('Kendal Gross', 'Charger Cart/Harnessing Lead'),
          p('Amogh Patil', 'Flex PCBs Lead'),
          p('Kavi Bandara', 'TSSI & Lightning PCB Lead'),
        ],
      },
    ],
  },
  {
    key: 'software',
    name: 'Software',
    chiefs: [p('Chris Pyle', 'Chief Software Engineer')],
    subteams: [
      {
        name: 'Finishline',
        head: p('Waverly Hassman', 'Head of Finishline'),
        leads: [
          p('Grace Theobald', 'Tech Lead'),
          p('Sarah Taylor', 'Tech Lead'),
          p('Stephanie Sayegh', 'Tech Lead'),
          p('Santiago Ordonez Merizalde', 'Tech Lead'),
          p('Kinsey Bellerose', 'Tech Lead'),
        ],
      },
      {
        name: 'Software Product',
        head: p('Layla Sheikh', 'Head of Software Product'),
        leads: [p('Jiya Bhan', 'Product Lead')],
      },
      {
        name: 'Application Software',
        head: p('Wyatt Bracy', 'Head of Application Software'),
        leads: [
          p('Jeff Kuo', 'Argos Lead'),
          p('Dev Chechi', 'NERO Lead'),
          p('Yash Kishore Maheshwari', 'Data Visualization Lead'),
        ],
      },
      {
        name: 'Firmware',
        head: p('Caio DaSilva', 'Head of Firmware'),
        leads: [
          p('Ethan Markow', 'Motor Controller Lead'),
          p('Surya Thoppae', 'TSECU Lead'),
          p('Blake Jackson', 'Firmware Lead'),
          p('Alex Petry', 'VCU Lead'),
          p('Kaushik Mehta', 'Embedded Validation Lead'),
          p('Sakthi Sivakumar', 'Controls Lead'),
          p('Sara Sethi', 'MSB Lead'),
          p('Jack Rubacha', 'Telemetry Lead'),
          p('Daniel Nakhooda', 'MSB Lead'),
        ],
      },
    ],
  },
  {
    key: 'business',
    name: 'Business',
    chiefs: [
      p('Andrew Berkovich', 'Chief Financial Officer'),
      p('Gus Rosen', 'Chief Marketing Officer'),
      p('Sam Ehlers', 'Chief Operations Officer'),
    ],
    subteams: [
      {
        name: 'Sponsorship',
        head: p('Ryan Mullin', 'Head of Sponsorship'),
        leads: [p('Ryan Taylor', 'Fundraising Lead'), p('Saanvi Talanki', 'Sponsorship Lead')],
      },
      {
        name: 'Treasury',
        head: p('Luke Pfaffmann', 'Head of Treasury'),
        leads: [p('Jasper Pinkus', 'Budgeting Lead'), p('Vedant Rajeev', 'Reimbursement Lead')],
      },
      {
        name: 'Marketing',
        head: p('Gus Rosen', 'Chief Marketing Officer'),
        leads: [
          p('Thomas Crawley', 'Photo/Video Lead'),
          p('Katy Silva', 'Social Media Lead'),
          p('Libby Foley', 'Graphic Lead'),
        ],
      },
      {
        name: 'Operations',
        head: p('Sam Ehlers', 'Chief Operations Officer'),
        leads: [
          p('Xavier Kostecki', 'FH+E Lead'),
          p('Nicholas Bienenstein', 'FSAE Lead'),
          p('Will Laroche', 'Process Management Lead'),
          p('Meg Biederman', 'Club Operations Lead'),
          p('Ananya Ravishankar', 'Operations Lead'),
        ],
      },
    ],
  },
]
