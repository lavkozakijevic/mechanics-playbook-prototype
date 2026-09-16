# Uptime

**Teaser:** Uptime's third subscription offer, the cheapest one, only appears after the first two have both been turned down.

Uptime delivers five-minute summaries of books, courses, documentaries and podcasts, routing a new account through topic selection, three successive subscription offers and a full first hack before it ever reaches an unguided screen. Finishing that hack produces a streak, an hours-saved total and topic credit together, each composed into a shareable image carrying the Uptime logo. Saved or read material returns later through a separate Spark system, presented as recall cards that ask only whether the material is remembered, with a card always held back for the next day. Pricing runs as a sequence of discounts against the same stated $69.99 standard price, each offer arriving only after the last is declined.

---

## System view

Uptime is a medium-complexity system whose spine is the first completed hack: finishing it produces three records at once, feeding the app's one shareable-image surface, while a separate Spark recall loop runs beside it, untouched by any of that.

---

## Mechanics

### Streak

**Implementation summary:** One insight from any hack a day keeps Uptime's streak alive, with a reminder control sitting directly beneath it.

**What was observed:** Uptime counts a daily streak that only requires completing one insight from any hack, not a full hack. The streak appears at the top of Discover beside the Premium countdown, at the top of My Stats with a Change reminder button directly beneath it, and on the completion screen after the first hack. My Stats also shows a longest streak separate from the current one.

**How it is presented:** The streak sits in the same header position as the Premium countdown on Discover, and leads the My Stats tab as its first element, with the reminder control placed immediately under it.

**What is worth noting:** Requiring only one insight, not a finished hack, sets a very low daily bar, and Uptime places the reminder setup control directly beneath the streak rather than as a separate step, tying the return mechanic and its own safeguard together on one screen. What a missed day does to the count, and whether any freeze or repair exists, isn't shown.

**Key findings:**

- The streak requires one insight from any hack per day, not a full hack.
- The streak appears on Discover, on My Stats, and on the completion screen.
- My Stats shows a longest streak separate from the current one.
- A reminder control sits directly beneath the streak on My Stats.
- What a missed day does to the count is not shown.

**Screenshots needed:** the My Stats streak line with its reminder control, and the Discover header showing the streak beside the Premium countdown.

### Shareable Win

**Implementation summary:** Hours saved, topic growth and the streak are each composed into a logoed image offered for sharing outside the app.

**What was observed:** The completion screen's Share your progress control, the Discover header's share prompt, and the topic and streak lines on My Stats each open a composed image stating the underlying figure, "10 hours saved," "Three topics covered," "One day. Your streak," alongside the Uptime logo. Each image is offered as a downloadable image or as text through social sharing.

**How it is presented:** Every share route opens from a figure already on screen, the completion screen, the Discover header, or a My Stats card, rather than from a dedicated sharing screen.

**What is worth noting:** Every image states what the user has done rather than inviting anyone to do anything, and none carries a benefit for sending it. The Uptime logo travels with the user's own figures to whoever the image reaches, so a private return signal, a streak, an hour of reading, becomes something read by someone outside the app the moment it's shared.

**Key findings:**

- Hours saved, topic growth and the streak each open a composed shareable image.
- Each image carries the Uptime logo alongside the user's own figure.
- Images can be shared as an image, as text, or downloaded.
- No benefit for sharing is shown.

**Screenshots needed:** the completion screen's shared progress image, and a My Stats card's shared image.

### Recall Review

**Implementation summary:** Uptime returns saved or read material as cards asking only whether it's remembered, holding one back for tomorrow.

**What was observed:** My Sparks presents spark repetition cards one at a time, each asking "Do you remember this?" with No, Not sure and Yes as the only responses, and a Stop showing this card control. After a few cards, Uptime reports the count reviewed, then that all cards for the day are complete, with a control to reveal tomorrow's card early.

**How it is presented:** The review sits inside My Sparks, reached from the You tab, with a settings option to draw the review from saved sparks only or from sparks and insights together.

**What is worth noting:** The three response options, remembered, not sure, and not remembered, ask for the user's own judgement rather than checking it against anything, and nothing about the response is shown changing when a card returns. Whether the cards drawn came from material the user had saved or from insights of the hack just finished isn't settled, since both are described as sources at different points.

**Key findings:**

