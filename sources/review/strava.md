# Strava: case study redraft under the new lens

**For Lav only: the spine.** Strava is built to get you to record your workouts, save each one and show it to other people, which its own closing line to a new user puts as uploading activities, competing with friends, building a community and having fun. In return it gives you recognition for the effort (kudos from other people, trophies, graded achievements, a named personal best) and a record of your own progress to watch (a trophy ladder, a streak counted in weeks, a goal you set). The motivations it works on are belonging (it frames exercise as not always a solo sport), progress, and status (ranks on named stretches and inside challenges), with a notification for losing a top place as its one nod to fear of loss.

Draft for review. Nothing here has been written to `sources/content/strava.md`, `sources/coverage/strava.md` or any other file. Source of facts: `sources/analyses/strava.md` only. Written to `sources/voice-guide.md` as it now stands (the lens, narrative not inventory, respect the reader, headlines and calls to action, word rules). The current approved copy was read as a worked example of the register, not copied: it was written before the lens.

## At a glance

- **Applied tags in the analysis (10):** Streak, Challenge, Achievement, Milestone, Leaderboard, Comparative Rank, Social Feed, Group Membership, Shareable Win, Profile Completion. All ten sit at "directly observed", so all ten clear the publishing bar.
- **Tag accounting:** every one of the ten gets a block, so the coverage list takes no tag. Profile Completion, Leaderboard and Streak are the thinnest, and each survives the friend test on what Strava actually does (a chained set of asks behind one named step; a ranking bounded to the people who joined, placed by what you said in onboarding; a count placed first on the dashboard that can only move if you come back). Nothing held back.
- **Block set:** unchanged from the current page (10 blocks, same order). Two blocks get an optional Title: Milestone is titled Trophy case, and Group Membership is titled Clubs. Both are Strava's own names for the thing.
- **Observations:** 114 in the analysis. 113 rewritten, 1 dropped (O114, absence only). IDs are kept and none is reused. Nothing merged, split or reordered.
- **Sections:** Economy and resources is empty. The other eight have pages.
- **Moved:** O62 (private profiles) is filed under Social in the current content. The analysis places it in Access and eligibility, between O61 and O63, so it goes there. O72, which the current content folded into O62, has its own entry again in Social.

---

# PART A: the summary page

## Teaser

Current: "Take a screenshot of your own activity, and Strava swaps it out for a branded card of its own."

Proposed: "Strava asks you to record your workouts, then hands each one back as something other people can cheer for and compare."

Reason: the current line is one true detail, but it says what Strava does to a screenshot, not what it asks of you and gives you. It also says Strava "swaps it out", where the analysis has the branded card offered in place of the screenshot.

## Intro

Current: "Strava is where runners, riders and swimmers turn a workout into something worth showing off. You record an activity, and it becomes a small public event: a route map, a burst of stats, kudos from other people, sometimes a trophy. Almost everything else in the app grows out of that one recorded activity, and there's no currency running underneath it: no points, nothing to spend, just your own effort and everyone else's attention. Even before you've recorded a single mile, a brand-new account already opens on a feed full of strangers and a list of clubs waiting to be joined."

Proposed:

Strava is built to get you to record your workouts, save them and show them to other people. In return it gives you recognition: kudos from friends, trophies, graded achievements, and a place among other athletes on named stretches you ride or run. It also gives you your own record to watch, with a streak and a goal. Belonging, status and progress are what it speaks to, and a subscription adds planning and deeper analysis around them.

Reason: the current intro opens on a verdict ("worth showing off") and ends on what a new account shows, which is a fact for the Social Feed block, not the spine. The no-currency point moves into How it fits together, where it explains what Strava gives back. No levels, prices, timings or counts.

## How it fits together

Current (headed System view): "Whenever you're about to work out, you open Strava and hit record. [...] Everything else in Strava hangs off that one save. [...] The subscription never touches the loop itself; it only locks the parts around it, routes, deeper stats, segment leaderboards, and running your own challenge instead of joining one."

Proposed:

Whenever you set out to run, ride or swim, Strava is built to be what you record it with. You choose a sport and record, and when you finish you decide how the activity will look to everyone else: its name, who's tagged in it, its photos, who can see it. That save is the moment the rest of the app is built around, because it turns an effort of yours into something other people can respond to. What comes back is aimed at different motivations. Kudos and comments speak to belonging, trophies, achievements and a streak to progress, and ranks on named stretches and inside challenges to status. It is recognition and a record, never something you can spend.

The rest of the app serves that loop from different directions. The feed, suggested people and clubs give your activity an audience, and on a new account they're already there. Challenges give recording a shared goal with a deadline, and the leaderboards inside them put you among the people doing it with you. Segments do the same for the stretches near you, and Strava has a notification for when you lose a place on one. The streak asks you to come back in a later week. The free app records, shows and shares, and a subscription adds the explaining, planning and predicting around it.

Reason: the loop is told as it happens to you, then each other mechanic is placed by the motivation it serves, not in the order of the screens. "The subscription never touches the loop" is cut because the analysis has the save screen and the activity page carrying locked controls, so the claim was wrong as well as outside the lens. No complexity label, no counts.

---

## Mechanics

### Profile Completion

**Implementation summary:** Strava shows your profile as nearly complete and names one next step, your photo, explained by friends being able to recognise you.

**How it works.** The first time you open your profile, Strava shows it as 80% complete and names the next thing to add: your photo. A question mark beside the step opens a short explanation, saying that a photo shows your friends it's you and that you control who can see it. Moving on from that step leads through a subscription offer and a prompt to sync your contacts, so your friends know you're here, before a closing message says you can update anything later from your profile page. Strava is asking you for a profile your friends can recognise, and the reason it gives is theirs, not its own. What it offers back is a profile that's nearly done, with a single named step left.

