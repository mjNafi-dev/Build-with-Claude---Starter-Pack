# 🚀 Build-with-AI Starter Pack

Copy this whole folder every time you start a new app. Then:

1. **Open the copied folder in Claude Code** (or any agentic AI that reads `CLAUDE.md`).
2. Say **"start setup"** — or just start describing your app idea.
3. Answer the questionnaire. It starts with *what the app does*, not the name — if you don't have a name, the AI helps you ideate one. Any question can be answered, given to the AI to suggest, or deferred ("later" — it will keep asking until you decide).
4. When setup finishes you'll have: a filled PRD, a feature map, a checklist, a design system, a scaffolded app, and a `build.bat`.

## Your dashboard

Open **`.claude/project/hub.html`** in your browser. One page, seven tabs:

| Tab | What it is |
|---|---|
| PRD | The living product doc — with an **Export PDF** button for sharing |
| Versions | Version log + **pending changes** Claude records as it works; "build" promotes them |
| Checklist | Launch checklist + **notes for later** + phase-2 ideas, with progress bar |
| Features | Feature × platform status grid, free/premium tier per feature |
| Premium | Free vs paid split (tab only exists if your app has a paywall) |
| Competitors | Graded competitor report cards vs. YOUR scope — offered during setup; **+ Competitor** queues a name for Claude to research |
| Decisions | Every questionnaire answer; deferred ones stay visible until you decide |
| Rules | Your standing orders for the AI ("build", "commit", "merge"…) |

**`.claude/creative/design-system.html`** is the visual design reference (colors, type, spacing, and live UI component previews). Drop SVG icons into `.claude/creative/icons/` for bulk adding to the app.

## Browsers (important)

- **Chrome / Edge / Helium** — click **Connect project folder** once (pick the project's `.claude` folder). From then on: everything you edit in the page **saves straight to disk**, and anything Claude edits **appears live** in the open page. No lost changes in either direction.
- **Firefox / Zen** — you'll see a warning, but it still works: Claude's edits still show up live; your own page edits buffer locally and you export them with one button, then drop the file(s) into `.claude/project/data/`.

If the page and the files ever change at the same time, the page shows a conflict banner and lets you pick which version wins — nothing is silently lost.

## Both HTML pages are intentionally bland

Every project gets its own visual identity — after the questionnaire, the AI restyles the hub and design system to match *that* app. The template stays neutral so it never fights the project's vibe.
