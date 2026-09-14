# Strava

**Teaser:** Saving one activity can fill the feed, cross a trophy, set a personal record, advance the streak, and move a segment ranking, all in the same motion.

Strava is a fitness tracking app built around recording sports activities and publishing them into a social layer of feeds, followers, clubs, and rankings. The entire system runs off one action: saving a recorded activity, which can fill the home feed, count toward a joined challenge, cross a trophy threshold, produce a personal record, and advance a weekly streak in the same motion. Comparison is scoped tightly, to a shared segment, a rolling 90-day window, or a user's own history, so a beginner's numbers are never measured against the platform's best. Strava carries no in-app economy: nothing is earned, held, or spent as a currency, and the paid tier sits entirely on top of the free recording and social loop rather than beside it.

---

## System view

Strava is a medium-complexity system with a single spine: recording and saving an activity. That one action publishes to the social feed, can cross a trophy or personal-record threshold, counts toward any joined challenge, advances the weekly streak, and can place the user on a segment ranking, so several mechanics move off the same input rather than needing separate ones of their own. The paid tier sits alongside this loop rather than inside it, withholding maps, deeper stats, and the ability to create rather than join a challenge.

---

## Mechanics

### Streak

**Implementation summary:** Strava counts a week, not a day, as the qualifying unit, so one activity anywhere in seven days keeps it alive.

**What was observed:** Strava keeps a streak counter at the very top of the dashboard, ahead of the goal carousel, challenges, and the feed. It's shown as a flame holding a number of weeks, reading zero on a brand new account, with a line stating that logging an activity starts it and a record button placed directly beside the count. A calendar view opens from the same surface, showing the last twelve weeks of activity alongside how many streak activities are active and what the current streak stands at.

**How it is presented:** The counter sits above every other dashboard surface, so it's the first thing a user sees on open. Its calendar view spans three months rather than the current period alone, and a feedback button sits beneath it asking specifically how satisfied the user is with the streak feature. A subscription block naming performance predictions, goals, relative effort, and a training log is placed between the calendar and that feedback button.

**What is worth noting:** Strava counts the streak in weeks on the dashboard but describes it in days on the progress tab, and nothing on either screen reconciles the two units. The app also doesn't say what happens to the count if a week goes by without an activity, or whether any protection exists. Building the streak around a week rather than a day fits a product where training every single day isn't the goal.

**Key findings:**

- The streak sits above the goal carousel, challenges, and the feed on the dashboard.
- It's shown as a flame with a week count, and a record button sits directly beside it.
- The calendar view covers the last twelve weeks, not just the current one.
- Strava states the streak in weeks on the dashboard and in days on the progress tab, without reconciling the two.
- No rule is stated for what breaks the streak or whether it can be protected.

**Screenshots needed:** the dashboard streak flame at zero, and the twelve-week calendar view.

### Challenge

**Implementation summary:** Challenges are month-long, calendar-bound objectives joined in one tap, some run by Strava's own seven-million-member club.

**What was observed:** Strava runs a large, filterable catalogue of challenges, each a discrete objective with a stated success condition and a fixed window. The featured example asks for a first 5km run completed between the first and last day of the month; another asks for 400 minutes logged in the same period. Each challenge page states how many days remain, who organizes it, its terms, and what completing it pays out, and joining takes a single tap with nothing further to configure. Sixteen challenges were recommended based on the user's own recorded activity, and the catalogue can be filtered by activity type, elevation gain, moving time, and distance.

**How it is presented:** Challenges surface on the dashboard under a line about making accountability easier and earning rewards, each showing how many hundreds of thousands or millions of people have already joined. The Groups tab opens directly onto the challenge catalogue rather than onto clubs. Most of the featured and promoted challenges are organized by the Strava Club, a club the product runs itself with close to seven million members.

**What is worth noting:** Strava prices joining a challenge at nothing and running one at a subscription: creating a group challenge and the tab for building a custom one both open the paywall, while joining any of the product's own or partner-run challenges is free. One challenge's exact success condition is stated two different ways in the product, active days within the month against a run of consecutive days, and the app's own wording doesn't settle which applies.

**Key findings:**

- Challenges carry a stated success condition, a days-remaining counter, an organizer, terms, and a named reward.
- Joining takes one tap; sixteen instances were recommended from the user's own activity.
- The Strava Club, run by the product itself, organizes most featured and promoted challenges.
- Creating a group or custom challenge requires a subscription; joining any challenge is free.
- One challenge's success condition is stated as both a monthly total and a consecutive run, unreconciled.

**Screenshots needed:** the dashboard challenge carousel, and a single challenge's detail page.

### Achievement

**Implementation summary:** Every activity can win graded achievements and a preserved personal record, both held on the profile independent of later activity.

**What was observed:** Strava attaches achievements to individual activities and keeps a running count of them on the profile, graded gold, silver, and bronze; one profile carried ten silver medals and another 53 trophies. Separately, the app recognizes best efforts and personal records against the user's own history: a first activity can already produce a "new best effort" notification and a personal-record badge on the share card. Completing a challenge produces a further held state, a digital trophy or badge in most cases, or a trial of a partner product in one.

**How it is presented:** Achievements travel with the activity in the feed, so other people see them alongside the route and photos. The personal-record badge is composed directly onto the shareable card the app generates after saving. Challenge rewards get their own notification type, separate from the notifications for ordinary achievements.

**What is worth noting:** Strava doesn't state the criteria behind the activity-level achievements, so what separates an attained badge from an unattained one is asserted from the counts held on profiles and the product's own framing rather than from a visible rule. A personal record is compared only against the user's own history, never against anyone else's, which keeps the first-ever recording of any length capable of setting one.

**Key findings:**

