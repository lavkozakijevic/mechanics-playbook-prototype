# Insight Timer

**Teaser:** Insight Timer's most powerful habit-formation tool, a home screen widget, is rewarded with a longer trial — more time to build the exact habit the widget exists to support.

Insight Timer opens with graphs of mood improvement and a consistency curve before asking the user to set a goal, then mechanizes that self-chosen commitment through a streak, a daily intention the product shows back as the user's own statement, and a milestone system that pays out in trial length. A social layer runs alongside on two separate tracks: named groups with admins and membership, and open, unmembered surfaces like a gratitude wall and quote comments. The product's depth, hundreds of thousands of free tracks, thousands of groups, a retreat marketplace, a therapist directory, keeps the mechanics from feeling like a substitute for content.

---

## System view

Insight Timer's daily state runs through two entry points that both start at onboarding: setting an intention, which starts the streak and counts down to the next milestone, and a timer practice, which ends in a completion screen, a streak-and-widget prompt sequence, and a reflection screen. The social layer sits apart from this spine on two tracks that don't reference each other: a membership layer of named, admin-run groups, and a set of open, unmembered surfaces seeded by the product itself. Nothing ties the meditation-and-streak spine directly to the social layer beyond a shared profile-visibility setting.

---

## Mechanics

### Streak

**Implementation summary:** A consecutive-day streak set from a goal chosen at onboarding, surfaced on a dedicated flower control and a home screen widget.

**What was observed:** The user picks a consecutive-day goal during onboarding (3, 5, 7, or 10 days). Setting a daily intention starts the streak at one consecutive day, and the home screen separately counts down to the next milestone. A widget option can show the running count on the device home screen, and a post-practice prompt asks the user to keep it going the next day.

**How it is presented:** A flower icon sits at the top of the home screen tracking the consecutive-day count. The onboarding goal screen and the post-practice prompt both frame the streak as a target the user set for themself, not one the product imposed.

**What is worth noting:** The product distinguishes the consecutive-day count from a separate 50-non-consecutive-day milestone rule, which is itself evidence the streak measures an uninterrupted run rather than a total. What resets or protects the sequence never surfaced.

**Key findings:**

- The streak begins the moment a daily intention is set, before any meditation happens.
- Its length is chosen by the user during onboarding, not fixed by the product.
- A home screen widget can display the running count outside the app.
- What breaks or protects the streak never appeared.

**Screenshots needed:** the onboarding goal-selection screen, and the flower streak control on the home screen.

### Milestone

**Implementation summary:** Thresholds at 7 consecutive days and 50 non-consecutive days, counted down to and tracked separately from the streak.

**What was observed:** The product states milestone thresholds at 7 consecutive or 50 non-consecutive days, counts down to the next one from the home screen, and lists further milestone counts (1, 5, 25, 100) in the stats view. Reaching the 7-day threshold led directly into a trial-length change, though what the product itself shows at the moment a threshold is crossed never appeared.

**How it is presented:** A countdown to the next milestone sits beside the streak control, and a running milestone count appears on the stats page, the share card, and under profile visibility.

**What is worth noting:** The milestone count is kept as its own record, separate from the day count and separate from the streak — the product tracks "next milestone" and "total milestones reached" as two different figures.

**Key findings:**

- Thresholds are set at 7 consecutive days and separately at 50 non-consecutive days.
- A countdown to the next milestone runs alongside the streak on the home screen.
- Milestone counts (1, 5, 25, 100) appear in stats, on the share card, and under profile visibility.
- What happens onscreen the moment a threshold is crossed never appeared.

**Screenshots needed:** the milestone countdown on the home screen, and the stats page listing milestone counts.

### Commitment

**Implementation summary:** A daily intention the user composes and the product shows back as their own statement, plus a separate post-practice prompt asking them to return tomorrow.

**What was observed:** "Today I will..." opens a list of ready-made intentions the user can tap, edit, and set; the chosen sentence is shown back whole and restated on the home screen widget. After a practice, a prompt frames returning tomorrow as something the user affirms by tapping "I'm committed."

**How it is presented:** The intention field sits at the top of the home screen before any other action is available. The post-practice prompt appears in the same screen sequence as the streak and widget prompts, worded as the user's own undertaking.

