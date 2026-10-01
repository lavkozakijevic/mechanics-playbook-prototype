# appservatory-payments

The Paddle webhook. A small Cloudflare Worker, separate from the site Worker, with no pages and no static assets. It is the only place that holds the Supabase secret key (`sb_secret_...`) and the Paddle secrets.

- `POST /paddle/webhook` verifies Paddle's signature over the raw body, then calls `public.apply_subscription_event` once. All eight `subscription.*` events share one code path.
- An hourly cron (`17 * * * *`) reads Paddle's subscriptions and applies only the ones that are missing from, or differ from, `public.subscriptions`.

## Layout

| File | Job |
|---|---|
| `src/signature.mjs` | `Paddle-Signature` check: any of several `h1`, five-second window in both directions, constant-time compare |
| `src/mapping.mjs` | Paddle subscription → the function's 13 parameters (shared by the webhook and reconciliation) |
| `src/handler.mjs` | The route: method, size, config, signature, parse, map, apply; the response table |
| `src/supabase.mjs` | The two Data API calls (the RPC, one read), `fetch` only |
| `src/paddle-api.mjs` | `GET /subscriptions`, read only |
| `src/reconcile.mjs` | The hourly job |
| `src/log.mjs` | The only way to log: allow-listed keys, plain values only |
| `scripts/send-test-event.mjs` | Sends one signed test event to a deployed Worker |
| `e2e/run.mjs` | Local end-to-end run (needs a local Postgres) |

## Answers to Paddle

| Case | Status |
|---|---|
| applied, stale, duplicate, rejected_user | 200 |
| other event type or other product; a payload nobody could apply | 200 (the second is logged as an error) |
| bad, malformed or old signature | 401 |
| valid signature, invalid JSON | 400 |
| body over 256 KB | 413 |
| missing configuration; the database not answering or answering unexpectedly | 503 (Paddle retries) |
| anything but POST | 405 |

## Configuration (Cloudflare dashboard, Settings > Variables and Secrets)

Secrets: `SUPABASE_SECRET_KEY`, `PADDLE_WEBHOOK_SECRET_SANDBOX`, `PADDLE_WEBHOOK_SECRET_LIVE` (at launch), `PADDLE_API_KEY`.
Text variables: `SUPABASE_URL`, `PADDLE_ENVIRONMENT` (`sandbox` or `live`; selects the one secret and API host in use), `PADDLE_PRODUCT_ID`.

Nothing secret is in this repository. `.dev.vars` is git-ignored.

## Commands

    npm test          unit tests (also run by CI)
    npm run check     deploy dry run: validates wrangler.jsonc and bundles, deploys nothing
    npm run e2e       end to end under wrangler dev; see the header of e2e/run.mjs for the one-time database setup
