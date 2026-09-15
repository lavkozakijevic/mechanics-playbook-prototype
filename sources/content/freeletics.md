# Freeletics

**Teaser:** Freeletics shows the same animation of a coach building a personalized plan twice, each time right before it asks for an account or a payment, and no plan is ever delivered on the account reviewed.

Freeletics is a fitness app built as a funnel: a twelve-step questionnaire feeds a stated AI coach, which is shown assembling a plan twice, each time immediately before the app asks for an account or a payment. The plan itself stays behind a subscription throughout: the Coach tab's own training-plan control opens the paywall directly. A profile level, a leaderboard, and a network of other athletes are all visible from the first login, though nothing in the app is seen advancing them. A community layer of user-created challenges and comments under the app's own posts sits apart from all of this, connected to nothing else in the record.

---

## System view

Freeletics is a medium complexity system whose spine is the onboarding questionnaire, which leads into a stated plan and from there into a price, with a profile level, a leaderboard, and a user-created challenge layer running alongside it. The plan is shown being built twice: once right before the account-creation screen, and once right before a half-price offer, with an animation of the coach designing the plan at each of those two points in the flow. We did not observe a workout in this analysis, so the training loop itself is described only by what Freeletics states about it, not by anything seen operating.

---

## Mechanics

### Challenge

**Implementation summary:** Any user can create a challenge on one exercise and invite others to join it, entirely apart from the app's own workout catalogue.

**What was observed:** Freeletics lets any user create a challenge by choosing one exercise, a consistency or repetition basis, and a date, then invites other people to join. Challenges already listed carry titles naming a specific objective, including a daily stretch, a thousand burpees, and a numbered week of squats. At least one listed challenge shows a participant count.

**How it is presented:** Challenges sit in their own section of the Community tab, alongside the Feed. A created challenge is discussed by other users in comments on the app's own posts, connecting it to the wider community layer.

**What is worth noting:** The objective is set on a single exercise chosen by whoever creates the challenge, not by Freeletics itself, making this the one mechanic in the app that users build for each other rather than one the app hands down. Freeletics doesn't state what happens when a challenge concludes, or what separates a completed challenge from one still running.

**Key findings:**

- Any user can create a challenge, choosing one exercise, a consistency or repetition basis, and a date.
- Challenges already listed include a daily stretch, a thousand-burpee target, and a named week of squats.
- At least one challenge shows how many people have joined it.
- Freeletics doesn't state what happens when a challenge ends or how a completed one differs from one still open.

**Screenshots needed:** the Challenges section of the Community tab, and the challenge-creation flow.

### Community Space

**Implementation summary:** Every Freeletics post in the Community feed carries a running comment thread from other athletes.

**What was observed:** The Community tab's feed shows posts and articles from Freeletics, each carrying reaction icons and a comment count. Opening a post shows comments from other identified people discussing updates, timing, bugs, and the challenges the post refers to, and those comments stay visible under the post for later readers.

**How it is presented:** The discussion sits directly under each Freeletics post rather than in a separate space, reached by opening the post itself.

**What is worth noting:** The shared space Freeletics actually builds is attached to the app's own posts, not to a general athlete-to-athlete area; every contribution sits as a reply to something Freeletics published.

**Key findings:**

- Every post in the Community feed carries reaction icons and a comment count.
- Comments from other people remain visible under a post for later readers.
- Comment topics include app updates, timing, bugs, and the challenges a post refers to.
- The discussion is attached to Freeletics' own posts rather than to a separate community space.

**Screenshots needed:** a Freeletics post in the Community feed showing its comment thread.

### Leveling

**Implementation summary:** A new account starts at Level 1, and the same level number is shown on every other athlete's profile and in search results.

**What was observed:** The profile tab shows the new account's level at the very top, starting at Level 1. The same number is shown on other accounts throughout the app: the official Freeletics account appears at level 74, and searching for athletes by name returns each one's profile image alongside their level.

**How it is presented:** Level is the first figure on the profile, and reappears wherever another athlete is shown, in search results and on the leaderboard.

**What is worth noting:** Freeletics shows level everywhere an athlete is displayed, on the user's own profile, on searched accounts, and on the one account it follows automatically, before stating anywhere what makes it move. On the account reviewed, no workout was completed, so whether level responds to anything the user does isn't shown.

**Key findings:**

- A new account starts at Level 1.
- The official Freeletics account is shown at level 74.
- Level appears on every athlete returned by a name search, alongside their profile image.
- Freeletics doesn't state what advances a level or what the next threshold is.

**Screenshots needed:** the profile tab showing Level 1, and a search result showing another athlete's level.

---

## Onboarding and first run

A twelve-step questionnaire feeds a stated AI coach, which is shown building a plan twice, each time immediately before an account request or a paid offer.

### O1. Three propositions before any choice

Freeletics opens on a screen with three statements about AI-backed coaching, adapting to the day, and training with any or no equipment, offering Continue or an existing-account route. No product content is reachable before this choice, and no guest or skip route is shown.

### O2. Data consent before tracking

