# Strava: behavioral design analysis

**Session date:** 16 Apr 2026
**Additional sessions:** 20 Apr 2026
**As observed:** 16 Apr 2026
**App version:** None.
**Analysis date:** 14 Sep 2026
**Last updated:** 14 Sep 2026

Source. This analysis is built from two Granola walkthrough sessions, "App Mechanic: Strava I" recorded on 16 Apr 2026 and "App Mechanics: Strava II" recorded on 20 Apr 2026, both retrieved in full as verbatim transcripts rather than as summaries. The first session runs from the first launch of the iOS app through the whole onboarding flow to the point where the dashboard is reached. The second session opens on that dashboard and covers the profile, maps, segments, search, messaging, the streak surface, settings, the recording flow through to a saved first activity, and the groups area including clubs and club events. Both are narrated walkthroughs on a newly created account; the second is narrated by two speakers, and the transcript's speaker attribution alternates mid-sentence in places, so nothing in this record rests on which speaker said a thing. Three renderings in the source are unstable and are normalised here: the partner running product appears as Runa, Runna, runner, Runup and run up, and is written Runna throughout, following the product's own framing "Runna by Strava" as it appears in settings; the paid tier appears as subscription, Strava subscription and Strava Run; the featured April challenge appears as "April 5000x Brooks challenge" and "April 5150". The narrators' evaluative judgements, their speculation about the product's commercial motives, and their guesses about who owns what are excluded from the record; only what the screens were described as showing is carried. Several figures conflict between and within the sessions, and those conflicts are recorded where they occur rather than reconciled. No prior analysis of this app, published material, or outside knowledge of it was consulted.

# Pass one: observation record

1. Onboarding and first run: O1 to O21
2. Core loop and automation: O22 to O44
3. Goals and progression: O45 to O56
4. Access and eligibility: O57 to O63
5. Economy and resources: no observations
6. Social: O64 to O82
7. Reach beyond the app: O83 to O92
8. Monetization: O93 to O104
9. Return triggers: O105 to O114

## Onboarding and first run

**O1. First launch carousel and the two entry routes.**

**Observed:** On first open the app presents an auto-scrolling carousel of four screens, headed "track your active life in one place", "make progress towards goals", "get motivation from your people" and "route options that never run out", each paired with an image of a part of the app (tier: directly observed). Two actions are offered from this screen and no others: "Join for free" and "Log in" (tier: directly observed).

**Detail:**
- The carousel advances on its own rather than on a swipe (tier: directly observed).
- No route past the screen without choosing one of the two actions was presented (tier: strongly supported, no skip or browse option appeared).
- The four headings name tracking, goals, other people and routes, which is the order the product later builds the dashboard in (tier: directly observed).

*Cross-reference: O37, O45, O64.*

**O2. Three account creation routes.**

**Observed:** Choosing "Join for free" offers three routes: continue with Google, continue with Apple, or sign up with an email address (tier: directly observed). The session used email (tier: directly observed).

**Detail:** None.

**O3. Verification code screen carries a button into the mail app.**

**Observed:** After the email address is submitted the app states "we send you a code. Open up and get the code", and places an "Open email app" button on the same screen (tier: directly observed).

**Detail:**
- The button removes the app switch the user would otherwise perform to read the code (tier: directly observed).

**O4. Tracking permission is asked immediately after the code.**

**Observed:** Once the code is entered, a system prompt asks to "allow Strava to track your activity across other companies' apps and websites" (tier: directly observed).

**Detail:**
- No Strava-authored screen preceded or explained the prompt at this point in the flow (tier: directly observed).
- The prompt arrives before the product has shown anything it does (tier: directly observed).

**O5. Name capture, framed by findability, with a stated public default.**

**Observed:** The app asks "what is your name? This is how your friends can find you on Strava" and takes a first and last name (tier: directly observed). The same screen states that the profile is public by default (tier: directly observed).

**Detail:**
- The reason given for collecting the name is that other people will use it to find the user, not that the product needs it (tier: directly observed).
- The public default is disclosed at the point of collection rather than later in settings (tier: directly observed).

*Cross-reference: O14, O62.*

**O6. The flow addresses the user by name from the next screen.**

**Observed:** The screen immediately after the name step reads "Welcome, Lav", using the first name just entered (tier: directly observed).

**Detail:** None.

**O7. Birthday capture with three stated uses.**

**Observed:** The app asks "when's your birthday? We'll use this for performance analysis, filtering leaderboards and to keep younger users safe", and takes a date of birth (tier: directly observed).

**Detail:**
- Two of the three stated uses are product features and one is an eligibility condition (tier: directly observed).
- What the safety condition changes for a younger user was not observed (tier: unresolved).

*Cross-reference: O60.*

**O8. Gender capture tied explicitly to leaderboard placement.**

**Observed:** The app asks "what's your gender? We'll use this to determine which leaderboards you appear on", with the options man, woman, non-binary, and prefer not to say (tier: directly observed).

**Detail:**
- The stated purpose is a single feature rather than a general profile field (tier: directly observed).
- What happens to leaderboard placement when "prefer not to say" is chosen was not observed (tier: unresolved).

*Cross-reference: O61, O79.*

**O9. Sport type selection, presented as a preview and skippable.**

**Observed:** The app asks "what types of activities do you like to do?" under the framing "here's a peek at what Strava has to offer. When you want to record an activity, you'll choose from over 30 sport types" (tier: directly observed). The listed options include run, ride, walk, hike, swim, CrossFit, elliptical, golf, kayak, rock climb, row, skate, ski, snowboard, stair stepper, stand up paddle, surf, weight training, yoga and other (tier: directly observed). The screen can be passed by tapping continue without selecting anything (tier: directly observed).

**Detail:**
- The screen is framed as showing the user what the product offers as much as collecting an answer (tier: directly observed).
- The stated sport count on this screen is "over 30" (tier: directly observed).

*Cross-reference: O11, O23.*

**O10. A population figure is placed between two data collection steps.**

**Observed:** A full screen states "you're in good company. 150+ million active people on Strava are excited to move with you", carrying no question and no action beyond continuing (tier: directly observed).

**Detail:**
- The screen sits between the sport type question and the purpose question, interrupting a run of questions (tier: directly observed).
- It is the only screen in the observed flow whose content is the size of the user base (tier: directly observed).

*Cross-reference: O74.*

**O11. Purpose selection, with feature copy revealed on each tap.**

**Observed:** The app asks "what do you plan to use Strava for? Choose as many as apply", listing compete with others, connect with other active people, build an exercise habit, explore new places, train for an event or personal goal, and maintain my health (tier: directly observed). Tapping an option reveals a line of copy beneath it: "build an exercise habit" returns "join the challenge and find new ways to stay motivated. Uploading to Strava makes it fun", and "maintain my health" returns "track 48 sports. Pair a smart watch or fitness tracker for a fuller picture of your active life" (tier: directly observed). More than one option can be selected (tier: directly observed).

**Detail:**
- The revealed copy names a product feature against the motive the user has just claimed (tier: directly observed).
- The sport count stated here, 48, conflicts with the "over 30" stated one screen earlier (tier: directly observed).
- Whether the selections change anything later in the product was not observed (tier: unresolved).

*Cross-reference: O9, O23, O53.*

**O12. Fitness level self-assessment.**

**Observed:** The app asks "where are you in your fitness journey?" under the line "people of all experience levels use Strava from total beginners to professional athletes", with four described options: beginner, "I'm new to fitness or getting back into it"; intermediate, "I can do easy to moderate activities"; advanced, "I like to push myself with difficult activities"; and pro, "I'm a professional athlete" (tier: directly observed).

**Detail:**
- The level is declared by the user rather than derived from anything the product has recorded (tier: directly observed).
- Whether the declared level changes any later content, suggestion or threshold was not observed (tier: unresolved).

*Cross-reference: O39.*

**O13. The onboarding flow cannot be navigated backwards.**

**Observed:** No route back to a previous screen exists at any point in the onboarding flow (tier: directly observed).

**Detail:**
- Answers already given cannot be revised within the flow; the profile editor reached later carries name, biography, primary sport, birthday, gender and weight (tier: directly observed).

*Cross-reference: O67.*

**O14. A privacy screen states what is hidden by default.**

**Observed:** A screen headed "custom privacy options for almost everything" states that the product cares about the user's safety on Strava and that it "will hide the start and end of your activities by default", with the line "customize 12 privacy controls and settings, including who can see your profile and your activities" beneath (tier: directly observed).

**Detail:**
- The screen discloses a protective default rather than asking for a decision (tier: directly observed).
- It follows the screen that established the profile is public by default (tier: directly observed).

*Cross-reference: O5, O62.*

**O15. A data sharing screen names the community feature the data powers.**

**Observed:** A screen headed "a team effort" states "the data that you and millions of other active people share to Strava is used to power community features like the Global Heatmap and to test, improve and develop features. You can stop sharing data for these purposes at any time in settings" (tier: directly observed).

**Detail:**
- The screen names a specific feature the shared data produces rather than describing the sharing in general terms (tier: directly observed).
- The opt-out is stated as available later in settings rather than offered on the screen (tier: directly observed).

*Cross-reference: O24.*

**O16. The first subscription screen, with full trial terms, arrives during onboarding.**

**Observed:** A subscription screen headed "better habits, smarter training, steady progress" carries the line "consistency makes the difference. Stay on track with a subscription", and offers an annual plan billed at $79.99 per year and a Strava plus Runna plan at $149.99 per year (tier: directly observed). It offers a 30-day free trial, states that the trial "unlocks every single Strava feature", and states "in 28 days we'll remind you that your free trial is ending soon and in 30 days your annual subscription begins. You'll be charged $79.99" (tier: directly observed). The screen can be skipped immediately (tier: directly observed).

**Detail:**
- The reminder is promised two days before the charge (tier: directly observed).
- The skip is available without scrolling or waiting (tier: directly observed).
- This screen arrives before the user has recorded anything (tier: directly observed).

*Cross-reference: O94, O96, O104.*

**O17. A second screen itemises what the paid tier unlocks, led by the partner product.**

**Observed:** A screen headed "what you unlock" lists: follow a custom training plan built for your goal from 5K to marathon, under the Strava plus Runna label; get expert guidance and pacing, mindset and injury prevention from world class coaches, under the same label; see estimated finish times for your next 5K, 10K, half or full marathon; know where to run with suggested routes and other mapping tools; and analyze workouts with advanced insights and more (tier: directly observed). The screen can be skipped (tier: directly observed).

**Detail:**
- Two of the five items are attributed to the partner product rather than to Strava (tier: directly observed).
- The coaching material named here was not reached anywhere in either session (tier: unresolved).

*Cross-reference: O83, O86, O96.*

**O18. Notification permission is primed by a Strava screen before the system prompt.**

**Observed:** A screen headed "want an occasional nudge?" states "allow notifications so you can get check-ins and reminders to help you reach your goals", shows an example of what a notification will look like, and adds "make sure you select allow on the next step to receive notifications from Strava" (tier: directly observed). The system notification prompt follows it (tier: directly observed).

**Detail:**
- The priming screen instructs the user how to answer the prompt that follows (tier: directly observed).
- The example notification is shown before permission is granted (tier: directly observed).

*Cross-reference: O105.*

**O19. A friend-finding step is placed inside onboarding.**

**Observed:** A screen headed "it's not always a solo sport" states "add friends on Strava to give and receive kudos, share encouragement and spark your motivation", above "find your friends on Strava" (tier: directly observed). A search field returns people with profile images based on the user's location, and a set of well-known athletes is offered to follow (tier: directly observed). The step can be passed without following anyone (tier: directly observed).

**Detail:**
- Local people are surfaced before any contact list or connection has been shared (tier: directly observed).
- The framing names the reciprocal action, giving and receiving kudos, rather than the follow itself (tier: directly observed).

*Cross-reference: O64, O68.*

**O20. A closing screen states what the user is now expected to do.**

**Observed:** A screen reads "welcome, you're ready to go. Start uploading activities, compete with friends, build your community and most importantly have fun" (tier: directly observed).

**Detail:**
- Four behaviours are named in one line: upload, compete, build a community, and enjoy it (tier: directly observed).

**O21. The flow ends by pushing straight into a first recording, with the alternative named.**

