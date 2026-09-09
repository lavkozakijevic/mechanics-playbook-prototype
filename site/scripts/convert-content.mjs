/**
 * Content conversion: v44 data.js + system.html + sources/analyses → content collection JSON.
 *
 * Sources of truth (per migration brief + content-corrections.md):
 *  - data.js               → prose content (mechanics, write-ups, system texts)
 *  - system.html           → system map positions & connections (last definition wins,
 *                            matching what the live site renders)
 *  - sources/analyses/*.md → relationship set + depth grades + dates (corrections §2–3)
 *  - analysis prompt       → definitions of the three new mechanics (corrections §4)
 *
 * Stage 2 scope: all 25 mechanics, all 30 apps (25 library + 5 report-only).
 * Converted in batches of five; the report-only apps never reach the build output.
 */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { V41_SECTIONS } from "../src/lib/v41-sections.mjs";
import { REVIEW_WINDOW_OPEN } from "../src/lib/review-window.mjs";

// Temporary public review window (see review-window.mjs, the single
// switch). Report-only stays excluded regardless — that is a content-safety
// gate on unfinished analyses, not a paywall, and this window is about the
// paywall only.
function effectiveVisibility(computed) {
  if (REVIEW_WINDOW_OPEN && computed !== "report-only") return "public";
  return computed;
}

const here = path.dirname(fileURLToPath(import.meta.url));
const repo = path.resolve(here, "../..");
const out = path.resolve(here, "../src/content");

// ---------------------------------------------------------------- data.js
const ctx = {};
vm.createContext(ctx);
vm.runInContext(
  fs.readFileSync(path.join(repo, "data.js"), "utf8") +
    ";__o={MECHANICS,APPS,SYSTEMS,RICH_DESCRIPTIONS,SCREENSHOTS,CHEATSHEETS,GLOSSARY};",
  ctx
);
const { MECHANICS, APPS, SYSTEMS, RICH_DESCRIPTIONS, SCREENSHOTS, CHEATSHEETS, GLOSSARY } = ctx.__o;

// ---------------------------------------------------------- system.html
// CONNECTIONS and POSITIONS are object literals embedded in the page. Some
// systems are defined more than once; evaluating the literal keeps the LAST
// copy, exactly as the browser does on the live site.
const systemHtml = fs.readFileSync(path.join(repo, "system.html"), "utf8");
function extractObjectLiteral(name) {
  const i = systemHtml.indexOf("const " + name);
  if (i < 0) throw new Error(name + " not found in system.html");
  const start = systemHtml.indexOf("{", i);
  let depth = 0,
    j = start;
  for (; j < systemHtml.length; j++) {
    if (systemHtml[j] === "{") depth++;
    else if (systemHtml[j] === "}") {
      depth--;
      if (depth === 0) break;
    }
  }
  return systemHtml.slice(start, j + 1);
}
const mapCtx = {};
vm.createContext(mapCtx);
vm.runInContext(
  "__c=" + extractObjectLiteral("CONNECTIONS") + ";__p=" + extractObjectLiteral("POSITIONS") + ";",
  mapCtx
);
const CONNECTIONS = mapCtx.__c;
const POSITIONS = mapCtx.__p;

// ------------------------------------------------------- analysis files
// Reviewed analyses head each mechanic with the canonical library name and no
// inline id ("### Streak · Core · confirmed"). These names are resolved onto
// this library's mechanic ids. Where this library does not separate two
// canonical names, both resolve onto the entry that covers them, and the
// relationship is de-duplicated. A name mapped to null is classified in the
// analysis but not published as a mechanic.
const CANONICAL_MECHANIC_IDS = {
  "Streak": "streak",
  "Challenge": "challenges",
  "Social Feed": "social-feed",
  "Leaderboard": "leaderboards",
  // This library carries one ranking entry; the analysis separates the ordered
  // list from the user's own standing. Both are written up under leaderboards.
  "Comparative Rank": "leaderboards",
  // This library's entry is "Achievements / Milestones" and covers both.
  "Milestone": "achievements",
  "Achievement": "achievements",
  "Group Membership": "community-groups",
  // Wakeout's analysis classifies Wake Out Watts as "Experience Points"; this
  // library's equivalent entry is "XP / Leveling".
  "Experience Points": "xp-leveling",
  // Partner cross-promotion (Runna, Apple Fitness+, partner-named challenges)
  // and the app's own subscription upsell are not published as an advertising
  // or monetization mechanic: the content rules limit advertising coverage to
  // actual ad units (rewarded video, interstitial, banner, offerwall), and none
  // were observed. The partnerships are described inside the challenge write-up.
  "Advertisement Exposure": null,
  "Daily / Weekly Quests": "daily-weekly-quests",
};

// A reviewed heading's confidence tag gates publication, independent of what
// mechanic it maps to: "confirmed" and "strongly supported" (with whatever
// qualifier trails them, e.g. "confirmed (presence)") publish; anything
// weaker (plausible, weakly supported, ...) is parsed but held back, per app,
// not hard-coded per mechanic — a mechanic confirmed in one app's analysis
// and only plausible in another's is filtered independently in each.
function publishesAtConfidence(confidence) {
  if (!confidence) return true; // older analyses carry no confidence tag at all
  const c = confidence.trim().toLowerCase();
  return c.startsWith("confirmed") || c.startsWith("strongly supported");
}

