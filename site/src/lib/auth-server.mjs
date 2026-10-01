/**
 * The one place a Supabase client is built. Server-side only: the browser
 * never gets a Supabase URL, key or client, it only talks to /api/auth/*.
 *
 * Uses the publishable key. No secret key is needed for sign-in, and none is
 * read here.
 */
import { createServerClient } from "@supabase/ssr";
import { COOKIE_NAME, parseCookieHeader } from "./auth-config.mjs";

export function supabaseConfigured(env) {
  return Boolean(env?.SUPABASE_URL && env?.SUPABASE_PUBLISHABLE_KEY);
}

/** A client per request; the session is read from, and written back to, cookies. */
export function createRequestClient(request, env) {
  const state = { cookies: [], headers: {} };
  const supabase = createServerClient(env.SUPABASE_URL, env.SUPABASE_PUBLISHABLE_KEY, {
    cookieOptions: { name: COOKIE_NAME },
    cookies: {
      getAll: () => parseCookieHeader(request.headers.get("cookie")),
      setAll: (list, headers) => {
        state.cookies.push(...list);
        Object.assign(state.headers, headers ?? {});
      },
    },
  });
  return { supabase, state };
}

/** Cookies the library asked to set, last write per name winning. */
export function finalCookies(state) {
  const byName = new Map();
  for (const c of state.cookies) byName.set(c.name, c);
  return [...byName.values()];
}