**Illustration brief.** The idea: a profile that is nearly done, with one named step and a reason for it. Facts it may draw on: the profile stating it is 80% complete; the photo named as the next step; the question-mark explanation (a photo shows friends it's you, and you control who sees it); the steps that follow in order, a subscription pop-up, a contact-sync screen, a closing message that anything can be updated later.

**What stands out.** The note beside the photo step covers who gets to see the photo as well as why to add it. The 80% stays where it is for as long as the profile is incomplete.

**Trigger.** Opening your profile before every field is filled in.

**What it needs.** A set of profile details to measure against, so the app can say how complete the profile is and which detail comes next.

**How it connects.** It sits on the same profile where Milestone's trophy case and Achievement's count are kept.

**Worth noticing.** Strava places a subscription offer and a contact-sync prompt inside the flow that finishes your profile.

**Screenshots needed:** the profile with its completion statement and the photo-step explanation open; the subscription pop-up and the contact-sync screen that follow the photo step.

### Milestone

**Title:** Trophy case

**Implementation summary:** Strava turns the number of activities you've saved into a ladder of trophies, and welcomes you onto it with your first save.

**How it works.** The first time you save an activity, however short, an animation plays and a pop-up welcomes you to the team, congratulating you with kudos on logging your first activity. A trophy is granted, and the pop-up offers to take you into your trophy case. The case sits at the bottom of your profile. It holds positions for your 1st, 3rd, 5th and 10th activity, and a longer view shows the ladder continuing up to a thousand. Positions you haven't reached are already in the case, each with what it will take. Every position depends on how many activities you've saved, not on distance, time or sport. Strava is asking you to keep saving activities, and gives you a welcome, a trophy and a next step in view, which works on progress and on being counted in. Gear uses the same shape: you choose a distance for your shoes or bike, from 400 to 1,200 kilometres, and Strava tells you when the activities that name that gear add up to it.

**Illustration brief.** The idea: a ladder whose first position is already checked. Facts it may draw on: the trophy case with the first position taken; the 3rd, 5th and 10th shown in place with their conditions; a view of the ladder continuing toward a thousand; the first-save pop-up welcoming you to the team.

**What stands out.** The first trophy comes with the first save, and a single 44-second recording was enough to claim it. On the ladder Strava sets every threshold, and on gear you set it yourself.

**Trigger.** Saving an activity that reaches one of the fixed counts, or your gear reaching the distance you set.

**What it needs.** A running count of your saved activities and, for gear, the gear named on your activities and a distance you've chosen.

**How it connects.** It counts the same saved activities that Achievement, Challenge and Streak read from, and its trophy case sits on the same profile as Achievement's count.

**Worth noticing.** Strava shows the positions you haven't reached in the trophy case already, each with its condition.

**Screenshots needed:** the first-trophy pop-up; the trophy case showing the reached and unreached positions with their conditions; the gear distance-alert setting.

### Achievement

**Implementation summary:** Strava grades the achievements an activity earns as gold, silver or bronze, shows them on the activity, and keeps a count on your profile.

**How it works.** You meet achievements in 2 places: on the activity that earned them, and on the profile that holds the tally. Feed activities show the achievements won on them alongside distance and time, and after you record, your own dashboard shows the achievements against that activity. Each is graded gold, silver or bronze, and every profile carries a count of the achievements held, so anyone who opens yours sees it. Finishing a challenge also gives you something to hold, a digital trophy or a badge, and personal bests are named too: after a first ride, a notification called it your longest ever. Strava is asking you to record activities worth marking, and gives you recognition that other people can see and that stays on your profile, which speaks to status and to progress.

**Illustration brief.** The idea: a grade that travels with the activity and a count that stays behind on the profile. Facts it may draw on: a feed activity showing a gold, silver or bronze achievement beside its distance and time; a profile showing a count of achievements held, in mixed grades; a notification naming a longest ride ever.

**What stands out.** The grade is shown on the activity itself, so it travels with the activity into other people's feeds. The count stays on your profile after the activity that earned it has moved down the feed.

**Trigger.** Saving an activity that earns an achievement, or finishing a challenge.

**What it needs.** A saved activity for Strava to check, and a profile to hold the count.

**How it connects.** Challenge completions add to what you hold, Social Feed shows the grades on each activity, and Shareable Win builds its card from the personal best that Achievement names.

**Worth noticing.** Strava grades its achievements gold, silver and bronze rather than issuing one flat badge.

**Screenshots needed:** a feed activity showing an earned achievement; a profile showing the achievement count in mixed grades.

### Comparative Rank

**Implementation summary:** Strava places you on local segments by best time or most efforts, and can notify you when you lose a top place.

**How it works.** Segments are named stretches of road that other people have also covered, and each name was given by a person. You can star the ones you want to follow or browse those near you, and Strava then holds your standing on them in 3 forms. KOMs and CRs are the segments where you hold the best overall time. Local Legends ranks people by how many efforts they've made on a segment over the last 90 days, and shows where you stand among the people doing well locally. Top 10 collects the segments where you're in the top 10. Inside a challenge, every participant has a rank too. Strava is asking you to go back to the same stretches, and offers a position among other people in return, which works on status. It also has notification types for losing a top place.

**Illustration brief.** The idea: one stretch of road, 3 different ways of standing on it. Facts it may draw on: a segment screen with a best overall time (KOM or CR), a Local Legends standing based on efforts over the last 90 days, and a Top 10 standing; a challenge participant list with a rank beside each name.

**What stands out.** Best overall time and most efforts measure different things, speed and showing up. Your position is held against other people, so it can change without anything you've done, and Strava has notification types for losing one.

**Trigger.** Riding or running a segment, or joining a challenge.

**What it needs.** Other people's efforts on the same segment, or other participants in the same challenge, to be placed against.

**How it connects.** Inside a challenge, the ranks it gives are the ones Leaderboard lists.

**Worth noticing.** Strava measures Local Legends by the number of efforts rather than by speed.

**Screenshots needed:** the segments area showing KOMs and CRs, Local Legends and Top 10; a challenge participant list showing individual ranks.

### Challenge

**Implementation summary:** Strava offers month-long challenges with a stated goal, a reward and a count of everyone who has joined, and joining takes a single tap.

**How it works.** Challenges meet you on the dashboard, presented as a way to make accountability easier and more fun, with rewards at the end. Each one sets the goal for you: log 400 minutes this April, or complete a first 5km run. Joining takes a single tap and nothing is configured, because what counts is the activity you'd record anyway. Each challenge shows how many people have joined, in some cases over a million, and its page adds how many days are left, which club organises it and what you get for finishing. Most rewards are a digital trophy, and one is a 2-week trial of Runna. Strava also recommends challenges from your own recorded activity and lets you filter the list by activity type, elevation gain, moving time or distance. Joining is free, while running a custom challenge of your own needs a subscription. Strava is asking you to record more inside a window, and gives you a ready-made goal, other people doing it alongside you and a reward at the end.

**Illustration brief.** The idea: a goal someone else has already written, with a deadline and a crowd. Facts it may draw on: a challenge card showing its goal, its reward, how many have joined and a join button; a challenge page showing days left, the organising club, what finishing earns and a leaderboard.

**What stands out.** Strava sets the objective and the deadline, and you decide only whether to join. Deadlines are fixed to the calendar month, not to the day you join.

**Trigger.** Opening the challenges list, or meeting a challenge on the dashboard.

**What it needs.** An objective with a start and an end that Strava has already defined.

**How it connects.** Finishing a challenge gives you an Achievement, each challenge page carries a Leaderboard, and the activities that count are the ones you save as usual.

**Worth noticing.** Strava shows how many people have joined next to every challenge.

**Screenshots needed:** the challenges list showing several cards with their join counts; a challenge page showing days left, the organiser and the reward; the filter options.

### Group Membership

**Title:** Clubs

**Implementation summary:** Strava lets you create a club as a home base for your community, with its own events, posts and, if private, admin approval.

**How it works.** Clubs are where Strava's social side gets a place of its own. Near you, clubs are listed by distance and can be searched by location or sport. If you start one, Strava walks you through 5 steps: the sport, up to 3 tags describing what kind of group it is, a name, photo and description, public or private, and where it's based. The app then names 3 next moves: invite people, write a post, create an event. Events are where a club gets a date. You set the sport, when it happens, where, whether it's virtual or in person, the pace someone needs to take part and who can come, and the event then shows who's hosting and who's going. In a private club, people request to join and only admins can approve them. Strava is asking you to create the group, not only to join one, and the app describes the club as a home base for your community, which speaks to belonging.

**Illustration brief.** The idea: a club being created, from tags to first next steps. Facts it may draw on: the 5-step creation flow; the tag step with its list of options and a note that tags can be changed later; the closing screen naming invite people, write a post and create an event; a club page showing sport, member count and type.

**What stands out.** The tag list puts personal, commercial, employer and identity groupings in one list. Strava runs a club of its own, with almost 7 million athletes, and it organises most of the featured and promoted challenges.

**Trigger.** Starting a club, or asking to join one.

**What it needs.** A sport, a name, a public or private setting and a location, all chosen during creation.

**How it connects.** Club posts and events form a club feed beside Social Feed, and the Strava Club organises most of the featured Challenges.

**Worth noticing.** Strava ends club creation by naming 3 next moves: invite people, write a post and create an event.

**Screenshots needed:** the tag-selection step of club creation; a club page showing its member count, type and tabs; the list of clubs near you; the event creation screen.

### Social Feed

**Implementation summary:** Strava fills your feed with popular members' activities before you follow anyone, each one open to kudos, comments and sharing.

**How it works.** Below the follow and challenge suggestions, the dashboard runs a feed of other people's activities. On a new account, where nobody is followed yet, Strava chooses them, and introduces the feed as popular members to stay motivated. Each activity shows its route, any photos or video, the distance, elevation gain and time, and the achievements it won, with a count of the kudos it has received and the comments underneath. Kudos, comment and share controls sit on each item, and more activities keep loading as you scroll. Strava is asking you to react, and gives you other people's effort to look at from the first visit, which speaks to belonging and, through the kudos and achievements on show, to status.

**Illustration brief.** The idea: other people's activities, with their reactions attached, on a screen that is full before you've followed anyone. Facts it may draw on: a feed card with a route map, photos, distance, elevation gain, time, an achievement, a kudos count, comments, and kudos, comment and share controls.

**What stands out.** The feed has something in it from the first visit, because Strava picks the activities when you haven't followed anyone. Each activity carries its kudos and achievements with it, so how other people have responded is part of what you see.

**Trigger.** Scrolling down the dashboard.

**What it needs.** Other people's saved activities to show, since a new account follows no one.

**How it connects.** The achievements on each item come from Achievement, and saving your own activity is what puts it here for others unless you mute it.

**Worth noticing.** Strava lets you choose how the feed is ordered, and whether uploads lead with a map or a photo.

**Screenshots needed:** the dashboard feed on a new account; a single feed card showing its stats and reaction controls; the feed preferences.

### Leaderboard

**Implementation summary:** Strava's challenge pages carry 2 leaderboards, one for a single activity and one for the whole challenge, ranking only the people who joined.

**How it works.** Opening a challenge page, you find its participants ordered in a list. One leaderboard covers any single activity inside the challenge. The other covers the challenge overall, showing each person's pace, the distance they've covered and when they finished. In a step challenge, it shows the steps each person has logged next to their rank. Because a challenge has a deadline and a set of participants, the ranking is bounded to the people who joined, not everyone on Strava, and a change in a group challenge's leaderboard has a notification type of its own. Strava is asking you to measure yourself against others doing the same thing, and gives you a place in a list, which speaks to status.

**Illustration brief.** The idea: a ranked list that belongs to one challenge. Facts it may draw on: a challenge leaderboard showing ranked participants with pace, distance and completion time; a step challenge showing the steps logged beside each rank.

**What stands out.** Who you're listed with depends on what you told Strava during setup: your gender decides which leaderboards you appear on, and your birthday is used to filter them.

**Trigger.** Joining a challenge that other people have joined.

**What it needs.** Recorded activity from the other people in the same challenge.

**How it connects.** It sits on Challenge's join, and the rank each participant holds is what Comparative Rank covers.

**Worth noticing.** Strava ranks people inside each challenge rather than across the whole app.

**Screenshots needed:** a challenge page showing both leaderboards; the step challenge showing ranked step counts; the gender and birthday screens from onboarding.

### Shareable Win

**Implementation summary:** Strava composes a branded card from your activity's result, offers it right after you save, and again if you take a screenshot.

**How it works.** Right after you save an activity, Strava has a card ready to share. It's composed from the record the app holds: a card might state that it was your longest ride ever, with a personal record badge, and it carries Strava's branding. More than one design is on offer. From there you can send it to Instagram, WhatsApp, a message, a Strava message or post, or copy a link. If you take a screenshot of the activity instead, Strava opens the same sharing pop-up and offers its card in place of the picture you took. The same moment also asks who else was there: you can tag people who recorded it, people on Strava who didn't, and, with a link, people who aren't on Strava at all. Strava is asking you to send your result out to other people, and gives you a finished way of showing it, which speaks to status and to sharing it with the people you did it with.

**Illustration brief.** The idea: a result turned into something finished that is ready to leave the app. Facts it may draw on: a card stating a result such as longest ride ever, with a personal record badge and Strava's branding; the list of places to send it; the sharing pop-up opening after a screenshot, with the branded card in its place.

**What stands out.** The card is built from the record Strava holds about your activity, not from what you wrote or posted. Strava's branding travels with it.

**Trigger.** Saving an activity, or taking a screenshot of one.

**What it needs.** A saved activity and a result for the card to state, such as a personal record.

**How it connects.** The result on the card is the personal best that Achievement names.

**Worth noticing.** The card states your specific result, such as longest ride ever, rather than only the activity type.

**Screenshots needed:** the composed share card with its personal record badge and branding; the list of places to send it; the sharing pop-up after a screenshot; the add others screen.

### Streak

**Implementation summary:** Strava counts your streak in weeks, puts it at the top of your dashboard, and places the record button beside it.

**How it works.** Whenever you open the dashboard, the first thing beneath the top bar is your streak: a flame with a number of weeks inside it. On a new account it reads 0 weeks, with a line telling you to start it by logging an activity and a record button right beside it. The count can only move if you come back and log an activity in a later week. A calendar behind the flame lays out your activity over the last 12 weeks, next to your current streak. Strava is asking you to keep logging over time, and gives you a number that shows how long you've kept at it, which works on progress and continuity.

**Illustration brief.** The idea: a count with the action that starts it right beside it. Facts it may draw on: the dashboard streak, a flame reading 0 weeks, with the record button next to it; the calendar view covering the last 12 weeks.

**What stands out.** The streak is the one progress count in Strava that can't move without you coming back in a later week. It counts in weeks, the same unit as your goal and the figures on every profile.

**Trigger.** Opening the dashboard, where the streak is the first thing you see, or logging an activity.

**What it needs.** Nothing beforehand: the count starts at 0, and the record button beside it begins the first activity.

**How it connects.** It reads the same recorded activities as Challenge and Milestone, and sits above Challenge and Social Feed on the dashboard.

**Worth noticing.** Strava puts the streak first on the dashboard, above suggestions, challenges and the feed, with the record button beside it.

**Screenshots needed:** the dashboard streak at 0 weeks with the record button beside it; the streak calendar showing the last 12 weeks.

---

## Section cards

Nine sections, in the app's order. Eight have a card. Economy and resources is empty, so it appears as empty and is not linked.

**Onboarding and first run.**
Current: "Onboarding asks for your name, birthday and gender first, then ends by taking you straight into recording your first activity."
Proposed: "Strava asks who you are, what you're here for and who your friends are, then ends by putting you straight into recording your first activity."
Reason: the current card lists the first three questions, which is inventory. The proposal says what the questions are for.

**Core loop and automation.**
Current: "Recording, saving and composing an activity for other people to see all happen in the same few taps, with gear, sensors and automatic pausing built in around them."
Proposed: "Recording, saving and shaping an activity for other people happen in one short run, with automatic pausing, gear and per-activity privacy built in around it."
Reason: "the same few taps" is a count. Privacy added because the save screen carries it.

**Goals and progression.**
Current: "A trophy case, a streak, and a self-set weekly goal all track your activity at once, while Strava's own subscription pitch calls one of those same things, goals, a paid feature."
Proposed: "A trophy ladder, graded achievements, a streak and a weekly goal each give your recorded activity a different kind of progress to watch."
Reason: the second half of the current card points at a contradiction the analysis could not explain (what the paid goals feature is was never reached). That goes to the coverage list, not the card.

**Access and eligibility.**
Current: "Routes, deeper stats, segment leaderboards and running your own challenge are all locked, each one met and explained at the exact moment you try to use it."
Proposed: "Routes, deeper stats and running your own challenge sit behind the subscription, and your gender answer decides which leaderboards you appear on."
Reason: the current card names segment leaderboards as locked, which rests on paywall copy only (O57), so it is not stated as a fact about what you can reach. The proposal swaps in what the section also covers.

**Economy and resources.**
Current: none (the page shows "(no observations in this app.)").
Proposed: no card, and the section stays empty and unlinked. If the page needs one line, see "Decisions the guide did not settle".

**Social.**
Current: "A brand-new account opens on a feed of strangers, a list of nearby clubs and suggested people to follow, all before you've recorded a single activity of your own."
Proposed: "Strava gives you other people to follow, a feed to react to and clubs to join, with messages, events and standings as ways to take part."
Reason: the current card is a fact about a new account, already carried by the Social Feed block. The proposal says what the section gives you.

**Reach beyond the app.**
Current: "A partner training product is sold as an upgrade tier, and a competing fitness subscription gets its own promotion inside Strava's own settings."
Proposed: "Strava sells a partner running product as part of its subscription, sends your activity out to Instagram and WhatsApp, and connects to the devices you already use."
Reason: "competing" is an interpretation that is not in the analysis's observations. The proposal covers the sharing and device routes the section also holds.

**Monetization.**
Current: "The subscription is pitched nine separate times across the app, its price stated differently depending on whether you're paying through the web or through the App Store."
Proposed: "The subscription is offered from many places around the app, each worded for what you were reaching for, with a free trial as the way in."
Reason: "nine" is a count of what was reached, so it reads as complete when it may not be. The price line rests on two figures in different currencies.

**Return triggers.**
Current: "A notification exists for nearly everything Strava tracks, from losing a leaderboard spot to a friend joining."
Proposed: "Strava has a notification for nearly everything it tracks, from kudos and challenge deadlines to losing a top place, and the streak waits at the top of the dashboard."
Reason: adds the streak, which the section holds.

---

# PART B: section pages

## Onboarding and first run

This part covers everything from the first launch to the recording screen, the first place Strava leaves you to act on your own. Along the way it creates your account, asks about you, asks for permissions, offers the subscription and suggests people to follow. Anything you want to change afterwards, you change from the profile editor.

### O1. The welcome carousel

When you first open Strava, a carousel of 4 screens scrolls by on its own, each paired with an image of part of the app: tracking your active life in one place, making progress towards goals, getting motivation from your people, and routes that never run out. You can join for free or log in, and those are the only 2 ways past it.

### O2. Signing up

Joining for free gives you 3 ways in: continue with Google, continue with Apple, or sign up with an email address.

### O3. Getting your code

After you submit your email address, Strava says it's sending you a code and puts a button on the same screen that opens your mail app, so reading the code doesn't mean switching apps yourself.

### O4. The tracking prompt

Straight after you enter the code, the system asks whether Strava may track your activity across other companies' apps and websites. It comes before Strava has shown you anything of the app.

### O5. Your name, and a public default

Strava asks for your first and last name, and gives the reason as findability: it's how your friends can find you. The same screen says your profile is public by default.

### O6. Welcomed by name

The next screen greets you by the first name you just entered.

### O7. Why it wants your birthday

Strava asks for your birthday and gives 3 uses up front: performance analysis, filtering leaderboards and keeping younger users safe.

### O8. Gender and leaderboards

Strava asks for your gender and ties it to a single purpose: deciding which leaderboards you appear on. You can answer man, woman or non-binary, or prefer not to say.

### O9. Choosing sports

Strava asks which activities you like, framed as a peek at what the app offers: when you record, you'll choose from over 30 sport types. The options include run, ride, walk, hike, swim, CrossFit, golf, kayak, rock climb, yoga and more. You can continue without picking any.

### O10. 150 million people

Between the sport question and the purpose question, a full screen tells you that more than 150 million active people use Strava. It asks nothing, and the only action is to continue.

### O11. What you're here for

Strava asks what you plan to use it for and lets you choose as many answers as apply: compete with others, connect with other active people, build an exercise habit, explore new places, train for an event or personal goal, and maintain your health. Tapping an answer reveals a line pointing to a feature that fits the reason you just gave. Build an exercise habit points to joining a challenge, and maintain your health points to tracking 48 sports and pairing a watch or fitness tracker.

### O12. Your fitness level

Strava asks where you are in your fitness journey, under a line saying people of all experience levels use it, from total beginners to professional athletes. You choose from beginner, intermediate, advanced and pro, each with a short description, and the level is yours to declare.

### O13. Corrections come later

Onboarding moves forward only: there's no way back to an earlier screen, so anything you want to change waits for the profile editor. The editor holds your name, a biography, your primary sport, birthday, gender and weight.

### O14. A privacy default, stated

A privacy screen says Strava cares about your safety and will hide the start and end of your activities by default. It adds that there are 12 privacy controls, including who can see your profile and your activities.

### O15. What shared data powers

A screen explains that the data you and millions of other active people share is used to power community features like the Global Heatmap, and to test, improve and develop features. It adds that you can stop sharing data for these purposes at any time in settings.

### O16. The first paywall

Before you've recorded anything, Strava offers a subscription: an annual plan at $79.99 a year, or a Strava plus Runna plan at $149.99 a year. A 30-day free trial unlocks every feature, and the screen says you'll get a reminder in 28 days and be charged $79.99 in 30. You can skip it immediately.

### O17. What the subscription unlocks

A second screen lists what a subscription unlocks: a custom training plan for your goal, from 5K to marathon, and guidance on pacing, mindset and injury prevention from world class coaches, both under the Strava plus Runna label; estimated finish times for your next 5K, 10K, half or full marathon; suggested routes and other mapping tools; and advanced insights into your workouts. You can skip it.

### O18. Asking for notifications

Before the system asks about notifications, Strava shows its own screen first. It says allowing notifications gets you check-ins and reminders to help you reach your goals, shows what a notification will look like, and asks you to choose allow on the next step.

### O19. Finding friends early

Onboarding includes a friend-finding step, framed around giving and receiving kudos, sharing encouragement and sparking your motivation. A search shows people near you, with profile images, before you've shared any contacts, and a set of well-known athletes is offered to follow. You can move on without following anyone.

### O20. The closing screen

The last screen says what Strava hopes you'll do now: upload activities, compete with friends, build your community and, most importantly, have fun.

### O21. Straight into recording

Onboarding ends with a pop-up inviting you to record your first activity: choose from 30+ sport types and start moving, or connect a Garmin, Peloton or other device to upload activities instead. Both routes sit side by side. Choosing to record opens the recording screen and asks for permission to access fitness activity and location.

---

## Core loop and automation

This is the part of Strava you come back to: choosing a sport, recording, saving and sharing an activity, and the records that build up behind it. Gear, sensors, automatic pausing, weather and device connections sit around the edges of that loop.

### O22. The 5 tabs

A bar along the bottom holds 5 destinations: Home, Maps, Record, Groups and You. Record sits in the centre. Between them they cover the feed, the map, recording, other people and your own record.

### O23. Choosing a sport

Tapping Record opens a map of where you are and a selector for the sport. The selector groups foot, cycle, strength, racquet, water, winter and team sports, and other sports. A group of your top sports sits at the top, holding the activities you chose or do most.

### O24. Before you start

Before you record, the screen lets you adjust the map and its layers, and shows which nearby areas other people have covered. You can add a route to follow, though building a new one needs a subscription. A stay-safe option sends a text that starts sharing your live location.

### O25. Recording settings

Recording settings cover audio cues, whether the screen stays awake, auto pause, sending your live location, and a heart rate sensor, which needs permission to connect over Bluetooth. They all concern what happens while the phone is in a pocket or on a handlebar.

### O26. While you record

Recording opens a full screen showing your speed, distance, elevation gain and current elevation. When you stop moving, the app pauses itself after a few seconds, and the screen shows whether any activity is registering. You can also pause it yourself or minimise it.

### O27. Finishing and naming

When you finish, Strava offers to resume or save, so ending isn't final. If you save, it fills in a name from the time of day and your sport: a morning bike ride becomes Morning Ride.

### O28. Composing the save

The save screen is where you build the version other people will see: the activity name, a description where you can tag others with an @, the activity type, photos and videos, and the map style. All of it is decided as you save, before the activity exists anywhere else. Personalised stat maps for the activity image are for subscribers, and the screen carries prompts to unlock more maps and stats.

### O29. Photo and video limits

When you add a video, Strava says it will trim anything over 30 seconds to the first 30. You can add as many photos and videos as you like.

### O30. Tags and effort

You can tag an activity as a race, for a cause, a workout, recovery, a commute, with a pet or with a kid. Separately, you can rate how it felt: easy, moderate or max effort. The effort rating is there whether or not you have a heart rate monitor connected.

### O31. Notes only you see

The save screen has a private notes field that only you can see.

### O32. Adding gear while saving

If you used equipment you haven't registered, you can add it from the save screen instead of leaving to set it up first.

### O33. Who sees an activity

As you save, 3 separate choices govern who sees the activity. Visibility can be everyone, followers only or only you. Hidden details can cover calories, speed and start time. A mute control keeps the activity out of your home and club feeds while it stays on your profile. Save and discard are both offered at the end.

### O34. Your first save

Saving your first activity plays an animation, then a pop-up welcomes you to the team and congratulates you with kudos, Strava's own word for it, on logging your first activity. It offers 2 routes, to view the activity or to view it in the trophy case, and a trophy is granted for it.

### O35. The activity page

A saved activity leads with 6 figures: distance, elevation gain, moving time, average speed, max elevation and max speed. Tapping any of them takes you down to a fuller block of stats on the same page, which also flags problems with the recording. The page carries share, comment and like controls, and at the end sits a locked section about smarter insights, below your own numbers.

### O36. Replaying the route

A play button on the activity replays your movement across the route.

### O37. Editing or deleting

A three-dot menu on an activity lets you add media, edit it, crop it, edit its map visibility, save it as a route, refresh it or delete it. A bookmark control on the same page opens the subscription screen.

### O38. Adding by hand

A plus button on the You tab creates a post, adds a photo or adds an activity by hand, so something you did without the app can still join your record.

### O39. Instant workouts

The dashboard offers instant workouts you can start with a single tap, such as a brisk walk of 30 minutes. Each carries a duration and a stated purpose.

### O40. 4 workout intents

A Workouts tab offers 4 intents: maintain, for steady activity at your usual effort; build, for longer and harder workouts; explore, for a new sport, route or type; and recover, for lighter efforts. Tapping any of them shows a full card with an activity, a description, the type, a difficulty and an estimated time, ending in a button to start a free trial.

### O41. Stats by sport

The statistics screen keeps running, cycling and swimming apart, each with averages for this week, the year so far and all time.

### O42. Tracking your gear

You can register shoes or a bike as gear, to keep track of distance and use. Each takes the sports it's used for, a nickname, a type, a brand, a model and notes. You can also set a distance, from 400 to 1,200 kilometres, at which Strava will tell you the gear has reached it. The distance builds up from recorded activities that name the gear.

### O43. Health data permissions

A health data setting explains that Strava uses data such as heart rate from sensors, devices and apps you've connected, to provide features such as performance insights. It lets you control whether health-related data can be accessed.

### O44. Weather and partners

Weather, powered by Apple Weather, is shown on your activities automatically and can be turned off for all of them. Partner integrations work the same way: when you post an activity with a connected partner, they can add their own content to it in the feed, and you can change those settings at any time.

---

## Goals and progression

This part covers what Strava keeps and shows as your activity builds up: a weekly goal, a profile completion meter, a trophy ladder, graded achievements, personal bests, segments and challenges. Some of it is yours alone, and some of it places you among other people.

### O45. Setting a weekly goal

A suggested goal on the dashboard is where you set how many activities a week you want to complete. You choose the number, and Strava supplies the unit. It's one of 4 items in a carousel at the top of the dashboard, alongside the streak, instant workouts and the weekly snapshot.

### O46. The profile completion meter

Your profile shows it's 80% complete and names your photo as the next step. A question mark beside it explains that a photo shows your friends it's you, and that you control who can see it. Moving on from that step leads through a subscription pop-up, then a screen offering to sync your contacts so friends know you're here, then a closing message that you can update your information at any time from your profile page. The 80% stays where it is until something changes.

### O47. The trophy ladder

At the bottom of your profile, the trophy case holds positions for your 1st, 3rd, 5th and 10th activity, and a view-all route shows the ladder continuing up to a thousand activities. Positions you haven't reached are shown in place with what it will take to get there. Each position is defined by a count of activities, not by distance, time or sport.

### O48. A first trophy, at once

Saving your first activity grants the first trophy straight away, and offers a route into the trophy case. A single 44-second recording was enough.

### O49. Graded achievements

Activities in the feed show the achievements won on them, and profiles carry a count of the achievements held, graded gold, silver and bronze. One profile showed 10 silver, and another 53 trophies, some gold and some bronze. After you record, your own dashboard carousel shows the achievements against that activity.

### O50. Personal bests, named

After your first activity, a notification opens on a new best effort, your longest ride ever. The share card composed from that activity carries a PR badge. The record is stated against your own history, not against anyone else. A best efforts tab on your profile opens the paywall.

### O51. Browsing segments

Segments are named stretches that other people have covered, each carrying a name a person gave it. Starred segments let you keep track of your progress and efforts, and an explore route lists segments near you. Each shows how many athletes have completed it and how many efforts have been made on it all time. You can filter by length, elevation and surface. Segments exist whether or not you ride them, filled by other people's efforts, and starring one turns a public stretch into a target you follow privately.

### O52. Your segment standing

The segments area holds your standing in 3 forms: KOMs and CRs, the segments where you hold the best overall time; your personal records on segments; and a Top 10 list of the segments where you're in the top 10. One is measured against your own history, and the other 2 against other people.

### O53. Suggested challenges

A challenges block on the dashboard presents challenges as a way to make accountability easier and more fun, and to earn rewards. The April 400 Minute Run asks you to log 400 minutes this April to unlock a free 2-week Runna trial, and more than 1,128,000 athletes had joined it. The April 5000 x Brooks challenge, with more than 1,175,000 joined, carries a digital trophy. So do the April 10 Days Active challenge, with more than a million joined, and the April 180 Minute Sweat challenge, billed as the longest single activity challenge, with more than 837,000. The Hoka Speedgoat 7 Vert Challenge has more than 431,000 joined. 11 further challenges with digital trophies are listed, among them swimming, flexibility, 100,000 steps, a half marathon, a 10,000 challenge and an elevation challenge. Every challenge shows how many people have joined, and a route to explore challenges sits below them.

### O54. Inside a challenge

A challenge opens as a page of its own, showing how many days are left, the club that organises it, the details, what you get for completing it, a leaderboard and a description. The featured one, the April 5000 x Brooks challenge, asks you to complete the first 5km run between April 1st and April 30th, 2026, and joining and completing it earns a badge. Joining takes a single tap on a join button with nothing else to configure, and the terms are on the challenge page rather than on the list. The Strava Club organises most of the promoted and featured challenges.

### O55. Filtering and creating challenges

The Groups area opens on challenges, which you can filter by activity type and by elevation gain, moving time and distance. Strava recommends challenges from your own recorded activity, and 16 were recommended. Joining a challenge Strava runs is free. Creating a group challenge, framed as starting a custom challenge with friends, opens the paywall, and so does the Active tab, framed as designing your own challenge for your crew, which asks you to start a free trial.

### O56. Paid progress features

Beneath the streak calendar, a block names 4 progress features that come with a subscription: performance predictions, goals, relative effort and a training log. A free suggested goal sits on the same dashboard.

---

## Access and eligibility

This part covers what you can reach and what you can't. The subscription is the main condition on features, a few onboarding answers apply conditions to you, and privacy settings and club approval decide who else gets to see what you share.

### O57. What's locked

Features behind the subscription are met at the point you try to use them, spread across the map, the activity, the profile and the groups area rather than gathered in one place. They include route creation and the route builder, best efforts, the winter map type, the weekly, night and personal heat maps, terrain, the 3D map view, bookmarking an activity, creating a group challenge, the Active challenge tab, personalised stat maps on the activity image, Beacon for devices, and managing your subscription. Paywall copy also names segment leaderboards, advanced training analysis, performance predictions, goals, relative effort and a training log.

### O58. Locked map layers

The map offers standard, satellite, hybrid and winter types, global, weekly, night and personal heat maps, layers including places of interest and terrain, and a 3D view. The global heat map for running opens, and so do the 3 ordinary map types. The winter type, the weekly, night and personal heat maps, terrain and 3D can't be previewed, and tapping any of them opens the paywall.

### O59. Every lock leads to a trial

Every lock leads to a paywall whose main action starts a free trial rather than a purchase. The routes paywall says the first month is on Strava, and names routes, segment leaderboards and advanced training analysis among what a subscription unlocks. Features aren't sold one at a time.

### O60. Age and safety

Strava collects your birthday partly as a safety condition, to keep younger users safe, alongside the other uses it states.

### O61. Leaderboard placement

Your answer to the gender question decides which leaderboards you appear on.

### O62. Privacy controls

Some athlete profiles are private. Opening the following list of a private profile shows an empty list, with a message that the athlete isn't following anyone. Settings carry privacy controls that reach well past profile visibility: who can see your activities, group activities, flybys, local legends and mentions, who can message you, map visibility, hidden details, public photos on routes, editing past activities, blocked accounts and personal information sharing.

### O63. Public and private clubs

When you create a club, you choose between public and private. In a private club, people must request permission to join and only admins can approve new members. Approval sits with that role, not with the person who created the club.

---

## Economy and resources

Empty. No observations. The card is not shown and the section is not linked. See "Decisions the guide did not settle" for the one-line empty state.

---

## Social

This part covers everything that involves another person: who Strava suggests you follow, the feed, your profile as others see it, search, clubs and their events, messaging, and the standings that place you among other athletes. On a new account much of it is already filled in before you've done anything.

### O64. Suggested people to follow

The dashboard has a follow block that recommends people. The accounts listed first carry a check mark and are labelled as fan favorites on Strava, with follow and remove actions on each, followed by a group of local legends near you. 2 grounds for suggestion share the block: standing on the platform, and proximity. It appears on a brand-new account with no connections.

### O65. The home feed

Below the follow and challenge blocks, the dashboard shows a feed of other athletes' activities, introduced as popular Strava members to stay motivated. Each shows a route track, photographs and sometimes a video, with the distance, elevation gain, time and achievements won, and one showed a bicycle ride of almost 34 kilometres. Each carries kudos, comment and share controls, shows how many kudos other people have left, and shows the comments. More activities from more people keep loading as you scroll. On a new account the feed is filled by recommendation, not by who you follow. The mute control on the save screen is set against this feed and the club feed.

### O66. Configuring your feed

Preferences cover how the feed is ordered, whether uploads default to a map or a photo, and whether video autoplays.

### O67. Your profile

Your profile shows your profile image, how many people you follow, your location, how many followers you have and how many activities you've recorded. The default image is a generic character. Editing takes your name, a biography, a primary sport, birthday, gender and weight.

### O68. Finding people

Search has 2 tabs, Friends and Clubs. Friends offers 3 routes to people: suggested athletes, your phone contacts, and a QR code you hand over in person. 21 athletes were listed as suggested in your local area.

### O69. Syncing contacts

The contacts route tells you your friends are on Strava and that you can see what they're up to by connecting your phone contacts, with a button that describes the connection as secure. Tapping it raises the system prompt for access to your contacts.

### O70. QR codes and invites

You can share your profile as a link, or as a QR code others scan to follow you. A separate control invites friends who aren't on Strava, so one place covers following someone who's here and bringing in someone who isn't.

### O71. Weekly figures reset

Profiles lead with this week's distance, time and elevation. On a Monday morning those read 0 km, 0 hours and 0 metres for every suggested athlete, while a graph beneath shows the same athletes cycling, running and swimming through the months before.

### O72. Private profiles

You can open a private profile and see who it belongs to, but the lists behind it come back empty.

### O73. Finding clubs nearby

The Clubs tab lists clubs near you, including cycling and running clubs, running to dozens if not hundreds of entries, with a group of popular clubs near you that shows close to 50. You can search by location or sport type, with the full list of sports as the filter. Distance is how clubs are organised by default.

### O74. The Strava Club

Strava has a club of its own, listed with almost 7 million athletes, which shows its location and what it does. It organises most of the featured and promoted challenges, so Strava takes part in its own clubs as a club.

### O75. Creating a club

A create route offers to give your community a motivating home base, and opens 5 steps. First you choose the club's sport, all sports or a specific one. Then you choose up to 3 tags that describe the club: just for fun, brand, organization, team, employee group, coach led, creator, event or race, local community, fundraising, tips and talk, identity group or something else, with a note that you can change this later. Next come a name, a photo and a description, then public or private, then where the club is, or global if it isn't in one place. When you finish, Strava congratulates you and names 3 next moves: invite your community, write a post, create an event.

### O76. A club's page

A club's page shows its sport, member count and type, public or private, and offers insights, events, share, edit details and add events, with tabs for overview, activities, stats and posts. Upcoming events created for the club and posts written for it appear on the page. Editing details and adding events are open to the creator.

### O77. Creating a club event

Creating an event takes the sport, when it takes place, whether it recurs, the starting location, whether it's virtual or in person, a description, and whether it can be found in search and recommendations. It also takes the event type, social, workout or competition, a pace range, who can attend, and a route with advanced options. Once created, the event shows who is hosting it, who the admin is, who is going, where it starts and when, and it can be shared. The pace range states what someone must be able to achieve to take part, discoverability is set for each event rather than for the whole club, and attendance is a recorded state on the event.

### O78. Messaging permissions

Opening messages introduces messaging: you can now message people on Strava, and you choose who can chat with you in settings. The messaging settings describe it as private chat, carry a toggle for showing when you're online, and offer 4 answers to who can message you: anyone, people you follow, mutuals who follow each other, or no one, in which case only you can message first. People who follow you can be searched and messaged.

### O79. Local Legends and Top 10

Local Legends shows who holds the most efforts on a segment over the last 90 days, and where you stand among the people doing well locally, so it measures how often rather than how fast. Top 10 shows the segments where you're in the top 10. Paywall copy names segment leaderboards as a subscription feature, and losing a top place has notification types of its own, lost CR and lost ratings.

### O80. Challenge leaderboards

A challenge page shows a leaderboard for any activity and an overall leaderboard for those taking part, with their pace, the distance they've covered and when they completed it. The 100,000 steps challenge listed the steps people had logged next to each athlete's rank. The ranking is within the challenge, not across Strava, and changes in a group challenge's leaderboard have a notification type of their own.

### O81. Tagging others

When you save, you can tag others in the activity with an @. After saving, a prompt at the bottom of the share screen asks about someone who didn't record, and opens a route to find members who were grouped in the activity, to add others, or to invite friends with a link. One control covers someone who recorded, someone on Strava who didn't, and someone who isn't on Strava at all, and it appears just after you've made something worth sharing.

### O82. Beacon

Beacon shares your live location with up to 3 safety contacts during an activity. You turn it on, choose your contacts and can choose the text of the message, and it needs permission for location and for contacts so a message can be sent. A subscription adds Beacon for devices, sharing from a Garmin or from the Strava app on an Apple Watch. From the recording screen you can also start the same sharing without giving Strava access to your contacts, by opening the Messages app with a prepared message.

---

## Reach beyond the app

This part covers where Strava reaches past itself: a partner running product, outside brands, another subscription, the places you can send an activity, invitations, connected devices and the phone's own services.

### O83. Runna as a tier

The subscription screen offers a Strava plus Runna plan at $149.99 a year beside Strava's own annual plan at $79.99. The what-you-unlock screen credits 2 of its 5 items, the custom training plan and the coach-written guidance, to that combined tier. Runna appears as an upgrade inside Strava's own pricing, not as an outside offer.

### O84. A challenge for a trial

The April 400 Minute Run unlocks a free 2-week Runna trial when you log 400 minutes in April, so the trial comes from activity you record in Strava rather than from signing up to Runna. It's the only challenge in the set whose reward isn't a digital trophy or badge. More than 1,128,000 athletes had joined it.

### O85. Branded challenges

Some challenges are run with outside brands: a Runna Vert challenge, the Hoka Speedgoat 7 Vert Challenge and the April 5000 x Brooks challenge. They sit in the same list as Strava's own challenges and are joined the same way.

### O86. A route to Runna

A training plans entry in settings, carrying Runna's logo, opens a screen introducing Runna by Strava: Runna builds plans around your goals, experience and schedule, synced with Strava. It shows a most popular group and a set of plans in full, and tapping a plan opens Runna's App Store listing, which takes you out of Strava.

### O87. Apple Fitness+ in settings

A promotions entry in settings offers up to 2 free months of Apple Fitness+, then $9.99 a month, with an action to redeem. The promoted product's own price is stated inside Strava.

### O88. Sharing outside Strava

Sharing an activity offers Instagram, a Strava message, WhatsApp, a message, a Strava post, copy link and further routes, with pre-created designs for how the shared image looks. The card carried longest ride ever, a PR badge and Strava's branding. Only the Strava post stays inside the app. Taking a screenshot of the activity opens the sharing pop-up with the branded version offered in place of your screenshot.

### O89. Inviting from an activity

The route to add others after saving an activity can invite people who didn't record it or who don't have Strava, by sharing a link with them. It comes up just after you've finished something, not on a screen of its own.

### O90. Connecting devices

Account information has a route to connect an app or device, listing 14 brands, and onboarding names Garmin and Peloton as devices whose activities you can upload. Connected devices bring in activity you didn't record in Strava, and the health data setting governs what those connections may send.

### O91. Beacon through Messages

Beacon texts are sent through the phone's own Messages app with a prepared message. The recipient can be anyone, without Strava getting access to your contacts, and doesn't need to be a Strava user.

### O92. Strava through Siri

A Siri setting asks whether you'd like to use Strava with Siri, and says some of your Strava data will be sent to Apple to process your requests. You then set shortcuts for frequent actions in your phone's own settings, under Siri and Search.

---

## Monetization

This part covers what Strava charges for and how it presents the charge: the upgrade button, the paywalls, the prices and plans, how the trial is described, and where checkout happens.

### O93. The upgrade button

An orange upgrade button sits at the centre of the dashboard's top bar, between the profile, search, message and notification icons. It's the only coloured element in the bar, it's there on every visit to the dashboard, and it opens the paywall.

### O94. Where the paywall appears

The subscription screen comes up from onboarding, the upgrade button, finishing your profile, routes, best efforts, locked map layers, bookmarking an activity, the trophy case after your first trophy, and creating a group challenge. 2 of these come straight after you've completed something, not while you're trying to use a locked feature. The wording changes between placements while the offer stays the same.

### O95. Paywall wording

Each paywall is worded for where it appears. The onboarding and profile completion paywall talks about better habits, smarter training and steady progress. The routes paywall invites you to try the very best of Strava, with the first month free, and names routes, segment leaderboards and advanced training analysis. The trophy case paywall talks about the deepest look at your stats and help to improve your performance. The block on the activity page promises smarter insights for faster progress, and the one under the streak calendar promises your full potential. Each names what you were reaching for, and the habit wording is used where you weren't reaching for a specific feature.

### O96. Prices and plans

Strava's annual plan is $79.99 a year, and the Strava plus Runna plan is $149.99 a year. The plan screen presents the annual plan as a free 30-day trial, with a 44% saving, then $79.99 a year. The web checkout shows an annual subscription at 49.99 euros with nothing billed today, and the in-app purchase sheet shows $79.99 a year through the App Store.

### O97. Checking out on the web

Starting the free trial from the plan screen takes you out of the app to a payment page on strava.com. It states a free 30-day trial, nothing billed today, an annual subscription of 49.99, and what will be billed in a month. It offers Apple Pay and no other payment method, and carries no links to anywhere else on the site. Once you choose Apple Pay, it connects to your stored card and shows the amount before you authorise the payment.

### O98. 3 routes, 3 weights

The plan screen offers 3 routes in 3 different visual weights: a route to all plans, shaped as a button; a route to start a free trial, shaped as a button, highlighted and carrying an icon showing it leaves the app; and a route to pay in the app, set as plain text beneath. The route that leaves the app is the emphasised one.

### O99. The charge date

The plan screen gives a calendar date for the first charge, not a number of days, and says you can cancel up to 24 hours before the trial ends. The routes paywall says you'll be charged in 30 days and to cancel at least 24 hours before.

### O100. A discount in settings

The top of the settings screen carries a large highlighted block offering Strava Run up to 60% off, starting with a free 4-week trial. Beneath it, an entry to explore and manage your subscription opens the paywall.

### O101. A half-screen paywall

When you enter the trophy case after your first trophy, a subscription pop-up covers half the screen, leaving the trophy case, and the trophy you just earned, in view behind it. It offers a free trial.

### O102. A lock below your stats

Scrolling past the stats, the share, comment and like controls on a saved activity reaches a locked control and a section saying what a subscription would add: results, speed stats and elevation stats. It's placed at the end of the record of what you just did.

### O103. Restoring purchases

Account information carries restore purchases, change email and add phone number.

### O104. Trial terms

The trial is described in more than one way. Onboarding gives a 30-day trial with a reminder at 28 days. The routes paywall says first month free, with a reminder 2 days before the trial ends. The plan screen says a free 30-day trial. Settings says a free 4-week trial.

---

## Return triggers

This part covers what Strava does to bring you back: the notification settings, email, the streak at the top of the dashboard, the notification that follows a saved activity, and the deadlines that challenges and events carry.

### O105. Notification types

Strava lets you set push notifications type by type, and the types follow everything the app tracks: kudos and likes, comments, mentions, losing a top place, synced device activity, Beacon, upload reminders, segment analysis, activity crops and elevation adjustments, profile progress, friends joining, new followers, friends' activities, suggested friends, challenges and their progress, rewards and invites, group challenge comments and leaderboard changes, clubs, posts, events, data permissions and health data. Marketing, feature and subscription tips have a switch of their own, separate from the product notifications. Some types are on by default and some are off.

### O106. Email, on by default

Email notifications are on from the start and can be turned off. Onboarding asks only about push notifications.

### O107. The streak, first

Directly beneath the top bar, the dashboard carries your streak, a flame with a number of weeks inside it, reading 0 weeks on a new account. Beside it are a button to view the calendar, a line telling you to start your streak by logging an activity, and a record button. It's the first thing below the navigation, above suggestions, challenges and the feed.

### O108. The streak calendar

The calendar behind the streak shows your progress, your current streak, a calendar for the month, and performance across the previous month and the current one, covering your activity over the past 12 weeks. A button beneath it asks how satisfied you are with the feature and opens a questionnaire inside the app. Between the calendar and that button, a block names performance predictions, goals, relative effort and a training log as subscription features.

### O109. A notification after saving

After you save an activity, a notification waits on your home screen telling you another activity is down and to check your stats, with the time it arrived. Opening it shows a new best effort, your longest ride ever. The reason it gives for coming back is your stats, not the activity.

### O110. Upload reminders

Upload reminders have a switch of their own among the push notification types.

### O111. Deadlines bring you back

Challenge pages count down the days left. The challenges are bounded to the calendar month and named for the month they run in, with the featured one running from April 1st to April 30th, 2026, and the deadline is fixed to the calendar, not to the day you join. Challenge progress, challenge rewards, challenge invites and event reminders each have a notification type of their own.

### O112. Gear distance alerts

Gear can be set to notify you when it reaches a distance you choose yourself, between 400 and 1,200 kilometres. The trigger is the distance built up through your activities, not time passing.

### O113. One weekly clock

A weekly clock runs in 4 places. The suggested goal is set in activities per week. The dashboard's weekly snapshot reports the week's activities, time spent exercising and distance. The profile and the progress tab lead with this week's distance, time and elevation. Every profile's week figures reset to 0 on Monday. The streak counts in the same unit, the week, and the reset is a hard one: the figure goes to 0 rather than rolling.

*O114 is dropped and does not appear on the page.* Reason: absence only: no app store rating prompt appeared at any point. It stays on the coverage list (item 11). The in-app questionnaire on the streak calendar, which the observation's detail mentions, is already carried by O108.

---

# Decisions and cuts

## Observation decisions

- **Rewritten (113):** O1 to O113, each keeping its ID with a 2 to 4 word title.
- **Dropped (1):** O114, absence only (no rating prompt seen), already on the coverage list.
- **Merged, split or reordered:** none. O62 and O72 now sit where the analysis puts them (O62 in Access and eligibility, O72 in Social), and each has its own entry.
- **Kept although they overlap another entry:** O7 and O60, O8 and O61, O81 and O89, O82 and O91, O42 and O112, O53 and O84, O17 and O83, O50 and O109. They cannot be merged, so each stays short and states only its own point.
- **Restored from the current content's gaps:** O72 (private profiles) and O110 (upload reminders), neither of which is absence-only.

## Sentences cut from entries that stay, and why

### Summary page

- **Old teaser, screenshot swap:** replaced. It said what Strava does to a screenshot, not what it asks and gives, and "swaps it out" overstates "offered in place of".
- **Old intro, "something worth showing off":** a verdict. Out under the lens.
- **Old intro, "a brand-new account already opens on a feed full of strangers and a list of clubs":** a fact about a new account, not the spine. It lives in Social Feed.
- **Old intro, "no currency... nothing to spend":** kept in spirit as "never something you can spend" in How it fits together, where it explains what Strava gives back.
- **Old system view, "The subscription never touches the loop itself":** wrong. The save screen and the activity page both carry locked controls (O28, O35).
- **Old system view, "it's checked against your trophy case... and it's what gets composed into a shareable card":** walked through the features in the order they appear. Replaced by a narrative organised by motivation.

### Profile Completion

- **"Adding it takes you through a subscription offer":** the analysis has you moving on from the photo step with nothing changed, and the 80% staying where it was. "Adding it" claims something that wasn't seen, so it is now "Moving on from that step". The voice guide's own example sentence makes the same claim; see below.
- **"The completion badge holds at its stated level until you complete the one named step":** the voice guide's example line. Cut because it says what completing the step does, which wasn't observed. Replaced by "for as long as the profile is incomplete".
- **"A defined set of profile attributes to check against":** reworded in plain words.
- **"Completing that one named step routes you through a subscription pitch... before Strava calls the whole thing finished":** reworded to the choice itself, without the claim about completing.
- **"During onboarding, Strava collects some of your details and uses them to start your profile":** cut. The analysis has the profile editor holding onboarding answers (O13), but no screen shows onboarding starting the profile.

### Milestone

- **"The first threshold lines up with Achievement's own celebration moment, though the ladder itself runs independently of the Streak's week count":** the first half is not in the analysis, the second states an absence of connection. Replaced by what the ladder counts that others also read.
- **"every rung you haven't reached yet... with the number of activities it will take to get there":** reworded to "its condition", which is what the analysis says.
- **"the same reward shape reappears on gear":** kept as a plain fact in How it works. The comparison is now in What stands out as who sets the threshold.

### Achievement

- **"One profile we looked at held ten silvers":** analysis wording. The analysis says profiles carry a count and gives the figures only in the observation.
- **"another held 53 medals":** the analysis says 53 trophies.
- **"Finishing one of Strava's monthly challenges adds to the same pile":** not supported. The analysis says completing a challenge produces a trophy or badge that is held, not that it joins the achievement count.
- **"Every so often, one of your activities earns you an achievement":** vague, and the criteria weren't seen. Reworded to what is shown.
- **"it reads as a running scoreboard of your best efforts rather than a one-off congratulations":** a verdict.

### Comparative Rank

- **"so a good rank on a road you know well doesn't require being fastest, only persistent":** a conclusion the reader can draw, and a claim about outcomes.
- **"Every participant in a challenge you join gets the same kind of treatment, a stated rank, given directly":** reworded to a plain statement that each participant has a rank.
- **"Strava states your position as a named rank, Local Legend or Top 10, rather than as a place in a list":** replaced by the choice that Local Legends counts efforts.

### Challenge

- **"sixteen showed up for us":** analysis wording. Now "Strava also recommends challenges from your own recorded activity".
- **"alongside a dozen more":** the analysis says 11 further challenges (O53). Fixed on the section page.
- **"the decision to join is made next to a number that says how many other people already made the same call":** spells out the conclusion and attributes an effect.
- **"each with a headline count of how many hundreds of thousands":** a count in the summary, trimmed.

### Group Membership

- **"you're in right away if it's public":** not supported. The analysis marks the public case as unresolved (O63). Only the private rule is stated.
- **"the tag list treats a casual local running group, a company's employee team and a brand's own fan club as the same kind of thing":** a "casual running group" and a "brand fan club" are not tags in the list. Reworded to what the analysis says.
- **"clubs organise most of Strava's Challenges":** it is the Strava Club that does, not clubs in general (O54, O74).
- **"Nothing beforehand":** replaced by what the creation steps need.

### Social Feed

- **"headed 'recommended for you'":** a heading, not quoted now.
- **"so you never have to open an activity to react to it":** nobody was seen opening or not opening one, so this is a claim about what you do.
- **"the same Achievement badges and Standing":** "Standing" is not a tag name in the analysis (the analysis uses Comparative Rank).

### Leaderboard

- **"so the list stays a manageable size no matter how popular the app gets":** speculation, and a challenge with over a million joined is not small.
- **"shares its scope with the individual Standing":** stale tag name.
- **"Strava keeps two separate leaderboards... one ranking a single activity, another ranking the whole challenge":** kept in the summary and How it works. The old Worth noticing repeated it, so the new one states the bounded scope.

### Shareable Win

- **"(ours read 'longest ride ever')":** analysis wording ("ours").
- **"means Strava's own design reaches other people even when you never intended to use Strava's share feature at all":** attributes an intention and an effect.
- **"Standing" in How it connects:** stale tag name.

### Streak

- **"Strava counts the streak in weeks on the dashboard and in days on the progress tab":** two figures the analysis could not reconcile. A user of the app would know which, so it is our gap, not a fact about the app. It goes to the coverage list.
- **"starts the moment you log your first activity":** the continuity rule was not observed, so the claim is trimmed to what the screen says.

### Section pages

- **O1:** cut "the four headings name tracking, goals, other people and routes, which is the order the product later builds the dashboard in". The dashboard order claim is the analysis's inference.
- **O4:** cut that no Strava screen preceded or explained the prompt. It is an absence that changes nothing a reader can do. The order (the prompt comes before anything of the app) stays as a plain fact.
- **O7:** cut "two of the three stated uses are product features and one is an eligibility condition" and what the safety condition changes (unobserved).
- **O9, O11, O21:** each gives the sport count its own screen states (over 30, 48, 30+) and no longer comments that they differ. A plain statement lets the reader notice. The conflict stays on the coverage list (item 9). The old O11 text said "a different number".
- **O11:** cut whether the selections change anything later (unobserved).
- **O12:** cut whether the declared level changes anything (unobserved) and "declared rather than derived".
- **O26:** cut "tested responsiveness by spinning the phone" (session detail).
- **O30:** cut what the tags and effort rating change (unobserved).
- **O37:** cut the point that cropping and elevation edits are treated as ordinary corrections (inference).
- **O40:** cut "the full range of what a plan could ask" (inference). "4 intents" rather than the old "4 kinds of plan".
- **O44:** cut that no partner integrations were present and what partner content looks like (a gap in what was covered).
- **O45:** cut whether Strava tracks, concludes or resets the target (unobserved).
- **O47:** cut "no benefit beyond the trophy was observed at any position" (absence).
- **O50:** cut that the recognition came from a 44-second recording "because it was the only ride on the account".
- **O52:** cut that all 3 standings were empty (a gap in what was covered).
- **O53:** cut the Hoka challenge's reward being unnamed (our gap: the challenge page wasn't opened, coverage item 7), the 10 Days Active success condition and the partial-month count (coverage item 10), and the partial-month count (the figures were a few weeks into April).
- **O56:** cut that none of the 4 features were reached.
- **O58:** cut the point that one member of each locked family is left open "so the shape of what is withheld is visible" (inference).
- **O61:** cut "a condition on the user rather than on the content" (classification).
- **O62:** cut "presented as an absence rather than as a lock". The empty list and the message it carries stay as plain facts.
- **O66:** cut what the ordering options are (unobserved).
- **O67:** cut "three of the four figures concern other people". The reader can count.
- **O69:** the button label is described, not quoted ("connect securely" is a button label).
- **O71:** cut the narrators' claim that Monday zeros make the platform look inactive, and "the figure a viewer meets first is the one that has just been reset".
- **O73:** cut "as it is for athlete suggestions and segments" (cross-observation comparison).
- **O76:** cut what the activities, stats and insights tabs hold (unopened).
- **O78:** cut the default setting (unobserved).
- **O79:** cut that both surfaces were empty (a gap in what was covered).
- **O80:** cut "some carrying almost a billion steps". The figure sits oddly against a 100,000 steps challenge and may be a transcript slip.
- **O87:** cut "the only promotion observed for a product outside the Strava and Runna pair" (what was seen) and "competing" (interpretation).
- **O96:** cut that the web and in-app price difference "was not stated on any paywall" (an absence phrased as blame), the currency caveat, and the "see all plans" route that was not opened.
- **O98:** cut the narrators' commercial motive, and the price difference not shown on the screen.
- **O99:** cut the specific date (May 19th) and the point that it does not sit 30 days after the session. The date is unreliable, and the point is a gap in what was covered. The page says only that a date is given.
- **O100:** cut the trial-length difference (carried by O104) and "the discount figure appears nowhere else".
- **O101:** cut "the only observed paywall that does not cover the screen" (coverage item 14).
- **O104:** cut that 30 days, a month and 4 weeks "are different periods" (the maths) and "which terms govern was not established".
- **O105:** cut "unusually long and granular" (a judgement) and which types are on by default.
- **O106:** kept the plain fact that onboarding asks only about push.
- **O107:** cut the weeks versus days mismatch and what breaks or resets the streak (coverage item 6).
- **O108:** cut "how many streak activities are active". The phrase is unclear in the analysis and should not be carried (see below).
- **O109:** cut the 44-second figure.
- **O110:** cut that no reminder was received.
- **O111:** cut that a new set of challenges is implied each month (plausible only).

