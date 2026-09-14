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
> Applied means the tag cleared the publishing bar: at least one Pass two block at "strongly supported" or better. A tag that never clears it, however plausible, is not applied — it gets no mechanic block and does not belong in this list, however much material it has in the section pages. The number of mechanic blocks in the summary page must equal the number of applied tags listed here, every time. If those two counts don't match, one of them is wrong.
>
> **Deliver the summary page in full,** in this order. Note that the mechanic blocks are composed writing and the section pages are the record. They are different jobs and the difference matters:
>
> 1. App description. Three or four sentences on what [app] is and what its design is organised around, drawn from the system view.
> 2. A one-line teaser.
> 3. The system view, as one short paragraph only. State whether this is a simple, medium or complex system, and name the spine, meaning the decision or action the rest of the product hangs from. That is all. The full system account and its diagram live on the systems page and are written separately. Do not write the full narrative here.
> 4. Mechanics. One block per applied tag, headed by the mechanic name alone. **Each block is composed prose, not a list of observations.** Write it as a piece about that mechanic in this app, in four labelled parts:
>
>    **What was observed.** What the app does with this mechanic, as continuous prose.
>
>    **How it is presented.** Where it appears, how it is framed, what the user sees and when.
>
>    **What is worth noting.** The choice a product person should take from it: what is unusual, deliberate, or different from how other apps do it. This is judgement, and it stays inside what the observations support.
>
>    **Key findings.** Three to five short bullets, each a single fact.
>
>    Write these from the observations carrying the tag. Do not reproduce the observations, do not keep their headings, and do not stack them one after another. The observations appear in full on their section pages. This block is where someone reads about the mechanic.
>
>    End each block with a note naming which screenshots it needs.
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
> That rule is about mechanics, and it stays absolute: never name a narrator, a session, a recording, what a session reached or didn't reach, or what wasn't established, in any form. "In this record" is the same leak in different words; do not use it either. "Confirmed" is not banned outright, since it is also ordinary product language, a confirmation screen, a user confirming an action, but watch for the one shape that is this same leak in disguise: the write-up vouching for its own claim ("what's confirmed here", "a confirmed behavior", "not confirmed by anything shown"). That gets the same fix as the paragraph above, say what the app states, separately from what was or wasn't seen happening. But mechanics and scope are not the same thing, and the rule above must not be stretched to cover scope too. If the app itself states that a feature exists, for instance a locked entry carrying its own stated unlock condition, do not write as though the feature is absent from the app just because this analysis didn't reach it. Say what the app states about the feature, then state the analysis's own scope in the library's own voice: first person plural, about coverage only, and nothing else. "We did not cover X in this analysis" is scope, and it is allowed. For example: "Friends, guilds and arena exist in [app] as social features, each with its own stated unlock condition. None was available to us during this analysis." The first sentence is a fact about the app; the second is a fact about this analysis's coverage. Neither says anything about how the analysis was carried out.
>
> Never explain why an observation belongs in the write-up. Cut "which is worth noting", "worth stating", "worth flagging", "which is a design choice" and every variant that comments on the write-up's own inclusion decision rather than on the app. State the observation and stop. The reader draws the conclusion; that is the whole point of leaving it out.
>
> An absence earns a bullet only where it changes what a user can do or decide: a cost never named before a purchase, a reward never stated, an outcome the app describes but never shows. A rule that simply doesn't specify a threshold, a cadence, or a formula is not a finding on its own, and neither is a missing screen, prompt, or message, cut those. The app's own silence about its own behaviour, what happens when or after something, is a different and legitimate kind of finding, not the same as a detail nobody bothered to state, and it stays.
>
> Capitalize the first word of every sentence, including the word right after a labelled field's colon: "What is worth noting: The [app]...", never "What is worth noting: the [app]...". This has slipped before on whole apps at once, every continuation lowercase from the first block to the last, which is what happens when it is treated as a style rather than a rule.
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
> Section lead-ins orient, they never argue. Say what this part of the app covers. Judgement about what the app is doing belongs in the mechanic blocks, under "what is worth noting", where the observations support it.
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

Corrections made at this stage go directly into `sources/analyses/[app].md`. The behavioral-design copy is updated to match in the same sitting, so the two do not drift apart.

This file exists in two copies: canonical at `/library/prompts/stage2-website-content.md`, mirrored in the repo at `sources/prompts/stage2-website-content.md`. When one is amended, the other is amended in the same sitting.
