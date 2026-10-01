#!/usr/bin/env node
/**
 * End-to-end run of gating: the real site Worker (and the payments Worker, which
 * records subscriptions from signed webhook events) under `wrangler dev`, with
 * stand-ins for Supabase (e2e/standins.mjs: Auth plus a Data API backed by a
 * throwaway Postgres carrying the real migrations, every query run AS the role the
 * request implies) and a real Chromium. Two phases: the review window closed, then
 * open (REVIEW_WINDOW=open in the site Worker's .dev.vars, a restart in between).
 *
 * Also prints how long the heaviest protected pages take to render (a stand-in for
 * CPU time: with the window open there is no network call, so wall time is nearly
 * all CPU).
 *
 * Not part of CI (needs Postgres). Same setup as e2e/checkout.mjs, then:
 *   (cd ../site && npm run build)
 *   PGHOST=127.0.0.1 PGPORT=54329 PGUSER=postgres PGDATABASE=payments_test npm run e2e:gating
 */
import { spawn } from "node:child_process";
import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { buildRequest } from "../scripts/send-test-event.mjs";
import { PADDLE_CHECKOUT_KEY, PADDLE_RECONCILE_KEY, SB_PUBLISHABLE, SB_SECRET, createPaddleStandin, createSupabaseStandin, lit, q } from "./standins.mjs";

const require = createRequire(import.meta.url);
const here = path.dirname(fileURLToPath(import.meta.url));
const paymentsDir = path.resolve(here, "..");
const siteDir = path.resolve(here, "../../site");
const { chromium } = require(path.join(siteDir, "node_modules/playwright-core"));
const { protectedTexts, needleFor } = await import(path.join(siteDir, "src/lib/protected-leak.mjs"));

const SITE = "http://localhost:4321";
const SB_PORT = 54399, PADDLE_PORT = 54397, PAYMENTS_PORT = 8799, SITE_PORT = 4321;
const WEBHOOK_SECRET = "pdl_ntfset_E2E_ONLY_0123456789";
const PRODUCT = "pro_e2e";

let failures = 0;
const check = (name, ok, extra = "") => {
  if (!ok) failures++;
  console.log((ok ? "PASS  " : "FAIL  ") + name + (!ok && extra ? `   [${String(extra).slice(0, 240)}]` : ""));
};

const sb = createSupabaseStandin({ port: SB_PORT });
const paddle = createPaddleStandin({ port: PADDLE_PORT });

// ----------------------------------------------------------- content to look for
const loadApp = (id) => JSON.parse(fs.readFileSync(path.join(siteDir, "src/content/apps", id + ".json"), "utf8"));
const settings = JSON.parse(fs.readFileSync(path.join(siteDir, "src/content/settings/homepage.json"), "utf8"));
const allApps = fs.readdirSync(path.join(siteDir, "src/content/apps")).map((f) => JSON.parse(fs.readFileSync(path.join(siteDir, "src/content/apps", f), "utf8")));
const freeApps = allApps.filter((a) => a.visibility === "public");
const lockedApps = allApps.filter((a) => a.visibility === "subscriber");
const LOCKED = loadApp("royal-match");
const FREE = freeApps.find((a) => a.id === "strava") ?? freeApps[0];
const SECTION = LOCKED.observations[0].section;
const publicText = (a) => JSON.stringify([a.summary, a.teaser, a.name, a.system?.tagline, (a.mechanicWriteups ?? []).map((w) => [w.summary, w.title])]);
const needlesOf = (app, n = 25) => {
  const pt = publicText(app);
  const all = protectedTexts(app).map((t) => needleFor(t.text)).filter((x) => x && !pt.includes(x));
  const step = Math.max(1, Math.floor(all.length / n));
  return all.filter((_, i) => i % step === 0).slice(0, n);
};
const NEEDLES = needlesOf(LOCKED);
// What each full page really shows: the summary page the write-ups and the system
// view; a section page that section's observations.
const SUMMARY_NEEDLES = [needleFor(LOCKED.systemView[0]), ...LOCKED.mechanicWriteups.slice(0, 3).map((w) => needleFor(w.howItWorks ?? w.observed ?? ""))].filter(Boolean);
const SECTION_NEEDLES = LOCKED.observations.filter((o) => o.section === LOCKED.observations[0].section).slice(0, 3).map((o) => needleFor(o.observed ?? "")).filter(Boolean);
const SYSTEM_TEXT = LOCKED.system.overview.slice(0, 40);
const HERO = LOCKED.heroImage;