**Observed:** A pop-up headed "record an activity with Strava" states "ready to take us for a spin? Just choose from 30+ sport types and start moving. Or you can upload activities by connecting your Garmin, Peloton or other device", with two buttons, "record now using Strava" and "connect your device" (tier: directly observed). Choosing to record opens the recording surface and asks for permission to access fitness activity and location (tier: directly observed).

**Detail:**
- Guidance ends here: the recording screen is the first surface the user is left to act on alone (tier: strongly supported, no further instruction screen follows in the session).
- The device route is offered on equal footing with recording in-app (tier: directly observed).
- A third sport count, "30+", appears on this screen (tier: directly observed).

*Cross-reference: O23, O90.*

## Core loop and automation

**O22. Five-item bottom navigation.**

**Observed:** A navigation bar at the bottom of the screen carries Home, Maps, Record, Groups and You (tier: directly observed). Record occupies the centre position (tier: directly observed).

**Detail:**
- The five destinations divide the product into the feed, the map, the act of recording, other people, and the user's own record (tier: directly observed).

**O23. Recording opens on sport selection across grouped categories.**

**Observed:** Tapping Record opens a screen showing the user's current location and the area around it, with a sport selector offering foot sports, cycle sports, strength sports, racquet sports, water sports, winter sports, team sports and other sports (tier: directly observed). The selector opens with a "your top sports" group at the top, holding the activities the user selected or has most often performed (tier: directly observed).

**Detail:**
- The narrators counted "probably 40, at least 30 plus" sports in the selector, which is a fourth figure alongside the 30+, over 30 and 48 stated elsewhere (tier: directly observed).
- The recent-and-chosen shortcut sits above the full taxonomy, so the common case takes one tap (tier: directly observed).

*Cross-reference: O9, O11, O21.*

**O24. The pre-record screen carries map layers, route options and safety sharing.**

**Observed:** Before starting, the screen allows the map and its layers to be adjusted, and shows which areas nearby have been covered by other people, highlighted on the map (tier: directly observed). A route can be added, and a new route can be built, which requires a subscription (tier: directly observed). A "stay safe" option sends a text that begins sharing the user's live location (tier: directly observed).

**Detail:**
- Other people's coverage is visible on the map before the user has recorded anything (tier: directly observed).
- The route builder is named and reachable but locked (tier: directly observed).

*Cross-reference: O15, O57, O82.*

**O25. Recording settings cover audio, screen, pausing, location and sensors.**

**Observed:** The recording settings offer audio cues, a choice between normal screen lock behaviour and preventing screen lock, auto pause, live location sending, and a heart rate sensor, which requires permission for Strava to connect to Bluetooth devices (tier: directly observed).

**Detail:**
- Each setting removes a specific interruption during the activity rather than adding a feature to it (tier: strongly supported, all five concern what happens while the phone is in a pocket or on a handlebar).

*Cross-reference: O43.*

**O26. The recording screen shows four live figures and pauses itself.**

**Observed:** Starting a recording opens a full screen showing speed of movement, distance covered, elevation gain and current elevation (tier: directly observed). When the app detects that the user has stopped moving it auto pauses after a few seconds, and the screen shows whether any activity is registering (tier: directly observed). The recording can be paused manually and minimised (tier: directly observed).

**Detail:**
- The session tested responsiveness by spinning the phone in place and watching the speed figure move (tier: directly observed).
- Auto pause means an interruption does not have to be handled by the user for the record to stay accurate (tier: directly observed).

**O27. Finishing offers resume or save, with a default name taken from the time of day.**

**Observed:** Tapping finish offers to resume the activity or to save it (tier: directly observed). On save, a name field is pre-filled from the time of day, suggesting "Morning Ride" for a morning bike activity (tier: directly observed).

**Detail:**
- The suggested name combines the time of day with the selected sport (tier: strongly supported, the observed instance was a morning ride and produced exactly that pair).
- Resume is offered alongside save, so ending the recording is not final (tier: directly observed).

**O28. The save screen is where the activity is composed for other people.**

**Observed:** The save screen carries the activity name, an invitation to "share more about the activity and use the @ symbol to tag others in this activity", the activity type, a sample map, and controls to add photos and videos and to change the map type (tier: directly observed). The map type control states that "subscribers can visually highlight activity stats with personalized stat maps" (tier: directly observed). A prompt on the same surface reads "to unlock more maps, more stats and more fun, unlock all", and elsewhere "unlock the best of Strava" (tier: directly observed).

**Detail:**
- Tagging, description, media and map treatment are all collected in the same step as saving, so the audience-facing version is assembled before the record exists (tier: directly observed).
- Two of the controls on this screen are partly locked (tier: directly observed).

*Cross-reference: O57, O81, O88.*

**O29. Media limits are stated at the point of adding.**

**Observed:** Adding a video returns the line "just so you know, videos on Strava can be up to 30 seconds long. If your video is longer than that, we'll auto trim it to the first 30 seconds for you. You can add as many photos and videos as you want" (tier: directly observed).

**Detail:**
- The length cap is enforced by trimming rather than by rejection (tier: directly observed).
- The count of items is not capped (tier: directly observed).

**O30. Activity tags and a subjective effort rating.**

**Observed:** A details section offers activity tags: race, for a cause, workout, recovery, commute, with pet, and with kid (tier: directly observed). A separate question asks "how did that activity feel?" with the options easy, moderate and max effort (tier: directly observed).

**Detail:**
- The effort rating is available whether or not a heart rate monitor is connected (tier: directly observed).
- What the tags or the effort rating change in the product was not observed (tier: unresolved).

**O31. Private notes are held on the activity and shown to no one else.**

**Observed:** The save screen carries a private notes field described as visible only to the user (tier: directly observed).

**Detail:** None.

**O32. Gear can be created during the save rather than beforehand.**

**Observed:** New gear can be added from the save screen, so an activity performed with equipment not previously registered does not have to be matched to an existing preset (tier: directly observed).

**Detail:**
- The alternative, leaving the save flow to create the gear first, is avoided (tier: directly observed).

*Cross-reference: O42.*

**O33. Visibility, hidden details and feed muting are set per activity at save time.**

**Observed:** Visibility offers everyone, followers only, or only the user (tier: directly observed). Hidden details can be set for calories, speed and start time (tier: directly observed). A mute activity control states "do not publish to home or club feed. This activity will still be visible on your profile" (tier: directly observed).

**Detail:**
- Three separate controls govern who sees it, which figures are shown, and whether it enters the feeds (tier: directly observed).
- Muting removes the activity from distribution while keeping it in the user's own record (tier: directly observed).
- Save and discard are both offered at the end (tier: directly observed).

*Cross-reference: O62, O65.*

**O34. Saving the first activity produces a celebration and a recognised first.**

**Observed:** Saving plays an animation reading "nice work", followed by a pop-up reading "welcome to the team, Lav. Kudos on logging your first Strava activity", offering "view activity" and "view in trophy case" (tier: directly observed). A trophy is granted for this first activity (tier: directly observed).

**Detail:**
- The pop-up uses the product's own social vocabulary, kudos, for a system message (tier: directly observed).
- One of the two offered routes leads away from the activity just recorded and into the trophy case (tier: directly observed).

*Cross-reference: O47, O48, O101.*

**O35. The activity page leads with six figures and opens into a full stats block.**

**Observed:** The saved activity displays six headline stats: distance, elevation gain, moving time, average speed, max elevation and max speed (tier: directly observed). Tapping any of the six scrolls to a detailed block carrying average speed, max speed, moving time, elapsed time, elevation gain and max elevation (tier: directly observed). The page also carries share, comment and like controls, and a locked section headed "get smarter insights for faster progress. Track your activity stats and reach your goals with subscription features" (tier: directly observed).

**Detail:**
- Tapping a figure navigates rather than expanding in place; the same content is reachable by scrolling (tier: directly observed).
- Data problems on the recording are surfaced in the same block (tier: directly observed).
- The locked section sits below the user's own numbers rather than above them (tier: directly observed).

*Cross-reference: O102.*

**O36. The activity can be replayed as movement.**

**Observed:** A play button on the activity opens a replay of the user's movements across the route (tier: directly observed).

**Detail:** None.

**O37. The activity edit menu offers seven operations including deletion.**

**Observed:** A three-dot menu on the activity offers add media, edit activity, crop activity, edit map visibility, save route, refresh, and delete activity (tier: directly observed). A bookmark control on the same page opens the subscription screen (tier: directly observed).

**Detail:**
- Cropping and elevation adjustment are treated as ordinary corrections rather than as exceptions (tier: strongly supported, both also appear as their own notification types).
- Deletion is available directly from the activity (tier: directly observed).

*Cross-reference: O105.*

**O38. Activities and posts can be entered by hand.**

**Observed:** A plus button on the You tab creates a new post, adds a new photo, or adds a manual activity (tier: directly observed).

**Detail:**
- An activity performed without the app can still enter the record (tier: directly observed).

**O39. Instant workouts sit on the dashboard as one-tap suggestions.**

**Observed:** The dashboard carries instant workouts that can be started immediately, for example "a brisk walk. Keep your body moving with a brisk walk, maintain activity levels and enjoy for 30 minutes" (tier: directly observed).

**Detail:**
- Each carries a duration and a stated purpose (tier: directly observed).
- Whether starting one differs from starting an ordinary recording was not observed (tier: unresolved).

*Cross-reference: O40.*

**O40. A four-intent workout surface is held behind the trial.**

**Observed:** The Workouts tab offers four intents: maintain, "stay steady with activities that match your usual effort"; build, "push yourself with longer, harder workouts"; explore, "mix it up with a new sport, route or type"; and recover, "take it easy with lighter efforts to help you recover" (tier: directly observed). Tapping any of the four shows a card carrying an activity, a description, the activity type, a difficulty and an estimated time, ending in a "start free trial" button (tier: directly observed).

**Detail:**
- The cards are shown in full before the lock is stated, so the user sees the specific suggestion they cannot start (tier: directly observed).
- The four intents cover maintaining, increasing, varying and reducing effort, which is the full range of what a plan could ask (tier: directly observed).

*Cross-reference: O57, O59.*

**O41. Statistics are kept per sport across three time frames.**

**Observed:** The statistics surface holds in-depth activity statistics for running, cycling and swimming, showing averages this week, year to date, and all time for each (tier: directly observed).

**Detail:**
- Three sports carry dedicated statistics while the recorder offers far more (tier: directly observed).

*Cross-reference: O23.*

**O42. Gear is registered as equipment and accumulates distance against a user-set alert.**

**Observed:** Gear allows shoes or a bike to be added "to keep track of distance and usage" (tier: directly observed). Adding gear takes the sports it is used for, a nickname, a type, a brand chosen from hundreds for shoes, a model, and notes (tier: directly observed). A setting reads "notify me when I have reached" a chosen distance, with a range running from 400 to 1200 kilometres and 700 kilometres shown as an example (tier: directly observed).

**Detail:**
- Only two equipment types were offered, bikes and shoes (tier: directly observed).
- The threshold is chosen by the user rather than set by the product (tier: directly observed).
- Distance accumulates from recorded activities that name the gear (tier: strongly supported, gear is selected on the activity save screen and the feature is described as tracking distance and usage).

*Cross-reference: O32, O112.*

**O43. Health data and sensor access are governed by their own setting.**

**Observed:** A health data setting states that "Strava collects and uses health data such as heart rate from sensors, devices or apps that you've connected to Strava, that you submit directly to Strava. We use this data to provide you with features such as performance insights", and offers control over whether health-related data access is allowed (tier: directly observed).

**Detail:**
- The stated use is a named feature rather than a general purpose (tier: directly observed).

*Cross-reference: O25, O90.*

**O44. Weather and partner content attach themselves to activities automatically.**

**Observed:** A weather setting states that weather is shown on activities, powered by Apple Weather, and can be turned off for all of them (tier: directly observed). A partner integrations setting states "when you post an activity with one of the partners listed below, they can show unique or interesting content in the feed that isn't available on other activities. You have control over these integrations and can change them at any time with these settings" (tier: directly observed). No partner integrations were present on the account (tier: directly observed).

**Detail:**
- Both attach third-party content to the user's own activity without the user adding it (tier: directly observed).
- What partner content looks like in the feed was not observed, as no partner was connected (tier: unresolved).

*Cross-reference: O85, O90.*

## Goals and progression

**O45. A suggested goal invites the user to set a weekly activity target.**

