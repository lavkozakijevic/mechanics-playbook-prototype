// POST /api/checkout { plan }: start a checkout for the signed-in visitor.
// The site holds no Paddle secret. It checks the origin and the session, then
// asks the payments Worker (service binding PAYMENTS) to create the
// transaction, passing the visitor's access token and the plan name. The
// payments Worker re-checks the token with Supabase and takes the user id and
// email from that, so nothing the browser sends decides who the checkout is for.
// The answer carries only the transaction id, the public client-side token and
// the environment name.
import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";
import { authResponse, checkRateLimit, hasAuthCookie, isSameOrigin } from "../../lib/auth-config.mjs";
import { createRequestClient, finalCookies, supabaseConfigured } from "../../lib/auth-server.mjs";
import { checkoutResponse, parsePlan } from "../../lib/checkout.mjs";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  if (!isSameOrigin(request)) return authResponse({ error: "forbidden" }, { status: 403 });

  let plan: string | null = null;
  try {
    const text = await request.text();
    if (text.length > 512) throw new Error("too large");
    plan = parsePlan(JSON.parse(text)?.plan);
  } catch {
    return authResponse({ error: "bad_request" }, { status: 400 });
  }
  if (!plan) return authResponse({ error: "invalid_plan" }, { status: 400 });

  if (!hasAuthCookie(request)) return authResponse({ error: "unauthorized" }, { status: 401 });
  if (!supabaseConfigured(env) || !(env as any).PAYMENTS) return authResponse({ error: "unavailable" }, { status: 503 });

  const { supabase, state } = createRequestClient(request, env);
  const { data: userData } = await supabase.auth.getUser();
  const user = userData?.user;
  if (!user) return authResponse({ error: "unauthorized" }, { status: 401, headers: state.headers, cookies: finalCookies(state) });

  // Each attempt makes a draft transaction at Paddle, so both limits are low.
  // A missing binding fails closed, like missing configuration.
  const ip = request.headers.get("cf-connecting-ip") ?? "unknown";
  const [byUser, byIp] = await Promise.all([
    checkRateLimit((env as any).CHECKOUT_USER_LIMITER, user.id),
    checkRateLimit((env as any).CHECKOUT_IP_LIMITER, ip),
  ]);
  if (byUser === "unavailable" || byIp === "unavailable") return authResponse({ error: "unavailable" }, { status: 503 });
  if (byUser === "limited" || byIp === "limited") {
    return authResponse({ error: "rate_limited" }, { status: 429, headers: { "Retry-After": "60" } });
  }

  // getUser() has just refreshed the session if it needed to, so this is a current token.
  const { data: sessionData } = await supabase.auth.getSession();
  const accessToken = sessionData?.session?.access_token;
  if (!accessToken) return authResponse({ error: "unauthorized" }, { status: 401, headers: state.headers, cookies: finalCookies(state) });

  let result: unknown;
  try {
    result = await (env as any).PAYMENTS.create({ accessToken, plan });
  } catch {
    // The binding itself failed (the payments Worker is down or not deployed).
    console.error(JSON.stringify({ evt: "checkout_call", reason: "binding_failed" }));
    result = null;
  }
  const answer = checkoutResponse(result);
  return authResponse(answer.body, { status: answer.status, headers: state.headers, cookies: finalCookies(state) });
};

export const ALL: APIRoute = () =>
  authResponse({ error: "method_not_allowed" }, { status: 405, headers: { Allow: "POST" } });
