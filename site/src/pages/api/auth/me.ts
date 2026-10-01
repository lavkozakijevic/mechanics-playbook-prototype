// GET /api/auth/me: who is signed in, for the header. Display only; nothing
// here (or anywhere in the browser) decides what anyone may see.
import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";
import { authResponse, hasAuthCookie } from "../../../lib/auth-config.mjs";
import { createRequestClient, finalCookies, supabaseConfigured } from "../../../lib/auth-server.mjs";

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  // No session cookie: answer without touching Supabase or any configuration.
  if (!hasAuthCookie(request)) return authResponse({ email: null });
  if (!supabaseConfigured(env)) return authResponse({ error: "not_configured" }, { status: 503 });

  const { supabase, state } = createRequestClient(request, env);
  // getUser() asks Supabase to validate the token. getSession() would trust
  // whatever the cookie says, which is not safe on a server.
  const { data } = await supabase.auth.getUser();
  return authResponse(
    { email: data?.user?.email ?? null },
    { headers: state.headers, cookies: finalCookies(state) }
  );
};

export const ALL: APIRoute = () =>
  authResponse({ error: "method_not_allowed" }, { status: 405, headers: { Allow: "GET" } });
