// GET /api/auth/me: who is signed in, and whether they have access, for the
// header. Display only: the header uses it to show the address and to swap the
// locked wording for the unlocked wording. Nothing here (or anywhere in the
// browser) decides what anyone may see; every protected page asks the server
// again. "entitled" is read as the visitor, through row-level security
// (public.current_entitlement), so the site needs no secret key.
import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";
import { authResponse, checkRateLimit, hasAuthCookie } from "../../../lib/auth-config.mjs";
import { createRequestClient, finalCookies, supabaseConfigured } from "../../../lib/auth-server.mjs";
import { entitlementState } from "../../../lib/checkout.mjs";

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  // No session cookie: answer without touching Supabase or any configuration.
  if (!hasAuthCookie(request)) return authResponse({ email: null });
  if (!supabaseConfigured(env)) return authResponse({ error: "not_configured" }, { status: 503 });

  const { supabase, state } = createRequestClient(request, env);
  // getUser() asks Supabase to validate the token. getSession() would trust
  // whatever the cookie says, which is not safe on a server.
  const { data } = await supabase.auth.getUser();
  const user = data?.user;

  // Every page load asks, so this has its own limit (and a failure of any kind
  // reads as "not entitled", which only means the locked wording stays).
  let entitled = false;
  if (user && (await checkRateLimit((env as any).ACCESS_LIMITER, user.id)) === "ok") {
    try {
      const { data: answer, error } = await supabase.rpc("current_entitlement");
      entitled = !error && entitlementState(answer) === "active";
    } catch {
      entitled = false;
    }
  }
  return authResponse(
    { email: user?.email ?? null, entitled },
    { headers: state.headers, cookies: finalCookies(state) }
  );
};

export const ALL: APIRoute = () =>
  authResponse({ error: "method_not_allowed" }, { status: 405, headers: { Allow: "GET" } });
