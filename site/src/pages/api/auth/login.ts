// POST /api/auth/login: email a one-time sign-in link. Also creates the account
// the first time an address is used (shouldCreateUser), because checkout will
// need a signed-in user.
import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";
import {
  EMAIL_LINK_TARGET,
  authResponse,
  checkRateLimit,
  isSameOrigin,
  normalizeEmail,
  sha256Hex,
} from "../../../lib/auth-config.mjs";
import { createRequestClient, finalCookies, supabaseConfigured } from "../../../lib/auth-server.mjs";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  if (!isSameOrigin(request)) return authResponse({ error: "forbidden" }, { status: 403 });

  let email: string | null = null;
  try {
    const text = await request.text();
    if (text.length > 2048) throw new Error("too large");
    email = normalizeEmail(JSON.parse(text)?.email);
  } catch {
    return authResponse({ error: "bad_request" }, { status: 400 });
  }
  if (!email) return authResponse({ error: "invalid_email" }, { status: 400 });

  if (!supabaseConfigured(env)) return authResponse({ error: "not_configured" }, { status: 503 });

  // Two limits: per address (so one inbox can't be flooded from many places)
  // and per IP. A missing binding fails closed, like missing configuration.
  const ip = request.headers.get("cf-connecting-ip") ?? "unknown";
  const [byIp, byEmail] = await Promise.all([
    checkRateLimit((env as any).LOGIN_IP_LIMITER, ip),
    checkRateLimit((env as any).LOGIN_EMAIL_LIMITER, await sha256Hex(email)),
  ]);
  if (byIp === "unavailable" || byEmail === "unavailable") {
    return authResponse({ error: "not_configured" }, { status: 503 });
  }
  if (byIp === "limited" || byEmail === "limited") {
    return authResponse({ error: "rate_limited" }, { status: 429, headers: { "Retry-After": "60" } });
  }

  // TODO(brevo step): require a Cloudflare Turnstile token here, and turn on
  // CAPTCHA protection in Supabase Auth. Until then anyone can call Supabase's
  // own /auth/v1/otp directly with the public key and bypass the limits above;
  // Supabase's own rate limits are the only backstop.

  const { supabase, state } = createRequestClient(request, env);
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: true,
      // Back to this same origin, so a preview deployment signs in on itself.
      // Which page that is (callback or confirm) is decided in auth-config.mjs.
      emailRedirectTo: new URL(EMAIL_LINK_TARGET, request.url).href,
    },
  });

  if (error) {
    if (error.status === 429 || /rate_limit/.test(error.code ?? "")) {
      return authResponse({ error: "rate_limited" }, { status: 429, headers: { "Retry-After": "60" } });
    }
    // Status and code only: never the address, never the message body.
    console.error("auth: sign-in link request failed", error.status ?? "", error.code ?? "");
    return authResponse({ error: "send_failed" }, { status: 502 });
  }

  // The same answer whether or not the address already had an account.
  return authResponse({ ok: true }, { headers: state.headers, cookies: finalCookies(state) });
};

export const ALL: APIRoute = () =>
  authResponse({ error: "method_not_allowed" }, { status: 405, headers: { Allow: "POST" } });
