// Draft descriptions for each subteam, keyed by "divisionKey/subteamName".
// First-draft copy written from each subteam's scope. Edit freely.
export const SUBTEAM_INFO: Record<string, string> = {
  'mechanical/Handling':
    'Owns how the car puts power to the pavement and responds to the driver, including the steering, suspension, and the rotating assemblies at each corner. The subteam tunes geometry and kinematics so the car is fast, predictable, and stable at the limit.',
  'mechanical/Structural':
    'Designs and manufactures the load-bearing skeleton of the car: the chassis, pedal box, seat and harness mounts, and the general structure everything else bolts to. The focus is a stiff, light, and safe platform.',
  'mechanical/Aerodynamics':
    'Develops the full aero package, including the front and rear wings, bodywork, and underbody, using CFD to balance downforce, drag, and cooling. The result is more grip through the corners without paying for it on the straights.',
  'mechanical/Powertrain':
    'Turns motor torque into motion: the drivetrain segments, transmission, battery box structure, motor cooling, and the mechanical side of the high-voltage system. The subteam packages it all to be reliable and serviceable.',
  'mechanical/Performance & Simulation':
    'Predicts and measures how the car actually performs. The subteam builds physics models and lap simulations, writes the tooling behind them, and turns test and competition data into design decisions.',
  'electrical/Electronics':
    'Designs the low-voltage nervous system of the car, including the custom PCBs, the vehicle control unit interfaces, the steering wheel electronics, and the boards that tie every sensor and actuator together.',
  'electrical/Powertrain':
    'Builds the high-voltage heart of the car: the accumulator, the battery management system, the HV distribution plate, charging hardware, and the harnessing that safely moves hundreds of volts around the vehicle.',
  'software/Finishline':
    'Develops Finishline, the team’s internal platform, along with the broader web tooling the club runs on. The subteam’s tech leads build and maintain the software that keeps the organization operating.',
  'software/Software Product':
    'Shapes what the team’s software should be and how it should work, defining product direction, requirements, and user experience so the tools engineers build actually solve the right problems.',
  'software/Application Software':
    'Builds the applications the team uses day to day, including Argos and NERO, plus the data visualization tools that turn raw numbers into something engineers can read at a glance.',
  'software/Firmware':
    'Writes the embedded code that runs on the car: the motor controller, VCU, and TSECU logic, the control and telemetry systems, and the validation that makes sure the firmware behaves before it ever touches the track.',
  'business/Sponsorship':
    'Builds and maintains the partnerships that fund the team. The subteam handles sponsor outreach, relationships, and fundraising so engineers have the resources to design and build.',
  'business/Treasury':
    'Keeps the team financially healthy by budgeting across divisions, tracking spending, and managing reimbursements so money is where it needs to be, when it needs to be there.',
  'business/Marketing':
    'Tells the team’s story. The subteam runs photo and video, social media, and graphic design to grow the team’s presence and represent it well to sponsors, students, and fans.',
  'business/Operations':
    'Keeps the club running and competition-ready by managing logistics for FH+E and FSAE, internal processes, and day-to-day club operations so build and travel go smoothly.',
}
