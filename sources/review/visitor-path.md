# Visitor path: copy sweep draft, second pass

Draft for review. Nothing here has been written to a content file, `site-copy.ts` or a component. Redrafted under the updated `sources/voice-guide.md` (the lens, narrative not inventory, respect the reader, headlines and calls to action, the new word rules) and your decisions from the first review.

How to read it. Each item gives the current text, then the proposed text. A reason follows only where the change is not obvious. "Unchanged" marks what I would leave alone. Where copy comes from somewhere other than the page's own file (an app's teaser, a mechanic's definition, a system tagline) I say where, so you know which source file a change would land in.

Rules applied throughout, so the items below don't repeat them: "users" in all site copy; no vertical bars in titles (a colon where a separator is needed); no "updated weekly" anywhere; titles, headlines and buttons say what the reader gets or can do; nothing does the maths for the reader; no claim that a mechanic or an app works.

---

## 1. Homepage

### 1.1 Page title and description

Current title: "Appservatory — documented breakdowns of real apps, mechanic by mechanic"
Proposed title: "Appservatory: See how real apps implement game mechanics"

Current description: "A library of the mechanics behind the best apps and games: what they are, why they work, and how real apps use them. Updated weekly."
Proposed description: "A library of the mechanics behind real apps and games: what each one is, the psychology behind it, and how real apps use it."
Reason: "the best" and "why they work" claim success; the mechanic pages do carry the psychology, so that is the fact kept. "Updated weekly" is removed as decided.

### 1.2 Hero

Eyebrow. Current: "Documented breakdowns of real apps". Unchanged.

Headline. Current: "Power up your app with proven game mechanics". Three options, each saying what the reader will see and can do with it:

1. "See how real apps implement game mechanics, then power up your own"
2. "Take apart the game mechanics in real apps and power up your own"
3. "Power up your app with the game mechanics inside real apps"

My pick is 1. It names the two things you described in the order they happen, and it is the only one that doesn't reuse the old command opener. Option 3 is the smallest change from today's line: it drops "proven" and puts the apps in.

Sub. Current: "A library of how real apps build engagement, mechanic by mechanic: what each one does, how it's presented, and how it fits with the mechanics around it." Unchanged.

Buttons. Current: "Subscribe" and "Explore case studies". Unchanged.

Slider. Current card text: the mechanic's name as a tag, then "How {app} uses {mechanic}" (five cards today: Strava Leaderboards, FIFA Panini Collection Set Collection, Fortune City Personal Data Reflection, Insight Timer Streak, Canva Achievements). Unchanged. Screen-reader label "Mechanics from the library": unchanged.

Static hero caption (shown only if fewer than three slider cards qualify). Current: the app name, a dot, then the first mechanic block's "Screenshots needed" note, for Strava: "Strava · the profile completion badge and its photo-step explanation; the subscription pop-up and contact-sync screen that follow finishing that step."
Proposed: "Strava" alone, or a one-line caption written for the image.
Reason: that note is a brief to whoever captures screenshots, not copy. See the report.

### 1.3 What's inside the library

Heading. Current: "What's inside the library". Unchanged.

Card 1. Current: "Case studies": "Full breakdowns of how real apps build engagement, mechanic by mechanic." Link: "Browse case studies". Unchanged.

Card 2. Current: "Systems": "How mechanics combine into the loops that keep users coming back." Link: "Explore systems".
Proposed: "How mechanics combine into systems that give users a reason to come back." Link unchanged.
Reason: "keep users coming back" is out under the lens; the new line says what the loops are built to give.

Card 3. Current: "Cheatsheets": "Practical implementation guides your team can build straight from." Link: "Open cheatsheets". Unchanged.

### 1.4 Free case study spotlight

Eyebrow. Current: "Free case study". Unchanged.

Heading. Current: "See exactly what a full breakdown looks like". Kept, as decided. It is the guide's own example.

