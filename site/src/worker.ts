/**
 * The site Worker's entry point (wrangler.jsonc "main"). It is Astro's own
 * handler with one addition in front: protected files.
 *
 * Files under /protected/ (screenshots and hero images that belong to an app
 * that is not free) are real static files, but the Worker runs first for that
 * path (assets.run_worker_first), and Astro's own handler would serve any file
 * it can find without a check, so this wrapper answers for the path itself:
 * entitled visitors (or an open review window) get the file, everyone else
 * gets a 404, and the response is never cacheable by anyone else.
 */
import astro from "@astrojs/cloudflare/entrypoints/server";
import { PROTECTED_HEADERS } from "./lib/access.mjs";
import { setCookieLines } from "./lib/auth-config.mjs";
import { resolveAccess } from "./lib/gate-server";

const PROTECTED_PREFIX = "/protected/";
// Plain file paths only: no dot segments, no encoded separators.
const SAFE_PATH = /^\/protected\/[A-Za-z0-9._-]+(?:\/[A-Za-z0-9._-]+)*$/;

function withProtectedHeaders(res: Response, extraCookies: string[] = []) {
  const h = new Headers(res.headers);
  for (const [k, v] of Object.entries(PROTECTED_HEADERS)) h.set(k, v);
  h.delete("CF-Cache-Status");
  for (const line of extraCookies) h.append("Set-Cookie", line);
  return new Response(res.body, { status: res.status, statusText: res.statusText, headers: h });
}

const plain = (status: number, text: string, extraCookies: string[] = []) =>
  withProtectedHeaders(new Response(text, { status, headers: { "Content-Type": "text/plain; charset=utf-8" } }), extraCookies);

async function protectedFile(request: Request, env: any): Promise<Response> {
  if (request.method !== "GET" && request.method !== "HEAD") return plain(405, "Method not allowed");
  const url = new URL(request.url);
  if (!SAFE_PATH.test(url.pathname) || url.pathname.includes("..")) return plain(404, "Not found");

  const access = await resolveAccess(request, env, { free: false });
  const cookies = setCookieLines(access.cookies);
  if (access.view === "unavailable") return plain(503, "Temporarily unavailable", cookies);
  // Not entitled: the same answer as a file that does not exist.
  if (access.view !== "full") return plain(404, "Not found", cookies);

  // Straight to the static asset layer, with none of the visitor's headers.
  const file = await env.ASSETS.fetch(new Request(url.origin + url.pathname, { method: request.method }));
  if (file.status !== 200) return plain(404, "Not found", cookies);
  return withProtectedHeaders(file, cookies);
}

export default {
  async fetch(request: Request, env: any, ctx: any) {
    if (new URL(request.url).pathname.startsWith(PROTECTED_PREFIX)) return protectedFile(request, env);
    return (astro as any).fetch(request, env, ctx);
  },
};
