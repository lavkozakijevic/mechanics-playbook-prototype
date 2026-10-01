/**
 * Hourly safety net for webhooks that were lost or never sent. Reads every
 * subscription from the Paddle API and every row of our own table, and applies
 * only the subscriptions that are missing or differ, through the same function
 * the webhook uses.
 *
 * occurred_at is the subscription's own updated_at from Paddle, not the time
 * of this read: both then come from Paddle's clock, so a Worker clock that runs
 * ahead can never make this overwrite a newer webhook. The event id is
 * "reconcile:<subscription>:<updated_at>", so running it again for an
 * unchanged subscription is a harmless duplicate.
 */
import { listSubscriptions } from "./paddle-api.mjs";
import { applyEvent, readSubscriptions } from "./supabase.mjs";
import { mapSubscription } from "./mapping.mjs";
import { logError, logInfo } from "./log.mjs";

// Stays inside the free plan's 50 subrequests per run (Paddle pages + one read
// of our table + one call per change). Anything left over is done next hour.
export const MAX_APPLY_PER_RUN = 40;

const sameTime = (a, b) => (a == null || b == null ? a == b : Date.parse(a) === Date.parse(b));

/** True when the stored row does not match what Paddle says. */
export function differs(row, params) {
  if (!row) return true;
  const cancelEffective = params.p_scheduled_action === "cancel" ? params.p_scheduled_effective_at : null;
  return (
    row.user_id !== params.p_user_id ||
    row.status !== params.p_status ||
    row.price_id !== params.p_price_id ||
    row.product_id !== params.p_product_id ||
    !sameTime(row.canceled_at, params.p_canceled_at) ||
    !sameTime(row.cancel_effective_at, cancelEffective)
  );
}

export async function reconcile(env, deps = {}) {
  const fetchImpl = deps.fetch ?? fetch;
  const summary = { read: 0, differing: 0, applied: 0, stale: 0, duplicate: 0, rejected_user: 0, skipped: 0, errors: 0, truncated: 0, only_ours: 0 };

  let paddle;
  let ours;
  try {
    paddle = await listSubscriptions(env, fetchImpl);
    ours = await readSubscriptions(env, fetchImpl);
  } catch (e) {
    logError({ evt: "reconcile", reason: String(e?.message ?? "failed"), env: env.PADDLE_ENVIRONMENT });
    throw e;
  }
  summary.read = paddle.subscriptions.length;
  if (paddle.truncated) summary.truncated = 1;

  const seen = new Set();
  for (const entity of paddle.subscriptions) {
    const mapped = mapSubscription(entity, {
      eventId: `reconcile:${entity?.id}:${entity?.updated_at}`,
      eventType: "reconcile",
      occurredAt: entity?.updated_at,
      productId: env.PADDLE_PRODUCT_ID,
    });
    if (mapped.kind !== "apply") {
      summary.skipped++;
      if (mapped.kind === "bad_payload") summary.errors++;
      continue;
    }
    seen.add(mapped.params.p_subscription_id);
    if (!differs(ours.get(mapped.params.p_subscription_id), mapped.params)) continue;
    summary.differing++;
    if (summary.applied + summary.stale + summary.duplicate + summary.rejected_user >= MAX_APPLY_PER_RUN) {
      summary.truncated = 1;
      continue;
    }
    const result = await applyEvent(env, mapped.params, fetchImpl);
    if (!result.ok) {
      summary.errors++;
      logError({ evt: "reconcile_apply", reason: result.reason });
      continue;
    }
    summary[result.outcome]++;
  }
  for (const id of ours.keys()) if (!seen.has(id)) summary.only_ours++;

  logInfo({ evt: "reconcile", env: env.PADDLE_ENVIRONMENT, ...summary });
  return summary;
}
