# Project Setup Questionnaire

This is the interview Claude runs when the user says **"start setup"** (or anything meaning "let's begin this project"). It exists because the user wants every new project to start from the same ritual: extract the idea, make the decisions visible, and wire the whole starter pack around the answers.

## How to run it (protocol)

1. **Ask in stages, in this order.** The gist comes FIRST — the user may not have a name yet and may want help ideating one. Never open with "what's the app called".
2. **A few questions at a time**, conversationally — not a wall of 25 questions. Use the AskUserQuestion tool where options make sense; free text for open questions.
3. **Every question has three valid outcomes:**
   - **Answered** — record it.
   - **"Suggest something"** — give 2–4 concrete recommendations with honest trade-offs, let the user pick. Record the pick *and* one line of reasoning.
   - **Deferred** ("later", "skip", "don't know yet") — record status `deferred`. Deferred questions are NOT forgotten: re-ask whenever related work surfaces, until answered. This is a standing rule.
4. **Record answers immediately** into `.claude/project/data/decisions.js` (the questions are pre-seeded there with status `open`). Don't batch it all at the end — write after each stage so nothing is lost.
5. **Stage 1 is mandatory before anything else.** Stages 2–6 can be reordered or interleaved if conversation flows that way, but all questions must end up answered/deferred/n-a.
6. After the interview, do everything in **"After the questionnaire"** below.

---

## Stage 1 — The gist (mandatory, always first)

> The user said: "one thing that will be there in my mind for sure is at least a gist of what I need."

- What does the app do? Let them brain-dump in any order; ask follow-ups until you could explain the app to a stranger.
- Who is it for? (them personally? a niche? general public?)
- What problem does it remove — and why do existing apps fail at it?
- Which platforms for v1? (Android / Windows / iOS / macOS / web…)
- What's the ONE thing that must be undeniably great?

## Stage 2 — Scope

- Core v1 features (must-haves). Reflect back a drafted list; get it confirmed.
- Nice-to-haves (v1.x candidates — these seed Checklist → "Phase 2 / future").
- Explicit non-goals.
- Offline-first, online-first, or hybrid?
- **Paywall?** If yes → draft a free/premium split into `premium.js` using the guiding principle already there. If no → set `meta.premiumEnabled = false` (the Premium tab disappears from the hub).

## Stage 2.5 — Competitor analysis  *(opt-in, right after the scope is clear)*

Once you understand what the app does and its v1 scope:

1. **In one message**: (a) ask if the user wants a competitor analysis, and (b) already list the competitors you believe exist for this idea (research with web search if available — don't guess from memory alone). The user must see the proposed list *before* saying yes/no.
2. Let the user add/remove names from the list.
3. If **yes** → research each competitor and fill `.claude/project/data/competitors.js`: per competitor a grade (how well they cover OUR planned scope), tagline, platforms, pricing, a feature table judged against our v1 feature list (yes/partial/no + detail), strengths, weaknesses, and "their users would switch to us if…". Write the overall `summary` (what was compared) and `verdict` (the gap our app exploits, what to steal, what to avoid). Be honest about unverifiable vendor claims.
4. If **no** → set `enabled: false` in `competitors.js` (the hub tab disappears). Record the decision either way in `decisions.js`.
5. **Standing rule:** the user can add a competitor in the hub at any time (it appears with `requested: true`). Whenever you see a requested entry — or the user says "fill in the competitor analysis" — research it and complete its card.

## Stage 3 — Name & identity  *(suggestable)*

- App name. If undecided, offer name candidates derived from the gist (this is expected, not an edge case). Until final, set a **codename** in `meta.js` — the folder rename can wait for the real name if the user prefers.
- Tagline / one-liner.
- Personality words (e.g. "calm, precise, playful") — these drive Stage 5 and the hub/design-system restyling.

## Stage 4 — Tech  *(suggestable / deferrable)*

- Framework & language. **Default suggestion: Flutter** (the user's usual), but always ask — some projects will differ. If the chosen stack doesn't do multi-OS from one codebase, plan per-OS subfolders inside the app folder.
- State management.
- Local persistence / database *(commonly deferred — that's fine)*.
- Backend / auth / sync, if any *(commonly deferred)*.
- Payments provider — only if paywall (suggest wrapping store billing, e.g. RevenueCat; never a custom billing flow).

## Stage 5 — Design  *(suggestable)*

- Exact values, or vibes? The user may dictate fonts/gaps/colors precisely, or say "derive it from the PRD's vibe" — both are first-class answers.
- Dark / light / both. Fonts (display, body, mono). Accent color(s). Animation appetite. Reference apps they admire.
- Produce the real tokens into `.claude/creative/data/design-tokens.js`, then walk the user through `design-system.html` for sign-off.

## Stage 6 — Workflow

- Starting version, and what x.y.z **mean** for this project (record in `meta.versionMeaning`).
- Initial pages/screens list → `meta.pages` (used to tag changes in the Versions tab).
- GitHub repo name / branching habit. (User commits via **GitHub Desktop** — Claude supplies text, never runs git push itself.)
- Build command for `build.bat` (default: debug **profile** build for the chosen framework).

---

## After the questionnaire (do all of these)

1. **decisions.js** — final statuses for every question. Deferred ones stay `deferred`.
2. **meta.js** — appName/codename, tagline, version, versionMeaning, pages, platforms, framework, premiumEnabled, `setupDone: true`.
3. **prd.js** — write the actual PRD from the interview. Real sentences, not placeholders.
4. **features.js** — platforms + feature groups from the v1 scope, all `todo`.
5. **premium.js** — free/premium split (or leave untouched if premiumEnabled=false).
5b. **competitors.js** — filled (or `enabled: false`) per Stage 2.5.
6. **checklist.js** — populate: Setup section (mark the questionnaire done), Pre-launch items you can already foresee, deferred decisions echoed under "Notes for later", nice-to-haves under "Phase 2 / future".
7. **design-tokens.js** — real tokens; confirm in the browser with the user.
8. **Restyle `hub.html` and `design-system.html`** to match the app's identity (fonts, colors, personality). The starter pack ships bland on purpose; the project shouldn't stay bland.
9. **Rename the app folder** (`the app itself [rename later]` → the app's name) and scaffold the project inside it. Create the in-app version constant and set it to the starting version.
10. **Create `build.bat`** at the pack root (cd into the app folder, run the profile build, pause on error).
11. **versions.js** — add version `0.1.0` (or the chosen start) with a single item: "Project scaffolded from the starter pack." Update `meta.version` to match.
12. Give the user a short tour: what got created, where the hub is, what's still deferred.
