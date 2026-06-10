# Mechanics Playbook: Migration Brief for Claude Code

*GameBiz Consulting, June 2026. This brief instructs the migration of the Mechanics Playbook site to a content-driven Astro build, marrying the v44 content with the new design produced in Claude Design. Read the whole brief before doing anything. Work in stages, in order. Each stage ends with my approval before the next begins.*

## The two inputs

**1. v44, the current site.** Content is already centralized in `data.js` (MECHANICS, APPS, SYSTEMS, CHEATSHEETS, GLOSSARY, RICH_DESCRIPTIONS, SCREENSHOTS), and pages render from it client-side. v44 is the source of truth for all content. Three known problems to fix during migration:

- `system.html` keeps its own CONNECTIONS and POSITIONS data, separate from `data.js`. This split has been the most persistent source of breakage. All system data merges into the unified content model.
- Everything renders client-side in the browser, which search engines penalize. The build must pre-render every page to static HTML.
- The finance report pages ship in the public folder, fetchable by anyone. Report content must be removed from the deployed output entirely.

**2. The Claude Design handoff bundle, the new design.** Claude Design produced HTML pages, one per page type (index, mechanics list and detail, case studies list and detail, systems list and detail, cheatsheets list and detail, glossary list and detail, report pages). These pages were created without real content and are the source of truth for all design. They become the Astro templates. Do not restyle, improve, or deviate from them.

**Rule of the two sources: content questions are answered by v44, design questions are answered by the Claude Design pages. If the two conflict structurally (the design expects a field the content lacks, or vice versa), do not guess: ask.**

## Target architecture

- **Generator:** Astro, deployed on Cloudflare Pages, building on every push.
- **Content:** Astro content collections, seeded by converting `data.js` into one file per app, per mechanic, per system, per cheatsheet, and per glossary term. Each app's file carries everything about that app, including its system map nodes, connections, and positions.
- **Relationships are computed, never stored twice.** A mechanic page builds its examples list by querying which apps reference it. Indexes, counts, and "new this week" assemble themselves from content metadata at build time.
- **Visibility is a field on every piece of content:** `public`, `subscriber`, or `report-only`. Report-only content must never appear in the built output, not even in fetchable data files. Strip it at build time. Subscriber gating remains cosmetic for now (the paywall is a later project); build the field, not the wall.
- **Every page pre-renders to static HTML** with proper titles, meta descriptions, and a generated sitemap.

## Stage 0: Map the current state

Before touching anything, read both inputs in full and produce for my confirmation:

1. A structural map of v44: every page, every data source, every cross-reference, every duplication (especially the system.html data split)
2. A content inventory of v44: every app, mechanic, system, cheatsheet, and glossary term, and the references between them, so I can verify nothing is missing before it becomes the canonical content
3. A template inventory of the Claude Design bundle: which page types are covered, which content fields each template expects, and any mismatches with what v44's content actually contains
4. Anything inconsistent or unclear in either input, as questions in a batch

Known gap to confirm: the design bundle currently lacks Work With Us and subscribe/login pages. Flag any other missing page types. Missing pages get designed in Claude Design, not improvised here.

**Do not proceed to Stage 1 until I confirm all four.**

## Stage 1: Vertical slice

Set up the Astro project and migrate exactly one app, end to end: its content file converted from data.js, its screenshots, the Claude Design templates rendering its case study page, its row on the case studies index, its appearance on every relevant mechanic page, its system map (data now living in the app's own file), and its presence on the homepage. Deploy to a Cloudflare preview URL. The slice must prove the cross-references compute correctly and the design renders real content well. I review before we continue.

## Stage 2: Full migration

Convert the rest of data.js into content files and render the full site through the new templates. Where content and templates disagree, or where v44's data is internally inconsistent, collect questions and ask in batches. The live site stays untouched until the new build is confirmed complete; we switch by pointing Cloudflare at the new build only after my approval.

## Stage 3: Safety net

1. **Validation script**, run before every build: every referenced mechanic exists, every system connection points to valid nodes, all screenshot paths resolve, required fields present, dates valid, every content item has a visibility value. Failures name the file and the problem in plain language.
2. **Smoke tests** (Playwright): case studies render with content, indexes show correct counts, navigation works, and a report-only test item appears nowhere in the built output, including data files.
3. **Workflow:** all changes go to a branch, Cloudflare builds a preview, main updates only after I approve the preview. A failed build or failed test never deploys.

## Stage 4: Import workflow (CLAUDE.md)

Write a CLAUDE.md in the repository root so future sessions handle weekly imports consistently. It must instruct:

- When given a new app analysis, create the app's content folder and touch nothing else
- Before committing, list for me: any ambiguities in the analysis, any mechanics mentioned that don't exist in the library yet, any missing screenshots or fields, and any questions
- Run validation and tests, push to a branch, and give me the preview URL
- Never edit templates or site code during a content import; if an import seems to require a code change, stop and ask

## Out of scope

The paywall (LemonSqueezy, login, Cloudflare Functions) and the blog come after this migration is stable, as separate briefs. Build the visibility field now; build nothing else for them. No new pages, features, or design changes beyond the two inputs. When in doubt, ask before building.

## Working rules

- One stage at a time, my approval between stages
- Content truth is v44; design truth is the Claude Design bundle; conflicts become questions, not guesses
- Questions in batches, plain-language commit messages
- If something cannot be done as specified, say so and propose an alternative; do not silently improvise