## Decisions the guide did not settle

1. **Field delimiters.** The Stage 2 prompt and the guide write the box fields with colons (Trigger:, What it needs:). The approved content files and Calm's draft use a full stop for How it works, Illustration brief, What stands out and the four box fields, with colons only on Implementation summary, Title and Screenshots needed. I followed the content file so the draft drops straight into the site's format. Every field starts with a capital either way.
2. **"How it connects" names other mechanics, and "no cross-references" says no Related lines.** I read the first as required by the prompt and the second as banning pointer lines. So the field names mechanics plainly ("Challenge", "Achievement") and never says "see" or "related".
3. **Block order.** I kept the current order (Profile Completion, Milestone, Achievement, Comparative Rank, Challenge, Group Membership, Social Feed, Leaderboard, Shareable Win, Streak). Under the new spine a narrative order would open on the recording loop's recognition (Milestone, Achievement) and end on Profile Completion. The guide does not say whether block order is a content decision.
4. **Titles.** Milestone is titled Trophy case and Group Membership is titled Clubs, because those are Strava's own names. The Milestone block also covers gear alerts, which the title does not, so the title is Lav's call.
5. **Ordinals as numerals.** "1st, 3rd, 5th and 10th activity" follows numerals over spelled-out numbers. The analysis spells them out ("third", "fifth", "tenth"), and "first" stays as a word because it is idiomatic. Lav may prefer words for ordinals.
6. **American spellings in the app's own names.** The copy is British, but names are spelled as the app spells them, so "organization" (a club tag), "fan favorite" and "Hoka" stay as Strava writes them.
7. **Motivation words the analysis does not use.** The analysis gives roles (retention, engagement, social) but not motivation words. I used belonging, progress and status only where the app's own framing or the observation supports them: "get motivation from your people", "it's not always a solo sport", kudos given and received, ranks held against other athletes. The streak is tied to progress and continuity because the analysis says the count cannot move without a return. Fear of losing something appears once, on the notification types for losing a top place, because no loss rule was seen on the streak.
8. **Conflicting figures on a section page.** Sport count (O9, O11, O21) and trial terms (O104) conflict across screens. I state each screen's own figure and do not comment. The guide says never to frame an absence as a failing and never to do the maths, so I read plain statement as the answer, but it does not cover conflicts directly.
9. **Counts the analysis could only observe.** The nine paywall points and the 14 connectable brands are counts of what was reached. I kept 14 (O90, the account screen lists them) and dropped nine as a count (O94, Monetization card), because a list of 9 placements reads as complete when it may not be.
10. **Economy and resources empty state.** The page spec says an empty section shows a single line saying the app does nothing in this area, and the analysis says the absence is a finding. The current page shows "(no observations in this app.)". One proposed line, if Lav wants one: "Strava has no currency, points or balance: nothing to earn and nothing to spend." It is plain and not framed as a failing. I left the section empty because the guide says absence-only material goes to the coverage list.
11. **O62 placement.** The current content moves O62 into Social. The analysis files it in Access and eligibility. I followed the analysis, since "never reorder" suggests the analysis order governs, but the guide does not say.
12. **Overlapping observations kept as separate entries.** Eight pairs say overlapping things (see above). The rules do not allow merging, so a reader will meet the same fact twice in places (for example Beacon's Messages route in O82 and O91).
13. **Voice guide internal tension.** The guide's Do list says "player" and "call the player 'you'", while Word rules say "users" in all site copy and "player" only in games. I used "you" in running copy and "users" where a general noun was needed (O7). Strava is not a game, so "player" is never used.
14. **Where lens text goes in section pages.** Section pages are observation-level and carry specifics. I kept the lens in how each observation is framed (what Strava asks and gives) and out of the lead-ins, which only orient. The guide says both but does not say how heavy the lens should be at observation level, so most entries stay plain.

## Looked wrong (reported, not fixed)

### In `sources/content/strava.md`

- **Group Membership says "you're in right away if it's public".** The analysis marks the public-club case as unresolved (O63).
- **Group Membership "How it connects" says clubs organise most of Strava's challenges.** The analysis says the Strava Club does (O54, O74).
- **Achievement says "One profile we looked at held ten silvers" and "53 medals".** "We looked at" is analysis wording, and the analysis says 53 trophies. It also says challenge completions "add to the same pile", which the analysis does not state (O49, O53, O54).
- **Challenge says "alongside a dozen more" and "sixteen showed up for us".** The analysis says 11 further challenges (O53), and "for us" is analysis wording.
- **Leaderboard says the ranking keeps the list "a manageable size no matter how popular the app gets".** Not in the analysis, and a challenge with over a million joined is not small.
- **"Standing" is used as if it were a tag in Social Feed, Leaderboard and Shareable Win ("Achievement badges and Standing").** There is no such tag. It is probably an old name for Comparative Rank.
- **The Teaser says Strava "swaps it out".** The analysis has the branded version offered in place of the screenshot, not swapped in without asking (O88).
- **The system view says "The subscription never touches the loop itself".** The save screen carries partly locked controls (O28) and the activity page ends in a locked block (O35, O102).
- **The Streak block's "What stands out" states weeks on the dashboard and days on the progress tab.** The analysis could not reconcile them (O107, unresolved), so this is a gap in what was covered, not a fact about the app.
- **The Profile Completion block, and the voice guide's example, say "Adding it takes you through".** The analysis has the flow continuing from the photo step with nothing changed (O46).
- **O62 is filed under Social, after O71, and carries O72's text.** The analysis puts O62 in Access and eligibility. O72 is missing from the content, as are O110 and O114.
- **O62 says "Twelve separate privacy controls cover who can see your profile, activities, flybys, local legend status and more".** The 12 comes from the onboarding privacy screen (O14), while O62 lists more settings than that.
- **O40 calls the 4 intents "four kinds of plan".** The analysis calls them intents (maintain, build, explore, recover).
- **The Goals and progression card ends on "calls one of those same things, goals, a paid feature".** It leans on a contradiction the analysis could not explain (O56 detail, unresolved).

### In `sources/analyses/strava.md`

- **O80 says "some carrying almost a billion steps" on the 100,000 steps challenge.** This looks like a transcription slip, and it should be checked against the source before it is used anywhere.
- **The Close says achievements are "earned by how the activity went rather than by how many there have been" (O49).** O49 and the Achievement tag say the criteria were not observed. The Close states as fact what Pass one calls unresolved.
- **O108 says the calendar shows "how many streak activities are active".** The phrase is unclear (it may be a transcription of the streak count), so the draft does not carry it.
- **O99 gives a charge date of May 19th that does not sit 30 days after the session.** The analysis flags this itself (unresolved). The draft leaves the date out of copy.
- **O1 cross-references O37, which is the activity edit menu.** The link to the "routes that never run out" carousel item looks wrong, and O22 or O24 may be intended.

### Coverage changes

Nothing is held back, no tag is dropped, and no mechanic is added to the coverage list. The redraft does find new gaps, each cut from a page because it is a gap in what was covered, not a fact about Strava. These are additions to `sources/coverage/strava.md`:

- **What the public-club join looks like (O63).** The current Group Membership block states that a public club admits you straight away, and the analysis marks the case unresolved. Capture: join a public club and note whether you are in at once.
- **Streak period, weeks versus days (O107).** The block no longer says that the dashboard counts in weeks and the progress tab in days. The existing item 6 covers the continuity rule only. Capture: both screens side by side on an account with a running streak.
- **Streak calendar wording (O108).** The phrase "how many streak activities are active" is unclear in the record. Capture: the calendar screen, as shown.
- **Big figure on the 100,000 steps challenge (O80).** Capture: the leaderboard on that challenge, with the highest entry in view.
- **What your answers change later.** Whether the sports and purposes you choose (O9, O11), your fitness level (O12), the safety condition on age (O7, O60), the activity tags and effort rating (O30) and "prefer not to say" on gender (O8) change anything in the app afterwards. Capture: answer differently on a second account and compare Home, recommendations and leaderboards.
- **Defaults and options never opened.** The default for who can message you (O78) and the feed ordering options (O66). Capture: both settings screens.
- **Upload reminders (O110).** Whether one ever arrives and what it says. Capture: leave an activity unrecorded for a few days on an account with reminders on.
