// GET /api/entitlement: has this signed-in visitor's access been granted yet?
// Read as the visitor, through row-level security (public.current_entitlement),
// so the site needs no secret key. Only the webhook Worker can write the rows
// this reads, so the answer cannot come from the browser. The reply is
// { state: "active" | "pending" } and nothing else.
import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";
import { authResponse, checkRateLimit, hasAuthCookie } from "../../lib/auth-config.mjs";
import { createRequestClient, finalCookies, supabaseConfigured } from "../../lib/auth-server.mjs";
import { entitlementState } from "../../lib/checkout.mjs";

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  if (!hasAuthCookie(request)) return authResponse({ error: "unauthorized" }, { status: 401 });
  if (!supabaseConfigured(env)) return authResponse({ error: "unavailable" }, { status: 503 });

  const { supabase, state } = createRequestClient(request, env);
  const { data: userData } = await supabase.auth.getUser();
  const user = userData?.user;
  if (!user) return authResponse({ error: "unauthorized" }, { status: 401, headers: state.headers, cookies: finalCookies(state) });

  // The success page asks every two seconds; this keeps a runaway page from
  // turning that into a flood of database calls.
  const limited = await checkRateLimit((env as any).ENTITLEMENT_LIMITER, user.id);
  if (limited === "unavailable") return authResponse({ error: "unavailable" }, { status: 503 });
  if (limited === "limited") return authResponse({ error: "rate_limited" }, { status: 429, headers: { "Retry-After": "10" } });

  const { data, error } = await supabase.rpc("current_entitlement");
  if (error) {
    console.error(JSON.stringify({ evt: "entitlement", reason: String(error.code ?? "failed").slice(0, 40) }));
    return authResponse({ error: "unavailable" }, { status: 503, headers: state.headers, cookies: finalCookies(state) });
  }
  return authResponse({ state: entitlementState(data) }, { headers: state.headers, cookies: finalCookies(state) });
};

export const ALL: APIRoute = () =>
  authResponse({ error: "method_not_allowed" }, { status: 405, headers: { Allow: "GET" } });