// -------------------------------------------------------------- the Workers
const procs = [];
const output = [];
function startWorker(cwd, args) {
  const p = spawn("npx", ["wrangler", ...args], { cwd, detached: true, env: { ...process.env, WRANGLER_SEND_METRICS: "false", NO_COLOR: "1" } });
  for (const s of [p.stdout, p.stderr]) s.on("data", (d) => output.push(String(d)));
  procs.push(p);
  return p;
}
function stopAll() {
  for (const p of procs.splice(0)) {
    try { process.kill(-p.pid, "SIGTERM"); } catch { /* gone */ }
  }
}
async function waitFor(url, ok, label) {
  for (let i = 0; i < 120; i++) {
    try { if (ok((await fetch(url)).status)) return; } catch { /* not up */ }
    await new Promise((r) => setTimeout(r, 1000));
  }
  throw new Error(`${label} did not start:\n${output.join("").slice(-1500)}`);
}
const portFree = async (port) => { try { await fetch(`http://127.0.0.1:${port}/`); return false; } catch { return true; } };
const files = [];
const writeVars = (file, lines) => { fs.writeFileSync(file, lines.join("\n") + "\n"); if (!files.includes(file)) files.push(file); };

const paymentsVars = [
  `SUPABASE_URL=http://127.0.0.1:${SB_PORT}`, `SUPABASE_SECRET_KEY=${SB_SECRET}`, `SUPABASE_PUBLISHABLE_KEY=${SB_PUBLISHABLE}`,
  "PADDLE_ENVIRONMENT=sandbox", `PADDLE_WEBHOOK_SECRET_SANDBOX=${WEBHOOK_SECRET}`, `PADDLE_API_KEY=${PADDLE_RECONCILE_KEY}`,
  `PADDLE_CHECKOUT_API_KEY=${PADDLE_CHECKOUT_KEY}`, "PADDLE_CLIENT_TOKEN=test_e2eclienttoken0123456789",
  "PADDLE_PRICE_QUARTERLY=pri_e2equarterly", "PADDLE_PRICE_YEARLY=pri_e2eyearly", `PADDLE_PRODUCT_ID=${PRODUCT}`,
  `PADDLE_API_BASE_URL=http://127.0.0.1:${PADDLE_PORT}`,
];
const siteVars = (extra = []) => [`SUPABASE_URL=http://127.0.0.1:${SB_PORT}`, `SUPABASE_PUBLISHABLE_KEY=${SB_PUBLISHABLE}`, ...extra];

async function startSite(extraVars = []) {
  writeVars(path.join(siteDir, "dist/server/.dev.vars"), siteVars(extraVars));
  startWorker(siteDir, ["dev", "-c", "dist/server/wrangler.json", "--local", "--port", String(SITE_PORT)]);
  await waitFor(`${SITE}/api/auth/me`, (s) => s === 200, "site Worker");
}
const siteProc = () => procs[procs.length - 1];
async function restartSite(extraVars) {
  const p = procs.pop();
  try { process.kill(-p.pid, "SIGTERM"); } catch { /* gone */ }
  await new Promise((r) => setTimeout(r, 2500));
  await startSite(extraVars);
}

