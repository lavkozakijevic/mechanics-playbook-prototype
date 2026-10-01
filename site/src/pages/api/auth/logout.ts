// POST /api/auth/logout: end the session and clear every auth cookie.
import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";
import { authResponse, clearingCookies, hasAuthCookie, isSameOrigin } from "../../../lib/auth-config.mjs";
import { createRequestClient, supabaseConfigured } from "../../../lib/auth-server.mjs";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  if (!isSameOrigin(request)) return authResponse({ error: "forbidden" }, { status: 403 });

  if (hasAuthCookie(request) && supabaseConfigured(env)) {
    const { supabase } = createRequestClient(request, env);
    try {
      await supabase.auth.signOut({ scope: "local" });
    } catch {
      /* the cookies are cleared below either way */
    }
  }

  // Cleared explicitly, by name, so no chunk or leftover cookie survives.
  return authResponse({ ok: true }, { cookies: clearingCookies(request) });
};

export const ALL: APIRoute = () =>
  authResponse({ error: "method_not_allowed" }, { status: 405, headers: { Allow: "POST" } });
