# Strava

**Teaser:** Take a screenshot of your own activity, and Strava swaps it out for a branded card of its own.

Strava is where runners, riders and swimmers turn a workout into something worth showing off. You record an activity, and it becomes a small public event: a route map, a burst of stats, kudos from other people, sometimes a trophy. Almost everything else in the app grows out of that one recorded activity, and there's no currency running underneath it: no points, nothing to spend, just your own effort and everyone else's attention. Even before you've recorded a single mile, a brand-new account already opens on a feed full of strangers and a list of clubs waiting to be joined.

---

## System view

Whenever you're about to work out, you open Strava and hit record. While you're moving, it shows your speed, distance, elevation gain and current elevation live, and it pauses itself automatically if you stop for more than a few seconds. Once you finish, you can resume or save; saving is also where you name the activity, tag people in it, add photos, decide who can see it, and choose a map style, all before the record exists anywhere else. After it's saved, that one activity is what everything else in the app reads from: it lands in other people's feeds unless you've muted it, it's checked against your trophy case and your achievement count, it counts toward any challenge you've joined, and it's what gets composed into a shareable card.

Everything else in Strava hangs off that one save. The streak needs you to log another activity to keep its count moving, and the trophies, achievements, and your standing on any segment you cover are all read straight off your recorded activities, along with the challenges and leaderboards built around them. Clubs and the social feed sit a little further out, built from other people's activity rather than just yours, but they're already populated with strangers' activity before you've saved a single ride of your own, so there's always something there to see. The subscription never touches the loop itself; it only locks the parts around it, routes, deeper stats, segment leaderboards, and running your own challenge instead of joining one.

---

## Mechanics

### Profile Completion

**Implementation summary:** Your profile shows a completion percentage and suggests the next item to add.

**How it works.** During onboarding, Strava collects some of your details and uses them to start your profile. The first time you open it, the app shows how complete it is and names the next thing to add, your photo, with a short note explaining that a photo helps your friends recognise you. Adding it takes you through a subscription offer and a prompt to sync your contacts, and at the end Strava tells you that anything can be changed later from your profile.

**Illustration brief.** The profile screen showing the completion state and the named next step, with its explanation open.

**What stands out.** The completion badge holds at its stated level until you complete the one named step.

**Trigger.** Opening your profile for the first time, before every field is filled in.

**What it needs.** A defined set of profile attributes to check against, so the app has something to measure completeness by.

**How it connects.** It sits on the same profile that Achievement and Milestone report their counts on, though nothing else here feeds it or depends on it.

**Worth noticing.** Completing that one named step routes you through a subscription pitch and a contact-sync screen before Strava calls the whole thing finished.

**Screenshots needed:** the profile completion badge and its photo-step explanation; the subscription pop-up and contact-sync screen that follow finishing that step.

### Milestone

**Implementation summary:** Every activity you save moves you up a fixed ladder of trophies, and the first rung arrives after your very first one.

**How it works.** The first time you save an activity, however short, Strava marks it as your first trophy and offers to take you straight into your trophy case. From there, the same ladder keeps going: your third activity, your fifth, your tenth, all the way up to your thousandth, and every rung you haven't reached yet still shows up in the case, with the number of activities it will take to get there. The same shape shows up a second time on gear, where you set your own distance target, between 400 and 1,200 kilometres, and Strava tells you once your shoes or bike reach it.

**Illustration brief.** The trophy case screen, your first position checked off, the third, fifth and tenth shown locked with their conditions, the ladder continuing toward a thousand.

**What stands out.** The first trophy arrives almost instantly, a single 44-second ride was enough to claim it, and the same reward shape reappears on gear, where the threshold is one you set yourself.

**Trigger.** Saving any activity that crosses one of the fixed activity-count thresholds.

**What it needs.** A running count of how many activities you've saved in total.

**How it connects.** The first threshold lines up with Achievement's own celebration moment, though the ladder itself runs independently of the Streak's week count.

**Worth noticing.** Strava shows every rung you haven't reached yet in the trophy case already, each one labelled with exactly how many activities away it is.

**Screenshots needed:** the "welcome to the team" first-trophy pop-up; the trophy case showing crossed-off and locked rungs with their conditions; the gear distance-threshold notification setting.

### Achievement

**Implementation summary:** Certain activities earn you Strava's own graded medals, gold, silver or bronze, that stack up on your profile for good.

**How it works.** Every so often, one of your activities earns you an achievement, and it shows up right there on the activity in your feed, graded gold, silver or bronze. It doesn't disappear once you move on to your next ride or run; instead, it adds to a running count on your profile. One profile we looked at held ten silvers, and another held 53 medals split between gold and bronze. Finishing one of Strava's monthly challenges adds to the same pile, handing you a badge that stays with you the same way.