**Observed:** The dashboard carries a suggested goal surface where the user sets what they want to achieve with the app, expressed as how many activities per week they want completed (tier: directly observed).

**Detail:**
- The target is chosen by the user; the product supplies the surface and the unit (tier: directly observed).
- Whether the product tracks, concludes or resets the target was not observed (tier: unresolved).
- The goal surface is one of four items in a carousel at the top of the dashboard, alongside the streak, instant workouts and the weekly snapshot (tier: directly observed).

*Cross-reference: O39, O107, O113.*

**O46. A profile completion meter names the next step and chains prompts behind it.**

**Observed:** The profile states "your profile is 80% complete" with the line "finalize your profile and choose your email", and names the profile photo as the next step (tier: directly observed). A question mark beside the step opens "why upload a profile photo? Show your friends it's you with an image of your choice. You can control who can see your photo by adjusting your privacy settings" (tier: directly observed). Continuing from the photo step produces the subscription pop-up, then a screen headed "let your friends know you're here" offering to sync contacts or skip, then "that's it. Thanks. You can update your information at any time from your profile page" (tier: directly observed). The 80% badge remained in place because nothing was changed (tier: directly observed).

**Detail:**
- The percentage is stated without listing what the remaining 20% consists of beyond the named next step (tier: directly observed).
- The explainer answers the objection to the step rather than describing the field (tier: directly observed).
- Two further asks, the paywall and the contact sync, are placed inside the completion flow rather than raised on their own (tier: directly observed).
- The badge persists until the work is done (tier: directly observed).

*Cross-reference: O69, O94.*

**O47. The trophy case holds a fixed ladder of activity-count thresholds.**

**Observed:** A trophy case at the bottom of the profile holds entries for the first activity, third activity, fifth activity and tenth activity, and a "view all trophies" route shows that the ladder continues up to a thousand activities (tier: directly observed).

**Detail:**
- Positions not yet reached are shown in place with their conditions (tier: directly observed).
- Each position is defined by a count of activities rather than by distance, time or sport (tier: directly observed).
- No benefit beyond the trophy was observed at any position (tier: directly observed).

*Cross-reference: O34, O48.*

**O48. The first trophy is granted immediately on the first saved activity.**

**Observed:** Saving the first activity granted a trophy and offered a route straight into the trophy case (tier: directly observed).

**Detail:**
- The first position on the ladder is reachable in a single 44-second recording, which is what the session performed (tier: directly observed).

*Cross-reference: O34, O47, O101.*

**O49. Achievements are attached to activities and counted on profiles.**

**Observed:** Activities in the feed display the achievements won on them, and profiles carry a count of achievements held (tier: directly observed). One profile showed ten silver and another 53 trophies, some gold and some bronze (tier: directly observed). The user's own dashboard carousel showed achievements against the activity just recorded (tier: directly observed).

**Detail:**
- Achievements are graded, with gold, silver and bronze observed (tier: directly observed).
- The criteria that produce them were not observed (tier: unresolved).

*Cross-reference: O50, O52, O65.*

**O50. Best efforts and personal records are recognised and named.**

**Observed:** After the first activity a notification opened on "new best effort. Your longest ride ever" (tier: directly observed). The share card composed for that activity carried a "PR" personal record badge (tier: directly observed). A separate "best efforts" tab on the profile opens the paywall (tier: directly observed).

**Detail:**
- The recognition was produced by a 44-second recording, because it was the only ride on the account (tier: directly observed).
- The record is stated against the user's own history rather than against anyone else (tier: directly observed).

*Cross-reference: O57, O88.*

**O51. Segments are a browsable layer of named stretches with their own participation figures.**

**Observed:** Segments offers starred segments, described as "star your favorite segments to see them here and easily keep track of your progress and efforts", and an explore route listing segments in the user's location (tier: directly observed). Each shows how many athletes have completed it and the total efforts all time, and each carries a name given by a person (tier: directly observed). Segments can be filtered by length, from 0 to 5 kilometres or more than 5; by elevation, all, easy, hilly, or with a climb; and by surface, any, paved, or dirt (tier: directly observed).

**Detail:**
- Segments exist independently of the user and are populated by other people's efforts (tier: directly observed).
- Starring converts a public stretch into a private tracking target (tier: directly observed).

*Cross-reference: O79.*

**O52. The user's own segment standing is kept in three named forms.**

**Observed:** The segments surface holds KOMs and CRs, described as "here you'll find the segments where you hold the best overall time"; the user's personal records on segments; and a Top 10 list showing which segments the user stands in the top ten on (tier: directly observed).

**Detail:**
- One of the three is measured against the user's own history and two against other people (tier: directly observed).
- All three were empty on the account (tier: directly observed).

*Cross-reference: O79, O80.*

**O53. Challenges are presented on the dashboard with a stated purpose and named rewards.**

**Observed:** A suggested challenges block on the dashboard is framed "make accountability a little easier, more fun, and earn rewards" (tier: directly observed). The listed challenges include the April 400 Minute Run, "log 400 minutes this April to unlock a free two-week Runna trial", with more than 1,128,000 athletes shown as having joined; the Hoka Speedgoat 7 Vert Challenge with more than 431,000 joined, stating that a reward exists without naming it; the April 5000 x Brooks challenge, carrying a digital trophy, with more than 1,175,000 joined; the April 10 Days Active challenge, carrying a digital trophy, with more than a million joined; and the April 180 Minute Sweat challenge, "join our longest single activity challenge", carrying a digital trophy, with more than 837,000 joined (tier: directly observed). Eleven further challenges carrying digital trophies were listed, covering twenty hours of swimming, flexibility, 100,000 steps, a half marathon, a 10,000 challenge and an elevation challenge among others (tier: directly observed). An "explore challenges" route sits below them (tier: directly observed).

**Detail:**
- The participation figure is displayed on every challenge (tier: directly observed).
- The rewards observed are a digital trophy in most cases and a trial of another product in one (tier: directly observed).
- The success condition of the April 10 Days Active challenge was described in the session both as ten days active in the month and as ten days in a row, and the screen wording does not settle which (tier: unresolved).
- The session was recorded around three weeks into April, so the counts are a partial-month figure (tier: directly observed).

*Cross-reference: O54, O80, O84, O85.*

**O54. The challenge page states the boundary, the organiser, the terms and the reward.**

**Observed:** Opening a challenge shows a profile page for it carrying how many days are left, the club that organises it, the challenge details, what the user gets for completing it, a leaderboard, and a description (tier: directly observed). The featured challenge, the April 5000 x Brooks challenge, states "complete the first 5km run from April 1st to April 30th, 2026", and joining it and completing it produces a badge (tier: directly observed). Joining is a single tap on a join button with nothing else to configure (tier: directly observed).

**Detail:**
- The Strava Club organises most of the promoted and featured challenges (tier: directly observed).
- The days-left counter states the remaining boundary continuously (tier: directly observed).
- Joining from the list shows no further information; the terms are on the challenge page (tier: directly observed).

*Cross-reference: O53, O74, O80, O111.*

**O55. Challenges are filtered, recommended, and extended by a paid custom form.**

**Observed:** The Groups area opens on Challenges, which can be filtered by activity type and by elevation gain, moving time and distance (tier: directly observed). Sixteen challenges were recommended based on the user's own activities (tier: directly observed). A "create a group challenge" route, framed "start a custom challenge with friends", opens the paywall (tier: directly observed). An Active tab, framed "design your own challenge. Rally your crew with a custom group challenge. Your game, your rules", requires a free trial to be started (tier: directly observed).

**Detail:**
- Joining a product-run challenge is free; running one is paid (tier: directly observed).
- The recommendation set is keyed to the user's own recorded activity (tier: directly observed).

*Cross-reference: O57, O80.*

**O56. Subscription copy names four progress features the free tier does not carry.**

**Observed:** Beneath the streak calendar a block headed "unlock your full potential. Track your progress and reach your goals with subscription features" names performance predictions, goals, relative effort and a training log (tier: directly observed).

**Detail:**
- "Goals" appears here as a paid feature while a suggested goal surface exists on the free dashboard (tier: directly observed).
- None of the four were reached in either session (tier: unresolved).

*Cross-reference: O45, O57, O102.*

## Access and eligibility

**O57. A defined set of surfaces is withheld behind the subscription.**

**Observed:** The following were observed locked and routed to the paywall on use: route creation and the route builder, best efforts, the winter map type, the weekly, night and personal heat maps, terrain, the 3D map view, activity bookmarking, creating a group challenge, the Active challenge tab, personalized stat maps on the activity image, Beacon for devices, and the "explore and manage subscription" entry in settings (tier: directly observed). Paywall copy additionally names segment leaderboards, advanced training analysis, performance predictions, goals, relative effort and a training log (tier: directly observed).

**Detail:**
- The locks are spread across the map, the activity, the profile and the groups area rather than gathered into one paid section (tier: directly observed).
- Each lock is met at the point of use rather than declared in advance (tier: directly observed).

*Cross-reference: O24, O40, O50, O55, O56, O58, O94.*

**O58. Locked map layers cannot be previewed at all.**

**Observed:** The map offers standard, satellite, hybrid and winter types; global, weekly, night and personal heat maps; layers including places of interest and terrain; and a 3D view (tier: directly observed). The global heat map for running can be viewed (tier: directly observed). The winter map type, the weekly, night and personal heat maps, terrain and 3D cannot be previewed, and tapping any of them opens the paywall (tier: directly observed).

**Detail:**
- One member of each locked family is left open, so the shape of what is withheld is visible without any of it being usable (tier: strongly supported, the global heat map and the three ordinary map types are free while their siblings are locked).

*Cross-reference: O57, O94.*

**O59. The free trial is the stated route past every lock.**

**Observed:** Every observed lock routes to a paywall whose primary action starts a free trial rather than a purchase (tier: directly observed). The routes paywall states "try the very best of Strava. First month on us today. Unlock subscription features including routes, segment leaderboards, advanced training analysis and more" (tier: directly observed).

**Detail:**
- No lock offered a one-off purchase of the individual feature (tier: directly observed).

*Cross-reference: O96, O104.*

**O60. Age is collected as a safety condition during onboarding.**

**Observed:** The birthday screen states one of its uses as keeping younger users safe (tier: directly observed).

**Detail:**
- The condition is declared but what it changes was not observed (tier: unresolved).

*Cross-reference: O7.*

**O61. Gender determines which leaderboards the user appears on.**

**Observed:** The gender screen states that the answer determines which leaderboards the user appears on (tier: directly observed).

**Detail:**
- This is a condition on the user rather than on the content (tier: directly observed).

*Cross-reference: O8, O79.*

**O62. Private athlete profiles restrict what a non-follower can see.**

**Observed:** Some athlete profiles are private (tier: directly observed). Opening the following list of a private profile returns "this athlete is not following anyone" rather than a stated restriction (tier: directly observed).

**Detail:**
- The restriction is presented as an absence rather than as a lock (tier: directly observed).
- Privacy controls in settings cover who can see the profile page, activities, group activities, flybys, local legends and mentions, who can message, map visibility, hidden details, product improvements, public photos on routes, editing past activities, blocked accounts and personal information sharing (tier: directly observed).

*Cross-reference: O5, O14, O33, O78.*

**O63. Clubs are public or private, and private clubs are gated by admin approval.**

**Observed:** Creating a club requires choosing between public and private (tier: directly observed). The screen states that where the club is private, people must request permission to join and only admins can approve new members (tier: directly observed).

**Detail:**
- The public case was described in the session in terms that conflict with themselves and the wording is not recoverable from the transcript (tier: unresolved).
- Approval is held by a role rather than by the creator personally (tier: directly observed).

*Cross-reference: O75, O76.*

## Economy and resources

This section holds no observations. Neither session showed any currency, point balance, material, storage limit, conversion rate, or any other held or earned quantity with routes that produce and consume it. Digital trophies, achievements and kudos are all recognised states or social signals rather than quantities that can be spent, and nothing in the product was observed to have a price payable in anything other than money. The absence is a finding and is carried into the close.

## Social

**O64. The dashboard suggests people to follow, led by a marked class of account.**

**Observed:** A follow block on the dashboard recommends people to follow (tier: directly observed). The accounts listed first carry a check mark beside the profile image and the label "fan favorite on Strava" beneath the name, with follow and remove actions on each (tier: directly observed). Three fan favorites were shown, followed by a "local legends near you" group holding many accounts (tier: directly observed).

