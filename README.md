# THE DK FILES

A static, no-backend "case file" archive site. Pure HTML/CSS/JS — no database, no Firebase, nothing server-side.

**Heads up on the "password protection":** the password check runs entirely in the browser (`app.js`), and the site will
live in a public GitHub repo. That means it's a fun gate for friends, not real security — anyone who opens the repo files
directly or views page source can read the password and every "file" anyway. Don't put anything in here you wouldn't be
okay with anyone finding.

## Adding a new incident

Open [`data.js`](data.js) and add a new object to the `DK_FILES` array:

```js
{
  id: "unique-slug-here",
  caseNumber: "002",
  title: "The Incident Title",
  date: "March 2024",           // or "Unknown"
  category: "Some Tag",
  summary: "One sentence teaser shown on the card.",
  content: [
    "First paragraph of the full story.",
    "Second paragraph, etc."
  ],
  photos: ["images/whatever.jpg"],   // or [] if none
  locked: false,                     // true if this file needs its own password
  password: null,                    // required string if locked: true
}
```

## Adding photos

Drop image files into the [`images/`](images) folder, then reference them by path (e.g. `images/car-incident-1.jpg`) in
that file's `photos` array in `data.js`.

## Changing the site password

Edit `SITE_PASSWORD` at the top of [`app.js`](app.js). Currently set to `chud`.

## Locking an individual file

Set `locked: true` and `password: "yourpassword"` on that file's entry in `data.js`. Visitors will need the site password
first, then that file's own password to open it.

## Running locally

Just open `index.html` in a browser — no build step, no server required.

## Deploying to GitHub Pages

1. Push this repo to GitHub (must be a **public** repo for free GitHub Pages hosting, unless you're on GitHub Pro/Team).
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to "Deploy from a branch", branch `main`, folder `/ (root)`.
4. Save — the site will be live at `https://<username>.github.io/<repo-name>/` within a minute or two.