- Achievements are graded gold, silver, and bronze and are counted on the profile.
- A best-effort notification and a personal-record badge can fire on a user's very first recorded activity.
- Personal records compare only against the user's own history.
- Completing a challenge produces a held trophy, badge, or partner trial as its own attained state.
- The criteria behind individual activity achievements are not stated by the app.

**Screenshots needed:** the profile achievement count, and the first-activity best-effort notification.

### Milestone

**Implementation summary:** A trophy case marks activity-count thresholds from the first ride up to a thousand, with the first reachable in under a minute.

**What was observed:** Strava maintains a trophy case built on one measure, the total count of recorded activities, with positions defined at the first, third, fifth, and tenth activity and continuing up to a thousand. Positions not yet reached are shown in place along with their conditions. Saving a first activity crosses the first threshold immediately: it produced a celebratory animation, a pop-up welcoming the user and crediting the first logged activity, and a route straight into the trophy case, all after a recording that lasted 44 seconds.

**How it is presented:** The trophy case sits at the bottom of the profile, with a route to view all trophies opening into the full thousand-position ladder. The completion screen for a first save offers a choice between viewing the activity itself or viewing the trophy case, so one of the two paths leads away from the record just made.

**What is worth noting:** No position on the ladder was found to unlock anything beyond the trophy itself, so the entire thousand-step structure runs on recognition alone. A second, smaller instance of the same shape exists on gear: Strava notifies the user when a shoe or bike reaches a distance the user themselves chooses, from a range of 400 to 1,200 kilometers.

**Key findings:**

- Trophy positions are defined by activity count alone, at the first, third, fifth, tenth, and up to a thousand.
- The first trophy can be earned inside a single 44-second recording.
- No benefit beyond the trophy itself was found attached to any position.
- Positions not yet reached are shown in place with their conditions.
- Gear tracking uses the same threshold shape against a user-chosen distance.

**Screenshots needed:** the trophy case with the first few positions, and the first-activity celebration pop-up.

### Leaderboard

**Implementation summary:** Leaderboards run inside challenges and segments rather than globally, so a beginner can appear on one from a single ride.

**What was observed:** Strava orders identified participants against each other in two places: challenge pages, which carry both a per-activity leaderboard and an overall one showing pace, distance, and completion time, and segments, where Local Legends orders the people with the most efforts on a stretch of road over the last 90 days. A 100,000-step challenge showed ranks running up toward participants logging close to a billion steps. Segment leaderboards are additionally named directly in the app's own paywall copy as a subscription feature.

**How it is presented:** A challenge's leaderboard sits on its own page alongside the days-remaining counter and the terms. Local Legends sits inside the segments area, framed around effort rather than speed. Losing a top position carries its own dedicated notification types, named "lost CR" and "lost ratings."

**What is worth noting:** Every leaderboard Strava runs is bounded, to a single challenge or a single stretch of road, rather than run across the whole user base, so the comparison a new user meets is always local. Which leaderboards a user can appear on at all is set by the gender selected during onboarding.

**Key findings:**

- Challenge pages carry both a per-activity and an overall leaderboard over participants.
- Local Legends orders people by effort count on a segment over a rolling 90-day window.
- Losing a top position triggers its own notification types.
- Segment leaderboards are named as a subscription feature in paywall copy.
- Which leaderboards a user appears on is set by the gender selected in onboarding.

**Screenshots needed:** a challenge leaderboard, and the Local Legends segment view.

### Comparative Rank

**Implementation summary:** A user's own standing is tracked in three forms, all separate from the ordered lists the same segments carry.

**What was observed:** Alongside the ordered lists on segments, Strava tracks the user's own position in three named forms: KOMs and CRs, for the segments where the user holds the best overall time; personal records on segments; and a Top 10 list, for segments where the user places in the top ten. Inside a challenge, every participating athlete also receives an individual rank.

**How it is presented:** All three segment-standing surfaces sit together in the same area of the app, described in the product's own terms as where a user finds their best times and top placements. A challenge's rank is shown to each athlete on the challenge page alongside the leaderboard itself.

**What is worth noting:** Two of the three segment-standing forms are held against other people, and one, the personal record, is held against the user's own history alone; Strava keeps the personal-record version in the same area as the two comparative ones rather than separating it out. None of this site's four content roles quite covers what a rank like this is doing on its own, since it isn't purely retention, social, monetization, or engagement, it sits closest to social and engagement together.

**Key findings:**

- A user's segment standing is tracked as KOMs/CRs, personal records, and a Top 10 list.
- KOMs/CRs and Top 10 are both comparative; personal records are measured against the user's own history.
- Challenge participants each receive an individual rank alongside the challenge's overall leaderboard.
- The gender selected in onboarding determines which leaderboards a rank can appear on.

**Screenshots needed:** the segments standing screen showing KOMs/CRs, personal records, and Top 10.

### Social Feed

**Implementation summary:** A new account opens on a populated stream of strangers' activities, recommended before the user follows anyone.

**What was observed:** Strava's dashboard carries a scrolling feed of other athletes' activities, each showing the route, photos or video, distance, elevation, time, and any achievements won, with kudos and comment controls and visible counts for each. On a brand-new account with no follows, the feed is headed as recommendations to stay motivated, and it's populated entirely by suggestion rather than by anyone the user has actually followed.

**How it is presented:** The feed sits below the follow suggestions and the challenge carousel on the dashboard and continues loading further activities from further users as the screen is scrolled. A feed ordering preference exists in settings, alongside a choice of default highlight image and a video autoplay toggle.

**What is worth noting:** Strava fills the feed with strangers' activity by default rather than leaving it empty until the user follows someone, so the social layer has content from the very first open. Muting an activity is offered as its own control at save time, separate from the visibility setting, and it removes the activity from both the home feed and any club feed while keeping it on the user's own profile.

**Key findings:**