**Detail:**
- Two grounds for suggestion are offered in one block: standing on the platform, and proximity (tier: directly observed).
- The block appears on a brand-new account with no connections (tier: directly observed).

*Cross-reference: O19, O68, O79.*

**O65. The home feed carries other athletes' activities with reactions attached.**

**Observed:** Below the follow and challenge blocks the dashboard is headed "recommended for you. Check out these popular Strava members to stay motivated", and shows other athletes' activities (tier: directly observed). Each shows the route track, photographs, and in one case a video, alongside the distance covered, the elevation gain, the time spent and the achievements won; one showed a bicycle ride of almost 34 kilometres (tier: directly observed). Each carries kudos, comment and share controls, displays how many kudos other users have left, and shows comments (tier: directly observed). Scrolling continues into further activities from further users (tier: directly observed).

**Detail:**
- The feed is populated on a new account by recommendation rather than by following (tier: directly observed).
- The number of kudos and the achievement count are shown on the item, so standing travels with the activity (tier: directly observed).
- Mute activity on the save screen is expressed against this feed and the club feed (tier: directly observed).

*Cross-reference: O33, O66, O81.*

**O66. The feed's composition is configurable.**

**Observed:** Preferences carry feed ordering, a default highlight image choice between a map and a photo to represent uploaded activities in the feed, and a video autoplay setting (tier: directly observed).

**Detail:**
- The ordering rule is exposed to the user rather than fixed (tier: directly observed).
- What the ordering options are was not observed (tier: unresolved).

*Cross-reference: O65.*

**O67. The profile states social standing before anything else.**

**Observed:** The profile shows the profile image, how many people the user is following, the user's location, how many followers the user has, and how many activities the user has recorded (tier: directly observed). Editing the profile takes the name, a biography, a primary sport, birthday, gender and weight (tier: directly observed).

**Detail:**
- Three of the four figures on the profile header concern other people (tier: directly observed).
- The default profile image is a generic character (tier: directly observed).

*Cross-reference: O46.*

**O68. Search is split between people and clubs, with three routes to people.**

**Observed:** The search surface carries two tabs, Friends and Clubs (tier: directly observed). Friends offers suggested athletes, contacts, and a QR code (tier: directly observed). Twenty-one athletes were listed as suggested in the user's local area (tier: directly observed).

**Detail:**
- The three routes are algorithmic suggestion, the user's own address book, and a code handed over in person (tier: directly observed).

*Cross-reference: O64, O69, O70.*

**O69. Contact syncing is framed by security and by the presence of friends.**

**Observed:** The contacts route states "connect contacts. Your friends are on Strava. See what they're up to by connecting your phone contacts", with a "connect securely" button (tier: directly observed). Tapping it raises the system prompt for access to contacts (tier: directly observed).

**Detail:**
- The framing asserts the outcome, that friends are already present, before access is granted (tier: directly observed).
- The word securely is carried on the button itself (tier: directly observed).

*Cross-reference: O46, O68.*

**O70. A QR code and an invite route cover people who are and are not on the product.**

**Observed:** The profile can be shared as a link that leads to it, or as a QR code that others scan to follow the user (tier: directly observed). A separate control invites friends who are not on Strava (tier: directly observed).

**Detail:**
- The same surface serves following an existing user and recruiting a new one (tier: directly observed).

*Cross-reference: O81, O89.*

**O71. Week figures on every profile reset to zero on Monday.**

**Observed:** Profiles lead with this week's distance, time and elevation (tier: directly observed). Viewed on a Monday morning these read zero kilometres, zero hours and zero metres for every suggested athlete (tier: directly observed). A graph beneath the figures showed the same athletes cycling, running and swimming through February, March and especially April (tier: directly observed).

**Detail:**
- The figure a viewer meets first is the one that has just been reset (tier: directly observed).
- The longer record is present on the same screen but below the reset figures (tier: directly observed).
- The narrators asserted that this makes the platform look inactive; no evidence of any viewer's response was available, and that claim is not carried into this record (tier: unresolved).

*Cross-reference: O113.*

**O72. Private profiles are reachable but closed.**

**Observed:** Private profiles can be opened and their owner identified, but the lists behind them return nothing (tier: directly observed).

**Detail:** None.

*Cross-reference: O62.*

**O73. Clubs are listed by proximity and searchable by location and sport.**

**Observed:** The Clubs tab lists clubs available in the user's vicinity, including cyclist and runner clubs, running to dozens if not hundreds of entries (tier: directly observed). Clubs can be searched by location or by sport type, with the full sport taxonomy offered as the filter (tier: directly observed). A "popular clubs near you" group showed close to fifty clubs (tier: directly observed).

**Detail:**
- Proximity is the default organising principle for clubs, as it is for athlete suggestions and segments (tier: directly observed).

*Cross-reference: O64, O51.*

**O74. One club holds a population of about seven million and runs the product's own challenges.**

**Observed:** The Strava Club is listed with almost seven million athletes and shows its location and what it does (tier: directly observed). The Strava Club organises most of the featured and promoted challenges (tier: directly observed).

**Detail:**
- The product participates in its own clubs system as a club rather than standing outside it (tier: directly observed).

*Cross-reference: O53, O54.*

**O75. Creating a club runs through five steps, including a self-description taxonomy.**

**Observed:** A create route framed "give your community a motivating home base. On Strava you can create and manage your club right from the app" opens a five-step flow (tier: directly observed). The steps are: choose the club sport, "go broad with all sports or be specific with the sports type"; choose up to three tags under "which best describes your club. Pick up to three tags that fit best. Let others know what you're all about", offering just for fun, brand, organization, team, employee group, coach led, creator, event or race, local community, fundraising, tips and talk, identity group and something else, with the line "you can always change this later"; customise the club with a name, a photo and a description; set it public or private; and state where the club is located, with the instruction "pick global if your club isn't in one spot" (tier: directly observed). Completion returns "congrats. You created a club. Invite your community, write a post, create an event. It's your club" (tier: directly observed).

**Detail:**
- The tag list spans personal, commercial, employer and identity groupings in one taxonomy (tier: directly observed).
- The closing screen names three next actions rather than leaving the empty club to the creator (tier: directly observed).
- Reversibility is stated on the tag step specifically (tier: directly observed).

*Cross-reference: O63, O76.*

**O76. The club page carries its own surfaces beside the roster.**

**Observed:** The club page shows the sport, the member count and the type, public or private, and offers insights, events, share, edit details, add events, and tabs for overview, activities, stats and posts (tier: directly observed). Upcoming events created for the club and posts written for it are shown on it (tier: directly observed).

**Detail:**
- The contents of the activities, stats and insights surfaces were not opened, and what state they hold at the club level rather than listing members' own records was not observed (tier: unresolved).
- Editing details and adding events are available to the creator (tier: directly observed).

*Cross-reference: O63, O75, O77.*

**O77. Club events are configured in detail, including who may attend and at what pace.**

**Observed:** Creating an event takes the sport, when it takes place, whether it recurs, the starting location, whether it is virtual or in person, a description, whether it is discoverable in search and recommendations, the event type as social, workout or competition, and a pace range (tier: directly observed). It also takes who can attend and a route with advanced options (tier: directly observed). On creation the event shows who is hosting it, who the admin is, who is going, where it starts and when it takes place, and can be shared (tier: directly observed).

**Detail:**
- The pace range states what a person must be able to achieve to take part (tier: directly observed).
- Discoverability is a per-event choice rather than a club-level setting (tier: directly observed).
- Attendance is an explicit, recorded state on the event (tier: directly observed).

*Cross-reference: O76, O111.*

**O78. Messaging is introduced with its own permission model.**

**Observed:** Opening messages returns "introducing messaging. You can now message people right on Strava. Choose who can chat with you in Settings" (tier: directly observed). The messaging settings state "messaging lets you privately chat with other people on Strava", carry a "show when you're online" toggle, and offer four answers to who can message you: anyone, people you follow, mutuals where each follows the other, or no one, where only the user can message first (tier: directly observed). People who follow the user can be searched and messaged (tier: directly observed).

**Detail:**
- The default was not observed (tier: unresolved).
- The four options run from fully open to fully closed with two relationship-based positions between (tier: directly observed).

*Cross-reference: O62.*

**O79. Segment standing is ordered against other people in two named forms.**

**Observed:** Local Legends shows who holds the most overall efforts on a segment over the last 90 days, and shows the user where they stand among the people doing well locally in that period (tier: directly observed). Top 10 shows the segments on which the user stands in the top ten (tier: directly observed). Segment leaderboards are named in paywall copy as a subscription feature (tier: directly observed).

**Detail:**
- Local Legends orders by number of efforts rather than by speed, so the measure is frequency (tier: directly observed).
- Both surfaces were empty on the account, so the ordered lists themselves were not seen populated (tier: unresolved).
- Losing a top place on a leaderboard has its own notification type, "lost CR" and "lost ratings" (tier: directly observed).

*Cross-reference: O52, O57, O61, O105.*

**O80. Challenges carry leaderboards over their participants.**

**Observed:** A challenge page shows a leaderboard for any activity and an overall leaderboard for those participating, showing their pace, the distance they have covered and when they completed it (tier: directly observed). The 100,000 steps challenge showed the steps people had logged and the rank of each athlete, with some carrying almost a billion steps (tier: directly observed).

**Detail:**
- The leaderboard is ordered within the bounded challenge rather than globally (tier: directly observed).
- Group challenge leaderboard changes carry their own notification type (tier: directly observed).

*Cross-reference: O53, O54, O105.*

**O81. Other people can be attached to an activity, whether or not they recorded it.**

**Observed:** The save screen invites the user to "use the @ symbol to tag others in this activity" (tier: directly observed). The share surface after saving carries, at the bottom, "with someone who didn't record? Add others", opening a route to find members who were grouped in the activity, to add others, or to invite friends by sharing a link with them (tier: directly observed).

**Detail:**
- The route covers three cases in one control: a person who recorded, a person present on Strava who did not record, and a person not on Strava at all (tier: directly observed).
- The ask is made at the moment an accomplishment has just been produced (tier: directly observed).

*Cross-reference: O70, O88, O89.*

**O82. Beacon shares live location with up to three named safety contacts.**

**Observed:** A Beacon setting states "share a beacon with up to three safety contacts so they can see your location during your activity. Turn on your beacon to select your contacts" (tier: directly observed). Using it requires granting location sharing and contacts access so that a message can be sent, and the message text can be chosen (tier: directly observed). Subscribing additionally opens Beacon for devices, "share location from your Garmin device or the Strava app on your Apple Watch" (tier: directly observed). From the recording screen the same sharing can be started without granting contacts access, by opening the iOS Messages app with a prepared message reading "hey, here's my live location for my next activity, follow along on Strava beacon" (tier: directly observed).

**Detail:**
- Two routes to the same outcome exist, one requiring contacts access and one not (tier: directly observed).
- The contact limit of three is stated (tier: directly observed).
- The device form of the feature is paid while the phone form is not (tier: directly observed).

*Cross-reference: O24, O57, O91.*

## Reach beyond the app

**O83. A partner running product is sold as a tier of the subscription.**

**Observed:** The onboarding subscription screen offers a Strava plus Runna plan at $149.99 per year beside the $79.99 Strava annual plan (tier: directly observed). The "what you unlock" screen attributes two of its five items, the custom training plan and the coach-authored guidance, to that combined tier (tier: directly observed).

**Detail:**
- The partner product is presented as an upgrade within Strava's own pricing rather than as an outside offer (tier: directly observed).

*Cross-reference: O17, O86, O96.*

**O84. Completing a Strava challenge unlocks a trial of the partner product.**

**Observed:** The April 400 Minute Run challenge states that logging 400 minutes in April unlocks a free two-week Runna trial (tier: directly observed). More than 1,128,000 athletes were shown as having joined it (tier: directly observed).

**Detail:**
- The trial is conditional on work done inside Strava rather than on signing up for the other product (tier: directly observed).
- It is the only challenge in the observed set whose reward is not a digital trophy or badge (tier: directly observed).

*Cross-reference: O53, O86.*

**O85. Challenges are run jointly with outside brands.**

**Observed:** The challenge set includes partner challenges named for Runna, Hoka and Brooks: a Runna Vert challenge, the Hoka Speedgoat 7 Vert Challenge, and the April 5000 x Brooks challenge (tier: directly observed).

