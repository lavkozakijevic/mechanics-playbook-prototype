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
import { CANONICAL_MECHANIC_IDS, resolveMechanicId } from "../src/lib/canonical-mechanic-ids.mjs";

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

// write() below resolves each collection's directory through this map,
// falling back to out/<coll> when a collection has no override — the only
// thing that ever sets one is beginRegenerate() below.
const collDirs = {};

// The apps and mechanics collections are fully regenerated on every run:
// every file in the directory is expected to come from this script, so a
// removed source app or mechanic must not leave a stale JSON behind. That
// used to mean clearing the real directory up front and writing the new
// files into it as parsing went — which meant a parse failure partway
// through (a bad app, midway through the four v4.1 sections re-derivation,
// or any future one) left the directory sitting empty, one clear away from
// being committed in that state.
//
// Fixed by writing into a fresh sibling temp directory instead and only
// swapping it in for the real one once every entry has parsed —
// beginRegenerate() opens the temp directory, the existing generation loop
// runs unchanged in between (write() sends its output there automatically
// once collDirs has an entry for that collection), and commitRegenerate()
// performs the swap. Nothing in this script catches a parse error, so a
// throw partway through the loop unwinds straight out of the process
// without ever reaching commitRegenerate() — the real directory, and
// whatever was last committed to it, stays exactly as it was. A stale
// `.name.tmp` left over from a previous crash is removed before a fresh
// one is opened, so it can never be mistaken for a completed run.
function beginRegenerate(name) {
  const tmpDir = path.join(out, `.${name}.tmp`);
  fs.rmSync(tmpDir, { recursive: true, force: true });
  fs.mkdirSync(tmpDir, { recursive: true });
  collDirs[name] = tmpDir;
}
function commitRegenerate(name) {
  const finalDir = path.join(out, name);
  const tmpDir = collDirs[name];
  delete collDirs[name];
  fs.rmSync(finalDir, { recursive: true, force: true });
  fs.renameSync(tmpDir, finalDir);
}

// ---------------------------------------------------------------- data.js
const dataJsSrc = fs.readFileSync(path.join(repo, "data.js"), "utf8");
const ctx = {};
vm.createContext(ctx);
vm.runInContext(
  dataJsSrc + ";__o={MECHANICS,APPS,SYSTEMS,RICH_DESCRIPTIONS,SCREENSHOTS,CHEATSHEETS,GLOSSARY};",
  ctx
);
const { MECHANICS, APPS, SYSTEMS, RICH_DESCRIPTIONS, SCREENSHOTS, CHEATSHEETS, GLOSSARY } = ctx.__o;

// SYSTEMS is a plain array, not a keyed object, so Array.find (buildSystemMap
// below) silently returns the first matching app_id and a later duplicate
// entry just goes unused — quieter than system.html's "last copy wins" but
// the same underlying mistake, and just as easy to leave behind after an
// abandoned draft (spec review, 11 Sep 2026). app_id is a distinctive-enough
// field name that a plain scan across the whole file is safe: it's the
// SYSTEMS join key and appears nowhere else, including each entry's own
// nested `mechanics` list, which uses `id`, never `app_id`. Unlike the
// system.html checks below, this one throws rather than warns: SYSTEMS
// currently carries no duplicate, so there's nothing pre-existing to break —
// the stronger check is safe to apply here today.
{
  const counts = new Map();
  for (const m of dataJsSrc.matchAll(/\bapp_id:\s*"([^"]+)"/g)) counts.set(m[1], (counts.get(m[1]) ?? 0) + 1);
  const dupes = [...counts.entries()].filter(([, n]) => n > 1);
  if (dupes.length) {
    const list = dupes.map(([k, n]) => `"${k}" (${n} times)`).join(", ");
    throw new Error(`data.js: SYSTEMS has a duplicate app_id: ${list}. Array.find would silently use only the first; remove the others.`);
  }
}

// ---------------------------------------------------------- system.html
// CONNECTIONS and POSITIONS are object literals embedded in the page, each
// keyed by app id. A literal silently keeps only the LAST copy of a repeated
// key, same as a browser evaluating it — which is exactly what let a stale
// leftover "cleo" entry from an earlier draft silently win over the real one
// and drop its personal-data-reflection node undetected through a build and
// a push (spec review, 11 Sep 2026). Checked for below rather than relied on.
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

// Scans a "{ "key": ... }" object literal's source text (as extracted above)
// for its immediate (depth-1) quoted keys, string-aware so a brace or
// bracket inside a description's prose can't miscount nesting depth. Returns
// every key found, duplicates included, so the caller can decide what a
// repeat means.
function topLevelKeys(objectLiteralSrc) {
  const keys = [];
  let depth = 0;
  for (let i = 0; i < objectLiteralSrc.length; i++) {
    const c = objectLiteralSrc[i];
    if (c === '"' || c === "'" || c === "`") {
      const quote = c;
      let j = i + 1;
      while (j < objectLiteralSrc.length && objectLiteralSrc[j] !== quote) {
        if (objectLiteralSrc[j] === "\\") j++;
        j++;
      }
      if (depth === 1) {
        let k = j + 1;
        while (k < objectLiteralSrc.length && /\s/.test(objectLiteralSrc[k])) k++;
        if (objectLiteralSrc[k] === ":") keys.push(objectLiteralSrc.slice(i + 1, j));
      }
      i = j;
      continue;
    }
    if (c === "{" || c === "[") depth++;
    else if (c === "}" || c === "]") depth--;
  }
  return keys;
}

// Warns loudly, rather than failing outright, on a repeated app-id key in a
// system.html literal — the literal itself would silently keep only the
// last copy. This is a warning and not a build failure (spec review, 11 Sep
// 2026) because turning up this check surfaced six apps (ladder, fiton,
// freeletics, liftoff, gymverse, clash-of-clans) already carrying two
// different, non-identical connection sets each — not a leftover accident
// like Cleo's, but two genuinely different authored sets where the second
// silently wins and the first has been invisible on the live site all
// along. Resolving those means deciding how to merge two real, differing
// accounts of the same app, an editorial call outside this fix's scope, so
// failing the build here now would block on content this check doesn't
// itself know how to reconcile. Promote this to `throw` once the rest are
// resolved, so a *new* accidental duplicate can't slip in the same way
// again. clash-of-clans and gymverse are already down to one copy each,
// resolved during their own v4.1 onboarding — four remain: ladder, fiton,
// freeletics, liftoff.
function assertNoDuplicateKeys(name, src) {
  const counts = new Map();
  for (const k of topLevelKeys(src)) counts.set(k, (counts.get(k) ?? 0) + 1);
  const dupes = [...counts.entries()].filter(([, n]) => n > 1);
  if (dupes.length) {
    const list = dupes.map(([k, n]) => `"${k}" (${n} times)`).join(", ");
    console.error(`\n=== DUPLICATE APP-ID KEY: system.html ${name} ===\n${list}\nOnly the last copy is used; the rest are silently dropped. Remove or merge the extras.\n`);
  }
}
const connectionsSrc = extractObjectLiteral("CONNECTIONS");
const positionsSrc = extractObjectLiteral("POSITIONS");
assertNoDuplicateKeys("CONNECTIONS", connectionsSrc);
assertNoDuplicateKeys("POSITIONS", positionsSrc);

const mapCtx = {};
vm.createContext(mapCtx);
vm.runInContext("__c=" + connectionsSrc + ";__p=" + positionsSrc + ";", mapCtx);
const CONNECTIONS = mapCtx.__c;
const POSITIONS = mapCtx.__p;

// ------------------------------------------------------- analysis files
// Reviewed analyses head each mechanic with the canonical library name and no
// inline id ("### Streak · Core · confirmed"). These names are resolved onto
// this library's mechanic ids. Where this library does not separate two
// canonical names, both resolve onto the entry that covers them, and the
// relationship is de-duplicated. A name mapped to null is classified in the
// analysis but not published as a mechanic.
//
// CANONICAL_MECHANIC_IDS now lives in ../src/lib/canonical-mechanic-ids.mjs,
// shared with the Astro/TS template layer (v41.ts, lib/props.ts) so a v4.1
// app's applied tags resolve onto a site mechanic id the same way a v3
// reviewed heading does here — see that file for the mapping and the
// mismatched-chip bug (spec review, 11 Sep 2026) that made the sharing
// necessary. sources/taxonomy-map.md still records the full reasoning.

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
  // Zero is a legitimate result here — a report-only app can genuinely have
  // no observed mechanics (e.g. orbit.md: "No mechanics from the 24-mechanic
  // framework were observed in this session") — so this doesn't throw on an
  // empty result. detectAnalysisFormat below is where format misdetection is
  // actually caught, on the file's structural shape rather than its content.

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