**Illustration brief.** A profile page showing a running achievement count next to a feed activity displaying a gold, silver or bronze badge on it.

**What stands out.** The count is permanent and visible to anyone who looks at your profile, so it reads as a running scoreboard of your best efforts rather than a one-off congratulations.

**Trigger.** An activity you save earning that grade.

**What it needs.** A record of every activity you've saved, since each one gets checked against the criteria.

**How it connects.** It feeds the same profile that Milestone's trophy case sits on, and challenge completions from Challenge add to the same tally.

**Worth noticing.** Strava grades its medals gold, silver and bronze instead of issuing one flat badge.

**Screenshots needed:** a feed activity displaying an earned achievement badge; a profile page showing the achievement count and mixed medal grades.

### Comparative Rank

**Implementation summary:** Ride or run the same stretch enough and Strava tells you where you stand, as a named rank rather than a place in a list.

**How it works.** On any segment, a repeated stretch of road other people have also covered, Strava can tell you three different things about where you stand: whether you hold the single best time anyone has posted there, whether you're one of the people with the most efforts on it in the last ninety days, or whether you're inside the top ten. Every participant in a challenge you join gets the same kind of treatment, a stated rank, given directly, based on how everyone else in that challenge has done.

**Illustration brief.** A segment screen showing best-overall-time and top-10 standing for a user, alongside a Local Legends callout.

**What stands out.** Two of the three ways Strava states your position, best overall time and most efforts, measure entirely different things, speed versus how often you show up, so a good rank on a road you know well doesn't require being fastest, only persistent.

**Trigger.** Recording an activity that covers a segment, or joining a challenge.

**What it needs.** Other people's recorded efforts on the same segment, or other participants in the same challenge, to compare against.

**How it connects.** Segments are the same surface that Leaderboard's ordered lists run on, and challenge participation is shared with Challenge.

**Worth noticing.** Strava states your position as a named rank, Local Legend or Top 10, rather than as a place in a list.

**Screenshots needed:** the segment surface showing best-overall-time, Local Legends and Top 10 labels; a challenge participant list showing individual ranks.

### Challenge

**Implementation summary:** Strava hands you a running list of month-long challenges, each with a headline count of how many hundreds of thousands of other people have already joined.

**How it works.** Whenever you open the challenges list, you'll find things like completing your first 5K sometime in April, logging 400 minutes of activity this month, or clearing 180 minutes in a single sweat session. Each one states its deadline, its reward and how many other people have already joined, sometimes well over a million, and joining any of them is one tap, with no setup involved. Finish before the window closes and you get a digital trophy, or in one case a two-week trial of Runna. Strava also recommends challenges based on your own recorded activity, sixteen showed up for us, and lets you filter the full catalogue by activity type, elevation gain, moving time or distance. Running your own custom challenge, rather than joining one Strava made, needs a subscription.

**Illustration brief.** A challenge card showing its deadline, its reward, and its join count in the hundreds of thousands or millions, next to a join button.

**What stands out.** The join count is shown on every single challenge, so the decision to join is made next to a number that says how many other people already made the same call.

**Trigger.** Opening the challenges list, or being shown one on the dashboard.

**What it needs.** A defined objective with a start and end date that Strava has already set.

**How it connects.** Completing a challenge is also what produces an Achievement badge, and challenge pages carry their own Leaderboard.

**Worth noticing.** Joining any challenge is free, and only creating and running your own needs a subscription.

**Screenshots needed:** the challenges list showing several cards with join counts; a challenge detail page showing days left, reward and organiser; the filter options.

### Group Membership

**Implementation summary:** Creating a Strava club walks you through five steps, including picking up to three tags that describe what kind of group it is.

**How it works.** When you join a club, you're in right away if it's public, or held at a request until an admin approves you if it's private. Making your own club runs through five steps: you pick the sport, choose up to three tags describing what it's for, a brand, an employee group, a local community, an identity group, among others, add a name, a photo and a description, decide public or private, and set a location. Once you finish, Strava hands you three things to do next: invite people, write a post, create an event. Every club then gets its own page, with a member count, a type, and tabs for its overview, its activities, its stats and its posts.

**Illustration brief.** The five-step club creation flow, focused on the tag-selection step and its list of options.

**What stands out.** The tag list treats a casual local running group, a company's employee team and a brand's own fan club as the same kind of thing, picked from the same thirteen-option list.

**Trigger.** Choosing to create a club, or requesting to join an existing one.

**What it needs.** Nothing beforehand; a club can be created from scratch in five steps.

