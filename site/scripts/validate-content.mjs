/**
 * Content validation — runs before every build (migration brief, Stage 3).
 *
 * Checks, in plain language, that:
 *  1. every mechanic referenced by an app exists in the mechanics collection
 *  2. every system connection points at nodes that exist on that system map
 *  3. every screenshot, icon, and hero image path resolves under site/public
 *  4. required fields are present on every app and mechanic
 *  5. dates are real dates in YYYY-MM-DD form
 *  6. every content item carries a valid visibility value
 *  7. the homepage settings never point at report-only content
 *
 * Any failure prints the file name and the problem, then exits non-zero so
 * the build (and therefore any deploy) stops.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const content = path.resolve(here, "../src/content");
const pub = path.resolve(here, "../public");

const problems = [];
function problem(file, message) {
  problems.push(`${file}: ${message}`);
}

function readCollection(name) {
  const dir = path.join(content, name);
  if (!fs.existsSync(dir)) {
    problem(name + "/", "the whole folder is missing — run the conversion script first");
    return [];
  }
  return fs.readdirSync(dir).filter((f) => f.endsWith(".json")).map((f) => ({
    file: `${name}/${f}`,
    data: JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")),
  }));
}

const VISIBILITIES = ["public", "subscriber", "report-only"];
const DEPTHS = ["core", "supporting", "shallow", "unusual"];
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function validDate(s) {
  if (!DATE_RE.test(s)) return false;
  const d = new Date(s + "T00:00:00Z");
  return !isNaN(d) && d.toISOString().slice(0, 10) === s;
}

const mechanics = readCollection("mechanics");
const apps = readCollection("apps");
const mechanicIds = new Set(mechanics.map((m) => m.data.id));

// ---- mechanics: required fields + visibility
for (const { file, data } of mechanics) {
  for (const field of ["id", "name", "cat", "tagline", "desc"]) {
    if (!data[field]) problem(file, `the "${field}" field is missing or empty`);
  }
  if (!VISIBILITIES.includes(data.visibility))
    problem(file, `visibility is "${data.visibility}" — it must be one of: ${VISIBILITIES.join(", ")}`);
}

// ---- apps
for (const { file, data } of apps) {
  for (const field of ["id", "name", "summary"]) {
    if (!data[field]) problem(file, `the "${field}" field is missing or empty`);
  }
  if (!VISIBILITIES.includes(data.visibility))
    problem(file, `visibility is "${data.visibility}" — it must be one of: ${VISIBILITIES.join(", ")}`);

  if (data.analysisDate !== null && !validDate(data.analysisDate))
    problem(file, `analysisDate "${data.analysisDate}" is not a real YYYY-MM-DD date`);
  if (data.lastUpdated !== null && !validDate(data.lastUpdated))
    problem(file, `lastUpdated "${data.lastUpdated}" is not a real YYYY-MM-DD date`);
  if (data.analysisDate === null)
    problem(file, "analysisDate is empty — the analysis file's date line probably failed to parse");

  // relationships
  for (const m of data.mechanics ?? []) {
    if (!mechanicIds.has(m.id))
      problem(file, `references mechanic "${m.id}" which does not exist in the mechanics library`);
    if (!DEPTHS.includes(m.depth))
      problem(file, `mechanic "${m.id}" has depth "${m.depth}" — it must be one of: ${DEPTHS.join(", ")}`);
    for (const shot of m.screenshots ?? []) {
      if (!fs.existsSync(path.join(pub, shot)))
        problem(file, `screenshot ${shot} does not exist under site/public — it would be a broken image on the live site`);
    }
  }

  // images
  if (data.icon && !fs.existsSync(path.join(pub, data.icon)))
    problem(file, `icon ${data.icon} does not exist under site/public — it would be a broken image on the live site`);
  if (data.heroImage && !fs.existsSync(path.join(pub, data.heroImage)))
    problem(file, `hero image ${data.heroImage} does not exist under site/public`);

  // system map integrity
  if (data.system) {
    const nodeIds = new Set(data.system.nodes.map((n) => n.id));
    for (const c of data.system.connections) {
      if (!nodeIds.has(c.from))
        problem(file, `system connection "${c.title}" starts at "${c.from}" but that node is not on the map`);
      if (!nodeIds.has(c.to))
        problem(file, `system connection "${c.title}" ends at "${c.to}" but that node is not on the map`);
    }
    for (const r of data.system.roles) {
      if (!mechanicIds.has(r.id))
        problem(file, `system role list mentions "${r.id}" which does not exist in the mechanics library`);
    }
    if (!data.system.center) problem(file, "system map has no center point");
  }

  // report-only assets must never be synced into public
  if (data.visibility === "report-only") {
    if (data.icon) problem(file, "report-only app has an icon path — report-only content must not ship any assets");
    for (const m of data.mechanics ?? []) {
      if ((m.screenshots ?? []).length)
        problem(file, "report-only app has screenshots — report-only content must not ship any assets");
    }
  }
}

// ---- homepage settings must not reference report-only content
const settingsPath = path.join(content, "settings", "homepage.json");
if (!fs.existsSync(settingsPath)) {
  problem("settings/homepage.json", "file is missing");
} else {
  const home = JSON.parse(fs.readFileSync(settingsPath, "utf8"));
  const appById = new Map(apps.map((a) => [a.data.id, a.data]));
  const mechById = new Map(mechanics.map((m) => [m.data.id, m.data]));
  for (const key of ["spotlightApp", "showcaseSystem"]) {
    const id = home[key];
    if (!appById.has(id)) problem("settings/homepage.json", `${key} points at "${id}" which is not an app`);
    else if (appById.get(id).visibility === "report-only")
      problem("settings/homepage.json", `${key} points at "${id}" which is report-only and must never appear on the site`);
  }
  for (const id of home.featuredMechanics ?? []) {
    if (!mechById.has(id)) problem("settings/homepage.json", `featuredMechanics includes "${id}" which is not a mechanic`);
    else if (mechById.get(id).visibility === "report-only")
      problem("settings/homepage.json", `featuredMechanics includes "${id}" which is report-only`);
  }
  if (typeof home.cheatsheetCount !== "number")
    problem("settings/homepage.json", "cheatsheetCount is missing or not a number");
  if (!Array.isArray(home.iconStripApps) || home.iconStripApps.length === 0) {
    problem("settings/homepage.json", "iconStripApps is missing or empty — the icon strip is curated here");
  } else {
    for (const id of home.iconStripApps) {
      if (!appById.has(id)) problem("settings/homepage.json", `iconStripApps includes "${id}" which is not an app`);
      else if (appById.get(id).visibility === "report-only")
        problem("settings/homepage.json", `iconStripApps includes "${id}" which is report-only and must never appear on the site`);
    }
  }
}

// ---- cheatsheets: mechanic + app references
const cheatsheets = readCollection("cheatsheets");
const appIds = new Set(apps.map((a) => a.data.id));
for (const { file, data } of cheatsheets) {
  for (const id of data.mechanics ?? []) {
    if (!mechanicIds.has(id))
      problem(file, `references mechanic "${id}" which does not exist in the mechanics library`);
  }
  for (const id of data.apps ?? []) {
    if (!appIds.has(id))
      problem(file, `references app "${id}" which does not exist in the apps collection`);
  }
  for (const step of data.steps ?? []) {
    for (const id of step.apps ?? []) {
      if (!appIds.has(id))
        problem(file, `step "${step.heading}" references app "${id}" which does not exist`);
    }
  }
}

// ---- glossary: mechanic references
const glossary = readCollection("glossary");
for (const { file, data } of glossary) {
  for (const id of data.related ?? []) {
    if (!mechanicIds.has(id))
      problem(file, `references mechanic "${id}" which does not exist in the mechanics library`);
  }
}

// ---- result
if (problems.length) {
  console.error(`Content validation failed — ${problems.length} problem(s):\n`);
  for (const p of problems) console.error("  ✗ " + p);
  console.error("\nThe build was stopped so these cannot reach the live site.");
  process.exit(1);
}
console.log(`Content validation passed: ${apps.length} apps, ${mechanics.length} mechanics, ${cheatsheets.length} cheatsheets, ${glossary.length} glossary terms, settings OK.`);