// Both formats are matched positively — neither is a default. A file that
// matches neither, or somehow both, throws instead of silently falling
// through to v3, which is what let a heading-depth mistake in capybara-go.md
// route through the wrong parser undetected (11 Sep 2026 incident): the v3
// parser found no bold header fields, produced an empty analysisDate, and
// nothing caught it until validate-content.mjs did, three steps later.
const V41_SIGNATURE = /^# Pass one:/im;
// "## Mechanics observed" rather than a mechanic heading itself: a v3 file
// can legitimately observe zero mechanics (e.g. orbit.md, a report-only
// utility app — "No mechanics from the 24-mechanic framework were observed
// in this session"), so a signature keyed on mechanic count would misfire on
// exactly the files most likely to have none. This section heading is part
// of the v3 template regardless of what it contains, so it's there whether
// or not any mechanic was found.
const V3_SIGNATURE = /^## Mechanics observed\s*$/im;

function detectAnalysisFormat(file) {
  const md = fs.readFileSync(path.join(repo, "sources/analyses", file), "utf8");
  const isV41 = V41_SIGNATURE.test(md);
  const isV3 = V3_SIGNATURE.test(md);
  if (isV41 && isV3)
    throw new Error(
      `${file}: matches both the v4.1 signature ("# Pass one:") and the v3 signature ("## Mechanics observed") — ambiguous. Fix the file's headings before it can be parsed.`
    );
  if (isV41) return "v4.1";
  if (isV3) return "v3";
  throw new Error(
    `${file}: could not determine analysis format. Found neither a level-1 "# Pass one:" heading (v4.1) nor a level-2 "## Mechanics observed" heading (v3). Check heading depth and wording against the analysis prompt.`
  );
}

