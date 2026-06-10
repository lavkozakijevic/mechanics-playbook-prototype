# Gamification Service: Page and Section Requirements

*GameBiz Consulting, June 2026. This guide defines what every page must contain and in what order. It works together with the design system brief, the BrandScript, and the voice guide. Sections are listed top to bottom. Where a section exists in v30, evolve it; do not rebuild what works. Pricing is intentionally absent everywhere: all paid actions lead to a call or a request, not a checkout.*

## Global elements (every page)

**Navigation.** GameBiz logo (existing SVG), links to: Mechanics, Apps, Systems, Cheatsheets, Glossary, Reports, Work With Us. Log in and Subscribe actions on the right. Subscribe is the visually primary action.

**Footer.** All navigation links, newsletter signup, contact email, one-sentence description of the service following the one-liner from the BrandScript, copyright.

**Freshness signal.** A persistent, small "Updated weekly" marker near the logo or in the footer, plus dated content wherever entries appear. The cadence is the moat; the site must show it, not claim it.

**Locked content treatment.** Gated items show a preview and an invitation in the brand voice ("This breakdown is part of the full library"), never a hard wall. One click from any locked item to Subscribe.

---

## 1. Homepage

Purpose: pass the grunt test. A cold visitor (a CMO, PM, or founder who has never heard of us) understands within five seconds what we offer, how it helps them, and what to do next. The page follows the BrandScript order: their problem, then us as the guide, then the plan, then the proof.

Sections in order:

1. **Hero.** Headline states the visitor's problem and our promise in their language: retention, engagement, conversion. No gamification jargon in the headline itself. Subline introduces the library as the evidence. Two actions: Explore the library (primary), Work with us (secondary).
2. **Proof strip.** Library stats (apps, mechanics, systems, last updated date) presented as evidence of depth, with the freshness date visible.
3. **The plan.** Three steps from the BrandScript: explore the library, get your category report, build with us. Each step links to its page.
4. **Free case study spotlight.** Royal Match, open to everyone. Framed as "see exactly what a full breakdown looks like." This is the transitional call to action and must be prominent.
5. **Library preview.** Featured mechanics and apps (the existing slider and featured grid can serve here). Real screenshots, real titles.
6. **System map showcase.** One system map shown large, in the signature diagram style. Caption explains what systems are and why connections matter. Links to Systems.
7. **New this week.** The latest additions, dated. Proves the cadence.
8. **Work with us bridge.** Short section: what the audits and reports are, who they are for, one action: book a discovery call.
9. **Newsletter.** One field, one sentence on what subscribers get.
10. **Footer.**

## 2. Mechanics index

Purpose: browse and filter all 22 mechanics. Optimized for the return visit.

Required: filter sidebar (Category: Retention, Monetization, Social; Product Context; Player Type), stackable and clearable filters with live count, card grid where each card shows mechanic name, category, one-sentence definition, and context tags as working filter links. URL parameters for pre-filtered views must keep working.

## 3. Mechanic detail page

Purpose: the fullest expression of the sage voice. Make the reader smarter about one mechanic.

Sections in order: name and category; plain-language definition; why it works (the psychology, explained accessibly); who it works for (player types); requirements (what an app needs in place before this mechanic makes sense; this section is strategically critical, give it visual weight); implementation examples with annotated screenshots from real apps; related systems (which system maps feature this mechanic); related mechanics; next action (related case study or subscribe prompt for locked depth).

## 4. Apps index

Purpose: browse all analyzed apps. Required: card grid with app icon, name, category, mechanic count, date analyzed. Filterable by category. Royal Match clearly marked as free.

## 5. App case study page

Purpose: the specimen in full. What this app does and why it works.

Sections in order: app identity (icon, name, category, date of analysis); overview in the observational voice; mechanics present (linked list against the 22-mechanic framework); the breakdown (annotated screenshots with real-sentence captions, using the modal viewer); the system map for this app, in signature style; key takeaways (what a product team can learn); next action.

## 6. Systems index

Purpose: showcase the signature asset. Required: grid of all system maps with consistent thumbnail rendering of the diagram style, app name, and a one-line description of what the system achieves.

## 7. System detail page

Purpose: show how one app's mechanics interconnect. Required: the full interactive map in the signature diagram language; a written walkthrough of the loop in the sage voice; links from every node to its mechanic page; link to the app's case study. Technical note: this page depends on three synchronized data sources (APPS, SYSTEMS, CONNECTIONS/POSITIONS); design changes must not require structural changes to that data without flagging it.

## 8. Cheatsheets

Purpose: quick reference for practitioners. Required: index of the 6 cheatsheets with clear titles describing what each helps you do, and a consistent detail layout. Gated per the freemium rules.

## 9. Glossary

Purpose: accessibility in action. Every term a newcomer might not know, defined plainly. Required: alphabetical list, anchor links so library content can deep-link to definitions.

## 10. Reports page (new)

Purpose: sell the second rung of the ladder before the reports exist in volume.

Sections in order: what a category report is (features mapped across an entire category, where the openings are, applied ideas); a sample spread or excerpt as evidence (even one page, shown beautifully); which categories are available or coming; who it is for; action: request a report (form or email, no checkout, no prices).

## 11. Work With Us page (new)

Purpose: sell the third rung. A CMO landing here should see a practice they can hire, not just a library.

Sections in order: the problem in their words (conversion, retention, the fear of building the wrong thing); our approach (we start from the features you already have, then find the mechanics that fit; the architecture and diagnosis framing belongs here); what an engagement looks like (discovery, analysis of your app and category, working sessions with your product team, an evidence-backed roadmap); why us (the library as standing proof, stated without bragging, shown not claimed); action: book a discovery call. This is the page's only goal.

## 12. Subscribe and account pages

Purpose: friction-free entry to the library. Required: what subscribers get, stated plainly (full library access, weekly additions); the subscribe action; log in; account basics. The free tier (Royal Match plus previews) is explained honestly so nobody feels tricked after signing up.

---

## Page priority for design work

1. Homepage (carries the strategy's biggest current gap)
2. Work With Us (the missing rung that earns revenue)
3. Mechanic detail and App case study (the product itself)
4. Reports page
5. Everything else

## What not to do

Do not add pages this guide does not list. Do not add pricing anywhere. Do not gamify our own surfaces. Do not redesign the system diagram data structure without flagging it first. When in doubt, ask before building.
