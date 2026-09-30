# Stage 2: website content

Run in a fresh Claude Code session in the site repo, with the app's analysis attached or already staged at `sources/analyses/[app].md`. `sources/voice-guide.md` is already in the repo. Read it in full before writing anything. Every deliverable below follows it; the friend test decides what goes on the page.

Replace `[app]` with the app name and `[mechanic 1]`, `[mechanic 2]` and so on with the mechanics the analysis applies as tags. Name the two section pages you want as samples on the first run of a new app; on later runs ask for whichever sections you have not yet reviewed.

This stage produces plain text for review. It does not build anything.

---

## The prompt

> Attached is the [app] analysis and `sources/voice-guide.md`. Read both in full. The analysis is the only source of facts: do not use general knowledge of [app], any prior analysis, or any existing [app] content on the site. The voice guide governs how you write those facts.
>
> Produce the case study content as plain text for my review. Do not write code, do not edit `sources/content/[app].md` or `sources/analyses/[app].md` directly, do not create a branch, do not commit anything. This is a writing task only.
>
> [app] carries these applied tags: [mechanic 1], [mechanic 2], [mechanic 3].
>
> Applied means the tag cleared the publishing bar: at least one Pass two block at "strongly supported" or better. A tag that never clears it, however plausible, is not applied: it gets no block regardless of anything below, and does not belong in this list, however much material it has in the section pages.
>
> The friend test then decides which of these applied tags actually get a block on the page. A tag that's correctly applied but can't be explained usefully, nothing survives that a friend would want to hear, gets no block and does not appear on the page. It stays tagged in the analysis, and it goes on the coverage report instead. Every applied tag ends up in exactly one of two places: a block on the page, or an entry in the coverage report. If the two together don't account for every tag listed above, one of them is wrong.
>
> **Deliver the summary page in full,** in this order:
>
> 1. Teaser. One line: the most interesting true thing about [app].
> 2. Intro. Three or four sentences on what [app] is, and what makes it worth a look.
> 3. How it fits together. The core loop, in plain steps, as the player experiences it: what they do, in order, and what happens next. Then, in the same short paragraph or two, how the other mechanics hang off that loop. Never open with a complexity label: no "this is a simple system" or "a medium system." The full system account and its diagram still live on the systems page and are written separately; do not write that narrative here.
> 4. Mechanics. One block per applied tag that survives the friend test, headed by the mechanic name alone. If [app] has its own name for the thing, a branded currency, a named feature, add an optional **Title:** field naming it: the page then uses that name as the block's own heading and shows the mechanic's name beneath it as the tag. The block itself still keys on the mechanic name regardless of any title, since that's what joins the block to its applied tag; never rename the block to the title. Open each block with **an implementation summary:** one sentence, under 25 words, naming what [app] specifically does with this mechanic. It is not a definition of the mechanic, it is what separates this app's version from every other app's: a reader scanning eight implementations of the same mechanic should be able to tell them apart from this line alone. After the summary, write the block in four parts:
>
>    **How it works.** What [app] does with this mechanic, told as it happens to the player: what they do, what the app does back, in the order it happens.
>
>    **Illustration brief.** Not displayed on the page: a note for whoever draws the illustration, not copy. The one idea the illustration should show, and the facts it may draw on to show it. Only what the app does. Never an absence: if the app never shows something, that's not material for an illustration either.
>
>    **What stands out.** One or two things a product person would take away. Not everything interesting about the mechanic, the one or two things that matter most.
>
>    **Building something like this.** Four short fields, each a phrase or a short sentence:
>
>    - *Trigger:* what starts this, for the player.
>    - *What it needs:* the state or resource that already has to exist for this to run.
>    - *How it connects:* which other mechanics on this page it depends on or feeds, named directly.
>    - *Worth noticing:* what this app's own choice here was, specific to what [app] actually did, not general design advice. State the choice, never what it achieves or why [app] made it: "Strava grades its medals gold, silver and bronze" is the choice; "so an ordinary activity feels exceptional" is the effect, and it doesn't belong here. That distinction recurs on every app, so hold to it the same way each time.
>
>    End each block with a note naming which screenshots it needs.
> 5. Section cards. Nine one-liners, one per section, in voice. Empty sections appear as such and are not linked.
>
> Target around 1,500 words for the summary page, adjusted for however many mechanics survive the friend test.
>
> **Then deliver these section pages in full:** [section], [section]. Each opens with a lead-in of two or three sentences, then every surviving observation in that section, rewritten in voice.
>
> An entry that's only about what we didn't see, nothing else, is dropped, not rewritten. Its observation ID is not reused; screenshots and cross-file references still key on it.
>
> **Writing rules.** `sources/voice-guide.md` governs first. These are additional, specific to turning an analysis into this page structure:
>
> Never describe what the page or the reader will encounter. No "the block below gathers", no "what follows", no "each section covers". If a sentence is about the document rather than about the app, it does not belong.
>
> Never explain why an observation belongs in the write-up. Cut "which is worth noting", "worth stating", "worth flagging", "which is a design choice" and every variant that comments on the write-up's own inclusion decision rather than on the app. State the observation and stop.
>
> An absence earns a place only where it changes what a user can do or decide: a cost never named before a purchase, a reward never stated, an outcome the app describes but never shows. A rule that simply doesn't specify a threshold, a cadence, or a formula is not a finding on its own; neither is a missing screen, prompt, or message, cut those. The app's own silence about its own behaviour is a different, legitimate kind of fact, and it stays. A gap in what this analysis happened to cover is not a fact about the app at all. It goes in the coverage report, never on the page.
>
> Capitalize the first word of every sentence, including the word right after a labelled field's colon: "Trigger: The player...", never "Trigger: the player...". This has slipped before on whole apps at once, every continuation lowercase from the first block to the last, which is what happens when it is treated as a style rather than a rule.
>
> [app] is the subject of the sentence, not the screen. Write "[app] explains that purchases made with your debit card round up to the nearest dollar", not "A section headed X explains that purchases...".
>
> Do not quote the app's interface copy. Describe what the app says in your own words. The only exception is where the exact wording is itself the finding, meaning the app is framing, minimising, or making a specific claim, and paraphrasing would lose what makes it notable. Section headers, button labels, tab names and menu items are never quoted.
>
> Rewrite every observation title as a short plain label of two to four words. Not the analysis title. "Round-ups are introduced as a setup flow with reversibility stated up front" becomes "Setting up round-ups". "The product creates the user's first goal and gives it a target" becomes "[app] suggests your first goal".
>
> Remove all cross-references. No "Related:" lines anywhere.
>
> Leave out regulatory and interface furniture unless it changes what a user does: links to learn more, deposit agreements, disclosures, consent checkboxes, terms acknowledgements. A product person adds those themselves. Keep them only where the placement itself is the behavioural point, for example three consents carried by a single continue button.
>
> Section lead-ins orient, they never argue. Say what this part of the app covers. Judgement about what the app is doing belongs inside the mechanic blocks, in "what stands out", where the observations support it.
>
> No evidence tiers, no analysis vocabulary, no observation numbers. Contractions are fine.
>
> Numerals over spelled-out numbers except idiomatic uses. App and feature names spelled exactly as the app spells them. No percentages or statistics that are not in the analysis. No speculation about intent beyond what the analysis states.
>
> Every observation gets a decision. Rewrite it if it says something about the app; drop it if it's only about what we didn't see. Do not merge two observations into one or split one into two, and do not reorder them within a section. Never skip one without deciding which it is.
>
> Tell me the total word count, which applied tags got no block and why, and flag anything in the analysis you could not render faithfully. Draft the coverage report for this app in the same delivery: every held-back mechanic, what's missing for it, exactly what to capture on the next walk-through, and any other gap worth filling.

---

## Notes

Deliver in batches. The full record for a rich app runs past 10,000 words, so ask for the summary page plus two or three section pages at a time rather than everything at once.

Corrections made at this stage go directly into `sources/analyses/[app].md`. The record and the copy are always kept in sync in the same sitting, so the two never drift apart.

Once reviewed and approved, this stage's output becomes two files. The case study content, teaser through section pages, section cards included, goes into `sources/content/[app].md`, the file the site actually publishes from. `sources/analyses/[app].md` stays the record; it is never rewritten for publication. The coverage report goes into `sources/coverage/[app].md`, which nothing on the site renders.

This file exists in two copies: canonical at `/library/prompts/stage2-website-content.md`, mirrored in the repo at `sources/prompts/stage2-website-content.md`. When one is amended, the other is amended in the same sitting.
