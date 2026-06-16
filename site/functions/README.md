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

| Name | Type | Example | Notes |
|---|---|---|---|
| `RESEND_API_KEY` | Secret | `re_xxx` | From resend.com → API Keys |
| `LEAD_NOTIFY_TO` | Variable | `lav@gamebizconsulting.com` | Where lead notifications land |
| `LEAD_FROM` | Variable | `GameBiz <leads@gamebizconsulting.com>` | Must be a Resend-verified domain sender |

### One-time setup

1. Create a Resend account and **verify the `gamebizconsulting.com` domain**
   (adds SPF/DKIM DNS records) so mail to your own inbox isn't filtered. For a
   quick test you can use `onboarding@resend.dev` as `LEAD_FROM` first.
2. Create an API key, set it as the `RESEND_API_KEY` secret above.
3. Set `LEAD_NOTIFY_TO` and `LEAD_FROM`.

### Local testing

`astro dev` does not run Functions. Use `npx wrangler pages dev ./dist` after a
build, or rely on the deployed Preview environment.
