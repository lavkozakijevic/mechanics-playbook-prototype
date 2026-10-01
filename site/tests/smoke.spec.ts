import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { tagBlocks } from "../src/lib/v41";
import { EXAMPLE_EXCLUDED } from "../src/lib/example-excluded.mjs";

/**
 * Smoke tests (migration brief, Stage 3):
 *  1. case studies render with content
 *  2. indexes show correct counts
 *  3. navigation works
 *  4. report-only content appears nowhere in the built output, including
 *     data files (a browserless filesystem scan over dist/)
 *
 * Expected counts are computed from the content collection at test time, so
 * the tests stay correct as weekly imports add apps.
 */

const here = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.resolve(here, "../src/content");
const distDir = path.resolve(here, "../dist");

function collection(name: string) {
  const dir = path.join(contentDir, name);
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")));
}

const apps = collection("apps");
const mechanics = collection("mechanics");
const visibleApps = apps.filter((a) => a.visibility !== "report-only");
const reportOnlyApps = apps.filter((a) => a.visibility === "report-only");
const appsWithSystems = visibleApps.filter((a) => a.system);

// Access gating (owner ruling): every visible app is listed on the index as a
// card, but only public apps link straight to their case study; subscriber apps
// link to /subscribe/. Systems additionally open for the rotating free slot
// named in settings.freeSystemApps.
const publicApps = visibleApps.filter((a) => a.visibility === "public");
const homepageSettings = collection("settings").find((s) => s.id === "homepage")!;
const freeSystemApps = new Set<string>(homepageSettings.freeSystemApps ?? []);
const freeSystemAppsWithMaps = appsWithSystems.filter(
  (a) => a.visibility === "public" || freeSystemApps.has(a.id)
);

// Mechanics library counts (pages/mechanics/index.astro, spec §3 rebuild, 16
// Sep 2026): a pill per mechanic with at least one v4.1 implementation
// (EXAMPLE_EXCLUDED apps never contribute one, same bar mechanicStudies()
// applies), and one [data-role-card] per (app, mechanic) pair inside that
// pill's grid — every grid is rendered by Astro at build time, all but the
// selected one starting `hidden`. Computed the same way the page itself
// computes them (tagBlocks()) rather than assumed equal to mechanics.length,
// which stopped being true once a mechanic with zero v4.1 implementations
// could exist mid-migration.
const mechanicsById = new Map(mechanics.map((m) => [m.id, m]));
// The page builds this from publishedApps() (lib/content.ts), which drops
// report-only apps before anything else runs — matched here explicitly since
// this file reads the raw collection instead.
const v41Apps = apps.filter(
  (a) => a.contentFormat === "v4.1" && a.visibility !== "report-only" && !EXAMPLE_EXCLUDED.has(a.id)
);
const roleCardsByMechanic = new Map<string, number>();
for (const app of v41Apps) {
  for (const block of tagBlocks(app, mechanicsById)) {
    if (!block.mechanic) continue;
    roleCardsByMechanic.set(block.mechanic.id, (roleCardsByMechanic.get(block.mechanic.id) ?? 0) + 1);
  }
}
const mechanicPillCount = roleCardsByMechanic.size;
const totalRoleCards = [...roleCardsByMechanic.values()].reduce((a, b) => a + b, 0);
// Pills sort by the mechanic's own name (pages/mechanics/index.astro), not
// its id, so the first pill in the DOM is found the same way.
const [firstMechanicId, firstMechanicCardCount] = [...roleCardsByMechanic.entries()].sort((a, b) =>
  mechanicsById.get(a[0])!.name.localeCompare(mechanicsById.get(b[0])!.name)
)[0];

test.describe("case studies render with content", () => {
  test("Royal Match case study has real content", async ({ page }) => {
    await page.goto("/case-studies/royal-match/");
    await expect(page.locator("h1")).toContainText("Royal Match");
    // the mechanics relationships render as composed write-up blocks
    // (v4.1 content model, 14 Sep 2026 — apps no longer carry a `.mechanics`
    // array; `.mechanicWriteups` is the equivalent this page actually reads)
    const royalMatch = apps.find((a) => a.id === "royal-match")!;
    const body = await page.locator("body").innerText();
    expect(body.length).toBeGreaterThan(1000); // not an empty shell
    expect(royalMatch.mechanicWriteups.length).toBeGreaterThan(0);
  });

  test("a subscriber app's case study renders", async ({ page }) => {
    const sample = visibleApps.find((a) => a.id !== "royal-match")!;
    await page.goto(`/case-studies/${sample.id}/`);
    await expect(page.locator("h1")).toContainText(sample.name);
  });
});