- Each card asks "Do you remember this?" with three response options.
- A control lets the user reveal tomorrow's card early.
- A setting controls whether the review draws on saved sparks, sparks and insights, or both.
- What a response changes about when a card returns is not shown.

**Screenshots needed:** a spark repetition card with its three response options, and the completed-set message with the early-reveal control.

---

## Onboarding and first run

A sign-in screen, a consent line, topic selection, three subscription offers, a notification request and a full first hack all run before Uptime's first unguided screen.

### O1. Book cover opener

Uptime opens on a screen of book covers moving in several directions in sliding rows, reading "Get smarter, faster. Stand out from the crowd with five minute summaries of the best books, courses, documentaries and podcasts." The proposition names four content formats before any account exists, framed around speed and standing out rather than reading itself. No guest route or browsable preview of the catalogue appears on this screen.

### O2. Sign-in options

The first screen features a Continue with Apple button, with Google, email and SSO routes below it and a sign-in control for an existing account. Every route on the screen leads to an account; no route into the content without one appears.

### O3. AI personalization consent

Small text at the bottom of the sign-in screen states that Uptime uses AI to personalize the experience based on activity, that continuing counts as consent to that processing, and that deleting the account stops further processing.

### O4. Greeting by name

After sign-in, a loading screen states that Uptime is getting the user up and running, then the next screen opens with a greeting by name. No name field is shown before the greeting.

### O5. Topic selection

The greeting screen asks which topics the user is most interested in, to personalize the learning experience, offering topics including Personal Growth, Career and Success, Lifestyle, Mind and Philosophy, Arts and Design, Health and Fitness, Business, Leadership and Entrepreneurship, Culture and Society, Biographies, Science and Environment, Parenting and Relationships, Education, History, Technology and the Future, Religion and Spirituality, Money and Investing, and Marketing and Sales, with no stated minimum or maximum. The selection can be changed later under Customize your interests.

### O6. Setup loading screen

After the notification request, a loading screen states that setup is complete. Between topic selection and this screen, Uptime shows the trial paywall, the plan list, the three-day Premium gift and the notification pre-prompt, in that order.

### O7. First-hack picker overlay

After setup, the home screen is visible in the background under a tinted overlay reading that the user made a great choice of topics, inviting them to check out a few top summaries called hacks. Each hack shows a cover, a content-type tag, a title and author, and Uptime named beneath as the creator. The user is taken from this overlay straight into a hack rather than into the home screen itself.

### O8. Hack instruction overlay

When the first hack finishes loading, a pop-up titled "How to watch a hack" explains that a hack gives the key insights in five minutes, and lists four controls: tap right to continue, tap left to go back, tap and hold to pause, and tap Spark card to save something liked.

### O9. First-hack completion screen

On finishing the hack, Uptime congratulates the user on completing their first hack, stating that they've saved 11 hours, that their streak is one day, and naming the topics they got smarter in, with a Share your progress button and a Set up a daily reminder button above a smaller Next control.

### O10. First unguided screen

After the post-completion offer is closed, Uptime shows the home page with four tabs, Discover, Browse, You and Premium, landing on Discover. A diamond icon in the top right corner shows "72 hours left" beside a streak counter. Tapping the streak counter opens the You tab, and tapping the diamond opens the expiry prompt.

---

## Core loop and automation

Opening and reading a hack, saving sparks, and browsing Discover, The Backdrop, collections and Browse make up this section.

### O11. Hack cover screen

Opening a hack shows a loading screen that advances automatically after a few seconds, then a cover screen with the title, author, a line naming the topics it helps the user grow in, and a stated hours-saved figure. Scrolling down reveals a Jump to Insights button, pause and mute controls, and Spark Card, Share and More.

### O12. Hack sections and narration

Once playing, a voice reads what's on screen. A navigation button opens the hack's sections: Overview, three numbered insights, and a wrap up, with a progress bar showing how far the user has gone. Screens run through an opening summary, a favorite quote, an author screen, an image screen, each insight with a specific example, and a wrap up.

### O13. The More panel

Tapping More opens a Buy this book link to Amazon, a mode choice between Story, Audio and Text, a Download control, a playback speed control, a toggle for images and videos, and Give feedback, Report content and Content attribution controls. Tapping Download completes without a further step.

### O14. Screenshot redirected to Spark