**How it connects.** Club pages carry their own feed, separate from the main Social Feed, and clubs organise most of Strava's Challenges.

**Worth noticing.** Finishing club creation hands you three things to do at once: invite people, write a post, create an event.

**Screenshots needed:** the club creation flow's tag-selection screen; a club's own page showing its member count, type and tabs; the club directory showing nearby clubs.

### Social Feed

**Implementation summary:** Strava fills your feed with strangers' activities from the moment you open the app, before you've followed a single person.

**How it works.** From the dashboard, scrolling down lands you in a feed of other people's activities, headed "recommended for you" on a brand-new account. Each one shows the route on a map, any photos or video attached, the distance covered, the elevation gained, the time it took, and any achievements it won, plus kudos, comment and share controls right on it. Keep scrolling, and more activities from more people keep loading in.

**Illustration brief.** A feed card showing a route map, distance/elevation/time stats, an achievement badge, and the kudos and comment controls beneath it.

**What stands out.** The feed isn't empty while you build a following; Strava fills it with other people's activities from the very first visit.

**Trigger.** Opening the dashboard.

**What it needs.** A pool of other users' saved, public activities to recommend from.

**How it connects.** Every item in the feed carries the same Achievement badges and Standing that show up elsewhere, and saving your own activity is what populates it for others.

**Worth noticing.** Every feed card carries its own kudos, comment and share controls right on it, so you never have to open an activity to react to it.

**Screenshots needed:** the dashboard feed on a brand-new account, headed "recommended for you"; a single feed card showing its full set of stats and reaction controls.

### Leaderboard

**Implementation summary:** Every challenge you join comes with its own leaderboard, ranking everyone taking part by pace, distance or whatever the challenge measures.

**How it works.** Whenever you open a challenge, there's a leaderboard sitting on it, ranking every participant. One version ranks by a single activity, and another ranks everyone across the whole challenge, showing their pace, the distance they've covered and when they finished. The 100,000 steps challenge, for instance, lists everyone's logged step counts next to their rank.

**Illustration brief.** A challenge leaderboard showing ranked participants with pace, distance and completion times.

**What stands out.** The ranking is scoped to whoever joined that specific challenge, not to Strava's whole user base, so the list stays a manageable size no matter how popular the app gets.

**Trigger.** Joining a challenge that has other participants.

**What it needs.** Recorded activity from everyone else who joined the same challenge.

**How it connects.** It runs on top of Challenge's own join mechanism, and shares its scope with the individual Standing each participant is also given.

**Worth noticing.** Strava keeps two separate leaderboards on the same challenge: one ranking a single activity, another ranking the whole challenge.

**Screenshots needed:** a challenge's leaderboard tab; the 100,000 steps challenge showing ranked step counts.

### Shareable Win

**Implementation summary:** Strava builds a branded, shareable card out of your activity automatically, and even intercepts your own screenshots to offer it instead.

**How it works.** As soon as you save an activity, Strava has already composed a shareable version of it, a card carrying your result (ours read "longest ride ever" with a personal-record badge), dressed in Strava's own branding, with more than one design to choose from. From there you can send it to Instagram, WhatsApp, a text message, a Strava message, a Strava post, or just copy the link. If you try to take your own screenshot of the activity instead, Strava steps in: it opens the same sharing pop-up and offers its prepared, branded card in place of the picture you were about to take.

**Illustration brief.** The branded share card itself, showing a result like "longest ride ever" with a personal-record badge and Strava's branding, next to the screenshot-interception moment.

**What stands out.** Intercepting a plain screenshot and swapping in a branded card means Strava's own design reaches other people even when you never intended to use Strava's share feature at all.

**Trigger.** Saving an activity, or attempting to take a screenshot of one.

**What it needs.** A completed, saved activity with a result worth stating, such as a personal record.

**How it connects.** It draws on the same personal-record state that Achievement and Standing track, and one destination, a Strava post, feeds directly into the Social Feed.

**Worth noticing.** The composed card states your specific result, "longest ride ever" with a personal-record badge, rather than just the activity type.

**Screenshots needed:** the composed share card with its personal-record badge and branding; the sharing pop-up appearing after a screenshot attempt.

### Streak

**Implementation summary:** A flame at the top of your dashboard counts the weeks you've kept your streak alive, and starts the moment you log your first activity.

**How it works.** Right below the top bar, before anything else on the dashboard, sits your streak, a flame with a number of weeks inside it, reading zero until you log an activity to start it, with a record button sitting right next to it. Tapping into the calendar behind it gives you a twelve-week view of your activity alongside the current count.

**Illustration brief.** The dashboard's streak flame reading zero weeks, with the record button beside it, and the twelve-week calendar view behind it.

