// THE DK FILES — app logic
// Static site, no backend. "Security" here is a fun gate for friends, not real protection —
// anyone who views page source or the repo directly can read everything anyway.

const SITE_PASSWORD = "chud";
const SESSION_KEY = "dkfiles_unlocked";

const grid = document.getElementById("grid");
const search = document.getElementById("search");
const resultCount = document.getElementById("result-count");
const emptyState = document.getElementById("empty-state");
const overlay = document.getElementById("overlay");
const overlayContent = document.getElementById("overlay-content");

// ---------- Gate ----------
function unlockSite() {
  document.getElementById("gate").style.display = "none";
  document.getElementById("site").classList.add("visible");
  renderGrid(DK_FILES);
}

document.getElementById("gate-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("gate-password");
  const errEl = document.getElementById("gate-error");
  if (input.value === SITE_PASSWORD) {
    sessionStorage.setItem(SESSION_KEY, "1");
    errEl.textContent = "";
    unlockSite();
  } else {
    errEl.textContent = "INCORRECT PASSWORD — ACCESS DENIED";
    input.value = "";
    input.focus();
  }
});

if (sessionStorage.getItem(SESSION_KEY) === "1") {
  unlockSite();
}

// ---------- Search ----------
function matches(file, query) {
  if (!query) return true;
  const haystack = [
    file.title,
    file.category,
    file.summary,
    file.date,
    file.caseNumber,
    ...(file.content || []),
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query.toLowerCase());
}

search.addEventListener("input", () => {
  const q = search.value.trim();
  const filtered = DK_FILES.filter((f) => matches(f, q));
  renderGrid(filtered);
});

// ---------- Grid rendering ----------
function renderGrid(files) {
  grid.innerHTML = "";
  resultCount.textContent = `${files.length} FILE${files.length === 1 ? "" : "S"} FOUND`;
  emptyState.style.display = files.length === 0 ? "block" : "none";

  files.forEach((file) => {
    const card = document.createElement("div");
    card.className = "file-card";
    card.innerHTML = `
      <div class="case-no">CASE FILE #${file.caseNumber}</div>
      <h2>${escapeHtml(file.title)}</h2>
      <div class="meta">${escapeHtml(file.category)} — ${escapeHtml(file.date)}</div>
      <div class="summary">${escapeHtml(file.summary)}</div>
      ${file.locked ? '<div class="lock-badge">🔒 Locked</div>' : ""}
    `;
    card.addEventListener("click", () => openFile(file.id));
    grid.appendChild(card);
  });
}

// ---------- File detail ----------
function openFile(id, skipLock = false) {
  const file = DK_FILES.find((f) => f.id === id);
  if (!file) return;

  overlay.classList.add("visible");

  if (file.locked && !skipLock) {
    overlayContent.innerHTML = `
      <div class="file-detail">
        <button class="close-btn" id="close-btn">✕</button>
        <div class="case-no">CASE FILE #${file.caseNumber} — RESTRICTED</div>
        <h2>${escapeHtml(file.title)}</h2>
        <div class="file-lock">
          <p>This file requires an additional password to view.</p>
          <form id="file-lock-form">
            <input type="password" id="file-lock-password" placeholder="Password" autocomplete="off" />
            <button type="submit">Unlock</button>
          </form>
          <div class="err" id="file-lock-err"></div>
        </div>
      </div>
    `;
    document.getElementById("close-btn").addEventListener("click", closeOverlay);
    document.getElementById("file-lock-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const val = document.getElementById("file-lock-password").value;
      if (val === file.password) {
        openFile(id, true);
      } else {
        document.getElementById("file-lock-err").textContent = "INCORRECT PASSWORD";
      }
    });
    return;
  }

  const photosHtml =
    file.photos && file.photos.length
      ? `<div class="photos">${file.photos
          .map((p) => `<img src="${p}" alt="${escapeHtml(file.title)} photo" loading="lazy" />`)
          .join("")}</div>`
      : `<div class="no-photos">No photographic evidence on file yet.</div>`;

  overlayContent.innerHTML = `
    <div class="file-detail">
      <button class="close-btn" id="close-btn">✕</button>
      <div class="case-no">CASE FILE #${file.caseNumber}</div>
      <h2>${escapeHtml(file.title)}</h2>
      <div class="meta-row">
        <span>Category: ${escapeHtml(file.category)}</span>
        <span>Date: ${escapeHtml(file.date)}</span>
      </div>
      <div class="content">
        ${file.content.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}
      </div>
      ${photosHtml}
    </div>
  `;
  document.getElementById("close-btn").addEventListener("click", closeOverlay);
}

function closeOverlay() {
  overlay.classList.remove("visible");
  overlayContent.innerHTML = "";
}

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeOverlay();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeOverlay();
});

// ---------- Deep links: #/file/<id> ----------
function handleHash() {
  const match = location.hash.match(/^#\/file\/(.+)$/);
  if (match && sessionStorage.getItem(SESSION_KEY) === "1") {
    openFile(decodeURIComponent(match[1]));
  }
}
window.addEventListener("hashchange", handleHash);
window.addEventListener("load", handleHash);

// ---------- Utility ----------
function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