Attempting a screenshot while a hack is loading opens a pop-up stating that a screenshot isn't needed, and that the Spark Card control at the bottom of the page saves part of a hack to a board instead, with Spark Card and Not now as the only options.

### O15. Spark boards

Tapping Spark Card opens a choice of board to save to, and once placed, a spark can carry a typed note. A board can be played back automatically, and My Spark Boards shows a count starting at zero with a control to add and name a new board.

### O16. Spark repetition

My Sparks shows a spark repetition card asking "Do you remember this?" with No, Not sure and Yes, and a Stop showing this card control. After several cards, Uptime reports the count reviewed, then that all cards are complete, offering to reveal tomorrow's card early. A setting controls whether the review draws on sparks alone or sparks and insights together.

### O17. Post-hack next-hack screen

After the completion screen and reminder setup, a screen asks whether the user enjoyed the hack, offers sharing and the full book on Amazon, and lists several next hacks with an autoplay toggle. Autoplay is off by default; turned on, the next hack starts automatically after a countdown.

### O18. The Discover tab

Discover opens with a progress header and a share control, then runs through editorial and topic-based sections in sequence: top picks, an upgrade banner, trending hacks, The Backdrop, a topic section, collections, saved hacks, editors' picks, further topic and collection sections, an invite banner, new hacks, and a closing section offering topics not yet selected.

### O19. The Backdrop

A Discover section presents The Backdrop, a numbered weekly news edition covering several topics with a stated hours-saved figure and a list of included hacks. An edition can be saved, unsaved, reported and shared as a link, and a view-all control opens every past edition.

### O20. Editorial collections

Collections group hacks of several formats under an editorial theme with a combined hours-saved figure, such as a themed collection on a current event. Further collections cover a range of editorial topics, and a view-all list can only be scrolled, with no filter or search. Collections can be saved and appear under saved collections in the library.

### O21. Browse tab

Browse opens with a search bar for title, author or keyword, a list of topics, and a Deep dive area listing collections and each content format. Opening a topic shows tabs for top hacks, books, courses, documentaries, podcasts and Up hacks.

### O22. My Library

The You tab's My Library shows all history, unfinished, saved, saved collections and downloaded hacks. A finished-hacks line states a count of hacks completed, prompting the user to pick up where they left off.

### O23. Settings screen

Settings holds notification, language, dark mode, autoplay and default hack mode controls, spark repetition preferences, the Premium subscription entry, account controls including delete account and sign out, and a window to change the topics chosen during onboarding.

---

## Goals and progression

Hours saved, topic growth and the daily streak are the three records Uptime keeps on completed activity, shown together on My Stats.

### O24. Hours saved total

Every hack, edition and collection states an hours-saved figure, and the completion screen, the Discover header and a My Stats card each restate a total. The completion screen states 11 hours after the first finished hack, while the hack's own cover screen and the Discover header both state 10 hours for the same content. The figure is framed as time won back against the length of the original material, and is not exchanged for anything.

### O25. Topic growth credit

The hack cover screen and the completion screen credit the user with growth in the topics of the hack just finished. The Discover header and its shareable image restate the same credit, stating three topics covered, while My Stats separately states an expert line for one topic and a count of six topics covered, within the same visit.

### O26. Daily streak

A streak counter sits at the top of Discover beside the Premium countdown, and leads the My Stats tab with a stated daily rule of one insight from any hack, a change-reminder control, and a longest streak shown separately from the current one.

### O27. My Stats card row

My Stats presents a row of shareable cards above the hack history: the streak, insights learned, hours saved, a topic-expertise card, topics covered, and a closing card encouraging further learning. Each card, and the longest streak below the row, can be shared, and a see-more control on a card opens Browse.

---

## Access and eligibility

Premium marks on catalogue items and a photo library permission for saved shares make up this section.

### O28. Premium marks on content

Podcast and book hacks inside a Discover collection are marked as part of Premium. Throughout the visit the account holds three-day Premium access, shown as 72 hours left, and the expiry prompt states that once it's gone, access to thousands of hacks and Uptime's smart features is lost. Offers describe Premium as unlimited insights, over 8,000 titles and exclusive content from top creators.

### O29. Photo library access

Saving a generated share video or image requires giving Uptime access to the photo library.

---

## Economy and resources

