# Cloudflare Pages Functions

Server-side endpoints that ship alongside the static site. On Cloudflare Pages,
each file here maps to a route by its path: `api/lead.js` → `POST /api/lead`.

## `/api/lead` — lead capture (email notification)

Used by the category landing pages' free-report form, and reusable by any future
capture point (e.g. the paywall). It emails a notification via **Resend** and
returns `{ ok: true }`; the client then starts the download.

### Environment variables

Set these in **Cloudflare Pages → Settings → Variables and Secrets** (Production
and Preview). They stay server-side and are never exposed to the page.

| Name | Type | Required | Default | Notes |
|---|---|---|---|---|
| `RESEND_API_KEY` | Secret | Yes | — | From resend.com → API Keys |
| `LEAD_NOTIFY_TO` | Variable | No | `lav@gamebizconsulting.com` | Where lead notifications land |
| `LEAD_FROM` | Variable | No | `GameBiz Leads <onboarding@resend.dev>` | Resend's shared sender (no domain verification). Override with a verified-domain sender once set up. |

The recipient and sender defaults live in the Function itself, so the endpoint
works with **only `RESEND_API_KEY`** set.

### One-time setup (minimum)

1. Create a Resend account and an API key.
2. Set it as the `RESEND_API_KEY` secret above (Production and Preview).
3. Redeploy so the secret takes effect, then submit the form to test.

Notifications send from `onboarding@resend.dev` out of the box — no domain
verification required. To send from your own domain later, **verify
`gamebizconsulting.com`** in Resend (adds SPF/DKIM DNS records) and set
`LEAD_FROM` to e.g. `GameBiz <leads@gamebizconsulting.com>`.

### Local testing

`astro dev` does not run Functions. Use `npx wrangler pages dev ./dist` after a
build, or rely on the deployed Preview environment.
