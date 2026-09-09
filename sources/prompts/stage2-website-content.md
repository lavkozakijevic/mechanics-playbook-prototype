# Stage 2: website content

Run in a fresh Claude Code session in the site repo, with the app's analysis attached or already staged at `sources/analyses/[app].md`.

Replace `[app]` with the app name and `[mechanic 1]`, `[mechanic 2]` and so on with the mechanics the analysis applies as tags. Name the two section pages you want as samples on the first run of a new app; on later runs ask for whichever sections you have not yet reviewed.

This stage produces plain text for review. It does not build anything.

---

## The prompt

> Attached is the [app] analysis. Read it in full. It is the only source of facts. Do not use general knowledge of [app], any prior analysis, or any existing [app] content on the site.
>
> Produce the case study content as plain text for my review. Do not write code, do not edit data.js, do not create a branch, do not commit anything. This is a writing task only.
>
> [app] carries these applied tags: [mechanic 1], [mechanic 2], [mechanic 3].
>
> **Deliver the summary page in full,** in this order:
>
> 1. App description. Three or four sentences on what [app] is and what its design is organised around, drawn from the system view.
> 2. A one-line teaser.
> 3. The system view. Open with one sentence stating whether this is a simple, medium or complex system. Then the spine, meaning the decision or action the rest of the product hangs from. Then each element that spine feeds, in a short clean paragraph each. Then a short close on how those elements connect, if they connect. Assume the reader has never opened the app. Keep it tight.
> 4. Mechanics. One block per applied tag, headed by the mechanic name alone. Each block carries the observations that support that tag, rendered in full, and a note naming which screenshots the block needs.
> 5. The full record. Nine section cards, each with the section name, a one-line description, and its observation count. Empty sections appear as such and are not linked.
>
> Target around 1,500 words for the summary page.
>
> **Then deliver these section pages in full:** [section], [section]. Each opens with a lead-in of two or three sentences, then every observation in that section.
>
> **Writing rules. These are hard.**
>
> Never describe what the page or the reader will encounter. No "the block below gathers", no "what follows", no "each section covers". If a sentence is about the document rather than about the app, it does not belong.
>
> Never tell the reader what was or was not seen during analysis. No "the app never shows", no "worth being plain about", no "what happens after approval is not shown". Where behaviour was not observed, describe what the app itself states and attribute it to the app: "[app] says an advance settles against the next paycheck." That is a fact about the app and it is enough.
>
> The app is the subject of the sentence, not the screen. Write "[app] explains that purchases made with its debit card are rounded up to the nearest dollar", not "A section headed X explains that...".
>
> Do not quote the app's interface copy. Describe what the app says in your own words. The only exception is where the exact wording is itself the finding, meaning the app is framing, minimising, or making a specific claim to the user, and paraphrasing would lose what makes it notable. Section headers, button labels, tab names and menu items are never quoted.
>
> Rewrite every observation title as a short plain label of two to four words. Not the analysis title. "Round-ups are introduced as a setup flow with reversibility stated up front" becomes "Setting up round-ups". "The product creates the user's first goal and gives it a target" becomes "[app] suggests the first goal".
>
> Remove all cross-references. No "Related:" lines anywhere.
>
> Leave out regulatory and interface furniture unless it changes what a user does: links to learn more, deposit agreements, disclosures, consent checkboxes, terms acknowledgements. A product person adds those themselves. Keep them only where the placement itself is the behavioural point, for example three consents carried by a single continue button.
>
> Section lead-ins orient, they never argue. Say what this part of the app covers. Any judgement about what the app is doing belongs in the system view, where the analysis supports it.
>
> No evidence tiers, no analysis vocabulary, no observation numbers, no em dashes. Contractions are fine.
>
> Describe the people using the app as users. Numerals over spelled-out numbers except idiomatic uses. App and feature names spelled exactly as the app spells them. No outcome claims, no effectiveness claims, no percentages that are not in the analysis, no speculation about intent beyond what the analysis states.
>
> Every observation in the analysis is represented. Do not merge, split, reorder or omit any.
>
> **Voice:** friendly, knowledgeable, direct, writing for product people who know their own domain. Explain, never lecture. Say the thing and move on.
>
> Tell me the total word count and flag anything in the analysis you could not render faithfully.

---

## Notes

Deliver in batches. The full record for a rich app runs past 10,000 words, so ask for the summary page plus two or three section pages at a time rather than everything at once.

Corrections made at this stage flow back into `analysis-reviewed.md` after the content is approved. The page and the canonical record must not drift apart.

This file exists in two copies: canonical at `/library/prompts/stage2-website-content.md`, mirrored in the repo at `sources/prompts/stage2-website-content.md`. When one is amended, the other is amended in the same sitting.
