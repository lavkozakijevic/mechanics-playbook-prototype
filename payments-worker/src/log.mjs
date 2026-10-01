/**
 * The only way this Worker writes to its logs. Keys are an allow-list, and a
 * value that is not short and plain (letters, digits, _ : . -) is replaced, so
 * a body, a header, a secret or an address cannot reach a log line even by
 * mistake. User ids, customer ids and custom data have no key at all.
 */
const ALLOWED_KEYS = new Set([
  "evt", "event_id", "event_type", "outcome", "reason", "status", "env",
  "read", "differing", "applied", "stale", "duplicate", "rejected_user", "skipped", "errors", "truncated", "only_ours",
]);
const SAFE_VALUE_RE = /^[A-Za-z0-9_:.\-]{0,80}$/;

export function sanitize(fields) {
  const out = {};
  for (const [k, v] of Object.entries(fields)) {
    if (!ALLOWED_KEYS.has(k)) continue;
    if (typeof v === "number" && Number.isFinite(v)) out[k] = v;
    else if (typeof v === "boolean") out[k] = v;
    else if (typeof v === "string") out[k] = SAFE_VALUE_RE.test(v) ? v : "[redacted]";
  }
  return out;
}

export function logInfo(fields) {
  console.log(JSON.stringify(sanitize(fields)));
}

export function logError(fields) {
  console.error(JSON.stringify(sanitize(fields)));
}