function parseAnalysisV3(file) {
  const md = fs.readFileSync(path.join(repo, "sources/analyses", file), "utf8");
  const meta = {};
  for (const [, k, v] of md.matchAll(/^\*\*([^:*]+):\*\*\s*(.+)$/gm)) meta[k.trim()] = v.trim();
  // Observed mechanics: "### Name (`id`) · Level" or "### Name (`id`) · Level · Thin"
  const observed = [...md.matchAll(/^### .+?\(`([a-z0-9-]+)`\)\s*·\s*(\w+)(?:\s*·\s*(Thin))?/gm)].map((m) => ({
    id: m[1],
    depth: m[2].toLowerCase(),
    ...(m[3] === "Thin" ? { provisionalDepth: true } : {}),
  }));
  // Reviewed analyses carry no inline id and head sections with the canonical
  // mechanic name instead. Resolve those through the map above. Only files that
  // yield nothing from the id form take this path, so older analyses are
  // untouched. An unknown canonical name stops the build rather than silently
  // dropping a mechanic from the case study.
  if (!observed.length) {
    for (const m of md.matchAll(/^###\s+([^·\n]+?)\s*·\s*(Core|Supporting|Shallow|Unusual)\b(?:\s*·\s*([^\n]+))?/gm)) {
      const name = m[1].trim();
      if (!(name in CANONICAL_MECHANIC_IDS))
        throw new Error(`${file}: mechanic heading "${name}" has no canonical mapping`);
      const id = CANONICAL_MECHANIC_IDS[name];
      if (!id) continue;
      if (!publishesAtConfidence(m[3])) continue;
      if (!observed.some((o) => o.id === id)) observed.push({ id, depth: m[2].toLowerCase() });
    }
  }
  // Unrecognized mechanics: "### `working-name`" (may carry a trailing note)
  const unrecognized = [...md.matchAll(/^### `([a-z0-9-]+)`/gm)].map((m) => m[1]);
  // Screenshot suggestions per mechanic section: bracketed capture descriptions
  const shots = {};
  const sections = md.split(/^### /m).slice(1);
  for (const sec of sections) {
    const head = sec.match(/^.+?\(`([a-z0-9-]+)`\)/);
    if (!head) continue;
    shots[head[1]] = [...sec.matchAll(/^`\[([^\]]+)\]`/gm)].map((m) => m[1]);
  }
  const overview = md.split(/^## Overview\s*$/m)[1]?.split(/^---$/m)[0]?.trim() ?? "";
  return { meta, observed, unrecognized, shots, overview };
}

// --------------------------------------------------- v4.1 analysis format
// Nine fixed sections, observations with their own fields, tags applied per
// observation with a confidence value, proposed (unapplied) tags, and a
// narrative system view (appservatory spec §1). Detected per file — see
// detectAnalysisFormat — so files still in the old format keep parsing
// exactly as before, through parseAnalysisV3 above. The section list itself
// lives in v41-sections.mjs, shared with the template layer.
const V41_SECTION_SLUG = new Map(V41_SECTIONS.map((s) => [s.name, s.slug]));

function detectAnalysisFormat(file) {
  const md = fs.readFileSync(path.join(repo, "sources/analyses", file), "utf8");
  return /^# Pass one:/im.test(md) ? "v4.1" : "v3";
}

// Publishing bar (spec §1.3): tags publish only at confirmed or strongly
// supported. A plausible tag stays in the analysis file and never enters the
// parsed data — not even as a filtered-out record — so anything that reaches
// an observation's `tags` array is already index-ready.
//
// "Directly observed" is included here even though it's not named in the
// spec's publishing-bar wording: it's the observation-evidence vocabulary's
// top tier, not the tag-confidence vocabulary's, and the two are used
// interchangeably in this file (Earning Tasks is tagged at "directly
// observed" rather than "confirmed"). Since directly observed is at least as
// strong as confirmed, treating it as passing is the reading that doesn't
// silently drop a tag over a labeling inconsistency — but the inconsistency
// itself is real and is flagged separately, not papered over.
const TAG_CONFIDENCE_RANK = { plausible: 0, "strongly supported": 1, confirmed: 2, "directly observed": 2 };
function tagPublishes(confidence) {
  const rank = TAG_CONFIDENCE_RANK[confidence.trim().toLowerCase()];
  return rank !== undefined && rank >= 1;
}

// Splits text on a heading marker ("^## ", "^### ", ...) into {heading, body}
// pairs, one per section at that level. Used at every level of the v4.1
// heading hierarchy so no regex has to guess where one block ends and the
// next begins — the split does that.
function headingChunks(text, level) {
  const marker = "^" + "#".repeat(level) + " ";
  return text
    .split(new RegExp(marker, "m"))
    .slice(1)
    .map((chunk) => {
      const nl = chunk.indexOf("\n");
      return { heading: chunk.slice(0, nl).trim(), body: chunk.slice(nl + 1) };
    });
}

function h1Section(md, heading) {
  const hit = headingChunks(md, 1).find((c) => c.heading.toLowerCase() === heading.toLowerCase());
  return hit ? hit.body : null;
}

// Reads one labeled field out of a block, e.g. "**Rationale:** ...". Field
// labels are inconsistently punctuated in the source ("Draft definition."
// vs "Source observations:"), so both are accepted. Stops at the next
// capitalised bold label or the end of the block.
function field(block, label) {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("\\*\\*" + escaped + "[.:]\\*\\*\\s*([\\s\\S]*?)(?=\\n\\n\\*\\*[A-Z]|$)", "m");
  const m = block.match(re);
  return m ? m[1].trim() : "";
}

function idsIn(text) {
  return [...text.matchAll(/O\d+/g)].map((m) => m[0]);
}

// Reads the analysis file for exactly what spec §1.7 says it still supplies:
// the header dates, and the applied tags with their confidence. Everything
// else that used to come from Pass one/three and the Close section (observed
// prose, detail, system view narrative, cross-references) now comes from the
// content file instead, via parseContentV41 below.
function parseAnalysisV41(file) {
  const md = fs.readFileSync(path.join(repo, "sources/analyses", file), "utf8");

  // ---- header: title line + four required labeled fields, before Pass one.
  // Scoped to the preamble only, since bold "**Label:**" lines recur all
  // through Pass Two and Three and would otherwise pollute this.
  const preamble = md.split(/^# Pass one:/m)[0];
  const header = {};
  for (const [, k, v] of preamble.matchAll(/^\*\*([^:*]+):\*\*\s*(.+)$/gm)) header[k.trim()] = v.trim();
  for (const required of ["Session date", "Additional sessions", "Analysis date", "Last updated"]) {
    if (!header[required]) throw new Error(`${file}: v4.1 header is missing "${required}:"`);
  }
  const analysisDate = isoDate(header["Analysis date"]);
  const lastUpdated = isoDate(header["Last updated"]);
  if (!analysisDate) throw new Error(`${file}: "Analysis date" (${header["Analysis date"]}) is not a valid date`);
  if (!lastUpdated) throw new Error(`${file}: "Last updated" (${header["Last updated"]}) is not a valid date`);

  // ---- Pass two: applied tags, keyed by the observation ids they cover —
  // the join back onto the content file's observations happens at the call
  // site. The rejected-entries, unresolved, never-observed and proposed-tag
  // lists aren't part of the published content model (spec §1.6/§1.7) and
  // are deliberately left unparsed — they stay in the source file only.
  const passTwo = h1Section(md, "Pass two: tagging");
  if (passTwo === null) throw new Error(`${file}: "# Pass two: tagging" not found`);
  const appliedBlock = headingChunks(passTwo, 2).find((c) => c.heading === "Applied tags");

  const tagsById = new Map();
  for (const chunk of (appliedBlock?.body ?? "").split(/^\*\*Tag:\*\*\s*/m).slice(1)) {
    const nl = chunk.indexOf("\n");
    const tagName = chunk.slice(0, nl).trim();
    const block = chunk.slice(nl + 1);

    const obsLine = block.match(/\*\*Observations:\*\*\s*(.+)/);
    const confLine = block.match(/\*\*Confidence:\*\*\s*(.+)/);
    if (!obsLine || !confLine) throw new Error(`${file}: tag "${tagName}" is missing Observations or Confidence`);

    const confidence = confLine[1].trim();
    if (!tagPublishes(confidence)) continue;

    // Confidence is stated once per tag block, covering every observation it
    // lists, not independently per observation — so the same value is
    // copied onto each one. Rationale and Alternative considered are carried
    // verbatim (tier annotations included) for future review; nothing
    // renders them yet.
    const tagEntry = {
      name: tagName,
      confidence,
      rationale: field(block, "Rationale"),
      alternativeConsidered: field(block, "Alternative considered"),
    };
    for (const id of idsIn(obsLine[1])) {
      if (!tagsById.has(id)) tagsById.set(id, []);
      tagsById.get(id).push(tagEntry);
    }
  }

  return { analysisDate, lastUpdated, tagsById };
}

// Reads the content file (spec §1.7) for everything that renders: the app
// description and teaser, the system view narrative, and every section's
// lead-in and observations (label, prose, detail). Observation ids are
// parsed here too, since they're the join key back onto the analysis file's
// tags — but they never appear in the prose fields themselves. Returns null
// when the file doesn't exist, which the caller treats as "this app does not
// render" (spec §1.7: no fallback to the analysis).
function parseContentV41(file) {
  const filePath = path.join(repo, "sources/content", file);
  if (!fs.existsSync(filePath)) return null;
  const md = fs.readFileSync(filePath, "utf8");

  const norm = (s) => s.replace(/\s+/g, " ").trim();

  // ---- title block: "# Name", "**Teaser:** ...", then the app description
  // paragraph(s), all before the first "## " heading.
  const preamble = md.split(/^## /m)[0];
  const teaserMatch = preamble.match(/^\*\*Teaser:\*\*\s*(.+)$/m);
  if (!teaserMatch) throw new Error(`${file}: no "**Teaser:**" line found`);
  const description = norm(
    preamble
      .replace(/^#.*$/m, "")
      .replace(/^\*\*Teaser:\*\*.*$/m, "")
      .replace(/^---\s*$/gm, "")
  );
  if (!description) throw new Error(`${file}: no app description paragraph found`);

  const h2s = headingChunks(md, 2);
  if (!h2s.length || h2s[0].heading.toLowerCase() !== "system view")
    throw new Error(`${file}: expected "## System view" as the first section`);

  // ---- system view: narrative only, one string per paragraph — node
  // positions and connections for the diagram still come from data.js
  // SYSTEMS + system.html (spec §1.5).
  const systemView = h2s[0].body
    .replace(/^---\s*$/gm, "")
    .split(/\n{2,}/)
    .map(norm)
    .filter(Boolean);

  // ---- the nine fixed sections: a lead-in paragraph, then "### O<n>. Label"
  // observation blocks. An empty section carries only the fixed placeholder
  // line and has neither a lead-in nor observations.
  const sectionLeadIns = {};
  const observations = [];
  const obsById = new Map();
  const seenSlugs = new Set();

  for (const { heading, body } of h2s.slice(1)) {
    const slug = V41_SECTION_SLUG.get(heading);
    if (!slug) throw new Error(`${file}: unrecognized section "${heading}"`);
    if (seenSlugs.has(slug)) throw new Error(`${file}: duplicate section "${heading}"`);
    seenSlugs.add(slug);

    const cleaned = body.replace(/\n{1,2}---\s*$/, "").trim();
    if (/^\(no observations in this app\.?\)$/i.test(cleaned)) continue;

    const parts = cleaned.split(/^### O(\d+)\.\s+/m);
    const leadIn = norm(parts[0]);
    if (!leadIn) throw new Error(`${file}: section "${heading}" has no lead-in`);
    sectionLeadIns[slug] = leadIn;

    for (let i = 1; i < parts.length; i += 2) {
      const id = "O" + parts[i];
      if (obsById.has(id)) throw new Error(`${file}: duplicate observation id ${id}`);

      const rest = parts[i + 1];
      const titleMatch = rest.match(/^(.+?)\n\n([\s\S]*)$/);
      if (!titleMatch) throw new Error(`${file}: ${id} is malformed`);
      const [, title, rawBody] = titleMatch;
      const obsBody = rawBody.replace(/\n{1,2}---\s*$/, "").trim();

      const bulletIdx = obsBody.search(/\n\n- /);
      const observed = norm(bulletIdx === -1 ? obsBody : obsBody.slice(0, bulletIdx));
      const detail =
        bulletIdx === -1 ? [] : [...obsBody.slice(bulletIdx).matchAll(/^- (.+)$/gm)].map((m) => m[1].trim());
      if (!observed) throw new Error(`${file}: ${id} has no observed prose`);

      const obs = {
        id,
        name: title.trim(),
        section: slug,
        observed,
        detail,
        tags: [],
        crossRefs: [],
        screenshots: [],
      };
      observations.push(obs);
      obsById.set(id, obs);
    }
  }

  if (seenSlugs.size !== V41_SECTIONS.length)
    throw new Error(`${file}: expected all 9 sections, found ${seenSlugs.size}`);

  return { teaser: teaserMatch[1].trim(), description, systemView, sectionLeadIns, observations, obsById };
}

function isoDate(s) {
  // "03 Apr 2026" → "2026-04-03"
  // Compound strings — "12 May 2026 (Session 1), ..." or ranges like
  // "06 Apr 2026 – 15 May 2026" — yield the FIRST date (= the analysis start).
  if (!s) return null;
  // Accepts both the short form ("03 Apr 2026") and the full month name
  // ("16 April 2026") used by reviewed analyses.
  const first = s.match(/\d{1,2} [A-Z][a-z]{2,8} \d{4}/);
  if (!first) return null;
  const d = new Date(first[0] + " UTC");
  return isNaN(d) ? null : d.toISOString().slice(0, 10);
}

// ------------------------------------------------ analysis prompt (new mechanics)
const prompt = fs.readFileSync(path.join(repo, "sources/mechanics-playbook-analysis-prompt.md"), "utf8");
function promptDefinition(id) {
  const re = new RegExp("^`" + id + "`\\n([\\s\\S]*?)\\nNot this:", "m");
  const m = prompt.match(re);
  if (!m) throw new Error("definition for " + id + " not found in analysis prompt");
  return m[1].trim().replace(/\n/g, " ");
}

// --------------------------------------------------- rich write-up splitting
// Each RICH_DESCRIPTIONS value is one HTML blob with four bold headings:
// "How X uses Y" / "How they present it" / "Why it works" / "Key findings".
function stripTags(html) {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/\n{2,}/g, "\n")
    .trim();
}
function splitWriteup(html) {
  if (!html) return null;
  const parts = html.split(/<strong>([^<]+)<\/strong>/);
  // parts: [pre, heading1, body1, heading2, body2, ...]
  const sections = {};
  for (let i = 1; i < parts.length; i += 2) {
    const h = parts[i].toLowerCase();
    const body = parts[i + 1] ?? "";
    if (h.startsWith("how") && h.includes("uses")) sections.observed = stripTags(body);
    else if (h.startsWith("how they present")) sections.presented = stripTags(body);
    else if (h.startsWith("why it works")) sections.noting = stripTags(body);
    else if (h.startsWith("key findings")) {
      sections.findings = [...body.matchAll(/<li>([\s\S]*?)<\/li>/g)].map((m) => stripTags(m[1]));
    }
  }
  if (!Object.keys(sections).length) throw new Error("write-up did not split: " + html.slice(0, 80));
  return sections;
}

// ------------------------------------------------------------- mechanics
const NEW_MECHANICS = [
  { id: "hard-currency", n: "23", name: "Hard Currency", cat: "monetization" },
  { id: "soft-currency", n: "24", name: "Soft Currency", cat: "monetization" },
  { id: "passive-construction-meta", n: "25", name: "Passive Construction Meta", cat: "retention" },
];

fs.rmSync(path.join(out, "mechanics"), { recursive: true, force: true });
fs.mkdirSync(path.join(out, "mechanics"), { recursive: true });
let mechanicCount = 0;
for (const m of MECHANICS) {
  const { apps, ...rest } = m; // relationships now live on the app side only
  write("mechanics", m.id, {
    ...rest,
    visibility: effectiveVisibility(m.id === "streak" ? "public" : "subscriber"),
  });
  mechanicCount++;
}
for (const nm of NEW_MECHANICS) {
  const def = promptDefinition(nm.id);
  write("mechanics", nm.id, {
    id: nm.id,
    n: nm.n,
    name: nm.name,
    cat: nm.cat,
    tagline: def.split(/(?<=\.)\s/)[0],
    desc: def,
    visibility: effectiveVisibility("subscriber"),
    toWrite: true, // long-form fields pending (corrections §5)
  });
  mechanicCount++;
}

// ------------------------------------------------------------------ apps
// Corrections §3: relationships = analysis observed sections (with depth)
// + listed additions − the confirmed drop list.
const ADDITIONS = {
  // appId → [{ id, depth }]  (corrections §3b + Stage 2 review rulings)
  "royal-match": [
    { id: "gifting", depth: "supporting" },
    // Stage 1/2 review ruling: the analysis's unrecognized section describes
    // the castle decoration meta as "the primary aesthetic reward system" —
    // observed content beats the addendum's seed-list minimum.
    { id: "passive-construction-meta", depth: "core" },
  ],
  // Stage 2 review ruling: analysis recommends mapping the guest pass to
  // gifting; keep the v44 write-up. Shallow — two passes a year is
  // peripheral to Calm's model.
  "calm": [
    {
      id: "gifting",
      depth: "shallow",
      note: "Implementation targets non-users as a referral device (gift-framed guest pass), not in-app transfer between existing users.",
    },
  ],
  "canva": [{ id: "credits-tokens", depth: "supporting" }],
  "capybara-go": [
    { id: "first-purchase-bonus", depth: "supporting" },
    { id: "cosmetics", depth: "shallow" },
  ],
  "clash-of-clans": [{ id: "gifting", depth: "supporting" }],
  "fc-mobile": [{ id: "first-purchase-bonus", depth: "supporting" }],
  "picsart": [{ id: "credits-tokens", depth: "supporting" }],
  // corrections §3b: set-collection added at shallow (session didn't reach
  // multiplier level 7, so analysis has no observed section for it)
  "subway-surfers": [{ id: "set-collection", depth: "shallow" }],
};
// Per-app id remaps from an analysis's own naming onto this library's ids.
// Strava needed one while its clubs were classified as clans-guilds; the
// reviewed analysis classifies them as Group Membership, which the canonical
// name map resolves to community-groups directly, so no remap is needed.
const REMAPS = {};
// Strava's unrecognized "hard-currency" section is about the subscription
// model and explicitly says it does NOT map to hard currency — exclude it
// from the currency harvest. (Flagged in the content questions list.)
const HARVEST_EXCLUDE = new Set(["hard-currency|strava", "hard-currency|steam"]);
// Harvested currency relationships (corrections §4): unrecognized-section
// observations. Depth is not graded in those sections; "supporting" is a
// provisional value flagged for review in the Stage 1 notes.
const CURRENCY_DEPTH = "supporting";
const DROPS = new Set([
  "energy-lives|solitaire-grand-harvest",
  "streak|freeletics",
  "daily-login-reward|fiton",
  "daily-login-reward|clash-of-clans",
  "limited-time-events|strava",
  "challenges|clash-of-clans",
  "xp-leveling|gymverse",
  "credits-tokens|liftoff",
  "ads|chrome-valley-customs",
  "ads|match-creek-motors",
  "gifting|swgoh",
  "soft-currency|fortune-city",
]);

// Standing rule (final owner ruling, 11 Jun 2026): exactly two case studies
// are open at any time — strava (permanent, never flips) plus the newest
// addition to the library (rotating). The weekly import sets this id to the
// newly imported app; the previous holder flips back to subscriber simply by
// no longer being named here. Validation enforces the exactly-two invariant.
// Thin apps awaiting write-up backfill must not hold this slot.
const ROTATING_FREE_APP = "uptime"; // newest addition (analyzed 18 May 2026)

const ALL_APPS = [
  { file: "royal-match.md", id: "royal-match", visibility: "subscriber" },
  { file: "cleo.md", id: "cleo", visibility: "subscriber" },
  // Batch 1
  { file: "calm.md", id: "calm", visibility: "subscriber" },
  { file: "canva.md", id: "canva", visibility: "subscriber" },
  { file: "capybara-go.md", id: "capybara-go", visibility: "subscriber" },
  { file: "chrome-valley-customs.md", id: "chrome-valley-customs", visibility: "subscriber" },
  { file: "clash-of-clans.md", id: "clash-of-clans", visibility: "subscriber" },
  // Batch 2
  { file: "fc-mobile.md", id: "fc-mobile", visibility: "subscriber" },
  { file: "fifa-panini-collection.md", id: "fifa-panini-collection", visibility: "subscriber" },
  { file: "fiton.md", id: "fiton", visibility: "subscriber" },
  { file: "fortune-city.md", id: "fortune-city", visibility: "subscriber" },
  { file: "freeletics.md", id: "freeletics", visibility: "subscriber" },
  // Batch 3
  { file: "gymverse.md", id: "gymverse", visibility: "subscriber" },
  { file: "insight-timer.md", id: "insight-timer", visibility: "subscriber" },
  { file: "ladder.md", id: "ladder", visibility: "subscriber" },
  { file: "liftoff.md", id: "liftoff", visibility: "subscriber" },
  { file: "match-creek-motors.md", id: "match-creek-motors", visibility: "subscriber" },
  // Batch 4 (analysis file IDs differ for two: star-wars-swgoh.md → "swgoh",
  // steam.md says "steam-ios" → v44 id is "steam")
  { file: "picsart.md", id: "picsart", visibility: "subscriber" },
  { file: "solitaire-grand-harvest.md", id: "solitaire-grand-harvest", visibility: "subscriber" },
  { file: "star-wars-swgoh.md", id: "swgoh", visibility: "subscriber" },
  { file: "steam.md", id: "steam", visibility: "subscriber" },
  // Permanent free case study (final owner ruling, 11 Jun 2026) — never flips.
  { file: "strava.md", id: "strava", visibility: "public" },
  // Batch 5
  { file: "subway-surfers.md", id: "subway-surfers", visibility: "subscriber" },
  { file: "tiimo.md", id: "tiimo", visibility: "subscriber" },
  { file: "uptime.md", id: "uptime", visibility: "subscriber" },
  { file: "wispr-flow.md", id: "wispr-flow", visibility: "subscriber" },
  // Batch 6
  { file: "wakeout.md", id: "wakeout", visibility: "subscriber" },
  // Report-only remainder (never appear in deployed output)
  { file: "orbit.md", id: "orbit", visibility: "report-only" },
  { file: "dave.md", id: "dave", visibility: "subscriber" },
  { file: "acorns.md", id: "acorns", visibility: "subscriber" },
  { file: "starling-bank.md", id: "starling-bank", visibility: "report-only" },
  { file: "george-erste-bank.md", id: "george-app-erste-serbia", visibility: "report-only" },
];

fs.rmSync(path.join(out, "apps"), { recursive: true, force: true });
fs.mkdirSync(path.join(out, "apps"), { recursive: true });

// Repo-relative asset paths (icons, screenshots) referenced by visible apps;
// synced into site/public after the loop so the deployed site can serve them.
const publicAssets = new Set();

const knownMechanicIds = new Set([...MECHANICS.map((m) => m.id), ...NEW_MECHANICS.map((m) => m.id)]);

// system map: nodes from POSITIONS (skip "center"), connections from
// CONNECTIONS. Shared by both analysis formats — node positions and
// connection pairs come from system.html regardless of format (spec §1.5).
function buildSystemMap(appId) {
  const sys = SYSTEMS.find((s) => s.app_id === appId) ?? null;
  if (!sys) return null;
  const pos = POSITIONS[appId] ?? {};
  const nodes = Object.entries(pos)
    .filter(([k]) => k !== "center")
    .map(([id, p]) => ({ id, x: p.x, y: p.y }));
  return {
    tagline: sys.tagline,
    overview: sys.overview,
    loop: sys.loop_description,
    keyInsight: sys.key_insight,
    whatMakesItWork: sys.what_makes_it_work,
    roles: sys.mechanics.map((m) => ({ id: m.id, role: m.role })),
    center: pos.center ?? null,
    nodes,
    // The live v44 page skips connections whose endpoints have no position
    // (`if (!fp || !tp) return;` in system.html), so they never render.
    // Dropping them here matches what the live site actually shows.
    connections: (CONNECTIONS[appId] ?? [])
      .filter((c) => {
        const ok = pos[c.from] && pos[c.to];
        if (!ok) console.warn(`note: ${appId} connection ${c.from}->${c.to} has no position; skipped (matches live site)`);
        return ok;
      })
      .map((c) => ({ from: c.from, to: c.to, title: c.title, desc: c.desc, effect: c.effect })),
  };
}

function resolveIcons(appId) {
  return [`icons/${appId}.png`, `icons/${appId}.webp`, `icons/${appId}.jpg`].filter((p) =>
    fs.existsSync(path.join(repo, p))
  );
}

function resolveHeroImage(appId) {
  const candidates = [
    appId + "-case-study.png", appId + "-case-study.webp", appId + "-case-study.jpg",
    appId + "-pass-lives.webp", appId + "-pass-lives.png",
  ];
  const found = candidates.find((f) => fs.existsSync(path.join(here, "../public/images", f)));
  return found ? "/images/" + found : null;
}

// Catalog metadata (name/category/type/sectionCards) for v4.1 apps with no
// v44 entry. v44 is the hand-maintained catalog; the analysis file itself
// only records behavior, so a v4.1 app needs this registered somewhere until
// it has a home of its own.
//
// summary/teaser/sectionLeadIns used to live here too, but spec §1.7 moved
// them into the content file (they're written prose and belong with the
// rest of the written prose) — parseContentV41 supplies them now.
//
// sectionCards is per-section authored copy: a one-line blurb for that
// section's card on the summary page (spec §2.1), keyed by section slug (see
// v41-sections.mjs). Not part of spec §1.7's content-file list, so it stays
// here for now. Optional — complete for Dave.
const V41_APP_META = {
  dave: {
    name: "Dave",
    category: "Finance / Neo-bank + Cash Advance",
    type: "app",
    sectionCards: {
      onboarding:
        "Dave walks new users through signup, identity checks, and connecting a bank and debit card before showing an empty home screen.",
      "core-loop":
        "Dave runs everything through the checking account once it exists: adding money, moving money, direct deposit, round-ups, checks, cash, and bill pay.",
      goals: "Dave creates, personalizes, extends, and ends a user's savings goals.",
      access: "Dave pitches, explains, and gates the Extra Cash advance behind eligibility.",
      earning:
        "Dave pays users for surveys and a profiling questionnaire, and points them to outside jobs through a board of its own.",
      social:
        "Dave has no feature that lets a user see, interact with, compare against, or team up with another identified person.",
      growth: "Dave runs its referral program from settings and pays it out as a bigger future advance.",
      money:
        "Dave charges for membership, advance delivery, funding, cash and check handling, and pays interest on two of its accounts.",
      returns:
        "Dave brings users back through notifications, balance alerts, and a marketing consent gathered during signup.",
    },
  },
};

for (const entry of ALL_APPS) {
  if (detectAnalysisFormat(entry.file) === "v4.1") {
    // Spec §1.7: the content file is what publishes, and there's no fallback
    // to the analysis when it's missing — the app simply doesn't render.
    const content = parseContentV41(entry.file);
    if (!content) {
      console.warn(`note: ${entry.id} has no content file at sources/content/${entry.file}; app not rendered (spec §1.7)`);
      continue;
    }
    const meta = V41_APP_META[entry.id];
    if (!meta) throw new Error(`${entry.id}: no catalog metadata registered in V41_APP_META for this v4.1 app`);

    // The analysis supplies only the applied tags and the header dates
    // (spec §1.7); ids are the join back onto the content file's
    // observations. A tag naming an id the content file doesn't have is a
    // real mismatch between the two files, not something to skip silently.
    const a = parseAnalysisV41(entry.file);
    for (const id of a.tagsById.keys()) {
      if (!content.obsById.has(id))
        throw new Error(`${entry.file}: analysis applies a tag to observation ${id}, which is not in the content file`);
    }
    for (const obs of content.observations) obs.tags = a.tagsById.get(obs.id) ?? [];

    const icons = resolveIcons(entry.id);
    // Collect assets to sync into public/ — but never for report-only apps.
    if (entry.visibility !== "report-only") {
      for (const icon of icons) publicAssets.add(icon);
      // No screenshots yet under the new {appId}_{observationId} key scheme
      // (spec §6.2) — re-keying existing screenshots is separate work.
    }

    write("apps", entry.id, {
      id: entry.id,
      name: meta.name,
      category: meta.category,
      type: meta.type,
      // The rotating free slot overrides the declared visibility (standing
      // rule: two open case studies — strava plus the newest addition).
      visibility: effectiveVisibility(entry.id === ROTATING_FREE_APP ? "public" : entry.visibility),
      analysisDate: a.analysisDate,
      lastUpdated: a.lastUpdated,
      summary: content.description,
      teaser: content.teaser,
      icon: icons[0] ? "/" + icons[0] : null,
      heroImage: resolveHeroImage(entry.id),
      contentFormat: "v4.1",
      observations: content.observations,
      systemView: content.systemView,
      sectionLeadIns: content.sectionLeadIns,
      sectionCards: meta.sectionCards ?? {},
      system: buildSystemMap(entry.id),
    });
    continue;
  }

  const a = parseAnalysisV3(entry.file);
  const v44 = APPS.find((x) => x.id === entry.id) ?? null;

  // relationship set
  const rels = a.observed.map((r) => ({ ...r, id: REMAPS[entry.id]?.[r.id] ?? r.id }));
  for (const add of ADDITIONS[entry.id] ?? []) {
    if (!rels.some((r) => r.id === add.id)) rels.push(add);
  }
  for (const u of a.unrecognized) {
    if (HARVEST_EXCLUDE.has(u + "|" + entry.id)) continue;
    if ((u === "hard-currency" || u === "soft-currency") && !rels.some((r) => r.id === u)) {
      rels.push({ id: u, depth: CURRENCY_DEPTH, provisionalDepth: true });
    }
  }
  const relationships = rels
    .filter((r) => !DROPS.has(r.id + "|" + entry.id))
    .filter((r) => {
      if (!knownMechanicIds.has(r.id)) {
        if (entry.visibility === "report-only") {
          console.warn(`note: ${entry.id} references unknown mechanic ${r.id}; skipped (report-only)`);
          return false;
        }
        throw new Error("unknown mechanic " + r.id + " in " + entry.file);
      }
      return true;
    })
    .map((r) => {
      const writeup = splitWriteup(RICH_DESCRIPTIONS[r.id + "_" + entry.id] ?? null);
      const rawShots = (SCREENSHOTS[r.id + "_" + entry.id] ?? [])
        .map((p) => (typeof p === "string" ? { src: p, caption: null } : { src: p.src, caption: p.caption ?? null }));
      const registered = rawShots.filter((p) => fs.existsSync(path.join(repo, p.src)));
      return {
        id: r.id,
        depth: r.depth,
        ...(r.provisionalDepth ? { provisionalDepth: true } : {}),
        ...(r.note ? { note: r.note } : {}),
        writeup,
        screenshots: registered.map((p) => ({ src: "/" + p.src, caption: p.caption })),
        suggestedShots: (a.shots[r.id] ?? []).slice(0, 3),
      };
    });

  const icons = resolveIcons(entry.id);

  // Collect assets to sync into public/ — but never for report-only apps:
  // nothing of theirs may reach the deployed output, including images.
  if (entry.visibility !== "report-only") {
    for (const icon of icons) publicAssets.add(icon);
    for (const r of relationships) for (const s of r.screenshots) publicAssets.add(s.src.slice(1));
  }

  write("apps", entry.id, {
    id: entry.id,
    // Content truth is v44; the analysis header is the fallback for apps
    // that have no v44 entry (e.g. the report-only set).
    name: v44?.name ?? headerName(entry.file),
    category: v44?.cat ?? a.meta["Category"] ?? "",
    type: v44?.type ?? (a.meta["Type"] ?? "app").toLowerCase(),
    // The rotating free slot overrides the declared visibility (standing
    // rule: two open case studies — strava plus the newest addition).
    visibility: effectiveVisibility(entry.id === ROTATING_FREE_APP ? "public" : entry.visibility),
    analysisDate: isoDate(a.meta["Analysis date"]),
    lastUpdated: isoDate(a.meta["Last updated"]) ?? isoDate(a.meta["Analysis date"]),
    summary: v44?.summary ?? a.overview,
    teaser: v44?.teaser ?? null,
    icon: icons[0] ? "/" + icons[0] : null,
    heroImage: resolveHeroImage(entry.id),
    mechanics: relationships,
    system: buildSystemMap(entry.id),
  });
}

function headerName(file) {
  const md = fs.readFileSync(path.join(repo, "sources/analyses", file), "utf8");
  return md.match(/^# (.+)$/m)[1].trim();
}

// ------------------------------------------------ category hero logos
// Category landing pages (e.g. /finance) can show a row of logo cards driven
// by `heroApps` in their content JSON. Those logos load by id from /icons at
// runtime, but many heroApps are not library apps (no analysis, no ALL_APPS
// entry), so the loop above never collected their icons. Pick them up here so
// the supplied logo files actually reach the deployed output. Report-only ids
// are refused — nothing of theirs may ship, heroApps included.
const reportOnlyIds = new Set(
  ALL_APPS.filter((e) => e.visibility === "report-only").map((e) => e.id)
);
const categoriesDir = path.join(out, "categories");
if (fs.existsSync(categoriesDir)) {
  for (const f of fs.readdirSync(categoriesDir).filter((f) => f.endsWith(".json"))) {
    const cat = JSON.parse(fs.readFileSync(path.join(categoriesDir, f), "utf8"));
    for (const ha of cat.heroApps ?? []) {
      if (reportOnlyIds.has(ha.id)) {
        console.warn(`note: category ${cat.slug} heroApp ${ha.id} is report-only; icon not synced`);
        continue;
      }
      for (const cand of [`icons/${ha.id}.webp`, `icons/${ha.id}.png`]) {
        if (fs.existsSync(path.join(repo, cand))) publicAssets.add(cand);
      }
    }
  }
}

// ------------------------------------------------------------ asset sync
// public/icons and public/screenshots are fully managed by this script:
// wiped and re-populated from the references collected above, so report-only
// assets can never linger and removed references never leave stale files.
const pub = path.resolve(here, "../public");
for (const dir of ["icons", "screenshots"]) {
  fs.rmSync(path.join(pub, dir), { recursive: true, force: true });
}
let assetCount = 0;
for (const rel of publicAssets) {
  const src = path.join(repo, rel);
  const dest = path.join(pub, rel);
  if (!fs.existsSync(src)) {
    console.warn(`warning: referenced asset missing from repo: ${rel}`);
    continue;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  assetCount++;
}
console.log(`synced ${assetCount} assets into site/public`);

// -------------------------------------------------------------- settings
fs.mkdirSync(path.join(out, "settings"), { recursive: true });
fs.writeFileSync(
  path.join(out, "settings", "homepage.json"),
  JSON.stringify(
    {
      id: "homepage",
      // Homepage roles (final owner ruling, 11 Jun 2026): the spotlight is
      // strava — permanent, never flips. The system map showcase follows the
      // rotating free slot and flips with every weekly import. Both are
      // guarded by validate-content.mjs.
      spotlightApp: "strava",
      showcaseSystem: ROTATING_FREE_APP,
      featuredMechanics: ["energy-lives", "limited-time-events", "clans-guilds", "season-pass", "streak", "leaderboards"],
      // Counted from v44 data.js at conversion time until cheatsheets migrate
      // in Stage 2 — computed, never hardcoded.
      cheatsheetCount: CHEATSHEETS.length,
      // Curated homepage icon strip — the apps v44's index.html hardcoded
      // (logoApps, 12 entries). Edit here, never in page code; validation
      // refuses report-only or unknown ids.
      iconStripApps: [
        "royal-match", "clash-of-clans", "strava", "fc-mobile",
        "capybara-go", "canva", "subway-surfers", "insight-timer",
        "swgoh", "fiton", "tiimo", "ladder",
      ],
      // System pages open as free samples even when their app is
      // subscriber-gated: strava's permanently (owner ruling, 11 Jun 2026),
      // plus the rotating slot holder's while it holds the slot, so the
      // homepage showcase never links into the paywall.
      freeSystemApps: ["strava", ROTATING_FREE_APP],
    },
    null,
    2
  )
);

function write(coll, id, obj) {
  fs.writeFileSync(path.join(out, coll, id + ".json"), JSON.stringify(obj, null, 2));
}

// ------------------------------------------------------------- cheatsheets
// "launching-streak" is the one free cheatsheet (matches the free item list
// in stage-0-report.md: Streak mechanic, Royal Match case study, this cheatsheet).
const FREE_CHEATSHEETS = new Set(["launching-streak"]);
fs.mkdirSync(path.join(out, "cheatsheets"), { recursive: true });
for (const [i, cs] of CHEATSHEETS.entries()) {
  write("cheatsheets", cs.id, {
    id: cs.id,
    n: i + 1, // display order = v44 data.js array order ("Cheatsheet 01" …)
    title: cs.title,
    desc: cs.desc,
    mechanics: cs.mechanics ?? [],
    apps: cs.apps ?? [],
    steps: (cs.steps ?? []).map((s, i) => ({
      n: String(i + 1).padStart(2, "0"),
      heading: s.h,
      body: s.b,
      apps: s.apps ?? [],
    })),
    visibility: FREE_CHEATSHEETS.has(cs.id) ? "public" : "subscriber",
  });
}

// -------------------------------------------------------------- glossary
// Glossary is ungated (public) — it was not behind login in v44.
fs.mkdirSync(path.join(out, "glossary"), { recursive: true });
for (const g of GLOSSARY) {
  write("glossary", g.id, {
    id: g.id,
    term: g.term,
    def: g.def,
    related: g.related ?? [],
    visibility: "public",
  });
}

console.log(`converted: ${mechanicCount} mechanics, ${ALL_APPS.length} apps, ${CHEATSHEETS.length} cheatsheets, ${GLOSSARY.length} glossary terms`);
