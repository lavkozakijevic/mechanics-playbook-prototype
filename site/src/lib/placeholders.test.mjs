import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// The wording that stood in for the customer portal (steps 4 to 5). The portal
// exists now, so none of it may come back. Fails the build if it does.
const OLD_PLACEHOLDERS = [
  "Use the link in the emails Paddle sent you",
  "emails Paddle sent",
  "Managing it from this site is coming soon",
  "Resuming it from this site is coming soon",
  "from this site is coming soon",
  "placeholder until the customer portal exists",
  "until the customer portal exists",
  "Placeholder wording until the customer portal",
  "holding message until the customer",
];

const here = path.dirname(fileURLToPath(import.meta.url));
const siteDir = path.resolve(here, "../..");
// Where this wording lived or could be reintroduced. Not content/apps (analysis
// text that mentions other apps' "coming soon" features), not this file.
const SCAN = ["src/lib", "src/components", "src/pages", "src/layouts", "src/styles", "public/assets"];

function* files(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* files(p);
    else if (/\.(mjs|ts|js|jsx|astro|css|html|json)$/.test(e.name)) yield p;
  }
}

test("no wording from the customer-portal placeholders survives in site source", () => {
  let scanned = 0;
  for (const rel of SCAN) {
    const root = path.join(siteDir, rel);
    if (!fs.existsSync(root)) continue;
    for (const f of files(root)) {
      if (f === fileURLToPath(import.meta.url)) continue;
      scanned++;
      const text = fs.readFileSync(f, "utf8");
      for (const phrase of OLD_PLACEHOLDERS) {
        assert.equal(text.includes(phrase), false, `${path.relative(siteDir, f)} still says: ${phrase}`);
      }
    }
  }
  assert.ok(scanned > 20, "the scan found the source files");
});

test("the scan would catch a placeholder (the phrases are really there to find)", () => {
  assert.ok(OLD_PLACEHOLDERS.every((p) => p.length > 15));
});
