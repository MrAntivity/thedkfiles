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
    date: "Unknown",
    category: "Vehicular Mishap",
    summary: "Subject was observed throwing up in a moving vehicle. Witnesses remain traumatized.",
    content: [
      "On a date lost to memory but never to legend, subject Dory Kawauchi was riding in a car when she threw up.",
      "Full details pending further testimony from witnesses on scene. This file will be updated as more information is declassified.",
    ],
    photos: [],
    locked: false,
    password: null,
  },
];
