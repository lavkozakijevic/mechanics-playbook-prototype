/**
 * Proves protected content is not in anything the public can fetch.
 *
 * Takes distinctive text from every protected field of every app that is NOT
 * free (declared subscriber) and fails the build if any of it appears in
 * dist/client: every prerendered page, script, JSON file, sitemap and stylesheet.
 * Also fails if a case-study or system page for such an app exists as a file,
 * and if a protected image file is reachable outside /protected/.
 *
 * To be sure it is not passing by looking at nothing, it also requires the same
 * text to be present in the server bundle (dist/server), where the content
 * renders from on request.
 *
 * Runs on every build, whether the review window is open or not (the window is a
 * runtime switch on the Worker; nothing here depends on it).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { collectNeedles, coverage, findLeaks, forbiddenPaths } from "../src/lib/protected-leak.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const content = path.resolve(here, "../src/content");
const client = path.resolve(here, "../dist/client");
const server = path.resolve(here, "../dist/server");

const TEXT_EXT = /\.(html|js|mjs|cjs|json|xml|txt|css|map|webmanifest|svg)$/i;
const MIN_NEEDLES = 200;
const MIN_COVERAGE = 0.9;

const readJson = (f) => JSON.parse(fs.readFileSync(f, "utf8"));
const list = (dir) => (fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith(".json")).map((f) => readJson(path.join(dir, f))) : []);

function walkFiles(dir, accept) {
  const out = [];
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) out.push(...walkFiles(p, accept));
    else if (accept(p)) out.push(p);
  }
  return out;
}

for (const dir of [client, server]) {
  if (!fs.existsSync(dir)) {
    console.error(`protected-leak check: ${dir} is missing. Build first (astro build).`);
    process.exit(1);
  }
}

const apps = list(path.join(content, "apps"));
const locked = apps.filter((a) => a.visibility === "subscriber");
const free = apps.filter((a) => a.visibility === "public");

// All text that is public on purpose: it is not a leak if a locked app happens
// to share a sentence with it.
const publicCorpus = JSON.stringify([
  free,
  list(path.join(content, "mechanics")),
  list(path.join(content, "glossary")),
  list(path.join(content, "cheatsheets")).filter((c) => c.visibility === "public"),
  list(path.join(content, "shortcasts")),
  list(path.join(content, "categories")),
  list(path.join(content, "settings")),
  // the locked apps' own public fields
  locked.map((a) => ({ summary: a.summary, teaser: a.teaser, name: a.name, tagline: a.system?.tagline, writeups: (a.mechanicWriteups ?? []).map((w) => [w.summary, w.title]) })),
]);

const needles = collectNeedles(locked, publicCorpus);
const problems = [];

if (needles.length < MIN_NEEDLES) {
  problems.push(`only ${needles.length} protected strings were collected (expected at least ${MIN_NEEDLES}); the scan would prove too little`);
}

// 1. nothing protected in anything public
const files = new Map();
for (const f of walkFiles(client, (p) => TEXT_EXT.test(p))) files.set(path.relative(client, f), fs.readFileSync(f, "utf8"));
const leaks = findLeaks(files, needles);
for (const l of leaks.slice(0, 20)) problems.push(`protected text from ${l.appId} (${l.path}) is in public file ${l.file}: "${l.needle.slice(0, 50)}..."`);
if (leaks.length > 20) problems.push(`...and ${leaks.length - 20} more`);

// 2. no page for a locked app is built as a file
for (const rel of forbiddenPaths(locked)) {
  if (fs.existsSync(path.join(client, rel))) problems.push(`${rel}/ exists in dist/client but ${rel.split("/")[1]} is not a free app: it must render on request only`);
}

// 3. protected images are only under /protected/
const protectedImages = new Set();
const grab = (v) => {
  if (typeof v === "string") { if (v.startsWith("/protected/")) protectedImages.add(v); }
  else if (Array.isArray(v)) v.forEach(grab);
  else if (v && typeof v === "object") Object.values(v).forEach(grab);
};
locked.forEach(grab);
const publicFiles = walkFiles(client, (p) => !path.relative(client, p).startsWith("protected" + path.sep));
for (const img of protectedImages) {
  if (!fs.existsSync(path.join(client, img))) problems.push(`${img} is named in the content but is not in dist/client/protected/`);
  const base = path.basename(img);
  for (const f of publicFiles) if (path.basename(f) === base) problems.push(`protected image ${base} is also at a public path: ${path.relative(client, f)}`);
}

// 4. the scan is looking at something: the text is in the server bundle
const serverText = walkFiles(server, (p) => /\.(mjs|js|json)$/.test(p)).map((f) => fs.readFileSync(f, "utf8")).join("\n");
const cov = coverage(serverText, needles);
if (cov < MIN_COVERAGE) problems.push(`only ${(cov * 100).toFixed(0)}% of the protected strings are in the server bundle (expected at least ${MIN_COVERAGE * 100}%); the scan may be looking for the wrong thing`);

if (problems.length) {
  console.error("\nPROTECTED CONTENT CHECK FAILED\n");
  for (const p of problems) console.error("  ✗ " + p);
  console.error("\nContent that is not free must never appear in a file the public can fetch.\n");
  process.exit(1);
}
console.log(
  `protected-leak check: ${needles.length} protected strings from ${locked.length} locked apps; none in ${files.size} public files; ` +
    `${(cov * 100).toFixed(0)}% found in the server bundle; ${protectedImages.size} protected images, all under /protected/.`
);
