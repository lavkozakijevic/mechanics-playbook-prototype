/**
 * POST /paddle/webhook. The order matters:
 *   method, size, configuration  -> cheap refusals, nothing parsed yet
 *   signature over the raw bytes -> nothing in the body is trusted before this
 *   parse, map, apply            -> one call to the database function
 *
 * Paddle retries any non-2xx answer, so one is returned only when a retry can
 * help: a missing configuration, or the database not answering. A bad
 * signature gets 401 and a payload nobody could ever apply gets 200 and a log
 * line, because sending the same bytes again would change nothing.
 */
import { verifySignature } from "./signature.mjs";
import { mapEvent } from "./mapping.mjs";
import { applyEvent, baseUrl } from "./supabase.mjs";
import { logError, logInfo } from "./log.mjs";

export const MAX_BODY_BYTES = 256 * 1024;

const SECRET_NAMES = { sandbox: "PADDLE_WEBHOOK_SECRET_SANDBOX", live: "PADDLE_WEBHOOK_SECRET_LIVE" };

function reply(status, body, extra = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...extra },
  });
}

/** The body as bytes, or null when it is larger than max. Never buffers more than max + one chunk. */
async function readBody(request, max) {
  const declared = Number(request.headers.get("content-length"));
  if (Number.isFinite(declared) && declared > max) return null;
  if (!request.body) return new Uint8Array(0);
  const reader = request.body.getReader();
  const chunks = [];
  let total = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.length;
    if (total > max) {
      await reader.cancel();
      return null;
    }
    chunks.push(value);
  }
  const bytes = new Uint8Array(total);
  let at = 0;
  for (const c of chunks) {
    bytes.set(c, at);
    at += c.length;
  }
  return bytes;
}

/** The webhook secret for the one active environment, or null. */
function activeSecret(env) {
  const name = SECRET_NAMES[env.PADDLE_ENVIRONMENT];
  return name ? env[name] || null : null;
}

export function configured(env) {
  return Boolean(
    activeSecret(env) &&
      env.PADDLE_PRODUCT_ID &&
      env.SUPABASE_SECRET_KEY &&
      baseUrl(env.SUPABASE_URL)
  );
}

export async function handleWebhook(request, env, deps = {}) {
  if (request.method !== "POST") return reply(405, { error: "method_not_allowed" }, { allow: "POST" });

  const body = await readBody(request, MAX_BODY_BYTES);
  if (body === null) {
    logError({ evt: "webhook", reason: "too_large" });
    return reply(413, { error: "too_large" });
  }

  if (!configured(env)) {
    logError({ evt: "webhook", reason: "not_configured" });
    return reply(503, { error: "not_configured" });
  }

  const check = await verifySignature({
    rawBody: body,
    header: request.headers.get("paddle-signature"),
    secret: activeSecret(env),
    nowMs: deps.nowMs?.() ?? Date.now(),
  });
  if (!check.ok) {
    logError({ evt: "webhook", reason: check.reason });
    return reply(401, { error: "unauthorized" });
  }

  let event;
  try {
    event = JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(body));
  } catch {
    logError({ evt: "webhook", reason: "bad_json" });
    return reply(400, { error: "bad_request" });
  }

  const mapped = mapEvent(event, { productId: env.PADDLE_PRODUCT_ID });
  const eventId = typeof event?.event_id === "string" ? event.event_id : undefined;
  const eventType = typeof event?.event_type === "string" ? event.event_type : undefined;
  if (mapped.kind === "ignore") {
    logInfo({ evt: "webhook", event_id: eventId, event_type: eventType, outcome: "ignored", reason: mapped.reason });
    return reply(200, { ok: true, outcome: "ignored" });
  }
  if (mapped.kind === "bad_payload") {
    logError({ evt: "webhook", event_id: eventId, event_type: eventType, outcome: "bad_payload", reason: mapped.reason });
    return reply(200, { ok: true, outcome: "bad_payload" });
  }

  const result = await applyEvent(env, mapped.params, deps.fetch ?? fetch);
  if (!result.ok) {
    logError({ evt: "webhook", event_id: eventId, event_type: eventType, outcome: "retry", reason: result.reason });
    return reply(503, { error: "unavailable" }, { "retry-after": "30" });
  }
  const log = result.outcome === "rejected_user" ? logError : logInfo;
  log({ evt: "webhook", event_id: eventId, event_type: eventType, outcome: result.outcome });
  return reply(200, { ok: true, outcome: result.outcome });
}
