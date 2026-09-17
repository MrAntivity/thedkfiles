// THE DK FILES — case file database
// No backend, no database — this IS the database. Add new incidents here.
//
// Fields:
//   id       — unique slug, used in the URL hash (#/file/<id>)
//   title    — case file title
//   date     — when it happened (string, e.g. "March 2024" or "Unknown")
//   category — short tag shown on the card
//   summary  — one-line teaser shown on the card / search results
//   content  — full write-up shown when the file is opened (array of paragraph strings)
//   photos   — array of image paths (relative to site root), or [] if none yet
//   locked   — true if this file needs its OWN password on top of the site password
//   password — required if locked is true (plain string, client-side only — not real security)

const DK_FILES = [
  {
    id: "car-incident-001",
    caseNumber: "001",
    title: "The Great Car Incident",
    date: "December 31, 2025",
    category: "Vehicular Mishap",
    summary: "Subject was observed throwing up in a moving Tesla Model S. Witnesses remain traumatized.",
    content: [
      "Approximately 7:00 PM, December 31, 2025. Earlier that evening, the party had obtained Korean food and proceeded to drive around Los Angeles, at one point stopping on a bridge to smoke a cigarette.",
      "Persons present: Aiden Yue, Dory Kawauchi, Baharullah Mahin, and Ballsaac.",
      "While en route, with Aiden operating his Tesla Model S, subject Dory Kawauchi reported feeling unwell.",
      "The vehicle was pulled to the shoulder of the freeway, where subject vomited into her own hand and discharged the contents out of the window. Subject then requested the driver pull over at the next available stop.",
      "Before that stop could be reached, subject vomited a second time, this instance directly onto the front passenger seat.",
      "Upon arrival at a gas station, subject exited the vehicle and continued vomiting behind the building for approximately 20 minutes.",
      "Cleanup of the vehicle's interior was performed entirely by Aiden Yue.",
    ],
    photos: [],
    locked: false,
    password: null,
  },
  {
    id: "popup-bagels-002",
    caseNumber: "002",
    title: "The Popup Bagels Incident",
    date: "Unknown",
    category: "Poor Decision-Making",
    summary: "Subject, under the influence of cannabis, dropped her phone and chose to keep eating her bagel instead.",
    content: [
      "Location: Popup Bagels, San Diego, CA. Subject was under the influence of cannabis at the time of the incident.",
      "While eating, subject's phone was knocked to the ground beside her seat.",
      "Subject looked down at the phone on the ground. Subject then looked at the bagel in her hand.",
      "After a brief period of consideration, subject elected to continue eating the bagel, leaving the phone where it lay.",
      "The phone was eventually retrieved. Its condition immediately following the incident is not on record.",
    ],
    photos: [],
    locked: false,
    password: null,
  },
  {
    id: "hard-summer-003",
    caseNumber: "003",
    title: "The Hard Summer Incident",
    date: "Unknown",
    category: "Heat Exhaustion",
    summary: "Subject suffered heat exhaustion in the crowd at Hard Summer and spent roughly 30 minutes vomiting as a result.",
    content: [
      "Location: Hard Summer Music Festival. Subject was reportedly under the influence of MDMA at the time.",
      "Subject became heat exhausted while in the festival crowd, prompting the party to pull her out of the crowd area.",
      "Once clear of the crowd, subject spent approximately 30 minutes vomiting as a result of the heat exhaustion.",
    ],
    photos: [],
    locked: false,
    password: null,
  },
  {
    id: "l2-incident-004",
    caseNumber: "004",
    title: "The L² Incident",
    date: "Unknown",
    category: "Roommate Dispute",
    summary: "A conflict broke out between subject and her roommate, Leanne. Full details pending.",
    content: [
      "Subject and her then-roommate, Leanne, were involved in a dispute.",
      "Details of the incident are pending further briefing and will be added as they are declassified.",
    ],
    photos: [],
    locked: false,
    password: null,
  },
];
