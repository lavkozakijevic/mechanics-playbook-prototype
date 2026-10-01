/**
 * Paddle webhook signature check, written against Web Crypto so it runs on
 * Workers and in node --test alike.
 *
 * Header format: "ts=<unix seconds>;h1=<hex>[;h1=<hex>...]". Paddle sends more
 * than one h1 while a destination's secret is being rotated, so every h1 is
 * collected and the request passes if any one of them matches. The signed text
 * is `${ts}:` followed by the raw request body, byte for byte.
 */

export const MAX_SKEW_SECONDS = 5;

const HEADER_MAX_LENGTH = 1024;
const MAX_H1_VALUES = 8;
const TS_RE = /^\d{1,12}$/;
const H1_RE = /^[0-9a-fA-F]{64}$/;

/** { ts: number, h1s: string[] } or null when the header is not well formed. */
export function parseSignatureHeader(header) {
  if (typeof header !== "string" || header.length === 0 || header.length > HEADER_MAX_LENGTH) return null;
  let ts = null;
  const h1s = [];
  for (const part of header.split(";")) {
    const i = part.indexOf("=");
    if (i < 1) continue;
    const key = part.slice(0, i).trim();
    const value = part.slice(i + 1).trim();
    if (key === "ts") {
      if (ts !== null || !TS_RE.test(value)) return null;
      ts = Number(value);
    } else if (key === "h1") {
      if (!H1_RE.test(value)) return null;
      h1s.push(value.toLowerCase());
    }
  }
  if (ts === null || h1s.length === 0 || h1s.length > MAX_H1_VALUES) return null;
  return { ts, h1s };
}

function hexToBytes(hex) {
  const out = new Uint8Array(hex.length / 2);
  for (let i = 0; i < out.length; i++) out[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
  return out;
}

/**
 * @param {{ rawBody: Uint8Array, header: string|null, secret: string, nowMs?: number }} args
 * @returns {Promise<{ ok: true } | { ok: false, reason: string }>}
 */
export async function verifySignature({ rawBody, header, secret, nowMs = Date.now() }) {
  const parsed = parseSignatureHeader(header);
  if (!parsed) return { ok: false, reason: "malformed_signature" };

  // Both directions: a request signed more than five seconds ago is a replay,
  // and one signed more than five seconds ahead means a wrong clock somewhere.
  if (Math.abs(nowMs / 1000 - parsed.ts) > MAX_SKEW_SECONDS) return { ok: false, reason: "stale_timestamp" };

  const encoder = new TextEncoder();
  const prefix = encoder.encode(`${parsed.ts}:`);
  const message = new Uint8Array(prefix.length + rawBody.length);
  message.set(prefix, 0);
  message.set(rawBody, prefix.length);

  const key = await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["verify"]);

  // subtle.verify compares in constant time. Every h1 is checked, with no early
  // exit, so how long this takes does not reveal which one matched.
  let matched = false;
  for (const h1 of parsed.h1s) {
    const ok = await crypto.subtle.verify("HMAC", key, hexToBytes(h1), message);
    matched = matched || ok;
  }
  return matched ? { ok: true } : { ok: false, reason: "bad_signature" };
}
