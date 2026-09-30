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
import { HELD_BACK_MECHANIC_IDS } from "../src/lib/held-back-mechanic-ids.mjs";
import { extractObjectLiteral, assertNoDuplicateKeys } from "../src/lib/system-html-keys.mjs";

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
//
// The extraction and scanning logic, plus this check's own history (a
// bareword-key blind spot found 16 Sep 2026, then a much worse scanning bug
// found fixing that same blind spot's aftermath on 28 Sep 2026), lives in
// system-html-keys.mjs, split out so it can be unit tested directly against
// synthetic literals — see system-html-keys.test.mjs — rather than only ever
// being exercised by a real build against real content, which is how the 28
// Sep bug went unnoticed for twelve days.
const systemHtml = fs.readFileSync(path.join(repo, "system.html"), "utf8");
const connectionsSrc = extractObjectLiteral(systemHtml, "CONNECTIONS");
const positionsSrc = extractObjectLiteral(systemHtml, "POSITIONS");
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
  let tiers = [...cleaned.matchAll(/\(tier:\s*([^,)]+)/gi)].map((m) => m[1].trim().toLowerCase());
  // A third shape, seen in solitaire-grand-harvest.md: a per-observation
  // breakdown with no "(tier: ...)" wrapper at all, e.g. "O34 directly
  // observed; O35 strongly supported; O37 strongly supported." Matched
  // narrowly, anchored to an observation id immediately before the tier
  // phrase, rather than scanning the whole string for a bare tier phrase
  // anywhere in it — the anchor is what keeps this from picking up a tier
  // word mentioned in passing prose rather than actually asserted as one.
  if (!tiers.length) {
    tiers = [...cleaned.matchAll(/\bO\d+\s+(unresolved|plausible|strongly supported|directly observed)\b/gi)].map((m) =>
      m[1].toLowerCase()
    );
  }
  // A fourth shape: a tier word at the very start of the field, followed by a
  // comma and an explanatory clause, e.g. "strongly supported, the reward
  // screen appears in both sessions but the streak reset is never shown." —
  // the reason for the tier lives in the same field as the tier itself. The
  // trailing-punctuation strip above only touches the end of the string, so
  // this reached the no-tiers-found throw below until this path was added.
  // Anchored to the start so a tier word appearing later in the clause isn't
  // picked up as if it were the field's own value.
  if (!tiers.length) {
    const lead = cleaned.match(/^(unresolved|plausible|strongly supported|directly observed)\s*,/i);
    if (lead) tiers = [lead[1].toLowerCase()];
  }
  // A bare value that isn't a recognized tier AND carries no "(tier: ...)"
  // annotation and no per-observation breakdown either used to fall through
  // to an empty array here, which tagPublishes below read as "doesn't
  // publish" — indistinguishable from a tag that legitimately failed the
  // bar. That's the silent-failure path a retired or misspelled value took;
  // it now throws instead.
  if (!tiers.length)
    throw new Error(
      `unrecognized confidence value "${confidence}" — must be one of: ${Object.keys(TAG_CONFIDENCE_RANK).join(", ")}, a paragraph containing one or more "(tier: ...)" annotations using those values, or a per-observation breakdown like "O1 directly observed; O2 strongly supported"`
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

// Locates a set of known "**Label:**" fields inside a block by name and
// position, in one pass, rather than reading one label and guessing where
// its value ends by scanning forward for "a blank line, then any bold
// capitalized text" — the construction that silently swallowed Role,
// Confidence, Rationale and Alternative considered into whichever of those
// four happened to come first in a Pass Two tag block, because that
// format never puts a blank line between consecutive labels. Every other
// labeled-field format in these analyses (this one included) currently
// happens to put a blank line between its fields too, so that guess has
// never yet been caught being wrong anywhere else — but nothing checked
// that it held, which is exactly the same risk sitting unexercised rather
// than fixed, in as many places as reused the same generic approach.
//
// `slots` is an ordered list of label groups, each an array of one or more
// accepted spellings for the same field (Pass three's "Caveat" is also
// written "Caveat on the third test" in places). A field's value is the
// text between its own label and whichever OTHER known label sits next by
// POSITION in the source, never by scanning forward for an unrelated
// pattern and hoping it lands on the right one. A label appearing more
// than once (under any of its accepted spellings) always throws, since
// that's unambiguously a defect regardless of caller. Returns the values
// found (keyed by each slot's first/canonical spelling) plus the order
// they actually appeared in, so a caller whose format has a fixed,
// spec'd order (the mechanic write-up block) can check it and one whose
// format doesn't (Pass three's more free-form proposals) can skip that
// check without needing a second implementation of the position-finding
// itself.
function locateLabeledFields(file, blockName, block, slots) {
  const found = [];
  for (const names of slots) {
    const matches = [];
    for (const label of names) {
      const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const re = new RegExp("\\*\\*" + escaped + "[.:]\\*\\*\\s*", "g");
      matches.push(...block.matchAll(re));
    }
    if (matches.length > 1) throw new Error(`${file}: ${blockName} has "${names[0]}" more than once`);
    if (matches.length === 1)
      found.push({ key: names[0], start: matches[0].index, valueStart: matches[0].index + matches[0][0].length });
  }
  found.sort((a, b) => a.start - b.start);
  const values = {};
  for (let i = 0; i < found.length; i++) {
    const end = i + 1 < found.length ? found[i + 1].start : block.length;
    values[found[i].key] = block.slice(found[i].valueStart, end).trim();
  }
  return { values, order: found.map((f) => f.key) };
}

// Two label sets for a mechanic write-up block, old and new (voice rewrite,
// 30 Sep 2026, sources/prompts/stage2-website-content.md). Every app is
// being swept from the old shape to the new one; both are parsed while the
// sweep runs, each in its own fixed order, so a block missing a label from
// its own shape, or carrying its labels out of order, is still a real
// defect worth throwing on. Shape is detected per block, not per app, from
// whichever second label (the first shape-specific one, after the shared
// "Implementation summary") is actually present — see detectMechanicBlockShape.
//
// Once every app's content file is on the new shape, delete
// OLD_MECHANIC_BLOCK_LABELS, the "old" branch in detectMechanicBlockShape,
// and the old-shape branch in parseContentV41 below; delete the matching
// old-shape fields from the mechanicWriteup schema (content.config.ts), the
// old-shape render branch in CaseStudySummaryV41.astro, and the v3-shaped
// fallback in props.ts's mechanicStudies()/exampleComplete(). Nothing else
// in the codebase depends on the old shape once that sweep completes.
const OLD_MECHANIC_BLOCK_LABELS = [
  "Implementation summary",
  "What was observed",
  "How it is presented",
  "What is worth noting",
  "Key findings",
  "Screenshots needed",
];
const NEW_MECHANIC_BLOCK_LABELS = [
  // Optional (30 Sep 2026): the app's own name for the thing, e.g. "Wrenches"
  // for Match Creek Motors' soft currency. The block heading itself stays
  // the library entry name (the join key back onto an applied tag) — this
  // is a display-only override, resolved in v41.ts's tagBlocks() alongside
  // the site mechanic's own displayName, never in place of the heading here.
  "Title",
  "Implementation summary",
  "How it works",
  "Illustration brief",
  "What stands out",
  "Trigger",
  "What it needs",
  "How it connects",
  "Worth noticing",
  "Screenshots needed",
];

function detectMechanicBlockShape(file, name, block) {
  const hasOld = /\*\*What was observed[.:]\*\*/.test(block);
  const hasNew = /\*\*How it works[.:]\*\*/.test(block);
  if (hasOld && hasNew)
    throw new Error(`${file}: mechanic block "${name}" has labels from both the old and the new shape — pick one`);
  if (!hasOld && !hasNew)
    throw new Error(`${file}: mechanic block "${name}" has neither shape's required "How it works" or "What was observed" label`);
  return hasNew ? "new" : "old";
}

function mechanicBlockFields(file, name, block) {
  const shape = detectMechanicBlockShape(file, name, block);
  const labels = shape === "new" ? NEW_MECHANIC_BLOCK_LABELS : OLD_MECHANIC_BLOCK_LABELS;
  const { values, order } = locateLabeledFields(file, `mechanic block "${name}"`, block, labels.map((l) => [l]));
  const expectedOrder = labels.filter((l) => order.includes(l));
  if (order.join("|") !== expectedOrder.join("|"))
    throw new Error(
      `${file}: mechanic block "${name}" has its labels out of order — found ${order.join(", ")}, expected ${expectedOrder.join(", ")}`
    );
  return { shape, values };
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
    // Confidence, like Role below, is a single-line value ("plausible (tier:
    // plausible, ...)"), never multi-paragraph prose — but field()'s generic
    // "capture until the next blank-line-delimited **Label**" regex assumes a
    // blank line separates fields, which this format never uses between
    // Confidence and the Role line right after it. With no blank line to stop
    // at, field() pulled the entire rest of the block (Role, its elaboration
    // paragraph, Rationale, Variants present/not established, Alternative
    // considered) into `confidence` too. That went unnoticed as long as every
    // "(tier: ...)" annotation buried in that swallowed text happened to
    // clear the same bar the tag's own stated confidence already did — until
    // Subway Surfers' First-Purchase Bonus and Cosmetic Customization, both
    // genuinely plausible, whose Rationale text cites a directly-observed
    // supporting fact ("(tier: directly observed)") for a different, higher
    // confidence claim than the tag itself carries. confidenceTiers() then
    // found that stray higher tier via its own tier-scanning regex and
    // tagPublishes() let the tag through, which is what let two apps
    // effectively unpublished then get tagged onto their observations
    // anyway, then fail with "applied tag has no composed mechanic block"
    // since no block was written for either (correctly, since neither should
    // have published at all). Fixed the same way Role's identical bug was
    // fixed (see roleLine below): read only the Confidence line itself.
    const confidenceLine = block.match(/\*\*Confidence:\*\*\s*(.+)/);
    const confidence = confidenceLine ? confidenceLine[1].trim() : "";
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
    // next **Label**" regex was pulling that whole paragraph into `role`
    // too — silent until something actually rendered role (this index's
    // cards, and every "ROLE DISAGREEMENT ACROSS BLOCKS" build warning,
    // which has been printing this same polluted text all along). Fixed by
    // reading only the Role line itself.
    const roleLine = block.match(/\*\*Role:\*\*\s*(.+)/);

    // Strip a single trailing "." or "," here, at the source, rather than
    // relying on the one downstream consumer (mechanics/index.astro's
    // roleTokens) that happens to filter(Boolean) after its own comma split.
    // A role line ending "engagement, monetization." or with a stray
    // trailing comma is common enough in the source prose (acorns.md carried
    // both) that a future consumer splitting this string without that same
    // guard would render a blank chip.
    const role = roleLine ? roleLine[1].trim().replace(/[.,]\s*$/, "") : "";

    // Rationale and Alternative considered are the same shape as Role and
    // Confidence above: one long single-line value, not multi-paragraph
    // prose spanning several physical lines (verified across all 227
    // instances of each in sources/analyses/*.md — every one is followed
    // immediately by another "**Label:**" line or a blank line, never a
    // continuation). The comment that used to sit here called field()
    // "correct for Rationale and Alternative considered" — checked only
    // because Alternative considered happens to be the LAST field in every
    // block, so its swallow-to-blank-line behavior coincidentally lands on
    // the real boundary. Rationale is not the last field: Variants present,
    // Variants not established and Alternative considered all follow it
    // with no blank line in between, so field() was swallowing all three
    // into `rationale` for every tag in every v4.1 analysis, the same bug
    // as Role's and Confidence's, just never surfaced because nothing
    // downstream failed loudly on a polluted rationale string the way the
    // publishing-bar check did on a polluted confidence string. Found while
    // checking whether any other field in this block shares the same
    // no-blank-line construction, after Role (Capybara Go) and Confidence
    // (Subway Surfers) each turned out to. Fixed the same way, and
    // Alternative considered converted too so its safety no longer depends
    // on staying the last field forever.
    const rationaleLine = block.match(/\*\*Rationale:\*\*\s*(.+)/);
    const rationale = rationaleLine ? rationaleLine[1].trim() : "";
    const alternativeConsideredLine = block.match(/\*\*Alternative considered:\*\*\s*(.+)/);
    const alternativeConsidered = alternativeConsideredLine ? alternativeConsideredLine[1].trim() : "";

    if (!blocksByName.has(tagName)) blocksByName.set(tagName, []);
    blocksByName.get(tagName).push({
      confidence,
      rationale,
      alternativeConsidered,
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
  // Trailing "---\n\n" divider before the next "# " heading stripped up
  // front, same as the content file's own section parser does — otherwise
  // it lands inside whichever field of the LAST entry now genuinely
  // extends to the true end of the section, which nothing did until
  // Status started being read (see below).
  const passThree = (h1Section(md, "Pass three: proposed new tags") ?? "").replace(/\n{1,2}---\s*$/, "");
  // No fixed order enforced here, unlike the mechanic write-up block: this
  // format's own fields vary more than that one's (Caveat's own name
  // varies), so a missing or reordered field isn't a known violation worth
  // failing the build on — locateLabeledFields still fixes the underlying
  // swallow-the-rest-of-the-block risk regardless, since a missing value
  // just resolves to "" the same way field() used to, and a genuine
  // duplicate still throws.
  //
  // Status is a seventh field, seen on a proposal once it's been ruled on
  // (approved or rejected), and always the last one when it's there —
  // which is exactly why leaving it off this list at first mislabeled the
  // fix: with Status unlisted, Caveat had no known field after it to stop
  // at in an entry that carries one, so it swallowed Status's own text
  // into caveat, corrupting exactly two apps' worth of entries (both
  // caught by re-diffing every app.json against the prior commit after
  // this change, the same empirical check used for the Confidence and
  // Rationale fixes). Found by auditing every label actually used across
  // Pass Three in the whole corpus rather than trusting the six-ish names
  // the old code happened to already know about.
  const proposedTags = headingChunks(passThree, 3).map(({ heading, body }) => {
    const { values } = locateLabeledFields(file, `Pass three entry "${heading}"`, body, [
      ["Source observations"],
      ["Draft definition"],
      ["Conditions it appears to depend on"],
      ["Why it is not covered"],
      ["Recurrence elsewhere"],
      ["Caveat", "Caveat on the third test"],
      ["Status"],
    ]);
    return {
      name: heading,
      status: values["Status"] || undefined,
      sourceObservations: idsIn(values["Source observations"] || ""),
      draftDefinition: values["Draft definition"] || "",
      conditions: values["Conditions it appears to depend on"] || "",
      whyNotCovered: values["Why it is not covered"] || "",
      recurrenceElsewhere: values["Recurrence elsewhere"] || "",
      caveat: values["Caveat"] || "",
    };
  });

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

  // ---- Mechanics (spec §2.1): one composed block per applied tag, in
  // labelled parts plus a screenshots note, using the same "**Label:**"
  // convention the analysis file's Pass Two uses — mechanicBlockFields()
  // above detects which of the two shapes (old or new voice, see the
  // comment on OLD_MECHANIC_BLOCK_LABELS) a block uses, then locates that
  // shape's labels by name and position rather than guessing where each
  // one ends.
  // Optional: an app with no applied tags has nothing to compose here.
  let mechanicWriteups = [];
  let fixedSectionChunks = h2s.slice(1);
  if (h2s[1] && h2s[1].heading.toLowerCase() === "mechanics") {
    mechanicWriteups = headingChunks(h2s[1].body, 3).map(({ heading: rawName, body: block }) => {
      const name = rawName.trim();
      const { shape, values } = mechanicBlockFields(file, name, block);
      // Optional (stage2-website-content.md amendment, 16 Sep 2026): not
      // one of the required composed parts below, and not present at
      // all until each app's write-up is backfilled with it — see the
      // schema comment on mechanicWriteup (content.config.ts).
      const summary = values["Implementation summary"] || undefined;
      const screenshotsNote = values["Screenshots needed"] || "";

      if (shape === "old") {
        const observed = values["What was observed"] || "";
        const presented = values["How it is presented"] || "";
        const noting = values["What is worth noting"] || "";
        const findingsRaw = values["Key findings"] || "";
        const findings = [...findingsRaw.matchAll(/^- (.+)$/gm)].map((m) => m[1].trim());
        const missing = [];
        if (!observed) missing.push("What was observed");
        if (!presented) missing.push("How it is presented");
        if (!noting) missing.push("What is worth noting");
        if (!findings.length) missing.push("Key findings");
        if (missing.length)
          throw new Error(`${file}: mechanic block "${name}" is missing: ${missing.join(", ")}`);
        return { name, summary, observed, presented, noting, findings, screenshotsNote };
      }

      const title = values["Title"] || undefined;
      const howItWorks = values["How it works"] || "";
      const illustrationBrief = values["Illustration brief"] || "";
      const whatStandsOut = values["What stands out"] || "";
      const trigger = values["Trigger"] || "";
      const whatItNeeds = values["What it needs"] || "";
      const howItConnects = values["How it connects"] || "";
      const worthNoticing = values["Worth noticing"] || "";
      const missing = [];
      if (!howItWorks) missing.push("How it works");
      if (!illustrationBrief) missing.push("Illustration brief");
      if (!whatStandsOut) missing.push("What stands out");
      if (!trigger) missing.push("Trigger");
      if (!whatItNeeds) missing.push("What it needs");
      if (!howItConnects) missing.push("How it connects");
      if (!worthNoticing) missing.push("Worth noticing");
      if (missing.length)
        throw new Error(`${file}: mechanic block "${name}" is missing: ${missing.join(", ")}`);
      return {
        name,
        title,
        summary,
        howItWorks,
        illustrationBrief,
        whatStandsOut,
        buildingSomethingLikeThis: { trigger, whatItNeeds, howItConnects, worthNoticing },
        screenshotsNote,
      };
    });
    fixedSectionChunks = h2s.slice(2);
  }

  // ---- Section cards (spec §2.1): the one-line blurb for each section's
  // card on the summary page. Moved here from V41_APP_META in convert-content.mjs
  // (voice rewrite, 30 Sep 2026): the same kind of authored copy as
  // sectionLeadIns below, so it belongs in the same file. Optional heading —
  // an app can go without it the same way sectionLeadIns can be partial —
  // and, like sectionLeadIns, keyed by the section's display name rather
  // than its slug, one "**Name:** text" line per section, in any order.
  const sectionCards = {};
  if (fixedSectionChunks[0] && fixedSectionChunks[0].heading.toLowerCase() === "section cards") {
    for (const [, heading, text] of fixedSectionChunks[0].body.matchAll(/^\*\*([^*]+):\*\*\s*(.+)$/gm)) {
      const slug = V41_SECTION_SLUG.get(heading.trim());
      if (!slug) throw new Error(`${file}: section cards has "${heading.trim()}", which is not a current section name`);
      if (sectionCards[slug]) throw new Error(`${file}: section cards has "${heading.trim()}" more than once`);
      sectionCards[slug] = text.trim();
    }
    fixedSectionChunks = fixedSectionChunks.slice(1);
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
    sectionCards,
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
  // calm's entry here was removed on its v4.1 migration (28 Sep 2026):
  // ADDITIONS is a v3-only path calm.md never reaches, and its old gifting
  // addition is superseded by the fresh analysis's own Pass Two gifting tag.
  "canva": [{ id: "credits-tokens", depth: "supporting" }],
  "capybara-go": [
    { id: "first-purchase-bonus", depth: "supporting" },
    { id: "cosmetics", depth: "shallow" },
  ],
  "clash-of-clans": [{ id: "gifting", depth: "supporting" }],
  "fc-mobile": [{ id: "first-purchase-bonus", depth: "supporting" }],
  // picsart's entry here was removed on its v4.1 migration (16 Sep 2026):
  // ADDITIONS is a v3-only path picsart.md never reaches, and its old
  // single credits-tokens addition is superseded by the fresh analysis's
  // own Soft Currency and Hard Currency tags anyway.
  // subway-surfers's entry here was removed on its v4.1 migration (28 Sep
  // 2026): ADDITIONS is a v3-only path subway-surfers.md never reaches, and
  // its old shallow set-collection addition is superseded by the fresh
  // analysis's own explicit rejection of Set Collection for insufficient
  // evidence (the item-collection requirement was never established).
};
// Per-app id remaps from an analysis's own naming onto this library's ids.
// Strava needed one while its clubs were classified as clans-guilds; the
// reviewed analysis classifies them as Group Membership, which the canonical
// name map resolves to group-membership directly, so no remap is needed.
//
// xp-leveling split into experience-points and leveling on 13 Sep 2026
// (sources/taxonomy-map.md). These v3 files still carry the old inline id
// in a "### ... (`xp-leveling`) · Depth" heading and were not rewritten —
// remapped here instead, onto whichever of the two split concepts that
// app's own write-up is actually about, decided from each file's own
// observed text: liftoff describes a level or rank state as the thing
// observed (leveling). Without this, any of these would throw "unknown
// mechanic xp-leveling" the moment xp-leveling stopped being a registered
// id. capybara-go is not remapped here: its analysis was migrated to
// v4.1 and never reaches this v3 path at all. clash-of-clans, tiimo,
// gymverse and fc-mobile each carried an entry here before their own
// migration to v4.1 — this section wasn't updated when clash-of-clans
// and tiimo migrated, so their entries sat dead for a while before this
// cleanup caught them the same way it caught gymverse's and fc-mobile's.
// wakeout's analysis already uses the reviewed canonical name "Experience
// Points" rather than the inline id, which resolves through
// CANONICAL_MECHANIC_IDS directly. freeletics is no longer remapped here
// either (18 Sep 2026): its original assignment to leveling was correct
// on the merits, unlike steam's below — the fresh analysis confirms
// Leveling as strongly supported — and is retired for the same mootness
// reason as the others, since freeletics.md is now v4.1 format.
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
// solitaire-grand-harvest's own entry below was removed on its v4.1
// migration (28 Sep 2026): REMAPS is a v3-only path
// solitaire-grand-harvest.md no longer reaches, and the fresh analysis
// resolves the same assumption error found in steam's entry on its own
// merits, applying Leveling and Experience Points as separate tags
// directly rather than needing a remap at all.
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
// royal-match, gymverse, fc-mobile, acorns, ladder, freeletics,
// fortune-city, chrome-valley-customs, match-creek-motors, nor
// fifa-panini-collection appears below: all sixteen are v4.1 and never
// reach this path (royal-match, gymverse, fc-mobile, acorns, ladder,
// freeletics, fortune-city, chrome-valley-customs, match-creek-motors and
// fifa-panini-collection each carried an entry here before their own
// migration to v4.1, removed once each analysis stopped using the v3
// inline-id form). freeletics's own assignment to achievement does not
// hold up the way liftoff's does: the fresh analysis leaves Achievement
// unresolved rather than applying it ("no achievement, criterion, locked
// entry or attained state is narrated on an account that has done no
// workouts") — a garbled passage and a blank account, not a confirmed
// criterion. The entry is retired here regardless, since freeletics.md is
// v4.1 format and never reaches this path, but unlike liftoff's this was
// never a settled case to begin with. fortune-city's, match-creek-motors's
// and fifa-panini-collection's fresh analyses all apply Achievement, on
// different grounds entirely (100 named criteria evaluated against
// activity; a Game Center achievement list; a tiered badge page spanning
// collecting, swapping, challenges and scanning), so their removal from
// the list below reflects the same v3-path retirement as the others, not a
// rejection. chrome-valley-customs's fresh analysis considers Achievement
// too and rejects it outright ("'Perfect restoration' and 'Episode
// complete' are level and episode results, not separately recorded
// attained criteria"), so its own removal from the milestone list below is
// likewise retirement, not agreement with the old remap.
//   -> achievement: calm, liftoff, swgoh,
//      uptime, fiton, subway-surfers.
//   -> milestone: wispr-flow, solitaire-grand-harvest.
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
// step) and solitaire-grand-harvest (a free Lucky Wheel spin and a free Crop
// Master pick dominate the section, even though its $2.99 second spin is
// loot-box-shaped on its own — REMAPS holds one id per app, so the file's
// dominant, free-to-resolve framing wins) fall through unmapped, by design.
// Only files whose evidence belongs to the other successor, loot-box, need an actual entry
// below: liftoff (paying eggs to refresh Store deals with unknown
// contents) and subway-surfers (the coin-priced Mystery Box and the
// ad-or-key-gated token box) each describe a value commitment before an
// unresolved container resolves. swgoh applied Loot Box and Variable
// Reward Outcome as separate, independently evidenced v4.1 tags on 16 Sep
// 2026, clearing the split condition the same way Capybara Go and FC
// Mobile did below, so it no longer needs a remap entry here. insight-timer's
// own analysis considered Achievement against its milestone listing (1, 5,
// 25, 100) and rejected it, no criterion changing to attained and no
// preserved record was seen, classifying the count itself under Milestone
// instead, so it no longer needs a remap entry here either. The third
// fused entry, Variable Reward
// Schedule, has no remap target anywhere below — no app under the current
// model, v3 or v4.1, has ever applied it, so it was retired rather than
// carried forward (see "Library entries with no site mechanic" in
// taxonomy-map.md). fifa-panini-collection's old v3 write-up under the
// Variable Reward heading once read "Write-up pending" — no observed text
// to classify from — so it fell through unmapped to the kept id
// (variable-reward) by the same no-remap-needed mechanism as the others
// above, flagged at the time as an unevidenced default rather than a real
// classification decision. That file no longer exists: the fresh v4.1
// analysis applies Loot Box directly, with Variable Reward Outcome
// correctly left as the noted, unapplied parent under the overlap rule
// (the same shape as capybara-go's, fc-mobile's and swgoh's own Loot Box
// tags), not a rejection so much as a resolved case the old file's gap
// never reached. Neither fortune-city, clash-of-clans, chrome-valley-customs,
// match-creek-motors, nor fifa-panini-collection appears below: fortune-city's
// own analysis never mentions this concept at all, clash-of-clans's and
// chrome-valley-customs's analyses each explicitly consider and reject
// Variable Reward Outcome in their own "Entries considered and not applied"
// sections ("every level ended in the same 'perfect restoration' result,
// and no reward event is shown resolving to materially different results"
// for chrome-valley-customs), match-creek-motors's analysis does the same
// ("The three sale offers are chosen by the user one card at a time under
// instructions... so multiple possible results for one resolution event
// are not established", whose old entry had named that same negotiation as
// its variable-reward carrier), and fifa-panini-collection's applies the
// more specific Loot Box instead, as above — all five were stale
// carryovers on the old fused mechanic's apps[] list rather than real
// evidence, and none reaches this v3 path in any case, all being v4.1.
// royal-match, capybara-go, fc-mobile, steam, swgoh, uptime and
// insight-timer don't appear below either: all seven are v4.1 and never
// reach this path.
const REMAPS = {
  "liftoff": { "xp-leveling": "leveling", "achievements": "achievement", "variable-reward": "loot-box" },
  // calm's entry here was removed on its v4.1 migration (28 Sep 2026):
  // REMAPS is a v3-only path calm.md never reaches.
  // solitaire-grand-harvest's entry here was removed on its own v4.1
  // migration (28 Sep 2026), for the same reason.
  "fiton": { "achievements": "achievement" },
  // fortune-city's entry here was removed on its own v4.1 migration (28 Sep
  // 2026), for the same reason.
  // subway-surfers's entry here was removed on its v4.1 migration (28 Sep
  // 2026): REMAPS is a v3-only path subway-surfers.md never reaches.
  // chrome-valley-customs's entry here was removed on its own v4.1
  // migration (28 Sep 2026), for the same reason — and its fresh analysis
  // rejects Achievement outright rather than agreeing with the old remap
  // (see the comment above this block). match-creek-motors's entry here
  // was removed on its own v4.1 migration (29 Sep 2026), the same
  // retirement as fortune-city's, not agreement or rejection.
  // fifa-panini-collection's entry here was removed on its own v4.1
  // migration (29 Sep 2026) — its fresh analysis applies Achievement on a
  // seven-category tiered badge page, unrelated grounds to the old remap.
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
  // solitaire-grand-harvest's entries here were removed on its v4.1
  // migration (28 Sep 2026): DROPS is a v3-only path
  // solitaire-grand-harvest.md no longer reaches.
  "streak|freeletics",
  "daily-login-reward|fiton",
  "credits-tokens|liftoff",
  "gifting|swgoh",
  // fortune-city's "soft-currency|fortune-city" entry here was removed on
  // its v4.1 migration (28 Sep 2026): DROPS is a v3-only path
  // fortune-city.md no longer reaches. chrome-valley-customs's
  // "ads|chrome-valley-customs" and "limited-time-events|chrome-valley-customs"
  // entries here were removed on its own v4.1 migration (28 Sep 2026), for
  // the same reason. match-creek-motors's "ads|match-creek-motors" and
  // "limited-time-events|match-creek-motors" entries here were removed on
  // its own v4.1 migration (29 Sep 2026) — corrected the same day: this was
  // stated here as "the last app on the v3 model", which was wrong.
  // fifa-panini-collection's own migration landed 29 Sep 2026, the last
  // subscriber app on the v3 model. Every remaining v3-format entry in
  // ALL_APPS is now report-only: wispr-flow (unpublished rather than
  // migrated, 29 Sep 2026, a re-analysis produced only two publishable
  // tags, short of the three-tag minimum — see its own comment in ALL_APPS
  // above), orbit, starling-bank and george-erste-bank. DROPS, REMAPS,
  // HARVEST_EXCLUDE, CURRENCY_DEPTH and parseAnalysisV3 below are reachable
  // only by those four now — not dead code, since a report-only app still
  // gets parsed, just no longer reachable by any subscriber-visible app.
  // Limited-Time Events was retired 15 Sep 2026 (see taxonomy-map.md); its
  // remaining two entries here, swgoh's and fiton's, were left behind
  // uncleaned when each of those two apps migrated to v4.1 earlier in this
  // project and are equally dead already — DROPS is a v3-only path neither
  // swgoh.md nor fiton.md reaches any more. Removed now that this cleanup
  // pass has actually noticed them, rather than left for a tenth app that
  // no longer exists.
  // subway-surfers's entry here was removed on its v4.1 migration (28 Sep
  // 2026): DROPS is a v3-only path subway-surfers.md never reaches.
]);

// Standing rule (final owner ruling, 11 Jun 2026): exactly two case studies
// are open at any time — strava (permanent, never flips) plus the newest
// addition to the library (rotating). The weekly import sets this id to the
// newly imported app; the previous holder flips back to subscriber simply by
// no longer being named here. Validation enforces the exactly-two invariant.
// Thin apps awaiting write-up backfill must not hold this slot.
const ROTATING_FREE_APP = "calm"; // newest addition (migrated 28 Sep 2026)

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
  // Unpublished (owner ruling, 16 Sep 2026): the new three-publishable-tag
  // minimum. Gymverse carries two (Achievement, Shareable Win, both
  // directly observed), below the floor. Its analysis and content file
  // stay in the repo; report-only removes it from every rendered page.
  { file: "gymverse.md", id: "gymverse", visibility: "report-only" },
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
  // Unpublished 29 Sep 2026: re-analysed and produced two publishable tags,
  // which fails the three-publishable-tag minimum (16 Sep 2026 ruling).
  // Same treatment as DoorDash and Gymverse. Its own analysis is still v3
  // format, so it still reaches the v3 branch and REMAPS below exactly as
  // before; only its visibility changed.
  { file: "wispr-flow.md", id: "wispr-flow", visibility: "report-only" },
  // Batch 6
  { file: "wakeout.md", id: "wakeout", visibility: "subscriber" },
  // Not part of any prior batch — DoorDash has no v3 history at all, in
  // this file or anywhere else in the site (data.js, system.html): it was
  // analyzed directly under the v4.1 model and is a first-time addition to
  // this roster, not a migration of an existing entry.
  // Unpublished (owner ruling, 16 Sep 2026): the new three-publishable-tag
  // minimum. DoorDash carries two (Achievement, Reviews and Ratings, both
  // strongly supported), below the floor. Its analysis and content file
  // stay in the repo; report-only removes it from every rendered page.
  { file: "doordash.md", id: "doordash", visibility: "report-only" },
  // Tripsy has no v3 history either, in this file or anywhere else (data.js,
  // system.html): a first-time addition analyzed directly under v4.1, same
  // as DoorDash above.
  { file: "tripsy.md", id: "tripsy", visibility: "subscriber" },
  // Vivino has no v3 history either, in this file or anywhere else (data.js,
  // system.html): a first-time addition analyzed directly under v4.1, same
  // as Tripsy above.
  { file: "vivino.md", id: "vivino", visibility: "subscriber" },
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

// Catalog metadata (name/category/type) for v4.1 apps with no v44 entry.
// v44 is the hand-maintained catalog; the analysis file itself only records
// behavior, so a v4.1 app needs this registered somewhere until it has a
// home of its own.
//
// summary/teaser/sectionLeadIns used to live here too, but spec §1.7 moved
// them into the content file (they're written prose and belong with the
// rest of the written prose) — parseContentV41 supplies them now.
// sectionCards moved the same way (voice rewrite, 30 Sep 2026): it's
// per-section authored copy, the same kind of writing as sectionLeadIns,
// so it belongs with it rather than in this script. See the "## Section
// cards" heading parsed in parseContentV41 below.
const V41_APP_META = {
  "vivino": {
    name: "Vivino",
    category: "Food & Drink",
    type: "app",
  },
  "solitaire-grand-harvest": {
    name: "Solitaire Grand Harvest",
    category: "Casual / Card Game",
    type: "game",
  },
  "subway-surfers": {
    name: "Subway Surfers",
    category: "Casual / Endless Runner",
    type: "game",
  },
  dave: {
    name: "Dave",
    category: "Finance / Neo-bank + Cash Advance",
    type: "app",
  },
  cleo: {
    name: "Cleo",
    category: "Finance / Personal finance",
    type: "app",
  },
  "capybara-go": {
    name: "Capybara Go!",
    category: "Roguelite",
    type: "game",
  },
  "clash-of-clans": {
    name: "Clash of Clans",
    category: "Strategy",
    type: "game",
  },
  canva: {
    name: "Canva",
    category: "Design",
    type: "app",
  },
  tiimo: {
    name: "Tiimo",
    category: "Productivity / Planning",
    type: "app",
  },
  "royal-match": {
    name: "Royal Match",
    category: "Casual / Match-three",
    type: "game",
  },
  acorns: {
    name: "Acorns",
    category: "Finance / Automated Investing",
    type: "app",
  },
  wakeout: {
    name: "Wakeout",
    category: "Fitness / Movement Reminders",
    type: "app",
  },
  steam: {
    name: "Steam (iOS)",
    category: "Gaming / Digital Storefront and Community",
    type: "app",
  },
  strava: {
    name: "Strava",
    category: "Fitness / Activity Tracking and Social",
    type: "app",
  },
  doordash: {
    name: "DoorDash",
    category: "Commerce / Food and Grocery Delivery",
    type: "app",
  },
  ladder: {
    name: "Ladder",
    category: "Fitness / Coached Training",
    type: "app",
  },
  freeletics: {
    name: "Freeletics",
    category: "Fitness / AI Coaching",
    type: "app",
  },
  fiton: {
    name: "FitOn",
    category: "Fitness / Workout Video Platform",
    type: "app",
  },
  gymverse: {
    name: "Gymverse",
    category: "Fitness / Gym Training",
    type: "app",
  },
  "fc-mobile": {
    name: "FC Mobile",
    category: "Sports / Football management",
    type: "game",
  },
  liftoff: {
    name: "Liftoff",
    category: "Fitness / Strength Ranking",
    type: "app",
  },
  uptime: {
    name: "Uptime",
    category: "Learning / Micro-learning",
    type: "app",
  },
  swgoh: {
    name: "Star Wars: Galaxy of Heroes",
    category: "Collectible RPG",
    type: "game",
  },
  calm: {
    name: "Calm",
    category: "Wellness / Meditation",
    type: "app",
  },
  "insight-timer": {
    name: "Insight Timer",
    category: "Wellness / Meditation",
    type: "app",
  },
  tripsy: {
    name: "Tripsy",
    category: "Travel / Trip Planning",
    type: "app",
  },
  picsart: {
    name: "PicsArt",
    category: "Creative",
    type: "app",
  },
  "fortune-city": {
    name: "Fortune City",
    category: "Finance",
    type: "app",
  },
  "chrome-valley-customs": {
    name: "Chrome Valley Customs",
    category: "Puzzle / Meta",
    type: "game",
  },
  "match-creek-motors": {
    name: "Match Creek Motors",
    category: "Puzzle / Meta",
    type: "game",
  },
  "fifa-panini-collection": {
    name: "FIFA Panini Collection",
    category: "Sports / Collectibles",
    type: "app",
  },
};

// Which v4.1 apps apply which library-entry name, across the whole corpus —
// filled as the main loop below runs, read once after it to report each
// held-back merge's live split status (see the report after the loop).
// Only v4.1 apps ever populate this: the split condition is explicitly
// "apps analysed under the current model," so a v3 app's tags, however
// suggestive, never count toward it and are never added here.
const tagNameAppearances = new Map(); // libraryEntryName -> Set(appId)

// Which mechanic-block shape (old or new voice) each v4.1 app's own content
// file uses, filled as the main loop below runs, read once after it to
// report the sweep's live progress the same way the held-back merge status
// is reported. An app can carry a mix — mechanicBlockFields() detects shape
// per block, not per app — so this records every shape actually seen, not
// just one. Delete alongside the old-shape parsing branch in
// parseContentV41 once every app has moved to the new shape.
const mechanicBlockShapesByApp = new Map(); // appId -> Set("old"|"new")

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

    // An applied tag with no composed block is no longer a defect (voice
    // rewrite, 30 Sep 2026): the friend test can hold a mechanic back when
    // nothing about it is worth a block, and a held-back mechanic stays
    // tagged in the analysis with its gap recorded in
    // sources/coverage/<app>.md instead of forcing a page onto the site.
    // Noted rather than silent, so a genuinely missing block (one that
    // should have been written but wasn't) is still visible in build
    // output — just not fatal to the build.
    const appliedTagNames = new Set(content.observations.flatMap((o) => o.tags.map((t) => t.name)));
    for (const tagName of appliedTagNames) {
      if (!content.mechanicWriteups.some((w) => w.name === tagName))
        console.log(`note: ${entry.id} applied tag "${tagName}" has no composed mechanic block — held back by the friend test, or still missing; check sources/coverage/${entry.id}.md`);
    }

    // Voice-rewrite sweep progress (see mechanicBlockShapesByApp above): a
    // block is on the new shape once it carries howItWorks, old otherwise —
    // the same signal the templates use to pick a render path.
    for (const w of content.mechanicWriteups) {
      if (!mechanicBlockShapesByApp.has(entry.id)) mechanicBlockShapesByApp.set(entry.id, new Set());
      mechanicBlockShapesByApp.get(entry.id).add(w.howItWorks ? "new" : "old");
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

      // Feeds the held-back-merge split-status report printed after the main
      // loop below (see tagNameAppearances above) — only v4.1 apps ever reach
      // this line, which is exactly the population the split condition asks for.
      if (!tagNameAppearances.has(tagName)) tagNameAppearances.set(tagName, new Set());
      tagNameAppearances.get(tagName).add(entry.id);
    }
    for (const [id, names] of namesByMechanicId) {
      if (names.length > 1)
        console.log(`note: ${entry.id} applies ${names.length} library entries onto one site mechanic "${id}": ${names.join(", ")}`);
    }

    const icons = resolveIcons(entry.id);
    // Screenshots attach to observations under this model (spec §6.2): the
    // key is {appId}_{observationId}, e.g. "dave_O11" — not the old
    // {mechanicId}_{appId} scheme the v3 branch below still uses. Existing
    // entries written under the old scheme are not migrated automatically
    // by this change: a screenshot was captured to illustrate one specific
    // observation, and only a person who looked at it can say which
    // observation that was, so re-keying each app's pre-existing shots
    // stays separate, manual work, done as each one comes up for re-capture
    // rather than guessed at here.
    for (const obs of content.observations) {
      const rawShots = (SCREENSHOTS[entry.id + "_" + obs.id] ?? [])
        .map((p) => (typeof p === "string" ? { src: p, caption: null } : { src: p.src, caption: p.caption ?? null }));
      const registered = rawShots.filter((p) => fs.existsSync(path.join(repo, p.src)));
      obs.screenshots = registered.map((p) => ({ src: "/" + p.src, caption: p.caption }));
    }
    // Collect assets to sync into public/ — but never for report-only apps.
    if (entry.visibility !== "report-only") {
      for (const icon of icons) publicAssets.add(icon);
      for (const obs of content.observations) for (const s of obs.screenshots) publicAssets.add(s.src.slice(1));
    }
    // A found icon file is only ever withheld from the publicAssets sync
    // above; the field below used to be set from `icons` unconditionally,
    // so a report-only app with a real icon file on disk (Gymverse's, once
    // unpublished under the three-tag minimum, 16 Sep 2026) got a real path
    // written into its own JSON — exactly what validate-content.mjs's own
    // report-only-must-ship-no-assets check exists to catch, sitting right
    // next to the code that was supposed to prevent it. Gating this value on
    // the same condition as the sync above closes that gap at the source
    // instead of leaving it live for the next report-only app with an icon.
    const iconPath = entry.visibility === "report-only" ? null : icons[0] ? "/" + icons[0] : null;

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
      icon: iconPath,
      heroImage: resolveHeroImage(entry.id),
      contentFormat: "v4.1",
      observations: content.observations,
      systemView: content.systemView,
      mechanicWriteups: content.mechanicWriteups,
      sectionLeadIns: content.sectionLeadIns,
      sectionCards: content.sectionCards,
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
  // Same gap as the v4.1 branch above (see its comment): the sync guard
  // above only ever withheld a found icon from being copied, not from being
  // named in the app's own JSON. Not live for any v3 app today (no current
  // report-only entry has a matching icon file), but fixed here too rather
  // than left for the next one to trip over.
  const iconPath = entry.visibility === "report-only" ? null : icons[0] ? "/" + icons[0] : null;

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
    icon: iconPath,
    heroImage: resolveHeroImage(entry.id),
    mechanics: relationships,
    system: buildSystemMap(entry.id),
  });
}
commitRegenerate("apps");