**Detail:**
- Partner challenges sit in the same list and carry the same join action as the product's own (tier: directly observed).
- What distinguishes a partner challenge to the user beyond the name was not observed (tier: unresolved).

*Cross-reference: O44, O53.*

**O86. Settings carries a training plans route into the partner product's store listing.**

**Observed:** A training plans entry in settings reads "discover personalized running plans", opening a surface headed "Runna by Strava" with the line "Runna builds plans based on your goals, experience and schedule, all seamlessly synced with Strava", a most popular group, and a set of plans (tier: directly observed). Tapping any of the plans opens the App Store listing for Runna, leaving Strava (tier: directly observed). The settings entry carries Runna's logo (tier: directly observed).

**Detail:**
- The plans are shown in full before the route out is taken (tier: directly observed).
- The framing names the connection back, that plans sync with Strava (tier: directly observed).

*Cross-reference: O17, O83.*

**O87. Settings promotes a competing fitness subscription.**

**Observed:** A promotions entry in settings reads "Apple Fitness+. Get up to two free months of Apple Fitness+. Start your journey today", opening "fitness for everyone. All you need is an iPhone. Up to two months free, then $9.99 per month", with a "redeem now" action (tier: directly observed).

**Detail:**
- The promoted product's own price is stated inside Strava (tier: directly observed).
- This is the only promotion observed for a product outside the Strava and Runna pair (tier: directly observed).

**O88. Saved activities are shared out through named external destinations.**

**Observed:** Sharing an activity offers Instagram, a Strava message, WhatsApp, a message, a Strava post, copy link and further routes (tier: directly observed). The product supplies pre-created designs for what the shared visual will look like (tier: directly observed). Taking a screenshot of the activity opens the sharing pop-up with the prepared branded version offered in place of the screenshot (tier: directly observed). The observed card carried "longest ride ever" and a PR badge, and carried Strava's branding (tier: directly observed).

**Detail:**
- One of the routes stays inside the product, as a Strava post, and the rest leave it (tier: directly observed).
- The screenshot is intercepted, so the product substitutes its own composition for the user's copy (tier: directly observed).

*Cross-reference: O50, O81.*

**O89. People who are not on the product can be invited from inside an activity.**

**Observed:** The "add others" route after saving an activity offers to invite friends and share a link to them, for people who did not record the activity or do not have Strava (tier: directly observed).

**Detail:**
- The invitation is raised at the moment of an accomplishment rather than on a dedicated screen (tier: directly observed).

*Cross-reference: O70, O81.*

**O90. Fourteen device and app brands can be connected to the account.**

**Observed:** Account information carries a route to connect an app or device, listing fourteen brands (tier: directly observed). Garmin and Peloton are named at the end of onboarding as devices whose activities can be uploaded (tier: directly observed).

**Detail:**
- Connected devices supply activity that the user did not record in Strava (tier: directly observed).
- The health data setting governs what those connections may send (tier: directly observed).

*Cross-reference: O21, O43, O44.*

**O91. Live location sharing runs through the phone's own messaging app.**

**Observed:** The Beacon text is sent through the built-in iOS Messages app with a prepared message, and the recipient can be anyone, without contacts access being granted to Strava (tier: directly observed).

**Detail:**
- The recipient need not be a Strava user (tier: strongly supported, the route is an ordinary text message with a link).

*Cross-reference: O82.*

**O92. Siri shortcuts route Strava data through the operating system.**

**Observed:** A Siri and Siri shortcuts setting raises a system prompt reading "would you like to use Strava with Siri? Some of your Strava data will be sent to Apple to process your requests" (tier: directly observed). Shortcuts can be added for frequently performed actions, with the instruction "set your Strava shortcuts in your system settings under Siri and Search" (tier: directly observed).

**Detail:**
- The configuration is completed outside the app (tier: directly observed).

## Monetization

**O93. An upgrade button holds the centre of the top bar.**

**Observed:** The top bar of the dashboard carries a profile icon, a search icon, a message icon and a notification icon, with an upgrade button at the centre, coloured orange and visually highlighted (tier: directly observed). Tapping it opens the paywall (tier: directly observed).

**Detail:**
- It is the only coloured element in the bar and sits between the utility icons (tier: directly observed).
- It is present on every visit to the dashboard (tier: directly observed).

**O94. The paywall is met at nine distinct points in the observed flow.**

**Observed:** The subscription screen was reached from: the onboarding flow; the upgrade button; the profile completion flow after the photo step; the routes surface; best efforts; locked map layers; activity bookmarking; the trophy case after the first trophy; and create a group challenge (tier: directly observed).

**Detail:**
- Two of the nine are placed immediately after a completed action rather than on an attempted one (tier: directly observed).
- The copy differs between placements while the offer does not (tier: directly observed).

*Cross-reference: O46, O57, O95, O101.*

**O95. Paywall copy is written to the surface it interrupts.**

**Observed:** The onboarding and profile-completion paywall is headed "better habits, smarter training, steady progress" (tier: directly observed). The routes paywall reads "try the very best of Strava. First month on us today. Unlock subscription features including routes, segment leaderboards, advanced training analysis and more" (tier: directly observed). The trophy case paywall reads "there's so much more to Strava. Get subscribers only features that give you the deepest look into your stats and help improve your performance" (tier: directly observed). The activity page block reads "get smarter insights for faster progress. Track your activity stats and reach your goals with subscription features" (tier: directly observed). The streak calendar block reads "unlock your full potential. Track your progress and reach your goals with subscription features" (tier: directly observed).

**Detail:**
- Each version names the feature the user was reaching for (tier: directly observed).
- The habit framing is used where no specific feature was being attempted (tier: strongly supported, it appears in onboarding and in profile completion, the two placements not triggered by a locked feature).

*Cross-reference: O94.*

**O96. Prices and plans, as stated across the sessions.**

**Observed:** The stated prices are: a Strava annual plan at $79.99 per year; a Strava plus Runna plan at $149.99 per year; the same annual plan presented on the plan screen as a free 30-day trial, "save 44%", $79.99 per year after the trial; and, on the web checkout, an annual subscription at 49.99 euros with zero billed today (tier: directly observed). The in-app purchase sheet shows $79.99 per year through the App Store (tier: directly observed).

**Detail:**
- The web price and the in-app price differ, and the difference was not stated on any paywall (tier: directly observed).
- The two figures are in different currencies, so the size of the gap cannot be read off the screens (tier: directly observed).
- The plan screen offers a "see all plans" route that was not opened (tier: unresolved).

*Cross-reference: O97, O98.*

**O97. Checkout runs on the web, on a page with no way out except paying.**

**Observed:** Starting the free trial from the plan screen leaves the app and opens a browser page on strava.com, headed payment, stating a free 30-day trial, zero billed today, an annual subscription of 49.99, and what will be billed in a month (tier: directly observed). The page offers Apple Pay and no other payment method (tier: directly observed). The page carries no links and no navigation to anywhere else on the site (tier: directly observed).

**Detail:**
- Apple Pay then connects to the stored card and shows the amount before the payment is authorised (tier: directly observed).
- The page is a checkout and nothing else (tier: directly observed).

*Cross-reference: O96, O98.*

**O98. The plan screen gives its three routes three different weights.**

**Observed:** The plan screen offers "see all plans", shaped as a button; "start a free trial", shaped as a button, highlighted, and carrying an icon indicating that it leaves the app; and "pay in app", set as plain text beneath, not shaped as a button (tier: directly observed).

**Detail:**
- The route that leaves the app is the emphasised one and the in-app route is the least emphasised (tier: directly observed).
- The price difference between the two destinations is not shown on this screen (tier: directly observed).
- The narrators attributed a commercial motive to this arrangement; no evidence of intent was available and that reading is not carried into this record (tier: unresolved).

*Cross-reference: O96, O97.*

**O99. The charge date is stated on the plan screen.**

**Observed:** The plan screen states "you won't be charged until May 19th" and "cancel anytime up to 24 hours before your trial ends" (tier: directly observed). The routes paywall states "in 30 days you'll be charged a subscription amount. Cancel at least 24 hours before" (tier: directly observed).

**Detail:**
- A specific calendar date is given rather than a duration (tier: directly observed).
- The stated date does not sit 30 days after the session date of 20 Apr 2026, and nothing on the screens reconciles the two (tier: unresolved).

*Cross-reference: O104.*

**O100. Settings opens on a discounted offer for the running product.**

**Observed:** The settings screen carries a large highlighted block at the top reading "up to 60% in savings. Strava Run up to 60% off. Start with a free four-week trial. No excuses, just running" (tier: directly observed). Beneath it sits "your Strava subscription. Explore and manage subscription", which opens the paywall (tier: directly observed).

**Detail:**
- The trial length stated here, four weeks, differs from the 30 days and the "first month" stated elsewhere (tier: directly observed).
- The discount figure appears nowhere else in either session (tier: directly observed).

*Cross-reference: O104.*

**O101. The trophy case paywall is deliberately partial.**

**Observed:** Entering the trophy case after collecting the first trophy raises a subscription pop-up covering half the screen rather than all of it, leaving the trophy case visible behind it (tier: directly observed). It offers to start a free trial (tier: directly observed).

**Detail:**
- The just-earned trophy remains in view while the offer is made (tier: directly observed).
- This is the only observed paywall that does not cover the screen (tier: directly observed).

*Cross-reference: O34, O48, O94.*

**O102. The activity page ends in a locked block below the user's own numbers.**

**Observed:** Scrolling past the stats, the share, the comments and the likes on a saved activity reaches a locked control and a section stating what a subscription would add, headed "get smarter insights for faster progress" and naming results, speed stats and elevation stats (tier: directly observed).

**Detail:**
- The offer is placed at the end of the record of what the user just did (tier: directly observed).

*Cross-reference: O35, O95.*

**O103. Purchases can be restored from account settings.**

**Observed:** Account information carries restore purchases, change email and add phone number (tier: directly observed).

**Detail:** None.

**O104. Trial length and reminder timing are stated four different ways.**

**Observed:** The onboarding paywall states a 30-day trial with a reminder at 28 days (tier: directly observed). The routes paywall states "first month on us" and a reminder two days before the trial ends (tier: directly observed). The plan screen states a free 30-day trial and a charge date of May 19th (tier: directly observed). The settings block states a free four-week trial (tier: directly observed).

**Detail:**
- 30 days, one month and four weeks are three different periods (tier: directly observed).
- The reminder is described once as at 28 days and once as two days before the end, which coincide only where the trial is 30 days (tier: directly observed).
- Which terms govern was not established from any screen in either session (tier: unresolved).

*Cross-reference: O16, O59, O96, O99, O100.*

## Return triggers

**O105. The notification catalogue is unusually long and granular.**

**Observed:** Push notification settings offer individual control over kudos and likes, comments, comments on others' activities, mentions on activities, lost CR, lost ratings when the user loses their top place on a leaderboard, device activity synced, beacon, add to activities, upload reminders, segment analysis, activity crop, activity elevation adjustment, progress completion, when a friend joins, when there is a new follower, friends' activities, suggested friends, segments and routes, videos, challenges, challenge progress, challenge rewards, challenge invites, group challenge comments, group challenge leaderboard changes, clubs, club invitations, new posts, new club events, join requests, events, event invitation, event reminder, event change, event RSVP, posts, post kudos and likes, mentions in posts, data permissions, health data, and marketing, feature and subscription tips (tier: directly observed). Some are on by default and some are off (tier: directly observed).

**Detail:**
- The catalogue covers social reaction, loss of standing, challenge and club activity, event scheduling, data corrections and marketing in one list (tier: directly observed).
- Which specific types are on by default was not observed (tier: unresolved).
- Marketing and subscription messages are asked for separately from product notifications (tier: directly observed).

*Cross-reference: O18, O37, O79, O80.*

**O106. Email notifications are on by default.**

**Observed:** Email notifications are turned on by default and can be turned off (tier: directly observed).

**Detail:**
- No opt-in was observed for this channel anywhere in onboarding (tier: strongly supported, the onboarding flow asked only for push permission).

*Cross-reference: O18.*

**O107. The streak sits at the top of the dashboard with a record button beside it.**

