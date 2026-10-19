# Build-with-AI Starter Pack

A reusable project scaffold for building apps with an agentic AI (Claude Code, Cursor, or anything that reads a `CLAUDE.md`). Copy the folder, describe your idea, answer a short interview — the AI wires up your PRD, feature map, version log, checklist, design system, competitor analysis, and a scaffolded codebase in one pass. From there, one dashboard keeps every project artifact honest as the app grows.

> **Made by [@stewpeed-dev](mailto:stewpeed.dev@gmail.com)** for personal reuse — public so anyone building this way can fork and adapt.

---

## Why this exists

Building an app with AI has a shape: idea → decisions → PRD → scope → design → code → versions → ship. Most of that shape stays the same project to project, but the artifacts usually get scattered across ChatGPT threads, Notion pages, sticky notes, and lost commit messages. This pack collapses the scaffolding into one folder so every new project starts from the same ritual and the same dashboard — and so the AI you're working with has a durable place to look things up instead of re-asking.

---

## Quick start

1. **Use this template** on GitHub, or clone/download the repo.
2. Rename the copy to your project's working name.
3. Open the folder in **Claude Code** (or another agentic AI with `CLAUDE.md` support) — say **"start setup"** or just describe your app idea.
4. Answer the questionnaire (~10 minutes). Any question can be answered, given to the AI to suggest, or **deferred** — deferred questions keep getting re-asked until you decide.
5. When setup finishes: PRD, feature map, checklist, design tokens, competitor cards, a scaffolded app folder, and a `build.bat` all exist and match.

Then open **`.claude/project/hub.html`** in your browser. That's your dashboard for the whole project.

---

## What's in the box

```
.
├── CLAUDE.md                     # The AI's brain: file map, rules, data-file contract
├── README.md                     # You are here
├── LICENSE                       # MIT
├── .claude/
│   ├── setup/questionnaire.md    # Staged interview (gist first — the app name can wait)
│   ├── project/
│   │   ├── hub.html              # THE dashboard — 8 tabs, live-syncs with disk
│   │   └── data/                 # meta · prd · versions · checklist · features · premium
│   │       │                     # competitors · decisions · rules  (all JS-wrapped JSON)
│   ├── creative/
│   │   ├── design-system.html    # Colors, type, spacing + live component previews
│   │   ├── data/design-tokens.js # The actual token values (app theme should mirror these)
│   │   └── icons/                # Drop SVGs here for bulk adding to the app
│   ├── shared/sync-engine.js     # Auto-save + live-sync engine both HTML pages share
│   └── launch.json               # Dev-server config used for local HTML preview
└── the app itself [rename later]/ # Framework project scaffolds here during setup
```

The two HTML pages are intentionally **bland**. Every project gets its own visual identity, so the AI restyles the hub and design system right after setup to match *that* app's personality. The template staying neutral means it never fights the project's vibe.

---

## The hub — one dashboard, eight tabs

Open `.claude/project/hub.html` in your browser and you get:

| Tab | What it holds |
|---|---|
| **PRD** | Living product doc, with an **Export PDF** button for sharing with humans |
| **Versions** | The version log + `pending` changes the AI records as it works; saying "build" promotes them and bumps the version |
| **Checklist** | Launch checklist, **Notes for later** (anything you said "later" to lands here immediately), and Phase-2 ideas — with a progress bar |
| **Features** | Feature × platform status grid, with a Free/Premium tier badge per feature |
| **Premium** | Free vs paid split, gating UX, and any pending monetization decisions — this tab only appears if your app has a paywall |
| **Competitors** | Graded report cards vs. **your** scope. During setup, the AI proposes the competitor list in the same message it asks "want a competitor analysis?" — you can add or remove names before deciding. **+ Competitor** queues a name for research |
| **Decisions** | Every questionnaire answer with status `answered` / `deferred` / `open` / `n/a` — deferred ones keep getting re-asked whenever their topic surfaces |
| **Rules** | Your standing orders for the AI: what "build", "commit", and "merge" mean; the co-author line format; anything project-specific |

---

## Browser support

The hub can **auto-save your edits to disk** and **pick up the AI's edits live** — you can have the dashboard open in one window while the AI writes to the underlying files in another, and neither side loses work. That two-way sync uses the [File System Access API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API), which is Chromium-only.

| Browser | Auto-save | Live pickup of AI edits | Conflict handling |
|---|---|---|---|
| Chrome / Edge / Helium / Arc / Brave | ✅ Click **Connect project folder** once, then everything is automatic | ✅ ~2.5s poll | ✅ Banner lets you pick disk-version vs. yours |
| Firefox / Zen / Safari | ⚠ Buffer + **Download changed file(s)** button | ✅ ~2.5s poll (script re-injection fallback) | ✅ Same banner |

If both sides change the same file at once, the page shows a **conflict banner** and asks which version wins — nothing is silently overwritten.

---

## The rules that come with the pack

These live in the hub's Rules tab and in `CLAUDE.md`. You can edit them per project.

- **"build"** → the AI promotes pending changes into a new version, bumps `meta.js` and the in-app version constant, gives you the commit summary + description (ending with the co-author line), and points you at `build.bat`
- **"commit"** → commit summary + description only, nothing else
- **"merge"** → step-by-step instructions for GitHub Desktop
- **"later"** → whatever you said "later" to lands in **Checklist → Notes for later** immediately, and stays there until it's actually resolved
- **Deferred decisions** → the AI re-asks whenever the topic surfaces, forever, until you decide
- **Version discipline** → every meaningful code change adds a `pending` entry in `versions.js` with page tags, so "build" promotions are accurate

---

## For contributors / forkers

This pack is deliberately opinionated (Flutter default, GitHub Desktop workflow, `build.bat` for debug profile builds). If your workflow differs, the two files worth editing are `CLAUDE.md` and `.claude/project/data/rules.js` — those hold everything project-specific. The two HTML pages are just renderers over the data files, and the sync engine is one shared file.

Data-file contract, for anyone extending it: every `data/*.js` file has the exact shape

```js
window.HUB_DATA = window.HUB_DATA || {};
window.HUB_DATA["<key>"] = /*DATA*/
{ ...valid JSON... }
/*END*/;
```

The payload between the markers has to be valid JSON — the hub parses it with `JSON.parse`. Add a new tab by dropping a new data file, wiring it into `hub.html`'s script tags + `KEYS` array + `TABS` list + a `render<Thing>()` function. The sync engine takes care of the rest.

---

## License

MIT — see [LICENSE](LICENSE). Use it, fork it, gut it, ship your own version.
