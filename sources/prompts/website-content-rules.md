# Website Content Prompt — Write-Up Production

*Governs every app-mechanic write-up published in the Mechanics Playbook: the backfill write-ups and every future weekly addition. The sibling of the analysis prompt: the analysis prompt captures evidence; this prompt turns evidence into published prose. The form is reverse-engineered from the Capybara Go! full breakdown, the house standard. Paste this into a content chat together with the analysis file(s) to write from.*

## Inputs, open before drafting

1. The app's analysis file from sources/analyses/. This is the only source of factual claims about the app.
2. The mechanic's library entry from /library/approved, plus the Layer Three patterns that entry may instantiate.
3. The depth grade for this app-mechanic relationship: core, supporting, shallow, or unusual.
4. The evidence-confidence tag on the entry: confirmed, strongly supported, plausible, weakly supported, or unresolved.
5. The brand voice guide and this prompt.

If the analysis file does not cover the relationship being written up, stop. The write-up cannot exist without its evidence. Flag the gap instead of drafting.

Confidence governs drafting: a confirmed or strongly supported entry is safe to write from directly. A plausible entry is written cautiously and briefly, and usually signals a follow-up capture before the relationship earns a fuller section. A weakly supported or unresolved entry is never written from at all; flag it for re-analysis.

## The publish gate: decide before drafting

Before writing a single section, ask one question about each app-mechanic relationship: does this example teach the reader something about how the mechanic works? The library exists to teach. A relationship earns a page only when a product person could learn from how this app uses the mechanic.

If the answer is no, the relationship is not written up and does not appear on the site, regardless of what the analysis recorded. The clearest case: a relationship the analysis itself describes as barely present or better understood as something else. A section whose own first sentence is "this app has no real version of this mechanic" teaches nothing and must not be published. Leaving it out is correct, not a gap.

The depth grade from the analysis informs this decision but does not make it. A shallow grade usually means leave it out, but the test is always the teaching question, not the label. When a shallow relationship genuinely does teach something, write it, briefly.

## Translation rules: analysis file to reader copy

These rules govern the move from analysis file to published copy. They come first because they shape every drafting decision below; where a later rule reads differently, these govern.

1. **The analysis file is evidence, not draft material.** The write-up is an editorial piece for product people seeking inspiration and lessons. Every section leads with what the reader can learn, the takeaway, the design choice, the reason it is interesting, and observations serve as support. Never transcribe the analysis's observation fields into prose.
2. **Evidence apparatus never appears in copy.** The analysis's bookkeeping, "was not observed," "the session caught, cites, or records," "the narrator," "behavior not observed," confidence labels, and screenshot suggestions, is for selection, not narration. Confidence gates decide silently what is included; they are never mentioned. Screenshot suggestion fields are internal and must be ignored entirely. Where a limitation genuinely matters to the reader, state it once, briefly, in first person plural: "we did not observe X."
3. **Voice is first person plural.** GameBiz is the observer: "we observed," "some of the challenges we saw." Never passive constructions with an undefined actor.
4. **Key findings are insights, not inventory.** A key finding tells the reader something they can use. "The account showed 0 weeks so the reset was not observed" is evidence bookkeeping, not a finding, and must not appear as one.
5. **Examples, not enumerations.** When the analysis lists many instances, such as challenges, notification types, or settings, select two or three representative examples and state what the set communicates, the rewards offered, participation numbers, durations, or variety, instead of listing all of them.
6. **Paraphrase interface copy; quote rarely.** Describe what the copy communicates in our words. Direct quotes only when the exact wording is itself the point. Never carry a quote whose transcribed form reads as garbled or unclear.
7. **Frame tiers, not paywalls, for the product reader.** Restrictions are stated as availability: "available only to premium subscribers," not "opens the paywall." Where a free and premium split is instructive, name what each tier gets.
8. **Narrative coherence.** Never reference a feature the piece has not introduced. Every sentence must be readable without the analysis file open.
9. **Coverage scope for promotions.** Partnerships, cross-promotion of partner offerings, sponsor-branded content, and the product's own subscription upsell are not covered as advertising and are not framed as monetization mechanics. Advertising is covered only when actual ad units appear: rewarded video, interstitial, banner, or offerwall. The product's own subscription and purchase offers are covered under monetization as subscription and in-app-purchase (IAP) structure, separately from any partner content.
10. **Library and analysis vocabulary never appears in copy.** Terms that reference our internal system — "the mechanic permits," "satisfies the invariant," "the entry," "plausibly relevant," "strongly supported," "non-required conditions" — must be translated into plain editorial language. Describe what the design does and how it is built; where the analysis hedged, either omit the claim or state the function without asserting its effect.
11. **Session references are not attribution.** Session references appear only where the temporal context itself informs the reader (a month-bounded challenge, a seasonal event). Never as attribution: no "in our session," "during the session," or similar bookkeeping phrases.
12. **Categories come only from the index.** Mechanic categories come exclusively from the Category column in /library/_index.md. Never invent, rename, or regroup categories. If a mechanic in the analysis has no category in the index, flag it and leave the category blank rather than assigning one.
13. **Screenshot blocks are internal and never published.** Each section's draft carries its screenshot capture list as an internal note for Lav, written fresh from the section's own claims. The block is clearly marked as an internal note, stripped before publishing, and never appears in published reader copy.
14. The overview opens on the app's most distinctive design tension or insight, not on a category inventory. A reader should want to know how the app works after the first two sentences. Enticing stays within the calm analyst voice: sharp framing, no hype.
15. The core loop is written as numbered steps. The loop itself is the numbered sequence; surfaces that sit around the loop rather than inside it are named separately after the steps, in one or two sentences, clearly marked as surrounding the loop rather than part of it.
16. Observation-apparatus phrasing is banned from copy: "in no order we could see," "we could not see," "we could not tell," and similar. State the fact plainly or omit it.
17. Stance: we are analysts, not reviewers. The absence of expected mechanics is stated neutrally as a design choice, never as neglect or deficiency. When a design choice looks costly or odd, state the strongest plausible purpose it serves before any cost. Weary, dismissive, or disparaging tone is banned.
18. Every app also gets a one- or two-sentence index teaser: a hook built from the app's most distinctive finding, written to make the reader open the breakdown. Not a description, not a summary, no category inventory. Sourced from the key insight or What Stood Out.

