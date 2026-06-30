/**
 * Cloudflare Pages Function — POST /api/lead
 *
 * Generic lead capture. Receives { email, category?, source? }, emails a
 * notification to the owner via Resend, and returns { ok: true }. The client
 * starts the file download only after this succeeds.
 *
 * Reusable by design: nothing here is finance-specific, so the future paywall
 * can POST to the same endpoint. The owner's notification address and the API
 * key live only in the environment (Cloudflare secrets/vars) or this
 * server-side function — they are never in the page, the page source, or any
 * client bundle. No mailto anywhere.
 *
 * Environment variables (Pages → Settings → Variables and Secrets):
 *   RESEND_API_KEY   (secret, required)  — Resend API key
 *   LEAD_NOTIFY_TO   (optional)          — recipient; defaults to the owner address below
 *   LEAD_FROM        (optional)          — sender; defaults to Resend's shared
 *                                          onboarding@resend.dev (no domain
 *                                          verification needed). Override with a
 *                                          verified-domain sender once set up.
 */

// Server-side defaults so the endpoint works with only RESEND_API_KEY set.
// onboarding@resend.dev is Resend's shared sender and needs no domain
// verification. These live only in this Function — never in the page source.
const DEFAULT_NOTIFY_TO = "lav@gamebizconsulting.com";
const DEFAULT_FROM = "GameBiz Leads <onboarding@resend.dev>";

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const clip = (v, n) => (typeof v === "string" ? v.trim().slice(0, n) : "");

export async function onRequestPost({ request, env }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "bad_request" }, 400);
  }

  const email = clip(body.email, 254);
  if (!EMAIL_RE.test(email)) return json({ error: "invalid_email" }, 422);

  const category = clip(body.category, 60);
  const source = clip(body.source, 60);

  if (!env.RESEND_API_KEY) {
    return json({ error: "not_configured" }, 500);
  }

  const notifyTo = env.LEAD_NOTIFY_TO || DEFAULT_NOTIFY_TO;
  const from = env.LEAD_FROM || DEFAULT_FROM;

  const subject = `New lead${category ? `: ${category}` : ""} — ${email}`;
  const text = [
    `Email: ${email}`,
    category && `Category: ${category}`,
    source && `Source: ${source}`,
    `Time: ${new Date().toISOString()}`,
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${env.RESEND_API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [notifyTo],
      reply_to: email,
      subject,
      text,
    }),
  });

  if (!res.ok) return json({ error: "send_failed" }, 502);
  return json({ ok: true });
}
