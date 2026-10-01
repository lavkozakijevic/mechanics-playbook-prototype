// Entry point of the appservatory-payments Worker. It does two things: answers
// Paddle's webhook, and reconciles against the Paddle API once an hour. It
// serves no pages and holds the only copy of the Supabase secret key and the
// Paddle secrets.
import { handleWebhook } from "./handler.mjs";
import { reconcile } from "./reconcile.mjs";

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);
    if (pathname === "/paddle/webhook") return handleWebhook(request, env);
    return new Response("Not found", { status: 404, headers: { "cache-control": "no-store" } });
  },

  // Cron trigger (wrangler.jsonc). Awaited, not waitUntil'd, so a failed run
  // shows as a failed invocation in the dashboard.
  async scheduled(_controller, env) {
    await reconcile(env);
  },
};