**What is worth noting:** The intention-setting behavior is the stronger case: the user supplies the content, the product shows it back as their own words, and it recurs on the widget. The post-practice button rests more lightly — the undertaking is voiced by the product and the user's agreement is inferred from a single tap, so it is described here as a prompt the user can affirm rather than a fully authored statement.

**Key findings:**

- The daily intention is user-composed (from a list or free text) and echoed back as the user's own statement.
- The intention is restated on the home screen widget.
- The intention is set before any meditation happens that day.
- A separate post-practice button asks the user to affirm returning tomorrow, with less shown about what that tap actually records.

**Screenshots needed:** the "Today I will..." intention-setting screen, and the post-practice "I'm committed" prompt.

### Shareable Win

**Implementation summary:** A share composer built from the streak count, total days, total minutes, or total milestones, offered right after a streak forms and again from the stats page.

**What was observed:** The product composes the user's own streak or totals into a preview and offers named platforms and a copy-link option as destinations. It appears on the screen where a streak starts and again on demand from stats.

**How it is presented:** A "we started a streak" framing leads into the share screen, where the user chooses which figure to send before picking a destination.

**What is worth noting:** What gets shared is the product's own record of the user's streak and totals, not a track or piece of content the user made — a share of standing, not of material.

**Key findings:**

- The share composer draws on streak count, total days, total minutes, or total milestones.
- It is offered both immediately after a streak starts and on demand from stats.
- The user picks which figure to send before choosing a destination.
- The same named platforms are offered across both entry points.

**Screenshots needed:** the share screen offered after a streak starts, and the same composer opened from stats.

### Group Membership

**Implementation summary:** Named groups with admins, posts, chat, and a leave control, joined from a groups section reached only through the sidebar.

**What was observed:** Groups are browsed, joined, and created from a sidebar-only section. Public groups are joined immediately and show a welcome message and community guidelines; a group carries its own feed of member posts, a member-built library, a chat, and an about page listing admins and members. Membership persists across visits and changes what the user can do, including posting and sharing a practice into that specific group.

**How it is presented:** Browse, My groups, and My feed sit as tabs inside the Groups section. A group's own screen surfaces its feed, library, chat, and member list, with a leave control under its menu.

**What is worth noting:** A member-built resource library inside each group raised the question of whether the group itself is a shared, group-owned resource, but membership, named admins, and a leave control are all present, which is what separates this from a resource held in common with no one belonging to anything.

**Key findings:**

- Groups are reached only through the sidebar, not primary navigation.
- Public groups are joined immediately, with a welcome message and stated guidelines.
- Membership is tracked with named admins and a leave control.
- Joining unlocks posting, chat, and sharing a practice into that group specifically.

**Screenshots needed:** the Groups sidebar entry with Browse/My groups/My feed tabs, and a joined group's own screen showing its feed and library.

### Community Space

**Implementation summary:** Two open, unmembered surfaces on the home screen, a gratitude wall and a quote with comments, plus teacher audio replies on a course page.

**What was observed:** A gratitude wall asks what the user is grateful for and shows other people's posts, open to anyone who supplies a name and a message. A home screen quote carries likes and comments, with three seeded reflections and a running set of comments from people in different countries. A course page separately carries teacher audio replies to student comments.

**How it is presented:** Both home screen surfaces sit in the normal scroll of the home feed, seeded by the product's own prompt or quote choice.

**What is worth noting:** Nothing here asks the user to join anything first — contributions are kept with the surface itself rather than behind membership, which is what separates this from the groups layer.

**Key findings:**

- The gratitude wall and quote comments are open to any user with no join step.
- The home screen quote is seeded with the product's own choice of text and reflections.
- A course page carries teacher audio replies to student comments in that course's context.
- Whether posts are reviewed before appearing never surfaced.

**Screenshots needed:** the gratitude wall on the home screen, and the quote screen with its comments.

### Social Feed

**Implementation summary:** A feed of posts inside each joined group, plus stated rules for what a personal "My feed" and "My teachers" tab collect.

**What was observed:** Inside a group, posts from multiple members stream in a feed sortable by newest or top. The product states that "My feed" collects messages from joined groups and "My teachers" collects updates from followed teachers; both sat empty here. A separate community section lower on the home screen shows activity from people using the app, though whether each item ties to a named person never surfaced.

