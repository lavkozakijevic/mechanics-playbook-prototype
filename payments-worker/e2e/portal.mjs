#!/usr/bin/env node
/**
 * End-to-end run of the account page and the customer portal link: the real
 * site Worker and the real payments Worker under `wrangler dev` (workerd),
 * talking through the real service binding, with stand-ins for Supabase (Auth +
 * a Postgres-backed Data API carrying the real migrations) and Paddle (customers,
 * transactions and portal sessions, each behind its own key), and a real
 * Chromium driving the pages.
 *
 * Not part of CI (it needs a local Postgres). Prepare as for e2e/checkout.mjs,
 * build the site (cd ../site && npm run build), then:
 *   PGHOST=127.0.0.1 PGPORT=54329 PGUSER=postgres PGDATABASE=payments_test npm run e2e:portal
 */
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { buildRequest } from "../scripts/send-test-event.mjs";
import {
  PADDLE_CHECKOUT_KEY, PADDLE_PORTAL_KEY, PADDLE_RECONCILE_KEY, SB_PUBLISHABLE, SB_SECRET,
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
const PORTAL_ORIGIN = `http://127.0.0.1:${PADDLE_PORT}`;

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
const portalKeyCalls = () => paddle.state.calls.filter((c) => c.authorization === `Bearer ${PADDLE_PORTAL_KEY}`);
const sessionCalls = () => paddle.state.calls.filter((c) => c.path.endsWith("/portal-sessions"));

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
    `PADDLE_CHECKOUT_API_KEY=${PADDLE_CHECKOUT_KEY}`, `PADDLE_PORTAL_API_KEY=${PADDLE_PORTAL_KEY}`, `PADDLE_CLIENT_TOKEN=${CLIENT_TOKEN}`,
    `PADDLE_PRICE_QUARTERLY=${PRICE_Q}`, `PADDLE_PRICE_YEARLY=${PRICE_Y}`, `PADDLE_PRODUCT_ID=${PRODUCT}`,
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

  // ================================================================ signed out
  const anon = await browser.newContext({ baseURL: SITE });
  const noPaddle = paddle.state.calls.length;
  const a1 = await anon.request.get("/account/", { maxRedirects: 0 });
  check("signed out: /account/ goes to login and comes back", a1.status() === 303 && a1.headers().location === "/login/?next=%2Faccount%2F", `${a1.status()} ${a1.headers().location}`);
  const a2 = await anon.request.get("/account/billing/", { maxRedirects: 0 });
  check("signed out: /account/billing/ goes to login and comes back", a2.status() === 303 && a2.headers().location === "/login/?next=%2Faccount%2Fbilling%2F", a2.headers().location);
  const a3 = await anon.request.get("/account/billing/?to=payment", { maxRedirects: 0 });
  check("signed out: the payment target survives the login round trip", a3.status() === 303 && a3.headers().location === "/login/?next=%2Faccount%2Fbilling%2F%3Fto%3Dpayment", a3.headers().location);
  const a4 = await anon.request.post("/account/", { maxRedirects: 0, headers: { origin: SITE } });
  check("signed out: POST to the account page is 405", a4.status() === 405);
  check("signed out: nothing reached Paddle", paddle.state.calls.length === noPaddle);
  await anon.close();

  // ============================================== signed in, no Paddle customer
  const v1 = await newVisitor(browser, runIp(1));
  const { page, ctx } = v1;
  const email1 = "account.one@example.test";
  await logIn(v1, email1, "/login/?next=%2Faccount%2F");
  await page.waitForURL(`${SITE}/account/`, { timeout: 15000 });
  check("login with next=/account/ lands on the account page", true);
  const user1 = sb.userId(email1);

  let body = await text(page);
  check("account page: the email, and Sign out", body.includes(email1) && (await page.locator("[data-signout]").count()) === 1);
  check("account page: no Billing link without a Paddle customer", (await page.locator('a[href="/account/billing/"]').count()) === 0);
  const acct = await ctx.request.get("/account/");
  const acctHtml = await acct.text();
  check("account page: no-store, noindex", acct.headers()["cache-control"] === "private, no-store" && acct.headers()["x-robots-tag"] === "noindex");
  const leakRe = /(?:txn_|pri_|ctm_|sub_|test_e2e|sb_|pdl_|portal|entitle)/i;
  check("account page: no key, id, token or entitlement data in the HTML", !leakRe.test(acctHtml), (acctHtml.match(new RegExp("[\\s\\S]{0,60}" + leakRe.source + "[\\s\\S]{0,60}", "i")) ?? [""])[0]);

  const billingNone = await ctx.request.get("/account/billing/", { maxRedirects: 0 });
  const billingNoneText = await billingNone.text();
  check("no customer: /account/billing/ is a 404 page that says so", billingNone.status() === 404 && billingNoneText.includes("No billing to manage"), `${billingNone.status()}`);
  check("no customer: Paddle was not asked for a portal session", sessionCalls().length === 0);

  // the header on a pre-built page
  await page.goto("/");
  await page.locator(".nav__who").first().waitFor({ timeout: 10000 });
  const who = page.locator(".nav__actions .nav__who");
  check("header: the email is a link to /account/", (await who.getAttribute("href")) === "/account/" && (await who.innerText()) === email1);
  const staticSignedIn = await (await ctx.request.get("/subscribe/")).text();
  const anonCtx = await browser.newContext({ baseURL: SITE });
  const staticAnon = await (await anonCtx.request.get("/subscribe/")).text();
  await anonCtx.close();
  check("pre-built pages are identical for everyone: the header HTML is signed-out for a signed-in visitor too", staticSignedIn === staticAnon && !staticAnon.includes("/account/"));

  // ==================================================== a subscription exists
  const first = sign({ "occurred-at": at(0) }, user1);
  const applied = await sendEvent(first);
  check("a signed webhook event records the subscription", applied.status === 200 && applied.body?.outcome === "applied", JSON.stringify(applied));
  const sub1 = first.subId;

  await page.goto("/account/");
  const billingLink = page.locator('a[href="/account/billing/"]');
  check("account page: Billing appears once a Paddle customer is on record", (await billingLink.count()) === 1 && (await text(page)).includes("Update your card, cancel or download invoices."));

  // the click: a redirect to the portal, nothing more
  await billingLink.click();
  await page.waitForURL(/\/portal\/tok_general_1$/, { timeout: 15000 });
  check("Billing opens the general portal link", page.url() === `${PORTAL_ORIGIN}/portal/tok_general_1`, page.url());
  check("exactly one portal session, made with the portal key, for the customer in our own record, with no subscription ids",
    sessionCalls().length === 1 && sessionCalls()[0].authorization === `Bearer ${PADDLE_PORTAL_KEY}` && paddle.state.portalSessions[0].customer === "ctm_testcustomer" && JSON.stringify(paddle.state.portalSessions[0].body) === "{}",
    JSON.stringify(paddle.state.portalSessions));
  check("the portal key was used for portal sessions only, and the checkout key never for one", portalKeyCalls().every((c) => c.path.endsWith("/portal-sessions")) && !paddle.state.calls.some((c) => c.path.endsWith("/portal-sessions") && c.authorization === `Bearer ${PADDLE_CHECKOUT_KEY}`));

  const direct = await ctx.request.get("/account/billing/", { maxRedirects: 0 });
  const directBody = await direct.text();
  check("the answer is a 303 to the portal, no-store, with no body", direct.status() === 303 && direct.headers().location === `${PORTAL_ORIGIN}/portal/tok_general_2` && direct.headers()["cache-control"] === "private, no-store" && directBody === "", `${direct.status()} ${directBody.slice(0, 40)}`);
  check("a new session is made on every visit (links are not kept)", sessionCalls().length === 2);
  check("the referrer sent on is the site's origin only", direct.headers()["referrer-policy"] === "strict-origin");

  // ----------------------------------------------------- the payment deep link
  const callsBeforeDue = sessionCalls().length;
  const due = await sendEvent(sign({ type: "subscription.updated", status: "past_due", sub: sub1, "occurred-at": at(60) }, user1));
  check("the subscription goes past_due", due.body?.outcome === "applied");
  const deep = await ctx.request.get("/account/billing/?to=payment", { maxRedirects: 0 });
  const deepSession = paddle.state.portalSessions.at(-1);
  check("past_due + ?to=payment: the update-payment-method deep link, asked for that one subscription", deep.status() === 303 && /\/portal\/tok_payment_\d+\/update-payment-method$/.test(deep.headers().location) && JSON.stringify(deepSession.body) === JSON.stringify({ subscription_ids: [sub1] }), `${deep.headers().location} ${JSON.stringify(deepSession)}`);
  const cancelTarget = await ctx.request.get("/account/billing/?to=cancel", { maxRedirects: 0 });
  check("an unknown target is the general link and names no subscription", cancelTarget.status() === 303 && /\/portal\/tok_general_\d+$/.test(cancelTarget.headers().location) && JSON.stringify(paddle.state.portalSessions.at(-1).body) === "{}", cancelTarget.headers().location);
  check("three more sessions, no more", sessionCalls().length === callsBeforeDue + 2);

  // the messages that now carry links (the checkout page renders every state)
  await page.goto("/checkout/?plan=quarterly");
  body = await text(page);
  check("past_due page: 'Update payment method' goes to the payment target, the library is the small link", body.includes("Your last payment didn't go through") && body.includes("You still have access for now. Update your payment method to keep it.") && (await page.locator('a[href="/account/billing/?to=payment"]').count()) === 1 && (await page.locator('a[href="/case-studies/"]').count()) >= 1);
  check("past_due page: no placeholder wording", !/emails Paddle|coming soon/i.test(body));

  await sendEvent(sign({ type: "subscription.paused", status: "paused", sub: sub1, "occurred-at": at(120) }, user1));
  await page.goto("/checkout/?plan=quarterly");
  body = await text(page);
  const pausedHtml = await page.content();
  check("paused page: asks to get in touch at the site's contact address, with an Email us button", body.includes("Your subscription is paused") && body.includes("contact us at lav@gamebizconsulting.com") && (await page.locator('a[href="mailto:lav@gamebizconsulting.com"]').count()) >= 1);
  check("paused page: no billing link and no resume call", !pausedHtml.includes("/account/billing") && !body.includes("coming soon"));

  await sendEvent(sign({ type: "subscription.updated", status: "active", sub: sub1, "occurred-at": at(180), "scheduled-cancel": "2027-01-15T00:00:00Z" }, user1));
  await page.goto("/checkout/?plan=quarterly");
  body = await text(page);
  check("'active until' page: Manage billing links to the general portal link", body.includes("Your subscription is active until 15 January 2027") && (await page.locator('a[href="/account/billing/"]', { hasText: "Manage billing" }).count()) === 1);

  await sendEvent(sign({ type: "subscription.updated", status: "active", sub: sub1, "occurred-at": at(240) }, user1));
  await page.goto("/checkout/?plan=quarterly");
  check("'You already have access' page: Manage billing is there too", (await text(page)).includes("You already have access") && (await page.locator('a[href="/account/billing/"]', { hasText: "Manage billing" }).count()) === 1);

  // canceled: no longer entitled, still has a customer, still gets a link (invoices)
  await sendEvent(sign({ type: "subscription.canceled", status: "canceled", sub: sub1, "occurred-at": at(300) }, user1));
  await page.goto("/account/");
  check("a canceled subscriber still sees Billing (for invoices)", (await page.locator('a[href="/account/billing/"]').count()) === 1);

  // ===================================================================== sign out
  await page.locator("[data-signout]").click();
  await page.waitForURL(`${SITE}/`, { timeout: 15000 });
  await page.locator('a:has-text("Log in")').first().waitFor({ timeout: 10000 });
  check("Sign out on the account page ends the session and goes home", (await ctx.cookies()).filter((c) => c.name.startsWith("__Host-sb-auth")).length === 0);
  const afterOut = await ctx.request.get("/account/", { maxRedirects: 0 });
  check("after sign out the account page asks for login", afterOut.status() === 303);

  // the minute's allowance for this visitor is used; later checks use a new one
  await new Promise((ok) => setTimeout(ok, 61000));

  // ============================================== refusals, with a second visitor
  const v2 = await newVisitor(browser, runIp(2));
  const email2 = "account.two@example.test";
  await logIn(v2, email2, "/login/?next=%2Faccount%2F");
  await v2.page.waitForURL(`${SITE}/account/`, { timeout: 15000 });
  const user2 = sb.userId(email2);
  const sub2 = (await (async () => { const e = sign({ "occurred-at": at(400) }, user2); await sendEvent(e); return e.subId; })());

  const sessionsBefore = sessionCalls().length;
  const crossSite = await v2.ctx.request.get("/account/billing/", { maxRedirects: 0, headers: { "sec-fetch-site": "cross-site" } });
  check("a request from another site is refused and makes no session", crossSite.status() === 403 && plain(await crossSite.text()).includes("That link didn't work") && sessionCalls().length === sessionsBefore, `${crossSite.status()}`);

  const spoofed = await v2.ctx.request.get("/account/billing/?to=payment&customer_id=ctm_evilvictim&customerId=ctm_evilvictim&subscription_ids=sub_evilvictim&email=victim@example.invalid&user_id=00000000-0000-4000-8000-000000000000", { maxRedirects: 0 });
  const spoofSession = paddle.state.portalSessions.at(-1);
  check("customer, subscription, email and user named in the query are ignored", spoofed.status() === 303 && spoofSession.customer === "ctm_testcustomer" && JSON.stringify(spoofSession.body) === "{}" && !JSON.stringify(paddle.state.calls).includes("evilvictim"), JSON.stringify(spoofSession));

  // two distinct customers on one user
  q(`insert into public.subscriptions (paddle_subscription_id, user_id, paddle_customer_id, status, price_id, product_id, last_event_occurred_at) values ('sub_testsecond', ${lit(user2)}, 'ctm_othercustomer', 'canceled', ${lit(PRICE_Q)}, ${lit(PRODUCT)}, now());`);
  const sessionsAmbiguous = sessionCalls().length;
  const amb = await v2.ctx.request.get("/account/billing/", { maxRedirects: 0 });
  const ambText = plain(await amb.text());
  check("two Paddle customers on one user: refused with a contact message, no session made", amb.status() === 409 && ambText.includes("We can't open billing") && ambText.includes("lav@gamebizconsulting.com") && sessionCalls().length === sessionsAmbiguous, `${amb.status()}`);
  q("delete from public.subscriptions where paddle_subscription_id = 'sub_testsecond';");

  // Paddle failing, and a portal link on another host
  paddle.state.down = true;
  const down = await v2.ctx.request.get("/account/billing/", { maxRedirects: 0 });
  const downText = plain(await down.text());
  check("Paddle down: a plain 503 page, no detail", down.status() === 503 && downText.includes("Billing isn't available right now") && !/ctm_|sub_|portal\//.test(downText.replace(/\/account\//g, "")), `${down.status()}`);
  paddle.state.down = false;
  paddle.state.portalStatus = 404;
  const refused = await v2.ctx.request.get("/account/billing/", { maxRedirects: 0 });
  check("Paddle refusing the session: the same plain 503 page", refused.status() === 503 && plain(await refused.text()).includes("Billing isn't available right now"));
  paddle.state.portalStatus = 201;

  // rate limit: five a minute for this visitor, and v2 has used five by now
  const answers = [];
  for (let i = 0; i < 6; i++) answers.push((await v2.ctx.request.get("/account/billing/", { maxRedirects: 0 })).status());
  const limited = await v2.ctx.request.get("/account/billing/", { maxRedirects: 0 });
  check("rate limit: further visits within a minute answer 429 with Retry-After", answers.includes(429) && limited.status() === 429 && limited.headers()["retry-after"] === "60", answers.join(","));

  // ============================== a hand-set entitlement: access, but no Paddle customer
  const v3 = await newVisitor(browser, runIp(3));
  const email3 = "account.three@example.test";
  await logIn(v3, email3, "/login/?next=%2Faccount%2F");
  await v3.page.waitForURL(`${SITE}/account/`, { timeout: 15000 });
  q(`insert into public.manual_entitlements (user_id, note) values (${lit(sb.userId(email3))}, 'e2e');`);
  await v3.page.goto("/account/");
  check("manual entitlement only: the account page has no Billing link", (await v3.page.locator('a[href="/account/billing/"]').count()) === 0);
  await v3.page.goto("/checkout/?plan=yearly");
  const manualBody = await text(v3.page);
  check("manual entitlement only: 'You already have access' with no Manage billing", manualBody.includes("You already have access") && (await v3.page.locator('a[href="/account/billing/"]').count()) === 0);
  const sessionsManual = sessionCalls().length;
  const manual = await v3.ctx.request.get("/account/billing/", { maxRedirects: 0 });
  check("manual entitlement only: /account/billing/ is the 404 page and Paddle is not called", manual.status() === 404 && sessionCalls().length === sessionsManual);

  // =========================================================== the payments Worker
  const direct404 = await fetch(`http://127.0.0.1:${PAYMENTS_PORT}/portal`).then((r) => r.status);
  check("the portal entrypoint has no URL: /portal on the payments Worker is a plain 404", direct404 === 404);

  // ================================================================ logs
  await new Promise((ok) => setTimeout(ok, 800));
  const logs = output.join("");
  if (process.env.E2E_SHOW_LOGS) console.log(logs);
  const secrets = [SB_SECRET, PADDLE_CHECKOUT_KEY, PADDLE_PORTAL_KEY, PADDLE_RECONCILE_KEY, WEBHOOK_SECRET, CLIENT_TOKEN, user1, user2, email1, email2, email3, "tok_general", "tok_payment", "tok_cancel", "/portal/", "ctm_testcustomer", "ctm_othercustomer", "ctm_evilvictim", sub1, sub2, "hash"];
  check("neither Worker logged a key, token, id, address or portal URL", secrets.every((s) => !logs.includes(s)), secrets.filter((s) => logs.includes(s)).join(","));
  check("the payments Worker logged the portal outcomes (target and outcome only)", /"evt":"portal".*"outcome":"created"/.test(logs) && /customer_ambiguous/.test(logs));
  void sub2;

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
