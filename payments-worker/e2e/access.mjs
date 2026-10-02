#!/usr/bin/env node
/**
 * End-to-end run of the access wording: the locked badges, "Subscribe to explore" and Subscribe buttons that give way for a visitor who has access: the real
 * site Worker and the real payments Worker under `wrangler dev` (workerd),
 * talking through the real service binding, with stand-ins for Supabase (Auth +
 * a Postgres-backed Data API carrying the real migrations) and Paddle (customers,
 * transactions and portal sessions, each behind its own key), and a real
 * Chromium driving the pages.
 *
 * Not part of CI (it needs a local Postgres). Prepare as for e2e/checkout.mjs,
 * build the site (cd ../site && npm run build), then:
 *   PGHOST=127.0.0.1 PGPORT=54329 PGUSER=postgres PGDATABASE=payments_test npm run e2e:access
 */
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { buildRequest } from "../scripts/send-test-event.mjs";
import {
  PADDLE_CANCEL_KEY, PADDLE_CHECKOUT_KEY, PADDLE_PORTAL_KEY, PADDLE_RECONCILE_KEY, SB_PUBLISHABLE, SB_SECRET,
  createPaddleStandin, createSupabaseStandin, lit, q,
} from "./standins.mjs";

const require = createRequire(import.meta.url);
const here = path.dirname(fileURLToPath(import.meta.url));
const paymentsDir = path.resolve(here, "..");
const siteDir = path.resolve(here, "../../site");
const { chromium } = require(path.join(siteDir, "node_modules/playwright-core"));

const SITE = "http://localhost:4321";
const SB_PORT = 54399, PADDLE_PORT = 54397, PAYMENTS_PORT = 8799, SITE_PORT = 4321;
const WEBHOOK_SECRET = "pdl_ntfset_E2E_ONLY_0123456789";
const CLIENT_TOKEN = "test_e2eclienttoken0123456789";
const PRODUCT = "pro_e2e", PRICE_Q = "pri_e2equarterly", PRICE_Y = "pri_e2eyearly";

let failures = 0;
const check = (name, ok, extra = "") => {
  if (!ok) failures++;
  console.log((ok ? "PASS  " : "FAIL  ") + name + (!ok && extra ? `   [${extra}]` : ""));
};

const sb = createSupabaseStandin({ port: SB_PORT });
const paddle = createPaddleStandin({ port: PADDLE_PORT });

const procs = [];
const output = [];
function startWorker(cwd, args) {
  const p = spawn("npx", ["wrangler", ...args], { cwd, detached: true, env: { ...process.env, WRANGLER_SEND_METRICS: "false", NO_COLOR: "1" } });
  for (const s of [p.stdout, p.stderr]) s.on("data", (d) => output.push(String(d)));
  procs.push(p);
  return p;
}
async function waitFor(url, ok, label) {
  for (let i = 0; i < 120; i++) {
    try {
      const r = await fetch(url);
      if (ok(r.status)) return;
    } catch { /* not up yet */ }
    await new Promise((r) => setTimeout(r, 1000));
  }
  throw new Error(`${label} did not start:\n${output.join("")}`);
}
const portFree = async (port) => {
  try { await fetch(`http://127.0.0.1:${port}/`); return false; } catch { return true; }
};
const files = [];
const writeVars = (file, lines) => { fs.writeFileSync(file, lines.join("\n") + "\n"); files.push(file); };

const FAKE_PADDLE = `window.Paddle = { Environment: { set: function () {} }, Initialize: function () {}, Checkout: { open: function () {} } };`;
const sign = (args, userId) => buildRequest(
  { WEBHOOK_URL: `http://127.0.0.1:${PAYMENTS_PORT}/paddle/webhook`, PADDLE_WEBHOOK_SECRET: WEBHOOK_SECRET, TEST_USER_ID: userId, PADDLE_PRODUCT_ID: PRODUCT, PADDLE_PRICE_ID: PRICE_Q },
  args
);
async function sendEvent(r) {
  const res = await fetch(r.url, { method: "POST", headers: r.headers, body: r.body });
  return { status: res.status, body: await res.json().catch(() => null) };
}