- Feed items show the route, media, and stats, with visible kudos and comment counts.
- A brand-new account's feed is populated by recommendation, not by following.
- A feed ordering preference exists in settings, without the options themselves being stated.
- Muting an activity removes it from the home and club feeds while keeping it on the profile.

**Screenshots needed:** the recommended feed on a new account.

### Group Membership

**Implementation summary:** Clubs are created public or private, with private membership gated by admin approval rather than the creator alone.

**What was observed:** Strava lets any user create a club through a five-step flow: choosing a sport, picking up to three descriptive tags from a list spanning personal, commercial, employer, and identity groupings, adding a name, photo, and description, setting it public or private, and setting a location. A private club requires people to request permission to join, and only admins, not necessarily the creator alone, can approve new members. A club's own page shows its member count, sport, and type, alongside events, posts, and a club-scoped feed.

**How it is presented:** Clubs are listed and searched by proximity and by sport, the same organizing principle the app uses for athlete suggestions and segments. The club-creation flow ends by naming three next actions, inviting the community, writing a post, and creating an event, rather than leaving a new, empty club to its creator. Muting an activity from the club feed is offered as its own choice, separate from muting the home feed.

**What is worth noting:** Membership here carries a governance structure, request and approval, rather than being a simple joined or not-joined state, and roles carry different powers: admins approve members, edit club details, and add events. Strava doesn't show whether a club's activities, stats, or insights tabs hold any state that belongs to the club collectively, or whether they simply list each member's own individual records.

**Key findings:**

- Club creation runs through five steps, including a tag list spanning personal, commercial, employer, and identity categories.
- Private clubs require admin approval to join; approval is a role, not tied to the creator specifically.
- A club carries its own feed, separate from the home feed, with its own mute control.
- Whether club-level tabs hold collective state or individual members' records is not shown by the app.

**Screenshots needed:** the club-creation tag step, and a club's own page.

### Shareable Win

**Implementation summary:** Saving an activity, or even taking a screenshot of one, produces a branded card built from that activity's own best result.

**What was observed:** Strava composes a self-contained card out of the record it holds on an activity: one such card stated "longest ride ever," carried a personal-record badge, and carried the app's own branding, readable by someone with no Strava account at all. The card can go to Instagram, WhatsApp, a text message, a copy of the link, or a post that stays inside the app, and the product supplies more than one pre-made design for the same result.

**How it is presented:** The share options appear on the save screen as soon as the activity is composed, and again when the user takes a screenshot of the activity page: the app intercepts the screenshot and offers its own branded composition in place of it. A subscriber-only version of the same card exists, with personalized stat maps available only on a paid account.

**What is worth noting:** The card Strava builds is drawn from the app's own record of the activity, a best-effort state and a personal-record badge, rather than from anything the user wrote or photographed themselves, and the offer to share it is made unprompted, at the exact moment the record is set. Intercepting a screenshot to substitute the app's own composition is a stronger claim on the moment than an ordinary share button.

**Key findings:**

- The composed card carries the app's own branding and can be read without a Strava account.
- Share destinations include Instagram, WhatsApp, text message, copy link, and an in-app post.
- Taking a screenshot of the activity triggers the app's own composed version instead.
- A subscriber-only personalized stat map version of the same card exists.

**Screenshots needed:** the composed share card, and the save-screen share menu.

---

## Onboarding and first run

Strava's onboarding runs from the first launch carousel through account creation, a run of profiling questions, a subscription pitch, and a push into the first recording. Nothing already answered can be revisited once the flow moves on.

### O1. First launch carousel

Strava opens on an auto-scrolling carousel of four screens covering tracking activity, working toward goals, motivation from other people, and route options, each paired with an image of part of the app. The carousel advances on its own rather than by swiping, and joining for free or logging in are the only two actions offered.

- The carousel advances automatically rather than on a swipe.
- No route past the screen exists other than joining or logging in.
- The four screens cover tracking, goals, other people, and routes, the same order the dashboard is later built in.

### O2. Three signup routes

Choosing to join offers three routes: continuing with Google, continuing with Apple, or signing up with an email address.

### O3. Verification code shortcut

After an email address is submitted, Strava tells the user a code is on its way and places a button on the same screen that opens the mail app directly.

- The button removes the app switch the user would otherwise make to read the code.

### O4. Tracking permission first

Once the code is entered, a system prompt asks to allow Strava to track the user's activity across other companies' apps and websites, appearing before Strava has shown anything it does.

- No Strava-authored screen precedes or explains the prompt at this point.

### O5. Name tied to findability

Strava asks for a first and last name, explaining that this is how friends can find the user, and states on the same screen that the profile is public by default.

- The reason given for collecting the name is that other people will use it, not that the product needs it.
- The public default is disclosed at the point of collection rather than later in settings.

### O6. Welcomed by name

Strava greets the user by the first name just entered on the very next screen after the name step.

### O7. Birthday, three uses

Strava asks for a birthday, stating it will be used for performance analysis, filtering leaderboards, and keeping younger users safe.

- Two of the three stated uses are product features; one is an eligibility condition.
- Strava doesn't say what the safety condition actually changes for a younger user.

### O8. Gender sets leaderboards

Strava asks for gender, stating it determines which leaderboards the user appears on, with options for man, woman, non-binary, and prefer not to say.

- The stated purpose is a single feature rather than a general profile field.
- Strava doesn't say what happens to leaderboard placement when "prefer not to say" is chosen.

### O9. Sport preview, skippable

Strava asks what types of activities the user likes, framed as a preview of what the app offers when recording, and lists options including running, cycling, walking, hiking, swimming, and more than a dozen others. The screen can be passed without selecting anything.

- The screen is framed as showing off the product as much as collecting an answer.
- The sport count stated here is "over 30."

### O10. Population screen between questions

Strava places a screen between the sport-type question and the next one stating that more than 150 million people are active on the platform, carrying no question of its own.

