// The checkout entrypoint. An RPC class has no URL: only a Worker in this
// account whose wrangler config binds it (the site Worker's PAYMENTS binding)
// can call it. Two methods, nothing else, each taking the visitor's access
// token and returning plain data.
import { WorkerEntrypoint } from "cloudflare:workers";
import { checkoutStatus, createCheckout } from "./checkout.mjs";

export class Checkout extends WorkerEntrypoint {
  /** { accessToken } -> { ok, state, until? } | { ok: false, reason } */
  async status(input) {
    return checkoutStatus(this.env, input);
  }

  /** { accessToken, plan } -> { ok, transactionId, clientToken, environment } | { ok: false, reason } */
  async create(input) {
    return createCheckout(this.env, input);
  }
}
