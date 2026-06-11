import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

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

test.describe("case studies render with content", () => {
  test("Royal Match case study has real content", async ({ page }) => {
    await page.goto("/case-studies/royal-match/");
    await expect(page.locator("h1")).toContainText("Royal Match");
    // the mechanics relationships render as sections with write-up text
    const royalMatch = apps.find((a) => a.id === "royal-match")!;
    const body = await page.locator("body").innerText();
    expect(body.length).toBeGreaterThan(1000); // not an empty shell
    expect(royalMatch.mechanics.length).toBeGreaterThan(0);
  });

  test("a subscriber app's case study renders", async ({ page }) => {
    const sample = visibleApps.find((a) => a.id !== "royal-match")!;
    await page.goto(`/case-studies/${sample.id}/`);
    await expect(page.locator("h1")).toContainText(sample.name);
  });
});

test.describe("indexes show correct counts", () => {
  test("case studies index lists every visible app and nothing else", async ({ page }) => {
    await page.goto("/case-studies/");
    const links = page.locator('a[href^="/case-studies/"]:not([href="/case-studies/"])');
    const hrefs = await links.evaluateAll((els) =>
      [...new Set(els.map((e) => e.getAttribute("href")))]
    );
    expect(hrefs.length).toBe(visibleApps.length);
  });

  test("mechanics library has all cards in static HTML before hydration", async ({ page }) => {
    // waitUntil: "domcontentloaded" stops before <script type="module"> islands run,
    // so this assertion verifies that Astro pre-rendered every card — not React.
    await page.goto("/mechanics/", { waitUntil: "domcontentloaded" });
    await expect(page.locator("[data-mechanic-card]")).toHaveCount(mechanics.length);
  });

  test("mechanics library shows all mechanics after hydration with no filter active", async ({ page }) => {
    await page.goto("/mechanics/");
    // The filter form appearing means React has mounted and the first useEffect has run
    await expect(page.locator(".filters")).toBeVisible();
    // No filter active → all cards visible (none carry [hidden])
    await expect(page.locator("[data-mechanic-card]:not([hidden])")).toHaveCount(mechanics.length);
  });

  test("systems index lists every visible app with a system map", async ({ page }) => {
    await page.goto("/systems/");
    const links = page.locator('a[href^="/systems/"]:not([href="/systems/"])');
    const hrefs = await links.evaluateAll((els) =>
      [...new Set(els.map((e) => e.getAttribute("href")))]
    );
    expect(hrefs.length).toBe(appsWithSystems.length);
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
