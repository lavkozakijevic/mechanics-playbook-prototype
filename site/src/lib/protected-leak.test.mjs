import test from "node:test";
import assert from "node:assert/strict";
import { collectNeedles, coverage, findLeaks, forbiddenPaths, needleFor, protectedTexts } from "./protected-leak.mjs";

const app = (over = {}) => ({
  id: "locked-app",
  name: "Locked App",
  summary: "A summary that is public on purpose and long enough to be a needle if it were not.",
  observations: [{ observed: "The streak counter resets at midnight in the player's own time zone and nothing else.", detail: ["short"] }],
  systemView: ["How the whole thing fits together is explained here in enough words to matter."],
  mechanicWriteups: [{ title: "A public title that is long enough to look like a needle really", summary: "A public headline sentence that is shown on mechanic pages for every app.", observed: "What was observed about the daily reward and when it arrives for a returning player.", findings: ["The reward grows each day up to a cap that the app states on the same screen."] }],
  sectionCards: { goals: "A card line about goals that is protected and long enough to be found by the scan." },
  system: { tagline: "A tagline that is public on the systems index page and long enough to be a needle.", overview: "The system overview is protected text that goes on for a good while about loops." },
  ...over,
});

test("protected fields yield text; public headline, title and tagline do not", () => {
  const texts = protectedTexts(app()).map((t) => t.text);
  assert.ok(texts.some((t) => t.startsWith("The streak counter resets")));
  assert.ok(texts.some((t) => t.startsWith("The system overview is protected")));
  assert.ok(texts.some((t) => t.startsWith("What was observed about the daily reward")));
  assert.equal(texts.some((t) => t.startsWith("A public headline sentence")), false, "the write-up headline is public");
  assert.equal(texts.some((t) => t.startsWith("A public title that")), false, "the write-up title is public");
  assert.equal(texts.some((t) => t.startsWith("A tagline that is public")), false, "the system tagline is public");
  assert.equal(texts.some((t) => t.startsWith("A summary that is public")), false, "the app summary is not a protected field");
});

test("a needle is a long run of characters no escaping can change", () => {
  assert.equal(needleFor("short"), null);
  assert.equal(needleFor("It's \"quoted\" & <tagged> all through it, so no run is long"), null);
  const n = needleFor("The player's streak counter resets at midnight in their own time zone, always.");
  assert.ok(n && n.length >= 40 && !/['"&<>]/.test(n), n);
});

test("a needle that is also public text is dropped (shared boilerplate is not a leak)", () => {
  const a = app();
  const all = collectNeedles([a], "");
  const dropped = collectNeedles([a], "xx " + all[0].needle + " yy");
  assert.equal(dropped.length, all.length - 1);
  assert.equal(dropped.some((n) => n.needle === all[0].needle), false);
});

test("a SEEDED LEAK is found in a page body, an island prop and a script, and a clean build is clean", () => {
  const needles = collectNeedles([app()], "");
  assert.ok(needles.length >= 5);
  const clean = new Map([["index.html", "<h1>Welcome</h1>"], ["_astro/a.js", "console.log(1)"]]);
  assert.deepEqual(findLeaks(clean, needles), []);

  const seed = "The streak counter resets at midnight in the player's own time zone and nothing else.";
  const needleText = needleFor(seed);
  for (const [name, body] of [
    ["page.html", `<p>${needleText} more</p>`],
    ["island.html", `<astro-island props="{&quot;a&quot;:[0,&quot;${needleText}&quot;]}"></astro-island>`],
    ["_astro/x.js", `const d = "${needleText}";`],
    ["data.json", JSON.stringify({ x: needleText })],
  ]) {
    const leaks = findLeaks(new Map([...clean, [name, body]]), needles);
    assert.ok(leaks.length >= 1, name);
    assert.equal(leaks[0].file, name);
    assert.equal(leaks[0].appId, "locked-app");
  }
});

test("pages for locked apps must not exist as files", () => {
  assert.deepEqual(forbiddenPaths([{ id: "a" }, { id: "b" }]), ["case-studies/a", "systems/a", "case-studies/b", "systems/b"]);
});

test("coverage: how much of the protected text is really in the server bundle", () => {
  const needles = collectNeedles([app()], "");
  assert.equal(coverage(needles.map((n) => n.needle).join("\n"), needles), 1);
  assert.equal(coverage("nothing", needles), 0);
  assert.equal(coverage("x", []), 0);
});

test("analysis-process fields are checked for in public files but do not count towards server coverage", () => {
  const a = app({
    observations: [{ observed: "A normal observation sentence that is deployed and is long enough to be a needle.", tags: [{ name: "x", rationale: "The reasoning behind the tag, kept in the file but never deployed to anything." }] }],
    proposedTags: [{ whyNotCovered: "Why a proposed tag was not covered, analysis process that is never deployed anywhere." }],
  });
  const needles = collectNeedles([a], "");
  const notDeployed = needles.filter((n) => n.deployed === false);
  assert.deepEqual(notDeployed.map((n) => n.path).sort(), ["observations[0].tags[0].rationale", "proposedTags[0].whyNotCovered"]);
  // they still count as leaks if they reach a public file
  assert.ok(findLeaks(new Map([["x.html", notDeployed[0].needle]]), needles).length >= 1);
  // a server bundle that lacks them is still full coverage
  const deployedOnly = needles.filter((n) => n.deployed !== false).map((n) => n.needle).join("\n");
  assert.equal(coverage(deployedOnly, needles), 1);
});
