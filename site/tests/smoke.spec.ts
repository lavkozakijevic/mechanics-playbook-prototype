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
 *     data files and the Worker bundle (a browserless filesystem scan over
 *     dist/, which holds both client/ and server/)
 *  5. the login routes: headers, origin checks, and a 503 (never a crash) when
 *     Supabase isn't configured, which is the case in CI
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

const SITE_ORIGIN = "http://localhost:4321";
const SAMPLE_LINK = "/auth/confirm?token_hash=abcdefgh12345678&type=email";

function expectAuthHeaders(res: { headers(): Record<string, string> }) {
  const h = res.headers();
  expect(h["cache-control"]).toBe("private, no-store");
  expect(h["x-robots-tag"]).toBe("noindex");
}

test.describe("login routes", () => {
  test("a visitor with no session gets no email back, and nothing cacheable", async ({ request }) => {
    const res = await request.get("/api/auth/me");
    expect(res.status()).toBe(200);
    expect(await res.json()).toEqual({ email: null });
    expectAuthHeaders(res);
  });

  test("a login POST from another origin, or with none, is refused", async ({ request }) => {
    for (const headers of [{ origin: "https://evil.example" }, {}]) {
      const res = await request.post("/api/auth/login", { data: { email: "ci@example.invalid" }, headers });
      expect(res.status()).toBe(403);
      expectAuthHeaders(res);
    }
  });

  test("an invalid email is rejected", async ({ request }) => {
    const res = await request.post("/api/auth/login", { data: { email: "nope" }, headers: { origin: SITE_ORIGIN } });
    expect(res.status()).toBe(400);
    expectAuthHeaders(res);
  });

  // CI has no Supabase variables. Locally, run this without a .dev.vars file
  // holding real values, or the request goes through.
  test("with Supabase not configured, login answers 503 instead of crashing", async ({ request }) => {
    const res = await request.post("/api/auth/login", { data: { email: "ci@example.invalid" }, headers: { origin: SITE_ORIGIN } });
    expect(res.status()).toBe(503);
    expect(await res.json()).toEqual({ error: "not_configured" });
    expectAuthHeaders(res);
  });

  test("the wrong method gets a 405 with the right Allow header", async ({ request }) => {
    const res = await request.get("/api/auth/login");
    expect(res.status()).toBe(405);
    expect(res.headers()["allow"]).toBe("POST");
    expectAuthHeaders(res);
  });

  test("sign-out from another origin is refused", async ({ request }) => {
    const res = await request.post("/api/auth/logout", { data: {}, headers: { origin: "https://evil.example" } });
    expect(res.status()).toBe(403);
    expectAuthHeaders(res);
  });

  test("the confirmation page asks for a click and spends nothing on load", async ({ page, request }) => {
    const res = await request.get(SAMPLE_LINK + "&next=//evil.example");
    expect(res.status()).toBe(200);
    expectAuthHeaders(res);
    expect(res.headers()["referrer-policy"]).toBe("strict-origin");
    expect(res.headers()["set-cookie"]).toBeUndefined();

    await page.goto(SAMPLE_LINK + "&next=//evil.example");
    await expect(page.getByRole("button", { name: "Continue" })).toBeVisible();
    // an off-site destination is replaced with the home page
    await expect(page.locator('input[name="next"]')).toHaveValue("/");
  });

  // Regression test for a real failure: the page's referrer policy made the
  // browser send "Origin: null" on the form POST, so the user's own click was
  // refused with a 403. Only a real browser form submit can catch that. With no
  // Supabase configured (CI), getting a 503 page proves the Origin check passed.
  test("pressing Continue in a real browser passes the origin check", async ({ page }) => {
    await page.goto(SAMPLE_LINK);
    const [posted] = await Promise.all([
      page.waitForResponse((r) => r.url().endsWith("/auth/confirm") && r.request().method() === "POST"),
      page.getByRole("button", { name: "Continue" }).click(),
    ]);
    expect(posted.request().headers()["origin"]).toBe(SITE_ORIGIN);
    expect(posted.status()).toBe(503);
    await expect(page.getByText("Sign-in isn't available right now")).toBeVisible();
  });

  test("a malformed confirmation link is refused", async ({ page }) => {
    const res = await page.goto("/auth/confirm?token_hash=x&type=recovery");
    expect(res!.status()).toBe(400);
    await expect(page.getByRole("link", { name: "Request a new sign-in link" })).toBeVisible();
  });

  test("the confirmation POST from another origin is refused", async ({ request }) => {
    const res = await request.post("/auth/confirm", {
      form: { token_hash: "abcdefgh12345678", type: "email" },
      headers: { origin: "https://evil.example" },
    });
    expect(res.status()).toBe(403);
  });

  test("the login page is email-only", async ({ page }) => {
    await page.goto("/login/");
    await expect(page.getByRole("heading", { name: "Log in or create an account" })).toBeVisible();
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toHaveCount(0);
  });

  test("a signed-out visitor sees Log in in the header", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await expect(page.locator('header a[href="/login/"]').first()).toBeVisible();
    await expect(page.locator(".nav__who")).toHaveCount(0);
  });

  test("lead capture still validates input, and only accepts POST", async ({ request }) => {
    const bad = await request.post("/api/lead", { data: { email: "nope" } });
    expect(bad.status()).toBe(422);
    expect(await bad.json()).toEqual({ error: "invalid_email" });
    const wrong = await request.get("/api/lead");
    expect(wrong.status()).toBe(405);
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
