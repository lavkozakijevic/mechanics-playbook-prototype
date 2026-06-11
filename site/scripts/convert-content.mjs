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
    ";__o={MECHANICS,APPS,SYSTEMS,RICH_DESCRIPTIONS,SCREENSHOTS,CHEATSHEETS};",
  ctx
);
const { MECHANICS, APPS, SYSTEMS, RICH_DESCRIPTIONS, SCREENSHOTS, CHEATSHEETS } = ctx.__o;

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
function parseAnalysis(file) {
  const md = fs.readFileSync(path.join(repo, "sources/analyses", file), "utf8");
  const meta = {};
  for (const [, k, v] of md.matchAll(/^\*\*([^:*]+):\*\*\s*(.+)$/gm)) meta[k.trim()] = v.trim();
  // Observed mechanics: "### Name (`id`) · Level"
  const observed = [...md.matchAll(/^### .+?\(`([a-z0-9-]+)`\)\s*·\s*(\w+)/gm)].map((m) => ({
    id: m[1],
    depth: m[2].toLowerCase(),
  }));
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
  // Handles compound strings like "12 May 2026 (Session 1), ..." by taking the first date only.
  if (!s) return null;
  const cleaned = s.replace(/\s*\(.*/, "").trim();
  const d = new Date(cleaned + " UTC");
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
  // appId → [{ id, depth }]  (corrections §3b)
  "royal-match": [{ id: "gifting", depth: "supporting" }],
  "canva": [{ id: "credits-tokens", depth: "supporting" }],
  "capybara-go": [
    { id: "first-purchase-bonus", depth: "supporting" },
    { id: "cosmetics", depth: "shallow" },
  ],
  "clash-of-clans": [{ id: "gifting", depth: "supporting" }],
};
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
]);

const ALL_APPS = [
  { file: "royal-match.md", id: "royal-match", visibility: "public" },
  { file: "cleo.md", id: "cleo", visibility: "report-only" },
  // Batch 1
  { file: "calm.md", id: "calm", visibility: "subscriber" },
  { file: "canva.md", id: "canva", visibility: "subscriber" },
  { file: "capybara-go.md", id: "capybara-go", visibility: "subscriber" },
  { file: "chrome-valley-customs.md", id: "chrome-valley-customs", visibility: "subscriber" },
  { file: "clash-of-clans.md", id: "clash-of-clans", visibility: "subscriber" },
];

fs.rmSync(path.join(out, "apps"), { recursive: true, force: true });
fs.mkdirSync(path.join(out, "apps"), { recursive: true });

const knownMechanicIds = new Set([...MECHANICS.map((m) => m.id), ...NEW_MECHANICS.map((m) => m.id)]);

for (const entry of ALL_APPS) {
  const a = parseAnalysis(entry.file);
  const v44 = APPS.find((x) => x.id === entry.id) ?? null;
  const sys = SYSTEMS.find((s) => s.app_id === entry.id) ?? null;

  // relationship set
  const rels = [...a.observed];
  for (const add of ADDITIONS[entry.id] ?? []) {
    if (!rels.some((r) => r.id === add.id)) rels.push(add);
  }
  for (const u of a.unrecognized) {
    if ((u === "hard-currency" || u === "soft-currency") && !rels.some((r) => r.id === u)) {
      rels.push({ id: u, depth: CURRENCY_DEPTH, provisionalDepth: true });
    }
  }
  const relationships = rels
    .filter((r) => !DROPS.has(r.id + "|" + entry.id))
    .map((r) => {
      if (!knownMechanicIds.has(r.id)) throw new Error("unknown mechanic " + r.id + " in " + entry.file);
      const writeup = splitWriteup(RICH_DESCRIPTIONS[r.id + "_" + entry.id] ?? null);
      const registered = (SCREENSHOTS[r.id + "_" + entry.id] ?? []).filter((p) =>
        fs.existsSync(path.join(repo, p))
      );
      return {
        id: r.id,
        depth: r.depth,
        ...(r.provisionalDepth ? { provisionalDepth: true } : {}),
        writeup,
        screenshots: registered.map((p) => "/" + p),
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
      connections: (CONNECTIONS[entry.id] ?? []).map((c) => ({
        from: c.from,
        to: c.to,
        title: c.title,
        desc: c.desc,
        effect: c.effect,
      })),
    };
  }

  const iconCandidates = [`icons/${entry.id}.png`, `icons/${entry.id}.webp`];
  const icon = iconCandidates.find((p) => fs.existsSync(path.join(repo, p)));

  write("apps", entry.id, {
    id: entry.id,
    name: v44?.name ?? a.meta["ID"] === entry.id ? headerName(entry.file) : entry.id,
    category: v44?.cat ?? a.meta["Category"] ?? "",
    type: v44?.type ?? (a.meta["Type"] ?? "app").toLowerCase(),
    visibility: entry.visibility,
    analysisDate: isoDate(a.meta["Analysis date"]),
    lastUpdated: isoDate(a.meta["Last updated"]) ?? isoDate(a.meta["Analysis date"]),
    summary: v44?.summary ?? a.overview,
    icon: icon ? "/" + icon : null,
    heroImage: fs.existsSync(path.join(here, "../public/images", entry.id + "-pass-lives.webp"))
      ? "/images/" + entry.id + "-pass-lives.webp"
      : null,
    mechanics: relationships,
    system,
  });
}

function headerName(file) {
  const md = fs.readFileSync(path.join(repo, "sources/analyses", file), "utf8");
  return md.match(/^# (.+)$/m)[1].trim();
}

// -------------------------------------------------------------- settings
fs.mkdirSync(path.join(out, "settings"), { recursive: true });
fs.writeFileSync(
  path.join(out, "settings", "homepage.json"),
  JSON.stringify(
    {
      id: "homepage",
      // Editorial picks. Royal Match per the page requirements guide.
      spotlightApp: "royal-match",
      showcaseSystem: "royal-match",
      featuredMechanics: ["energy-lives", "limited-time-events", "clans-guilds", "season-pass"],
      // Counted from v44 data.js at conversion time until cheatsheets migrate
      // in Stage 2 — computed, never hardcoded.
      cheatsheetCount: CHEATSHEETS.length,
    },
    null,
    2
  )
);

function write(coll, id, obj) {
  fs.writeFileSync(path.join(out, coll, id + ".json"), JSON.stringify(obj, null, 2));
}

console.log(`converted: ${mechanicCount} mechanics, ${ALL_APPS.length} apps`);