**What stands out.** Strava counts the streak in weeks on the dashboard and in days on the progress tab.

**Trigger.** Logging and saving an activity.

**What it needs.** Nothing beforehand; the count starts at zero, with the record button to start it sitting right beside the flame.

**How it connects.** It stands alone on this page, sharing its weekly reset with the dashboard's suggested-goal surface, though nothing else here feeds it or depends on it.

**Worth noticing.** The streak sits above the feed, the challenges and every suggestion on the dashboard.

**Screenshots needed:** the dashboard streak flame at zero weeks; the streak calendar's twelve-week view.

---

## Section cards

**Onboarding and first run:** Onboarding asks for your name, birthday and gender first, then ends by taking you straight into recording your first activity.

**Core loop and automation:** Recording, saving and composing an activity for other people to see all happen in the same few taps, with gear, sensors and automatic pausing built in around them.

**Goals and progression:** A trophy case, a streak, and a self-set weekly goal all track your activity at once, while Strava's own subscription pitch calls one of those same things, goals, a paid feature.

**Access and eligibility:** Routes, deeper stats, segment leaderboards and running your own challenge are all locked, each one met and explained at the exact moment you try to use it.

**Social:** A brand-new account opens on a feed of strangers, a list of nearby clubs and suggested people to follow, all before you've recorded a single activity of your own.

**Reach beyond the app:** A partner training product is sold as an upgrade tier, and a competing fitness subscription gets its own promotion inside Strava's own settings.

**Monetization:** The subscription is pitched nine separate times across the app, its price stated differently depending on whether you're paying through the web or through the App Store.

**Return triggers:** A notification exists for nearly everything Strava tracks, from losing a leaderboard spot to a friend joining.

---

## Onboarding and first run

Onboarding takes you from the first launch carousel through account creation, a long run of profile questions, a first subscription pitch, and straight into recording your first activity. Anything you want to change, you change afterwards in the profile editor.

### O1. The welcome carousel

The first time you open Strava, you land on a carousel of four screens that scroll through on their own: tracking your active life, making progress on goals, getting motivation from other people, and routes that never run out. Your two choices are to join for free or log in.

### O2. Signing up

Choosing to join gives you three ways in: Google, Apple, or an email address.

### O3. Getting your code

After you submit your email, Strava tells you a code is on its way and puts an "open email app" button on the same screen.

### O4. The tracking prompt, early

Right after you enter that code, the first thing that appears is the system prompt asking to track your activity across other apps and websites.

### O5. Your name, and a public default

Strava asks for your name so your friends can find you, and on the same screen tells you your profile is public by default.

### O6. Welcomed by name

The next screen already greets you by the first name you just typed in.

### O7. Why it wants your birthday

Strava asks for your birthday and gives three reasons up front: performance analysis, filtering which leaderboards you see, and keeping younger users safe.

### O8. Gender decides your leaderboards

It asks for your gender too, and says directly that the answer decides which leaderboards you'll appear on.

### O9. Choosing a sport, first look

It asks what activities you like doing, framed as a preview of what's coming, lists more than thirty sport types, and lets you skip straight past without picking anything.

### O10. 150 million people, mid-flow

Between two of the data-collection questions sits a screen that carries one claim: that you're joining a community of more than 150 million active people.

### O11. What you're here for

It asks what you plan to use Strava for and lets you pick as many reasons as apply, compete with others, connect with active people, build a habit, explore new places, train for something, or just maintain your health, and tapping any one of them reveals a line about a specific feature tied to that reason. This screen states 48 supported sports, a different number than the "over 30" from the sport-type screen just before it.

### O12. Declaring your fitness level

You're asked to place yourself on a four-step ladder, from total beginner to professional athlete, purely by your own judgment.

### O13. Corrections come later, in the profile editor

While you're going through onboarding, each screen leads on to the next. Anything you want to correct, you change afterwards in the profile editor, which carries your name, a biography, your primary sport, birthday, gender and weight.

### O14. A privacy default, stated

A privacy screen tells you Strava will hide the start and end points of your activities by default, and that twelve separate privacy controls exist covering who can see your profile and your activities.

### O15. What your shared data powers

Another screen explains that the activity data you and everyone else shares powers community features like the Global Heatmap, and that you can stop sharing it later from settings.

### O16. The first paywall, early

Before you've recorded anything, Strava shows you a subscription screen: $79.99 a year on its own, or $149.99 a year bundled with the training app Runna. A 30-day free trial unlocks every feature, and Strava tells you upfront that you'll get a reminder 28 days in and be charged $79.99 in 30, unless you skip, which you can do immediately.

### O17. What the subscription unlocks