**Observed:** Directly beneath the top bar the dashboard carries "your streak", shown as a flame with a number inside it, reading zero weeks on the new account (tier: directly observed). It carries a "view calendar" button, the line "start your streak by logging an activity", and a record button (tier: directly observed). The number of weeks on a streak is displayed (tier: directly observed).

**Detail:**
- The streak is the first thing below the navigation bar, above suggestions, challenges and the feed (tier: directly observed).
- The action that would start it is placed next to it (tier: directly observed).
- The period observed is weeks on the dashboard, while the progress surface describes the streak in days; the two were not reconciled on any screen (tier: unresolved).
- What breaks the streak, what resets it, and whether any protection exists were not observed (tier: unresolved).

*Cross-reference: O45, O108, O113.*

**O108. The streak calendar shows the last twelve weeks of activity.**

**Observed:** The view calendar route shows the user's progress, how many streak activities are active, what the current streak is, a calendar for April 2026, and performance across the previous month and the current one, covering activities over the past twelve weeks (tier: directly observed). A "give feedback" button beneath it asks how satisfied the user is with the feature and opens a questionnaire inside the app (tier: directly observed).

**Detail:**
- A three-month window is shown rather than the current period alone (tier: directly observed).
- The subscription block naming performance predictions, goals, relative effort and the training log sits between the calendar and the feedback button (tier: directly observed).

*Cross-reference: O56, O107.*

**O109. A notification follows the saved activity back to the home screen.**

**Observed:** After saving the activity, the home screen carried a notification reading "another activity down. Great work out there. Check out your stats now", with the time it arrived (tier: directly observed). Opening it showed "new best effort. Your longest ride ever" (tier: directly observed).

**Detail:**
- The notification's stated reason to return is the stats rather than the activity (tier: directly observed).
- It fired on an activity of 44 seconds (tier: directly observed).

*Cross-reference: O50.*

**O110. Upload reminders are a standing notification type.**

**Observed:** Upload reminders appear in the push notification catalogue as their own controllable type (tier: directly observed).

**Detail:**
- No upload reminder was received during either session (tier: unresolved).

*Cross-reference: O105.*

**O111. Challenge deadlines and event reminders put dates on the return.**

**Observed:** Challenge pages state how many days are left (tier: directly observed). The observed challenges are bounded to the calendar month, with the featured one running from April 1st to April 30th, 2026, and are named for the month they run in (tier: directly observed). Challenge progress, challenge rewards, challenge invites and event reminders each carry their own notification type (tier: directly observed).

**Detail:**
- A new set of challenges is implied each month by the naming, though only one month's set was observed (tier: plausible, a second month's set would settle it).
- The deadline is the product's, but it is fixed to the calendar rather than to the user's join date (tier: directly observed).

*Cross-reference: O53, O54, O77, O105.*

**O112. Gear reaches a user-chosen distance and the product says so.**

**Observed:** Gear carries a "notify me when I have reached" setting with a chosen distance between 400 and 1200 kilometres (tier: directly observed).

**Detail:**
- The return is triggered by accumulated activity rather than by elapsed time (tier: directly observed).
- The user sets the trigger themselves (tier: directly observed).

*Cross-reference: O42.*

**O113. The product runs on a weekly clock in four places.**

**Observed:** The suggested goal is expressed in activities per week (tier: directly observed). The weekly snapshot on the dashboard reports the week's activities, time spent exercising and distance (tier: directly observed). The profile and the progress tab lead with this week's distance, time and elevation (tier: directly observed). Every profile's week figures reset to zero on Monday (tier: directly observed).

**Detail:**
- The unit of the goal, the snapshot, the profile header and the streak count is the same week (tier: directly observed).
- The reset is hard: the figure goes to zero rather than rolling (tier: directly observed).

*Cross-reference: O45, O71, O107.*

**O114. No app store rating prompt was observed.**

**Observed:** No rating prompt, review request or store listing solicitation appeared at any point in either session (tier: directly observed).

**Detail:**
- The sessions covered first launch, full onboarding, a first saved activity and a celebration screen, which are the usual placements, and none carried one (tier: strongly supported, the first-activity celebration and the trophy case both carried a subscription offer instead).
- An in-app feedback questionnaire exists on the streak calendar and asks about satisfaction with that feature rather than about the app (tier: directly observed).

*Cross-reference: O108.*

# Pass two: tagging

## Applied tags

**Tag:** Streak

**Observations:** O107, O108

**Supporting observations:** O45, O105, O113

**Confidence:** directly observed

**Role:** retention

The count cannot advance without returning in a later week to log an activity, and the surface that displays it carries the record button that would start it (O107, O113).

**Rationale:** Strava places a surface headed "your streak" directly beneath the top bar of the dashboard, shows it as a flame with a number of weeks inside it, and states the qualifying event in its own copy: "start your streak by logging an activity" (O107). The calendar behind it reports how many streak activities are active and what the current streak is, against a twelve-week view of the user's activity (O108). Under the presence standard the implementation is recognizable from the product's own framing and from a state keyed to activity over time, and the product names it a streak itself. The continuity rule is not observed: the account recorded one activity and the session covers four days, so nothing shows what qualifies a week, what a missed week does to the count, or whether any protection exists. Those are behavior details and are recorded as not observed. Two periods are used for the same state, weeks on the dashboard and days on the progress tab, and no screen reconciles them (O107).

**Variants present:** Time-period streak, in weeks.

**Variants not established:** Event-sequence streak, maintenance streak, threshold streak, protected streak, shared streak, historical streak.

**Alternative considered:** A cumulative count of weeks in which an activity was logged, which would not be a streak because gaps would not change the state. The evidence against it is the product's own framing of the number as a streak that has to be started and the pairing of the count with a continuity-shaped calendar (O107, O108); the evidence that would separate the two is a session recorded after a missed week, showing whether the number resets, holds, or is protected.

**Tag:** Challenge

**Observations:** O53, O54, O55

**Supporting observations:** O80, O84, O85, O111

**Confidence:** directly observed

**Role:** engagement, retention

The objectives are satisfied by recording activity inside the product (O53, O54), and their deadlines are fixed to the calendar month, so an unfinished one is a reason to come back before it closes (O54, O111).

**Rationale:** Strava creates discrete challenge instances with stated success conditions and stated boundaries: "complete the first 5km run from April 1st to April 30th, 2026" for the featured challenge, and "log 400 minutes this April" for another (O53, O54). Each carries a days-left counter, a join state entered by a single tap, an organiser, terms, and a stated reward, and each concludes as completed or not within its window (O53, O54). The catalogue is large, filterable by activity type, elevation gain, moving time and distance, and sixteen instances were recommended against the user's own recorded activity (O55). The success condition of one instance is ambiguous in the source between ten days active and ten days in a row, which affects that instance's variant rather than the tag (O53). Whether a new instance of the same definition is created each month is not established: only April's set was observed (O111).

**Variants present:** Time-boxed challenge, threshold challenge, completion challenge, opt-in challenge, rewarded challenge, community challenge.

**Variants not established:** Attempt-bounded challenge, session challenge, event-bounded challenge, sequence challenge, constraint challenge, personal-benchmark challenge, head-to-head challenge, group challenge, automatically assigned challenge, recurring challenge, adaptive challenge, multi-stage challenge, unrewarded challenge.

**Alternative considered:** Daily / Weekly Quests, on the reading that a filtered, refreshed catalogue of objectives is issued on a cadence. It is rejected because nothing observed is issued or refreshed on a daily or weekly rule: the instances are month-long, the user opts into each one, and an unjoined challenge carries no state at all. The evidence that would separate them is a set of objectives observed being replaced at a period boundary without the user joining anything.

**Tag:** Achievement

**Observations:** O49, O53, O54

**Supporting observations:** O34, O50, O65, O111

**Confidence:** directly observed

**Role:** engagement, retention

The graded markers are earned by recording activity and travel with the activity in the feed (O49, O65), and challenge rewards are attained across a month rather than in one sitting (O53, O54).

**Rationale:** Strava assigns discrete attained states that persist separately from the activity that produced them. Activities carry the achievements won on them, and profiles carry a count of achievements held, graded gold, silver and bronze, with one profile showing ten silver and another 53 trophies (O49). Completing a challenge produces a digital trophy or a badge that is then held, and one challenge instead unlocks a trial of another product (O53, O54). Notification settings carry challenge rewards as their own type, which is a differential system response to attainment (O111). The criteria behind the activity achievements were not observed, so what changes from unattained to attained is asserted from the product's own framing and from the counts held on profiles rather than from a rule seen operating. This tag co-occurs with Challenge rather than competing with it: the bounded objective and the preserved attained state are two behaviors on one surface, and the Challenge entry's own exclusion directs objectives that preserve an attained state to be classified under both.

**Variants present:** Visible achievement, single-condition achievement, tiered achievement, rewarded achievement, unrewarded achievement.

**Variants not established:** Hidden achievement, composite achievement, cumulative achievement, sequence achievement, constraint-based achievement, progressive achievement, retroactive achievement, repeatable-instance achievement, shared achievement, comparative achievement, collection achievement.

**Alternative considered:** Treating the activity achievements as ordinary result displays rather than attained states, on the reading that a fast segment is a number and not a criterion. It is rejected because the counts persist on the profile independently of the activities that produced them and are graded into named tiers, which is the preserved attainment the entry requires (O49). The evidence that would settle the remaining gap is a screen stating the criterion for one achievement.

**Tag:** Milestone

**Observations:** O47, O48

**Supporting observations:** O34, O42, O112

**Confidence:** directly observed

**Role:** engagement, retention

The ladder advances only as activities accumulate, so each position requires further recording, and the first position is reached inside the first session (O47, O48).

**Rationale:** Strava maintains an ongoing measure, the count of activities recorded, and defines ordered thresholds within it: first activity, third, fifth, tenth, and onward to a thousand (O47). Crossing the first threshold produced an observable event distinct from the ordinary counter update, in the form of a pop-up reading "kudos on logging your first Strava activity", a granted trophy, and a route into the trophy case (O34, O48). Positions not yet reached are shown in place with their conditions (O47). No position was observed to grant any benefit beyond the trophy itself. A second instance of the same shape sits on gear, where accumulated distance is watched against a threshold and the product notifies the user on reaching it; that threshold is chosen by the user from a product-defined range rather than set by the product, which is why it is recorded as supporting rather than as a core observation (O42, O112).

**Variants present:** Threshold milestone, cumulative milestone, intermediate milestone, recorded milestone.

**Variants not established:** Stage milestone, checkpoint milestone, completion milestone, percentage milestone, sequence milestone, time-based milestone, composite milestone, unlocking milestone, rewarded milestone, recurring milestone, shared milestone, hidden milestone.

**Alternative considered:** Set Collection, on the reading that the trophy case is a defined set of distinct members with acquired and unacquired states. It is not applied because each member's state is a deterministic function of one counter, no member can be obtained independently or out of order, and no completeness state separate from the counter's position was observed; the entry's own exclusion for progress that depends only on reaching a numerical target governs. The evidence that would separate them is a route by which a trophy could be obtained other than by crossing its activity count.

**Tag:** Leaderboard

**Observations:** O80

**Supporting observations:** O52, O57, O61, O79, O105

**Confidence:** directly observed

**Role:** social, engagement

The ordering is over other identified athletes and is reached from the challenge and segment surfaces the user records into (O79, O80).

**Rationale:** The 100,000 steps challenge page presents its participants in an ordered list with the steps each has logged and the rank of each athlete, and challenge pages generally carry an overall leaderboard alongside a per-activity one, showing pace, distance and when each participant completed (O80). Local Legends presents the people holding the most overall efforts on a segment across the last ninety days, which is an ordering of multiple identified people within a local scope (O79). Segment leaderboards are additionally named in paywall copy as a subscription feature, and losing a top place has its own notification type, "lost CR" and "lost ratings" (O57, O79, O105). The segment orderings themselves were empty on a new account, so what is asserted there is the surface and the product's framing rather than a populated list; the challenge leaderboard was seen populated and carries the tag. The gender question in onboarding states that the answer determines which leaderboards the user appears on, which establishes segmentation as part of the comparison rule (O61).

**Variants present:** Individual leaderboard, local leaderboard, event leaderboard, periodic leaderboard, cumulative leaderboard, truncated leaderboard, segmented leaderboard.

