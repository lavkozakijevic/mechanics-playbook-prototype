// POST /api/account/delete { confirm }: delete the signed-in visitor's account.
// The site holds no Paddle or Supabase secret. It checks the origin, the
// session and two rate limits, then asks the payments Worker (service binding
// PAYMENTS) to do it, passing the visitor's access token and the typed word.
// The payments Worker re-checks the token with Supabase, takes the user id from
// that, checks the word and that the sign-in is under ten minutes old, cancels
// every live Paddle subscription, and only then deletes the Auth user. Nothing
// the browser sends names a user.
//
// On success every auth cookie is cleared. Every other session of this user
// stops working by itself: each request is re-verified with Supabase, which no
// longer knows the user.
import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";
import { authResponse, checkRateLimit, clearingCookies, hasAuthCookie, isSameOrigin } from "../../../lib/auth-config.mjs";
import { createRequestClient, finalCookies, supabaseConfigured } from "../../../lib/auth-server.mjs";
import { deleteResponse } from "../../../lib/account.mjs";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  if (!isSameOrigin(request)) return authResponse({ error: "forbidden" }, { status: 403 });

  let confirm: string | null = null;
  try {
    const text = await request.text();
    if (text.length > 256) throw new Error("too large");
    const value = JSON.parse(text)?.confirm;
    confirm = typeof value === "string" ? value : null;
  } catch {
    return authResponse({ error: "bad_request" }, { status: 400 });
  }
  if (confirm === null) return authResponse({ error: "confirm" }, { status: 400 });

  if (!hasAuthCookie(request)) return authResponse({ error: "unauthorized" }, { status: 401 });
  if (!supabaseConfigured(env) || !(env as any).PAYMENTS) return authResponse({ error: "unavailable" }, { status: 503 });

  const { supabase, state } = createRequestClient(request, env);
  const { data: userData } = await supabase.auth.getUser();
  const user = userData?.user;
  if (!user) return authResponse({ error: "unauthorized" }, { status: 401, headers: state.headers, cookies: finalCookies(state) });

  // Irreversible, so both limits are low. A missing binding fails closed.
  const ip = request.headers.get("cf-connecting-ip") ?? "unknown";
  const [byUser, byIp] = await Promise.all([
    checkRateLimit((env as any).DELETE_USER_LIMITER, user.id),
    checkRateLimit((env as any).DELETE_IP_LIMITER, ip),
  ]);
  if (byUser === "unavailable" || byIp === "unavailable") return authResponse({ error: "unavailable" }, { status: 503 });
  if (byUser === "limited" || byIp === "limited") {
    return authResponse({ error: "rate_limited" }, { status: 429, headers: { "Retry-After": "60" } });
  }

  // getUser() has just refreshed the session if it needed to, so this is a current token.
  const { data: sessionData } = await supabase.auth.getSession();
  const accessToken = sessionData?.session?.access_token;
  if (!accessToken) return authResponse({ error: "unauthorized" }, { status: 401, headers: state.headers, cookies: finalCookies(state) });

  let result: unknown = null;
  try {
    result = await (env as any).PAYMENTS.deleteAccount({ accessToken, confirm });
  } catch {
    // The binding itself failed (the payments Worker is down or not deployed).
    console.error(JSON.stringify({ evt: "delete_call", reason: "binding_failed" }));
  }
  const answer = deleteResponse(result);
  if (answer.status === 200) return authResponse(answer.body, { cookies: clearingCookies(request) });
  return authResponse(answer.body, { status: answer.status, headers: state.headers, cookies: finalCookies(state) });
};

export const ALL: APIRoute = () =>
  authResponse({ error: "method_not_allowed" }, { status: 405, headers: { Allow: "POST" } });