A second screen lists exactly what paying gets you: a custom training plan and expert coaching, both credited to Runna rather than Strava itself, plus estimated race finish times, suggested routes, and deeper workout analysis.

### O18. Priming the permission prompt

Before the system asks whether you'll allow notifications, Strava shows you its own screen first, previewing what a notification will look like and telling you directly to tap allow on the next step.

### O19. Finding friends, mid-onboarding

Onboarding includes its own friend-finding step: a search that surfaces people near your location, plus a set of well-known athletes to follow, framed around giving and receiving kudos. You can move on without following anyone.

### O20. What you're expected to do now

The last onboarding screen spells out what it expects from you next: upload activities, compete with friends, build a community, and have fun, all in one line.

### O21. Straight into recording

Onboarding ends by taking you straight into recording, offering to connect a Garmin, Peloton or other device instead if you'd rather upload than record in-app. Choosing to record opens the recording screen directly and asks for location and fitness-activity permissions.

---

## Core loop and automation

Recording an activity, saving it and composing it for other people all happen in the same short run of screens, with gear, sensors and automatic pausing sitting around the edges of that loop.

### O22. The five-tab layout

Strava's bottom navigation holds five destinations: Home, Maps, Record, Groups and You, with Record sitting dead centre.

### O23. Choosing a sport to record

Tapping Record opens your current location on a map alongside a sport selector grouped into foot sports, cycle sports, strength sports, racquet sports, water sports, winter sports, team sports and more, with a "your top sports" shortcut at the very top holding whatever you pick or do most.

### O24. Before you start recording

Before you start, the screen lets you adjust map layers, shows which nearby areas other people have already covered, and offers a "stay safe" option that texts your live location to someone. Adding a route works; building a new one needs a subscription.

### O25. Recording settings

Recording settings cover audio cues, whether the screen stays unlocked, automatic pausing, sending your live location, and connecting a heart rate sensor over Bluetooth.

### O26. What you see while recording

Once you start recording, a full screen tracks your speed, distance, elevation gain and current elevation live, pausing itself automatically if you stop moving for a few seconds. You can pause it yourself too, or minimise it.

### O27. Finishing, and a default name

Finishing offers you the choice to resume or save, and if you save, Strava pre-fills a name for you based on the time of day, for example "Morning Ride" for an early bike ride.

### O28. Composing the save

The save screen is where the activity gets built for other people to see: you can name it, tag people in it with an @ symbol, add photos and videos, and change the map's style, though a personalised stat map on that image needs a subscription.

### O29. Photo and video limits

When you add a video, Strava tells you it will trim anything over 30 seconds down to the first 30. You can add as many photos and videos as you like.

### O30. Tags and how it felt

You can tag the activity, race, a cause, a workout, recovery, a commute, with a pet, with a kid, and separately rate how it felt: easy, moderate or max effort.

### O31. Notes only you see

A private notes field on the save screen is visible to you and no one else.

### O32. Adding gear on the fly

If the activity used equipment you haven't registered yet, you can add it right there on the save screen instead of setting it up beforehand.

### O33. Who sees this activity

At save time you choose who can see the activity, everyone, followers only, or just you, hide specific details like calories, speed or start time, and can mute it from the home and club feeds while it still stays on your own profile.

### O34. Your first save, celebrated

Saving your very first activity plays a "nice work" animation, then a pop-up welcoming you to the team and crediting you with kudos for logging it, offering a route straight into your new trophy case.

### O35. The activity page's stats

Your saved activity leads with six figures, distance, elevation gain, moving time, average speed, max elevation and max speed, and tapping any of them scrolls you into a fuller block with more detail. Below all of it sits a locked section promising smarter insights with a subscription.

### O36. Replaying the route

A play button on the activity replays your movement across the route you took.

### O37. Editing or deleting an activity

A three-dot menu on any activity lets you add media, edit it, crop it, edit the map's visibility, save it as a route, refresh it, or delete it outright. A separate bookmark control opens the subscription screen instead.

### O38. Adding activity by hand

A plus button on the You tab lets you create a post, add a photo, or log an activity manually, one you didn't record through the app at all.

### O39. One-tap instant workouts

The dashboard suggests instant workouts you can start with one tap, like a 30-minute brisk walk, each carrying its own duration and stated purpose.

### O40. Workout plans, behind a trial

A separate Workouts tab offers four kinds of plan: maintain, build, explore or recover, and tapping any of them shows a full card, the activity, a difficulty, an estimated time, before ending on a "start free trial" button.

### O41. Stats by sport

A statistics screen tracks running, cycling and swimming separately, each showing your averages for this week, this year, and all time.

### O42. Tracking your gear