**Variants not established:** Team leaderboard, aggregate leaderboard, global leaderboard, network leaderboard, group leaderboard, session leaderboard, all-time leaderboard, live leaderboard, final leaderboard, best-result leaderboard, average-result leaderboard, multi-metric leaderboard, tiered leaderboard, anonymous leaderboard, rewarded leaderboard, promotion-and-relegation leaderboard, resetting leaderboard, persistent leaderboard.

**Alternative considered:** The feed, on the reading that a scrolling list of other athletes' activities with kudos counts is an ordering of people by performance. It is rejected because the feed is selected and ordered for the viewer rather than representing relative placement, which the entry excludes explicitly (O65). Social Feed carries that surface instead.

**Tag:** Comparative Rank

**Observations:** O52, O79, O80

**Supporting observations:** O61, O105

**Confidence:** directly observed

**Role:** social, engagement

Each position is held against other identified athletes on segments the user can go and ride or run (O52, O79).

**Rationale:** Strava assigns and communicates positions within defined comparison sets in three named forms on the segments surface: KOMs and CRs, "the segments where you hold the best overall time"; Local Legends, where the position is held by the most overall efforts over the last ninety days; and Top 10, a bounded placement within an ordered comparison (O52, O79). The challenge surface assigns each participating athlete a rank within the challenge (O80). All three of the user's own positions were empty on a new account, so the positions are asserted from the surfaces and the product's own statements of what each holds rather than from a position seen assigned to this user; the ranks of other athletes inside a challenge were seen directly (O80). This tag co-occurs with Leaderboard rather than competing with it: the ordered list of participants and the user's own position state are two behaviors on two surfaces, and the Leaderboard entry directs a position shown without its comparison set to this entry.

**Variants present:** Numerical rank, bounded rank, individual rank, local rank, category rank, event rank, periodic rank, cumulative rank, best-result rank.

**Variants not established:** Tied rank, team rank, aggregate-entity rank, global rank, network rank, group rank, session rank, all-time rank, live rank, final rank, average-result rank, multi-metric rank, provisional rank, hidden-value rank, rewarded rank, promotion-and-relegation rank.

**Alternative considered:** A personal-best display, on the reading that a segment record is the user's own history rather than a comparative position. It is rejected for KOMs and CRs and for Local Legends because both are stated against other people, best overall time and most overall efforts, and both can change without the user's own value changing. It is accepted for the personal records on segments, which are excluded from this tag and described in plain language (O52).

**Tag:** Social Feed

**Observations:** O65

**Supporting observations:** O33, O64, O66, O76

**Confidence:** directly observed

**Role:** social, engagement

The stream is built from other identified athletes' activities and carries the reactions the product asks the user to give and receive (O65, O64).

**Rationale:** The dashboard presents a scrolling stream of activity items attributed to identified athletes, each carrying the route track, media, distance, elevation gain, time, the achievements won, and kudos, comment and share controls with the kudos and comment counts visible (O65). The stream continues into further activities from further users as the viewer scrolls (O65). Selection is the product's: on a new account with no follows the stream is headed "recommended for you. Check out these popular Strava members to stay motivated" (O65). Ordering is exposed to the user as a feed ordering preference, alongside a default highlight image choice and video autoplay, which establishes that a feed rule exists without revealing what its options are (O66). The save screen expresses its mute control against this feed and the club feed, which establishes eligibility as a per-item state (O33, O76).

**Variants present:** Activity feed, publication feed, mixed-content feed, personalized social feed, social recommendation feed, continuously loading social feed, group feed, restricted-audience social feed.

**Variants not established:** Chronological social feed, ranked social feed, hybrid social feed, following feed, network feed, global feed, shared social feed, ephemeral social feed, paginated social feed, refresh-driven social feed, real-time social feed, moderated social feed.

**Alternative considered:** A recommendation surface without social attribution, which the entry excludes. It is rejected because every item observed names the athlete who performed it, links to that athlete's profile, and carries reactions addressed to them (O65). A following feed is the obvious second form of the same surface but was never observed, because the account followed no one.

**Tag:** Group Membership

**Observations:** O63, O73, O75, O76

**Supporting observations:** O33, O74, O77

**Confidence:** directly observed

**Role:** social

Membership is between identified people and governs who may post, attend and approve inside the club (O75, O76, O77).

**Rationale:** Strava represents clubs as distinct entities with a member count, a sport, a location, a type and their own page, and maintains who belongs to them (O73, O76). Membership is created under defined rules that the creation flow states: a public club and a private club differ, and in the private case people must request permission to join and only admins can approve new members (O63, O75). Membership changes observable conditions: club posts, club events and a club feed are scoped to the club, and the activity save screen offers muting from the club feed as a separate choice from muting from home (O33, O76, O77). Roles exist and carry different powers, since admins approve members, edit details and add events (O63, O76).

**Variants present:** Request-to-join group, user-created group, public group, private group, role-based group, delegated-membership group, communication group, permanent group.

**Variants not established:** Open group, invitation-only group, automatically assigned group, system-created group, hidden group, time-bounded group, activity-bounded group, equal-permission group, shared-resource group, shared-progress group, competitive group, nested group, overlapping group, shared-account group.

**Alternative considered:** Clan / Guild, on the reading that the club page's activities, stats and insights tabs hold state belonging to the club itself. It is not applied because none of those tabs was opened and nothing established whether they hold a collective state or list the members' own records (O76). The Clan / Guild entry's own rule for that case is to mark it unresolved, which is done below. Community Space was also considered and is excluded by its own sibling rule, because maintained membership and governance are present.

**Tag:** Shareable Win

**Observations:** O88

**Supporting observations:** O34, O50, O70, O81

**Confidence:** directly observed

**Role:** social, engagement

The composed card is offered at the moment the record is created and its named destinations are places where other people will read it (O50, O88). None of the four role values covers a mechanic whose function is carrying the product's name outward to people who do not use it; social is the closest of them rather than an exact fit.

**Rationale:** Strava composes the record it holds about the user into a self-contained card: the observed one stated "longest ride ever", carried a PR personal record badge, and carried Strava's branding, so a reader outside the product could see what was accomplished without the user's account (O50, O88). Routes out are named on the card: Instagram, WhatsApp, a message, copy link, and further destinations, alongside one route that stays inside the product as a Strava post (O88). The product supplies more than one pre-created design for the same record (O88). The offer is attached to the record rather than to arbitrary content, and it is made unprompted at the point of attainment and again when the user takes a screenshot, at which the product intercepts and offers its own composition in place of the user's copy (O88). A paid form of the same representation exists, since personalized stat maps on the activity image are subscriber-only (O28).

**Variants present:** Result win, badge win, verified win, platform-named win, open-destination win, prompted win, on-demand win, multi-format win, gated win.

**Variants not established:** Credential win, recap win, streak win, rank win, unverified win, downloadable win, delivered win, hosted win, scheduled win, rewarded sharing win, editable win, shared-holder win.

**Alternative considered:** An ordinary share control on the user's own content, which the entry excludes. It is rejected because the subject of the card is the record Strava holds, the best-effort state and the PR badge, rather than a photograph or a post the user made, and because the product composes the card itself rather than passing on what the user assembled (O50, O88).

## Entries considered and not applied

- Clan / Guild. Clubs are the only collective in the product and their pages carry overview, activities, stats and insights tabs, which is where a group-owned state would sit (O76). None of those tabs was opened, so nothing establishes whether they hold state belonging to the club or list the members' own records, and the entry's own rule for that case is to mark it unresolved rather than to classify. Group Membership carries clubs instead.
- Community Space. Clubs are persistent shared contexts in which multiple people post, attend events and contribute activity, which satisfies the entry on its face (O75, O76, O77). It is excluded by the entry's own sibling rule: maintained membership and governance are present, and that more specific distinguishing feature selects Group Membership.
- Set Collection. The trophy case is a defined ladder of distinct trophies with attained and unattained states preserved across events, which is the structural half of the entry (O47). It is not applied because every member's state follows from one activity counter, none can be obtained out of order, and no completeness state separate from that counter was observed; the exclusion for progress that depends only on reaching a numerical target governs.
- Daily / Weekly Quests. The suggested goal sets a weekly activity target, the weekly snapshot resets at the same boundary, and instant workouts offer one-tap activities from the dashboard (O39, O45, O113). None is applied because the goal is a standing target the user sets rather than an objective instance the product issues or refreshes, and the instant workouts are recommendations with no incomplete and completed state.
- Leveling. The fitness journey question assigns the user to one of four ordered states, beginner, intermediate, advanced and pro (O12). It is not applied because the state is freely selected by the user and no rule for moving between the states was observed; the entry excludes manually assigned categories that are not reached under a progression rule.
- Progression Gate. Thirteen surfaces are withheld until a condition is met, which is the shape of a gate (O57). It is not applied because the condition is a subscription in every observed case, and the entry excludes purchase, payment, subscription and entitlement requirements explicitly, directing them to be recorded in plain language in Access and eligibility, which is where they sit.
- Cosmetic Customization. Four candidate surfaces were weighed: the profile photo and club photo, the appearance setting between light, dark and iPhone default, the map types, and the subscriber-only personalized stat maps (O28, O46, O58, O75). The appearance setting and the default highlight image are built-in configuration, which the entry excludes by name. The profile and club photos are identity fields rather than acquired presentation content. The map types and stat maps change what the map shows and what the shared image carries, and stat maps are a tier feature rather than an alternative presentation of the same function.
- Gifting. Kudos are directed at an identified recipient and the product frames them as something given and received (O19, O65). It is not applied because no product-defined benefit changes hands: the recipient's balance, inventory, access or capacity does not change, and the entry excludes a sender who only passes on recognition or information.
- Referral Boost. The product carries an invitation route for people who are not on Strava, reached from the activity share surface and from the QR code screen (O70, O81, O89). It is not applied because no reward to the referring user was observed at all, and the entry requires completion events performed by both parties and an enhancement attaching to a future instance of the referrer's own action.
- Personal Data Reflection. The weekly snapshot, the per-sport statistics, the progress tab and the activity stats block all present the user's own records back to them (O35, O40, O41, O113). None is applied because all of them can be read without responding; the entry excludes dashboards, summary screens and activity logs by name, and nothing observed withholds a next step until the user answers.
- Expert Guidance. Paywall copy names "expert guidance and pacing, mindset and injury prevention from world class coaches" and a custom training plan from 5K to marathon, and the settings training plans route opens a set of named plans (O17, O86). It is not applied because the material is attributed to Runna rather than carried by Strava, and the route out of the plans list is the App Store listing for that separate product; no body of instructional material was observed inside Strava. The gate is recorded below.
- Experience Points. The activity count advances toward the defined thresholds of the trophy ladder, which satisfies the structural half of the entry (O47). It is not applied because Strava assigns no progression value to an event: the quantity is the tally of the activities themselves, one per activity, which the entry's own separating rule treats as a cumulative count. Milestone carries the thresholds.
- Seasonal Progression Pass. The challenge set is named for the month it runs in and its instances close at the month boundary, which is a bounded cycle (O53, O111). It is not applied because no ordered multi-threshold track exists: each challenge is a single objective with a single reward, and nothing positions the user along a sequence of tiers within the month.
- Rewarded Advertisement. Three surfaces promote offerings: the partner challenges named for Hoka, Brooks and Runna, the Apple Fitness+ promotion in settings, and the April 400 Minute Run whose reward is a Runna trial (O84, O85, O87). None is applied because no benefit observed is conditional on engaging with an advertisement: the Runna trial is granted for logging 400 minutes inside Strava, which the entry excludes as a benefit for using rather than for viewing.
- Variable Reward Outcome. The Hoka Speedgoat 7 Vert Challenge states that a reward exists without naming it (O53). It is not applied because an undisclosed reward is not a resolution that can produce materially different results; nothing establishes that the challenge could pay more than one thing, and the entry directs a single observed or unobserved result to be left unclassified.
- First-Purchase Bonus. Every paywall leads with a free trial rather than with a purchase, and the trial "unlocks every single Strava feature" (O16, O59). It is not applied because the trial is granted before any purchase and confers no benefit separate from the subscription it previews; the entry excludes access granted before a purchase and later retained by one.
- Purchase Ladder. The product presents two priced plans, the Strava annual plan and Strava plus Runna, in an order (O16, O96). It is not applied because both are directly purchasable and neither is conditioned on the other having been bought; an ordinary tier list is not a ladder without a lock on the later position.
- Daily Login Rewards. The product maintains a streak and contacts the user through a large notification catalogue, which are the surfaces this entry most often sits beside (O105, O107). It is not applied because nothing is granted or made claimable for opening the app: the streak's own copy states that it starts by logging an activity, which is a substantive task beyond access.
- Equipment Usage Register, rejected as a proposal on 14 Sep 2026. The gear register holds items the user owns and accumulates distance against them (O42, O112), but it gates nothing, rewards nothing, ranks nothing and affects nothing outside itself. A record that changes nothing is not a designed experience pointing the user toward a behavior, and the proposal said so itself. Describe an equipment register in plain language in Core loop and automation. If a distance-based maintenance reminder is later observed carrying a threshold and a prompt, that is a separate proposal about the reminder and not about the register. Do not propose the register again.
- Population Scale Interstitial, rejected as a proposal on 14 Sep 2026. A screen stating how many people use the product (O10) is social proof, which is a persuasion tactic rather than engagement design, and it is excluded on the same ground as review requests, permission primers and paywalled reward ladders. Record such a screen in Onboarding and first run and describe it in plain language. Do not propose it again.