// Voice-rewrite sweep progress: which mechanic-block shape each v4.1 app is
// on, computed fresh on every build from mechanicBlockShapesByApp (filled as
// the main loop ran) rather than tracked by hand — the same reasoning as
// the held-back merge report below. Delete this report, and
// mechanicBlockShapesByApp above, once every app prints "new" and the old
// shape is removed from the parser, schema, and templates.
{
  const allOld = [], allNew = [], mixed = [];
  for (const [appId, shapes] of mechanicBlockShapesByApp) {
    if (shapes.size === 0) continue; // no mechanic blocks at all — nothing to report
    if (shapes.has("old") && shapes.has("new")) mixed.push(appId);
    else if (shapes.has("new")) allNew.push(appId);
    else allOld.push(appId);
  }
  console.log("\nMechanic block shape (voice rewrite sweep):");
  console.log(`  new shape (${allNew.length}): ${allNew.sort().join(", ") || "none"}`);
  console.log(`  old shape (${allOld.length}): ${allOld.sort().join(", ") || "none"}`);
  if (mixed.length) console.log(`  mixed within one app (${mixed.length}): ${mixed.sort().join(", ")}`);
}

// Each held-back merge's split status, computed fresh on every build rather
// than hand-maintained (sources/taxonomy-map.md, "The merge-split
// procedure" in sources/repo-notes.md) — a hand-kept list of which apps
// carry which side is exactly the record that went stale as apps migrated.
// The two library-entry names behind a merged id live in
// CANONICAL_MECHANIC_IDS (inverted below); which v4.1 apps applied each
// name as its own tag lives in tagNameAppearances, built above as the main
// loop ran. The split condition (repo-notes.md): at least two apps, each
// independently applying BOTH names as separate tags.
{
  const namesByHeldBackId = new Map();
  for (const [name, id] of Object.entries(CANONICAL_MECHANIC_IDS)) {
    if (!HELD_BACK_MECHANIC_IDS.has(id)) continue;
    if (!namesByHeldBackId.has(id)) namesByHeldBackId.set(id, []);
    namesByHeldBackId.get(id).push(name);
  }
  console.log("\nHeld-back merge split status:");
  for (const id of HELD_BACK_MECHANIC_IDS) {
    const names = namesByHeldBackId.get(id) ?? [];
    if (names.length !== 2) {
      console.log(`  ${id}: expected 2 library entries mapped to it, found ${names.length} (${names.join(", ")}) — check CANONICAL_MECHANIC_IDS`);
      continue;
    }
    const [nameA, nameB] = names;
    const appsA = tagNameAppearances.get(nameA) ?? new Set();
    const appsB = tagNameAppearances.get(nameB) ?? new Set();
    const both = [...appsA].filter((a) => appsB.has(a)).sort();
    const onlyA = [...appsA].filter((a) => !appsB.has(a)).sort();
    const onlyB = [...appsB].filter((a) => !appsA.has(a)).sort();
    const met = both.length >= 2;
    console.log(`  ${id} (${nameA} / ${nameB}): split condition ${met ? "MET" : "not met"}`);
    console.log(`    both sides (${both.length}): ${both.join(", ") || "none"}`);
    console.log(`    ${nameA} only (${onlyA.length}): ${onlyA.join(", ") || "none"}`);
    console.log(`    ${nameB} only (${onlyB.length}): ${onlyB.join(", ") || "none"}`);
  }
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
      featuredMechanics: ["energy-lives", "clans-guilds", "season-pass", "streak", "leaderboard"],
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
