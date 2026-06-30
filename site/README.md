# Mechanics Playbook — Astro site

This folder is the new site being built per `../migration-brief.md`. The old
site (the HTML files in the repository root) stays untouched and live until
the migration is approved.

## How it fits together

- `scripts/convert-content.mjs` — builds the content files from the v44
  sources (`../data.js`, `../system.html`, `../sources/analyses/`). Runs
  automatically before every build.
- `src/content/` — the content collections (one JSON file per app, per
  mechanic). Generated; will become hand-maintained once Stage 2 retires
  `data.js`.
- `src/components/ds/` — the design-system components from the Claude Design
  handoff bundle, verbatim.
- `src/components/site/` — the page templates from the bundle, converted to
  take real content as props. Markup and styling unchanged.
- `src/styles/` — the bundle's design tokens and site stylesheet.

Visibility: every content item carries `public`, `subscriber`, or
`report-only`. Pages query content only through `src/lib/content.ts`, which
filters `report-only` out of everything, so report content never reaches the
built output.

## Commands (run inside `site/`)

| Command | What it does |
|---|---|
| `npm install` | install dependencies |
| `npm run build` | convert content + build the static site into `dist/` |
| `npm run dev` | local preview at localhost:4321 |

## Cloudflare Pages settings (for previews and, later, production)

- Build command: `cd site && npm install && npm run build`
- Build output directory: `site/dist`
- Environment variable `SITE_URL` — set to the site's final address so the
  sitemap uses real URLs (previews work fine without it).