const RUN = 20 + Math.floor(Math.random() * 200);
const runIp = (n) => `10.${RUN}.${Math.floor(Math.random() * 250)}.${n}`;

async function newVisitor(browser, ip) {
  const ctx = await browser.newContext({ baseURL: SITE, extraHTTPHeaders: { "cf-connecting-ip": ip } });
  await ctx.route("https://cdn.paddle.com/paddle/v2/paddle.js", (route) => route.fulfill({ contentType: "application/javascript", body: FAKE_PADDLE }));
  const page = await ctx.newPage();
  return { ctx, page };
}
async function logIn(v, email, startPath) {
  await v.page.goto(startPath);
  await v.page.getByLabel("Email").fill(email);
  await v.page.getByRole("button", { name: "Email me a link" }).click();
  await v.page.getByRole("heading", { name: "Check your email" }).waitFor({ timeout: 10000 });
  await v.page.goto(sb.defaultLink(sb.state.otps.at(-1)));
}
const text = (page) => page.locator("body").innerText();
// response.text() is HTML: an apostrophe arrives as &#39;
const plain = (html) => html.replace(/&#39;/g, "'").replace(/&amp;/g, "&");


const PAGES = ["/case-studies/", "/systems/", "/mechanics/streak/", "/finance/", "/what-is-app-gamification/"];

/** What a visitor can actually see on the page right now (display none and hidden ancestors do not count). */
const probe = (page) =>
  page.evaluate(() => {
    const vis = (el) => !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
    const all = (sel) => [...document.querySelectorAll(sel)];
    const text = document.body.innerText;
    const drawer = document.querySelector('.nav__drawer-actions a[href="/subscribe/"]');
    return {
      access: document.documentElement.dataset.access ?? null,
      lockVisible: all("[data-lock-only]").filter(vis).length,
      entitledVisible: all("[data-entitled-only]").filter(vis).length,
      entitledTotal: all("[data-entitled-only]").length,
      forSubscribers: (text.match(/For subscribers/g) ?? []).length,
      subscribeToExplore: (text.match(/Subscribe to explore/g) ?? []).length,
      accessLibrary: all("a").filter((a) => /Access the library/.test(a.textContent) && vis(a)).length,
      headerSubscribe: all(".nav__actions a[href='/subscribe/']").filter(vis).length,
      drawerSubscribeDisplay: drawer ? getComputedStyle(drawer).display : null,
      lockedCards: all(".csc--locked").length,
      lockedCardsDimmed: all(".csc--locked .csc__name").filter((el) => getComputedStyle(el).opacity !== "1").length,
      viewCaseStudy: all(".csc--locked .csc__go").filter((el) => /View case study|Explore the map/.test(el.innerText)).length,
    };
  });

async function main() {
  for (const port of [SITE_PORT, PAYMENTS_PORT, SB_PORT, PADDLE_PORT]) {
    if (!(await portFree(port))) throw new Error(`Something is already listening on port ${port}. Stop it first.`);
  }
  if (!fs.existsSync(path.join(siteDir, "dist/server/wrangler.json"))) throw new Error("Build the site first: cd site && npm run build");

  await sb.start();
  await paddle.start();
  q("delete from public.subscriptions; delete from public.webhook_events; delete from public.manual_entitlements; delete from auth.users;");

  writeVars(path.join(paymentsDir, ".dev.vars"), [
    `SUPABASE_URL=http://127.0.0.1:${SB_PORT}`, `SUPABASE_SECRET_KEY=${SB_SECRET}`, `SUPABASE_PUBLISHABLE_KEY=${SB_PUBLISHABLE}`,
    "PADDLE_ENVIRONMENT=sandbox", `PADDLE_WEBHOOK_SECRET_SANDBOX=${WEBHOOK_SECRET}`, `PADDLE_API_KEY=${PADDLE_RECONCILE_KEY}`,
    `PADDLE_CHECKOUT_API_KEY=${PADDLE_CHECKOUT_KEY}`, `PADDLE_PORTAL_API_KEY=${PADDLE_PORTAL_KEY}`, `PADDLE_CANCEL_API_KEY=${PADDLE_CANCEL_KEY}`,
    `PADDLE_CLIENT_TOKEN=${CLIENT_TOKEN}`, `PADDLE_PRICE_QUARTERLY=${PRICE_Q}`, `PADDLE_PRICE_YEARLY=${PRICE_Y}`, `PADDLE_PRODUCT_ID=${PRODUCT}`,
    `PADDLE_API_BASE_URL=http://127.0.0.1:${PADDLE_PORT}`,
  ]);
  writeVars(path.join(siteDir, "dist/server/.dev.vars"), [`SUPABASE_URL=http://127.0.0.1:${SB_PORT}`, `SUPABASE_PUBLISHABLE_KEY=${SB_PUBLISHABLE}`]);

  startWorker(paymentsDir, ["dev", "--local", "--test-scheduled", "--port", String(PAYMENTS_PORT)]);
  await waitFor(`http://127.0.0.1:${PAYMENTS_PORT}/nothing`, (s) => s === 404, "payments Worker");
  startWorker(siteDir, ["dev", "-c", "dist/server/wrangler.json", "--local", "--port", String(SITE_PORT)]);
  await waitFor(`${SITE}/api/auth/me`, (s) => s === 200, "site Worker");

  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM || "/opt/pw-browsers/chromium" });
  const T0 = Date.parse("2026-10-02T10:00:00Z");
  const at = (s) => new Date(T0 + s * 1000).toISOString();

  // One visitor per access state. Each gets the events that put them in it.
  const states = [
    { name: "signed in, no access", entitled: false, events: () => [] },
    { name: "full access (an active subscription)", entitled: true, events: () => [{ "occurred-at": at(0) }] },
    { name: "past due (still has access)", entitled: true, events: () => [{ "occurred-at": at(0) }, { type: "subscription.updated", status: "past_due", "occurred-at": at(60) }] },
    { name: "active until a chosen end date", entitled: true, events: () => [{ "occurred-at": at(0) }, { type: "subscription.updated", status: "active", "scheduled-cancel": "2027-01-15T00:00:00Z", "occurred-at": at(60) }] },
    { name: "access set by hand", entitled: true, manual: true, events: () => [] },
    { name: "cancelled", entitled: false, events: () => [{ "occurred-at": at(0) }, { type: "subscription.canceled", status: "canceled", "occurred-at": at(60) }] },
    { name: "paused", entitled: false, events: () => [{ "occurred-at": at(0) }, { type: "subscription.paused", status: "paused", "occurred-at": at(60) }] },
  ];

  // ----------------------------------------------------------- signed out
  const anon = await newVisitor(browser, runIp(1));
  const anonHtml = {};
  for (const url of PAGES) {
    await anon.page.goto(url);
    await anon.page.waitForFunction(() => document.documentElement.dataset.access, null, { timeout: 15000 });
    const p = await probe(anon.page);
    anonHtml[url] = await (await anon.ctx.request.get(url)).text();
    const locked = url === "/case-studies/" || url === "/systems/";
    check(`signed out, ${url}: marked as not entitled, the header Subscribe button shown`, p.access === "none" && p.headerSubscribe === 1, JSON.stringify(p));
    if (locked) check(`signed out, ${url}: locked badges and "Subscribe to explore" shown, no unlocked wording, cards dimmed`, p.forSubscribers > 0 && p.subscribeToExplore > 0 && p.entitledVisible === 0 && p.lockedCardsDimmed > 0, JSON.stringify(p));
    if (url === "/finance/" || url === "/what-is-app-gamification/") check(`signed out, ${url}: the Access the library buttons are shown`, p.accessLibrary >= 1, JSON.stringify(p));
    if (url === "/mechanics/streak/") check(`signed out, ${url}: the For subscribers badges are shown`, p.forSubscribers > 0, JSON.stringify(p));
  }

  // ------------------------------------------------- each signed-in state
  let n = 10;
  for (const st of states) {
    const v = await newVisitor(browser, runIp(++n));
    const email = `access.${n}@example.test`;
    await logIn(v, email, "/login/?next=%2F");
    await v.page.waitForURL(`${SITE}/`, { timeout: 15000 });
    const userId = sb.userId(email);
    if (st.manual) q(`insert into public.manual_entitlements (user_id, note) values (${lit(userId)}, 'e2e');`);
    let sub;
    for (const args of st.events()) {
      const ev = sign({ ...args, ...(sub ? { sub } : {}) }, userId);
      sub = sub ?? ev.subId;
      const r = await sendEvent(ev);
      if (r.body?.outcome !== "applied") check(`${st.name}: event applied`, false, JSON.stringify(r));
    }
    for (const url of PAGES) {
      await v.page.goto(url);
      await v.page.waitForFunction(() => document.documentElement.dataset.access, null, { timeout: 15000 });
      await v.page.waitForTimeout(700); // the cards fade to full strength over a short transition
      const p = await probe(v.page);
      const html = await (await v.ctx.request.get(url)).text();
      check(`${st.name}, ${url}: the pre-built HTML is byte-for-byte what a signed-out visitor gets`, html === anonHtml[url]);
      const want = st.entitled ? "entitled" : "none";
      check(`${st.name}, ${url}: marked ${want}`, p.access === want, JSON.stringify(p));
      if (st.entitled) {
        check(`${st.name}, ${url}: no lock-only wording, no Subscribe button, no Access the library button`, p.lockVisible === 0 && p.headerSubscribe === 0 && p.accessLibrary === 0 && p.forSubscribers === 0 && p.subscribeToExplore === 0 && p.drawerSubscribeDisplay === "none", JSON.stringify(p));
        if (url === "/case-studies/" || url === "/systems/") check(`${st.name}, ${url}: every locked card now reads "View case study" or "Explore the map", at full strength`, p.entitledVisible > 0 && p.entitledVisible === p.entitledTotal && p.viewCaseStudy === p.lockedCards && p.lockedCardsDimmed === 0, JSON.stringify(p));
      } else {
        check(`${st.name}, ${url}: the locked wording and Subscribe button stay`, p.headerSubscribe === 1 && p.entitledVisible === 0 && p.drawerSubscribeDisplay !== "none", JSON.stringify(p));
        if (url === "/case-studies/") check(`${st.name}, ${url}: locked badges and "Subscribe to explore" stay`, p.forSubscribers > 0 && p.subscribeToExplore > 0, JSON.stringify(p));
      }
    }
    // access given later is picked up on the next page, not before
    await v.ctx.close();
  }

  // ---------------------------------------- a cancelled user and a link that still gates
  const open = await newVisitor(browser, runIp(40));
  await logIn(open, "access.gate@example.test", "/login/?next=%2F");
  const gate = await open.ctx.request.get("/case-studies/ladder/", { maxRedirects: 0 });
  const gateText = await gate.text();
  check("display only: with no access the link from a swapped badge would still land on the gate, and the server sends no protected text", gate.status() === 200 && /Subscribe/.test(gateText) && !/data-access/.test(gateText));

  // -------------------------------------------------------------- me
  const meAnon = await (await browser.newContext({ baseURL: SITE })).request.get("/api/auth/me");
  check("signed out: /api/auth/me is still just {email: null}", JSON.stringify(await meAnon.json()) === '{"email":null}');

  await new Promise((ok) => setTimeout(ok, 500));
  const logs = output.join("");
  if (process.env.E2E_SHOW_LOGS) console.log(logs);
  check("neither Worker logged a key, token, address or id", ![SB_SECRET, PADDLE_CHECKOUT_KEY, PADDLE_CANCEL_KEY, WEBHOOK_SECRET, "access.1", "access.gate@"].some((s) => logs.includes(s)));

  await browser.close();
}

try {
  await main();
} catch (e) {
  failures++;
  console.error("ERROR", e);
} finally {
  if (failures && process.env.E2E_SHOW_LOGS) console.log(output.join(""));
  for (const p of procs) {
    try { process.kill(-p.pid, "SIGTERM"); } catch { /* already gone */ }
  }
  sb.stop();
  paddle.stop();
  for (const f of files) fs.rmSync(f, { force: true });
  console.log(`\n${failures === 0 ? "ALL PASS" : "FAILURES: " + failures}`);
  process.exit(failures === 0 ? 0 : 1);
}