Uptime maintains no currency, points, credits, tokens or other held unit that is earned and then spent or exchanged. The hours-saved total accumulates but is never exchanged for anything, and is described under Goals and progression.

---

## Social

No other identified person appears anywhere in the app: content carries Uptime as its creator, the editors' picks copy refers to creators the app never actually shows, and book authors appear only as subjects of content. Every route that involves another person, sharing hack content, sharing progress, and inviting friends, sends something outward without identifying a recipient inside the product, and is described under Reach beyond the app.

---

## Reach beyond the app

Sharing hack content, shareable progress images, an invitation banner and an Amazon link are Uptime's routes outside the app.

### O30. Sharing hack content

Tapping Share on a hack offers four images, a favorite quote, an opening summary, a book summary, and a summary of the key insights, alongside options to share a generated video, share an image, share a hack link, or link and embed the hack on a website or blog. The subject of every option is the hack's content rather than anything about the user's own activity.

### O31. Shareable progress images

The completion screen's Share your progress control, the Discover header's share prompt, and the topic and streak lines on My Stats each open a composed image carrying the underlying figure alongside the Uptime logo, offered as an image, as text, or as a download. No reward for sharing is shown.

### O32. Friend invitation banner

A Discover banner offers a friend three days of Premium for free, opening a pop-up that generates a shareable link. The same banner appears in My Sparks below the completed-cards message. No benefit to the inviting user is stated anywhere in the flow.

### O33. Amazon book links

The More panel and the post-hack screen both carry a link to buy the full book on Amazon, with small print stating that Uptime may receive a small commission from the purchase.

### O34. Research and content requests

Near the bottom of settings, Take part in research and Request content both open the same pop-up chat with Uptime.

---

## Monetization

Three successive subscription offers run across onboarding and the first hack, each against the same stated $69.99 standard price.

### O35. Trial paywall after topics

Immediately after topic selection, a pop-up offers one week of Premium free with 57% off if the user continues, listing unlimited insights, exclusive content and over 8,000 titles. The primary button starts the trial at $29.99 a year, stated as $2.50 a month, with small print stating that the standard annual plan is $69.99 and that the user won't be charged if they cancel before the trial ends.

### O36. Plan list

Viewing all plans shows a monthly option at $3.99 and an annual option at $29.99, stated as $2.50 a month, with the free trial attached to the annual plan. Choosing monthly changes the button from starting a trial to getting Premium directly.

### O37. Three-day Premium gift

After the plan list closes, a pop-up offers three days of free Premium access as a gift, alongside an exclusive 64% discount if the user upgrades that same day, with a single button reading Thank you that closes the pop-up. The 64% discount offered here is larger than the 57% offered on the trial paywall.

### O38. Post-hack discounted offer

Closing the post-hack screen without starting the next hack brings up an offer to keep unlimited access, running through five slides naming distraction-free reading, offline listening, a choice of seven speeds, and organizing sparks into boards as benefits to keep. The price is $24.99 a year, stated as $2.08 a month and 64% off, renewing afterward at $29.99.

### O39. Premium countdown prompt

The diamond icon in the Discover header shows "72 hours left." Tapping it opens a prompt stating that Premium access is running out and that once it's gone, access to thousands of hacks and Uptime's smart features is lost, with a button to upgrade.

### O40. Recurring upgrade banners

A Discover banner offers access to thousands of hacks at 64% off, opening the same payment pop-up. Premium also has its own tab in the bottom bar, and settings carries a Premium subscription entry that opens the same kind of pop-up.

---

## Return triggers

A notification pre-prompt, a daily reminder tied to the streak, and eight notification categories bring the user back.

### O41. Notification pre-prompt

After the gift pop-up, a screen asks the user not to miss personalized recommendations, framing notifications around building a new habit and getting smart fast, with a large button to allow them above smaller text to decline. The system notification request follows.

### O42. Daily reminder setup

Set up a daily reminder on the completion screen opens a prompt asking when the user wants a reminder so they never miss a day, with a time picker and an AM or PM choice. My Stats later carries a Change reminder button under the streak line.

### O43. Notification categories

Notification settings list eight categories: suggested content, daily reminder, personal reminders, spark repetition, The Backdrop, saved items, updates and offers, and research, each with its own push and email choice. After permission is granted, every category is marked active by default.
