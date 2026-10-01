// Entry point of the appservatory-payments Worker. It answers Paddle's webhook,
// reconciles against the Paddle API once an hour, and creates checkout
// transactions for the site Worker through the Checkout entrypoint. It serves
// no pages and holds the only copy of the Supabase secret key and the Paddle
// secrets.
import { handleWebhook } from "./handler.mjs";
import { reconcile } from "./reconcile.mjs";

// The site Worker's service binding points at this class.
export { Checkout } from "./entrypoint.mjs";

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