// Mechanic blocks on the case study summary page (layout fix, 1 Oct 2026):
// a block written in the new voice is one column — How it works, the
// illustration slot (nothing when there is none), What stands out, then the
// "Building something like this" panel. Old-shape blocks keep their layout.
// The app is found from the content collection, not hard-coded.
const newShapeApp = visibleApps.find(
  (a) => a.visibility === "public" && (a.mechanicWriteups ?? []).some((w: any) => w.howItWorks)
);

test.describe("new-shape mechanic blocks", () => {
  test("a new-shape block is one column in the right order, with a framed panel and no empty illustration slot", async ({ page }) => {
    expect(newShapeApp, "an app with new-shape blocks is needed to test the layout").toBeTruthy();
    await page.goto(`/case-studies/${newShapeApp!.id}/`);
    const block = page.locator(".cs-msec--article").first();
    await expect(block).toBeVisible();

    // heading and the Full mechanic page link come first, in the head row
    await expect(block.locator(".cs-msec__head h2")).toBeVisible();
    await expect(block.locator(".cs-msec__head a.cs-msec__link")).toBeVisible();

    // order of the body, and no illustration markup when a block has none
    const order = await block.locator(".cs-msec__body > *").evaluateAll((els) =>
      els.map((e) => e.querySelector("h3")?.textContent?.trim())
    );
    expect(order).toEqual(["How it works", "What stands out", "Building something like this"]);
    await expect(page.locator(".cs-msec__illustration")).toHaveCount(0);

    // a single column that does not run past the foundation's reading measure
    const cols = await block.locator(".cs-msec__body").evaluate((el) => getComputedStyle(el).gridTemplateColumns.split(" ").length);
    expect(cols).toBe(1);
    const width = await block.locator(".cs-msec__body").evaluate((el) => el.getBoundingClientRect().width);
    expect(width).toBeLessThanOrEqual(720);

    // the panel: its heading inside it, a fill different from the page, each
    // label above its answer (same left edge, label ends before answer starts)
    const panel = block.locator(".cs-panel");
    await expect(panel.locator("h3")).toHaveText("Building something like this");
    const fills = await panel.evaluate((el) => [getComputedStyle(el).backgroundColor, getComputedStyle(document.body).backgroundColor]);
    expect(fills[0]).not.toBe(fills[1]);
    const stacked = await panel.locator(".cs-panel__field").evaluateAll((fields) =>
      fields.map((f) => {
        const dt = f.querySelector("dt")!.getBoundingClientRect();
        const dd = f.querySelector("dd")!.getBoundingClientRect();
        return dt.bottom <= dd.top + 1 && Math.abs(dt.left - dd.left) < 2;
      })
    );
    expect(stacked.length).toBe(4);
    expect(stacked.every(Boolean)).toBe(true);
  });

  test("on a phone the block stays one column with no sideways scroll", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 800 });
    await page.goto(`/case-studies/${newShapeApp!.id}/`);
    await expect(page.locator(".cs-msec--article").first()).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    expect(overflow).toBe(false);
  });
});