// Publishing bar (spec §1.3): tags publish only at directly observed or
// strongly supported. A plausible or unresolved tag stays in the analysis
// file and never enters the parsed data — not even as a filtered-out record
// — so anything that reaches an observation's `tags` array is already
// index-ready.
//
// The evidence key has exactly four tiers: directly observed, strongly
// supported, plausible, unresolved. "Confirmed" was a fifth value this map
// used to accept; it has been retired from the evidence key and the
// operating card amended to match (13 Sep 2026), so it is no longer a
// recognized tier at all — a tag confidence of "confirmed" now fails loudly
// (see confidenceTiers below) rather than quietly passing as it used to.
const TAG_CONFIDENCE_RANK = { unresolved: 0, plausible: 0, "strongly supported": 1, "directly observed": 2 };
// Confidence is usually a bare phrase ("strongly supported", Dave's format).
// A newer analysis format instead writes one paragraph discussing each
// observation the tag covers, with a "(tier: ...)" annotation per one, e.g.
// "...(tier: strongly supported)... (tier: directly observed, presence
// only)." (Cleo, spec review 11 Sep 2026) — every tier actually mentioned
// has to clear the bar for the tag as a whole to publish, so the weakest one
// governs rather than the first. Shared with the multi-block consolidation
// below (spec review, 11 Sep 2026), which also needs to compare two whole
// confidence strings against each other, not just check one against the bar.
//
// A tier this doesn't recognize throws immediately rather than silently
// ranking as if it were below the bar — an unrecognized value (a typo, a
// retired tier like "confirmed", a value from some other vocabulary
// entirely) is a defect in the source file, not evidence that happens to be
// weak, and treating the two the same was how a value could fail the
// publishing bar for the wrong reason with no signal that anything was
// actually wrong.
function confidenceTiers(confidence) {
  // A trailing "." or "," on an otherwise-valid simple value (acorns.md
  // carried "directly observed." throughout) broke the exact bare-value
  // match below and fell through to the no-tiers-found throw, even though
  // the value was perfectly readable. Stripped once here, at the one place
  // every confidence string passes through, rather than at each capture site.
  const cleaned = confidence.trim().replace(/[.,]\s*$/, "");
  const bare = cleaned.toLowerCase();
  if (bare in TAG_CONFIDENCE_RANK) return [bare];
  const tiers = [...cleaned.matchAll(/\(tier:\s*([^,)]+)/gi)].map((m) => m[1].trim().toLowerCase());
  // A bare value that isn't a recognized tier AND carries no "(tier: ...)"
  // annotation at all used to fall through to an empty array here, which
  // tagPublishes below read as "doesn't publish" — indistinguishable from a
  // tag that legitimately failed the bar. That's the silent-failure path a
  // retired or misspelled value took; it now throws instead.
  if (!tiers.length)
    throw new Error(
      `unrecognized confidence value "${confidence}" — must be one of: ${Object.keys(TAG_CONFIDENCE_RANK).join(", ")}, or a paragraph containing one or more "(tier: ...)" annotations using those values`
    );
  for (const t of tiers) {
    if (!(t in TAG_CONFIDENCE_RANK))
      throw new Error(
        `unrecognized confidence tier "${t}" (in "${confidence}") — must be one of: ${Object.keys(TAG_CONFIDENCE_RANK).join(", ")}`
      );
  }
  return tiers;
}
function tagPublishes(confidence) {
  const tiers = confidenceTiers(confidence);
  if (!tiers.length) return false;
  // "some", not "every": a single Confidence field can legitimately describe
  // more than one sub-aspect of an already-applied tag at different tiers —
  // ladder.md's Group Membership names the team relationship as directly
  // observed and the topic-group membership as plausible in the same field,
  // and the tag still publishes, since the team alone establishes it and the
  // topic-group clause is supplementary detail, not a competing overall
  // rating. Requiring every mentioned tier to clear the bar treated that
  // weaker clause as disqualifying the whole tag, which contradicts the
  // cross-block rule just above (a tag publishes if any one block clears the
  // bar; a weaker sibling block only affects which confidence is displayed,
  // never eligibility) — this is that same rule applied within one block's
  // own text instead of across several.
  return tiers.some((t) => TAG_CONFIDENCE_RANK[t] >= 1);
}
// The single worst (lowest-ranked) tier a confidence string actually
// mentions — used to find which of several blocks for the same tag is the
// weakest, so its confidence can govern the consolidated entry rather than
// an arbitrary one being picked.
function confidenceWorstRank(confidence) {
  const ranks = confidenceTiers(confidence).map((t) => TAG_CONFIDENCE_RANK[t]);
  return ranks.length ? Math.min(...ranks) : -1;
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
//
// No "m" flag: every prior caller's field values happened to be a single
// unwrapped line, so `$` matching end-of-line rather than end-of-string
// never showed up. A multi-line bullet list (mechanic-block "Key findings",
// spec §2.1) exposed it — `$` was matching after the first bullet's line
// instead of after the whole list. Dropping "m" makes `$` mean true
// end-of-string, which is what "end of the block" was always meant to be.
function field(block, label) {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("\\*\\*" + escaped + "[.:]\\*\\*\\s*([\\s\\S]*?)(?=\\n\\n\\*\\*[A-Z]|$)");
  const m = block.match(re);
  return m ? m[1].trim() : "";
}

function idsIn(text) {
  return [...text.matchAll(/O\d+/g)].map((m) => m[0]);
}

// Reads the analysis file for what spec §1.7 says it still supplies for
// publishing — the header dates, and the applied tags with their confidence
// — plus the proposed-tags list (spec §1.6), which is never published but is
// worth keeping parsed rather than re-deriving later. Everything else that
// used to come from Pass one and the Close section (observed prose, detail,
// system view narrative, cross-references) now comes from the content file
// instead, via parseContentV41 below.
function parseAnalysisV41(file) {
  const md = fs.readFileSync(path.join(repo, "sources/analyses", file), "utf8");

  // ---- header: title line + required labeled fields, before Pass one.
  // Scoped to the preamble only, since bold "**Label:**" lines recur all
  // through Pass Two and Three and would otherwise pollute this.
  const preamble = md.split(/^# Pass one:/m)[0];
  const header = {};
  for (const [, k, v] of preamble.matchAll(/^\*\*([^:*]+):\*\*\s*(.+)$/gm)) header[k.trim()] = v.trim();
  for (const required of ["Session date", "Additional sessions", "As observed", "App version", "Analysis date", "Last updated"]) {
    if (!header[required]) throw new Error(`${file}: v4.1 header is missing "${required}:"`);
  }
  const analysisDate = isoDate(header["Analysis date"]);
  const lastUpdated = isoDate(header["Last updated"]);
  if (!analysisDate) throw new Error(`${file}: "Analysis date" (${header["Analysis date"]}) is not a valid date`);
  if (!lastUpdated) throw new Error(`${file}: "Last updated" (${header["Last updated"]}) is not a valid date`);

  // "As observed" is a month/year, not a full date — "Oct 2024" for Dave,
  // not "DD Mon YYYY" — so it needs its own parse rather than isoDate()'s
  // day-anchored regex. Stored as "YYYY-MM"; the template formats it out to
  // a full month name ("October 2024"). "App version" is free text, and the
  // source's own "None" means no version was stated, not a real value.
  const asObserved = monthYear(header["As observed"]);
  if (!asObserved) throw new Error(`${file}: "As observed" (${header["As observed"]}) is not a valid month/year`);
  const appVersion = header["App version"] === "None" ? null : header["App version"];

  // ---- Pass two: applied tags, keyed by the observation ids they cover —
  // the join back onto the content file's observations happens at the call
  // site. The rejected-entries and unresolved/never-observed lists aren't
  // part of the published content model (spec §1) and are deliberately left
  // unparsed — they stay in the source file only.
  const passTwo = h1Section(md, "Pass two: tagging");
  if (passTwo === null) throw new Error(`${file}: "# Pass two: tagging" not found`);
  const appliedBlock = headingChunks(passTwo, 2).find((c) => c.heading === "Applied tags");

  // A tag name can carry more than one block (spec review, 11 Sep 2026 —
  // Capybara Go applies several library entries across more blocks than
  // entries, because the same mechanic gets a separate block per session or
  // context with its own confidence). The parser used to treat every block
  // as fully independent: each got its own tagEntry, pushed onto whichever
  // observations that one block listed, with no awareness that another
  // block shared its name. That meant a block below the publishing bar was
  // silently dropped — its observations never tagged at all — even while a
  // sibling block for the exact same tag published fine, with no warning
  // that partial evidence had gone missing. It also meant confidence, role,
  // rationale and alternative-considered text fragmented across blocks
  // instead of describing the tag as a whole.
  //
  // Fixed by parsing every block first, grouping by name, then consolidating
  // each name's blocks into one entry: observations are the union of every
  // block that clears the bar; confidence is the weakest of those blocks'
  // (carried alongside the full per-block list, not collapsed to a number
  // that hides how confident the weakest evidence actually was); role is
  // reconciled to one value when the passing blocks agree, and when they
  // don't, both are kept and the disagreement is warned about rather than
  // silently picking one. This only consolidates blocks that share a name —
  // two *different* library entries landing on the same site mechanic (Loot
  // Box and Variable Reward Outcome both resolving to variable-reward) is a
  // separate case, handled separately, on purpose: that's the merged
  // taxonomy surfacing, not blocks to fold together (see the report emitted
  // after this function's caller resolves tag names to site mechanics).
  const blocksByName = new Map();
  for (const chunk of (appliedBlock?.body ?? "").split(/^\*\*Tag:\*\*\s*/m).slice(1)) {
    const nl = chunk.indexOf("\n");
    const tagName = chunk.slice(0, nl).trim();
    const block = chunk.slice(nl + 1);

    const obsLine = block.match(/\*\*Observations:\*\*\s*(.+)/);
    // "**Supporting observations:**" was being parsed nowhere at all — every
    // block has one (verified across all nine v4.1 analysis files), and an
    // observation named only there, never in the primary Observations line,
    // still empirically carries the tag; it just wasn't the lead evidence
    // cited for applying it. Dropping it meant tagsById (below) only ever
    // connected a tag to its primary observations, so every other
    // observation that exhibits the same tag came out untagged — a live
    // bug, not a hypothetical one, since it's what the case-study and
    // future tag-index pages both read to know which observations carry
    // which tags. Fixed by folding both lines into one id list per block;
    // nothing downstream needs to know which line an id came from.
    const supportingLine = block.match(/\*\*Supporting observations:\*\*\s*(.+)/);
    const confidence = field(block, "Confidence");
    if (!obsLine || !confidence) throw new Error(`${file}: tag "${tagName}" is missing Observations or Confidence`);
    if (!supportingLine) throw new Error(`${file}: tag "${tagName}" is missing Supporting observations`);

    // Role is a short, single-line categorical value ("engagement,
    // retention"), never multi-paragraph prose like Rationale or
    // Alternative considered — but several blocks place an unlabeled
    // elaboration paragraph directly after the Role line and before
    // **Rationale:**, with a blank line on each side, e.g. capybara-go's
    // Loot Box block: "**Role:** monetization, engagement" then a blank
    // line then "O43 prices draws in gems sold for money..." then another
    // blank line then "**Rationale:**". field()'s generic "capture until the
    // next **Label**" regex, correct for Rationale and Alternative
    // considered, was pulling that whole paragraph into `role` too — silent
    // until something actually rendered role (this index's cards, and every
    // "ROLE DISAGREEMENT ACROSS BLOCKS" build warning, which has been
    // printing this same polluted text all along). Fixed by reading only
    // the Role line itself.
    const roleLine = block.match(/\*\*Role:\*\*\s*(.+)/);

    // Strip a single trailing "." or "," here, at the source, rather than
    // relying on the one downstream consumer (mechanics/index.astro's
    // roleTokens) that happens to filter(Boolean) after its own comma split.
    // A role line ending "engagement, monetization." or with a stray
    // trailing comma is common enough in the source prose (acorns.md carried
    // both) that a future consumer splitting this string without that same
    // guard would render a blank chip.
    const role = roleLine ? roleLine[1].trim().replace(/[.,]\s*$/, "") : "";

    if (!blocksByName.has(tagName)) blocksByName.set(tagName, []);
    blocksByName.get(tagName).push({
      confidence,
      rationale: field(block, "Rationale"),
      alternativeConsidered: field(block, "Alternative considered"),
      role,
      obsIds: [...new Set([...idsIn(obsLine[1]), ...idsIn(supportingLine[1])])],
    });
  }

  const tagsById = new Map();
  for (const [tagName, blocks] of blocksByName) {
    let passing, failing;
    try {
      passing = blocks.filter((b) => tagPublishes(b.confidence));
      failing = blocks.filter((b) => !tagPublishes(b.confidence));
    } catch (e) {
      throw new Error(`${file}: tag "${tagName}": ${e.message}`);
    }

    // Loud, not silent: a block dropped here still exists in the source
    // file, still describes real evidence, and the reader has no way to
    // know it's missing unless this says so.
    if (passing.length && failing.length) {
      for (const f of failing) {
        console.error(
          `\n=== BLOCK DROPPED AT CONFIDENCE GATE: ${file} "${tagName}" ===\n` +
            `This block's confidence ("${f.confidence}") doesn't clear the publishing bar, but another block for the same tag does, so "${tagName}" still publishes overall.\n` +
            `Observations NOT tagged as a result: ${f.obsIds.join(", ") || "(none listed)"}\n` +
            `If this evidence should count, raise its confidence or fold it into a passing block; if it shouldn't, this is expected and can be ignored.\n`
        );
      }
    }
    if (!passing.length) continue; // no block clears the bar — tag doesn't publish, same as before

    // Weakest governs: the consolidated confidence is whichever passing
    // block's worst mentioned tier is lowest, not the first block seen and
    // not an invented average. Every passing block's own string is kept too.
    const weakest = passing.reduce((a, b) => (confidenceWorstRank(b.confidence) < confidenceWorstRank(a.confidence) ? b : a));
    const confidence = weakest.confidence;
    const confidences = passing.map((b) => b.confidence);

    const roleValues = [...new Set(passing.map((b) => b.role.trim()).filter(Boolean))];
    let role;
    if (roleValues.length <= 1) {
      role = roleValues[0] ?? "";
    } else {
      console.error(
        `\n=== ROLE DISAGREEMENT ACROSS BLOCKS: ${file} "${tagName}" ===\n` +
          roleValues.map((r) => `- ${r}`).join("\n") +
          `\nMultiple blocks for the same tag state a different role. Both are kept rather than one being picked arbitrarily; resolve which is right in the source analysis.\n`
      );
      role = roleValues.join(" | ");
    }

    // Rationale and Alternative considered are each block's own paragraph of
    // write-up, not a short categorical value like role or confidence — kept
    // as every passing block's text rather than one being discarded.
    const rationale = passing.map((b) => b.rationale).filter(Boolean).join("\n\n");
    const alternativeConsidered = passing.map((b) => b.alternativeConsidered).filter(Boolean).join("\n\n");

    const tagEntry = { name: tagName, confidence, confidences, rationale, alternativeConsidered, role };
    for (const b of passing) {
      for (const id of b.obsIds) {
        if (!tagsById.has(id)) tagsById.set(id, []);
        tagsById.get(id).push(tagEntry);
      }
    }
  }

  // ---- Pass three: proposed tags — recorded per app, never rendered
  // (spec §1.6), but kept parsed rather than dropped: it's the library's
  // growth queue, and re-deriving it from forty analysis files later would
  // mean re-parsing all of them.
  const passThree = h1Section(md, "Pass three: proposed new tags") ?? "";
  const proposedTags = headingChunks(passThree, 3).map(({ heading, body }) => ({
    name: heading,
    sourceObservations: idsIn(field(body, "Source observations")),
    draftDefinition: field(body, "Draft definition"),
    conditions: field(body, "Conditions it appears to depend on"),
    whyNotCovered: field(body, "Why it is not covered"),
    recurrenceElsewhere: field(body, "Recurrence elsewhere"),
    caveat: field(body, "Caveat") || field(body, "Caveat on the third test"),
  }));

  // ---- Pass one: section headings, kept only to cross-check against the
  // content file's (see the call site). These headings are prose only —
  // spec §1.7 moved authoritative section content to the content file, so
  // nothing before this parsed them at all, which meant nothing ever
  // noticed an analysis file's own section names drifting out of step with
  // the (enforced) content file next to it. Both numbered ("## 5. Earning
  // and utility", capybara-go's own style) and unnumbered ("## Earning and
  // utility") heading forms appear across existing files, so a leading
  // ordinal is stripped before the name is used for comparison.
  const passOne = h1Section(md, "Pass one: observation record") ?? "";
  const sectionNames = headingChunks(passOne, 2).map((c) => c.heading.replace(/^\d+\.\s*/, ""));

  return { analysisDate, lastUpdated, asObserved, appVersion, tagsById, proposedTags, sectionNames };
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

  // ---- system view: narrative only, one string per paragraph (spec §2.1:
  // one short paragraph now, with the full account on the systems page) —
  // node positions and connections for the diagram still come from data.js
  // SYSTEMS + system.html (spec §1.5). A one-paragraph body already yields a
  // length-1 array here, so the shorter system view needs no parsing change.
  const systemView = h2s[0].body
    .replace(/^---\s*$/gm, "")
    .split(/\n{2,}/)
    .map(norm)
    .filter(Boolean);

  // ---- Mechanics (spec §2.1): one composed block per applied tag, in four
  // labelled parts plus a screenshots note, using the same "**Label:**"
  // convention the analysis file's Pass Two already uses — field() below is
  // the same helper that reads Rationale/Alternative considered there.
  // Optional: an app with no applied tags has nothing to compose here.
  let mechanicWriteups = [];
  let fixedSectionChunks = h2s.slice(1);
  if (h2s[1] && h2s[1].heading.toLowerCase() === "mechanics") {
    mechanicWriteups = headingChunks(h2s[1].body, 3).map(({ heading: name, body: block }) => {
      // Optional (stage2-website-content.md amendment, 16 Sep 2026): not
      // one of the four required composed parts below, and not present at
      // all until each app's write-up is backfilled with it — see the
      // schema comment on mechanicWriteup (content.config.ts).
      const summary = field(block, "Implementation summary") || undefined;
      const observed = field(block, "What was observed");
      const presented = field(block, "How it is presented");
      const noting = field(block, "What is worth noting");
      const findingsRaw = field(block, "Key findings");
      const findings = [...findingsRaw.matchAll(/^- (.+)$/gm)].map((m) => m[1].trim());
      const screenshotsNote = field(block, "Screenshots needed");
      if (!observed || !presented || !noting || !findings.length)
        throw new Error(`${file}: mechanic block "${name}" is missing one of its four composed parts`);
      return { name: name.trim(), summary, observed, presented, noting, findings, screenshotsNote };
    });
    fixedSectionChunks = h2s.slice(2);
  }

  // ---- the nine fixed sections: a lead-in paragraph, then "### O<n>. Label"
  // observation blocks. An empty section carries only the fixed placeholder
  // line and has neither a lead-in nor observations.
  const sectionLeadIns = {};
  const observations = [];
  const obsById = new Map();
  const seenSlugs = new Set();

  for (const { heading, body } of fixedSectionChunks) {
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

  return {
    teaser: teaserMatch[1].trim(),
    description,
    systemView,
    mechanicWriteups,
    sectionLeadIns,
    observations,
    obsById,
  };
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

// "Oct 2024" or "October 2024" → "2024-10". No day component, unlike
// isoDate() above, since "As observed" is a month/year field, not a date.
function monthYear(s) {
  if (!s) return null;
  const m = s.match(/([A-Z][a-z]{2,8})\s+(\d{4})/);
  if (!m) return null;
  const d = new Date(`1 ${m[1]} ${m[2]} UTC`);
  return isNaN(d) ? null : d.toISOString().slice(0, 7);
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

let mechanicCount = 0;
// All mechanic entries carry declared visibility "public" (owner ruling,
// preparing the library to go live as the site's search layer): the
// distinction that used to single out "streak" no longer applies once every
// entry is public on its own. This is the declared value, independent of
// REVIEW_WINDOW_OPEN — when the window closes and the site re-locks, these
// stay public rather than reverting. The two-public-case-studies rule in
// validate-content.mjs only ever counted the apps collection, never
// mechanics, so it's unaffected.
//
// Six of these entries fuse two or three entries from the 36-entry
// mechanics library under the site's older, coarser taxonomy
// (sources/taxonomy-map.md has the full mapping and the reasoning per
// merge). Publishing one of their pages would assert a taxonomy the library
// has already moved past — which has nothing to do with subscriptions, so
// visibility is not how they're held back (owner ruling, 11 Sep 2026: a
// "subscriber" declaration would make them locked rather than absent once
// the review window closes, letting a subscriber read a page that isn't
// supposed to exist yet). Instead their pages are excluded outright,
// unconditionally, in mechanics/[id].astro's getStaticPaths, keyed off
// HELD_BACK_MECHANIC_IDS (site/src/lib/content.ts) rather than visibility —
// see that file for the exclusion and for how every other page renders a
// reference to one of these six unlinked instead of routing to /subscribe/.
beginRegenerate("mechanics");
for (const m of MECHANICS) {
  // relationships live app-side only; libraryEntries is deferred-split
  // groundwork (sources/taxonomy-map.md) and never reaches the built site.
  const { apps, libraryEntries, ...rest } = m;
  write("mechanics", m.id, {
    ...rest,
    visibility: effectiveVisibility("public"),
  });
  mechanicCount++;
}
commitRegenerate("mechanics");

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
    { id: "passive-construction", depth: "core" },
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
//
// xp-leveling split into experience-points and leveling on 13 Sep 2026
// (sources/taxonomy-map.md). These v3 files still carry the old inline id
// in a "### ... (`xp-leveling`) · Depth" heading and were not rewritten —
// remapped here instead, onto whichever of the two split concepts that
// app's own write-up is actually about, decided from each file's own
// observed text: freeletics and liftoff each describe a level or rank
// state as the thing observed (leveling). Without this, any of these
// would throw "unknown mechanic xp-leveling" the moment xp-leveling
// stopped being a registered id. capybara-go is not remapped here: its
// analysis was migrated to v4.1 and never reaches this v3 path at all.
// clash-of-clans, tiimo, gymverse and fc-mobile each carried an entry
// here before their own migration to v4.1 — this section wasn't updated
// when clash-of-clans and tiimo migrated, so their entries sat dead for a
// while before this cleanup caught them the same way it caught gymverse's
// and fc-mobile's. wakeout's analysis already uses the reviewed canonical
// name "Experience Points" rather than the inline id, which resolves
// through CANONICAL_MECHANIC_IDS directly.
//
// steam is no longer remapped here either, and its own removal (18 Sep
// 2026) corrects the reasoning above along with retiring the entry:
// steam's v3 write-up was originally assigned experience-points on the
// assumption that it showed "a running accumulation toward a threshold
// with no named level state." Steam's fresh v4.1 analysis contradicts
// that assumption directly — O16 shows a named, displayed profile level
// (Leveling, strongly supported) alongside a separate underlying XP value
// (Experience Points, plausible only) — so the original binary choice was
// too narrow even on the merits, not just moot. It's moot as well, now:
// steam.md is v4.1 format, so detectAnalysisFormat() never routes it
// through this REMAPS path regardless of this entry's value.
// solitaire-grand-harvest is still on the list below and still v3 — its
// own write-up describes named levels too (a farm level and a solitaire
// level counter with named unlock thresholds), the same assumption error
// found in steam's entry, but flagged rather than changed here: unlike
// steam, solitaire-grand-harvest hasn't been migrated to v4.1, so
// correcting its mapping would change what's currently live for that app,
// outside this cleanup's scope.
// achievements split into achievement and milestone on 13 Sep 2026
// (sources/taxonomy-map.md), the same day and for the same reason as the
// xp-leveling split above: Clash of Clans and Tiimo each applied Achievement
// and Milestone as separate, independently evidenced v4.1 tags, clearing the
// split condition. 19 v3 files still carry the old inline id in a
// "### Achievements (`achievements`) · Depth" heading and were not
// rewritten — remapped here instead, decided from each file's own observed
// text using the same test the library entries draw: Achievement is a
// discrete criterion preserved once satisfied, apart from whatever activity
// produced it (a badge, a medal, a claimable reward); Milestone is a
// recognized point within an ongoing measure (a threshold ladder, a level
// crossing, a named stage). Several of these files describe both shapes at
// once (uptime, fifa-panini-collection); the remap follows whichever framing
// the file's own words lead with, since one file can only remap to one id.
// Neither clash-of-clans, canva, tiimo, capybara-go, dave, cleo,
// royal-match, gymverse, fc-mobile, acorns, nor ladder appears below: all
// eleven are v4.1 and never reach this path (royal-match, gymverse,
// fc-mobile, acorns and ladder each carried an entry here before their own
// migration to v4.1, removed once each analysis stopped using the v3
// inline-id form).
//   -> achievement: calm, liftoff, swgoh,
//      freeletics, uptime, fiton, fortune-city, match-creek-motors,
//      fifa-panini-collection, subway-surfers.
//   -> milestone: insight-timer, chrome-valley-customs,
//      wispr-flow, solitaire-grand-harvest.
//
// variable-reward split into loot-box and variable-reward (kept, renamed
// from Variable Reward Schedule) on 14 Sep 2026 (sources/taxonomy-map.md):
// Capybara Go and FC Mobile each applied Loot Box and Variable Reward
// Outcome as separate, independently evidenced v4.1 tags, clearing the
// split condition. Unlike the xp-leveling and achievements splits above,
// this one keeps its old fused id (variable-reward) on one of the two
// successors rather than retiring it, so a v3 file's inline
// "### Variable Reward (`variable-reward`) · Depth" heading still resolves
// correctly with NO remap needed whenever that file's own evidence belongs
// to the kept id: acorns (variable-amount survey payouts, no acquisition
// step), chrome-valley-customs (variable per-level currency yields),
// match-creek-motors (the buyer negotiation's concealed sequential offers),
// solitaire-grand-harvest (a free Lucky Wheel spin and a free Crop Master
// pick dominate the section, even though its $2.99 second spin is
// loot-box-shaped on its own — REMAPS holds one id per app, so the file's
// dominant, free-to-resolve framing wins) and fifa-panini-collection
// (see below) all fall through unmapped, by design. Only files whose
// evidence belongs to the other successor, loot-box, need an actual entry
// below: liftoff (paying eggs to refresh Store deals with unknown
// contents), swgoh (Bronzium/Chromium pulls paid in ally points or
// crystals) and subway-surfers (the coin-priced Mystery Box and the
// ad-or-key-gated token box) each describe a value commitment before an
// unresolved container resolves. The third fused entry, Variable Reward
// Schedule, has no remap target anywhere below — no app under the current
// model, v3 or v4.1, has ever applied it, so it was retired rather than
// carried forward (see "Library entries with no site mechanic" in
// taxonomy-map.md). fifa-panini-collection's own write-up under the
// Variable Reward heading reads "Write-up pending" — no observed text to
// classify from — so it falls through unmapped to the kept id
// (variable-reward) by the same no-remap-needed mechanism as the others
// above, but flagged here explicitly as an unevidenced default rather than
// a real classification decision, pending its own write-up. Neither
// fortune-city nor clash-of-clans appears below: fortune-city's own
// analysis never mentions this concept at all, and clash-of-clans's analysis
// explicitly considers and rejects all three fused library entries in its
// "Entries considered and not applied" section — both were stale carryovers
// on the old fused mechanic's apps[] list rather than real evidence, and
// neither reaches this v3 path in any case (both are v4.1). royal-match,
// capybara-go, fc-mobile and steam don't appear below either: all four are
// v4.1 and never reach this path.
const REMAPS = {
  "freeletics": { "xp-leveling": "leveling", "achievements": "achievement" },
  "liftoff": { "xp-leveling": "leveling", "achievements": "achievement", "variable-reward": "loot-box" },
  "solitaire-grand-harvest": { "xp-leveling": "experience-points", "achievements": "milestone" },
  "calm": { "achievements": "achievement" },
  "swgoh": { "achievements": "achievement", "variable-reward": "loot-box" },
  "uptime": { "achievements": "achievement" },
  "fiton": { "achievements": "achievement" },
  "fortune-city": { "achievements": "achievement" },
  "match-creek-motors": { "achievements": "achievement" },
  "fifa-panini-collection": { "achievements": "achievement" },
  "subway-surfers": { "achievements": "achievement", "variable-reward": "loot-box" },
  "insight-timer": { "achievements": "milestone" },
  "chrome-valley-customs": { "achievements": "milestone" },
  "wispr-flow": { "achievements": "milestone" },
};
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
  "limited-time-events|strava",
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
  // Not part of any prior batch — DoorDash has no v3 history at all, in
  // this file or anywhere else in the site (data.js, system.html): it was
  // analyzed directly under the v4.1 model and is a first-time addition to
  // this roster, not a migration of an existing entry.
  { file: "doordash.md", id: "doordash", visibility: "subscriber" },
  // Report-only remainder (never appear in deployed output)
  { file: "orbit.md", id: "orbit", visibility: "report-only" },
  { file: "dave.md", id: "dave", visibility: "subscriber" },
  { file: "acorns.md", id: "acorns", visibility: "subscriber" },
  { file: "starling-bank.md", id: "starling-bank", visibility: "report-only" },
  { file: "george-erste-bank.md", id: "george-app-erste-serbia", visibility: "report-only" },
];

// Repo-relative asset paths (icons, screenshots) referenced by visible apps;
// synced into site/public after the loop so the deployed site can serve them.
const publicAssets = new Set();

const knownMechanicIds = new Set(MECHANICS.map((m) => m.id));

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
        "Dave walks new users through signup, identity checks, bank connection, and opening the checking account itself, guiding every step until the account exists and the first funding prompt appears.",
      "core-loop":
        "Dave's checking account runs on a hub of repeating utilities, direct deposit, round-ups, transfers, checks, cash, and bills, plus the interest it pays, the Extra Cash advance mechanic, and the paid surveys inside its Grow tab.",
      goals: "Dave creates, personalizes, extends, and ends a user's savings goals.",
      access:
        "Dave gates the Extra Cash advance behind an eligibility decision tied to the connected bank account, and publishes its own rules as an FAQ rather than showing them directly.",
      economy:
        "Dave holds no currency, material, or resource inventory of its own; every balance is real dollars, covered under Core loop and automation instead.",
      social:
        "Dave has no feature that lets a user see, interact with, compare against, or team up with another identified person.",
      reach:
        "Dave's side hustle board sends job applications out to employers' own sites, and its referral program pays out as a bigger future advance rather than cash.",
      monetization: "Dave charges for membership, advance delivery, funding, and cash and check handling.",
      returns:
        "Dave brings users back through notifications, balance alerts, and a marketing consent gathered during signup.",
    },
  },
  cleo: {
    name: "Cleo",
    category: "Finance / Personal finance",
    type: "app",
    sectionCards: {
      onboarding:
        "Cleo walks new users through sign up, a state-law restriction, and connecting a bank account before the chat opens with a habits quiz and a roast.",
      "core-loop":
        "Cleo runs its budget, bills, categorization, and chat-persona features through a set of swipeable cards on its chat home, alongside the save tab's autosave and wallet setup and the borrow tab's own credit product.",
      goals: "Cleo sets a monthly spending limit with category limits, and previews a 21-day challenge against one spending habit.",
      access: "Cleo restricts its cash advance and paid plans by the user's state, and gates its wallet behind an identity and age check.",
      economy:
        "Cleo holds no currency or resource inventory of its own; the autosave and wallet features that could look like one are covered under Core loop and automation instead.",
      social:
        "Cleo has no feature that lets a user see, interact with, compare against, or team up with another identified person.",
      reach:
        "Cleo has no feature that connects a user to something outside the app; its one app store review request is covered under Return triggers instead.",
      monetization: "Cleo pitches Cleo Plus and Cleo Builder with a plan comparison and FAQ, neither purchasable under this account's state restriction.",
      returns:
        "Cleo asks to send notifications, tells users to check in daily, schedules spending reviews days apart, and asks for an app store review at the end of its roast and hype sequences.",
    },
  },
  "capybara-go": {
    name: "Capybara Go!",
    category: "Roguelite",
    type: "game",
    sectionCards: {
      onboarding:
        "Capybara Go! opens with permission prompts and a long asset download, then drops the player into an unexplained run for almost 20 minutes before anything else is visible.",
      "core-loop":
        "Capybara Go! advances a run day by day through automatic battles, in-run choices, and level-up skill picks, then carries gold and materials into permanent upgrades between runs, all gated by an energy and ticket balance and layered with daily and weekly tasks.",
      goals: "Capybara Go! turns gold and materials into talent levels, a rank title, equipment, and pets, each with its own upgrade path.",
      access: "Capybara Go! gates nearly everything behind a long sequence of chapter clears and survival-day thresholds.",
      economy:
        "Capybara Go! runs a large number of named currencies and materials alongside the chests and shops built around collecting and spending them.",
      social: "Capybara Go! offers one ranking list available from the very start, with Friends, Guilds, and Arena still locked behind later chapters.",
      reach: "Capybara Go! offers one feature connecting a user outside the app, linking the game account to an external Habby ID.",
      monetization: "Capybara Go! charges through packs, cards, and triggered offers across a four-tab store, alongside ads and a permanent ad-removal purchase.",
      returns:
        "Capybara Go! runs a seven-day sign-in event, two further timed events, and countdowns on nearly every timed surface in the game.",
    },
  },
  "clash-of-clans": {
    name: "Clash of Clans",
    category: "Strategy",
    type: "game",
    sectionCards: {
      onboarding:
        "Clash of Clans scripts a cannon build, a defense, and an attack before naming the player, then reveals its interface in stages as the town hall levels up.",
      "core-loop":
        "Clash of Clans repeats collecting resources, starting upgrades, training troops, and raiding another village for loot to fund the next upgrade.",
      goals: "Clash of Clans measures progress mainly by town hall level, gated behind a resource cost and a prerequisite building checklist, alongside a smaller account level and a starter challenge ladder.",
      access: "Clash of Clans gates nearly everything by town hall level, with a rebuilt clan castle, a repaired boat, and a signup window gating the clan, the second village, and clan war leagues.",
      economy: "Clash of Clans runs five earned currencies across two villages plus a paid currency that converts directly into two of them.",
      social: "Clash of Clans keeps its entire social layer, donation, chat, wars, and leaderboards, behind a clan castle that has to be rebuilt first.",
      reach: "Clash of Clans rewards linking an external account roughly ten times more than an ordinary achievement, and hosts its own rewards site behind that link.",
      monetization: "Clash of Clans sells a rotating shop of offers and town-hall-scaled packs alongside a season pass priced against the village, the second village, and the clan at once.",
      returns:
        "Clash of Clans runs a shield countdown, a return-from-absence summary, and an event calendar layered on top of its own season boundary.",
    },
  },
  canva: {
    name: "Canva",
    category: "Design",
    type: "app",
    sectionCards: {
      onboarding:
        "Canva asks for tracking consent, creates an account, asks what the product is for, and gets AI training consent before dropping the user straight into a full template catalogue with no tutorial.",
      "core-loop":
        "Canva's production loop runs an unrestricted catalogue, editor, and three separate generative tools alongside its document management, all with no capacity limit, cooldown, or schedule anywhere in it.",
      goals: "Canva runs Design School as a separate certification path, tracking course and certificate completions through counters and a tiered badge grid.",
      access:
        "Canva marks premium content with a crown everywhere it appears, locks its brand kit entirely, caps free exports and domains, and defaults to retaining a user's content for its own AI training.",
      economy: "Canva sells a single purchasable credit balance priced against individual premium elements.",
      social: "Canva's sharing, comments, and teams are all scoped to one design or one workspace, with no broader social space.",
      reach: "Canva exports designs directly into other companies' products, publishes live websites, and connects to an apps directory and payment integrations.",
      monetization: "Canva prices three separate routes, a trial, a one-off licence, and a credit balance, that all converge at the moment a design is exported.",
      returns:
        "Canva previews its own notifications during onboarding, defaults every marketing channel to on, and interrupts active use with a rating prompt.",
    },
  },
  tiimo: {
    name: "Tiimo",
    category: "Productivity / Planning",
    type: "app",
    sectionCards: {
      onboarding:
        "Tiimo asks for an account, a marketing preference, two profiling questions, and permission for four systems before showing any feature, then hands out a streak and a marker before a single task has been completed.",
      "core-loop":
        "Tiimo's day runs on a timeline of tasks created directly or through an AI assistant that turns spoken or typed intent into scheduled tasks, alongside separate to-do lists and a focus timer.",
      goals: "Tiimo tracks a streak of days and a tally of completed tasks, and unlocks a row of named markers built from both.",
      access:
        "Tiimo's free tier covers planning and to-do basics, with the AI co-planner, focus timer, themes and several notification options locked behind its paid tier.",
      economy: "Tiimo holds no currency, balance or tradable unit of any kind.",
      social: "Tiimo has no social layer at all.",
      reach: "Tiimo shares through a stats tab control, a screenshot-triggered social prompt, a knowledge library with expert courses, and a second surface on desktop and web.",
      monetization: "Tiimo sells through one paywall, a persistent upgrade control, an upsell card on the stats tab, and paid notification timing.",
      returns:
        "Tiimo asks for a rating twice before a single task is completed, and runs a fixed daily and weekly notification schedule alongside a streak and level banner toggle.",
    },
  },
  "royal-match": {
    name: "Royal Match",
    category: "Casual / Match-three",
    type: "game",
    sectionCards: {
      onboarding:
        "Royal Match asks for tracking permission before anything else, then teaches its match-three action directly on the board and hands the user a castle to build before a second level is even cleared.",
      "core-loop":
        "Royal Match repeats one bounded level with a target and a move limit, layering assist items, King's Nightmare interludes, and bonus levels on top of the same match-three board.",
      goals:
        "Royal Match advances a player level with every cleared level, tracks 152 areas and a set of running profile stats, and stages five separate timed events one after another starting at level 27.",
      access:
        "Royal Match withholds teams, the collection, and each assist item behind stated player-level requirements, disclosed unevenly from a full explanation down to a single bare number.",
      economy:
        "Royal Match runs two earned balances, stars for the castle and coins for undoing failure, alongside several separate event units that only ever move toward their own next threshold.",
      social:
        "Royal Match ranks players and teams on two leaderboards, and inside a joined team, teammates trade lives and card requests under a tournament that pays only the ones who contribute.",
      reach:
        "Royal Match saves progress only through a Facebook, Google or Apple sign-in, and gates its one social surface, the friends list, behind that same Facebook connection.",
      monetization:
        "Royal Match prices its offers directly against the two moments a level fails, layering a shop, named treasure bundles, and a seasonal pass on top of the same 900-coin shortfall.",
      returns:
        "Royal Match times a notification prompt to the user's return, a rating prompt to an early clean run, and a countdown to every one of its five running events.",
    },
  },
  acorns: {
    name: "Acorns",
    category: "Finance / Automated Investing",
    type: "app",
    sectionCards: {
      onboarding:
        "Acorns runs twenty-six consecutive screens with no way back: choosing a plan, connecting a bank account, verifying identity, and setting up the first roundups and contributions before the dashboard is reached.",
      "core-loop":
        "Acorns' core activity is investing money automatically once a bank account is connected: roundups, recurring contributions, and Money Manager all move money into the right account without further input, with portfolio configuration, tax filing, and a standing library of guidance sitting beside them.",
      goals:
        "Acorns' progress surfaces are a projected future balance, a retirement contribution measured against an outside limit, and a short course ending in a scored quiz.",
      access:
        "Acorns restricts the product to US residents, holds accounts in a pending state until identity is verified, and bounds retirement contributions and custom portfolio choices by rules set outside the product.",
      economy:
        "Acorns holds no currency, points, or resource of its own; every quantity it tracks is the user's own money, covered under Core loop and automation instead.",
      social:
        "Acorns lets a user name a beneficiary and a trusted contact on the retirement account, and opens Early Invest accounts for children under the same subscription.",
      reach:
        "Acorns holds its referral offer permanently in the home screen's top bar, pays a percentage of purchases at outside brands as an investment, and adds a sign-in option after the account already exists.",
      monetization:
        "Acorns prices three subscription tiers upfront, backs cancellation with a cheaper fallback plan rather than an exit, and pays two of its four rewards as a plan-tier benefit rather than as a standing rate.",
      returns:
        "Nothing in Acorns is built to cause a visit. Every dated statement it makes is set by a settlement window, a verification queue, an offer's own end date, or the IRS.",
    },
  },
  wakeout: {
    name: "Wakeout",
    category: "Fitness / Movement Reminders",
    type: "app",
    sectionCards: {
      onboarding:
        "Wakeout opens with a sedentary-crisis narrative, secures an Apple Health connection, previews watts and goals before any setup, and creates an account through Apple sign-in alone.",
      "core-loop":
        "Wakeout's core loop is built on passive tracking: movement recorded by Apple Health fills the day's watts automatically, topped up by short guided Wakeouts, a searchable pack library, and a work timer that ends focus sprints in a movement break.",
      goals:
        "Wakeout's progress surfaces are a daily watts bar with a stretch zone beyond the goal, five difficulty levels that set both figures, and a streak and personal-best record kept alongside them.",
      access:
        "Wakeout has no free tier of any kind, and one measurement, standing minutes, is only available with an Apple Watch.",
      economy:
        "Wakeout measures all activity in Wakeout Watts, earned from any tracked movement, with an hourly cap and an unobserved bonus hour layered on top.",
      social:
        "Empty. No observation involves another identified person inside Wakeout.",
      reach:
        "Wakeout's reach outside the app runs through system share controls and Active Pass, which extends the loop to whatever apps the user chooses to restrict on the same phone.",
      monetization:
        "Wakeout's paywall opens immediately after onboarding with four plans, extensive persuasion sections, and a discounted gift-subscription offer repeated across the app.",
      returns:
        "Wakeout brings users back through configurable reminders, a day-off pause that protects the streak, home and lock screen widgets, and a rating entry Wakeout never triggered.",
    },
  },
  steam: {
    name: "Steam (iOS)",
    category: "Gaming / Digital Storefront and Community",
    type: "app",
    sectionCards: {
      onboarding:
        "Steam requires an existing account rather than a fresh signup, and moves through camera and notification permissions, a Steam Guard email code, and an authenticator setup with a hand-copied recovery code before the unguided Store becomes the first free choice.",
      "core-loop":
        "Steam's loop runs through the Store home, a Discovery Queue that records follow, wishlist and ignore decisions, a Wishlist sorted by price and discount, a per-source muteable News feed, and a Library sorted by recent activity.",
      goals:
        "Steam displays a profile level built from badge collection, a Badges page with a seasonal badge upgraded by spending points, and showcase upgrades that add display capacity rather than only changing appearance.",
      access:
        "Steam conditions a slice of its Points Shop catalogue on owning the related game, and its security confirmations page was found empty.",
      economy:
        "Steam Points accrue automatically at 117 per euro spent on any Steam purchase and fund a wide points-priced catalogue, ownership rules, and bundle discounts.",
      social:
        "Community Awards spend points on other users' content, profile viewing shows level and badges to visitors, and friends, groups and community hub areas round out the rest.",
      reach:
        "Steam hands chat off entirely to a separate app, references the Steam Deck and PC throughout, and carries share and invite links out to other surfaces.",
      monetization:
        "Steam Wallet funding happens outside the App Store, and price and discount framing runs through every Store surface.",
      returns:
        "Steam brings users back through sale-related notifications, an event reminder bell, and seasonal badge renewal tied to Summer and Winter Sales.",
    },
  },
  strava: {
    name: "Strava",
    category: "Fitness / Activity Tracking and Social",
    type: "app",
    sectionCards: {
      onboarding:
        "Strava walks new users through an auto-scrolling carousel, account creation, a run of profiling questions tied to leaderboards and safety, and a subscription pitch, before pushing straight into a first recording.",
      "core-loop":
        "Strava's loop is recording an activity and saving it, with a grouped sport selector, a live recording screen, and a save flow that composes the activity for other people to see.",
      goals:
        "Strava runs a user-set weekly goal, a profile-completion meter, a fixed thousand-position trophy ladder, graded achievements, browsable segments, and a large challenge catalogue in parallel.",
      access:
        "Strava spreads its paywall across the map, the activity, the profile, and the groups area, each met at the point of use rather than declared in advance.",
      economy:
        "Strava holds no currency, points balance, or spendable resource of any kind; every incentive is a recorded state, another person's attention, or the subscription.",
      social:
        "Strava opens on a populated feed and suggested people before the user follows anyone, and adds clubs, messaging, and segment standing on top.",
      reach:
        "Strava's reach outside the app runs mainly through a Runna partnership, brand-run challenges, sharing to outside platforms, and device connections.",
      monetization:
        "Strava's paywall is met at nine points with copy matched to each one, behind trial and pricing terms that are stated differently across screens.",
      returns:
        "Strava brings users back through a long notification catalogue, a streak at the top of the dashboard, and deadlines tied to challenges and events.",
    },
  },
  doordash: {
    name: "DoorDash",
    category: "Commerce / Food and Grocery Delivery",
    type: "app",
    sectionCards: {
      onboarding:
        "DoorDash lets a new user browse as a guest from the first screen, asking for permissions and an address before any sign-in is required.",
      "core-loop":
        "DoorDash's home screen, search, verticals and store pages all feed one destination, a per-merchant cart, through a long sequence of browsing surfaces.",
      goals:
        "A single two-tier reviewer badge is the only progression structure found in the app.",
      access:
        "Availability follows the delivery address, and sign-in is required only at checkout and for account-linked surfaces.",
      economy:
        "DoorDash credits are a dollar-denominated cashback balance tied to DashPass, not a product-specific currency.",
      social:
        "DoorDash's social layer covers three gift routes, a one-time group order, and a reviews-and-photos layer built around a public contributor profile.",
      reach:
        "A loyalty-program link, sharing store and group-order links, map-app handoffs and an ads-personalization disclosure each point outside DoorDash.",
      monetization:
        "DoorDash names a specific set of fees on every order and pairs each one directly to the DashPass subscription that reduces or removes it.",
      returns:
        "A notification request, a notification inbox, and dated offer windows make up a thin return layer.",
    },
  },
  ladder: {
    name: "Ladder",
    category: "Fitness / Coached Training",
    type: "app",
    sectionCards: {
      onboarding:
        "A tracking prompt, Apple sign-in, a three-part coach video sequence and a team-match filter all run before the user reaches the home screen.",
      "core-loop":
        "The weekly plan hub, the welcome workout player and a new nutrition dashboard anchor a loop that opens with one workout and branches into macro tracking.",
      goals:
        "A completion badge, profile stats, a Get Started checklist, an upcoming strength series and a full nutrition questionnaire sit across this section.",
      access:
        "One completed workout unlocks chat, nutrition and the plan at once; three completed workouts unlocks a six-week strength series.",
      economy:
        "Empty. Ladder holds no currency, points balance or resource of its own.",
      social:
        "A matched coaching team, teammate cheers, team chat, topic groups and city meetups make up the social layer.",
      reach:
        "Apple Health sync, a music service connection, and a share-to-Instagram option each carry the user outside Ladder.",
      monetization:
        "A seven-day free trial with no credit card required runs on a fixed timeline toward a monthly or annual plan, with no price shown.",
      returns:
        "Two notification prompts, a workout reminder, a weekly streak and a fixed Sunday content release bring users back.",
    },
  },
  gymverse: {
    name: "Gymverse",
    category: "Fitness / Gym Training",
    type: "app",
    sectionCards: {
      onboarding:
        "Gymverse numbers nineteen onboarding screens that build a personalized plan, pairing two population statistics with copy that answers several questions the same way regardless of what's chosen.",
      "core-loop":
        "Gymverse's workout runs as a fixed warm-up, exercise, and stretch sequence, with a rest countdown that opens automatically between sets and a calendar that fixes which days carry a workout.",
      goals:
        "Gymverse projects a weekly weight adjustment before any training happens, reports muscles worked and what's next on the completion screen, and names an Achievements surface that stays unopened.",
      access:
        "Gymverse's seven-day free pass opens every surface it reaches, with no lock, gate, or upgrade prompt found anywhere in the product.",
      economy: "Gymverse holds no currency, points balance, material, or resource of any kind.",
      social: "Gymverse has no social layer at all; no other identified person appears anywhere in the product.",
      reach:
        "Gymverse composes its own records of the user into shareable images, triggered by a screenshot, a workout completion, and a total activity figure.",
      monetization:
        "Gymverse prices its plan before a single exercise is seen, then grants a seven-day free pass with no payment details the moment the paywall is declined.",
      returns:
        "Gymverse asks for notification permission with a loss-framed heading, sends a message addressing lapsed training, and keeps workout reminders in settings.",
    },
  },
  "fc-mobile": {
    name: "FC Mobile",
    category: "Sports / Football management",
    type: "game",
    sectionCards: {
      onboarding:
        "FC Mobile scripts a returning account through a tutorial, a squad build and a first match already won, leaving one control live at a time until the sequence ends without a next step.",
      "core-loop":
        "FC Mobile repeats football matches across a dozen named modes, automating movement when the stick is released, on top of a squad developed through training, rank-ups and skill assignments.",
      goals:
        "FC Mobile advances an account level, a head-to-head division ladder, a roughly sixty-position Star Pass, league season points, and three named player collections, all at once.",
      access:
        "FC Mobile gates the market, leagues, challenge mode and several other features behind stated account levels or match counts, and conditions league membership on team overall and not already belonging to one.",
      economy:
        "FC Mobile runs more than a dozen named currencies, most earned through play and spent across a transfer market, two exchanges and a four-part store.",
      social:
        "FC Mobile's leagues hold their own season level, quests, tournament and two leaderboard positions, advanced entirely by members' combined activity.",
      reach:
        "FC Mobile links out to a promotional website, an offerwall paying for other companies' games, another publisher's advertisement, an outside esports competition, and a video hub.",
      monetization:
        "FC Mobile runs a four-part store with three locked purchase ladders, two monthly cards, and probability disclosure that appears on some packs and not others.",
      returns:
        "FC Mobile runs two separate daily login calendars, countdowns on nearly every surface, and notifications naming exactly what a return would show.",
    },
  },
};

beginRegenerate("apps");
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

    // sectionCards is z.record-typed in content.config.ts, not the
    // section-slug enum (deliberately, so lead-ins can be written section
    // by section — see that schema's own comment) — which means a stale or
    // mistyped key here doesn't throw anywhere else. It just silently stops
    // matching at render time and the section card blurb quietly renders
    // as an empty string. Checked here instead, at the one place all four
    // apps' sectionCards objects are hand-authored, so a rename or a typo
    // fails the build instead of shipping a blank card.
    const currentSlugs = new Set(V41_SECTIONS.map((s) => s.slug));
    for (const key of Object.keys(meta.sectionCards ?? {})) {
      if (!currentSlugs.has(key))
        throw new Error(`${entry.id}: sectionCards has key "${key}", which is not a current section slug`);
    }

    // The analysis supplies only the applied tags and the header dates
    // (spec §1.7); ids are the join back onto the content file's
    // observations. A tag naming an id the content file doesn't have is a
    // real mismatch between the two files, not something to skip silently.
    const a = parseAnalysisV41(entry.file);

    // Analysis-to-content section cross-check: an analysis file's own Pass
    // one section headings are prose only, never parsed into the published
    // model, so nothing previously noticed the two documents drifting
    // apart on section names — same bug class as the v3/v4.1 format
    // detector and the confidence-tier enum, both of which used to fail
    // silently too before each got a check of its own. Warned rather than
    // thrown: the content file above already hard-rejects any section name
    // it doesn't recognize, so the content file is never wrong here, only
    // the analysis file can be stale — and while the section definitions
    // are mid-migration across all four existing apps, throwing on this
    // would block a build that the content-file check above hasn't
    // already blocked, before there's been any chance to fix the analysis
    // file's prose to match.
    const canonicalNames = new Set(V41_SECTIONS.map((s) => s.name));
    const analysisNames = new Set(a.sectionNames);
    const unexpected = a.sectionNames.filter((n) => !canonicalNames.has(n));
    const missing = V41_SECTIONS.map((s) => s.name).filter((n) => !analysisNames.has(n));
    if (unexpected.length || missing.length) {
      console.warn(
        `\n=== ANALYSIS/CONTENT SECTION DRIFT: ${entry.file} ===\n` +
          (unexpected.length
            ? `Analysis has section heading(s) that don't match a current section name: ${unexpected.join(", ")}\n`
            : "") +
          (missing.length
            ? `Current section(s) missing from the analysis file's own headings: ${missing.join(", ")}\n`
            : "") +
          `The content file is the enforced source of truth; the analysis file's Pass one headings should still match it. Update the analysis file to close this gap.\n`
      );
    }

    for (const id of a.tagsById.keys()) {
      if (!content.obsById.has(id))
        throw new Error(`${entry.file}: analysis applies a tag to observation ${id}, which is not in the content file`);
    }
    for (const obs of content.observations) obs.tags = a.tagsById.get(obs.id) ?? [];

    // Every tag actually applied to an observation needs a composed block to
    // render on the summary page (spec §2.1) — a missing one is a real gap,
    // not something to fall back on. A composed block with no applied tag
    // behind it is stale content rather than a broken page, so it warns
    // instead of failing the build.
    const appliedTagNames = new Set(content.observations.flatMap((o) => o.tags.map((t) => t.name)));
    for (const tagName of appliedTagNames) {
      if (!content.mechanicWriteups.some((w) => w.name === tagName))
        throw new Error(`${entry.file}: applied tag "${tagName}" has no composed mechanic block in the content file`);
    }
    for (const w of content.mechanicWriteups) {
      if (!appliedTagNames.has(w.name))
        console.warn(`note: ${entry.id} has a composed mechanic block for "${w.name}", which is not an applied tag on any observation`);
    }

    // Two different library entries can resolve to the same site mechanic —
    // the merged taxonomy surfacing (sources/taxonomy-map.md), not an error.
    // Reported, not merged: each stays its own tag, its own block, its own
    // observations (tagBlocks() disambiguates the resulting shared DOM id).
    // This is purely informational, so it's a plain note rather than the
    // louder banners above — nothing here needs fixing in the source file.
    const namesByMechanicId = new Map();
    for (const tagName of appliedTagNames) {
      const id = resolveMechanicId(tagName);
      if (!id) continue;
      if (!namesByMechanicId.has(id)) namesByMechanicId.set(id, []);
      namesByMechanicId.get(id).push(tagName);
    }
    for (const [id, names] of namesByMechanicId) {
      if (names.length > 1)
        console.log(`note: ${entry.id} applies ${names.length} library entries onto one site mechanic "${id}": ${names.join(", ")}`);
    }

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
      asObserved: a.asObserved,
      appVersion: a.appVersion,
      summary: content.description,
      teaser: content.teaser,
      icon: icons[0] ? "/" + icons[0] : null,
      heroImage: resolveHeroImage(entry.id),
      contentFormat: "v4.1",
      observations: content.observations,
      systemView: content.systemView,
      mechanicWriteups: content.mechanicWriteups,
      sectionLeadIns: content.sectionLeadIns,
      sectionCards: meta.sectionCards ?? {},
      proposedTags: a.proposedTags,
      system: buildSystemMap(entry.id),
    });
    continue;
  }

  const a = parseAnalysisV3(entry.file);
  const v44 = APPS.find((x) => x.id === entry.id) ?? null;

  // relationship set. originalId is kept alongside the remapped id
  // specifically for the a.shots lookup below: a.shots is populated by
  // parseAnalysisV3 keyed on the file's own literal heading id, before any
  // REMAPS translation, so looking it up by the post-remap id (as this used
  // to) silently came back empty for every remapped app the moment a split
  // (xp-leveling, then achievements) took effect — the suggested-screenshot
  // text was still sitting under the old id and nothing ever found it again.
  const rels = a.observed.map((r) => ({ ...r, originalId: r.id, id: REMAPS[entry.id]?.[r.id] ?? r.id }));
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
        suggestedShots: (a.shots[r.originalId ?? r.id] ?? []).slice(0, 3),
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
commitRegenerate("apps");

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
  const dir = collDirs[coll] ?? path.join(out, coll);
  fs.writeFileSync(path.join(dir, id + ".json"), JSON.stringify(obj, null, 2));
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
