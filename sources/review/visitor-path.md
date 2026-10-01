# Visitor path: copy sweep draft

Draft for review. Nothing here has been written to a content file, `site-copy.ts` or a component. Written to `sources/voice-guide.md` as it stands, including the 1 October rules.

How to read it. Each item gives the current text, then the proposed text. A reason follows only where the change is not obvious. "Unchanged" marks what I would leave alone. Where copy comes from somewhere other than the page's own file (an app's teaser, a mechanic's definition, a system tagline) I say where, so you know which source file a change would land in.

Two decisions the rules did not settle, which run through every page below:

1. **The page-title separator.** Every page `<title>` ends in an em dash and the site name ("Case studies — Appservatory", "Streak — mechanic — Appservatory"). The no-em-dash rule reaches these. I propose a pipe: "Case studies | Appservatory". One change in `Base.astro`'s caller pattern plus each page's title string. I have listed the proposed titles per page.
2. **"User" and "users" in library copy.** The rule is about how we address the reader. Mechanic definitions and system lines describe other people's apps, so "users" is not the reader. I still replaced it with "players" or "people" wherever a plain word fits, because the voice guide says call the player "you" and "the user" keeps drifting back in. Where I kept "users" it is inside a name the library owns.

---

## 1. Homepage

### 1.1 Page title and description

Current title: "Appservatory — documented breakdowns of real apps, mechanic by mechanic"
Proposed title: "Appservatory | Documented breakdowns of real apps, mechanic by mechanic"

Current description: "A library of the mechanics behind the best apps and games: what they are, why they work, and how real apps use them. Updated weekly."
Proposed description: "A library of the mechanics behind real apps and games: what each one is, the psychology behind it, and how real apps use it. Updated weekly."
Reason: "the best apps" and "why they work" say whether the mechanics work. The mechanic pages do carry the psychology, so that is the fact kept.

### 1.2 Hero

Eyebrow. Current: "Documented breakdowns of real apps". Unchanged.

Headline. Current: "Power up your app with proven game mechanics"
Proposed: "Game mechanics, taken apart in real apps"
Reason: opens with a command, and "proven" says they work.

Sub. Current: "A library of how real apps build engagement, mechanic by mechanic: what each one does, how it's presented, and how it fits with the mechanics around it." Unchanged.

Buttons. Current: "Subscribe" and "Explore case studies". Unchanged.

Slider. Current card text: the mechanic's name as a tag, then "How {app} uses {mechanic}" (five cards today: Strava Leaderboards, FIFA Panini Collection Set Collection, Fortune City Personal Data Reflection, Insight Timer Streak, Canva Achievements). Unchanged.
Slider label for screen readers. Current: "Mechanics from the library". Unchanged.

Static hero caption (shown only if fewer than three slider cards qualify). Current: the app name, a dot, then the first mechanic block's "Screenshots needed" note, for Strava: "Strava · the profile completion badge and its photo-step explanation; the subscription pop-up and contact-sync screen that follow finishing that step."
Proposed: "Strava" alone, or a one-line caption written for the image.
Reason: that note is a brief to whoever captures screenshots, not copy. See "Looked wrong" in the report.

### 1.3 What's inside the library

Heading. Current: "What's inside the library". Unchanged.

Card 1. Current: "Case studies": "Full breakdowns of how real apps build engagement, mechanic by mechanic." Link: "Browse case studies". Unchanged.

Card 2. Current: "Systems": "How mechanics combine into the loops that keep users coming back." Link: "Explore systems".
Proposed: "How mechanics combine into the loops that keep people coming back." Link unchanged.

Card 3. Current: "Cheatsheets": "Practical implementation guides your team can build straight from." Link: "Open cheatsheets". Unchanged.

### 1.4 Free case study spotlight

Eyebrow. Current: "Free case study". Unchanged.

Heading. Current: "See exactly what a full breakdown looks like"
Proposed: "A full breakdown, open to everyone"
Reason: command opener, and "exactly" oversells.

Badges and meta. Current: "Free", the category tag, the app name. Unchanged.

Body. Current: Strava's approved intro, pulled from `sources/content/strava.md`. Unchanged here. It changes only if that file does.

Button. Current: "Read the Strava breakdown". Unchanged.

### 1.5 Featured mechanics

Heading. Current: "Start with the mechanics"
Proposed: "Mechanics to begin with"
Reason: command opener.

