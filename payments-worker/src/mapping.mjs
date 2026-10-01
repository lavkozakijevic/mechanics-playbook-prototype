/**
 * Turns a Paddle subscription (from a webhook or from the Paddle API) into the
 * arguments of public.apply_subscription_event. Pure; nothing here calls out.
 *
 * Field names follow Paddle's Node SDK types (subscription notification and
 * subscription entity). The shape is the same for every subscription.* event
 * and for GET /subscriptions, so webhooks and reconciliation share this code.
 */

export const SUBSCRIPTION_EVENT_TYPES = Object.freeze([
  "subscription.created",
  "subscription.updated",
  "subscription.activated",
  "subscription.canceled",
  "subscription.past_due",
  "subscription.paused",
  "subscription.resumed",
  "subscription.trialing",
]);

// Must match the check constraint on public.subscriptions.status.
export const STATUSES = Object.freeze(["active", "trialing", "past_due", "paused", "canceled"]);
const SCHEDULED_ACTIONS = ["cancel", "pause", "resume"];

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const ID_RE = /^[A-Za-z0-9_:.\-]{1,200}$/;

/** The key our checkout sets in the transaction's custom data. */
export const USER_ID_KEY = "supabase_user_id";

const isObject = (v) => v !== null && typeof v === "object" && !Array.isArray(v);
const isTime = (v) => typeof v === "string" && v.length <= 64 && !Number.isNaN(Date.parse(v));
const orNull = (v) => (v === undefined || v === null ? null : v);

/**
 * @returns {{ kind: "apply", params: object }
 *         | { kind: "ignore", reason: string }
 *         | { kind: "bad_payload", reason: string }}
 *
 * "ignore": not for us (another event type, another product); nothing to do.
 * "bad_payload": it is for us but cannot be applied, and no retry would change
 * that. The caller answers 200 and logs it.
 */
export function mapSubscription(data, { eventId, eventType, occurredAt, productId }) {
  if (!isObject(data)) return { kind: "bad_payload", reason: "data" };
  if (typeof eventId !== "string" || !ID_RE.test(eventId)) return { kind: "bad_payload", reason: "event_id" };
  if (typeof eventType !== "string" || eventType.length > 80) return { kind: "bad_payload", reason: "event_type" };
  if (!isTime(occurredAt)) return { kind: "bad_payload", reason: "occurred_at" };

  if (typeof data.id !== "string" || !ID_RE.test(data.id)) return { kind: "bad_payload", reason: "subscription_id" };
  if (typeof data.customer_id !== "string" || !ID_RE.test(data.customer_id)) return { kind: "bad_payload", reason: "customer_id" };
  if (!STATUSES.includes(data.status)) return { kind: "bad_payload", reason: "status" };

  // The subscription's item for our product. Items Paddle marks inactive (for
  // example the old price after a plan change) are not the current plan.
  const items = Array.isArray(data.items) ? data.items : [];
  const current = items.filter((i) => isObject(i) && i.status !== "inactive" && isObject(i.price));
  if (current.length === 0) return { kind: "bad_payload", reason: "items" };
  const ours = current.find((i) => (i.price.product_id ?? i.product?.id) === productId);
  if (!ours) return { kind: "ignore", reason: "other_product" };
  const priceId = ours.price.id;
  if (typeof priceId !== "string" || !ID_RE.test(priceId)) return { kind: "bad_payload", reason: "price_id" };

  const startedAt = orNull(data.started_at);
  const canceledAt = orNull(data.canceled_at);
  if (startedAt !== null && !isTime(startedAt)) return { kind: "bad_payload", reason: "started_at" };
  if (canceledAt !== null && !isTime(canceledAt)) return { kind: "bad_payload", reason: "canceled_at" };

  let action = null;
  let effectiveAt = null;
  const change = data.scheduled_change;
  if (isObject(change) && SCHEDULED_ACTIONS.includes(change.action)) {
    action = change.action;
    if (isTime(change.effective_at)) effectiveAt = change.effective_at;
    // A scheduled cancellation without a usable date would cut access off
    // early (or never), so it is refused rather than guessed at.
    else if (action === "cancel") return { kind: "bad_payload", reason: "scheduled_change" };
  }

  // A missing or malformed id is passed as null: the function records the event
  // and answers rejected_user, which is the right outcome and is not retried.
  const rawUser = isObject(data.custom_data) ? data.custom_data[USER_ID_KEY] : null;
  const userId = typeof rawUser === "string" && UUID_RE.test(rawUser) ? rawUser.toLowerCase() : null;

  return {
    kind: "apply",
    params: {
      p_event_id: eventId,
      p_event_type: eventType,
      p_occurred_at: occurredAt,
      p_user_id: userId,
      p_subscription_id: data.id,
      p_customer_id: data.customer_id,
      p_status: data.status,
      p_price_id: priceId,
      p_product_id: productId,
      p_started_at: startedAt,
      p_canceled_at: canceledAt,
      p_scheduled_action: action,
      p_scheduled_effective_at: effectiveAt,
    },
  };
}

/** A webhook envelope: { event_id, event_type, occurred_at, notification_id, data }. */
export function mapEvent(event, { productId }) {
  if (!isObject(event)) return { kind: "bad_payload", reason: "envelope" };
  if (!SUBSCRIPTION_EVENT_TYPES.includes(event.event_type)) return { kind: "ignore", reason: "unhandled_type" };
  return mapSubscription(event.data, {
    eventId: event.event_id,
    eventType: event.event_type,
    occurredAt: event.occurred_at,
    productId,
  });
}