- It's the only screen in the flow whose content is the size of Strava's user base.

### O11. Purpose reveals features

Strava asks what the user plans to use it for, offering options like competing with others, connecting with active people, building a habit, and maintaining health, more than one selectable. Tapping an option reveals a line of feature copy beneath it tied to that motive.

- The revealed copy names a product feature against the motive the user just claimed.
- The sport count stated here is 48, conflicting with the "over 30" stated one screen earlier.
- Strava doesn't say whether these selections change anything later in the product.

### O12. Fitness level self-assessment

Strava asks the user to place themselves on a fitness journey, from beginner to professional athlete, with each level described in a line of its own.

- The level is declared by the user rather than derived from anything the product has recorded.
- Strava doesn't say whether the declared level changes any later content, suggestion, or threshold.

### O13. No going back

Strava offers no route back to a previous screen anywhere in onboarding; answers already given can't be revised until the profile editor is reached later.

### O14. Privacy defaults disclosed

Strava's privacy screen states it hides the start and end of a user's activities by default, and that twelve privacy controls can be customized, covering who can see the profile and activities.

- The screen discloses a protective default rather than asking for a decision.
- It follows directly after the screen that established the profile is public by default.

### O15. Shared data named to a feature

Strava explains, on a data-sharing screen, that activity data shared by its users powers community features like the Global Heatmap, and that sharing can be stopped later in settings.

- The screen names a specific feature the shared data produces rather than describing sharing in general terms.
- The opt-out is stated as available later rather than offered on the same screen.

### O16. Subscription pitch with full terms

Strava's first subscription screen offers an annual plan at $79.99 a year and a combined Strava-plus-Runna plan at $149.99, with a 30-day free trial that unlocks every feature and a stated reminder 28 days in before the charge lands at 30 days. The screen can be skipped immediately.

- The reminder is promised 2 days before the charge.
- The skip is available without scrolling or waiting.
- This screen arrives before the user has recorded a single activity.

### O17. Partner-led unlock list

Strava's second unlock screen lists five things the paid tier includes: a custom training plan and expert coaching, both credited to the Strava-plus-Runna tier, plus estimated race finish times, route suggestions, and advanced workout analysis. The screen can be skipped.

- Two of the five items are credited to the partner product rather than to Strava.

### O18. Priming before the system prompt

Strava primes notification permission with its own screen asking whether the user wants an occasional nudge, showing an example notification and telling the user to select allow on the system prompt that follows.

- The priming screen instructs the user how to answer the prompt that comes right after it.
- The example notification is shown before permission is actually granted.

### O19. Friend-finding inside onboarding

Strava frames a friend-finding step around not going it alone, inviting the user to find friends, with a search that surfaces people by location and a set of well-known athletes to follow. The step can be passed without following anyone.

- People are surfaced by location before any contact list has been shared.
- The framing names giving and receiving kudos rather than the follow itself.

### O20. Closing instructions

Strava closes onboarding by telling the user they're ready to go, naming four things to do next: upload activities, compete with friends, build a community, and have fun.

### O21. Pushed into the first recording

Strava ends onboarding with a pop-up inviting the user to record an activity now or connect a device like a Garmin or Peloton instead, and recording opens straight into a permission request for fitness activity and location.

- No further instruction screen follows; the recording surface is where guidance ends.
- The device route sits on equal footing with recording in-app.
- A third sport count, "30+," appears on this screen.

---

## Core loop and automation

Strava's core loop is recording an activity, saving it, and everything the app automates or offers around that single action: the sport selector, the recording screen itself, the save flow, gear, and the settings that govern all of it.

### O22. Five-tab navigation

Strava's bottom navigation bar carries Home, Maps, Record, Groups, and You, with Record occupying the centre position.

- The five destinations split the product into the feed, the map, recording, other people, and the user's own record.

### O23. Sport selector, grouped

Tapping Record opens a screen showing the user's location and a sport selector grouped into foot, cycle, strength, racquet, water, winter, team, and other sports, opening on a "your top sports" group drawn from what the user has chosen or done most.

- A fourth sport count appears here: "probably 40, at least 30 plus."
- The recent-and-chosen shortcut sits above the full list, so the common case takes one tap.

### O24. Pre-record screen

Strava's pre-record screen lets the user adjust map layers, shows areas other people have covered nearby, offers a route builder that requires a subscription, and carries an option that starts sharing the user's live location by text as a safety measure.

- Other people's coverage is visible on the map before the user has recorded anything.
- The route builder is named and reachable but locked.

### O25. Recording settings

Strava's recording settings cover audio cues, a choice between normal and locked screen behaviour, auto pause, live location sending, and a heart rate sensor that requires Bluetooth permission.

- Each setting removes a specific interruption during the activity rather than adding a new feature.

### O26. Live recording screen

Starting a recording opens a full screen showing speed, distance, elevation gain, and current elevation, auto-pausing after a few seconds of no movement and showing whether activity is registering. The recording can be paused manually and minimised.

- Auto pause means an interruption doesn't have to be handled manually for the record to stay accurate.

### O27. Finish offers resume or save

Finishing offers resuming or saving the activity, and saving pre-fills a name from the time of day, for example suggesting "Morning Ride" for a morning bike activity.

- Resume is offered alongside save, so ending the recording isn't final.

### O28. Save screen composes for others

Strava's save screen carries the activity name, an invitation to tag others with the @ symbol, the activity type, a sample map, and controls to add photos, videos, and change the map type, noting that personalized stat maps require a subscription.

- Tagging, description, media, and map treatment are all assembled at the same step as saving.
- Two of the controls on this screen are partly locked.

### O29. Media limits stated upfront

Adding a video states that Strava trims anything over 30 seconds automatically, while the number of photos and videos that can be added has no cap.

### O30. Activity tags and effort rating