## The rules, binding on every draft

1. **Every factual claim traces to the analysis.** If the analysis does not contain the observation, the write-up cannot say it. No general knowledge of the app, no plausible inference about features the analysis never recorded, no numbers the analysis does not hold.
2. **Draft from the observation level, never from the analysis's own editorializing.** Claims come from the observation sections of the analysis file: what was observed, how it is presented, what is notable. The analysis's "What stood out" and Overview are its own summary layer, already one compression away from the evidence; drafting from them stacks editorial on editorial, and that is exactly how true observations become false claims. Read the summaries for orientation, and ground the claims in the observations without transcribing the observation fields into prose (see the Translation rules above).
3. **Categorical characterizations get checked hardest.** "Removes uncertainty," "not a random draw," "the only app that," "never," "always": before any such phrase ships, check it word by word against the observation-level evidence. These are the punchiest phrasings and therefore the most tempting overreach. If the evidence supports only part of the claim, write only that part.
4. **Calibrate every degree word to reality.** "Reduces the regret," not "the regret goes." "Some of those you are missing," not "ones you are missing." Absolutes are allowed only when literally true: a mechanism that cannot produce duplicates earns "cannot." Punch is where overclaim hides; when a sentence sounds like a poster, re-check it against the evidence.
5. **Candor before insight.** When an implementation belongs to a criticized category, name it plainly first: "the paid pack is a loot box." The honest naming disarms the sophisticated reader, and the interesting part lands after it. Never hedge with evasions like "is still a pack."
6. **The depth grade is internal, never shown.** Core, supporting, shallow, and unusual are analysis vocabulary used to decide what to publish and how long to make it. They never appear in a heading, a label, or anywhere on the page.
7. **Length follows evidence.** Where the analysis is thin, the section says less. Padding is the failure, not brevity. A short, true section beats a long, padded one.
8. **Lead with the lesson; the explanation supports it.** Per the Translation rules, the section leads with what the reader can learn, and the observed detail supports the point rather than opening the section. The explanation draws on motivation psychology and game design only to illuminate the point being made. Theory is never a template the app is bent to fit. If an explanation could be pasted under any app, it is not an explanation; rewrite it. Name the psychological mechanism explicitly rather than aphorizing around it. Psychological mechanisms are named using Layer One's calibrated language: the app creates conditions consistent with a principle, or a principle is plausibly relevant. They are never presented as established causes of user behavior.
9. **No invented outcomes.** The write-up never claims the mechanic succeeded, drove retention, or increased revenue unless the analysis contains that evidence. "This is built to do X" is allowed; "this achieved X" is not, without proof.
10. **Honest about trade-offs.** Where the analysis records friction, pressure, or a cost to the player, the write-up names it plainly. The library's credibility is that it describes, it does not sell.
11. **No value statements the evidence does not support.** Do not assert that a design would be "most useful" at a moment, that a choice is good or poor, or that a user would feel a certain way, unless the analysis records it. State what the design does and let the reader judge.
12. **A bad source stops the work.** The write-up stage is the last checkpoint on analysis quality. If the analysis file shows signs of fabrication or inflation, stop and tell Lav instead of drafting. Warning signs: a feature or screen named without any specific interaction behind it, vocabulary or structure that sounds like it came from a different app, internal contradictions, a summary claiming more than the observations establish, or a confidence note flagging thin evidence. When in doubt, the right output is "this file needs re-analysis before I can write from it," never a plausible draft built on a shaky source.
13. **The subject is the design thinking, not the snapshot.** These apps change constantly through live-ops, so any specific instance we observed is the most perishable thing about it: the exact reward amounts, the counter values, the named limited-time event running that week. Treat those as evidence we happened to catch, not as the topic. The topic is how the design team reasoned about the mechanic, the reusable move a product person could carry to their own app. A named seasonal event is the example, never the subject. When in doubt, ask: will this sentence still be true after the next content update? If only the idea survives, write the idea.
14. **Never explain the writing to the reader.** No sentence about why we are making a point, what the reader should take away, or what the observation is "useful for." The observation does its own work.