After a "ready to start" screen, Freeletics asks to collect information and share it with third parties, framed as helping the app improve. Accepting brings up the system prompt asking whether to allow activity tracking, so the app's own request comes first.

### O3. Questionnaire outline and step count

The first onboarding screen states the setup takes five minutes, outlines three stages, profile and goals, training preferences, and a personalized plan, and shows a step bar running from 1 to 12. The setup is framed as input to an AI coach rather than as account registration.

### O4. Body and identity questions

Freeletics asks, one screen at a time, for gender, current weight, height, and date of birth, with motivational headlines attached to the weight and height screens.

### O5. Testimonials mid-questionnaire

After date of birth, Freeletics shows a screen of testimonials headed "Stories from athletes like you," attributing stories to named people with ages.

### O6. Goal selection over twelve weeks

Freeletics asks for up to three goals, framed around what the user wants to achieve in the next twelve weeks, offering options including improving fitness, endurance, stress relief, diet, muscle, and fat loss.

### O7. Athlete count and welcome

The next screen states that more than ten million athletes have gotten fit with Freeletics and welcomes the user to the team, asking nothing and offering no choice.

### O8. Fitness level slider

Freeletics asks for a self-rated fitness level on a slider running from not fit at all to really fit, with accompanying text that changes as the slider moves.

### O9. Training modality list

Freeletics asks how the user would like to train, offering bodyweight, dumbbells, running, barbell, and kettlebell as options.

### O10. Experience self-placement

Freeletics asks the user to choose which of four statements best describes them, covering both fitness experience and motivation.

### O11. Seventeen minutes a day

Freeletics states "Seventeen minutes a day. That's all you need," without showing the figure computed from any answer given.

### O12. First plan-building animation

Freeletics shows an animation of the AI coach designing the user's plan, alongside a graph comparing fitness and time with and without Freeletics, with a large gap between the two lines and no data points or stated figures on either axis. The screen leads directly into account creation.

### O13. Account creation after the questionnaire

Immediately after the animation, Freeletics asks the user to create an account, offering Apple, Google, Decathlon, or email as sign-in routes, with no stated route past this screen without an account.

### O14. Email confirmation reopens the app

Freeletics asks the user to confirm the account by clicking a link in an email, with a resend control. Clicking the link reopens the app and continues to the reminders request.

### O15. Choosing a training journey

After the first paywall is closed, Freeletics asks the user to choose one of three training journeys, Start Strong, Cardio Burn, and Balanced Burn, stated as 18 sessions over six weeks, 48 sessions over twelve weeks, and 40 sessions over twelve weeks respectively, with an explanation available of what a journey is. A journey must be chosen to proceed.

### O16. Equipment for the journey

Freeletics asks what equipment is available for the chosen training journey, offering a long list of items, asked a second time in a narrower form after the earlier training-modality question.

### O17. Training days and second plan-building animation

Freeletics asks which days of the week to train, with Wednesday, Friday, and Sunday preselected, alongside further preferences for sprints, training space, and training quietly, stating that every preference can be changed later. Starting the journey shows a second animation building the personalized training plan, which leads directly into a discounted offer.

### O18. First unguided screen

Once the discounted offer is closed, Freeletics lands on the Coach tab, one of three bottom-navigation tabs alongside Community and Profile, with no tutorial, tooltip, or tour shown on arrival.

---

## Core loop and automation

A calendar of upcoming sessions and a catalogue of workouts sit behind the Coach tab; no workout is started in this analysis.

### O19. Coach tab calendar

Below the discount banner, the Coach tab carries a calendar showing when certain exercises are next.

### O20. Unlocked workouts row

The Coach tab carries a row of workouts described as unlocked, including Core Ready, Lower Body Buildup, On Your Marks, and Pulse Razor, alongside other equipment-specific workouts.

### O21. Full workout catalogue

A See all control opens a catalogue organized by kind: cardio, equipment, mobility, a category read as "God workouts," signature workouts including Athena, Morpheus, and Prometheus, muscle-group workouts, time-based workouts, and single exercises, ending in a mindset-coaching link at the very bottom.

### O22. The workout loop itself

No workout is started, completed, or rated in this analysis. The loop Freeletics describes, in which the user reports how each workout went and Coach adapts later sessions, is stated on the journey-explanation screen but not seen operating.

---

## Goals and progression

A profile level and a workouts-and-achievements area sit on an account with no completed workouts.

### O23. Profile opens on Level 1

The profile tab shows the new account's level at the very top, at Level 1. What advances the level, and any threshold for the next one, is not stated.

### O24. Other accounts' levels and points

The official Freeletics account, the only profile the account follows, is shown at level 74 with 431,000 points. Searching for athletes by name returns each one's profile image and level. The relationship between points and level is not stated.

### O25. Workouts count and achievements area

A badge area on the profile shows how many workouts the user has done, in the same area as an achievements section. No achievement, criterion, locked item, or attained state is named.

---

## Access and eligibility

Workouts split into an unlocked row and a subscription catalogue, with the training plan itself reachable only through the paywall.

### O26. Unlocked versus subscription workouts

