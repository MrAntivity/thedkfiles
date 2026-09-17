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
];