You can register shoes or a bike as gear, giving each a nickname, a brand and a model, and set a distance, anywhere from 400 to 1,200 kilometres, at which Strava will tell you it's been reached.

### O43. Health data permissions

A separate setting governs whether Strava can use health data like heart rate from connected sensors, devices or apps, used to power features like performance insights.

### O44. Weather and partner content, automatic

Weather, powered by Apple Weather, attaches itself to every activity automatically and can be switched off for all of them at once. Partner integrations work the same way: when you post with a connected partner, they can add their own content to the feed item without you doing anything.

---

## Goals and progression

A trophy ladder, graded achievements, a browsable layer of segments and a self-set weekly goal all run alongside each other here, with Strava's own paywall copy naming some of the same territory as a paid feature.

### O45. Setting a weekly goal

The dashboard carries a suggested-goal block where you set how many activities a week you want to complete, sitting in a carousel alongside the streak, instant workouts and your weekly snapshot.

### O46. The profile completion meter

Your profile states it's 80% complete and names your photo as the next step, with a question mark explaining why uploading one helps friends recognise you. Adding it takes you through the subscription pop-up, then a prompt to sync your contacts, before you're told you're finished.

### O47. The trophy ladder

Your trophy case holds fixed positions for your first, third, fifth and tenth activities, continuing all the way to your thousandth, with every position you haven't reached yet shown in place alongside what it will take to get there.

### O48. Your first trophy, instantly

Saving your first activity, even a 44-second one, is enough to claim the first position on that ladder.

### O49. Graded achievements

Achievements show up on the activities that earn them and add to a running count on your profile, graded gold, silver or bronze. One profile holds ten silver medals; another holds 53, split between gold and bronze.

### O50. Personal records, named

A notification after your first activity can read "new best effort, your longest ride ever," and the shareable card composed from that activity carries a personal-record badge. A dedicated "best efforts" tab on your profile is behind the paywall.

### O51. Browsing segments

Segments are named stretches of road you can star to track, each showing how many athletes have completed it and how many total efforts have been logged on it, and you can filter them by length, elevation or surface.

### O52. Your standing on a segment

Your own position on any segment is tracked in three ways: KOMs and CRs for where you hold the single best time, your personal records against your own history, and a Top 10 list for segments you rank in the top ten on.

### O53. Suggested challenges

A challenges block on the dashboard frames itself around accountability and rewards, and lists things like logging 400 minutes in April to unlock a Runna trial, with more than 1.1 million people already joined, or completing a first 5K by month's end for a digital trophy, alongside a dozen more.

### O54. Inside a challenge page

Opening a challenge shows how many days are left, which club organised it, its terms, its leaderboard and what finishing it earns you. The featured one asks for a first 5K run sometime in April; joining it takes a single tap.

### O55. Filtering and creating challenges

The challenges list can be filtered by activity type, elevation, time or distance, and sixteen were recommended to you based on your own recorded activity. Starting your own custom challenge with friends, rather than joining one Strava made, needs a subscription.

### O56. What the paid tier adds to progress

Beneath the streak calendar, a block names four things a subscription adds: performance predictions, goals, relative effort and a training log. A free suggested-goal block also sits on the same dashboard.

---

## Access and eligibility

A set of features sits behind the subscription, each one met and explained at the point you try to use it. Two of the earliest onboarding questions also decide specific features.

### O57. What's locked

Behind the subscription sit route creation, best efforts, several map types and heat maps, terrain, the 3D map view, bookmarking an activity, creating a group challenge, the Active challenges tab, personalised stat maps, Beacon for devices, and managing your subscription itself. Paywall copy also names segment leaderboards, advanced training analysis, performance predictions, goals, relative effort and a training log.

### O58. Map layers, locked outright

The map offers standard, satellite, hybrid and winter types, plus weekly, night and personal heat maps, terrain and a 3D view. The standard types and the global heat map open; every other one goes straight to the paywall.

### O59. Every lock leads to a trial

Every lock leads to the same free-trial offer; features aren't sold separately.

### O60. Age as a safety condition

Your birthday is collected partly as a safety condition, to keep younger users safe, alongside its other stated uses.

### O61. Gender and leaderboard placement

Your gender answer is stated to decide which leaderboards you show up on.

### O63. Public and private clubs

Clubs are either public or private; joining a private one means requesting permission and waiting for an admin to approve you.

---

## Economy and resources

(no observations in this app.)

---

## Social

A brand-new account opens on a feed of strangers, a list of nearby people and clubs to follow, and a full set of standings against other athletes, all before you've recorded anything of your own.

### O64. Suggested people to follow

A follow block on the dashboard recommends people to you, leading with accounts marked "fan favorite on Strava," followed by a group of local legends near you, all on a brand-new account, before you've connected with anyone.

