import test from "node:test";
import assert from "node:assert/strict";
import { SUBSCRIPTION_EVENT_TYPES, mapEvent } from "../src/mapping.mjs";
import { PRODUCT_ID, USER_ID, subscriptionData, subscriptionEvent } from "./fixtures.mjs";

const map = (event) => mapEvent(event, { productId: PRODUCT_ID });

test("all eight subscription event types go through the same mapping", () => {
  assert.equal(SUBSCRIPTION_EVENT_TYPES.length, 8);
  for (const type of SUBSCRIPTION_EVENT_TYPES) {
    const m = map(subscriptionEvent({ type }));
    assert.equal(m.kind, "apply", type);
    assert.equal(m.params.p_event_type, type);
  }
});

test("a created event maps every parameter", () => {
  const m = map(subscriptionEvent());
  assert.deepEqual(m, {
    kind: "apply",
    params: {
      p_event_id: "evt_01testevent",
      p_event_type: "subscription.created",
      p_occurred_at: "2026-10-01T11:59:30.654321Z",
      p_user_id: USER_ID,
      p_subscription_id: "sub_01testsubscription",
      p_customer_id: "ctm_01testcustomer",
      p_status: "active",
      p_price_id: "pri_01quarterly",
      p_product_id: PRODUCT_ID,
      p_started_at: "2026-10-01T11:59:00.123456Z",
      p_canceled_at: null,
      p_scheduled_action: null,
      p_scheduled_effective_at: null,
    },
  });
});

test("the function takes exactly these thirteen parameters", () => {
  assert.deepEqual(Object.keys(map(subscriptionEvent()).params).sort(), [
    "p_canceled_at", "p_customer_id", "p_event_id", "p_event_type", "p_occurred_at", "p_price_id", "p_product_id",
    "p_scheduled_action", "p_scheduled_effective_at", "p_started_at", "p_status", "p_subscription_id", "p_user_id",
  ]);
});

test("every status the table allows maps; canceled carries canceled_at", () => {
  for (const status of ["active", "trialing", "past_due", "paused", "canceled"]) {
    assert.equal(map(subscriptionEvent({ data: subscriptionData({ status }) })).params.p_status, status);
  }
  const m = map(subscriptionEvent({ type: "subscription.canceled", data: subscriptionData({ status: "canceled", canceled_at: "2026-10-02T00:00:00Z" }) }));
  assert.equal(m.params.p_canceled_at, "2026-10-02T00:00:00Z");
});

test("a scheduled cancellation keeps its effective date; the status stays active", () => {
  const data = subscriptionData({ scheduled_change: { action: "cancel", effective_at: "2027-01-01T11:59:00Z", resume_at: null } });
  const m = map(subscriptionEvent({ type: "subscription.updated", data }));
  assert.equal(m.params.p_status, "active");
  assert.equal(m.params.p_scheduled_action, "cancel");
  assert.equal(m.params.p_scheduled_effective_at, "2027-01-01T11:59:00Z");
});

test("a scheduled pause is passed along; the database function decides not to store it", () => {
  const data = subscriptionData({ scheduled_change: { action: "pause", effective_at: "2027-01-01T00:00:00Z", resume_at: null } });
  assert.equal(map(subscriptionEvent({ data })).params.p_scheduled_action, "pause");
});

test("a scheduled cancellation with no usable date is a bad payload, never a guess", () => {
  for (const effective_at of [null, "not a date", undefined]) {
    const data = subscriptionData({ scheduled_change: { action: "cancel", effective_at } });
    assert.deepEqual(map(subscriptionEvent({ data })), { kind: "bad_payload", reason: "scheduled_change" });
  }
});

test("started_at and canceled_at may be null or missing", () => {
  const data = subscriptionData();
  delete data.started_at;
  delete data.canceled_at;
  const m = map(subscriptionEvent({ data }));
  assert.equal(m.kind, "apply");
  assert.equal(m.params.p_started_at, null);
  assert.equal(m.params.p_canceled_at, null);
});

test("the user id comes only from custom_data.supabase_user_id, and only when it is a UUID", () => {
  const upper = USER_ID.toUpperCase();
  assert.equal(map(subscriptionEvent({ data: subscriptionData({ custom_data: { supabase_user_id: upper } }) })).params.p_user_id, USER_ID);
  for (const custom_data of [null, undefined, {}, { user_id: USER_ID }, { supabase_user_id: "nope" }, { supabase_user_id: 5 }, { supabase_user_id: `${USER_ID}'; drop table x;--` }, [USER_ID]]) {
    const m = map(subscriptionEvent({ data: subscriptionData({ custom_data }) }));
    assert.equal(m.kind, "apply", JSON.stringify(custom_data));
    assert.equal(m.params.p_user_id, null, JSON.stringify(custom_data));
  }
});

test("other event types and other products are ignored, not errors", () => {
  assert.deepEqual(map(subscriptionEvent({ type: "transaction.completed" })), { kind: "ignore", reason: "unhandled_type" });
  assert.deepEqual(map(subscriptionEvent({ type: "subscription.imported" })), { kind: "ignore", reason: "unhandled_type" });
  const other = subscriptionData();
  other.items[0].price.product_id = "pro_other";
  other.items[0].product.id = "pro_other";
  assert.deepEqual(map(subscriptionEvent({ data: other })), { kind: "ignore", reason: "other_product" });
});

test("after a plan change the inactive old item is skipped and the current price is used", () => {
  const data = subscriptionData();
  data.items = [
    { status: "inactive", recurring: true, price: { id: "pri_01quarterly", product_id: PRODUCT_ID } },
    { status: "active", recurring: true, price: { id: "pri_01yearly", product_id: PRODUCT_ID } },
  ];
  assert.equal(map(subscriptionEvent({ data })).params.p_price_id, "pri_01yearly");
});

test("a product id is taken from price.product_id, or from product.id when that is absent", () => {
  const data = subscriptionData();
  delete data.items[0].price.product_id;
  assert.equal(map(subscriptionEvent({ data })).kind, "apply");
});

test("payloads nobody could apply are bad payloads (200 and a log line, never a retry)", () => {
  const cases = {
    status: subscriptionData({ status: "inactive" }),
    items: subscriptionData({ items: [] }),
    subscription_id: subscriptionData({ id: 5 }),
    customer_id: subscriptionData({ customer_id: "" }),
    started_at: subscriptionData({ started_at: "yesterday" }),
    canceled_at: subscriptionData({ canceled_at: 12 }),
    price_id: subscriptionData({ items: [{ status: "active", price: { id: "bad id!", product_id: PRODUCT_ID } }] }),
  };
  for (const [reason, data] of Object.entries(cases)) {
    assert.deepEqual(map(subscriptionEvent({ data })), { kind: "bad_payload", reason }, reason);
  }
  assert.deepEqual(map(subscriptionEvent({ data: null })), { kind: "bad_payload", reason: "data" });
  assert.deepEqual(map(subscriptionEvent({ occurredAt: "soon" })), { kind: "bad_payload", reason: "occurred_at" });
  assert.deepEqual(map(subscriptionEvent({ id: "has spaces" })), { kind: "bad_payload", reason: "event_id" });
  assert.deepEqual(map(null), { kind: "bad_payload", reason: "envelope" });
  assert.deepEqual(map([]), { kind: "bad_payload", reason: "envelope" });
});
