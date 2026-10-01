/**
 * The server side of gating: given a request for something protected, say what
 * the visitor may see. Used by the on-request pages and by the Worker's image
 * gate (src/worker.ts). The browser decides nothing: the answer comes from
 * Supabase, asked as the visitor, under row-level security
 * (public.current_entitlement(), which can only answer about the caller).
 *
 * One round trip at most, and none when the window is open, the app is free or
 * there is no session cookie. Every failure ends in a gate or a 503, never
 * content.
 */
import { decideAccess, isReviewWindowOpen, needsEntitlementCheck } from "./access.mjs";
import { hasAuthCookie } from "./auth-config.mjs";
import { createRequestClient, finalCookies, supabaseConfigured } from "./auth-server.mjs";

const TIMEOUT_MS = 4000;

export type AccessResult = {
  view: "full" | "gate" | "unavailable";
  pastDue: boolean;
  signedIn: boolean;
  /** Session cookies Supabase asked to rewrite (a refreshed token, or a removal). */
  cookies: { name: string; value: string; options: object }[];
  /** Response headers the Supabase client wants set. */
  headers: Record<string, string>;
};

async function askEntitlement(request: Request, env: any) {
  const { supabase, state } = createRequestClient(request, env);
  let answer = "unavailable";
  try {
    const res = await supabase.rpc("current_entitlement").abortSignal(AbortSignal.timeout(TIMEOUT_MS));
    if (res.error) {
      // Supabase refused the visitor's token (or there is none): signed out.
      // Anything else (5xx, a network failure) is "could not ask".
      answer = res.status === 401 || res.status === 403 ? "signed_out" : "unavailable";
      if (answer === "unavailable") console.error(JSON.stringify({ evt: "gate", reason: String(res.error.code ?? res.status ?? "failed").slice(0, 40) }));
    } else {
      answer = typeof res.data === "string" ? res.data : "unavailable";
    }
  } catch {
    console.error(JSON.stringify({ evt: "gate", reason: "request_failed" }));
  }
  // A refreshed session is written back by the client's auth-state listener, which
  // runs just after the call that caused it: let it finish before reading the cookies.
  try {
    await supabase.auth.getSession();
  } catch { /* nothing more to settle */ }
  await new Promise((resolve) => setTimeout(resolve, 0));
  return { answer, state };
}

export async function resolveAccess(request: Request, env: any, { free }: { free: boolean }): Promise<AccessResult> {
  const windowOpen = isReviewWindowOpen(env?.REVIEW_WINDOW);
  const hasSession = hasAuthCookie(request);
  const question = { windowOpen, free, hasSession };

  if (!needsEntitlementCheck(question)) {
    return { ...decideAccess(question), cookies: [], headers: {} };
  }
  if (!supabaseConfigured(env)) {
    return { ...decideAccess({ ...question, entitlement: "unavailable" }), cookies: [], headers: {} };
  }
  const { answer, state } = await askEntitlement(request, env);
  return { ...decideAccess({ ...question, entitlement: answer }), cookies: finalCookies(state), headers: state.headers };
}