### O65. The home feed

Below the follow and challenge blocks, the dashboard scrolls into a feed of other people's activities headed "recommended for you," each showing its route, any photos or video, its stats, its achievements, and kudos and comment controls, with more activities loading as you scroll.

### O66. Configuring your feed

Preferences let you set how the feed is ordered, whether uploads default to showing a map or a photo, and whether video autoplays.

### O67. Your profile, social-first

Your profile leads with your photo, how many people you follow, your location, how many followers you have, and your total activity count, three of those four figures being about other people.

### O68. Finding people

Search splits into Friends and Clubs. Friends offers suggested athletes, your phone contacts, and a QR code, and one search turned up twenty-one suggested athletes nearby.

### O69. Syncing contacts

The contacts route tells you your friends are already on Strava before you've connected anything, and asks you to "connect securely."

### O70. Inviting by QR code or link

Your profile can be shared as a link or a QR code for people to follow you directly, and a separate control invites people who aren't on Strava at all.

### O71. Weekly figures, reset Monday

Every profile leads with this week's distance, time and elevation, and on a Monday morning that reads zero for every account, with the longer activity history sitting further down the same screen.

### O62. Private profiles

A private profile can still be opened and identified, but the lists behind it come back closed: opening the following list, for instance, returns "this athlete is not following anyone". Twelve separate privacy controls cover who can see your profile, activities, flybys, local legend status and more.

### O73. Finding clubs nearby

Clubs are listed by how close they are, searchable by location or sport, and one search returned close to fifty popular clubs nearby.

### O74. The Strava Club itself

Strava runs its own club, listed with almost seven million members, and it's the club that organises most of the featured and promoted challenges.

### O75. Creating a club

Creating a club runs through five steps: the sport, up to three descriptive tags (options include brand, employee group, local community, and identity group), a name, photo and description, public or private, and a location. Finishing hands you three things to do next: invite people, write a post, create an event.

### O76. A club's own page

Every club's page shows its sport, member count and type, plus tabs for its overview, activities, stats and posts, and carries its own upcoming events and posts.

### O77. Creating a club event

Creating an event for a club takes the sport, timing, whether it recurs, a location, whether it's virtual, a description, a pace range, and who's allowed to attend, and once created it shows who's hosting, who's going, and lets it be shared.

### O78. Messaging permissions

Messaging lets you choose who can start a conversation with you: anyone, people you follow, mutual follows only, or no one at all.

### O79. Local Legends and Top 10

Local Legends ranks who's logged the most efforts on a segment over the last ninety days; Top 10 shows which segments you rank in the top ten on. Segment leaderboards themselves are named in paywall copy as a subscription feature, and losing a top spot has its own notification.

### O80. Challenge leaderboards

Challenge pages carry a leaderboard for the whole challenge and for individual activities within it. The 100,000-steps challenge, for instance, ranks everyone by steps logged, some entries running close to a billion steps.

### O81. Tagging people in an activity

You can tag people in an activity with an @ symbol, and after saving, a separate "add others" option covers people who were there but didn't record it, or aren't on Strava at all, by sharing a link.

### O82. Sharing your location with Beacon

Beacon lets you share your live location during an activity with up to three chosen contacts. From the recording screen you can also send the same kind of share through the iPhone's own Messages app, without giving Strava access to your contacts at all. Sharing from a connected device instead needs a subscription.

---

## Reach beyond the app

A partner training product runs through several parts of the app, and one outside competitor gets a promotion of its own inside Strava's own settings.

### O83. Runna, sold as a tier

The Strava plus Runna plan, at $149.99 a year, bundles a partner training app in as an upgrade tier, crediting it with the custom training plan and coaching content on the "what you unlock" screen.

### O84. A challenge that pays out a trial

One challenge, log 400 minutes in April, unlocks a free two-week Runna trial instead of a trophy, and more than 1.1 million people had joined it.

### O85. Branded challenges

Some challenges are run with outside brands by name, Runna, Hoka and Brooks all had their own, sitting in the same list and joined the same way as Strava's own.

### O86. A settings route to another app

A training-plans entry in settings opens a full "Runna by Strava" screen showing a set of plans, and tapping any of them leaves Strava entirely for Runna's own App Store listing.

### O87. Promoting a competitor

Settings also promotes Apple Fitness+ directly, up to two free months, then $9.99 a month, with its own redeem button.

### O88. Sharing outside Strava

Sharing an activity offers Instagram, WhatsApp, a text message, a Strava message or post, and a copy-link option, using a pre-composed, branded design. Taking a screenshot of the activity instead opens the same sharing pop-up, offering that branded version in place of your screenshot.

