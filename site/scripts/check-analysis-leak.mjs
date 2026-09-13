/**
 * Analysis-vocabulary leak check — runs after every build.
 *
 * The stage2 write-up prompt has always said the reader never sees the
 * analysis process itself: no narrator, no session, no mention of what was
 * or wasn't recorded or observed while writing the app up. That rule held
 * silently for a while and then slipped on all four v4.1 apps live at the
 * time this check was written (Clash of Clans, Dave, Cleo, Capybara Go!),
 * because reviewing prose for sense doesn't catch a vocabulary pattern —
 * same class of failure as the report-only leak and the confidence-tier
 * silent-drop this codebase has already been burned by once each. This
 * check makes the rule mechanical instead of relying on re-reading catching
 * it every time.
 *
 * Permanent correction (see stage2-website-content.md): the rule above is
 * about mechanics, not scope, and the two are not the same failure. A
 * feature the app itself states exists (a locked entry with its own stated
 * unlock condition, say) must never be written as absent from the app just
 * because this analysis didn't reach it — that produced a real false
 * statement about Capybara Go's Social section once already. The fix is a
 * scope statement in the library's own voice: first person plural, about
 * coverage only ("we did not cover X in this analysis"), never naming a
 * narrator, a session, a recording, or what a session reached. That form is
 * deliberately NOT caught by the patterns below — "analysis", "cover", and
 * "available to us" are none of them banned words, on purpose, because
 * "analysis" alone is also ordinary marketing copy elsewhere on this site
 * (see Shortcasts.jsx, Subscribe.jsx) and banning it bare would flag pages
 * that have nothing to do with this check. The two phrases in EXEMPT_PHRASES
 * below that mention "this analysis" are the sanctioned templates, kept
 * explicit here so a future tightening of PATTERNS (banning bare "review",
 * say) doesn't silently re-criminalize the one form of this vocabulary the
 * rule now requires.
 *
 * Scans the VISIBLE TEXT of every rendered page in dist/ (script/style
 * bodies and HTML comments stripped first, then all tags stripped, so a
 * hit can only come from prose a reader actually sees — never a CSS class
 * like "v41-observation__observed" or a DOM API like
 * "observedAttributes", both of which live inside a tag or inside a
 * <script> body and never survive the strip).
 *
 * Fixed site chrome and sanctioned copy that legitimately contain this
 * vocabulary are carved out by exact phrase before the bare-word check
 * runs:
 *   - "What was observed" — the schema's own field-label heading, identical
 *     on every mechanic block on every app's page.
 *   - "Nothing observed here" — the empty-section placeholder shown on a
 *     summary page when a section has no content (see Dave and Cleo's
 *     Social sections).
 *   - "in this analysis" / "during this analysis" — the sanctioned scope
 *     statement described above. Carved out so it can never be masked by,
 *     nor accidentally caught alongside, a real leak sitting in the same
 *     text node; today's PATTERNS wouldn't catch either phrase anyway, but
 *     they're listed here as the two forms actually in use so that stays
 *     true on purpose rather than by accident.
 * Nothing else is exempt. A genuine in-app feature that happens to use one
 * of these words (Strava's own "Recording an activity", a game's own
 * "recorded play" counter) reads as a false positive here on purpose:
 * it's cheaper to double-check a real hit occasionally than to carve out
 * enough exceptions that a real leak slips through one of them again.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const dist = path.resolve(here, "../dist");

if (!fs.existsSync(dist)) {
  console.error("check-analysis-leak: dist/ does not exist — run the build first.");
  process.exit(1);
}

// HARD_FAIL: whether a hit stops the build (exit 1) or only warns loudly
// (exit 0, but impossible to miss in build output). Start at false — this
// check is new and unproven against the full site, and a first pass may
// still turn up phrasing (a mechanic literally named "Recording", a
// glossary entry on session pacing) that deserves its own carve-out rather
// than blocking every deploy on day one. Flip to true once a clean build
// has run with zero hits and the false-positive shape is understood.
const HARD_FAIL = false;

// Fixed site chrome, plus the sanctioned scope-statement wording, that
// legitimately contains this vocabulary — stripped out (once each) before
// the bare-word patterns run, so it can never mask a real hit sitting right
// next to it in the same text node.
const EXEMPT_PHRASES = [
  "What was observed",
  "Nothing observed here",
  "in this analysis",
  "during this analysis",
];

// [label, regex] — word-boundary, case-insensitive. "observed" is checked
// as a bare word deliberately: after the two exemptions above are removed,
// any remaining "observed" is either the leak pattern itself ("the
// narrator observed", "was never observed") or close enough to it to be
// worth a human look.
const PATTERNS = [
  ["narrator", /\bnarrators?\b/i],
  ["session", /\bsessions?\b/i],
  ["recorded", /\brecorded\b/i],
  ["recording", /\brecording\b/i],
  ["observed", /\bobserved\b/i],
  ["was not shown", /\bwas not shown\b/i],
  ["in this review", /\bin this review\b/i],
];

function visibleText(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ");
}

const hits = [];
function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) {
      walk(p);
      continue;
    }
    if (path.extname(name) !== ".html") continue;

    let text = visibleText(fs.readFileSync(p, "utf8"));
    for (const phrase of EXEMPT_PHRASES) text = text.split(phrase).join(" ");

    for (const [label, re] of PATTERNS) {
      const m = text.match(re);
      if (!m) continue;
      const idx = m.index ?? text.search(re);
      const start = Math.max(0, idx - 60);
      const end = Math.min(text.length, idx + m[0].length + 60);
      const snippet = text.slice(start, end).trim();
      hits.push({ page: path.relative(dist, p), phrase: label, snippet });
    }
  }
}
walk(dist);

if (hits.length) {
  const verb = HARD_FAIL ? "FAILED" : "found hits (warning only)";
  console.error(`Analysis-vocabulary leak check ${verb} — ${hits.length} hit(s):\n`);
  for (const h of hits) {
    console.error(`  ✗ ${h.page} — "${h.phrase}"`);
    console.error(`      ...${h.snippet}...\n`);
  }
  console.error(
    HARD_FAIL
      ? "The reader must never see the analysis process itself. Build stopped."
      : "The reader must never see the analysis process itself. HARD_FAIL is false, so the build " +
          "continues — set HARD_FAIL to true in check-analysis-leak.mjs once these are resolved and " +
          "no more turn up on a clean build.",
  );
  if (HARD_FAIL) process.exit(1);
} else {
  console.log("Analysis-vocabulary leak check passed: zero hits across dist/.");
}
