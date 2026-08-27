// Sponsors. Logos are white PNGs in /public/images/sponsors/.
// `url` links the logo out; leave it undefined and the tile is not clickable.
// `blurb` marks a featured sponsor (shown larger, up top).
export type Sponsor = { name: string; file: string; url?: string; blurb?: string }

export const SPONSORSHIP_PACKET = 'https://indd.adobe.com/view/aee53d4a-bfbf-40d3-85a0-7a9edd8aa68c'

export const SPONSORS: Sponsor[] = [
  {
    name: 'Analog Garage',
    file: 'analog.png',
    url: 'https://www.analog.com/en/incubators/analog-garage.html',
    blurb:
      'The research and development innovation center of Analog Devices, creating breakthrough technologies, capabilities, and business models critical to ADI’s future.',
  },
  {
    name: 'Shield AI',
    file: 'shield-ai.png',
    url: 'https://shield.ai/',
    blurb:
      'A venture-backed deep-tech company on a mission to protect service members and civilians with intelligent systems, including the V-BAT aircraft and Hivemind product lines.',
  },
  {
    name: 'Primaira',
    file: 'primaira.png',
    url: 'https://www.primaira.com/',
    blurb:
      'Provides product development, engineering research, and specialized testing to amplify innovation across the appliance, consumer products, health & safety, and military industries.',
  },

  { name: 'Rivian', file: 'rivian.png', url: 'https://rivian.com/' },
  { name: 'Tesla', file: 'tesla.png', url: 'https://www.tesla.com/' },
  { name: 'Altium', file: 'altium.png', url: 'https://www.altium.com/' },
  { name: 'Ansys', file: 'ansys.png', url: 'https://www.ansys.com/' },
  { name: 'Instron', file: 'instron.png', url: 'https://www.instron.com/en/' },
  { name: 'Airtech', file: 'airtech.png', url: 'https://airtech.com/' },
  { name: 'Eurotech', file: 'eurotech.png', url: 'https://www.eurotechdirect.com/' },
  { name: 'Bolt Depot', file: 'bolt-depot.png', url: 'https://boltdepot.com/' },
  { name: 'Extreme Canopy', file: 'extreme-canopy.png', url: 'https://www.extremecanopy.com/' },
  { name: 'FH Peterson Machine', file: 'fhp.png', url: 'http://fhpetersonmachine.com/' },
  { name: 'South Shore Manufacturing', file: 'southshore.png', url: 'https://www.southshoremanufacturing.com/' },
  { name: 'WS Finishing', file: 'westside.png', url: 'https://wsfinish.com/' },
  { name: 'Daido', file: 'did.png', url: 'https://daidocorp.com/' },
  { name: 'NEDC', file: 'diecutting.png', url: 'https://www.nedc.com/' },
  { name: 'Calspan', file: 'calspan.png', url: 'https://calspan.com/' },
  { name: 'Gene Haas Foundation', file: 'genehaas.png', url: 'https://www.ghaasfoundation.org/' },
  { name: 'OshCut', file: 'oshcut.png', url: 'https://www.oshcut.com/' },
  { name: 'NK Labs', file: 'nklabs.png', url: 'https://www.nklabs.com/' },
  { name: 'Schroth', file: 'schroth.png', url: 'https://www.schroth.com/' },

  { name: 'VR3', file: 'vr3.png', url: 'https://www.vr3.ca/' },
  { name: 'TDF', file: 'tdf.png', url: 'https://www.tdfmetalfinishing.com/' },
]