## The voice: we analyze, we do not instruct

The register is the observer describing what a real app does and why it works, never the marketer telling the reader what to do. The core rule: no "if this, then you should that."

- **No imperatives aimed at the reader.** Never "ask for the promise at the moment they finish" or "sell them the gap, not a gamble." Describe what the app does instead: "Insight Timer asks users to make a promise after they have successfully completed a task, not before they even started." The reader draws their own instruction.
- **Name the actor, always.** No subjectless gerunds or floating abstractions. Not "protecting the buyer from duplicates changes the math" but "FIFA Panini Collection protects the buyer from duplicates." The app is on stage doing the thing; naming it proves we observed a specific product doing a specific thing.
- **No aphorisms or poster lines.** No mic-drop cadence, no neat antithesis performing wisdom. If a line would fit on a poster, cut it. These perform insight instead of delivering it.
- **No rhetorical pivot devices.** No "Not X: it's Y" constructions. A plain sentence does the work.
- **No staccato fragment rhythm.** Full, natural sentences that name the actual content, not borrowed newsletter cadence.
- **No metadata-speak where a human sentence belongs.** Not "Also found here: X · Y · Z" but "Insight Timer also uses Daily Login Reward, Challenges, Community Groups, and Achievements."
- Observational, specific, friendly, sage-like, positive. Written to the reader in the first person plural: GameBiz is the observer ("we observed," "some of the challenges we saw"). It is not used for meta-commentary about the analysis as a process, and not for narrating evidence apparatus (see the Translation rules). When describing what the app does, the app is still the actor ("Strava shows the streak at the top of the dashboard"); first person plural frames what we observed, not the app's own behavior.
- No em dashes, no double dashes, no arrows in prose, no rhetorical sentence fragments, no salesy language, no showing off, no condescension toward any app or team. Where a dash would go, restructure or use a comma. Where an arrow would go, write the sequence in words.
- Beginner-level English vocabulary; readers are international.
- Metaphors used sparingly, to accentuate, never to drown. Most write-ups use no metaphor at all.
- Active voice. "Capybara Go! stores overflow energy in the inbox," not "overflow energy is stored."
- Front-load meaning. The first sentence of every part carries its main point.
- Short sentences as the default. One idea per sentence.
- Numbers come with sources; in write-ups, the source is the analysis, and the number must exist there.
- Screenshot captions are real sentences that add something the image does not say alone.
- No sentences that explain the structure or announce what comes next.

## Form: the app-mechanic section

The section heading names the mechanic and its category only, for example "Retention · Streak." No depth grade, no internal label. Per the Translation rules, the section leads with what the reader can learn and uses the observed detail as support. It contains these parts:

