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
 *  6. checkout: the plan links and copy, redirects for a visitor with no session,
 *     refusals, and that the site holds no Paddle configuration
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

  // /auth/callback: where Supabase's default email link lands. CI has no
  // Supabase variables, so everything that needs the Auth server answers 503
  // there; the redirects below are decided before Supabase is asked anything.
  const CODE = "0b9f3c52-6a3e-4c8c-9d59-2d8f6f1d7a10";

  test("a callback with a missing or malformed code goes back to the login page", async ({ request }) => {
    for (const q of ["", "?code=", "?code=short", "?code=has%20spaces%20in%20it", "?code=" + "a".repeat(400)]) {
      const res = await request.get("/auth/callback" + q, { maxRedirects: 0 });
      expect(res.status(), q).toBe(303);
      expect(res.headers()["location"], q).toBe("/login/?error=expired");
      expect(res.headers()["set-cookie"], q).toBeUndefined();
      expectAuthHeaders(res);
    }
  });

  test("a callback carrying an error from Supabase goes back to the login page", async ({ request }) => {
    const res = await request.get(
      `/auth/callback?error=access_denied&error_code=otp_expired&error_description=Email+link+is+invalid+or+has+expired&code=${CODE}`,
      { maxRedirects: 0 }
    );
    expect(res.status()).toBe(303);
    expect(res.headers()["location"]).toBe("/login/?error=expired");
    expect(res.headers()["set-cookie"]).toBeUndefined();
    expectAuthHeaders(res);
  });

  test("a callback never redirects to an off-site next", async ({ request }) => {
    for (const next of ["//evil.example", "https://evil.example/", "/\\evil.example", "javascript:alert(1)"]) {
      const res = await request.get(`/auth/callback?code=${CODE}&next=${encodeURIComponent(next)}`, { maxRedirects: 0 });
      // Not configured here, so the page is a 503, never a redirect. With the
      // Auth server present the redirect target is "/" (checked locally in
      // auth-config.test.mjs: safeNext).
      expect(res.status(), next).toBe(503);
      expect(res.headers()["location"], next).toBeUndefined();
      expect(res.headers()["set-cookie"], next).toBeUndefined();
      expectAuthHeaders(res);
    }
  });

  test("the callback only answers GET", async ({ request }) => {
    for (const method of ["POST", "PUT", "DELETE"] as const) {
      const res = await request.fetch(`/auth/callback?code=${CODE}`, { method, headers: { origin: SITE_ORIGIN } });
      expect(res.status(), method).toBe(405);
      expect(res.headers()["allow"]).toBe("GET");
      expectAuthHeaders(res);
    }
  });

  // A real browser navigation, which is what an email link is. Cloudflare
  // answers a navigation to a path with no static file with the 404 page
  // unless the path is in assets.run_worker_first (wrangler.jsonc); a plain
  // request.get does not show that.
  test("a browser following a failed email link lands on the login page with the friendly message", async ({ page }) => {
    await page.goto("/auth/callback?error=access_denied&error_code=otp_expired");
    await expect(page).toHaveURL(/\/login\/\?error=expired$/);
    await expect(page.getByText("expired or was already used")).toBeVisible();
  });

  test("the callback is not in the sitemap and has no static page", () => {
    expect(fs.existsSync(path.join(distDir, "client", "auth"))).toBe(false);
    const sitemaps = fs.readdirSync(path.join(distDir, "client")).filter((f) => /^sitemap.*\.xml$/.test(f));
    expect(sitemaps.length).toBeGreaterThan(0);
    for (const f of sitemaps) {
      expect(fs.readFileSync(path.join(distDir, "client", f), "utf8")).not.toContain("/auth/");
    }
    const config = JSON.parse(fs.readFileSync(path.join(distDir, "server", "wrangler.json"), "utf8"));
    expect(config.assets.run_worker_first).toContain("/auth/*");
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

// Checkout (payments step 4). CI has no Supabase or payments Worker, so what is
// tested here is everything decided before either is asked: the plan links and
// their copy, the redirects for a visitor with no session, the refusals, and
// that the site holds no Paddle configuration. The signed-in paths run in the
// local end-to-end checks (payments-worker/e2e/checkout.mjs).
test.describe("checkout", () => {
  test("the subscribe page offers two plans as links, with the agreed copy", async ({ page }) => {
    await page.goto("/subscribe/");
    const hrefs = await page.locator(".sp-plan a.gb-btn").evaluateAll((els) => els.map((e) => e.getAttribute("href")));
    expect(hrefs).toEqual(["/checkout/?plan=quarterly", "/checkout/?plan=yearly"]);
    const card = await page.locator(".sp-card").innerText();
    expect(card).toContain("$25/month");
    expect(card).toContain("billed $75 every 3 months");
    expect(card).toContain("$250/year");
    expect(card.toLowerCase()).toContain("save 16%"); // the tag is set in capitals by CSS
    const all = await page.locator("body").innerText();
    expect(all).not.toContain("15%");
    expect(all.toLowerCase()).not.toContain("monthly");
    await expect(page.locator(".wl-modal")).toHaveCount(0); // no waitlist modal any more
  });

  test("a signed-out visitor who presses Subscribe is sent to log in, and told why", async ({ page }) => {
    await page.goto("/subscribe/");
    await page.locator(".sp-plan a.gb-btn").first().click();
    await expect(page).toHaveURL(/\/login\/\?next=%2Fcheckout%2F%3Fplan%3Dquarterly$/);
    await expect(page.getByText("You need an account to subscribe")).toBeVisible();
  });

  test("checkout with no plan, or a plan we do not sell, goes back to the plans", async ({ request }) => {
    for (const q of ["", "?plan=", "?plan=monthly", "?plan=annual", "?plan=pri_01abc", "?plan=QUARTERLY"]) {
      const res = await request.get("/checkout/" + q, { maxRedirects: 0 });
      expect(res.status(), q).toBe(303);
      expect(res.headers()["location"], q).toBe("/subscribe/");
    }
  });

  test("checkout with no session goes to login and comes back, never touching Paddle", async ({ request }) => {
    for (const [plan, next] of [["quarterly", "%2Fcheckout%2F%3Fplan%3Dquarterly"], ["yearly", "%2Fcheckout%2F%3Fplan%3Dyearly"]]) {
      const res = await request.get(`/checkout/?plan=${plan}`, { maxRedirects: 0 });
      expect(res.status()).toBe(303);
      expect(res.headers()["location"]).toBe(`/login/?next=${next}`);
      expectAuthHeaders(res);
      expect(res.headers()["content-security-policy-report-only"]).toBeUndefined();
    }
    const success = await request.get("/checkout/success/", { maxRedirects: 0 });
    expect(success.status()).toBe(303);
    expect(success.headers()["location"]).toBe("/login/?next=%2Fcheckout%2Fsuccess%2F");
  });

  test("a browser navigation to /checkout/ reaches the Worker, not the static 404 page", async ({ page }) => {
    await page.goto("/checkout/?plan=yearly");
    await expect(page).toHaveURL(/\/login\/\?next=%2Fcheckout%2F%3Fplan%3Dyearly$/);
  });

  test("POST /api/checkout refuses a foreign origin, a bad plan and a visitor with no session", async ({ request }) => {
    const foreign = await request.post("/api/checkout", { data: { plan: "quarterly" }, headers: { origin: "https://evil.example" } });
    expect(foreign.status()).toBe(403);
    expectAuthHeaders(foreign);
    const noOrigin = await request.post("/api/checkout", { data: { plan: "quarterly" } });
    expect(noOrigin.status()).toBe(403);
    // a price id, an unknown plan and a missing plan never get as far as Paddle
    for (const plan of ["monthly", "pri_01abc", "", null, 7, ["quarterly"]]) {
      const res = await request.post("/api/checkout", { data: { plan }, headers: { origin: SITE_ORIGIN } });
      expect(res.status(), JSON.stringify(plan)).toBe(400);
      expectAuthHeaders(res);
    }
    const garbage = await request.post("/api/checkout", { data: "not json", headers: { origin: SITE_ORIGIN, "content-type": "text/plain" } });
    expect(garbage.status()).toBe(400);
    const noSession = await request.post("/api/checkout", { data: { plan: "yearly" }, headers: { origin: SITE_ORIGIN } });
    expect(noSession.status()).toBe(401);
    expect(await noSession.json()).toEqual({ error: "unauthorized" });
    expectAuthHeaders(noSession);
  });

  test("the entitlement endpoint needs a session, and the routes only answer their own method", async ({ request }) => {
    const anon = await request.get("/api/entitlement");
    expect(anon.status()).toBe(401);
    expectAuthHeaders(anon);
    const wrongMethod = await request.post("/api/entitlement", { data: {}, headers: { origin: SITE_ORIGIN } });
    expect(wrongMethod.status()).toBe(405);
    expect(wrongMethod.headers()["allow"]).toBe("GET");
    const wrongCheckout = await request.get("/api/checkout");
    expect(wrongCheckout.status()).toBe(405);
    expect(wrongCheckout.headers()["allow"]).toBe("POST");
    const post = await request.post("/checkout/", { data: {}, headers: { origin: SITE_ORIGIN } });
    expect(post.status()).toBe(405);
  });

  test("the site Worker holds no Paddle configuration, and is bound to the payments Worker's entrypoint", () => {
    // Variable names and key-shaped values. (supabase-js's own comments mention
    // "sb_secret_" and SUPABASE_SECRET_KEY, so those words alone are not a hit;
    // a value or an env lookup is.)
    const patterns = [/PADDLE_(API|CHECKOUT|WEBHOOK|CLIENT|PRICE|ENVIRONMENT|PRODUCT)/, /pdl_(ntfset|sdbx_apikey|live_apikey)_[A-Za-z0-9]{10,}/, /sb_secret_[A-Za-z0-9_-]{20,}/, /(^|[^.\w])env\.SUPABASE_SECRET_KEY/];
    const hits: string[] = [];
    const walk = (dir: string) => {
      for (const name of fs.readdirSync(dir)) {
        const p = path.join(dir, name);
        if (fs.statSync(p).isDirectory()) walk(p);
        else if (/\.(html|js|mjs|cjs|json|css|txt|xml)$/.test(name)) {
          const body = fs.readFileSync(p, "utf8");
          for (const re of patterns) if (re.test(body)) hits.push(`${path.relative(distDir, p)}: ${re}`);
        }
      }
    };
    walk(distDir);
    expect(hits).toEqual([]);
    const config = JSON.parse(fs.readFileSync(path.join(distDir, "server", "wrangler.json"), "utf8"));
    expect(config.services).toEqual([{ binding: "PAYMENTS", service: "appservatory-payments", entrypoint: "Checkout" }]);
    expect(config.assets.run_worker_first).toEqual(expect.arrayContaining(["/checkout", "/checkout/*", "/auth/*", "/api/*"]));
    expect(config.vars ?? {}).toEqual({});
  });

  test("the browser scripts are static files, not inline, and carry no secret", async ({ request }) => {
    for (const file of ["checkout.js", "success.js"]) {
      const res = await request.get(`/assets/checkout/${file}`);
      expect(res.status(), file).toBe(200);
      const body = await res.text();
      expect(body).not.toMatch(/pri_|ctm_|sb_|pdl_|Bearer/);
    }
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