## Unresolved

**Club collective state (O76, O75).** The club page carries overview, activities, stats and insights tabs beside the roster, and the newly created club was never populated enough for any of them to hold anything. Whether those tabs maintain a state belonging to the club, such as aggregate distance, club standing or a shared objective, or whether they list the individual records of its members, is the single fact that decides between Group Membership and Clan / Guild for this product. Nothing in the product's own framing settles it. The evidence that would settle it is one populated club page with the activities or stats tab opened.

**Segment leaderboards (O79, O52, O57).** Local Legends, Top 10 and the KOM and CR lists were all present and all empty, because the account had ridden one segment-free activity, and paywall copy names segment leaderboards as a subscription feature. Which parts of the segment ordering the free tier can see, and what the ordered lists look like populated, were not observed. The evidence that would settle it is a session on an account with segment efforts recorded, or a subscribed account.

**Coach-authored training guidance (O17, O86, O40).** Paywall copy names coaching content on pacing, mindset and injury prevention, the Workouts tab shows four intent-based cards that end in a trial button, and the training plans route opens a list of plans that leads to another product's store listing. Whether the material lives inside Strava behind the subscription, or only inside Runna, decides whether Expert Guidance applies to this product at all. The evidence that would settle it is a subscribed session in which a plan or a workout is started.

**Subscription-gated progress features (O56, O102, O57).** Performance predictions, goals, relative effort, the training log, advanced training analysis and best efforts are named repeatedly in paywall copy and were never reached. Several of them, particularly goals and relative effort, could carry mechanics of their own. The evidence that would settle it is a subscribed session.

**Group challenges (O55, O80).** Creating a group challenge and the Active tab both open the paywall, and group challenge comments and group challenge leaderboard changes appear as their own notification types, so the feature exists and is social. What a group challenge does, how contribution is counted and whether the group is a club or an ad hoc set of friends were not observed. The evidence that would settle it is a subscribed session in which one is created.

**Streak period and continuity rule (O107, O108).** The dashboard expresses the streak in weeks and the progress tab expresses it in days, and no screen reconciles the two. What qualifies a period, what a missed period does, and whether any protection exists are all unobserved. The evidence that would settle it is a session on an account with a running streak, recorded after a gap.

**Challenge reward identity (O53).** The Hoka Speedgoat 7 Vert Challenge states that a reward exists and does not name it, while every other challenge in the set names a digital trophy or a trial. The evidence that would settle it is the challenge page for that instance, or a completed instance.

**Subscription terms (O96, O99, O100, O104).** Trial length is stated as 30 days, as a first month and as four weeks; the reminder is stated once as at 28 days and once as two days before the end; the charge date given on the plan screen does not sit 30 days after the session; and the annual price is $79.99 in the app and 49.99 euros on the web with no mention of the difference on any paywall. The record carries all of these as observed rather than reconciling them. The evidence that would settle them is the plans screen behind "see all plans", and a trial run to its end.

**Sport count (O9, O11, O21, O23).** Four figures appear for the number of sports the recorder supports: over 30, 48, 30+, and a count from the selector itself that the session put at forty or more. Nothing on any screen reconciles them.

**April 10 Days Active success condition (O53).** The session describes the condition both as ten days active within the month and as ten days in a row, and the wording on the screen is not recoverable from the transcript. The two readings are a threshold challenge and a streak-shaped challenge respectively. The evidence that would settle it is the challenge page for that instance.

## Entries never observed

- Boosters. Nothing is held in a counted quantity and expended inside an activity to change its conditions or outcome; the product has no consumable items at all.
- Companion. No secondary entity exists that the user acquires, assigns to a position and develops; nothing takes part in an activity alongside the user.
- Daily Claim Pack. Nothing is purchased or activated that then releases rewards across recurring intervals; the subscription opens features immediately and grants nothing on a schedule.
- Earning Tasks. The product never pays the user, and no catalogue of compensated tasks with disclosed compensation and effort exists anywhere in it.
- Energy. Nothing limits how often an activity can be recorded; no capacity, cooldown or attempt allowance was observed on recording or on anything else.
- Hard Currency. No product-defined spendable currency exists, so none can be bought; the only thing money buys is the subscription.
- Lives. No failure or terminal event exists in the product, so nothing is removed on one.
- Loot Box. Nothing is acquired with concealed contents against a committed cost; every reward observed is stated before the user joins.
- Minigame. No self-contained activity with rules of its own exists; everything the product asks the user to do is recording activity or acting on records of it.
- Passive Construction. Nothing is built, restored or upgraded over time; no persistent constructed entity exists.
- Piggy Bank. No reserve of accumulated value held back from ordinary use exists, because no spendable value exists.
- Progression Fund. No reward track attaches ordered positions to a measure the product already maintains, and no purchasable lane pays more at those positions.
- Reward Multiplier. No stated factor or increment is applied over a base reward anywhere; the product pays no reward that an amount could modify.
- Season Content Pass. The subscription is a permanent entitlement to a feature set rather than access to a multi-item bundle grouped under a defined season or release cycle.
- Soft Currency. No spendable balance is granted through ordinary activity, because no spendable balance exists.
- Spendable Credits and Tokens. Neither kudos nor trophies nor achievement counts can be exchanged for anything, and no balance is reduced by any observed action.
- Variable Reward Schedule. Every reward position observed is a disclosed condition on a challenge or a trophy ladder, so the next rewarding action is knowable in advance.

# Pass three: proposed new tags

Four proposals were made on this run and all four were ruled on on 14 Sep 2026. Profile Completion Meter was approved under the name Profile Completion and is now an approved library entry; Pass two has not yet been re-run against it, so the observation that produced it, O46, does not yet carry the tag. Equipment Usage Register and Population Scale Interstitial were rejected on scope and are recorded above under entries considered and not applied, each with the reasoning that rules it out in future analyses. Self-Set Recurring Target was held rather than rejected: the distinction it draws is real, but the behavior that would make it an entry was never observed. It is restated below, rewritten around that gap, and left open.

### Self-Set Recurring Target

**Draft definition.** The product supplies a surface on which the user names their own target for a recurring period, choosing the amount while the product supplies the unit and the period. The target is not completed and retired when it is met: the period ends, the measure returns to zero, and the same target stands again for the next period. That reset is what the pattern is; without it the surface is an ordinary self-set goal.

**Source observations:** O45.

**Conditions it appears to depend on:** A measure the product already records from ordinary use; a recurring period the product defines, such as a week; a target amount the user chooses rather than receives; a surface the product places in front of the user proposing that they set one; a measurement of activity against the chosen amount within each period; and a boundary at which the measure resets and the same target applies again.

**Why it is not covered.** Challenge requires the product to define the success condition, and here the product defines only the unit and the period while the user sets the value; a challenge instance also concludes, where this one recurs. Daily / Weekly Quests requires the product to issue, refresh or release objective instances on a cadence, and nothing is issued: what recurs is the period, not the objective. Milestone requires a threshold the product defines within a progression. The distinguishing features are that the commitment is the user's own and that it repeats on a calendar rather than ending, and no approved entry holds both.

**Recurrence elsewhere:** Savings and budgeting products, learning products, step and activity trackers, reading products and habit products all offer a per-period target the user sets. The structure is describable without reference to this product.

**Caveat.** Held, not ready. The reset is the invariant and it was not observed. The session saw the surface and the unit it takes, activities per week, but never set a target, so nothing shows how the product measures against one, what happens at the end of a period, whether an unmet target is recorded, or whether the same target stands again (tier: unresolved). A weekly reset is visible elsewhere in the product, on the snapshot and on every profile's week figures, but that is the product's clock rather than the goal's behavior and does not stand in for it (tier: directly observed). The word goals also appears in paywall copy as a subscription feature, and whether the free surface and the paid feature are the same thing is not established (tier: unresolved). Before this can be written as an entry it needs either a second observed instance in another app, or one session that sets a target and carries it across a period boundary. Until one of those exists the proposal stays open and unwritten.

# Close: system view

Strava has one loop and it is short: record an activity, save it, and let the record be read. Everything else in the product is hung off the record that recording produces (O26, O27, O33, O35). The product is unusual in this library for having no economy at all: no currency, no capacity limit, no balance, nothing to spend and nothing to spend it on (Economy and resources holds no observations). That absence shapes the whole system, because it means every incentive the product can offer is either a recorded state, another person's attention, or a subscription.

The recorded states are organised into two ladders and a continuity count, and they are all keyed to different things. The trophy case counts activities, so it rewards doing more, and it hands out its first position after 44 seconds of riding (O47, O48). The achievements attached to activities are graded and are earned by how the activity went rather than by how many there have been (O49). The streak counts weeks, so it is the only progression in the product that cannot be advanced without coming back later (O107, O113). The weekly clock that the streak runs on also runs the suggested goal, the weekly snapshot and the profile header, and it resets hard, so on a Monday morning every profile in the product reads zero (O45, O71, O113). Whether that reset is a cost or simply a boundary was not something the sessions could settle.

Other people are the product's main engine and they are introduced before the user has done anything. Onboarding asks for a name so friends can find it, states that the profile is public, and places a friend-finding step inside the flow (O5, O19). A new account with no follows still opens on a populated feed of strangers' activities, a list of locally suggested athletes, and a list of local clubs (O64, O65, O73). The comparison surfaces run on the same proximity: segments are named by other people, Local Legends orders by efforts in the last ninety days, and Top 10 states a bounded position on a stretch of local road (O51, O52, O79). Kudos is the reciprocal unit the whole social layer is denominated in, and the product uses the word for its own system messages too, congratulating the user on a first activity with "kudos" (O34, O65).

Challenges are where the social layer, the progression ladders and the partner relationships meet. Each is a bounded objective with a month-long deadline and a stated reward, each shows how many hundreds of thousands or millions of people have joined it, each carries a leaderboard over its participants, and one of them pays out in a trial of another product (O53, O54, O80, O84). The joining is free and the making is paid: creating a group challenge opens the paywall, as does the Active tab that would let the user run one (O55).

That split is the shape of the monetization throughout. The free product records, displays and shares; the paid product explains, plans and predicts. Routes, terrain, heat maps beyond the global one, best efforts, relative effort, performance predictions, the training log and advanced analysis are all withheld, and the map surface withholds them in a way that shows their outlines without letting any of them be previewed (O57, O58). The paywall is met at nine distinct points, its copy rewritten each time to name the thing the user was reaching for, and twice it is placed immediately after something has gone right rather than on an attempted action: once after the profile photo step and once inside the trophy case, where it covers half the screen so the just-earned trophy stays visible behind it (O94, O95, O101). The terms the offer carries do not agree with each other across those placements, and the annual price differs between the web checkout and the in-app sheet without either screen saying so (O96, O104).

Two dependencies are worth naming because they carry more of the system than the evidence supports. The first is the streak: it is the only mechanic in the product that requires a return, it sits at the top of the dashboard above everything else, and the rule that would make it a streak rather than a count of weeks was not observable in four days on a new account (O107). The second is clubs. They are the only collective the product has, they hold the events, the posts and a club-scoped feed, and the question of whether they maintain any state of their own is the difference between a membership system and a collective participant (O76). Both would be settled by a session on a mature account, which is the single most useful thing a second walkthrough of this product could supply.