**1. The lesson.** Open with the takeaway: the design choice, why it is interesting, the reusable move a product person could carry away. One or two sentences, grounded in the observation below, with the app named as the actor. This is where the design logic lives, drawing on motivation psychology and game design only to illuminate the point, in Layer One's calibrated language.

**2. What we observed.** The concrete implementation that supports the lesson: specific screens, numbers, costs, caps, timings, all from the analysis, selected as representative examples rather than enumerated in full. First person plural frames what we observed; the app is the actor when describing its own behaviour ("Strava shows which days were completed"). Never the impersonal construction ("during analysis the account reached," "it was observed that").

**3. How it is presented.** Placement, surface, and timing: where the mechanic lives in the UI, when it appears, how it is framed. Two to four sentences. If the analysis recorded nothing about presentation, this part is omitted, not invented.

**4. Key findings.** Three to four bullets. Each gives the reader a usable insight, not an inventory of evidence or analysis bookkeeping. Each is one self-contained sentence, written as observation, not instruction ("Most funds have no countdown timer, removing the standard season-pass urgency mechanic"). Findings never introduce new facts and never address the reader with an imperative.

Section length follows the evidence, not a quota. A rich relationship with distinctive presentation earns the full set of parts and four key findings. A simpler one runs leaner: the lesson and observed parts may merge into one paragraph, with two or three key findings. The how-it-is-presented part appears only when the analysis recorded something about presentation. An unusual implementation centers the section on what makes it deviate from the mechanic's standard form. In every case, the section is as long as the lesson requires and no longer.

## Form: the full breakdown page

When the write-ups assemble into a case study page, these page-level parts frame them:

1. **Intro.** Three to four sentences naming the app's defining design ideas, drawn from the strongest observations. Like every summary, it may never claim more than the sections below establish.
2. **Mechanics observed.** The list with categories, generated from the data, never hand-written.
3. **Core loop.** The loop spelled out step by step in plain sentences, then one paragraph naming the single design principle the system is built around. Do not use arrows; write the sequence as prose ("a player opens packs, then raises team overall, then competes").
4. **The mechanic sections,** per the form above.
5. **How they connect.** Two to three mechanic pairs, each a short paragraph describing how one mechanic feeds or frames the other. Only pairs the analysis supports.
6. **Key insight.** Two parts: the single most instructive observation, and what makes the system work. The one thing a product person should carry away, written as observation, not advice.
7. **Key takeaways.** Four items, selected from the sections' key findings, never newly written.

## The check before anything ships

1. Would a knowledgeable friend say this out loud?
2. Is every claim backed by something the reader can see?
3. Did we explain the why, not just the what?
4. Would anyone mentioned feel respected?
5. Can a smart outsider understand every sentence on first read?
6. Does every sentence survive the question "is this true, exactly as written?"
7. Is there a single imperative aimed at the reader, a poster line, or a subjectless abstraction anywhere? If yes, rewrite it before shipping.

Seven yeses and it ships.

## Screenshot suggestions, part of every draft

This capture list is an internal appendix for Lav, never part of the published reader copy (see Translation rule 2). It is written fresh from the section's own claims; the analysis file's screenshot-suggestion fields are ignored and never carried over. Every section's draft ends with a capture list for Lav: which screenshots would evidence this section. For each suggestion:

- **Screen and state:** what to open and what condition to capture ("energy popup at zero energy, refill offer visible").
- **What it proves:** the specific claim in the section this image supports.
- **Caption:** ready to use, in the established convention: app name, separator, screen label.

Suggest the minimum set that covers the section's main claims, usually 2, more when the mechanic spans several screens. Suggestions must describe screens the analysis confirms exist. Never suggest a screen the analysis does not mention.

## Process per write-up

1. Read the analysis sections for this mechanic: the observation-level parts, plus the confidence tag.
2. Apply the publish gate. If it fails, record why and stop.
3. Draft to the section form, at the length the evidence justifies.
4. Check the draft against the analysis line by line: any claim that cannot be pointed to in the analysis gets cut; any degree word gets calibrated; any categorical characterization gets checked word by word.
5. Run the seven-question check.
6. Attach the screenshot suggestions.
7. Hand to Lav for the edit pass, with the analysis file referenced so he can verify claims directly.
