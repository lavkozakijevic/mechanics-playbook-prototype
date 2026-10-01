import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PROTECTED_APP_FIELDS, PUBLIC_APP_FIELDS, isFreeApp, isFreeSystem, publicAppFields, systemGateFields } from "./gate-data.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const apps = path.resolve(here, "../content/apps");
const load = (id) => JSON.parse(fs.readFileSync(path.join(apps, id + ".json"), "utf8"));

test("the public fields and the protected fields never overlap", () => {
  for (const f of PUBLIC_APP_FIELDS) assert.equal(PROTECTED_APP_FIELDS.includes(f), false, f);
});

test("publicAppFields keeps only the allow-list, whatever else the app carries", () => {
  const out = publicAppFields({ id: "x", name: "X", summary: "s", observations: [{ a: 1 }], systemView: ["secret"], system: {}, heroImage: "/protected/i.webp", extra: 1 });
  assert.deepEqual(Object.keys(out).sort(), ["id", "name", "summary"]);
});

test("for a real locked app, the gate object contains none of its protected content", () => {
  if (!fs.existsSync(path.join(apps, "royal-match.json"))) return;
  const app = load("royal-match");
  const gate = JSON.stringify(publicAppFields(app));
  for (const key of PROTECTED_APP_FIELDS) assert.equal(key in publicAppFields(app), false, key);
  // a long string from each protected field must be absent
  const strings = [];
  const walk = (v) => { if (typeof v === "string") { if (v.length >= 60) strings.push(v); } else if (Array.isArray(v)) v.forEach(walk); else if (v && typeof v === "object") Object.values(v).forEach(walk); };
  for (const key of PROTECTED_APP_FIELDS) walk(app[key]);
  assert.ok(strings.length > 50, "the check has material to look for");
  for (const s of strings) assert.equal(gate.includes(s.slice(0, 60)), false);
  // and what it does carry is what the old locked page showed
  assert.equal(JSON.parse(gate).name, app.name);
  assert.equal(JSON.parse(gate).summary, app.summary);
});

test("free apps are exactly the declared public ones; systems also follow the free-system list", () => {
  assert.equal(isFreeApp({ visibility: "public" }), true);
  for (const v of ["subscriber", "report-only", undefined, "Public"]) assert.equal(isFreeApp({ visibility: v }), false, String(v));
  assert.equal(isFreeApp(null), false);
  assert.equal(isFreeSystem({ id: "a", visibility: "subscriber" }, ["a"]), true);
  assert.equal(isFreeSystem({ id: "b", visibility: "subscriber" }, ["a"]), false);
  assert.equal(isFreeSystem({ id: "b", visibility: "public" }, []), true);
  assert.equal(isFreeSystem({ id: "b", visibility: "subscriber" }, undefined), false);
});

test("the locked system page gets names and the tagline only", () => {
  assert.deepEqual(
    systemGateFields({ appName: "A", typeLabel: "Game", domain: { label: "x", cat: "retention" }, tagline: "t", overview: "secret", nodes: [1], connections: [2], keyInsight: "k" }),
    { appName: "A", typeLabel: "Game", domain: { label: "x", cat: "retention" }, tagline: "t" }
  );
});
