/**
 * Everything about the login session that must be decided in exactly one place:
 * cookie name and flags, response headers, redirect and input validation.
 * Pure (no Supabase, no Cloudflare imports) so node --test can cover it.
 *
 * The session lives only in an HttpOnly cookie that the browser never reads.
 * @supabase/ssr's own default is httpOnly: false, so every cookie it asks to
 * set goes through hardenCookie() below before it reaches a response.
 */

// "__Host-" makes the browser require Secure + Path=/ + no Domain, so the
// cookie can only ever be host-only and https-only.
export const COOKIE_NAME = "__Host-sb-auth";
export const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 30;

/**
 * On every auth response (JSON or HTML), whatever the status.
 *
 * Referrer-Policy is strict-origin, not no-referrer, on purpose: the sign-in
 * link carries a one-time token in its query string, so no Referer may include
 * a path or query, but with no-referrer a browser also sends "Origin: null" on
 * a same-origin form POST, which the Origin checks here (rightly) refuse. That
 * made the Continue button fail.
 */
export const AUTH_HEADERS = Object.freeze({
  "Cache-Control": "private, no-store",
  "X-Robots-Tag": "noindex",
  "Referrer-Policy": "strict-origin",
  "X-Content-Type-Options": "nosniff",
});

export const OTP_TYPES = Object.freeze(["email", "magiclink", "signup"]);

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const TOKEN_HASH_RE = /^[A-Za-z0-9._~-]{8,300}$/;
// eslint-disable-next-line no-control-regex
const CONTROL_OR_BACKSLASH_RE = /[\u0000-\u001f\u007f\\]/;

export function normalizeEmail(raw) {
  if (typeof raw !== "string") return null;
  const email = raw.trim().toLowerCase();
  if (email.length < 3 || email.length > 254) return null;
  if (CONTROL_OR_BACKSLASH_RE.test(email)) return null;
  return EMAIL_RE.test(email) ? email : null;
}

export function isTokenHash(raw) {
  return typeof raw === "string" && TOKEN_HASH_RE.test(raw);
}

export function isOtpType(raw) {
  return OTP_TYPES.includes(raw);
}

/** Same-origin relative paths only; anything else becomes the fallback. */
export function safeNext(raw, fallback = "/") {
  if (typeof raw !== "string" || raw.length === 0 || raw.length > 200) return fallback;
  if (!raw.startsWith("/") || raw.startsWith("//")) return fallback;
  if (CONTROL_OR_BACKSLASH_RE.test(raw)) return fallback;
  return raw;
}

/** A POST must carry an Origin header equal to this site's own origin. */
export function isSameOrigin(request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    return origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}

export function parseCookieHeader(header) {
  if (!header) return [];
  const out = [];
  for (const part of header.split(";")) {
    const i = part.indexOf("=");
    if (i < 1) continue;
    const name = part.slice(0, i).trim();
    const raw = part.slice(i + 1).trim();
    let value = raw;
    try {
      value = decodeURIComponent(raw);
    } catch {
      /* keep the raw value */
    }
    out.push({ name, value });
  }
  return out;
}

export function isAuthCookieName(name) {
  return name === COOKIE_NAME || name.startsWith(COOKIE_NAME + ".") || name.startsWith(COOKIE_NAME + "-");
}

export function hasAuthCookie(request) {
  return parseCookieHeader(request.headers.get("cookie")).some((c) => isAuthCookieName(c.name));
}

/**
 * The only flags a session cookie is ever sent with. Whatever the library
 * asks for (httpOnly: false, a Domain, a 400-day lifetime) is discarded; only
 * "this is a removal" survives.
 */
export function hardenCookie(options) {
  const removing = options?.maxAge === 0;
  return {
    path: "/",
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: removing ? 0 : SESSION_MAX_AGE_SECONDS,
  };
}

/** One Set-Cookie header value, or null for a cookie this site must never set. */
export function serializeSetCookie(name, value, options) {
  if (!isAuthCookieName(name)) return null;
  const o = hardenCookie(options);
  const parts = [`${name}=${encodeURIComponent(value)}`, `Path=${o.path}`, `Max-Age=${o.maxAge}`];
  if (o.maxAge === 0) parts.push("Expires=Thu, 01 Jan 1970 00:00:00 GMT");
  parts.push("HttpOnly", "Secure", "SameSite=Lax");
  return parts.join("; ");
}

/** Removal cookies for every auth cookie the request arrived with. */
export function clearingCookies(request) {
  return parseCookieHeader(request.headers.get("cookie"))
    .filter((c) => isAuthCookieName(c.name))
    .map((c) => ({ name: c.name, value: "", options: { maxAge: 0 } }));
}

/**
 * Every response from an auth route is built here, so the headers and the
 * cookie flags cannot differ between routes. `cookies` is a list of
 * { name, value, options } as @supabase/ssr hands to setAll.
 */
export function authResponse(body, { status = 200, headers = {}, cookies = [], json = true } = {}) {
  const h = new Headers();
  if (json) h.set("Content-Type", "application/json; charset=utf-8");
  for (const [k, v] of Object.entries(headers)) h.set(k, v);
  for (const [k, v] of Object.entries(AUTH_HEADERS)) h.set(k, v);
  for (const c of cookies) {
    const line = serializeSetCookie(c.name, c.value, c.options);
    if (line) h.append("Set-Cookie", line);
  }
  const payload = body === null || body === undefined ? null : json ? JSON.stringify(body) : body;
  return new Response(payload, { status, headers: h });
}

export async function sha256Hex(text) {
  const bytes = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

/**
 * "ok", "limited", or "unavailable" (no binding, or the binding failed).
 * Callers treat "unavailable" like missing configuration: fail closed.
 */
export async function checkRateLimit(binding, key) {
  if (!binding || typeof binding.limit !== "function") return "unavailable";
  try {
    const { success } = await binding.limit({ key });
    return success ? "ok" : "limited";
  } catch {
    return "unavailable";
  }
}
