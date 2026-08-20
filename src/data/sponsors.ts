// Sponsors. `blurb` is optional. Logos can be added later as /images/sponsors/<file>.
export type Sponsor = { name: string; url: string; blurb?: string; logo?: string }

export const SPONSORSHIP_PACKET = 'https://indd.adobe.com/view/aee53d4a-bfbf-40d3-85a0-7a9edd8aa68c'

export const SPONSORS: Sponsor[] = [
  {
    name: 'Analog Garage',
    url: 'https://www.analog.com/en/incubators/analog-garage.html',
    blurb:
      'A research and development innovation center dedicated to creating breakthrough technologies, capabilities, and business models critical to ADI’s future success.',
  },
  {
    name: 'Shield AI',
    url: 'https://shield.ai/',
    blurb:
      'A venture-backed deep-tech company with the mission of protecting service members and civilians with intelligent systems, including the V-BAT aircraft and Hivemind product lines.',
  },
  {
    name: 'Primaira',
    url: 'https://www.primaira.com/',
    blurb:
      'Provides product development, engineering research, and specialized testing to amplify innovation in the appliance, consumer products, health & safety, and military industries.',
  },
  { name: 'Rivian', url: 'https://rivian.com/' },
  { name: 'Extreme Canopy', url: 'https://www.extremecanopy.com/' },
  { name: 'South Shore Manufacturing', url: 'https://www.southshoremanufacturing.com/' },
  { name: 'Instron', url: 'https://www.instron.com/en/' },
  { name: 'FH Peterson Machine', url: 'http://fhpetersonmachine.com/' },
  { name: 'Airtech', url: 'https://airtech.com/' },
  { name: 'Tesla', url: 'https://www.tesla.com/' },
  { name: 'Altium', url: 'https://www.altium.com/' },
  { name: 'Ansys', url: 'https://www.ansys.com/' },
  { name: 'Daido', url: 'https://daidocorp.com/' },
  { name: 'Eurotech', url: 'https://www.eurotechdirect.com/' },
  { name: 'Diamondback Designs', url: 'https://www.facebook.com/p/Diamondback-Designs-100054489847743/' },
  { name: 'Bolt Depot', url: 'https://boltdepot.com/' },
  { name: 'WS Finishing', url: 'https://wsfinish.com/' },
  { name: 'NEDC', url: 'https://www.nedc.com/' },
  { name: 'NKLabs', url: 'https://www.nklabs.com'}
]