Freeletics marks a set of workouts on the Coach tab as unlocked, while the discounted offer lists unlocking signature workouts among what a subscription brings, putting the signature-workout category behind the subscription on this account.

### O27. Training plan control opens the paywall

The Coach tab's "Become your best self" section offers a control to get the training plan; pressing it opens the paywall, so the plan built during onboarding is not reachable without a subscription on this account.

### O28. Fitness level and Athlete score reserved for subscribers

The profile states that the user needs to subscribe to learn more about their fitness level and to stay motivated with a daily Athlete score, presented as a motivational daily figure rather than as a record.

---

## Economy and resources

A reward-credit balance, earned by referring friends, prices a gift card and lifetime app access.

### O29. Reward credits price two rewards

The rewards surface shows credits available and offers a choice between a €25 gift card usable in more than 150 stores, costing one credit, or lifetime access to Freeletics Coach, costing three credits. The balance itself is not read out, and whether taking a reward reduces it isn't shown.

---

## Social

A community feed of the app's own posts, user-created challenges, and a network of other athletes make up the social layer.

### O30. Feed shows only Freeletics' own posts

The Community tab's Feed section shows posts and articles from Freeletics and nothing else, each carrying reaction icons and a comment count or control, since the account follows only Freeletics.

### O31. Comments under Freeletics posts

Opening a post shows comments from other people, covering updates, timing, bugs, and the challenge the post refers to. Comments stay visible under the post for later readers.

### O32. User-created challenges list

The Challenges section lists challenges created by Freeletics athletes, with titles including a daily stretch, a thousand-burpee challenge, and a squat challenge for a numbered week. At least one entry shows its participant count.

### O33. Anyone can create a challenge

Freeletics lets the user create a challenge of their own, based on either consistency or repetition, by choosing one exercise, setting a date, and asking people to join. Only one exercise can be chosen per challenge.

### O34. Network suggests ambassadors and searches athletes

An icon at the top of the Community screen opens a network surface for discovering people to follow, leading first with Freeletics ambassadors shown with a country flag, then the people already followed and a find-athletes route. Typing a name returns athletes with their profile image and level. Following is one-directional.

### O35. Profile shows posts, followers, and following

The profile badge area shows how many posts the user has made, how many followers they have, and how many people they follow, alongside the workouts count.

### O36. Leaderboard against the followed account

The profile includes a leaderboard on which the user currently holds zero points, shown against the Freeletics official account at level 74 with 431,000 points, the only account followed. What earns points, and the order of entries, is not stated.

---

## Reach beyond the app

A referral link, a friend-facing six-month offer, and a link to the Freeletics podcast each point outside the app.

### O37. Rewards surface issues an invite link

The Rewards route on the profile gives an invite link, stating that sharing it with friends earns rewards, and shows a friends-referred count, at zero on this account, beside the credit balance. What an invited friend must do for the referral to count is not stated.

### O38. Referral offer for the invited friend

A second prompt on the profile offers to share "your gains" and gives a referred friend six months of access for free, stating that one referred friend brings the gift card and three bring lifetime Coach access, matching the credit prices for those same rewards.

### O39. Mindset coaching opens the podcast

Mindset coaching, at the bottom of the workout catalogue, leads to the Freeletics podcast. Whether it opens inside the app or on an external platform is not stated.

---

## Monetization

Three multi-month plans, a default meal-plan add-on, and a time-limited half-price offer make up a paywall reached before any content is delivered.

### O40. First paywall and three plans

Following the reminders request, Freeletics shows a paywall offering three plans: three months at 54.99, six months at 99.99, and twelve months at 124.99, stated as weekly figures that fall as the commitment lengthens. No monthly plan or free trial is offered, and the paywall appears before any workout, plan, or content has been delivered.

### O41. Meal-plan add-on on by default

The paywall carries a personalized meal-plan toggle switched on by default; turning it off lowers all three prices, to 49.99, 79.99, and 94.99 respectively. The prices shown first are the higher, meal-inclusive ones.

### O42. Paywall is dismissible

The paywall can be closed with an X, leading directly into the training journey choice, with no confirmation or retention screen shown on close.

### O43. Half-price offer with a countdown

Immediately after the training plan is built, Freeletics offers 50% off with a 50-minute countdown, pricing training and nutrition together at 62.99 for twelve months or training alone at 47.99 for twelve months, each roughly half the twelve-month prices shown earlier. Only twelve-month plans are offered at this discount, and the pop-up can be closed.

### O44. Discount persists as a banner

After the pop-up is closed, the same discount continues as a banner at the top of the first unguided screen, with the countdown still running and a subscribe control. What happens when the countdown ends isn't stated.

---

## Return triggers

A single reminders request is the only return trigger found in the app.

### O45. Reminders request before notifications

When the email confirmation link reopens the app, the first screen asks to turn on training reminders, with Turn on reminders and Not now offered as equal choices. Choosing to turn them on brings up the system notification prompt. No reminder or notification arrives during this analysis, and no rating prompt, streak, sign-in reward, or absence summary appears anywhere in the app.
