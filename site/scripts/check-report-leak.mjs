/**
 * Report-only leak check — runs after every build (migration brief, Stage 3).
 *
 * Scans every text file in dist/ for the IDs and names of report-only apps.
 * The report-only list is read from the content collection itself, so newly
 * imported report-only apps are covered automatically. Any hit fails the
 * build, which means a leaking build can never reach Cloudflare.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const dist = path.resolve(here, "../dist");
const appsDir = path.resolve(here, "../src/content/apps");

if (!fs.existsSync(dist)) {
  console.error("check-report-leak: dist/ does not exist — run the build first.");
  process.exit(1);
}

// Collect the terms that must never appear: report-only app IDs and names.
const terms = [];
for (const f of fs.readdirSync(appsDir)) {
  const a = JSON.parse(fs.readFileSync(path.join(appsDir, f), "utf8"));
  if (a.visibility === "report-only") {
    terms.push(a.id, a.name);
  }
}
if (!terms.length) {
  console.error("check-report-leak: no report-only apps found in content — that is unexpected; failing safe.");
  process.exit(1);
}
const patterns = terms.map((t) => ({
  term: t,
  // word-boundary, case-insensitive, regex-escaped
  re: new RegExp("\\b" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b", "i"),
}));

const TEXT_EXT = new Set([".html", ".xml", ".json", ".js", ".css", ".txt", ".svg", ".webmanifest"]);
const hits = [];
function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p);
    else if (TEXT_EXT.has(path.extname(name))) {
      const body = fs.readFileSync(p, "utf8");
      for (const { term, re } of patterns) {
        if (re.test(body)) hits.push(`${path.relative(dist, p)} contains "${term}"`);
      }
    } else {
      // binary files: a report-only asset reaching dist is also a leak
      for (const { term, re } of patterns) {
        if (re.test(name)) hits.push(`${path.relative(dist, p)} — file name contains "${term}"`);
      }
    }
  }
}
walk(dist);

if (hits.length) {
  console.error(`Report-only leak check FAILED — ${hits.length} hit(s):\n`);
  for (const h of hits) console.error("  ✗ " + h);
  console.error("\nReport-only content must never appear in the deployed output. Build stopped.");
  process.exit(1);
}

// Example-block guard (owner ruling, 17 Jun 2026): a defined set of apps must
// never render as worked examples on mechanic pages, even when they are
// otherwise published. cleo and acorns ship as finance hero logos / case
// studies, so the report-only scan above does not cover them — check the
// mechanic pages directly for a case-study link to any barred app, which only
// appears when that app is rendered as an example.
const EXAMPLE_EXCLUDED_IDS = ["cleo", "dave", "acorns", "starling-bank", "orbit", "george-app-erste-serbia"];
const mechDir = path.join(dist, "mechanics");
const exampleHits = [];
if (fs.existsSync(mechDir)) {
  const walkMech = (dir) => {
    for (const name of fs.readdirSync(dir)) {
      const p = path.join(dir, name);
      const st = fs.statSync(p);
      if (st.isDirectory()) walkMech(p);
      else if (path.extname(name) === ".html") {
        const body = fs.readFileSync(p, "utf8");
        for (const id of EXAMPLE_EXCLUDED_IDS) {
          if (body.includes(`/case-studies/${id}/`))
            exampleHits.push(`${path.relative(dist, p)} renders barred example app "${id}"`);
        }
      }
    }
  };
  walkMech(mechDir);
}
if (exampleHits.length) {
  console.error(`Example-block guard FAILED — ${exampleHits.length} hit(s):\n`);
  for (const h of exampleHits) console.error("  ✗ " + h);
  console.error("\nThese apps must not render as mechanic-page examples. Build stopped.");
  process.exit(1);
}

console.log(
  `Report-only leak check passed: ${terms.length / 2} report-only apps, zero traces in dist/; ` +
    `example-block guard passed: ${EXAMPLE_EXCLUDED_IDS.length} barred apps, none rendered as examples.`
);