**How it is presented:** The group feed sits inside each joined group's own screen. My feed and My teachers are named tabs with a stated collection rule.

**What is worth noting:** The group feed and the stated collection rules are the strongest ground for this tag — the product names exactly what populates each of them. The home screen community section is weaker: it reads as feed-like scrolling activity, but nothing pins down whether its items are attributed to a person, so it's described here as a possible extension of the same pattern rather than a confirmed one.

**Key findings:**

- A group's feed streams posts from multiple members, sortable by newest or top.
- My feed is stated to collect messages from joined groups.
- My teachers is stated to collect updates from followed teachers.
- A separate home screen community section shows app-wide activity, with its attribution left unclear.

**Screenshots needed:** a joined group's feed, and the empty My feed / My teachers tabs.

---

## Onboarding and first run

An opening usage-share claim, four rounds of profiling questions, three consistency-research screens, and a dated well-being prediction all run before any account is created.

### O1. Opening usage-share claim

On first launch, Insight Timer opens on a claim that more time is spent here than on all other well-being apps combined, backed by a pie chart giving itself 59% against named competitors, under a call to action to join 35 million people. No source for the percentages appears anywhere on the screen.

### O2. Library breadth screen

The next screen claims the largest library of guided meditations and music tracks on earth, listing hundreds of thousands of meditations, tens of thousands of teachers, and a million playlists. The figures shift elsewhere in the app: a different user count later in onboarding, a different free-title count on the free-tier promise, a different free-track count in the library search, and a different teacher count on the Teachers tab.

### O3. Profiling questions

Four profiling questions ask who the user is meditating for, up to three topics of interest, meditation experience level, and preferred content type. Choosing support for kids surfaces children's content later on the loading screen and as the home screen's top pick, though whether that placement actually follows from the answer is left unclear.

### O4. Consistency research screens

Three screens argue that consistent practice improves mood and equanimity and that consistency itself is the key benefit, each illustrated with a chart and none asking for input. The mood and equanimity claims resurface later on the streak page's stats panel.

### O5. Consecutive-day goal

"How many days will you look after yourself?" offers four graded options from 3 to 10 consecutive days, five days preselected, framed as a goal to measure progress and form habits. No reward attaches to any option, and whether a missed day ends, restarts, or simply continues the goal is left unclear.

### O6. Daily minutes

A curve argues that five minutes a day is enough to notice improvements, then asks the user to choose 5, 10, or 20 daily minutes, each paired with its own outcome line promising faster improvement at higher settings.

### O7. Practice time, reminder copy and notification permission

Choosing a preferred time of day, morning, afternoon, evening, or not sure, rewrites the reminder copy on the following screen to match, then leads into the system notification permission prompt.

### O8. Personalization loading screen

A loading screen lists benefits tailored to the answers given earlier, including the kids-support answer from the profiling questions, before advancing on its own.

### O9. Acquisition source question

"How did you find us?" is headed by a claim of 30 million users reached without any ad spend, a figure that differs from the 35 million cited earlier and later in onboarding. The options span friends, professionals, and various discovery channels.

### O10. Dated well-being prediction

The last onboarding screen before the paywall predicts the user will be feeling much better by a date three months out, attributed to a large-scale scientific study, with a graph rising toward that date. The prediction ignores every answer given earlier in onboarding and is never restated at the goal or minutes steps that preceded it.

### O11. Onboarding exit

Onboarding ends on the home screen without ever asking the user to create an account, having requested only the notification permission along the way. Account creation, when it happens, is started by the user rather than prompted by the app.

---

## Core loop and automation

A home screen anchored by a streak, an intention field, and live usage counts feeds into a meditation timer, a completion sequence, and a stats page that gathers everything into one view.

### O12. Home screen

The home screen carries a goal line reading progress toward the onboarding target, a sidebar control, a flower streak control, a "Today I will..." intention field, category shortcuts, a single top pick for the day, a routine list, a quote, live usage counts, duration-filtered recommendations, a gratitude wall, and a community activity section, in a feed that scrolls without an end point. Bottom navigation holds five tabs: Home, Library, Timer, Teachers, and Saved.

### O13. Daily intention

Tapping "Today I will..." opens a list of ready-made intentions that can be tapped, saved, and reused, or edited into a custom sentence before being set. Setting an intention required placing a home screen widget first; once placed, the app confirmed the intention and opened a screen marking one consecutive day and counting down six days to the next milestone. The intention is later offered for sharing and is restated on the device widget.

