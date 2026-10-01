#!/usr/bin/env node
/**
 * Sends one signed, Paddle-shaped subscription event to a running webhook, to
 * test the deployed Worker and the database behind it without a checkout.
 *
 * Everything sensitive comes from the environment, never from this file or the
 * command line, and nothing sensitive is printed:
 *   WEBHOOK_URL              https://<worker>/paddle/webhook
 *   PADDLE_WEBHOOK_SECRET    the destination's pdl_ntfset_... secret
 *   TEST_USER_ID             a real user id from Supabase Authentication > Users
 *   PADDLE_PRODUCT_ID        pro_... (must equal the Worker's PADDLE_PRODUCT_ID)
 *   PADDLE_PRICE_ID          optional, defaults to pri_test_quarterly
 *
 * Options:
 *   --type=subscription.created   any of the eight subscription.* types
 *   --status=active               active | trialing | past_due | paused | canceled
 *   --sub=sub_test_xxx            reuse a test subscription (to send a second event for it)
 *   --occurred-at=<ISO time>      default: now
 *   --scheduled-cancel=<ISO time> add a scheduled cancellation on that date
 *   --replay                      send the identical request twice (expect "duplicate")
 *   --tamper                      change one byte after signing (expect 401)
 *   --stale                       sign 60 seconds in the past (expect 401)
 *
 * The test rows are named sub_test_... and evt_test_..., so they can be found
 * and deleted: the SQL is printed at the end.
 */
import { createHmac, randomBytes } from "node:crypto";
import { pathToFileURL } from "node:url";

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const TYPES = ["created", "updated", "activated", "canceled", "past_due", "paused", "resumed", "trialing"].map((t) => `subscription.${t}`);
const STATUSES = ["active", "trialing", "past_due", "paused", "canceled"];

export function parseArgs(argv) {
  const out = {};
  for (const a of argv) {
    const m = /^--([a-z-]+)(?:=(.*))?$/.exec(a);
    if (!m) throw new Error(`Unrecognised argument: ${a}`);
    out[m[1]] = m[2] ?? true;
  }
  return out;
}

/** The request body and headers for one test event. Pure apart from the clock and randomness, which can be injected. */
export function buildRequest(env, args, { nowMs = Date.now(), random = () => randomBytes(6).toString("hex") } = {}) {
  const need = (k) => {
    if (!env[k]) throw new Error(`Set ${k} in the environment first.`);
    return env[k];
  };
  const url = need("WEBHOOK_URL");
  const secret = need("PADDLE_WEBHOOK_SECRET");
  const userId = need("TEST_USER_ID");
  const productId = need("PADDLE_PRODUCT_ID");
  const priceId = env.PADDLE_PRICE_ID || "pri_test_quarterly";
  if (!/^https:\/\//.test(url) && !/^http:\/\/(127\.0\.0\.1|localhost)[:/]/.test(url)) throw new Error("WEBHOOK_URL must be https.");
  if (!secret.startsWith("pdl_ntfset_")) throw new Error("PADDLE_WEBHOOK_SECRET should start with pdl_ntfset_ (the destination's secret key).");
  if (!UUID_RE.test(userId)) throw new Error("TEST_USER_ID must be a user id (a UUID).");

  const type = args.type ?? "subscription.created";
  const status = args.status ?? "active";
  if (!TYPES.includes(type)) throw new Error(`--type must be one of: ${TYPES.join(", ")}`);
  if (!STATUSES.includes(status)) throw new Error(`--status must be one of: ${STATUSES.join(", ")}`);

  const subId = typeof args.sub === "string" ? args.sub : `sub_test_${random()}`;
  if (!/^sub_test_[A-Za-z0-9]+$/.test(subId)) throw new Error("--sub must be a sub_test_... id from an earlier run.");
  const eventId = `evt_test_${random()}`;
  const occurredAt = typeof args["occurred-at"] === "string" ? args["occurred-at"] : new Date(nowMs).toISOString();
  if (Number.isNaN(Date.parse(occurredAt))) throw new Error("--occurred-at must be a time, like 2026-10-01T12:00:00Z.");
  const cancelAt = typeof args["scheduled-cancel"] === "string" ? args["scheduled-cancel"] : null;
  if (cancelAt !== null && Number.isNaN(Date.parse(cancelAt))) throw new Error("--scheduled-cancel must be a time.");

  const event = {
    event_id: eventId,
    event_type: type,
    occurred_at: occurredAt,
    notification_id: `ntf_test_${random()}`,
    data: {
      id: subId,
      status,
      customer_id: "ctm_testcustomer",
      started_at: occurredAt,
      canceled_at: status === "canceled" ? occurredAt : null,
      scheduled_change: cancelAt ? { action: "cancel", effective_at: cancelAt, resume_at: null } : null,
      items: [{ status: "active", quantity: 1, recurring: true, price: { id: priceId, product_id: productId }, product: { id: productId } }],
      custom_data: { supabase_user_id: userId },
    },
  };

  const body = JSON.stringify(event);
  const ts = Math.floor(nowMs / 1000) - (args.stale ? 60 : 0);
  const h1 = createHmac("sha256", secret).update(`${ts}:`).update(body).digest("hex");
  const sentBody = args.tamper ? body.replace('"status":', '"status" :') : body;
  return { url, body: sentBody, headers: { "content-type": "application/json", "paddle-signature": `ts=${ts};h1=${h1}` }, eventId, subId };
}

export function cleanupSql() {
  return [
    "delete from public.subscriptions  where paddle_subscription_id like 'sub_test_%';",
    "delete from public.webhook_events where event_id like 'evt_test_%';",
  ].join("\n");
}

async function main() {
  let args;
  let req;
  try {
    args = parseArgs(process.argv.slice(2));
    req = buildRequest(process.env, args);
  } catch (e) {
    console.error(e.message);
    process.exit(2);
  }
  const sends = args.replay ? 2 : 1;
  for (let i = 1; i <= sends; i++) {
    const res = await fetch(req.url, { method: "POST", headers: req.headers, body: req.body });
    console.log(`send ${i}: HTTP ${res.status} ${await res.text()}`);
  }
  console.log(`\nevent id:        ${req.eventId}\nsubscription id: ${req.subId}`);
  console.log("\nWhen you are done, delete the test rows in the Supabase SQL Editor:\n" + cleanupSql());
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) await main();
