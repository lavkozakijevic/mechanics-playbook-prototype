#!/usr/bin/env node
/**
 * End-to-end run of checkout: the real site Worker and the real payments Worker
 * under `wrangler dev` (workerd), talking to each other through the real
 * service binding, with stand-ins for Supabase (Auth + a Postgres-backed Data
 * API carrying the real migrations) and Paddle (e2e/standins.mjs), and a real
 * Chromium driving the page. Paddle.js itself cannot load offline, so the
 * browser is given a stand-in script that records exactly what the page hands
 * to Paddle.Environment.set, Paddle.Initialize and Paddle.Checkout.open.
 *
 * Not part of CI (it needs a local Postgres). Prepare as for e2e/run.mjs, build
 * the site (cd ../site && npm run build), then:
 *   PGHOST=127.0.0.1 PGPORT=54329 PGUSER=postgres PGDATABASE=payments_test npm run e2e:checkout
 */
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { createHmac } from "node:crypto";
import { buildRequest } from "../scripts/send-test-event.mjs";
import {
  PADDLE_CHECKOUT_KEY, PADDLE_RECONCILE_KEY, SB_PUBLISHABLE, SB_SECRET,
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

// ----------------------------------------------------------- the two Workers
const procs = [];
const output = [];
function startWorker(cwd, args, extraEnv = {}) {
  const p = spawn("npx", ["wrangler", ...args], { cwd, detached: true, env: { ...process.env, WRANGLER_SEND_METRICS: "false", NO_COLOR: "1", ...extraEnv } });
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

// ------------------------------------------------------------------- helpers
const FAKE_PADDLE = `
window.__paddle = { calls: [], cb: null };
window.Paddle = {
  Environment: { set: function (e) { window.__paddle.calls.push(["Environment.set", e]); } },
  Initialize: function (o) { window.__paddle.calls.push(["Initialize", { token: o.token, hasCallback: typeof o.eventCallback === "function" }]); window.__paddle.cb = o.eventCallback; },
  Checkout: { open: function (o) { window.__paddle.calls.push(["Checkout.open", JSON.parse(JSON.stringify(o))]); } }
};`;

const sign = (args, userId) => buildRequest(
  { WEBHOOK_URL: `http://127.0.0.1:${PAYMENTS_PORT}/paddle/webhook`, PADDLE_WEBHOOK_SECRET: WEBHOOK_SECRET, TEST_USER_ID: userId, PADDLE_PRODUCT_ID: PRODUCT, PADDLE_PRICE_ID: PRICE_Q },
  args
);
async function sendEvent(r) {
  const res = await fetch(r.url, { method: "POST", headers: r.headers, body: r.body });
  return { status: res.status, body: await res.json().catch(() => null) };
}

// The local rate-limit binding keeps its counts across restarts for a minute, so
// every run uses addresses no earlier run used.
const RUN = 20 + Math.floor(Math.random() * 200);
const runIp = (n) => `10.${RUN}.${Math.floor(Math.random() * 250)}.${n}`;

async function newVisitor(browser, ip) {
  const ctx = await browser.newContext({ baseURL: SITE, extraHTTPHeaders: { "cf-connecting-ip": ip } });
  await ctx.route("https://cdn.paddle.com/paddle/v2/paddle.js", (route) => route.fulfill({ contentType: "application/javascript", body: FAKE_PADDLE }));
  const page = await ctx.newPage();
  const requested = [];
  page.on("request", (r) => requested.push(r.url()));
  return { ctx, page, requested };
}

/** Log in through the page, follow Supabase's default email link, and wait for the page it leads to. */
async function logIn(v, email, startPath) {
  await v.page.goto(startPath);
  await v.page.getByLabel("Email").fill(email);
  await v.page.getByRole("button", { name: "Email me a link" }).click();
  await v.page.getByRole("heading", { name: "Check your email" }).waitFor({ timeout: 10000 });
  const otp = sb.state.otps.at(-1);
  await v.page.goto(sb.defaultLink(otp));
  return otp;
}
const paddleCalls = (page) => page.evaluate(() => window.__paddle?.calls ?? []);
const opened = (page, n = 1) => page.waitForFunction((count) => (window.__paddle?.calls ?? []).filter((c) => c[0] === "Checkout.open").length >= count, n, { timeout: 10000 });
const apiPost = (page, body) =>
  page.evaluate(async (b) => {
    const r = await fetch("/api/checkout", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(b), credentials: "same-origin" });
    return { status: r.status, body: await r.json().catch(() => null) };
  }, body);
const text = (page) => page.locator("body").innerText();

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
    `PADDLE_CHECKOUT_API_KEY=${PADDLE_CHECKOUT_KEY}`, `PADDLE_CLIENT_TOKEN=${CLIENT_TOKEN}`,
    `PADDLE_PRICE_QUARTERLY=${PRICE_Q}`, `PADDLE_PRICE_YEARLY=${PRICE_Y}`, `PADDLE_PRODUCT_ID=${PRODUCT}`,
    `PADDLE_API_BASE_URL=http://127.0.0.1:${PADDLE_PORT}`,
  ]);
  writeVars(path.join(siteDir, "dist/server/.dev.vars"), [`SUPABASE_URL=http://127.0.0.1:${SB_PORT}`, `SUPABASE_PUBLISHABLE_KEY=${SB_PUBLISHABLE}`]);

  // The payments Worker first: the site's service binding looks for it.
  startWorker(paymentsDir, ["dev", "--local", "--test-scheduled", "--port", String(PAYMENTS_PORT)]);
  await waitFor(`http://127.0.0.1:${PAYMENTS_PORT}/nothing`, (s) => s === 404, "payments Worker");
  startWorker(siteDir, ["dev", "-c", "dist/server/wrangler.json", "--local", "--port", String(SITE_PORT)]);
  await waitFor(`${SITE}/api/auth/me`, (s) => s === 200, "site Worker");

  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM || "/opt/pw-browsers/chromium" });
  const T0 = Date.parse("2026-10-02T10:00:00Z");
  const at = (s) => new Date(T0 + s * 1000).toISOString();

  // ============================================================ the journey
  const v1 = await newVisitor(browser, runIp(1));
  const { page, ctx } = v1;
  const email1 = "checkout.one@example.test";

  // 1. a signed-out visitor presses Subscribe
  await page.goto("/subscribe/");
  await page.locator(".sp-plan a.gb-btn").first().click();
  await page.waitForURL(/\/login\/\?next=/);
  check("signed out: Subscribe goes to login carrying the checkout address", new URL(page.url()).searchParams.get("next") === "/checkout/?plan=quarterly", page.url());
  check("login says why it is asking", (await text(page)).includes("You need an account to subscribe"));

  // 2. log in; the destination is remembered in a hardened short-lived cookie
  await page.getByLabel("Email").fill(email1);
  await page.getByRole("button", { name: "Email me a link" }).click();
  await page.getByRole("heading", { name: "Check your email" }).waitFor({ timeout: 10000 });
  const nextCookie = (await ctx.cookies()).find((c) => c.name === "__Host-sb-auth-next");
  check("destination cookie stored: HttpOnly, Secure, SameSite=Lax, Path=/", !!nextCookie && nextCookie.httpOnly && nextCookie.secure && nextCookie.sameSite === "Lax" && nextCookie.path === "/", JSON.stringify(nextCookie));
  check("destination cookie lasts about ten minutes", !!nextCookie && (nextCookie.expires - Date.now() / 1000) > 500 && (nextCookie.expires - Date.now() / 1000) <= 601);
  const otp = sb.state.otps.at(-1);
  check("the email link targets /auth/callback (Supabase's default templates)", otp.redirect_to === `${SITE}/auth/callback`, otp.redirect_to);

  // 3. Supabase's own link, then straight to checkout
  await page.goto(sb.defaultLink(otp));
  await page.waitForURL(`${SITE}/checkout/?plan=quarterly`, { timeout: 15000 });
  check("after login the visitor lands on checkout for the plan they chose", true);
  check("the destination cookie was used once and cleared", !(await ctx.cookies()).some((c) => c.name === "__Host-sb-auth-next"));
  const user1 = sb.userId(email1);
  await opened(page, 1);

  // 4. what the page hands to Paddle.js
  const calls = await paddleCalls(page);
  const open1 = calls.find((c) => c[0] === "Checkout.open")[1];
  check("Paddle.Environment.set('sandbox') first", JSON.stringify(calls[0]) === JSON.stringify(["Environment.set", "sandbox"]), JSON.stringify(calls[0]));
  check("Paddle.Initialize gets the client-side token and an event callback", JSON.stringify(calls[1]) === JSON.stringify(["Initialize", { token: CLIENT_TOKEN, hasCallback: true }]), JSON.stringify(calls[1]));
  check("Paddle.Checkout.open gets the transaction id and the overlay settings", open1.transactionId === "txn_e2e1" && open1.settings.displayMode === "overlay" && open1.settings.successUrl === `${SITE}/checkout/success/`, JSON.stringify(open1));
  check("open() is given only transactionId and settings (no price, user or email)", JSON.stringify(Object.keys(open1).sort()) === '["settings","transactionId"]', JSON.stringify(Object.keys(open1)));

  // 5. what the server asked Paddle for
  const customerCreates = paddle.state.calls.filter((c) => c.method === "POST" && c.path === "/customers");
  const txn1 = paddle.state.transactions[0]?.body;
  check("one Paddle customer was created, with the verified login email", customerCreates.length === 1 && paddle.state.customers[0].email === email1 && paddle.state.customers[0].custom_data?.supabase_user_id === user1);
  check("one transaction: the quarterly price from the allow-list, that customer, our user in custom_data", JSON.stringify(txn1) === JSON.stringify({ items: [{ price_id: PRICE_Q, quantity: 1 }], customer_id: "ctm_e2e1", custom_data: { supabase_user_id: user1 }, collection_mode: "automatic" }), JSON.stringify(txn1));
  check("every Paddle call used the checkout key", paddle.state.calls.every((c) => c.authorization === `Bearer ${PADDLE_CHECKOUT_KEY}`));

  // 6. what reached the browser
  const html = await (await ctx.request.get("/checkout/?plan=quarterly")).text();
  const htmlRes = await ctx.request.get("/checkout/?plan=quarterly");
  check("the checkout page's HTML carries no transaction, price, customer or token", !/txn_|pri_|ctm_|test_e2e|sb_|pdl_/.test(html));
  check("checkout page: no-store, noindex, and a Report-Only CSP naming Paddle", htmlRes.headers()["cache-control"] === "private, no-store" && htmlRes.headers()["x-robots-tag"] === "noindex" && /cdn\.paddle\.com/.test(htmlRes.headers()["content-security-policy-report-only"] ?? "") && !htmlRes.headers()["content-security-policy"]);
  const subscribeRes = await ctx.request.get("/subscribe/");
  check("no CSP on other pages", !subscribeRes.headers()["content-security-policy-report-only"]);
  const hosts = [...new Set(v1.requested.map((u) => new URL(u).host))].sort();
  check("the browser talked only to the site and (stubbed) cdn.paddle.com, never to Supabase or the payments Worker", hosts.every((h) => h === "localhost:4321" || h === "cdn.paddle.com" || h === `127.0.0.1:${SB_PORT}`) && !v1.requested.some((u) => /8799|paddle\/webhook|rest\/v1/.test(u)), hosts.join(","));
  const apiAnswer = await apiPost(page, { plan: "yearly" });
  check("POST /api/checkout answers with exactly the transaction id, the client token and the environment", apiAnswer.status === 200 && JSON.stringify(Object.keys(apiAnswer.body).sort()) === '["clientToken","environment","transactionId"]', JSON.stringify(apiAnswer));
  check("a yearly request used the yearly price", paddle.state.transactions.at(-1).body.items[0].price_id === PRICE_Y);
  check("the customer was reused (found by email), not created again", paddle.state.calls.filter((c) => c.method === "POST" && c.path === "/customers").length === 1 && paddle.state.transactions.at(-1).body.customer_id === "ctm_e2e1");

  // 7. closing the overlay and reopening reuses the transaction
  await page.evaluate(() => window.__paddle.cb({ name: "checkout.closed" }));
  await page.getByRole("button", { name: "Open checkout" }).waitFor();
  const before = paddle.state.transactions.length;
  await page.getByRole("button", { name: "Open checkout" }).click();
  await opened(page, 2);
  const open2 = (await paddleCalls(page)).filter((c) => c[0] === "Checkout.open")[1][1];
  check("reopening after close uses the same transaction and makes no new one", open2.transactionId === "txn_e2e1" && paddle.state.transactions.length === before);

  // 8. spoofed fields are ignored
  const spoof = await apiPost(page, { plan: "quarterly", price_id: "pri_free", priceId: "pri_free", userId: "11111111-1111-4111-8111-111111111111", user_id: "11111111-1111-4111-8111-111111111111", email: "attacker@example.invalid", customer_id: "ctm_other", customerId: "ctm_other" });
  const spoofTxn = paddle.state.transactions.at(-1).body;
  check("extra fields from the browser change nothing", spoof.status === 200 && spoofTxn.items[0].price_id === PRICE_Q && spoofTxn.custom_data.supabase_user_id === user1 && spoofTxn.customer_id === "ctm_e2e1" && !JSON.stringify(paddle.state).includes("attacker@example.invalid") && !JSON.stringify(paddle.state).includes("pri_free"));
  const callsBefore = paddle.state.calls.length;
  for (const plan of ["monthly", "pri_e2equarterly", "", null]) {
    const r = await apiPost(page, { plan });
    check(`plan ${JSON.stringify(plan)} is refused with 400 and Paddle is not called`, r.status === 400 && paddle.state.calls.length === callsBefore);
  }

  // 9. the success page, before and after the webhook
  await page.goto("/checkout/success/");
  await page.evaluate(() => { window.__marker = "same page"; });
  check("success page before the webhook: payment received, access not yet shown", (await text(page)).includes("Payment received") && !(await page.getByRole("link", { name: "Start exploring" }).isVisible()));
  const first = sign({ "occurred-at": at(0) }, user1);
  const applied = await sendEvent(first);
  check("the signed webhook event is applied by the payments Worker", applied.status === 200 && applied.body?.outcome === "applied", JSON.stringify(applied));
  await page.getByRole("heading", { name: "You're in" }).waitFor({ timeout: 15000 });
  check("the page found out by asking the server, without a reload", (await page.evaluate(() => window.__marker)) === "same page" && (await page.getByRole("link", { name: "Start exploring" }).isVisible()));
  const poll = await ctx.request.get("/api/entitlement");
  check("the polling answer is only {state}", poll.status() === 200 && JSON.stringify(await poll.json()) === '{"state":"active"}' && poll.headers()["cache-control"] === "private, no-store");
  const sub1 = first.subId;

  // 10. already subscribed: a message, never a second checkout
  const paddleBefore = paddle.state.calls.length;
  const reqBefore = v1.requested.length;
  await page.goto("/checkout/?plan=yearly");
  check("with access: 'You already have access', no checkout", (await text(page)).includes("You already have access") && !(await page.locator("[data-checkout]").count()));
  check("with access: Paddle.js is not even requested", !v1.requested.slice(reqBefore).some((u) => u.includes("cdn.paddle.com")));
  const refused = await apiPost(page, { plan: "yearly" });
  check("with access: POST /api/checkout answers 409 entitled and Paddle is not called", refused.status === 409 && refused.body.error === "entitled" && paddle.state.calls.length === paddleBefore, JSON.stringify(refused));

  // 11. each other state. The visitor has used up their five attempts a minute
  // (every POST counts, even a refused one), so wait for the limiter's window.
  await new Promise((ok) => setTimeout(ok, 61000));
  const states = [
    ["past_due", { type: "subscription.updated", status: "past_due", sub: sub1, "occurred-at": at(60) }, "Your last payment didn't go through", "past_due"],
    ["paused", { type: "subscription.paused", status: "paused", sub: sub1, "occurred-at": at(120) }, "Your subscription is paused", "paused"],
    ["scheduled cancellation", { type: "subscription.updated", status: "active", sub: sub1, "occurred-at": at(180), "scheduled-cancel": "2027-01-15T00:00:00Z" }, "Your subscription is active until 15 January 2027", "scheduled_cancel"],
  ];
  for (const [name, args, message, reason] of states) {
    const r = await sendEvent(sign(args, user1));
    await page.goto("/checkout/?plan=quarterly");
    const body = await text(page);
    const post = await apiPost(page, { plan: "quarterly" });
    check(`${name}: the page says so, with no checkout`, r.body?.outcome === "applied" && body.includes(message) && !(await page.locator("[data-checkout]").count()), `${r.body?.outcome} | ${body.slice(0, 120)}`);
    check(`${name}: a direct POST is refused with ${reason} and Paddle is not called`, post.status === 409 && post.body.error === reason && paddle.state.calls.length === paddleBefore, JSON.stringify(post));
  }
  // once it is canceled with nothing scheduled they may subscribe again, reusing the customer we know
  const canceled = await sendEvent(sign({ type: "subscription.canceled", status: "canceled", sub: sub1, "occurred-at": at(240) }, user1));
  const callsPrior = paddle.state.calls.length;
  await page.goto("/checkout/?plan=quarterly");
  await opened(page, 1);
  const newCalls = paddle.state.calls.slice(callsPrior);
  const resub = paddle.state.transactions.at(-1).body;
  check("canceled with nothing scheduled: checkout opens again", canceled.body?.outcome === "applied" && (await page.locator("[data-checkout]").count()) === 1);
  check("the returning customer's Paddle id comes from our own record: no Paddle lookup, one transaction", newCalls.length === 1 && newCalls[0].method === "POST" && newCalls[0].path === "/transactions" && resub.customer_id === "ctm_testcustomer", JSON.stringify(newCalls));

  // 12. a hand-set entitlement counts
  const v2 = await newVisitor(browser, runIp(2));
  const email2 = "checkout.two@example.test";
  await logIn(v2, email2, "/login/?next=%2Fcheckout%2F%3Fplan%3Dyearly");
  await v2.page.waitForURL(`${SITE}/checkout/?plan=yearly`, { timeout: 15000 });
  await opened(v2.page, 1); // not entitled yet, so checkout opens; the entitlement is granted next
  q(`insert into public.manual_entitlements (user_id, note) values (${lit(sb.userId(email2))}, 'e2e');`);
  await v2.page.goto("/checkout/?plan=yearly");
  check("a manual entitlement: 'You already have access'", (await text(v2.page)).includes("You already have access"));
  const manualPost = await apiPost(v2.page, { plan: "yearly" });
  check("a manual entitlement: POST is refused with 409", manualPost.status === 409 && manualPost.body.error === "entitled");

  // 13. no session
  const anon = await browser.newContext({ baseURL: SITE });
  const anonPost = await anon.request.post("/api/checkout", { data: { plan: "quarterly" }, headers: { origin: SITE } });
  check("no session: POST /api/checkout is 401", anonPost.status() === 401);
  const anonPage = await anon.request.get("/checkout/?plan=quarterly", { maxRedirects: 0 });
  check("no session: /checkout/ redirects to login", anonPage.status() === 303 && anonPage.headers().location === "/login/?next=%2Fcheckout%2F%3Fplan%3Dquarterly");
  await anon.close();

  // 14. Paddle down: a plain message, nothing leaks
  const v3 = await newVisitor(browser, runIp(3));
  await logIn(v3, "checkout.three@example.test", "/login/?next=%2Fcheckout%2F%3Fplan%3Dyearly");
  await v3.page.waitForURL(`${SITE}/checkout/?plan=yearly`, { timeout: 15000 });
  await opened(v3.page, 1);
  paddle.state.down = true;
  const down = await apiPost(v3.page, { plan: "yearly" });
  check("Paddle down: 503 unavailable and no detail", down.status === 503 && JSON.stringify(down.body) === '{"error":"unavailable"}', JSON.stringify(down));
  paddle.state.down = false;

  // 15. the rate limit on starting checkouts (5 a minute per visitor)
  const answers = [];
  for (let i = 0; i < 6; i++) answers.push((await apiPost(v3.page, { plan: "quarterly" })).status);
  check("rate limit: further attempts within a minute answer 429", answers.includes(429), answers.join(","));
  const limited = await v3.page.evaluate(async () => { const r = await fetch("/api/checkout", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ plan: "quarterly" }) }); return r.headers.get("retry-after"); });
  check("rate limit: Retry-After is set", limited === "60", String(limited));

  // 16. the payments Worker is unreachable from the internet except by its two routes
  const direct = await fetch(`http://127.0.0.1:${PAYMENTS_PORT}/checkout`).then((r) => r.status);
  check("the checkout entrypoint has no URL: /checkout on the payments Worker is a plain 404", direct === 404);

  // 17. logs
  await new Promise((ok) => setTimeout(ok, 800));
  const logs = output.join("");
  if (process.env.E2E_SHOW_LOGS) console.log(logs);
  const secrets = [SB_SECRET, PADDLE_CHECKOUT_KEY, PADDLE_RECONCILE_KEY, WEBHOOK_SECRET, CLIENT_TOKEN, user1, sb.userId(email2), email1, email2, "checkout.three", "txn_e2e", "ctm_e2e", "ctm_testcustomer", "hash", "attacker@example.invalid"];
  check("neither Worker logged a key, token, id or address", secrets.every((s) => !logs.includes(s)), secrets.filter((s) => logs.includes(s)).join(","));
  check("the payments Worker logged the checkout outcomes (plan and outcome only)", /"evt":"checkout".*"outcome":"created"/.test(logs) && /"state":"entitled"/.test(logs));

  await browser.close();
}

try {
  await main();
} catch (e) {
  failures++;
  console.error("ERROR", e);
} finally {
  for (const p of procs) {
    try { process.kill(-p.pid, "SIGTERM"); } catch { /* already gone */ }
  }
  sb.stop();
  paddle.stop();
  for (const f of files) fs.rmSync(f, { force: true });
  console.log(`\n${failures === 0 ? "ALL PASS" : "FAILURES: " + failures}`);
  process.exit(failures === 0 ? 0 : 1);
}