### O14. My routine

My routine lets the user build a daily calendar of activities, each given a name, a repeat rule, a frequency, and an attached practice drawn from the timer, bookmarks, a course, playlists, the journal, or a check-in. The product suggests activities such as meditating, winding down without screens, or appreciating a quiet moment, grouped under themes like sleep and gratitude. What marks an activity complete, and whether its count resets the next day, never surfaced.

### O15. Live usage counts

Below the home screen quote sits a running count of how many people are using the app today and right now. No individual in the count is identified, and whether the figures move during a single visit never surfaced.

### O16. Library tab

The Library tab opens on a search across the full free catalogue, next to a link explaining why the product is free. Below it sit the same categories as the home screen, courses, topics, brief practices, and duration-filtered recommendations.

### O17. Category pages

Every category page follows the same layout: a headline, named techniques or practices, a top pick, recommendations, a top-20 list, individual tracks, courses, and the category's teachers. The ordering rule behind the top-20 list never surfaced.

### O18. Track page and player

A track page states its play count and posting date, and shows reviews, the teacher, the teacher's other content, a share control, and a donate control. The player shows a countdown with pause but no skip. A track's menu adds a private-listening mode, a sleep timer, download, save-for-later, bookmarking, playlist and folder controls, following the teacher, donating, and reporting a concern.

### O19. Meditation timer

The timer opens promoting its newest bell and ambient-sound set, with a control to revert to a basic version. Both versions let the user set a starting bell, duration, activity type, warm-up, interval bells, ambient sound, ending bell, and volume, and save the setup as a preset. Starting a practice sounds the bell and states how many bells remain before it can be finished or discarded.

### O20. Practice completion screen

Finishing a timer practice shows what was completed and a count of how many other people in the community meditated at the same moment, with no individual identified. Continuing leads into a streak prompt, a widget prompt, a reflection screen, and a retreat screen, in that order.

### O21. Post-practice reflection

After a practice, a reflection screen asks how the user is feeling on a slider from awful to great, alongside a journaling field and a set of descriptor tags that change depending on where the slider sits. A control lets the user turn the screen off for future practices.

### O22. Sidebar check-in and journal

A sidebar check-in asks how the user is feeling today and keeps the answer as a mood record; continuing from it into a journal entry raised a paywall. The journal itself, reachable from the sidebar and the Saved tab, takes a plain entry and saves it. A completed check-in did not visibly change a neutral weekly summary.

### O23. Saved tab

The Saved tab gathers recently played items, a listen-later list, bookmarks, playlists, the journal, challenges, courses, and downloads, and lets the user build folders that can be shared with others. Playlists are split between the user's own and friends', described as populating once a friend creates one.

### O24. Interrupted and resumed practice

Leaving and returning to the app opened on a motivation screen ahead of the timer. Closing a guided practice partway offered a restart or continue choice, and the home screen then showed the unfinished practice.

---

## Goals and progression

A consecutive-day goal chosen at onboarding drives a streak, a milestone countdown, and a stats page that gathers every counted activity into one view.

### O25. Consecutive-day goal tracker

The home screen's top line reads "Day 1 out of 10," matching the ten-day goal chosen during onboarding, with the streak page adding "You're making progress towards your goal." The count starts at day one before any practice happens, and whether it advances by calendar days or practiced days, and what happens at day ten, is left unclear.

### O26. Consecutive-day streak

A flower control at the top of the home screen tracks the streak. Setting the first intention opens a screen announcing one consecutive day and a countdown to the next milestone, and tapping the flower repeats the same figure. What ends the streak, and whether any protection exists, is left unclear.

### O27. Milestones

The streak page explains that milestones are reached at 7 consecutive or 50 non-consecutive days of practice, lists further milestone counts of 1, 5, 25, and 100, and counts down to the next one. No milestone was reached, so what the app actually does at that moment stays unclear, as does whether the listed counts are markers, badges, or something else.

### O28. Stats and practice calendar

The streak page carries a monthly practice calendar, time practiced for the week, and a use split between the timer and guided meditation, alongside a panel repeating the mood and equanimity claims from onboarding and naming a large body of aggregate meditation data behind them. Detailed stats break activity down by type and show a running daily average, and the same figures used there can be shared as they are from the streak screen.