test.describe("indexes show correct counts", () => {
  test("case studies index lists every visible app and nothing else", async ({ page }) => {
    await page.goto("/case-studies/");
    // Every visible app gets a card. Subscriber apps are gated (their card links
    // to /subscribe/), so count the cards themselves, not the case-study links.
    await expect(page.locator("a.csc")).toHaveCount(visibleApps.length);
    // Only public apps link straight through to a full case study.
    const links = page.locator('a.csc[href^="/case-studies/"]:not([href="/case-studies/"])');
    const hrefs = await links.evaluateAll((els) =>
      [...new Set(els.map((e) => e.getAttribute("href")))]
    );
    expect(hrefs.length).toBe(publicApps.length);
  });

  test("mechanics library has all pills and cards in static HTML before hydration", async ({ page }) => {
    // waitUntil: "domcontentloaded" stops before <script type="module"> islands run,
    // so this assertion verifies that Astro pre-rendered every pill and every
    // card grid — not React. Pills-and-reveal (spec §3 rebuild, 16 Sep 2026):
    // one [data-pill] per mechanic with an implementation, one [data-role-card]
    // per (app, mechanic) pair across every grid, all rendered up front —
    // JS only toggles which grid is hidden, never builds one.
    await page.goto("/mechanics/", { waitUntil: "domcontentloaded" });
    await expect(page.locator("[data-pill]")).toHaveCount(mechanicPillCount);
    await expect(page.locator("[data-role-card]")).toHaveCount(totalRoleCards);
  });

  test("mechanics library reveals exactly one mechanic's cards per pill tap", async ({ page }) => {
    await page.goto("/mechanics/");
    // The filter form appearing means React has mounted and the first useEffect has run
    await expect(page.locator(".filters")).toBeVisible();
    // Landing state (spec §3.2): no pill selected, no grid visible. Checked
    // with the :visible pseudo-class, not [data-role-card]:not([hidden]) —
    // the role filter clears each card's own `hidden` attribute whenever no
    // role is selected, so a card can be attribute-unhidden while its parent
    // grid is still hidden; :visible accounts for that ancestor, an attribute
    // selector on the card alone does not.
    await expect(page.locator("[data-role-card]:visible")).toHaveCount(0);
    // Tapping the first pill (alphabetical by mechanic name) reveals only its
    // own grid, with all of that mechanic's cards visible and none hidden by
    // a role filter (none is active).
    await page.locator(`[data-pill="${firstMechanicId}"]`).click();
    await expect(page.locator("[data-role-card]:visible")).toHaveCount(firstMechanicCardCount);
  });

  test("systems index lists every visible app with a system map", async ({ page }) => {
    await page.goto("/systems/");
    // Every app with a system map gets a card. Gated systems link to /subscribe/,
    // so count the cards; only public + free-slot systems link straight through.
    await expect(page.locator("a.csc")).toHaveCount(appsWithSystems.length);
    const links = page.locator('a.csc[href^="/systems/"]:not([href="/systems/"])');
    const hrefs = await links.evaluateAll((els) =>
      [...new Set(els.map((e) => e.getAttribute("href")))]
    );
    expect(hrefs.length).toBe(freeSystemAppsWithMaps.length);
  });
});

test.describe("navigation works", () => {
  test("homepage → case studies → a case study detail", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toBeVisible();
    await page.locator('a[href="/case-studies/"]').first().click();
    await expect(page).toHaveURL(/\/case-studies\/$/);
    await page.locator('a[href^="/case-studies/"]:not([href="/case-studies/"])').first().click();
    await expect(page.locator("h1")).toBeVisible();
  });

  test("every nav link resolves to a built page", async ({ page }) => {
    await page.goto("/");
    const hrefs = await page
      .locator("header a[href^='/']")
      .evaluateAll((els) => [...new Set(els.map((e) => e.getAttribute("href")!))]);
    expect(hrefs.length).toBeGreaterThan(5);
    for (const href of hrefs) {
      const res = await page.request.get(href);
      expect(res.status(), `${href} should resolve`).toBe(200);
    }
  });

  test("an unknown URL shows the 404 page", async ({ page }) => {
    const res = await page.goto("/mechanics/nonsense/");
    expect(res!.status()).toBe(404);
    await expect(page.locator("h1")).toContainText("isn't in the library");
  });
});

test.describe("report-only isolation", () => {
  // Filesystem scan, no browser needed: report-only IDs and names must not
  // appear in ANY file in dist — pages, data files, sitemaps, scripts.
  test("no report-only app appears anywhere in the built output", () => {
    expect(reportOnlyApps.length).toBeGreaterThan(0); // the smoke test must have a subject
    const terms = reportOnlyApps.flatMap((a) => [a.id, a.name]);
    const patterns = terms.map((t) => ({
      term: t,
      re: new RegExp("\\b" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b", "i"),
    }));
    const hits: string[] = [];
    const walk = (dir: string) => {
      for (const name of fs.readdirSync(dir)) {
        const p = path.join(dir, name);
        if (fs.statSync(p).isDirectory()) walk(p);
        else {
          const body = fs.readFileSync(p, "utf8");
          for (const { term, re } of patterns) {
            if (re.test(body) || re.test(name)) hits.push(`${path.relative(distDir, p)}: "${term}"`);
          }
        }
      }
    };
    walk(distDir);
    expect(hits).toEqual([]);
  });
});