Badges and meta. Current: "Free", the category tag, the app name. Unchanged.

Body. Current: Strava's approved intro, pulled from `sources/content/strava.md`. Not drafted here. It changes when `strava.md` does: the redraft is in `sources/review/strava.md`, and its intro would replace this body.

Button. Current: "Read the Strava breakdown". Unchanged.

### 1.5 Featured mechanics

Heading. Current: "Start with the mechanics".
Proposed: "Explore mechanics on their own" (yours). Shorter alternative: "Explore mechanics one by one".
Reason for preferring yours: it says how this block differs from the case studies above it. The alternative is shorter and makes the same promise.

Aside. Current: "Each mechanic comes with the psychology behind it, the users it fits, and what your app needs in place to use it well." Kept, as decided.

Button. Current: "Browse all mechanics". Unchanged.

Lock label on two cards. Current: "In the full library". Unchanged here, but see the report: the two cards that carry it have no page for anyone.

Card definitions (each is the mechanic's own tagline, so the change lands in `site/src/content/mechanics/*.json` via its source):

- Energy / Lives. Current: "A system that limits how many attempts or sessions a user can have within a given time window." Proposed: "A system that limits how many attempts or sessions a user gets within a set time window."
- Clan / Guild. Current: "Structured cooperative groups with internal roles, shared goals, contribution tracking, and collective rewards." Unchanged.
- Season Pass / Battle Pass. Current: "A time-limited reward track with free and premium tiers, where completing in-app actions advances the user along a progression of rewards." Proposed: "A time-limited reward track with free and premium tiers, where completing in-app actions moves a user along a series of rewards."
- Streak. Current: "A counter that increments each time a user completes a defined action within a set time window, typically once per day." Proposed: "A counter that goes up each time a user completes a defined action within a set time window, usually once a day."
- Leaderboards. Current: "An ordered list of two or more identified users or groups, ranked together against a shared performance metric and visible as a set." Proposed: "An ordered list of two or more named users or groups, ranked together on a shared performance measure and visible as a set."
  Reason: "identified" is analysis vocabulary for named; "metric" and "against" have plainer words.

### 1.6 System showcase

Eyebrow. Current: "This week's system map". Unchanged.
Heading. Current: "How the Calm system holds together". Unchanged.
Badge. Current: "Free". Unchanged.

Body. Current (Calm's system tagline, which lives in `data.js`, not in `calm.md`): "A wellness app where a free check-in suite is what actually moves the streak and stats, while nearly everything else waits behind a subscription."
Approved as written: "Calm is a wellness app where the free check-ins are what move your streak and stats, while nearly everything else waits behind a subscription."

Button. Current: "Explore the Calm map". Unchanged.

### 1.7 Work with us

Eyebrow and heading. Current: "Work with us" and "We find the mechanics that fit your app". Unchanged.

Body. Current: "We study the features you already ship, your users, and your category, then map where engagement is leaking and which mechanics would take root in your product. You walk away with three things: a map of what your app is already doing, a comparison of what your category relies on and leaves untapped, and a prioritized roadmap of the mechanics worth building, in order, each with what it asks of your product and why it earns its place."
Approved, with "users": "We study the features you already ship, your users and your category, then map where engagement is leaking and which mechanics would take root in your product. You get three things: a map of what your app already does, a comparison of what your category relies on and what it leaves untapped, and a prioritized roadmap of the mechanics worth building, in order, each with what it asks of your product and why it earns its place."

Button. Current: "Book a discovery call". Unchanged.

Mock-up card. Current: "Category comparison", "Fitness · your app", and five rows: "Daily streaks Common", "Milestone rewards Common", "Social challenges Untapped", "Loss-framed nudges Try first", "Team leaderboards Try first". Unchanged. It is an illustration, not data, and nothing on the page says so. See the report.

### 1.8 Latest entries

Heading. Current: "Latest entries". Unchanged.
Rows. Current: "Wakeout case study, Aug 03, 2026" and "Insight Timer case study, Aug 03, 2026", both linking to the subscribe page. Unchanged, but see the report: the list is hand-written, two months old, and the newest case studies are not in it.

### 1.9 Newsletter block (every page)

Heading. Current: "Appservatory Newsletter". Unchanged.

Pitch (`NEWSLETTER_PITCH` in `site-copy.ts`, also in the exit popup). Current: "Each week we add three fresh breakdowns of how successful apps implement game mechanics. Get the most interesting mechanics from each, straight into your inbox."
Approved: "Each week we add three breakdowns of how real apps use game mechanics. The newsletter sends you the mechanics from each, straight to your inbox." ("game mechanics" stays for now.)

Form. Current: label "Email", placeholder "you@company.com", button "Sign up". Unchanged.

Consent (`NEWSLETTER_CONSENT`). Current: "I agree to receive occasional relevant emails from Appservatory about behavioral design and engagement mechanics." Unchanged (consent wording, leave to whoever owns the legal text).

### 1.10 Header and footer (every page)

Header menu. Current: "Library" with five entries: "Mechanics: The core building blocks, with the psychology behind each one." "Systems: How mechanics combine into the loops that keep users coming back." "Cheatsheets: Practical guides for putting mechanics into your product." "Shortcasts: Short audio breakdowns of one app at a time — up to ten minutes." "Glossary: Plain-language definitions for every term we use." Then "Case studies" and "Work with us", then the buttons "Log in" and "Subscribe".
Proposed changes:
- Systems: "How mechanics combine into systems that give users a reason to come back." (same line as the homepage card)
- Shortcasts: "Short audio breakdowns of one app at a time, up to ten minutes each."
Everything else unchanged.

Footer description. Current: "We study how the best apps and games keep their players, mechanic by mechanic, documented for product teams to draw from."
Proposed: "We take real apps and games apart mechanic by mechanic, to show what each one asks of its users and what it gives back, for product teams to draw from."
Reason: "the best" and "keep their players" are success claims; the new line is the lens in one sentence.

Footer columns. Current: Library (Mechanics, Apps, Systems, Cheatsheets, Shortcasts, Glossary), Practice (Work with us, Finance), Account (Subscribe, Log in), "Updated weekly", Privacy Policy, Terms of Use, Refund Policy, Cookie Preferences, the email address, the copyright line.
Proposed: remove "Updated weekly". Everything else unchanged. One note: the footer says "Apps" where the header and the page say "Case studies".

### 1.11 Cookie banner and exit popup (appear conditionally)

Cookie banner. Current: "We use cookies for analytics (Google Analytics and Microsoft Clarity) to understand how the site is used. They are only set if you accept. See our Privacy Policy." Buttons "Reject" and "Accept". Unchanged.

Exit popup. Current: eyebrow "Before you go"; heading is the site tagline; body is the newsletter pitch (changed as above); error "Something went wrong — please try again."; success "You're on the list." and "We'll send the next batch of case studies your way."
Proposed error: "Something went wrong. Try again."
Everything else unchanged.

---

## 2. Case studies index

Source: `site/src/pages/case-studies/index.astro` and `CaseStudies.jsx`. The page has no filters; the only filters on the site are on the mechanics library page, so none are drafted here.

### 2.1 Title and description

Current title: "Case studies — Appservatory".
Proposed title: "Case studies: See how real apps work, from the first screen onwards"

Current description: "Documented breakdowns of real apps, mechanic by mechanic." Unchanged.

### 2.2 Headings

Breadcrumb. Current: "Library / Case studies". Unchanged.
Eyebrow. Current: "The library". Unchanged.
Heading. Current: "Case studies". Unchanged.

### 2.3 Intro

Current: none. The component takes an intro line and the page never passes one.
Proposed: "Each case study looks at how an app works as a whole, how its mechanics tie into a system, and the path a user takes from the first screen onwards."

### 2.4 Count bar

Current: "{n} systems in the library" and "{n} free to read · updated weekly".
Proposed: "{n} case studies in the library" and "{n} free to read".
Reason: the heading says case studies and the count says systems; "updated weekly" is removed as decided, which leaves nothing to separate, so the middle dot goes too.

### 2.5 Cards

Category tag. Current: the app's category in an outline tag. Unchanged.
Badge. Current: "Free" or "For subscribers". Unchanged.
Name and icon. Unchanged.

Description line. Current: the app's own teaser, from its content file. Not changed here. Strava's, Calm's and Royal Match's are redrafted in their own files in this sweep. The other 26 teasers have not been through the voice pass, and the new guide keeps counts out of teasers, so they will need it.

Mechanic chips. Current: up to four mechanic names. Unchanged.
Footer line. Current: "{n} mechanics mapped" and "View case study" or "Subscribe to explore". Unchanged.

---

## 3. Subscribe page and paywall copy

Kept exactly, as asked: "$25/month", "billed $75 every 3 months", "$250/year", "Save 16%", "Choose a plan". The "Subscribe" button label on each plan is also unchanged.

### 3.1 Page title and description

Current title: "Subscribe — Appservatory".
Proposed title: "Subscribe: Every case study, mechanic and system in the library"

Current description: "Documented breakdowns of real apps, mechanic by mechanic. One subscription unlocks every mechanic, system, and case study in the library."
Proposed: "Documented breakdowns of real apps, mechanic by mechanic. One subscription unlocks every mechanic, system and case study in the library."
Reason: only the serial comma, to match the rest of the site. Leave it if you prefer.

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
2. "A new in-depth case study every week."
3. "Every example of how an app applies a mechanic."
4. "Every system map, across dozens of apps."

Reason: "52 a year" is the maths and goes; the first opens with a command; the last two are "access to" filler; "best-in-class" says the apps are the best.

### 3.3 The three value sections

Section 1. Kicker "Mechanics", heading "Every mechanic, broken down". Unchanged.
Current body: "Each game mechanic in the library is explained on its own: what it is, when it works, what it needs to run, and how real apps have used it. You get a reference your product team can pull from when deciding what to build, instead of guessing from memory of games you have played."
Approved, with "game" removed: "Each mechanic in the library has its own page: what it is, when it works, what it needs to run, and how real apps have used it. Your product team can pull from it when deciding what to build, instead of going from memory of games you've played."

Section 2. Kicker "Systems".
Current heading: "See how mechanics fit together". Proposed: "How mechanics fit together". Reason: it already says what the reader gets; the verb adds nothing once the kicker says Systems.
Current body: "Mechanics rarely work alone. The library maps how they connect inside real apps, so you can see the full system a feature sits in, not just the feature on its own, and copy the structure rather than the surface."
Proposed: "Mechanics rarely stand alone. The library maps how they connect inside real apps, so you see the whole system a feature sits in, not only the feature, and can copy the structure rather than what's on the screen."
Reason: "surface" is design jargon; "work alone" becomes "stand alone" because the lens keeps "work" for a claim about success.

Section 3. Kicker "Case studies". Heading "A new teardown every week". Unchanged ("teardown" is the trade word readers know).
Current body: "Each week we publish a close analysis of how a best-in-class app uses a mechanic, with the screens and the reasoning. Over a year that is fifty-two worked examples, building into a record of what actually ships and what actually works."
Proposed: "Each week we publish a close analysis of how one app uses its mechanics, with the screens and the reasoning behind them."
Reason: the "over a year" sentence is deleted as decided, and with it the claim about what works. "A mechanic" becomes "its mechanics" because a case study covers all of an app's.

### 3.4 Closing call

Heading. Current: "Every mechanic here comes from a product that actually built it. None of it is theory." Unchanged.
Button. Current: "Choose a plan". Unchanged, as asked.

### 3.5 Paywall paragraphs (`site-copy.ts`)

Eyebrow (`GATE_EYEBROW`). Current: "Subscribers only". Unchanged.

Headings (`GATE_HEADING`).
- Case study. Current: "Read the full {app} breakdown". Proposed: "The full {app} breakdown".
- System. Current: "Explore the {app} system map". Proposed: "The {app} system map".
Reason: both say what the reader gets; the verbs added nothing.

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

Current: "Streak — mechanic — Appservatory". Proposed: "Streak". The mechanic's name alone, as decided.

### 4.2 Header

Breadcrumb. Current: "Home / Mechanics / Streak". Unchanged.
Number and tag. Current: "01" and "Retention". Unchanged.
Heading. Current: "Streak". Unchanged.

Definition. Current: "A counter that increments each time a user completes a defined action within a set time window, typically once per day."
Proposed: "A counter that goes up each time a user completes a defined action within a set time window, usually once a day."

Labels and chips. Current: "Best for: Achiever, Competitor". "Context: Activation, Retention". "Motivation drivers: Mastery, Ownership, Avoidance". Unchanged.

### 4.3 How it works

Heading. Current: kicker "How it works", title "Loss aversion". Unchanged.

Body. Current: "The streak counter resets to zero if the window is missed. Its power comes from what it accumulates over time: a number representing a visible, unbroken history of behaviour. The longer it runs, the more it is worth protecting. Loss aversion does the work here, users return not to gain a reward but to avoid losing what they have built."
Proposed: "A streak asks users to repeat one action in every window, and gives them a number in return: a visible, unbroken record of their own behaviour. Miss a window and the counter goes back to zero. The longer it runs, the more there is to lose, which is the motivation it works on."
Reason: the first two sentences say what it asks and what it gives, the lens's first two questions; the last names the third. "Its power comes from" and "does the work" are claims about success. The reader can draw the loss-aversion conclusion, so it isn't spelled out beyond the heading.

Core principle. Current: "Loss aversion. The streak converts passive interest into active retention pressure once the user has returned enough times to feel ownership over the number."
Proposed: "Loss aversion. Once a user has returned enough times to feel the number is theirs, a streak is built to turn passing interest into a reason to keep returning."

Watch out for. Current: "Streaks work best after day 3–7 when the user feels the number is worth protecting. Before that, frame them positively: show what maintaining the streak unlocks, not what breaking it costs."
Proposed: "A streak starts to carry weight around day 3 to 7, once the number feels worth protecting. Before that, show what keeping the streak unlocks, not what breaking it costs."
Reason: "work best" is a success claim. The advice stays, since the box is headed "Watch out for".

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
Proposed: the Calm card takes its headline and its "What stands out" from the Streak block in the new `sources/review/calm.md`, so the two files agree. Headline: "Calm records your current and longest streak on a calendar in your profile, a running count of you coming back." What stands out: "Your streak in Calm has already changed after your first check-ins, before you've played any audio." The payments branch already changes the other eleven to a name, headline and a link to the case study, so nothing is drafted for them here.

### 4.7 Sidebar

"Often paired with": "Daily Login Rewards", "Milestones", "Season Pass / Battle Pass". Unchanged.
"Player types": "Achiever", "Competitor". Unchanged here. Under the new word rule "Player" belongs inside a game's case study, so this label would read "User types". It is a label in the template, not copy in the mechanic file, so I have not drafted it as a change; say if you want it.
"Seen in": the twelve apps. Unchanged.

### 4.8 One decision for you

The library's mechanic pages explain psychology. The lens asks every mechanic to be explained by what it asks of the user, what it gives back and what motivation it works on, which is exactly that, so I kept the psychology and rewrote the sentences that said what a mechanic achieves ("does the work", "work best", "its power comes from"). If you want the stricter reading, the "How it works" body would shrink to its first two sentences.
