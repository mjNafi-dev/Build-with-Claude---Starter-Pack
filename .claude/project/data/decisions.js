window.HUB_DATA = window.HUB_DATA || {};
window.HUB_DATA["decisions"] = /*DATA*/
{
  "note": "Every questionnaire answer lands here. Statuses: open (never asked/answered), deferred (user said later — AI keeps re-asking when relevant), answered, n/a.",
  "sections": [
    { "title": "Stage 1 — The gist", "questions": [
      { "id": "gist.what", "q": "What does the app do? (brain-dump, any order)", "status": "open", "answer": "" },
      { "id": "gist.who", "q": "Who is it for?", "status": "open", "answer": "" },
      { "id": "gist.problem", "q": "What problem does it remove / why do existing apps fail?", "status": "open", "answer": "" },
      { "id": "gist.platforms", "q": "Which platforms for v1?", "status": "open", "answer": "" },
      { "id": "gist.hero", "q": "The one thing that must be undeniably great?", "status": "open", "answer": "" }
    ] },
    { "title": "Stage 2 — Scope", "questions": [
      { "id": "scope.core", "q": "Core v1 features (must-haves)", "status": "open", "answer": "" },
      { "id": "scope.nice", "q": "Nice-to-haves (v1.x candidates)", "status": "open", "answer": "" },
      { "id": "scope.nongoals", "q": "Explicit non-goals", "status": "open", "answer": "" },
      { "id": "scope.offline", "q": "Offline-first, online-first, or hybrid?", "status": "open", "answer": "" },
      { "id": "scope.paywall", "q": "Will there be a paid/premium tier?", "status": "open", "answer": "" },
      { "id": "scope.competitors", "q": "Competitor analysis? (Claude proposes the competitor list in the same breath; you can add/remove names)", "status": "open", "answer": "" }
    ] },
    { "title": "Stage 3 — Name & identity", "questions": [
      { "id": "name.name", "q": "App name (AI offers candidates; a codename is used until final)", "status": "open", "answer": "" },
      { "id": "name.tagline", "q": "Tagline / one-liner", "status": "open", "answer": "" },
      { "id": "name.vibe", "q": "Personality / vibe words for the app", "status": "open", "answer": "" }
    ] },
    { "title": "Stage 4 — Tech", "questions": [
      { "id": "tech.framework", "q": "Framework & language (default suggestion: Flutter)", "status": "open", "answer": "" },
      { "id": "tech.state", "q": "State management approach", "status": "open", "answer": "" },
      { "id": "tech.persistence", "q": "Local persistence / database", "status": "open", "answer": "" },
      { "id": "tech.backend", "q": "Backend / auth / sync (if any)", "status": "open", "answer": "" },
      { "id": "tech.payments", "q": "Payments provider (only if paywall)", "status": "open", "answer": "" }
    ] },
    { "title": "Stage 5 — Design", "questions": [
      { "id": "design.source", "q": "Exact token values, or derive the design from the PRD's vibe?", "status": "open", "answer": "" },
      { "id": "design.mode", "q": "Dark / light / both?", "status": "open", "answer": "" },
      { "id": "design.fonts", "q": "Fonts (display / body / mono)", "status": "open", "answer": "" },
      { "id": "design.accents", "q": "Accent color(s)", "status": "open", "answer": "" },
      { "id": "design.motion", "q": "Animation appetite (none / subtle / animation-heavy)", "status": "open", "answer": "" },
      { "id": "design.refs", "q": "Reference apps whose look you admire", "status": "open", "answer": "" }
    ] },
    { "title": "Stage 6 — Workflow", "questions": [
      { "id": "flow.version", "q": "Starting version + what x.y.z mean for this project", "status": "open", "answer": "" },
      { "id": "flow.pages", "q": "Initial list of pages/screens (used for tagging changes)", "status": "open", "answer": "" },
      { "id": "flow.git", "q": "GitHub repo name / branching habit (GitHub Desktop assumed)", "status": "open", "answer": "" },
      { "id": "flow.build", "q": "Build flavor for build.bat (default: debug profile APK)", "status": "open", "answer": "" }
    ] }
  ]
}
/*END*/;