A details section offers tags like race, workout, recovery, commute, with pet, and with kid, alongside a separate question asking how the activity felt: easy, moderate, or max effort.

- The effort rating is available whether or not a heart rate monitor is connected.

### O31. Private notes

Strava's save screen carries a private notes field described as visible only to the user.

### O32. Gear added during save

New gear can be registered directly from Strava's save screen rather than requiring the user to leave the flow to create it first.

### O33. Visibility, hidden details, and muting

Visibility can be set to everyone, followers only, or just the user; hidden details cover calories, speed, and start time; and a mute control keeps the activity out of the home and club feeds while leaving it visible on the profile.

- Three separate controls govern who sees it, which figures are shown, and whether it enters the feeds.

### O34. First-activity celebration

Saving a first activity plays a "nice work" animation followed by a welcome message crediting the first logged activity, offering routes to view the activity or the trophy case, and a trophy is granted for it.

- The message uses the app's own social vocabulary, kudos, for a system message.
- One of the two offered routes leads away from the activity just recorded.

### O35. Activity page and locked insights

Strava's activity page leads with six headline stats, expands into a fuller stats block on tap, carries share, comment, and like controls, and ends in a locked section pitching subscriber-only insights.

- The locked section sits below the user's own numbers rather than above them.

### O36. Replaying the route

A play control on Strava's activity page opens a replay of the user's movement across the route.

### O37. Seven-option edit menu

A three-dot menu on the activity offers adding media, editing, cropping, adjusting map visibility, saving the route, refreshing, and deleting the activity, with deletion reachable directly from the activity.

### O38. Manual entry

A plus button on the You tab creates a new post, adds a photo, or logs a manual activity, letting activity performed without the app still enter the record.

### O39. Instant one-tap workouts

Strava's dashboard carries instant workouts that can be started immediately, each with a stated duration and purpose, such as a 30-minute brisk walk.

- Strava doesn't say whether starting one differs from an ordinary recording.

### O40. Locked four-intent workouts

Strava's Workouts tab offers four intents, maintain, build, explore, and recover, each opening a full card with an activity, description, difficulty, and estimated time before ending on a button to start a free trial.

- The cards are shown in full before the lock is stated.
- The four intents cover the entire range of what a plan could ask: maintaining, increasing, varying, or reducing effort.

### O41. Statistics for three sports

Strava's statistics surface holds detailed running, cycling, and swimming stats across this week, year to date, and all time.

- Three sports carry dedicated statistics while the recorder offers many more.

### O42. Gear thresholds

Gear can be registered as shoes or a bike with a nickname, type, brand, model, and notes, tracking accumulated distance against a user-chosen alert between 400 and 1,200 kilometers.

- Only two equipment types are offered.
- The threshold is chosen by the user rather than set by the product.

### O43. Health data setting

A health data setting explains that Strava uses sensor and device data for features like performance insights, with a control over whether that access is allowed.

### O44. Weather and partner content

A weather setting shows Apple Weather data on activities, switchable off, and a partner integrations setting explains that posting with a connected partner can add unique feed content, though no partner was connected on this account.

- Both attach third-party content to an activity without the user adding it.

---

## Goals and progression

Strava's progression surfaces run in parallel: a user-set weekly goal, a profile-completion meter, a fixed trophy ladder, graded achievements, segments, and a large challenge catalogue.

### O45. Weekly goal suggestion

Strava's dashboard carries a suggested-goal surface where the user sets a weekly activity target, sitting in a carousel alongside the streak, instant workouts, and the weekly snapshot.

- Strava doesn't say whether the target is tracked, concluded, or reset.

### O46. Profile completion meter

Strava's profile states it's 80% complete, names a photo upload as the next step, and explains that a photo helps friends recognize the user. Continuing from the photo leads into the subscription pitch, then a contact-sync screen, then a closing confirmation; the badge stays in place until the step is actually completed.

- The percentage is stated without listing what the remaining share consists of beyond the one named step.
- Two further asks, the paywall and the contact sync, sit inside the completion flow rather than being raised on their own.

### O47. Trophy case ladder

Strava's trophy case holds fixed positions for the first, third, fifth, and tenth activities, continuing up to a thousand, with positions not yet reached shown in place alongside their conditions.

- Each position is defined by an activity count rather than distance, time, or sport.
- No benefit beyond the trophy itself was found at any position.

### O48. First trophy immediate

Saving the first activity grants the first trophy immediately and offers a route straight into the trophy case.

- The first position was reachable inside a single 44-second recording.

### O49. Achievements graded and counted

Activities display any achievements won, and profiles carry a running count graded gold, silver, and bronze; one profile showed ten silver medals and another 53 trophies.

- Strava doesn't say what criteria produce an activity-level achievement.

### O50. Best efforts and personal records

A first activity can produce a "new best effort" notification, and the share card composed for it can carry a personal-record badge; a separate best-efforts tab on the profile is locked behind the subscription.

- The record is stated against the user's own history rather than against anyone else.

### O51. Browsable segments

Strava's Segments area offers starred segments and an explore list for the user's area, each showing how many athletes have completed it and total efforts, filterable by length, elevation, and surface.

- Segments exist independently of the user, populated by other people's efforts.

### O52. Three forms of segment standing

Strava's segments surface holds KOMs and CRs for the segments where the user holds the best time, personal records on segments, and a Top 10 list of segments the user ranks in.

- One of the three is measured against the user's own history and two against other people.

### O53. Challenges with rewards

Strava's suggested-challenges block on the dashboard frames challenges around accountability and rewards, listing instances like a 400-minute April running challenge unlocking a Runna trial and several others carrying digital trophies, each showing how many people have joined.

- The success condition of one challenge, an active-days count, is worded ambiguously between a monthly total and a run of consecutive days.

### O54. Challenge detail page

Opening a challenge shows days remaining, the organizing club, terms, the reward, a leaderboard, and a description; joining takes one tap with nothing further to configure.

