import test from "node:test";
import assert from "node:assert/strict";
import {
  AUTH_HEADERS,
  COOKIE_NAME,
  SESSION_MAX_AGE_SECONDS,
  authResponse,
  checkRateLimit,
  clearingCookies,
  hardenCookie,
  hasAuthCookie,
  isAuthCookieName,
  isOtpType,
  isSameOrigin,
  isTokenHash,
  normalizeEmail,
  parseCookieHeader,
  safeNext,
  serializeSetCookie,
  sha256Hex,
} from "./auth-config.mjs";

const req = (url, headers = {}) => new Request(url, { headers });

// ---------------------------------------------------------------- cookie flags

test("session cookie name carries the __Host- prefix", () => {
  assert.ok(COOKIE_NAME.startsWith("__Host-"));
});

test("hardenCookie discards whatever the library asks for", () => {
  // What @supabase/ssr hands over by default, plus things a caller could add.
  const weak = { path: "/x", sameSite: "none", httpOnly: false, secure: false, domain: "example.com", maxAge: 400 * 24 * 60 * 60 };
  assert.deepEqual(hardenCookie(weak), {
    path: "/",
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });
  assert.equal("domain" in hardenCookie(weak), false);
});

test("a removal stays a removal, with the same flags", () => {
  assert.equal(hardenCookie({ maxAge: 0 }).maxAge, 0);
  assert.equal(hardenCookie({ maxAge: 0 }).httpOnly, true);
});

test("Set-Cookie line is HttpOnly, Secure, SameSite=Lax, Path=/, host-only, 30 days", () => {
  const line = serializeSetCookie(COOKIE_NAME, "base64-abc", { httpOnly: false, sameSite: "none", domain: "example.com" });
  assert.equal(line, `${COOKIE_NAME}=base64-abc; Path=/; Max-Age=${SESSION_MAX_AGE_SECONDS}; HttpOnly; Secure; SameSite=Lax`);
  assert.doesNotMatch(line, /Domain=/i);
  assert.equal(SESSION_MAX_AGE_SECONDS, 2592000);
});

test("removal Set-Cookie keeps the flags and expires immediately", () => {
  const line = serializeSetCookie(`${COOKIE_NAME}.0`, "", { maxAge: 0 });
  assert.match(line, /Max-Age=0/);
  assert.match(line, /Expires=Thu, 01 Jan 1970/);
  assert.match(line, /HttpOnly; Secure; SameSite=Lax$/);
});

test("this site never sets a cookie outside the session cookie's names", () => {
  assert.equal(serializeSetCookie("other", "x", {}), null);
  assert.equal(serializeSetCookie("sb-abc-auth-token", "x", {}), null);
  assert.equal(serializeSetCookie(`${COOKIE_NAME}x`, "x", {}), null);
  assert.ok(serializeSetCookie(`${COOKIE_NAME}.1`, "x", {}));
  assert.ok(serializeSetCookie(`${COOKIE_NAME}-code-verifier`, "x", {}));
});

// ------------------------------------------------------------ response builder

test("every auth response, whatever the status, is no-store and noindex", () => {
  for (const status of [200, 400, 403, 429, 503]) {
    const res = authResponse({ ok: status === 200 }, { status });
    assert.equal(res.status, status);
    assert.equal(res.headers.get("cache-control"), AUTH_HEADERS["Cache-Control"]);
    assert.equal(res.headers.get("cache-control"), "private, no-store");
    assert.equal(res.headers.get("x-robots-tag"), "noindex");
    assert.equal(res.headers.get("referrer-policy"), "strict-origin");
  }
});

test("the referrer policy never makes a browser send Origin: null", () => {
  // no-referrer does that on same-origin form POSTs, which the origin checks refuse.
  assert.notEqual(AUTH_HEADERS["Referrer-Policy"], "no-referrer");
  assert.notEqual(AUTH_HEADERS["Referrer-Policy"], "same-origin");
});

test("a caller cannot weaken the auth headers", () => {
  const res = authResponse({}, { headers: { "Cache-Control": "public, max-age=999", "X-Robots-Tag": "all" } });
  assert.equal(res.headers.get("cache-control"), "private, no-store");
  assert.equal(res.headers.get("x-robots-tag"), "noindex");
});

test("each cookie is its own Set-Cookie header, all hardened", () => {
  const res = authResponse(
    { ok: true },
    {
      cookies: [
        { name: COOKIE_NAME + ".0", value: "a", options: { httpOnly: false, sameSite: "none", domain: ".evil.example" } },
        { name: COOKIE_NAME + ".1", value: "b", options: {} },
        { name: "not-ours", value: "c", options: {} },
      ],
    }
  );
  const lines = res.headers.getSetCookie();
  assert.equal(lines.length, 2);
  for (const line of lines) {
    assert.match(line, /; HttpOnly; Secure; SameSite=Lax$/);
    assert.match(line, /; Path=\/;/);
    assert.doesNotMatch(line, /Domain=/i);
  }
});

