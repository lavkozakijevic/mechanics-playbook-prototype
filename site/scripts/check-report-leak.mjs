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
console.log(`Report-only leak check passed: ${terms.length / 2} report-only apps, zero traces in dist/.`);