- The Strava Club organizes most of the featured and promoted challenges.

### O55. Filterable challenge catalogue

Strava's Groups area opens on Challenges, filterable by activity type, elevation gain, moving time, and distance, with sixteen challenges recommended from the user's own activity; creating a custom group challenge requires a subscription.

- Joining a product-run challenge is free; running one is paid.

### O56. Subscription progress features named

Beneath the streak calendar, Strava names four progress features reserved for subscribers: performance predictions, goals, relative effort, and a training log.

- "Goals" is named here as a paid feature while a separate suggested-goal surface exists on the free dashboard.

---

## Access and eligibility

Strava's paywall spans the map, the activity, the profile, and the groups area rather than sitting in one place, and two onboarding questions double as eligibility conditions.

### O57. What's locked

Strava locks route creation, best efforts, several map layers, terrain, 3D view, activity bookmarking, creating a group challenge, personalized stat maps, Beacon for devices, and the subscription management entry in settings; paywall copy additionally names segment leaderboards, advanced training analysis, and the four progress features.

- Each lock is met at the point of use rather than declared in advance.

### O58. Locked layers can't be previewed

Strava's map offers standard, satellite, hybrid, and winter types, plus global, weekly, night, and personal heat maps, places of interest, terrain, and a 3D view; only the global heat map and the ordinary map types are open, and every other layer opens the paywall on tap rather than previewing.

### O59. Free trial is the only route past a lock

Every lock routes to a free trial rather than a one-off purchase of the specific feature.

### O60. Age tied to safety

Strava's birthday screen states keeping younger users safe as one of its uses.

### O61. Gender tied to leaderboards

Strava's gender screen states its answer determines which leaderboards the user appears on.

### O62. Private profiles restrict lists

Some Strava profiles are private. Opening a private profile's following list returns a message stating the athlete isn't following anyone, rather than stating that the list is restricted.

### O63. Clubs public or admin-gated

Creating a club on Strava requires choosing public or private; a private club requires people to request permission, and only admins, not necessarily the creator, can approve new members.

---

## Economy and resources

(No observations in this app.)

---

## Social

Strava's social layer opens before the user has done anything: a brand-new account meets a populated feed, suggested people to follow, and a list of local clubs. Standing, both what other people can see and how the user compares to them, runs through profiles, messaging, and segment rankings, and clubs add their own membership and governance layer on top.

### O64. Suggested follows

Strava's dashboard recommends people to follow. The accounts listed first carry a check mark and the label "fan favorite on Strava" beneath the name, each with follow and remove actions, and three are shown before a larger "local legends near you" group.

- The recommendations run on two separate grounds at once, standing on the platform and proximity to the user.
- The block appears even on a brand-new account with no existing connections.

### O65. The activity feed

Below the follow and challenge blocks, Strava's dashboard shows other athletes' activities headed as recommendations to keep the user motivated. Each item carries the route track, photos or video, distance, elevation gain, time, and any achievements won, plus kudos and comment controls with the counts visible, and scrolling continues into further activities from further users.

- On a new account the feed is populated by recommendation rather than by anyone the user follows.
- Standing, in the form of kudos and achievement counts, travels with the activity itself.
- Muting an activity at save time is expressed against both this feed and a club's own feed.

### O66. Feed configuration

Strava's preferences include a feed ordering setting, a default highlight image choice between a map and a photo for uploaded activities, and a video autoplay toggle.

- The ordering rule is exposed to the user as a setting rather than fixed by the app.

### O67. Profile leads with standing

Strava's profile header shows the profile image, how many people the user follows, the user's location, how many followers the user has, and how many activities the user has recorded. Editing a profile takes a name, a biography, a primary sport, birthday, gender, and weight.

- Three of the four figures on the profile header concern other people rather than the user's own activity.
- The default profile image is a generic character rather than a photo.

### O68. Searching for people

Strava's search splits into two tabs, Friends and Clubs. Friends offers suggested athletes, the user's own contacts, and a QR code, and twenty-one athletes were suggested in the user's local area.

- The three routes to people cover algorithmic suggestion, the user's own address book, and a code handed over in person.

### O69. Syncing contacts

Strava's contacts route tells the user that their friends are already on Strava and invites them to connect to see what those friends are up to, with a button that frames the action specifically as secure. Tapping it raises the system's own permission prompt for contacts access.

- The outcome, that friends are present, is asserted before access is actually granted.
- The button's own wording specifically invokes security for what is an ordinary contacts permission request.

### O70. QR code and invites

A Strava profile can be shared as a link or as a QR code that others scan to follow the user, and a separate control invites people who are not on Strava at all.

- The same surface serves both following someone who already uses the app and recruiting someone who doesn't.

### O71. Weekly figures reset to zero

Strava's profiles lead with this week's distance, time, and elevation. Viewed on a Monday morning, these read zero for every suggested athlete, while a graph beneath the figures shows the same athletes active through the previous months.

- The figure a viewer meets first is the one that has just been reset.
- The longer activity record sits on the same screen, below the reset figures.

### O72. Private profiles

Some Strava profiles are private. Opening the following list of a private profile returns a message stating that the athlete isn't following anyone, rather than stating that the list is restricted.

### O73. Browsing clubs

Strava's Clubs tab lists clubs available near the user, running to dozens or hundreds of entries, including cyclist and runner clubs, and a "popular clubs near you" group showed close to fifty.

- Clubs can be searched by location or by the full sport taxonomy.
- Proximity is the default organizing principle here, the same as it is for athlete suggestions and segments.

### O74. The Strava Club

The Strava Club itself is listed with close to seven million members, and it organizes most of the featured and promoted challenges.

- Strava participates in its own club system as a club rather than standing outside it.

### O75. Creating a club

