/**
 * Cloudflare Pages Function — POST /api/lead
 *
 * Generic lead capture. Receives { email, category?, source? }, emails a
 * notification to the owner via Resend, and returns { ok: true }. The client
 * starts the file download only after this succeeds.
 *
 * Reusable by design: nothing here is finance-specific, so the future paywall
 * can POST to the same endpoint. The owner's notification address and the API
 * key live only in the environment (Cloudflare secrets/vars) — they are never
 * in the page, the page source, or this file. No mailto anywhere.
 *
 * Required environment variables (Pages → Settings → Variables and Secrets):
 *   RESEND_API_KEY   (secret)  — Resend API key
 *   LEAD_NOTIFY_TO             — where notifications go, e.g. lav@gamebizconsulting.com
 *   LEAD_FROM                  — verified Resend sender, e.g. "GameBiz <leads@gamebizconsulting.com>"
 */

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

  if (!env.RESEND_API_KEY || !env.LEAD_NOTIFY_TO || !env.LEAD_FROM) {
    return json({ error: "not_configured" }, 500);
  }

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
      from: env.LEAD_FROM,
      to: [env.LEAD_NOTIFY_TO],
      reply_to: email,
      subject,
      text,
    }),
  });

  if (!res.ok) return json({ error: "send_failed" }, 502);
  return json({ ok: true });
}