### O89. Inviting people who aren't on Strava

The same "add others" flow after saving an activity can invite people who don't have Strava at all, by sharing a link with them.

### O90. Connecting other devices

Fourteen device and app brands can be connected to your account, and Garmin and Peloton are named specifically at the end of onboarding as ways to upload activity without recording inside Strava.

### O91. Beacon without granting contacts

Sharing your Beacon location through the iPhone's own Messages app works without granting Strava access to your contacts, and the recipient doesn't need to be a Strava user either.

### O92. Strava through Siri

A Siri setting asks permission to send some of your Strava data to Apple so Siri can act on requests, and shortcuts for frequent actions are then set up in the phone's own system settings.

---

## Monetization

The subscription meets you nine separate times across the app, worded differently at each one, and its terms are stated differently from one placement to the next.

### O93. The upgrade button

An orange upgrade button sits at the centre of the top bar on every visit to the dashboard, the only coloured element there, and tapping it opens the paywall.

### O94. Nine ways to hit the paywall

The subscription screen comes up from nine different places: onboarding, the upgrade button, finishing your profile, routes, best efforts, locked map layers, bookmarking an activity, the trophy case right after your first trophy, and creating a group challenge. Two of those nine come right after you've just done something, not while you're trying to use a locked feature.

### O95. Paywall copy, rewritten per screen

Each paywall is worded for wherever it appears: onboarding and profile completion lean on habit-building language, the routes paywall names routes and segment leaderboards specifically, and the trophy case version promises deeper stats right after you've just earned something.

### O96. The prices, as stated

The stated prices run: $79.99 a year alone, $149.99 a year with Runna bundled in, the same $79.99 plan framed on the plan screen as a "save 44%" trial offer, and, on the web checkout, an annual plan at 49.99 euros. The in-app purchase sheet through the App Store also shows $79.99 a year.

### O97. Checking out on the web

Starting the free trial takes you out of the app entirely, to a web checkout on strava.com that offers Apple Pay as its only payment method and shows just the payment itself.

### O98. Three routes, weighted differently

The plan screen offers three routes with three different visual weights: "see all plans" as an ordinary button, "start a free trial" highlighted and marked as leaving the app, and "pay in app" set as plain, unstyled text beneath both.

### O99. The exact charge date

The plan screen states the exact calendar date you'll be charged, and separately reminds you to cancel at least 24 hours before the trial ends.

### O100. A discount inside settings

Settings opens on a highlighted offer for "Strava Run," up to 60% off with a free four-week trial, sitting right above the plain "explore and manage subscription" link.

### O101. A paywall over half the screen

The paywall shown right after your first trophy covers half the screen, leaving the trophy you just earned visible behind it.

### O102. A lock at the bottom of the activity

Below your stats, comments and likes on a saved activity sits a locked block promising deeper results and stats with a subscription.

### O103. Restoring a purchase

Account settings carries a restore-purchases option, alongside changing your email and adding a phone number.

### O104. Trial terms, stated four ways

The trial length is stated differently depending on where you read it: 30 days at onboarding, "first month" on the routes paywall, 30 days again on the plan screen, and four weeks in settings. The reminder timing is stated as 28 days in at one point and two days before the end at another.

---

## Return triggers

Notifications exist for nearly everything Strava tracks, and your streak sits first on the dashboard, right below the top bar.

### O105. Dozens of notification types

Push notification settings break down into dozens of individual types: kudos and likes, comments, losing a leaderboard spot, upload reminders, a friend joining, new followers, challenge progress, club activity, event reminders, data corrections, and separate marketing and subscription tips, each one switchable on its own.

### O106. Email, on by default

Email notifications are switched on from the start; onboarding asks only about push notifications.

### O107. The streak, front and centre

Right below the top bar, before anything else on the dashboard, sits your streak: a flame with a number of weeks in it, reading zero until you log an activity to start it, with a record button right beside it.

### O108. The streak calendar

Opening the streak's calendar shows a twelve-week view of your activity, your current streak count, and a feedback button asking how satisfied you are with the feature specifically.

### O109. A notification after saving

After saving an activity, a notification arrives on your home screen telling you to check your stats, and opening it can reveal a new personal best, in one case fired by a 44-second ride.

### O111. Deadlines bring you back

Challenge pages count down the days left, bounded to the calendar month, and challenge progress, rewards, invites and event reminders each carry their own notification type.

### O112. Gear distance alerts

Gear can be set to notify you once it reaches a distance you choose yourself, between 400 and 1,200 kilometres.

### O113. One clock, four places

The same weekly clock runs the suggested goal, the weekly snapshot, the profile header and the streak count, and it resets to zero.