---

## Access and eligibility

Account creation asks only for a birth year, Plus content stays visible but locks at the point of use, and setting an intention is blocked until a home screen widget is installed.

### O29. Account creation

The user chose to sign in through Apple without being prompted, after which Insight Timer asks for a birth year only, framed as necessary to keep the community safe, then greets the user by name and returns to the paywall. No day or month of birth is requested, and no sign-in options besides Apple appear.

### O30. Features that require an account

The teacher-donation control required signing up before it would open, and friends' shared playlists appear to require an account as well, though that was never tested directly. Nothing else in the app changed noticeably after signing in.

### O31. Plus-locked content and features

Plus items stay visible in free use and lock at the point of use rather than being hidden: a course intro plays freely before its paywall, premium timer instruments raise a lock message on tap, and continuing a check-in into a journal entry raises its own paywall. The basic timer, its standard ambient sounds, and the free library all remain usable without Plus.

### O32. Challenges

The challenge archive states that no challenge is currently running and locks the rest of the archive behind Plus. A past challenge shows its dates, participant count, and ten days of activities, but joining it raises a paywall written specifically for that challenge. No success condition, completion state, or daily requirement for any challenge ever appears.

### O33. Intention widget requirement

Setting an intention for the first time is blocked by a screen requiring the intentions widget to be installed before the feature will work, with a maybe-later option and step-by-step installation instructions. What maybe later does to the pending intention is left unclear.

---

## Economy and resources

Insight Timer holds no currency, points, credits, tokens, or other held unit that is earned and then spent or exchanged. Nothing in the app's use is presented as a balance of any kind.

---

## Social

Named groups with admins and a leave control sit alongside open, unmembered surfaces like a gratitude wall and quote comments, with messages and friends left entirely empty.

### O34. Gratitude wall

A gratitude wall on the home screen asks what the user is grateful for today and shows what other people have posted. Posting to it requires only a name and a message, with no join step. Whether posts are reviewed before appearing never surfaced.

### O35. Quote reflections and comments

A home screen quote carries likes, a comment count, and a share control, and opening it shows three seeded reflections drawn from different traditions plus a running set of comments left by people from different countries. Whether the quote changes daily never surfaced.

### O36. Community activity section

Near the bottom of the home screen, a community section shows what people around the world are doing in the app at that moment, in a feed that scrolls without an end point. Whether each item names the person behind it is left unclear.

### O37. Course reviews, comments and teacher audio replies

A course page shows a review count and star rating alongside a description of its length, benefits, and teacher, plus audio replies the teacher made to individual student comments. A control for leaving a comment or review of one's own never surfaced.

### O38. Teachers tab

The Teachers tab opens on a headline count of available teachers and mental health professionals. Teachers currently live are shown with a watcher count and a way to join, while "My teachers" sits empty until a teacher is followed. The tab continues into live events, retreats, and a therapist directory.

### O39. Profile and privacy

At sign-up, the product frames itself as an open community while offering a public or private profile choice, public by default, governing who can see the user's milestones, activities, and friends. The profile itself takes a cover image, photo, location, tagline, description, and a favorite track, and can be shared. A profile-photo prompt frames a clear photo as supporting "a safe and transparent community."

### O40. Messages and friends

Messages opens on a message asking the user to add friends before a conversation can start, and both the friend-requests list and the friends list sit empty. No control to add a friend surfaced.

### O41. Groups: browsing and joining

Groups are reached only from the sidebar, split into Browse, My groups, and My feed tabs. Browse surfaces popular groups by name and size alongside groups organized by type, and My feed states that it collects messages from joined groups. Joining a public group shows the admin's welcome message and community guidelines before entry; inside, a group carries a feed of member posts, a member-built library, a meditation tab, a chat, an about page listing admins and members, an invite link, and a leave control under its menu.

### O42. Group creation

Creating a group offers a public or private setting, a name, an optional description, a cover image, and an optional welcome message, and confirms creation with a prompt to share a unique invite link. My groups then lists both the groups the user manages and the groups they've joined.

### O43. Recommending a practice to groups

Once the user has joined or created groups, a practice's share control adds those groups as destinations alongside friends and family. How a shared practice appears inside the group it was sent to never surfaced.

---

## Reach beyond the app