// ------------------------------------------------------------------- helpers
const RUN = 20 + Math.floor(Math.random() * 200);
const ip = (n) => `10.${RUN}.${Math.floor(Math.random() * 250)}.${n}`;
const sign = (args, userId) => buildRequest(
  { WEBHOOK_URL: `http://127.0.0.1:${PAYMENTS_PORT}/paddle/webhook`, PADDLE_WEBHOOK_SECRET: WEBHOOK_SECRET, TEST_USER_ID: userId, PADDLE_PRODUCT_ID: PRODUCT, PADDLE_PRICE_ID: "pri_e2equarterly" },
  args
);
async function sendEvent(r) {
  const res = await fetch(r.url, { method: "POST", headers: r.headers, body: r.body });
  return { status: res.status, body: await res.json().catch(() => null) };
}
async function visitor(browser, label) {
  const ctx = await browser.newContext({ baseURL: SITE, extraHTTPHeaders: { "cf-connecting-ip": ip(Math.floor(Math.random() * 200) + 1) } });
  return { ctx, label, email: `${label}.${RUN}@example.test` };
}
/** Log in through the page and follow Supabase's default email link; leaves the visitor signed in. */
async function logIn(v) {
  const page = await v.ctx.newPage();
  await page.goto("/login/");
  await page.getByLabel("Email").fill(v.email);
  await page.getByRole("button", { name: "Email me a link" }).click();
  await page.getByRole("heading", { name: "Check your email" }).waitFor({ timeout: 10000 });
  await page.goto(sb.defaultLink(sb.state.otps.at(-1)));
  await page.waitForURL(`${SITE}/`, { timeout: 15000 });
  v.page = page;
  v.id = sb.userId(v.email);
  return v;
}
const get = (v, url, opts = {}) => v.ctx.request.get(url, { maxRedirects: 0, ...opts });
const text = async (res) => await res.text();
const hasAll = (body, needles) => needles.every((n) => body.includes(n));
const hasAny = (body, needles) => needles.some((n) => body.includes(n));
const priv = (res) => res.headers()["cache-control"] === "private, no-store" && res.headers()["x-robots-tag"] === "noindex" && /cookie/i.test(res.headers()["vary"] ?? "");
const dbCalls = () => sb.state.log.filter((l) => l.path.startsWith("/rest/")).length;
function rawGet(pathname) {
  return new Promise((resolve, reject) => {
    http.get({ host: "localhost", port: SITE_PORT, path: pathname, headers: { "cf-connecting-ip": ip(9) } }, (res) => {
      let n = 0; res.on("data", (c) => (n += c.length)); res.on("end", () => resolve({ status: res.statusCode, headers: res.headers, bytes: n }));
    }).on("error", reject);
  });
}

