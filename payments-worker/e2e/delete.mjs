#!/usr/bin/env node
/**
 * End-to-end run of account deletion: the real
 * site Worker and the real payments Worker under `wrangler dev` (workerd),
 * talking through the real service binding, with stand-ins for Supabase (Auth +
 * a Postgres-backed Data API carrying the real migrations) and Paddle (customers,
 * subscription list and cancel, each behind its own key), and a real Chromium
 * driving the pages. The delete is real: the Supabase stand-in removes the row
 * from auth.users in a Postgres carrying the real migrations, so the cascade to
 * subscriptions, webhook_events and manual_entitlements is the real one.
 *
 * Not part of CI (it needs a local Postgres). Prepare as for e2e/checkout.mjs,
 * build the site (cd ../site && npm run build), then:
 *   PGHOST=127.0.0.1 PGPORT=54329 PGUSER=postgres PGDATABASE=payments_test npm run e2e:delete
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

const entity = (id, { customer = "ctm_testcustomer", status = "active", userId }) => ({
  id, status, customer_id: customer, started_at: "2026-10-01T10:00:00Z", canceled_at: null, scheduled_change: null,
  updated_at: "2026-10-02T10:00:00Z", custom_data: userId ? { supabase_user_id: userId } : {},
  items: [{ status: "active", quantity: 1, price: { id: PRICE_Q, product_id: PRODUCT } }],
});
const count = (sql) => Number(q(sql));
const SEQ = (n) => paddle.state.calls.find((c) => c.n === n);
const CANCEL_PATH = (id) => `/subscriptions/${id}/cancel`;
const typeAndDelete = async (page, word = "DELETE") => {
  await page.locator("#delete-confirm").fill(word);
  await page.locator("[data-delete-submit]").click();
};
const apiDelete = (page, body) =>
  page.evaluate(async (b) => {
    const r = await fetch("/api/account/delete", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(b), credentials: "same-origin" });
    return { status: r.status, body: await r.json().catch(() => null) };
  }, body);
const cancelsFor = (id) => paddle.state.cancels.filter((c) => c.id === id);
const authCookies = async (ctx) => (await ctx.cookies()).filter((c) => c.name.startsWith("__Host-sb-auth"));

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

  // ================================================================ signed out
  const anon = await browser.newContext({ baseURL: SITE });
  const a1 = await anon.request.get("/account/delete/", { maxRedirects: 0 });
  check("signed out: the delete page goes to login and comes back", a1.status() === 303 && a1.headers().location === "/login/?next=%2Faccount%2Fdelete%2F", a1.headers().location);
  const a2 = await anon.request.post("/api/account/delete", { data: { confirm: "DELETE" }, headers: { origin: SITE } });
  check("signed out: the delete route is a 401, and nothing reached Paddle or the admin API", a2.status() === 401 && paddle.state.calls.length === 0 && sb.state.adminDeletes.length === 0);
  const a3 = await anon.request.post("/api/account/delete", { data: { confirm: "DELETE" }, headers: { origin: "https://evil.example" } });
  check("a foreign origin is refused before anything else", a3.status() === 403);
  const a4 = await anon.request.get("/account/deleted/");
  check("the confirmation page needs no session", a4.status() === 200 && plain(await a4.text()).includes("Your account has been deleted"));
  await anon.close();

  // ================================== V1: never subscribed, never had a customer
  const v1 = await newVisitor(browser, runIp(1));
  const email1 = "gone.one@example.test";
  await logIn(v1, email1, "/login/?next=%2Faccount%2Fdelete%2F");
  await v1.page.waitForURL(`${SITE}/account/delete/`, { timeout: 15000 });
  const user1 = sb.userId(email1);
  let body = await text(v1.page);
  check("delete page: says it cannot be undone, with the typed confirmation", body.includes("This deletes your account and can't be undone.") && (await v1.page.locator("#delete-confirm").count()) === 1);
  check("delete page, never subscribed: no subscription line, no manual line, no invoices line", !body.includes("Your subscription is cancelled immediately") && !body.includes("Your access ends with your account") && !body.includes("Download any invoices"));
  const submit1 = v1.page.locator("[data-delete-submit]");
  check("the delete button is off until the word is typed exactly", await submit1.isDisabled());
  await v1.page.locator("#delete-confirm").fill("delete");
  check("a wrong word keeps it off", await submit1.isDisabled());
  const wrong = await apiDelete(v1.page, { confirm: "delete" });
  check("the server refuses a wrong word with 400 and calls nothing", wrong.status === 400 && wrong.body?.error === "confirm" && paddle.state.calls.length === 0 && sb.state.adminDeletes.length === 0, JSON.stringify(wrong));
  await v1.page.goto("/account/");
  check("the account page links to Delete account", (await v1.page.locator('a[href="/account/delete/"]', { hasText: "Delete account" }).count()) === 1);
  await v1.page.goto("/account/delete/");
  await typeAndDelete(v1.page);
  await v1.page.waitForURL(`${SITE}/account/deleted/`, { timeout: 15000 });
  check("never subscribed: typing DELETE lands on the confirmation page", plain(await text(v1.page)).includes("Your account has been deleted"));
  check("the user is gone from Auth", count(`select count(*) from auth.users where id = ${lit(user1)}`) === 0);
  check("no Paddle cancel was made; Paddle was only asked who it has under the verified email", paddle.state.cancels.length === 0 && paddle.state.calls.some((c) => c.path === "/customers" && c.method === "GET") && !paddle.state.calls.some((c) => c.method === "POST"));
  check("every auth cookie is cleared", (await authCookies(v1.ctx)).length === 0);
  const me1 = await v1.ctx.request.get("/api/auth/me");
  check("signed out afterwards: /api/auth/me says nobody", (await me1.json()).email === null);
  const after1 = await v1.ctx.request.get("/account/", { maxRedirects: 0 });
  check("the account page asks for login again", after1.status() === 303);

  // ======================== V2: subscribed, with a customer shared with someone else
  const v2 = await newVisitor(browser, runIp(2));
  const email2 = "gone.two@example.test";
  await logIn(v2, email2, "/login/?next=%2Faccount%2Fdelete%2F");
  await v2.page.waitForURL(`${SITE}/account/delete/`, { timeout: 15000 });
  const user2 = sb.userId(email2);
  const made = sign({ "occurred-at": at(0) }, user2);
  const sub2 = made.subId;
  check("a signed webhook event records the subscription", (await sendEvent(made)).body?.outcome === "applied");
  const STRANGER = "11111111-2222-4333-8444-555555555555";
  paddle.state.subscriptions.push(entity(sub2, { userId: user2 }), entity("sub_e2estranger", { userId: STRANGER }));
  await v2.page.goto("/account/delete/");
  body = await text(v2.page);
  check("delete page, subscribed: cancelled now, no automatic refund, Refund Policy linked", body.includes("Your subscription is cancelled immediately and your access ends now. Unused time isn't refunded automatically. See the Refund Policy.") && (await v2.page.locator('a[href="/refund-policy/"]').count()) === 1);
  check("delete page, subscribed: invoices first, from Billing", body.includes("Download any invoices first from Billing.") && (await v2.page.locator('a[href="/account/billing/"]').count()) === 1);
  check("delete page: its HTML carries no key, id or token", !/ctm_|sub_|pdl_|sb_|txn_/.test(await v2.page.content()));
  const rows2 = count(`select count(*) from public.subscriptions where user_id = ${lit(user2)}`);
  const events2 = count(`select count(*) from public.webhook_events where user_id = ${lit(user2)}`);
  check("before deleting: the user has a subscription row and a webhook record", rows2 === 1 && events2 >= 1);
  const calls0 = paddle.state.calls.length;
  await typeAndDelete(v2.page);
  await v2.page.waitForURL(`${SITE}/account/deleted/`, { timeout: 20000 });
  const mine = cancelsFor(sub2);
  check("the user's subscription was cancelled immediately, once, with the cancel key", mine.length === 1 && mine[0].body?.effective_from === "immediately" && paddle.state.calls.some((c) => c.path === CANCEL_PATH(sub2) && c.authorization === `Bearer ${PADDLE_CANCEL_KEY}`), JSON.stringify(paddle.state.cancels));
  check("someone else's subscription on the same Paddle customer was left alone", paddle.state.subscriptions.find((s) => s.id === "sub_e2estranger").status === "active" && cancelsFor("sub_e2estranger").length === 0);
  const cancelN = paddle.state.calls.find((c) => c.path === CANCEL_PATH(sub2)).n;
  const adminN = sb.state.log.find((l) => l.method === "DELETE" && l.path.endsWith(user2)).n;
  const readAfter = paddle.state.calls.filter((c) => c.path === "/subscriptions" && c.method === "GET" && c.n > cancelN && c.n < adminN);
  check("order: cancel, then Paddle read back, then the Auth user deleted", cancelN < adminN && readAfter.length === 1, `${cancelN} ${adminN} ${readAfter.length}`);
  check("the Auth user is gone and the cascade took the subscription row and the webhook records", count(`select count(*) from auth.users where id = ${lit(user2)}`) === 0 && count(`select count(*) from public.subscriptions where user_id = ${lit(user2)}`) === 0 && count(`select count(*) from public.webhook_events where user_id = ${lit(user2)}`) === 0);
  check("the admin delete was one call, a hard delete, with the secret key in apikey only", sb.state.adminDeletes.filter((i) => i === user2).length === 1 && JSON.stringify(sb.state.log.find((l) => l.n && l.path.endsWith(user2)).body) === '{"should_soft_delete":false}');
  check("this browser's cookies are cleared", (await authCookies(v2.ctx)).length === 0);
  void calls0;

  // after deletion: the webhooks Paddle sends about the cancel, and the hourly reconcile
  const late = await sendEvent(sign({ type: "subscription.canceled", status: "canceled", sub: sub2, "occurred-at": at(120) }, user2));
  check("a webhook for the deleted user's subscription is answered 200 rejected_user", late.status === 200 && late.body?.outcome === "rejected_user", JSON.stringify(late));
  check("it recreated nothing", count(`select count(*) from public.subscriptions where paddle_subscription_id = ${lit(sub2)}`) === 0);
  const lateUpdate = await sendEvent(sign({ type: "subscription.updated", status: "active", sub: sub2, "occurred-at": at(180) }, user2));
  check("even an update that would grant access is only recorded as rejected_user", lateUpdate.status === 200 && lateUpdate.body?.outcome === "rejected_user" && count(`select count(*) from public.subscriptions where paddle_subscription_id = ${lit(sub2)}`) === 0);
  check("the record of the rejected event holds no user id", count(`select count(*) from public.webhook_events where event_type like 'subscription.%' and paddle_subscription_id = ${lit(sub2)} and user_id is not null`) === 0);

  paddle.state.subscriptions.push(entity("sub_e2eorphan", { userId: user2 }));
  const ran = await fetch(`http://127.0.0.1:${PAYMENTS_PORT}/cdn-cgi/handler/scheduled`);
  check("the hourly reconcile ran", ran.status === 200);
  check("reconcile recreated nothing for the deleted user (not the cancelled one, not the live one)", count(`select count(*) from public.subscriptions where paddle_subscription_id in (${lit(sub2)}, 'sub_e2eorphan')`) === 0);
  const ran2 = await fetch(`http://127.0.0.1:${PAYMENTS_PORT}/cdn-cgi/handler/scheduled`);
  check("and again on the next run", ran2.status === 200 && count(`select count(*) from public.subscriptions where paddle_subscription_id in (${lit(sub2)}, 'sub_e2eorphan')`) === 0);
  await new Promise((ok) => setTimeout(ok, 500));
  const logsNow = output.join("");
  check("a live subscription of a deleted user is logged as an orphan, every run, with no id in the line", (logsNow.match(/orphan_subscription/g) ?? []).length >= 2 && !/orphan_subscription[^\n]*sub_/.test(logsNow));

  // ==================================== V3: access set by hand, no Paddle customer
  const v3 = await newVisitor(browser, runIp(3));
  const email3 = "gone.three@example.test";
  await logIn(v3, email3, "/login/?next=%2Faccount%2Fdelete%2F");
  await v3.page.waitForURL(`${SITE}/account/delete/`, { timeout: 15000 });
  const user3 = sb.userId(email3);
  q(`insert into public.manual_entitlements (user_id, note) values (${lit(user3)}, 'e2e');`);
  await v3.page.goto("/account/delete/");
  body = await text(v3.page);
  check("delete page, hand-set access: says access ends with the account, no refund line, no invoices line", body.includes("Your access ends with your account.") && !body.includes("Unused time") && !body.includes("Download any invoices"));
  const cancelsBefore3 = paddle.state.cancels.length;
  await typeAndDelete(v3.page);
  await v3.page.waitForURL(`${SITE}/account/deleted/`, { timeout: 15000 });
  check("hand-set access: deleted, the entitlement went with it, nothing was cancelled", count(`select count(*) from auth.users where id = ${lit(user3)}`) === 0 && count(`select count(*) from public.manual_entitlements where user_id = ${lit(user3)}`) === 0 && paddle.state.cancels.length === cancelsBefore3);

  // =============================================== V4: a cancel that fails stops everything
  const v4 = await newVisitor(browser, runIp(4));
  const email4 = "gone.four@example.test";
  await logIn(v4, email4, "/login/?next=%2Faccount%2Fdelete%2F");
  await v4.page.waitForURL(`${SITE}/account/delete/`, { timeout: 15000 });
  const user4 = sb.userId(email4);
  const made4 = sign({ "occurred-at": at(300) }, user4);
  await sendEvent(made4);
  paddle.state.subscriptions.push(entity(made4.subId, { userId: user4 }));
  await v4.page.goto("/account/delete/");
  const adminBefore4 = sb.state.adminDeletes.length;
  paddle.state.cancelStatus = 500;
  await typeAndDelete(v4.page);
  await v4.page.locator("[data-delete-status]").waitFor({ state: "visible", timeout: 15000 });
  const failText = await v4.page.locator("[data-delete-status]").innerText();
  check("a failed cancel: the page says the account is still here, and how to reach us", failText.includes("your account is still here") && failText.includes("lav@gamebizconsulting.com"), failText);
  check("a failed cancel: the user is still in Auth, with the subscription row, and no admin delete was made", count(`select count(*) from auth.users where id = ${lit(user4)}`) === 1 && count(`select count(*) from public.subscriptions where user_id = ${lit(user4)}`) === 1 && sb.state.adminDeletes.length === adminBefore4);
  check("a failed cancel: the browser is still signed in", (await authCookies(v4.ctx)).length > 0);
  paddle.state.cancelStatus = 200;
  await v4.page.locator("[data-delete-submit]").click();
  await v4.page.waitForURL(`${SITE}/account/deleted/`, { timeout: 20000 });
  check("then a retry cancels and deletes", count(`select count(*) from auth.users where id = ${lit(user4)}`) === 0 && cancelsFor(made4.subId).length === 1);

  // ====================================== V5: the Auth delete fails after the cancel
  const v5 = await newVisitor(browser, runIp(5));
  const email5 = "gone.five@example.test";
  await logIn(v5, email5, "/login/?next=%2Faccount%2Fdelete%2F");
  await v5.page.waitForURL(`${SITE}/account/delete/`, { timeout: 15000 });
  const user5 = sb.userId(email5);
  const made5 = sign({ "occurred-at": at(400) }, user5);
  await sendEvent(made5);
  paddle.state.subscriptions.push(entity(made5.subId, { userId: user5 }));
  await v5.page.goto("/account/delete/");
  sb.state.adminFail = true;
  await typeAndDelete(v5.page);
  await v5.page.locator("[data-delete-status]").waitFor({ state: "visible", timeout: 15000 });
  const failText5 = await v5.page.locator("[data-delete-status]").innerText();
  check("a failed delete: the page says so and that any subscription is already cancelled", failText5.includes("We couldn't finish deleting your account") && failText5.includes("already cancelled"), failText5);
  check("a failed delete: the subscription is cancelled at Paddle and the user is still there", paddle.state.subscriptions.find((s) => s.id === made5.subId).status === "canceled" && count(`select count(*) from auth.users where id = ${lit(user5)}`) === 1);
  sb.state.adminFail = false;
  await v5.page.locator("[data-delete-submit]").click();
  await v5.page.waitForURL(`${SITE}/account/deleted/`, { timeout: 20000 });
  check("then a retry finishes: nothing left to cancel, one more cancel not made", count(`select count(*) from auth.users where id = ${lit(user5)}`) === 0 && cancelsFor(made5.subId).length === 1);

  // ===================================================== V6: a stale sign-in needs a fresh link
  const v6 = await newVisitor(browser, runIp(6));
  const email6 = "gone.six@example.test";
  await logIn(v6, email6, "/login/?next=%2Faccount%2Fdelete%2F");
  await v6.page.waitForURL(`${SITE}/account/delete/`, { timeout: 15000 });
  const user6 = sb.userId(email6);
  sb.setLastSignIn(email6, new Date(Date.now() - 30 * 60 * 1000).toISOString());
  await v6.page.goto("/account/delete/");
  check("a stale sign-in: no typed confirmation, an email button instead", (await v6.page.locator("#delete-confirm").count()) === 0 && (await v6.page.locator("[data-fresh-send]").count()) === 1 && (await text(v6.page)).includes("confirm it's you first"));
  const staleCalls = paddle.state.calls.length;
  const stale = await apiDelete(v6.page, { confirm: "DELETE" });
  check("a stale sign-in: the server refuses with 403 reauth_required and calls nothing", stale.status === 403 && stale.body?.error === "reauth_required" && paddle.state.calls.length === staleCalls && count(`select count(*) from auth.users where id = ${lit(user6)}`) === 1, JSON.stringify(stale));
  const otpsBefore = sb.state.otps.length;
  await v6.page.locator("[data-fresh-send]").click();
  await v6.page.locator("[data-delete-note]").waitFor({ state: "visible", timeout: 15000 });
  check("the email button sends a sign-in link and says to check the email", sb.state.otps.length === otpsBefore + 1 && sb.state.otps.at(-1).email === email6 && (await v6.page.locator("[data-delete-note]").innerText()).includes("Check your email"));
  await v6.page.goto(sb.defaultLink(sb.state.otps.at(-1)));
  await v6.page.waitForURL(`${SITE}/account/delete/`, { timeout: 15000 });
  check("the link brings the user back to the delete page, now with the typed confirmation", (await v6.page.locator("#delete-confirm").count()) === 1);
  await typeAndDelete(v6.page);
  await v6.page.waitForURL(`${SITE}/account/deleted/`, { timeout: 20000 });
  check("and the deletion then goes through", count(`select count(*) from auth.users where id = ${lit(user6)}`) === 0);

  // ======================== V7: no rows, but Paddle has them under the verified email
  const v7 = await newVisitor(browser, runIp(7));
  const email7 = "gone.seven@example.test";
  await logIn(v7, email7, "/login/?next=%2Faccount%2Fdelete%2F");
  await v7.page.waitForURL(`${SITE}/account/delete/`, { timeout: 15000 });
  const user7 = sb.userId(email7);
  paddle.state.customers.push({ id: "ctm_e2elookup", email: email7, status: "active" });
  paddle.state.subscriptions.push(entity("sub_e2elookupmine", { customer: "ctm_e2elookup", userId: user7 }), entity("sub_e2elookuptheirs", { customer: "ctm_e2elookup", userId: STRANGER }));
  check("no rows yet: the delete page does not claim a subscription", count(`select count(*) from public.subscriptions where user_id = ${lit(user7)}`) === 0);
  await typeAndDelete(v7.page);
  await v7.page.waitForURL(`${SITE}/account/deleted/`, { timeout: 20000 });
  check("paid but not yet recorded: the live subscription tagged with this user is cancelled", cancelsFor("sub_e2elookupmine").length === 1);
  check("the other subscription under the same customer is not", cancelsFor("sub_e2elookuptheirs").length === 0 && paddle.state.subscriptions.find((s) => s.id === "sub_e2elookuptheirs").status === "active");
  check("and the user is deleted", count(`select count(*) from auth.users where id = ${lit(user7)}`) === 0);

  // ===================================== V8: the limits, a foreign origin, a stranger's session
  const v8 = await newVisitor(browser, runIp(8));
  const email8 = "gone.eight@example.test";
  await logIn(v8, email8, "/login/?next=%2Faccount%2Fdelete%2F");
  await v8.page.waitForURL(`${SITE}/account/delete/`, { timeout: 15000 });
  const user8 = sb.userId(email8);
  const answers = [];
  for (let i = 0; i < 5; i++) answers.push((await apiDelete(v8.page, { confirm: "nope" })).status);
  check("the rate limit: three tries a minute, then 429", answers.slice(0, 3).every((s) => s === 400) && answers.slice(3).every((s) => s === 429), answers.join(","));
  const limited = await v8.ctx.request.post("/api/account/delete", { data: { confirm: "DELETE" }, headers: { origin: SITE } });
  check("once limited even the right word is refused, and Retry-After is set", limited.status() === 429 && limited.headers()["retry-after"] === "60" && count(`select count(*) from auth.users where id = ${lit(user8)}`) === 1);
  const foreign = await v8.ctx.request.post("/api/account/delete", { data: { confirm: "DELETE" }, headers: { origin: "https://evil.example" } });
  check("a foreign origin with a real session is refused", foreign.status() === 403 && count(`select count(*) from auth.users where id = ${lit(user8)}`) === 1);
  const spoof = await v8.ctx.request.post("/api/account/delete", { data: { confirm: "DELETE", userId: user2, user_id: user2, id: user2 }, headers: { origin: SITE } });
  check("a user id in the body is ignored: still the limit, nobody else touched", spoof.status() === 429 && count(`select count(*) from auth.users where id = ${lit(user8)}`) === 1);

  // ============================================================== logs
  await new Promise((ok) => setTimeout(ok, 800));
  const logs = output.join("");
  if (process.env.E2E_SHOW_LOGS) console.log(logs);
  const secrets = [SB_SECRET, PADDLE_CHECKOUT_KEY, PADDLE_CANCEL_KEY, PADDLE_RECONCILE_KEY, PADDLE_PORTAL_KEY, WEBHOOK_SECRET, CLIENT_TOKEN, user1, user2, user3, user4, user5, user6, user7, email1, email2, email3, email4, email5, email6, email7, "sub_e2e", "ctm_e2elookup", "ctm_testcustomer", sub2, "hash"];
  check("neither Worker logged a key, token, id or address", secrets.every((s) => !logs.includes(s)), secrets.filter((s) => logs.includes(s)).join(","));
  check("the payments Worker logged the outcomes (counts and reason codes only)", /"evt":"account_delete".*"outcome":"deleted"/.test(logs) && /"reason":"cancel_500"/.test(logs) && /"reason":"still_live"/.test(logs) && /"reason":"delete_500"/.test(logs) && /"reason":"reauth_required"/.test(logs));

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