Creating a club on Strava runs through five steps: choosing the club's sport, choosing up to three tags from a list spanning personal, commercial, employer, and identity groupings such as brand, team, coach led, or fundraising, adding a name, photo, and description, setting it public or private, and setting a location.

- The tag step states specifically that the choice can be changed later.
- Finishing the flow names three next actions to the creator, inviting the community, writing a post, and creating an event, rather than leaving a new, empty club as it is.

### O76. The club page

Strava's club page shows the sport, member count, and type, and offers insights, events, sharing, editing, and adding events, alongside tabs for overview, activities, stats, and posts. Upcoming events and posts written for the club appear on it.

- Editing details and adding events are available to the club's creator.
- Strava doesn't show whether the activities, stats, and insights tabs hold a state that belongs to the club collectively or simply list each member's own individual records.

### O77. Creating a club event

Creating an event for a club takes the sport, timing, whether it recurs, a starting location, whether it's virtual or in person, a description, whether it appears in search and recommendations, an event type of social, workout, or competition, a pace range, and who is allowed to attend.

- The pace range states what a person needs to be able to do to take part.
- Discoverability is set per event rather than for the whole club.
- Attendance is recorded as an explicit state.

### O78. Messaging permissions

Opening messages for the first time introduces the feature and points the user to settings to choose who can message them. The messaging settings offer a toggle for showing when the user is online and four answers to who can message first: anyone, people the user follows, mutual follows only, or no one.

- People who follow the user can be found and messaged through search.

### O79. Segment standing

Local Legends orders the people holding the most overall efforts on a segment over the last 90 days and shows the user's own position among them, while a separate Top 10 list shows which segments the user ranks in the top ten on.

- Local Legends orders by number of efforts rather than by speed, so the measure is frequency of use rather than performance.
- Losing a top position carries its own notification types, named "lost CR" and "lost ratings."

### O80. Challenge leaderboards

A Strava challenge page carries a leaderboard for any single activity and an overall leaderboard across everyone participating, showing pace, distance covered, and completion time. A 100,000-step challenge showed participant ranks running up toward athletes logging close to a billion steps.

- The leaderboard is ordered within the bounds of that one challenge rather than across the whole platform.
- A change in a group challenge's leaderboard carries its own notification type.

### O81. Tagging people in an activity

Strava's save screen invites the user to tag others in the activity using the @ symbol. After saving, a further route lets the user add people who were present but didn't record the activity themselves, or invite people who aren't on Strava at all by sharing a link.

- One control covers all three cases: someone who recorded, someone on Strava who didn't, and someone not on Strava.
- The request is made at the exact moment an activity has just been completed.

### O82. Live location sharing

Strava's Beacon setting lets a user share their location with up to three named safety contacts during an activity, sending a message with location sharing and contacts access granted, with the message text itself chosen by the user. Starting Beacon from the recording screen offers a second route that doesn't require granting contacts access: it opens the phone's own Messages app with a prepared message and link, so the recipient doesn't need to be a Strava user at all.

- Subscribing adds Beacon for connected devices, sharing location from a Garmin watch or an Apple Watch running Strava.

---

## Reach beyond the app

Strava's reach outside the app runs mainly through one partnership, a running-plan product called Runna, alongside brand-run challenges, sharing to outside platforms, and connections to other devices and services.

### O83. Runna as a subscription tier

Strava's onboarding subscription screen offers a combined Strava-plus-Runna plan priced above the plain Strava annual plan, and the "what you unlock" screen attributes two of its five listed benefits, a custom training plan and coach-authored guidance, specifically to that combined tier.

- The partner product is presented as an upgrade inside Strava's own pricing rather than as a separate outside offer.

### O84. Challenge unlocks a Runna trial

Strava's April 400 Minute Run challenge states that logging 400 minutes in the month unlocks a free two-week trial of Runna, and more than 1,128,000 athletes were shown as having joined it.

- It's the only challenge whose reward isn't a digital trophy or badge, since the reward is conditioned on activity done inside Strava rather than on signing up for Runna directly.

### O85. Brand-run challenges

Strava's challenge catalogue includes instances named for outside brands: a Runna Vert challenge, the Hoka Speedgoat 7 Vert Challenge, and the April 5000 x Brooks challenge.

- These sit in the same list and carry the same one-tap join action as the app's own challenges.

### O86. Training plans route to Runna's store listing

Strava's training plans entry in settings opens a Runna-branded surface describing plans built around the user's goals, experience, and schedule, synced with Strava, with a group of popular plans shown. Tapping any plan leaves Strava entirely and opens the App Store listing for Runna.

- The plans themselves are shown in full before the route out is taken.
- The framing names the connection back to Strava.

### O87. Apple Fitness+ promotion

Strava's promotions entry in settings offers up to two free months of Apple Fitness+, stating that product's own price, $9.99 a month after the free period, with a redeem action.

- It's the only promotion for a product outside the Strava-and-Runna pair.

### O88. Sharing a saved activity

Strava offers Instagram, a Strava message, WhatsApp, a text message, an in-app Strava post, and a copied link when sharing a saved activity, using a pre-made design the app supplies rather than a plain screenshot. Taking a screenshot of the activity page instead opens the sharing options directly, with Strava's own branded composition offered in place of the screenshot.

- One of the routes, the in-app post, stays inside the product; the rest leave it.

### O89. Inviting people who aren't on Strava

Strava's route to add others after saving an activity lets the user invite people who didn't record the activity or don't have Strava at all, by sharing a link.

- The invitation is raised at the moment an activity has just been completed, rather than from a dedicated screen elsewhere in the app.

### O90. Device and app connections

Strava's account settings offer a route to connect a device or app, listing fourteen brands, and Garmin and Peloton are named specifically at the end of onboarding as devices whose activities can be uploaded into Strava.

- A separate health data setting governs what those connections are allowed to send.