async function main() {
  for (const port of [SITE_PORT, PAYMENTS_PORT, SB_PORT, PADDLE_PORT]) {
    if (!(await portFree(port))) throw new Error(`Something is already listening on port ${port}. Stop it first.`);
  }
  if (!fs.existsSync(path.join(siteDir, "dist/server/wrangler.json"))) throw new Error("Build the site first: cd site && npm run build");

  await sb.start();
  await paddle.start();
  q("delete from public.subscriptions; delete from public.webhook_events; delete from public.manual_entitlements; delete from auth.users;");
  writeVars(path.join(paymentsDir, ".dev.vars"), paymentsVars);
  startWorker(paymentsDir, ["dev", "--local", "--port", String(PAYMENTS_PORT)]);
  await waitFor(`http://127.0.0.1:${PAYMENTS_PORT}/nothing`, (s) => s === 404, "payments Worker");
  await startSite([]); // review window: no variable at all = closed

  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM || "/opt/pw-browsers/chromium" });
  const T0 = Date.parse("2026-10-02T10:00:00Z");
  const at = (s) => new Date(T0 + s * 1000).toISOString();
  const url = { cs: `/case-studies/${LOCKED.id}/`, sec: `/case-studies/${LOCKED.id}/${SECTION}/`, sys: `/systems/${LOCKED.id}/` };

  // ------------------------------------------------------------ users
  const anon = await visitor(browser, "anon");
  const none = await logIn(await visitor(browser, "none"));
  const full = await logIn(await visitor(browser, "full"));
  const late = await logIn(await visitor(browser, "pastdue"));
  const manual = await logIn(await visitor(browser, "manual"));
  // Two visitors whose sessions are short-lived (every session the stand-in issues lasts 2 seconds
  // until expiresIn is put back): one will have a refresh token that still works, one will not.
  sb.state.expiresIn = 2;
  const expiring = await logIn(await visitor(browser, "expiring"));
  const dead = await logIn(await visitor(browser, "dead"));
  await new Promise((r) => setTimeout(r, 2000)); // let each page's own /api/auth/me refresh settle

  const e1 = sign({ "occurred-at": at(0) }, full.id);
  check("a signed webhook event gives the 'full' user a subscription", (await sendEvent(e1)).body?.outcome === "applied");
  const e2 = sign({ "occurred-at": at(0), status: "past_due", type: "subscription.updated" }, late.id);
  check("...and the 'past due' user a past_due one", (await sendEvent(e2)).body?.outcome === "applied");
  q(`insert into public.manual_entitlements (user_id, note) values (${lit(manual.id)}, 'e2e');`);

  console.log("\n== Phase 1: review window closed (no REVIEW_WINDOW variable) ==");

  // ---------------------------------------------------------- free pages
  {
    const before = dbCalls();
    const res = await get(anon, `/case-studies/${FREE.id}/`);
    const body = await text(res);
    check("a free case study is served as a static page: 200, not private, whole content", res.status() === 200 && !priv(res) && body.length > 50000 && /pd-banner/.test(body) === false, `${res.status()} ${body.length} ${res.headers()["cache-control"]}`);
    const sys = await get(anon, `/systems/${settings.freeSystemApps[0]}/`);
    check("a free system is static too", sys.status() === 200 && !priv(sys));
    check("free pages made no database call", dbCalls() === before);
  }

  // ------------------------------------------------------------ signed out
  {
    const before = dbCalls();
    const cs = await get(anon, url.cs);
    const body = await text(cs);
    check("signed out: locked case study is the gate, 200, private/no-store/noindex/vary", cs.status() === 200 && priv(cs) && body.includes("cs-gate") && body.includes(LOCKED.name), `${cs.status()}`);
    check("signed out: no protected text", !hasAny(body, NEEDLES));
    check("signed out: 'Log in' returns to this page", body.includes(`href="/login/?next=${encodeURIComponent(url.cs)}"`));
    const sys = await get(anon, url.sys);
    const sysBody = await text(sys);
    check("signed out: locked system is the gate; no system text anywhere in the page or its props", sys.status() === 200 && priv(sys) && sysBody.includes("cs-gate") && !sysBody.includes(SYSTEM_TEXT) && !hasAny(sysBody, NEEDLES) && !/&quot;nodes&quot;/.test(sysBody));
    const sec = await get(anon, url.sec);
    check("signed out: section page redirects to the summary gate", sec.status() === 303 && sec.headers().location === url.cs && priv(sec));
    check("signed out: no database call at all (nothing to ask without a session)", dbCalls() === before);
    const img = await get(anon, HERO);
    check("signed out: protected image is a 404, private", img.status() === 404 && priv(img));
  }

  // ---------------------------------------------------------- signed in, none
  {
    const cs = await get(none, url.cs);
    const body = await text(cs);
    check("signed in without a subscription: the gate, no login link, no banner", cs.status() === 200 && body.includes("cs-gate") && !body.includes("Already subscribed?") && !body.includes("pd-banner") && !hasAny(body, NEEDLES));
    check("signed in without a subscription: section -> summary; image -> 404", (await get(none, url.sec)).status() === 303 && (await get(none, HERO)).status() === 404);
    const sys = await text(await get(none, url.sys));
    check("signed in without a subscription: system gate, nothing of the system", sys.includes("cs-gate") && !sys.includes(SYSTEM_TEXT));
  }

  // ------------------------------------------------------------------- full
  for (const who of [full, manual]) {
    const cs = await get(who, url.cs);
    const body = await text(cs);
    check(`${who.label}: case study renders in full, private, no banner`, cs.status() === 200 && priv(cs) && hasAll(body, SUMMARY_NEEDLES) && !body.includes("cs-gate") && !body.includes("pd-banner"), `${cs.status()}`);
    const sec = await get(who, url.sec);
    const secBody = await text(sec);
    check(`${who.label}: section page renders with that section's observations`, sec.status() === 200 && priv(sec) && !secBody.includes("cs-gate") && hasAll(secBody, SECTION_NEEDLES), `${sec.status()}`);
    const sys = await text(await get(who, url.sys));
    check(`${who.label}: system renders in full (the system is in the response)`, sys.includes(SYSTEM_TEXT.replace(/&/g, "&amp;")) || /&quot;nodes&quot;/.test(sys));
    const img = await get(who, HERO);
    const bytes = fs.statSync(path.join(siteDir, "public", HERO)).size;
    check(`${who.label}: protected image is served, private, whole file`, img.status() === 200 && priv(img) && /image\/webp/.test(img.headers()["content-type"] ?? "") && (await img.body()).length === bytes, `${img.status()}`);
  }

  // -------------------------------------------------------------- past_due
  {
    const cs = await get(late, url.cs);
    const body = await text(cs);
    check("past due: full content with the banner", cs.status() === 200 && body.includes("pd-banner") && hasAll(body, SUMMARY_NEEDLES) && body.includes("Your last payment didn"));
    const sec = await text(await get(late, url.sec));
    const sys = await text(await get(late, url.sys));
    check("past due: banner on the section page and the system page too", sec.includes("pd-banner") && sys.includes("pd-banner"));
    check("past due: protected image is served", (await get(late, HERO)).status() === 200);
    const free = await text(await get(late, `/case-studies/${FREE.id}/`));
    check("past due: a free (static) page carries no banner", !free.includes("pd-banner"));
  }

  // ----------------------------------------------- the session itself
  {
    // 1. expired access token, valid refresh token: still entitled, cookie rewritten
    await new Promise((r) => setTimeout(r, 3000));
    q(`insert into public.manual_entitlements (user_id, note) values (${lit(expiring.id)}, 'e2e-expiring');`);
    const refreshesBefore = sb.state.log.filter((l) => l.query === "grant_type=refresh_token").length;
    const cs = await get(expiring, url.cs);
    const body = await text(cs);
    const setCookie = cs.headersArray().filter((h) => h.name.toLowerCase() === "set-cookie").map((h) => h.value);
    check("expired access token + valid refresh token: full content", cs.status() === 200 && hasAll(body, SUMMARY_NEEDLES), `${cs.status()}`);
    check("...the refresh grant was used, and the new session cookie is sent back, hardened", sb.state.log.filter((l) => l.query === "grant_type=refresh_token").length > refreshesBefore && setCookie.length >= 1 && setCookie.every((l) => /HttpOnly; Secure; SameSite=Lax/.test(l)), `${setCookie.length}`);

    // 2. both tokens dead: the gate, signed out, cookies cleared, never an error
    for (const [token, u] of [...sb.state.refresh]) if (u.email === dead.email) sb.state.refresh.delete(token);
    for (const [token, u] of [...sb.state.access]) if (u.email === dead.email) sb.state.access.delete(token);
    sb.state.expiresIn = 3600;
    const r2 = await get(dead, url.cs);
    const b2 = await text(r2);
    check("expired access token and a revoked refresh token: the gate (signed out), no content", r2.status() === 200 && b2.includes("cs-gate") && b2.includes("Already subscribed?") && !hasAny(b2, NEEDLES), `${r2.status()}`);
    check("...and the dead session cookies are removed", r2.headersArray().some((h) => h.name.toLowerCase() === "set-cookie" && /Max-Age=0/.test(h.value)));
    check("...the image is a 404 and the section a redirect", (await get(dead, HERO)).status() === 404 && (await get(dead, url.sec)).status() === 303);

    // 3. a cookie that is not a session at all
    const junk = await browser.newContext({ baseURL: SITE, extraHTTPHeaders: { cookie: "__Host-sb-auth=garbage" } });
    const r3 = await junk.request.get(url.cs, { maxRedirects: 0 });
    const b3 = await r3.text();
    check("a garbage session cookie: the gate, never content or a crash", r3.status() === 200 && b3.includes("cs-gate") && !hasAny(b3, NEEDLES), `${r3.status()}`);
    await junk.close();
  }

  // --------------------------------------------------- Supabase unreachable
  {
    sb.state.down = true;
    const r1 = await get(none, url.cs);
    const b1 = await text(r1);
    check("Supabase down: a signed-in visitor gets a 503 and no content (fails closed), privately", r1.status() === 503 && priv(r1) && !b1.includes("cs-gate") && !hasAny(b1, NEEDLES));
    const r1f = await get(full, url.cs);
    check("Supabase down: even a paying visitor gets the 503, not the content", r1f.status() === 503 && !hasAny(await text(r1f), NEEDLES));
    check("Supabase down: section and system and image the same", (await get(full, url.sec)).status() === 503 && (await get(full, url.sys)).status() === 503 && (await get(full, HERO)).status() === 503);
    const a = await get(anon, url.cs);
    check("Supabase down: a signed-out visitor still gets the gate (nothing to ask)", a.status() === 200 && (await text(a)).includes("cs-gate"));
    const st = await get(anon, `/case-studies/${FREE.id}/`);
    check("Supabase down: free pages are unaffected", st.status() === 200);
    sb.state.down = false;
    check("Supabase back: the paying visitor gets content again", hasAll(await text(await get(full, url.cs)), SUMMARY_NEEDLES));
  }

  // ---------------------------------------------------------------- odd requests
  {
    for (const [name, p] of [["unknown app", "/case-studies/nonexistent/"], ["unknown section", `/case-studies/${LOCKED.id}/not-a-section/`], ["unknown system", "/systems/nonexistent/"]]) {
      const r = await get(full, p);
      check(`${name}: 404 even when entitled`, r.status() === 404 && priv(r));
    }
    for (const raw of ["/protected/%2e%2e/index.html", "/protected/..%2findex.html", "/protected/images/../../index.html", "/protected//images/x.webp", "/protected/images/nothing.webp"]) {
      const r = await rawGet(raw);
      // a path the runtime tidies up to somewhere else answers with a redirect: never the protected file
      check(`raw path ${raw}: never a file`, ([404, 400].includes(r.status) && r.bytes < 2000) || (r.status === 307 && !String(r.headers.location ?? "").startsWith("/protected/")), `${r.status} ${r.bytes} ${r.headers.location ?? ""}`);
    }
    check("a free app's page reached through the Worker route is not private either way", (await get(anon, `/case-studies/${FREE.id}/`)).status() === 200);
  }

  // ----------------------------------------------------- timing (informational)
  console.log("\n== Timing: protected pages with the window open (no network call, so wall time ~ CPU) ==");
  await restartSite(["REVIEW_WINDOW=open"]);

  console.log("\n== Phase 2: review window OPEN ==");
  {
    const before = dbCalls();
    const cs = await get(anon, url.cs);
    const body = await text(cs);
    check("open: a signed-out visitor sees the full case study", cs.status() === 200 && hasAll(body, SUMMARY_NEEDLES) && !body.includes("cs-gate") && priv(cs));
    const sys = await text(await get(anon, url.sys));
    check("open: ...and the full system, and a section page", sys.includes("nodes") && (await get(anon, url.sec)).status() === 200);
    const img = await get(anon, HERO);
    check("open: ...and the protected image", img.status() === 200 && priv(img));
    check("open: no database call was made for any of it", dbCalls() === before);
    check("open: no past-due banner (nothing was asked)", !body.includes("pd-banner"));
    const l = await get(late, url.cs);
    check("open: a past-due visitor sees no banner either", !(await text(l)).includes("pd-banner"));
  }

  // worst case timing
  {
    const worst = lockedApps.map((a) => ({ id: a.id, size: JSON.stringify(a).length })).sort((a, b) => b.size - a.size)[0];
    const heavySystem = lockedApps.filter((a) => a.system).map((a) => ({ id: a.id, size: JSON.stringify(a.system).length })).sort((a, b) => b.size - a.size)[0];
    const measure = async (label, pth, n = 30) => {
      const times = [];
      for (let i = 0; i < n; i++) {
        const t = process.hrtime.bigint();
        const r = await anon.ctx.request.get(pth, { maxRedirects: 0 });
        await r.body();
        times.push(Number(process.hrtime.bigint() - t) / 1e6);
        if (i === 0) times.first = times[0];
      }
      const sorted = [...times].sort((a, b) => a - b);
      const pick = (p) => sorted[Math.min(sorted.length - 1, Math.floor(p * sorted.length))].toFixed(1);
      console.log(`TIMING ${label.padEnd(34)} first ${times[0].toFixed(1)} ms   median ${pick(0.5)} ms   p95 ${pick(0.95)} ms   max ${sorted.at(-1).toFixed(1)} ms   (${pth})`);
      return { first: times[0], median: Number(pick(0.5)), p95: Number(pick(0.95)) };
    };
    console.log(`worst-case app by content size: ${worst.id} (${(worst.size / 1024).toFixed(0)} KB of JSON); heaviest system: ${heavySystem.id}`);
    await measure("static free page (baseline)", `/case-studies/${FREE.id}/`);
    await measure("gate (summary of worst-case app)", `/case-studies/${worst.id}/`).catch(() => {});
    await measure("full case study, worst-case app", `/case-studies/${worst.id}/`);
    await measure("full section page, worst-case app", `/case-studies/${worst.id}/${(loadApp(worst.id).observations[0] ?? {}).section}/`);
    await measure("full system, heaviest system", `/systems/${heavySystem.id}/`);
    await measure("protected image", HERO);
    // floors, to see where the time goes: a JSON route, and an on-request page with no site layout
    await measure("floor: JSON route (/api/auth/me)", "/api/auth/me");
    await measure("floor: minimal on-request page", "/case-studies/nonexistent/");
  }

  // window values other than exactly "open" stay closed
  for (const value of ["OPEN", "true", "closed", ""]) {
    await restartSite([`REVIEW_WINDOW=${value}`]);
    const r = await get(anon, url.cs);
    check(`REVIEW_WINDOW=${JSON.stringify(value)} is closed: the gate`, r.status() === 200 && (await text(r)).includes("cs-gate"));
  }

  // ---------------------------------------------------------------- logs
  const logs = output.join("");
  if (process.env.E2E_SHOW_LOGS) console.log(logs);
  const secrets = [SB_SECRET, PADDLE_CHECKOUT_KEY, PADDLE_RECONCILE_KEY, WEBHOOK_SECRET, full.id, late.id, manual.id, full.email, none.email, ...NEEDLES.slice(0, 5)];
  check("neither Worker logged a key, token, id, address or protected text", secrets.every((s) => !logs.includes(s)), secrets.filter((s) => logs.includes(s)).join(","));
  void siteProc;
  await browser.close();
}

try {
  await main();
} catch (e) {
  failures++;
  console.error("ERROR", e);
} finally {
  stopAll();
  sb.stop();
  paddle.stop();
  for (const f of files) fs.rmSync(f, { force: true });
  console.log(`\n${failures === 0 ? "ALL PASS" : "FAILURES: " + failures}`);
  process.exit(failures === 0 ? 0 : 1);
}