test("a non-JSON body is passed through untouched", async () => {
  const res = authResponse("<p>hi</p>", { json: false, headers: { "Content-Type": "text/html; charset=utf-8" } });
  assert.equal(await res.text(), "<p>hi</p>");
  assert.match(res.headers.get("content-type"), /text\/html/);
});

// ------------------------------------------------------------- cookie parsing

test("cookie header parsing, auth detection and clearing", () => {
  const r = req("https://x.test/", {
    cookie: `theme=dark; ${COOKIE_NAME}.0=aaa; ${COOKIE_NAME}.1=bbb; ${COOKIE_NAME}-code-verifier=ccc; sb-other=zzz`,
  });
  assert.equal(parseCookieHeader(r.headers.get("cookie")).length, 5);
  assert.equal(hasAuthCookie(r), true);
  assert.equal(hasAuthCookie(req("https://x.test/", { cookie: "theme=dark; sb-other=zzz" })), false);
  assert.equal(hasAuthCookie(req("https://x.test/")), false);
  const cleared = clearingCookies(r);
  assert.deepEqual(
    cleared.map((c) => c.name).sort(),
    [`${COOKIE_NAME}-code-verifier`, `${COOKIE_NAME}.0`, `${COOKIE_NAME}.1`].sort()
  );
  assert.ok(cleared.every((c) => c.options.maxAge === 0 && c.value === ""));
});

test("isAuthCookieName is exact about prefixes", () => {
  assert.equal(isAuthCookieName(COOKIE_NAME), true);
  assert.equal(isAuthCookieName(COOKIE_NAME + "x"), false);
  assert.equal(isAuthCookieName("sb-auth"), false);
});

// ------------------------------------------------------------------ validation

test("safeNext only ever returns a same-origin relative path", () => {
  for (const ok of ["/", "/case-studies/", "/mechanics/?m=streak", "/a/b#c"]) assert.equal(safeNext(ok), ok);
  const bad = ["//evil.example", "/\\evil.example", "https://evil.example/", "javascript:alert(1)", "", null, undefined, 5, "evil", "/a\r\nSet-Cookie: x=1", "/" + "a".repeat(300), "/\u0000"];
  for (const b of bad) assert.equal(safeNext(b), "/", `should reject ${JSON.stringify(b)}`);
  assert.equal(safeNext("//evil.example", "/login/"), "/login/");
});

test("isSameOrigin needs an Origin header equal to the request's own origin", () => {
  assert.equal(isSameOrigin(req("https://a.test/api/auth/login", { origin: "https://a.test" })), true);
  assert.equal(isSameOrigin(req("https://a.test/api/auth/login", { origin: "https://b.test" })), false);
  assert.equal(isSameOrigin(req("https://a.test/api/auth/login", { origin: "http://a.test" })), false);
  assert.equal(isSameOrigin(req("https://a.test/api/auth/login")), false);
  assert.equal(isSameOrigin(req("https://a.test/api/auth/login", { origin: "null" })), false);
});

test("normalizeEmail", () => {
  assert.equal(normalizeEmail("  Someone@Example.COM "), "someone@example.com");
  for (const bad of ["", "nope", "a@b", "a b@c.de", "@x.de", "a@@x.de", 5, null, undefined, "a@b.cd\r\nBcc: x@y.zz", "a".repeat(250) + "@x.de"]) {
    assert.equal(normalizeEmail(bad), null, `should reject ${JSON.stringify(bad)}`);
  }
});

test("token hash and otp type allow-lists", () => {
  assert.equal(isTokenHash("abc123DEF_-.~xyz"), true);
  for (const bad of ["", "short", "has space in it", "a".repeat(301), "ok<script>", null]) assert.equal(isTokenHash(bad), false);
  assert.equal(isOtpType("email"), true);
  assert.equal(isOtpType("magiclink"), true);
  assert.equal(isOtpType("signup"), true);
  for (const bad of ["recovery", "invite", "", "EMAIL", null]) assert.equal(isOtpType(bad), false);
});

// ---------------------------------------------------------------- rate limiter

test("checkRateLimit fails closed when the binding is missing or broken", async () => {
  assert.equal(await checkRateLimit(undefined, "k"), "unavailable");
  assert.equal(await checkRateLimit({}, "k"), "unavailable");
  assert.equal(await checkRateLimit({ limit: async () => { throw new Error("boom"); } }, "k"), "unavailable");
  assert.equal(await checkRateLimit({ limit: async ({ key }) => ({ success: key === "ok" }) }, "ok"), "ok");
  assert.equal(await checkRateLimit({ limit: async ({ key }) => ({ success: key === "ok" }) }, "other"), "limited");
});

test("sha256Hex matches the standard test vector", async () => {
  assert.equal(await sha256Hex("abc"), "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad");
});