### O91. Beacon through the phone's own messaging

Beacon's live-location text is sent through the phone's built-in Messages app rather than through Strava's own systems, using a prepared message and a link.

- The recipient doesn't need a Strava account to receive or open it.

### O92. Siri shortcuts

Strava's Siri and Siri Shortcuts setting raises the operating system's own prompt, stating that some Strava data will be sent to Apple to process requests, and shortcuts for frequently performed actions are configured from the phone's own system settings rather than from inside Strava.

---

## Monetization

Strava's monetization runs through an upgrade button always present on the dashboard, nine distinct paywall placements, and terms that are stated differently across screens without being reconciled.

### O93. Upgrade button in the top bar

Strava's dashboard top bar carries a profile, search, message, and notification icon alongside an upgrade button at the centre, coloured differently from every other icon and present on every visit.

### O94. Paywall met at nine points

Strava's subscription screen is reached from onboarding, the upgrade button, the profile-completion flow, routes, best efforts, locked map layers, activity bookmarking, the trophy case after the first trophy, and creating a group challenge.

- Two of the nine placements follow a completed action rather than an attempted one.
- The paywall's copy differs by placement while the underlying offer doesn't.

### O95. Paywall copy matches the surface

Strava words each paywall around what the user was reaching for: the routes paywall names routes and segment leaderboards, the trophy case paywall speaks to stats and performance, and the activity page and streak calendar blocks both speak to progress and goals. Onboarding and the profile-completion flow use a general habits-and-progress framing instead, since neither follows an attempted feature.

### O96. Prices and plans as stated

Strava states its annual plan at $79.99 a year and a combined Strava-plus-Runna plan at $149.99; the plan screen separately frames the same annual plan as a 30-day free trial before the same $79.99 applies, and the web checkout shows an annual subscription at 49.99 euros with nothing billed that day.

- The web price and the in-app price are stated in different currencies, so the two aren't directly comparable from the screens themselves.
- A route to see all plans on the plan screen wasn't opened.

### O97. Web-only checkout

Starting a free trial from Strava's plan screen leaves the app for a browser checkout page that offers Apple Pay as the only payment method and carries no other navigation.

### O98. Three routes weighted unevenly

Strava's plan screen offers a highlighted route to start a free trial, marked as leaving the app, alongside a plainer route to see all plans, with paying inside the app set as plain text beneath rather than styled as a button.

- The route that leaves the app carries the most visual weight; the in-app route carries the least.

### O99. Charge date stated as a calendar date

Strava's plan screen states a specific date the user won't be charged until, and separately promises a cancellation window of at least 24 hours before the trial ends.

### O100. Discounted running-specific offer

Strava's settings screen opens on a highlighted block offering up to 60% off a running-specific product with a four-week free trial, a discount and trial length that don't appear anywhere else in the app.

### O101. Partial-screen trophy paywall

Strava raises a subscription offer covering half the screen, rather than all of it, when the trophy case is entered after the first trophy, leaving the just-earned trophy visible behind it.

- It's the only paywall that doesn't cover the full screen.

### O102. Locked insights below the activity

Strava places a locked section naming subscriber-only results, speed stats, and elevation stats just past an activity's own stats, share, and comment controls.

### O103. Restoring purchases

Strava's account settings carry a restore-purchases option alongside changing email and adding a phone number.

### O104. Trial length and reminder timing stated four ways

Strava describes its trial length four different ways across the app: 30 days in onboarding, "first month" on the routes paywall, a free 30-day trial with a specific charge date on the plan screen, and a four-week trial in settings. The reminder is described once as arriving 28 days in and once as 2 days before the trial ends.

- 30 days, one month, and four weeks are three different periods.
- Which terms actually govern isn't settled by any single screen.

---

## Return triggers

Strava brings users back through an unusually long notification catalogue, a streak that sits above everything else on the dashboard, a weekly reset that touches four different surfaces, and deadlines tied to challenges and events.

### O105. Long, granular notification catalogue

Strava's push notification settings offer individual control over dozens of categories at once, spanning social reactions like kudos and comments, losing a leaderboard position, challenge and club activity, event scheduling, data corrections, and marketing.

- Marketing and subscription messages are requested separately from ordinary product notifications.

### O106. Email on by default

Strava turns email notifications on by default and can be turned off, with no separate opt-in for this channel appearing anywhere in onboarding.

### O107. Streak at the top of the dashboard

Strava places a streak surface directly beneath the top bar, shown as a flame holding a week count that reads zero on a new account, with a line inviting the user to start it and a record button placed beside it.

- The streak is the first thing below the navigation bar, above suggestions, challenges, and the feed.
- Strava doesn't say what breaks the streak, what resets it, or whether any protection exists.

### O108. Twelve-week streak calendar

Strava's streak calendar shows a three-month window of activity rather than just the current period, with a feedback button beneath it asking specifically how satisfied the user is with the feature.

### O109. Post-save return notification

Strava sends a notification after saving an activity inviting the user to check their stats, opening into the best-effort recognition from that activity.

- It fired on a 44-second recording.

### O110. Upload reminders

Strava lists upload reminders in the notification catalogue as their own controllable type.

### O111. Challenge and event deadlines

Strava's challenge pages show days remaining and are bounded to the calendar month; challenge progress, rewards, invites, and event reminders each carry their own notification type.

### O112. Gear distance alerts

Strava lets gear be set to notify the user on reaching a chosen distance, triggered by accumulated activity rather than elapsed time.

### O113. Weekly clock across four surfaces

Strava runs the suggested goal, the weekly snapshot, the profile header, and the streak count on the same weekly unit, resetting every profile's week figures to zero on Monday.

### O114. No rating prompt

Strava never raises an app store rating prompt anywhere in the product, though an in-app feedback questionnaire exists on the streak calendar asking about satisfaction with that one feature.
