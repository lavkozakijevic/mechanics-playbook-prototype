// POST /api/lead: generic lead capture, emailing the owner a notification via
// Resend. Ported from site/functions/api/lead.js (a Cloudflare Pages Function,
// which the Worker deployment does not run): same request and response JSON,
// same status codes, same environment variable names.
//
// Environment (Cloudflare Worker secrets; never in the page or the repo):
//   RESEND_API_KEY  required
//   LEAD_NOTIFY_TO  required. The Pages version fell back to a hard-coded
//                   address; this one has no address in the code at all.
//   LEAD_FROM       optional; defaults to Resend's shared sender.
import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";

export const prerender = false;

const DEFAULT_FROM = "GameBiz Leads <onboarding@resend.dev>";

const json = (obj: unknown, status = 200) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const clip = (v: unknown, n: number) => (typeof v === "string" ? v.trim().slice(0, n) : "");

export const POST: APIRoute = async ({ request }) => {
  let body: any;
  try {
    body = await request.json();
  } catch {
    return json({ error: "bad_request" }, 400);
  }

  const email = clip(body?.email, 254);
  if (!EMAIL_RE.test(email)) return json({ error: "invalid_email" }, 422);

  const category = clip(body?.category, 60);
  const source = clip(body?.source, 60);
  const consent = body?.consent === true;

  const e = env as any;
  if (!e.RESEND_API_KEY || !e.LEAD_NOTIFY_TO) {
    return json({ error: "not_configured" }, 500);
  }

  const from = e.LEAD_FROM || DEFAULT_FROM;

  const subject = `New lead${category ? `: ${category}` : ""} — ${email}`;
  const text = [
    `Email: ${email}`,
    category && `Category: ${category}`,
    source && `Source: ${source}`,
    `Consent given: ${consent ? "yes" : "no"}`,
    `Time: ${new Date().toISOString()}`,
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${e.RESEND_API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [e.LEAD_NOTIFY_TO],
      reply_to: email,
      subject,
      text,
    }),
  });

  if (!res.ok) return json({ error: "send_failed" }, 502);
  return json({ ok: true });
};

export const ALL: APIRoute = () =>
  new Response(JSON.stringify({ error: "method_not_allowed" }), {
    status: 405,
    headers: { "content-type": "application/json; charset=utf-8", Allow: "POST" },
  });