Aside. Current: "Each mechanic comes with the psychology behind it, the users it fits, and what your app needs in place to use it well."
Proposed: "Each mechanic page covers the psychology behind it, the players it suits, and what your app needs in place before you use it."

Button. Current: "Browse all mechanics". Unchanged.

Lock label on two cards. Current: "In the full library". Unchanged here, but see "Looked wrong" in the report: the two cards that carry it have no page for anyone.

Card definitions (each is the mechanic's own tagline, so the change lands in `site/src/content/mechanics/*.json` via its source):

- Energy / Lives. Current: "A system that limits how many attempts or sessions a user can have within a given time window." Proposed: "A system that limits how many attempts or sessions a player gets within a set time window."
- Clan / Guild. Current: "Structured cooperative groups with internal roles, shared goals, contribution tracking, and collective rewards." Unchanged.
- Season Pass / Battle Pass. Current: "A time-limited reward track with free and premium tiers, where completing in-app actions advances the user along a progression of rewards." Proposed: "A time-limited reward track with free and premium tiers, where completing in-app actions moves a player along a series of rewards."
- Streak. Current: "A counter that increments each time a user completes a defined action within a set time window, typically once per day." Proposed: "A counter that goes up each time someone completes a defined action within a set time window, usually once a day."
- Leaderboards. Current: "An ordered list of two or more identified users or groups, ranked together against a shared performance metric and visible as a set." Proposed: "An ordered list of two or more named players or groups, ranked together on a shared performance measure and visible as a set."
  Reason: "identified users" is analysis vocabulary for named players; "metric" and "as a set" are the plain-word candidates.

### 1.6 System showcase

Eyebrow. Current: "This week's system map". Unchanged.

Heading. Current: "How the Calm system holds together". Unchanged.

Badge. Current: "Free". Unchanged.

Body. Current (Calm's system tagline, which lives in `data.js`, not in `calm.md`): "A wellness app where a free check-in suite is what actually moves the streak and stats, while nearly everything else waits behind a subscription."
Proposed: "Calm is a wellness app where the free check-ins are what move your streak and stats, while nearly everything else waits behind a subscription."
Reason: "actually" and the sentence with no subject; the app is the subject.

Button. Current: "Explore the Calm map". Unchanged.

### 1.7 Work with us

Eyebrow and heading. Current: "Work with us" and "We find the mechanics that fit your app". Unchanged.

Body. Current: "We study the features you already ship, your users, and your category, then map where engagement is leaking and which mechanics would take root in your product. You walk away with three things: a map of what your app is already doing, a comparison of what your category relies on and leaves untapped, and a prioritized roadmap of the mechanics worth building, in order, each with what it asks of your product and why it earns its place."
Proposed: "We study the features you already ship, your players and your category, then map where engagement is leaking and which mechanics would take root in your product. You get three things: a map of what your app already does, a comparison of what your category relies on and what it leaves untapped, and a prioritized roadmap of the mechanics worth building, in order, each with what it asks of your product and why it earns its place."
Reason: "your users" to "your players" matches the rest of the site; "walk away with" is an idiom with no job.

Button. Current: "Book a discovery call". Unchanged.

Mock-up card. Current: "Category comparison", "Fitness · your app", and five rows: "Daily streaks Common", "Milestone rewards Common", "Social challenges Untapped", "Loss-framed nudges Try first", "Team leaderboards Try first". Unchanged. It is an illustration, not data, and nothing on the page says so. See the report.

### 1.8 Latest entries

Heading. Current: "Latest entries". Unchanged.

Rows. Current: "Wakeout case study, Aug 03, 2026" and "Insight Timer case study, Aug 03, 2026", both linking to the subscribe page. Unchanged, but see the report: the list is hand-written, two months old, and the newest case studies are not in it.

### 1.9 Newsletter block (every page)

Heading. Current: "Appservatory Newsletter". Unchanged.

Pitch (`NEWSLETTER_PITCH` in `site-copy.ts`, also in the exit popup). Current: "Each week we add three fresh breakdowns of how successful apps implement game mechanics. Get the most interesting mechanics from each, straight into your inbox."
Proposed: "Each week we add three breakdowns of how real apps use game mechanics. The newsletter sends you the mechanics from each, straight to your inbox."
Reason: "most interesting" announces interest; "successful" and "fresh" are extras; "implement" to "use" matches the rest of the site; "Get" opened with a command.

Form. Current: label "Email", placeholder "you@company.com", button "Sign up". Unchanged.

Consent (`NEWSLETTER_CONSENT`). Current: "I agree to receive occasional relevant emails from Appservatory about behavioral design and engagement mechanics." Unchanged (consent wording, leave to whoever owns the legal text).

### 1.10 Header and footer (every page)

Header menu. Current: "Library" with five entries: "Mechanics: The core building blocks, with the psychology behind each one." "Systems: How mechanics combine into the loops that keep users coming back." "Cheatsheets: Practical guides for putting mechanics into your product." "Shortcasts: Short audio breakdowns of one app at a time — up to ten minutes." "Glossary: Plain-language definitions for every term we use." Then "Case studies" and "Work with us", then the buttons "Log in" and "Subscribe".
Proposed changes:
- Systems: "How mechanics combine into the loops that keep people coming back."
- Shortcasts: "Short audio breakdowns of one app at a time, up to ten minutes each."
Everything else unchanged.

Footer description. Current: "We study how the best apps and games keep their players, mechanic by mechanic, documented for product teams to draw from."
Proposed: "We study how real apps and games keep their players, mechanic by mechanic, and document it for product teams to draw from."
Reason: "the best" says whether they work; "documented for" is a dangling phrase.

Footer columns. Current: Library (Mechanics, Apps, Systems, Cheatsheets, Shortcasts, Glossary), Practice (Work with us, Finance), Account (Subscribe, Log in), "Updated weekly", Privacy Policy, Terms of Use, Refund Policy, Cookie Preferences, the email address, the copyright line. Unchanged. One note: the footer says "Apps" where the header and the page say "Case studies".

### 1.11 Cookie banner and exit popup (appear conditionally)

Cookie banner. Current: "We use cookies for analytics (Google Analytics and Microsoft Clarity) to understand how the site is used. They are only set if you accept. See our Privacy Policy." Buttons "Reject" and "Accept". Unchanged.

Exit popup. Current: eyebrow "Before you go"; heading is the site tagline; body is the newsletter pitch (changed as above); error "Something went wrong — please try again."; success "You're on the list." and "We'll send the next batch of case studies your way."
Proposed error: "Something went wrong. Try again."
Everything else unchanged.

---

## 2. Case studies index

Source: `site/src/pages/case-studies/index.astro` and `CaseStudies.jsx`. The page has no filters; I looked, and the only filters on the site are on the mechanics library page. I have not drafted filters for this page.

### 2.1 Title and description

Current title: "Case studies — Appservatory". Proposed: "Case studies | Appservatory".

Current description: "Documented breakdowns of real apps, mechanic by mechanic." Unchanged.

### 2.2 Headings

Breadcrumb. Current: "Library / Case studies". Unchanged.
Eyebrow. Current: "The library". Unchanged.
Heading. Current: "Case studies". Unchanged.

### 2.3 Intro

Current: none. The component takes an intro line and the page never passes one.
Proposed: "Each case study takes one app apart: how it works as a whole, then every mechanic it uses, then every part of the experience from first launch to the notifications that bring you back."
Reason: it says what a case study is, using only what the pages contain (a system view, one block per mechanic, nine sections that run from first launch to return triggers). No claim about quality.

### 2.4 Count bar

Current: "{n} systems in the library" and "{n} free to read · updated weekly".
Proposed: "{n} case studies in the library" and "{n} free to read, updated weekly".
Reason: the heading says case studies and the count says systems; the middle dot is replaced by a comma only to keep one separator style, change it back if you like the dot.

### 2.5 Cards

Category tag. Current: the app's category in an outline tag. Unchanged.
Badge. Current: "Free" or "For subscribers". Unchanged.
Name and icon. Unchanged.

Description line. Current: the app's own teaser, from its content file. Not changed here. Calm's and Royal Match's change in Part 2 of this sweep; Strava's is approved. The other 26 teasers have not been through the voice pass.

Mechanic chips. Current: up to four mechanic names. Unchanged.

Footer line. Current: "{n} mechanics mapped" and "View case study" or "Subscribe to explore". Unchanged.

---

## 3. Subscribe page and paywall copy

Kept exactly, as asked: "$25/month", "billed $75 every 3 months", "$250/year", "Save 16%", "Choose a plan". The "Subscribe" button label on each plan is also unchanged.

### 3.1 Page title and description

Current title: "Subscribe — Appservatory". Proposed: "Subscribe | Appservatory".

Current description: "Documented breakdowns of real apps, mechanic by mechanic. One subscription unlocks every mechanic, system, and case study in the library."
Proposed: "Documented breakdowns of real apps, mechanic by mechanic. One subscription unlocks every mechanic, system and case study in the library."
Reason: the tagline has no period and the code adds one; I only removed the serial comma to match the rest of the site. Leave it if you prefer.

### 3.2 The offer

Eyebrow. Current: "Subscribe". Unchanged.
Heading. Current: "Weekly breakdowns of how real apps build engagement." Unchanged.

Plan cards. Unchanged, as above.

Included list. Current:
1. "Unlock all of the content."
2. "An in-depth case study every week, 52 a year."
3. "Access to all examples of mechanic application."
4. "Access to all systems across dozens of best-in-class apps."

Proposed:
1. "Every piece of content in the library."
2. "A new in-depth case study every week, 52 a year."
3. "Every example of how an app applies a mechanic."
4. "Every system map, across dozens of apps."

Reason: the first opens with a command; the last two are "access to" filler; "best-in-class" says the apps are the best.

### 3.3 The three value sections

Section 1. Kicker "Mechanics", heading "Every mechanic, broken down". Unchanged.
Current body: "Each game mechanic in the library is explained on its own: what it is, when it works, what it needs to run, and how real apps have used it. You get a reference your product team can pull from when deciding what to build, instead of guessing from memory of games you have played."
Proposed: "Each game mechanic in the library has its own page: what it is, when it works, what it needs to run, and how real apps have used it. Your product team can pull from it when deciding what to build, instead of going from memory of games you've played."

Section 2. Kicker "Systems".
Current heading: "See how mechanics fit together". Proposed: "How mechanics fit together". Reason: command opener.
Current body: "Mechanics rarely work alone. The library maps how they connect inside real apps, so you can see the full system a feature sits in, not just the feature on its own, and copy the structure rather than the surface."
Proposed: "Mechanics rarely work alone. The library maps how they connect inside real apps, so you see the whole system a feature sits in, not only the feature, and can copy the structure rather than what's on the screen."
Reason: "surface" is design jargon.

Section 3. Kicker "Case studies". Heading "A new teardown every week". Unchanged ("teardown" is the trade word readers will know).
Current body: "Each week we publish a close analysis of how a best-in-class app uses a mechanic, with the screens and the reasoning. Over a year that is fifty-two worked examples, building into a record of what actually ships and what actually works."
Proposed: "Each week we publish a close analysis of how one app uses its mechanics, with the screens and the reasoning behind them. Over a year that adds up to 52 worked examples, a record of what real apps actually ship."
Reason: "best-in-class" and "what actually works" say whether it works; "a mechanic" becomes "its mechanics" because a case study covers all of an app's mechanics; the numeral matches the list above.

### 3.4 Closing call

Heading. Current: "Every mechanic here comes from a product that actually built it. None of it is theory." Unchanged.
Button. Current: "Choose a plan". Unchanged, as asked.

### 3.5 Paywall paragraphs (`site-copy.ts`)

Eyebrow (`GATE_EYEBROW`). Current: "Subscribers only". Unchanged.

Headings (`GATE_HEADING`).
- Case study. Current: "Read the full {app} breakdown". Proposed: "The full {app} breakdown".
- System. Current: "Explore the {app} system map". Proposed: "The {app} system map".
Reason: command openers.

Body (`GATE_DETAIL`).
- Case study. Current: "The complete case study walks every observation behind each mechanic, with the system view and the full record of every section. Subscribe to unlock this and every other breakdown in the library."
  Proposed: "The complete case study covers every mechanic in detail, with the system view and the full record of every section. Subscribe to unlock this and every other breakdown in the library."
  Reason: "observation" is analysis vocabulary.
- System. Current: "The full system map draws every mechanic in the loop and the connections that carry the most weight, with the design logic behind each one. Subscribe to unlock this and every other system in the library." Unchanged.
- Section. Current: "This section is part of the full {app} breakdown. Subscribe to unlock it and every other section in the library." Unchanged.

Button labels. Current: "Access the library" (`ACCESS_LIBRARY_CTA`) and "Subscribe to explore" (`SUBSCRIBE_TO_EXPLORE_CTA`). Unchanged.

---

## 4. Mechanic page: Streak

Source: `site/src/content/mechanics/streak.json` (generated from the library) and the page template. The case-study examples at the bottom come from each app's own content file.

### 4.1 Title

Current: "Streak — mechanic — Appservatory". Proposed: "Streak | Mechanic | Appservatory".

### 4.2 Header

Breadcrumb. Current: "Home / Mechanics / Streak". Unchanged.
Number and tag. Current: "01" and "Retention". Unchanged.
Heading. Current: "Streak". Unchanged.

Definition. Current: "A counter that increments each time a user completes a defined action within a set time window, typically once per day."
Proposed: "A counter that goes up each time someone completes a defined action within a set time window, usually once a day."

Labels and chips. Current: "Best for: Achiever, Competitor". "Context: Activation, Retention". "Motivation drivers: Mastery, Ownership, Avoidance". Unchanged.

### 4.3 How it works

Heading. Current: kicker "How it works", title "Loss aversion". Unchanged.

Body. Current: "The streak counter resets to zero if the window is missed. Its power comes from what it accumulates over time: a number representing a visible, unbroken history of behaviour. The longer it runs, the more it is worth protecting. Loss aversion does the work here, users return not to gain a reward but to avoid losing what they have built."
Proposed: "If a window is missed, the counter goes back to zero. What it holds is a number: a visible, unbroken history of someone's behaviour. The longer it runs, the more it's worth protecting, and that is where loss aversion comes in. People come back to avoid losing what they've built, not to win a reward."
Reason: states the mechanism in order; drops "its power comes from" and "does the work", which say what it achieves. The loss-aversion explanation stays because the page's whole job is the psychology (see decision below).

Core principle. Current: "Loss aversion. The streak converts passive interest into active retention pressure once the user has returned enough times to feel ownership over the number."
Proposed: "Loss aversion. Once someone has come back enough times to feel the number is theirs, the streak turns passing interest into a reason to keep returning."

Watch out for. Current: "Streaks work best after day 3–7 when the user feels the number is worth protecting. Before that, frame them positively: show what maintaining the streak unlocks, not what breaking it costs."
Proposed: "A streak starts to carry weight around day 3 to 7, once the number feels worth protecting. Before that, show what keeping the streak unlocks, not what breaking it costs."
Reason: "work best" says whether it works. The advice stays, since the box is headed "Watch out for".

### 4.4 Structural variants

Heading. Current: kicker "Structural variants", title "Four ways to build it". Unchanged.
Variants. Current: "Hard Streak, resets to zero on miss". "Soft Streak, bonus without reset penalty". "Streak Shield, consumable that absorbs one missed day". "Goal-based Streak, tied to XP or time target". Unchanged.

### 4.5 Lifecycle

Label. Current: "Lifecycle placement". Unchanged.
Body. Current: "High value days 0–30. Identity marker from day 30+."
Proposed: "Highest value in days 0 to 30. From day 30 on, an identity marker."

### 4.6 Seen in the wild

Heading. Current: kicker "Case studies · 12", title "Seen in the wild". Unchanged.

Cards. Current: each app's name, category, and one of two states. Calm shows its headline and a "what is worth noting" line, with two screenshot placeholders and "View full case study". Eleven others show "For subscribers" and "Subscribe to explore".
Proposed: the Calm card takes its headline and "What stands out" from the new Calm Streak block in `sources/review/calm.md`, so it reads: "Calm's streak sits in your profile and moves only when you complete a check-in, not when you play content." followed by the stands-out line. The payments branch already changes the other eleven to a name, headline and a link to the case study, so nothing is drafted for them here.

### 4.7 Sidebar

"Often paired with": "Daily Login Rewards", "Milestones", "Season Pass / Battle Pass". Unchanged.
"Player types": "Achiever", "Competitor". Unchanged.
"Seen in": the twelve apps. Unchanged.

### 4.8 One decision for you

The library's mechanic pages explain psychology ("loss aversion does the work"). The voice guide's rule against saying what a mechanic achieves was written for the app case studies, where the facts are what an app did. For a mechanic page I kept the psychology, because the site promises it ("the psychology behind each one"), and removed only the claims about whether it works. If you want the stricter reading, the "How it works" body and the core principle would each shrink to the first two sentences.