A progress share card, group and friend invite links, and routes into real-world retreats and a therapist directory all send the user, or an invitation, outside the app.

### O44. Progress share card

From the streak screen, a share-progress control lets the user pick which figure to send out, consecutive days, total days, total minutes, or total milestones, previews how it will look, and offers named platforms or a copy-link option. The same figures can be shared from the stats page as well.

### O45. Intention share

After the trial-extension gift screen, Insight Timer offers to share the set intention with friends and family, framed as strengthening commitment and accountability, or to simply finish. The destinations available for this particular share are left unclear.

### O46. Invitations and outbound links

Inviting a friend from the sidebar shares a join link through messages, social platforms, and other routes, and groups carry their own separate invite links. Practices can be shared to friends and family directly, and quotes carry the app's logo when shared. No reward for inviting anyone appears anywhere in these flows.

### O47. Retreats

After the post-practice reflection screen, Insight Timer promotes a featured real-world retreat and offers to browse the rest, sortable by recommendation, date, or price and filterable by type and location. Listed retreats range from fifty dollars in the UK to over eleven thousand dollars in China, spanning dozens of countries and practice types, each with its own detail page covering cost, schedule, accommodation, and cancellation policy. Whether booking and payment happen inside the app is left unclear.

### O48. Therapist directory

The Therapist Directory, reached from the Teachers tab, lists roughly forty-two thousand therapists searchable by location, specialty, and practice type, each with a profile showing credentials, followers, a description, and folders of shared material. A worksheet inside a folder can be added to a personal folder, reported, or shared, but not downloaded. How a user actually contacts or books a therapist is left unclear.

---

## Monetization

An onboarding paywall gives way to a free-tier promise, then a trial-extension gift, contextual Plus offers at every locked surface, and a teacher-donation flow.

### O49. Onboarding paywall

Onboarding ends on a Plus paywall promising a reminder two days before the trial ends, followed by a timeline running from today through a stated trial-end date, a note explaining that cancellation is easy, a free-versus-Plus comparison, and reviews from paying members. Accepting opens the App Store's own payment sheet; a skip control leads to the free-tier promise.

### O50. Free tier promise

Skipping the paywall shows a promise that the app is free forever with hundreds of thousands of tracks and no ads, and the Library's "Why we're free" page adds that Insight Timer shares half its income directly with its teachers and that several hundred thousand people already pay for Plus. No advertisement appears anywhere across the app's use.

### O51. Trial extension after the first intention

Right after the first intention is set, Insight Timer announces a gift, extending the free trial from one week to four, framed as a limited-time offer with a countdown. Accepting shows the same free-versus-Plus comparison under a statistic about member well-being, then a reminder of when the trial ends and the account will be charged. What specifically qualified the account for this gift is left unclear.

### O52. Contextual Plus offers

Insight Timer raises a Plus offer at every locked surface, each one written for the specific item it's attached to, the track paywall, the challenge paywall, the advanced-journal paywall, and the timer's own promotional pop-up. Trial length differs by entry point: seven days at onboarding, four weeks after the intention gift, and thirty days on the track paywall, settling into the same $59.99-per-year price everywhere it's stated.

### O53. Teacher donations

Tracks carry a donate control that, once the user has signed in, opens a set of fixed dollar amounts to send a named teacher, handled through Apple's own payment sheet. How much of a donation actually reaches the teacher is left unclear.

---

## Return triggers

A post-practice streak prompt, a set of home screen widgets, and a calendar of live teacher-led events bring the user back.

### O54. Streak continuation prompt

After the first timer practice ends, Insight Timer asks whether the user can make it to a two-day streak and invites them to come back tomorrow, paired with a button reading "I'm committed." The prompt does not appear to repeat again afterward.

### O55. Home screen widgets

Insight Timer offers several home screen widgets: a consecutive-day counter, an intention widget in two sizes, quick access to recently played tracks, and a daily quote. The intention widget is required before intentions can be set at all, and a second prompt to install it appears after the first practice ends, framed around consistency, even when a widget is already installed.

### O56. Live events

The Teachers tab lists upcoming live events and live yoga classes with the teacher, topic, and attendance count, including who is live now or starting within minutes. Attending confirms the time and offers to add the event to the device calendar. Whether the app sends any reminder before the event starts is left unclear.
