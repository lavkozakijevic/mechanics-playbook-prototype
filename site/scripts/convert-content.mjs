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
  // Partner cross-promotion (Runna, Apple Fitness+, partner-named challenges)
  // and the app's own subscription upsell are not published as an advertising
  // or monetization mechanic: the content rules limit advertising coverage to
  // actual ad units (rewarded video, interstitial, banner, offerwall), and none
  // were observed. The partnerships are described inside the challenge write-up.
  "Advertisement Exposure": null,
};

function parseAnalysis(file) {
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
    for (const m of md.matchAll(/^###\s+([^·\n]+?)\s*·\s*(Core|Supporting|Shallow|Unusual)\b/gm)) {
      const name = m[1].trim();
      if (!(name in CANONICAL_MECHANIC_IDS))
        throw new Error(`${file}: mechanic heading "${name}" has no canonical mapping`);
      const id = CANONICAL_MECHANIC_IDS[name];
      if (!id) continue;
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
    visibility: m.id === "streak" ? "public" : "subscriber",
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
    visibility: "subscriber",
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
const ROTATING_FREE_APP = "uptime";

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
  // Report-only remainder (never appear in deployed output)
  { file: "orbit.md", id: "orbit", visibility: "report-only" },
  { file: "dave.md", id: "dave", visibility: "report-only" },
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

for (const entry of ALL_APPS) {
  const a = parseAnalysis(entry.file);
  const v44 = APPS.find((x) => x.id === entry.id) ?? null;
  const sys = SYSTEMS.find((s) => s.app_id === entry.id) ?? null;

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

  // system map: nodes from POSITIONS (skip "center"), connections from CONNECTIONS
  let system = null;
  if (sys) {
    const pos = POSITIONS[entry.id] ?? {};
    const nodes = Object.entries(pos)
      .filter(([k]) => k !== "center")
      .map(([id, p]) => ({ id, x: p.x, y: p.y }));
    system = {
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
      connections: (CONNECTIONS[entry.id] ?? [])
        .filter((c) => {
          const ok = pos[c.from] && pos[c.to];
          if (!ok) console.warn(`note: ${entry.id} connection ${c.from}->${c.to} has no position; skipped (matches live site)`);
          return ok;
        })
        .map((c) => ({
          from: c.from,
          to: c.to,
          title: c.title,
          desc: c.desc,
          effect: c.effect,
        })),
    };
  }

  const iconCandidates = [`icons/${entry.id}.png`, `icons/${entry.id}.webp`, `icons/${entry.id}.jpg`];
  const icons = iconCandidates.filter((p) => fs.existsSync(path.join(repo, p)));

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
    visibility: entry.id === ROTATING_FREE_APP ? "public" : entry.visibility,
    analysisDate: isoDate(a.meta["Analysis date"]),
    lastUpdated: isoDate(a.meta["Last updated"]) ?? isoDate(a.meta["Analysis date"]),
    summary: v44?.summary ?? a.overview,
    icon: icons[0] ? "/" + icons[0] : null,
    heroImage: (() => {
      const imageCandidates = [
        entry.id + "-case-study.png", entry.id + "-case-study.webp", entry.id + "-case-study.jpg",
        entry.id + "-pass-lives.webp", entry.id + "-pass-lives.png",
      ];
      const found = imageCandidates.find((f) => fs.existsSync(path.join(here, "../public/images", f)));
      return found ? "/images/" + found : null;
    })(),
    mechanics: relationships,
    system,
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
