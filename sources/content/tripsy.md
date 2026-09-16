# Tripsy

**Teaser:** Tripsy's sample trip shows every Pro feature unlocked before a user has created a single trip of their own.

Tripsy is a travel planning app organized around a single object, the trip. Users build one by hand, forward flight and hotel confirmation emails to a personal address that turns them into itinerary entries automatically, or open a fully populated sample trip to see the product in its finished state before creating anything of their own. Every trip carries its own itinerary, documents, expenses and map, and can be shared with guests under view-only or collaborator roles. A Pro subscription runs across nearly every part of the structure, locking expenses, documents, forecasts and advanced statistics on a user's own free trip while leaving the same sections open on the sample.

---

## System view

Tripsy is a medium system. Nearly everything, the itinerary, guest sharing, the accumulating travel statistics, and the Pro paywall, hangs off one object: the trip. Creating one, forwarding a reservation into one, or opening the sample is the single entry point the rest of the product depends on.

---

## Mechanics

### Set Collection

**Implementation summary:** Tripsy tracks countries and territories visited against a fixed world total of 250, inside a lifetime travel statistics book.

**What was observed:** Tripsy's My Tripsy Book gives a running count of countries and territories visited against a world total of 250, shown inside a circular progress ring. A Show visited list marks every country in the world as visited or not, building the same set across every trip a user takes rather than within a single one. The book also totals trips, stays, nights and days traveling, browsed by year from the globe screen. A country counts as visited even from a layover flight or train connection when the Count transit countries setting is on, which is its default state; a second setting can switch the map to show individual visited cities instead of one point per country.

**How it is presented:** Tripsy places the book behind a dedicated button on the main trips screen, opened as an overlay with a world map and headline statistics. Tapping the countries figure opens the ring showing progress toward 250, and tapping any statistic composes it into a shareable image. Every figure read zero on the account this record was built from, since no trip had been completed.

**What is worth noting:** Tripsy applies the set-collection frame to something most travel products would show as a plain fact, a list of places visited, by giving it a completeness ring against a fixed total of 250 rather than an open-ended tally. The registration rule sits in a settings screen rather than on the book itself: whether a country counts depends on a toggle a user may never open, so what the number reflects is a choice made at setup rather than something explained where the number is shown.

**Key findings:**

- Countries and territories visited are tracked against a fixed world total of 250, shown in a progress ring.
- A settings toggle, on by default, counts a country as visited from a flight or train connection alone.
- A second setting can switch the map from one point per country to one point per visited city.
- Trips, stays, nights and days traveling are also totaled inside the same book.

**Screenshots needed:** the My Tripsy Book overlay with the countries progress ring, and the book's counting settings screen.

### Group Membership

**Implementation summary:** Tripsy shares a trip through named guest roles, view-only or collaborator, with a delegated invite right.

**What was observed:** Tripsy treats a shared trip as a roster of named people rather than a link passed around. Sharing a trip invites guests who are set to either view-only or collaborator, and a collaborator can additionally be given the right to invite and remove other guests. Manage guests lists everyone traveling starting with the owner, described as the trip's admin. A separate Traveling together setting decides whether a guest's copy of the trip sits in their own My Trips and travel log, or only in a friends list. Items added to the trip can be filtered by which guest added them, and invitations received from other trips appear in their own Pending invites list.

**How it is presented:** Sharing starts from a Share Trip sheet offering four routes, of which inviting a guest is one; the others, a web link, a social post, and having a friend follow the trip, carry no membership of their own. Guest permissions are set at the moment of invitation and can be changed afterward through Manage guests.

**What is worth noting:** Tripsy's guest model separates viewing a trip from belonging to it: a web link lets anyone see the itinerary with no account and no role, while an invited guest gets a named, permissioned place on the roster. The Traveling together setting is a second, quieter membership decision layered on top of the invite itself, controlling whether the shared trip behaves like the guest's own trip or like something they were only let into.

**Key findings:**

- Guests are invited into a named role, view-only or collaborator, rather than added anonymously.
- A collaborator can be delegated the right to invite and remove other guests.
- The owner is described as the admin of the shared trip.
- A separate Traveling together setting controls whether the trip appears in a guest's own trip list.
- Items can be filtered by which guest added them.

**Screenshots needed:** the Share Trip sheet with its four routes, and the Manage guests screen listing the owner and invited guests.

### Cosmetic Customization

**Implementation summary:** Tripsy locks most of its alternative app icons behind Pro, leaving three free at install.

**What was observed:** Tripsy's Customize settings include an App Icon option offering a large set of alternative icons for the app itself. Three are available without a subscription, and the rest are locked behind Pro. The setting sits in the same group as currency, distance units and language.

**How it is presented:** The icon picker shows the full set of options together, with the locked ones visibly present rather than hidden, so a user sees the complete range before subscribing.

**What is worth noting:** Tripsy's only cosmetic sits somewhere a user might not think to look, a device home screen icon, rather than inside the trip itself. Nothing about the choice changes how the app behaves; it's a purely presentational upgrade paired with the subscription rather than sold on its own.

**Key findings:**

- The App Icon setting offers a large set of alternative icons.
- Three icons are available from the start.
- The remaining icons are locked behind Tripsy Pro.
- No icon choice changes how the app functions.

**Screenshots needed:** the App Icon settings screen showing both free and locked options.

---

## Onboarding and first run

Tripsy's first run moves fast toward Pro before a single trip exists, then offers three separate ways to see the product working: building a trip, forwarding a reservation, or opening a populated example.

### O1. Welcome carousel

On first launch Tripsy opens with a welcome message and a Get started button, the first of seven swipeable screens each presenting one capability. The screens cover staying organized without missing anything, an itinerary planner combining a day-by-day schedule with an activity list, flight update notifications for gate and time changes, sharing a trip with guests who can collaborate for free, forwarding flight, hotel and car rental confirmations to save them automatically, managing expenses from flights and accommodation to meals and activities, and storing travel documents, including images, notes and videos, available offline.

### O2. Pro offer after Get started

Tapping Get started takes the user straight to the Tripsy Pro seven-day free trial screen before any trip exists. The primary button on the screen starts the trial, and leaving without starting it requires tapping an X in the top right corner, which leads to My Trips.

### O3. My Trips welcome card

After the offer is closed, My Trips shows a welcome card offering three routes: creating a first trip, forwarding a reservation, and exploring a sample trip. Swiping the card down reveals a rotating, zoomable world globe that shades day and night and states that a country flag will mark a trip's location once one is created. A settings control sits in the top right corner, and a separate automation card explains that Tripsy can build an itinerary from a forwarded flight or hotel reservation.

### O4. Exploring the sample trip

Exploring the sample trip opens a fully populated seven-day New York City trip using the same screen and controls as a user's own trip, holding a flight from Los Angeles, a drive from the airport, a stay, dated activities across the week, documents and expenses. Edits made inside it take effect: adding a restaurant with a cost updates the expense total and appears among recently added items. The sample trip's header stated it was six days from ending, timed to the day it was opened. Once closed, it appears on My Trips as an upcoming trip, and it displays several sections that a user's own free trip later shows locked.

### O5. Location permission request

Opening the sample trip triggers a request to allow Tripsy to use location, explained as showing the user's position on the trip map and suggesting nearby places when adding an activity or saving an address. The request appears when the trip map first loads rather than at launch.

---

## Core loop and automation

Tripsy's core loop runs on the trip itself: building one by hand through category search, or letting forwarded reservation emails fill it in automatically, then managing its itinerary, documents and expenses from the trip screen.

### O6. Creating a trip

Tripsy opens trip creation from a plus button on the globe screen, in a sheet asking for a name, dates and a background. As the name is typed, Tripsy fills the background with an image matching it, a city, an island, even a planet name each produce their own picture. Dates start unset until chosen from a calendar, and the suggested background can be replaced with something else.

### O7. Starting a new trip

Once the Pro pop-up following creation is dismissed, the new trip states when it starts and how long it lasts, shows an itinerary beginning on the chosen date, and offers a button to start organizing it. Documents and Expenses appear below, both locked behind Pro, followed by cards for forwarding a reservation by email and inviting guests. Adding the first activity opens a search across categories including flights, stays and restaurants.

### O8. Trip screen layout

A trip screen opens with the country flag, a destination photo, the trip name, a time-remaining line and its date range. Five buttons sit under the name: new activity, flights, stays, places and routes. Below that, Tripsy shows the next flight, the next movement, the day's itinerary, documents, expenses, recently added items, a Pro card, a card for inviting guests, and a customize control. The top bar carries a menu, a search icon and a close control. The invite guests card explains that frequent guests can view, add, edit and remove items, and that the trip's owner is its admin. The Pro card offers unlimited image, note, video and PDF storage with seven days free.

### O9. Adding an activity

Choosing a category from New activity, such as restaurant, lists nearby options built from the trip's accommodation location and the user's own position. Selecting a place opens it on a map with its address, website and phone number, supplied by Tripsy's own place search rather than typed in, and saving adds it to the trip. The date picker offers the trip's own date range, and time is set in the destination's time zone, which can be changed. A cost entered on the activity adds to the trip's expense total and the activity appears among recently added items. A note can also be attached.

### O10. Activity detail screen

Opening an activity shows it on a map with a sheet listing its start and end date and time, duration, an all-day switch, address, phone, website, reservation code, total cost, a note, and options to attach a file, photo or link. A menu on the activity offers marking it completed, creating a route, editing its information, changing its category, duplicating it, copying it, moving it to another trip, further actions, and removing it. Further actions include recalculating the time zone and coordinates and changing the map location. Duplicating an activity carries its reservation code into the new copy, and copying or moving it asks which trip to place it in. Each category carries its own icon, a car for travel, a bag for shopping, a bed for accommodation, a disco ball for a party, and so on.

### O11. Activity categories

Changing an activity's category opens a large preset catalogue grouped under headings such as shopping, health, services, sports, outdoor, relaxation, work and study, locations, art and fun, nightlife, and food and drink. A New category option at the top lets the user build a custom category with its own name, color and icon. Custom categories also appear in, and can be added from, Settings.

### O12. Planning a route

Creating a route calculates the path from the current location to the activity, with an option to add a stop and an estimated travel time, in a choice of walking, driving, cycling, train, bus or motorcycle. A route calculated from the device's actual location to an activity on the New York sample trip returned a driving estimate of about 225 hours. The route's starting point does not appear changeable from this sheet. Closing an unsaved route asks whether to discard it. The Routes button on a trip shows all its movements through the city on one map, distinguishing walking from rides and drives. Tripsy's release notes describe a further Smart Routes capability that plans around the schedule and real travel times, previews suggested routes with time and distance, and sets the time of each stop on a multi-stop route. We did not operate Smart Routes in this analysis.

### O13. Flights, stays and places lists

Flights, Stays and Places each open as a map of matching items with a button to add more. Lists can be sorted by distance, title, date, completion or assigned guest, filtered by guest, city or status, and grouped by city. Places draws distance rings at 1, 2 and 3 kilometers around the accommodation, which can be turned off, and lists results from closest to farthest. Adding a second stay zooms the map out to show both. The Flights list also offers exporting to CSV and selecting multiple items.

### O14. Adding a flight

Adding a flight asks for its number and date and returns the matching flight with departure and landing times, or offers manual entry if nothing is found. Selecting the flight fills in its route, duration, time zone difference and distance, leaving placeholder fields for reservation code, seat and cabin. The same screen carries a banner offering to set up reservation forwarding so future flights save automatically.

### O15. Flight and transfer details

The next flight on a trip expands to show its flight number, terminal, gate, expected departure, duration, time zone difference, distance, airline, aircraft, baggage claim and total cost. The following item is the drive from the airport to the stay, carrying its own duration, distance, preferred transport type, cost, note and attachments. Transport type options include bike, bus, car, cruise, ferry, motorcycle, subway, train, transfer and walking.

### O16. Daily itinerary

Itinerary today lists the day's items in order, and viewing all days opens a date strip covering the whole trip. Each day shows the weather where the traveler will be, with a minimum and maximum temperature and conditions. Tripsy inserts helper rows between items, one prompting the user to set a saved address so it can calculate when to leave for the airport, and another marking a time zone change, three hours on the sample trip. On a free trip, the leave-time and daily forecast rows appear as Pro-locked tiles instead.

### O17. Storing documents

Documents on a trip lists saved items such as hotel Wi-Fi details and web links, with options to import a document, save a link, choose or take a photo, or write a note. Tripsy states that stored documents are available offline. On a free trip Documents shows as locked behind Pro, though a booking email forwarded into the trip still appeared inside it. We could not determine which specific document actions the Pro lock is meant to restrict.

### O18. Tracking expenses

Expenses on a trip totals costs by category, such as stays, flights, restaurants and bars, in a chosen currency, with an eye control to blur the amounts from view. Tripsy explains that costs are added through the total cost field on each activity, and converts totals between currencies. The display currency defaults to the user's local currency and can be changed in Settings. On a free trip Expenses shows as locked behind Pro, while forwarded reservations are still counted into the total.

### O19. Searching a trip

The search icon on a trip opens a search across saved activities and documents, listing each activity by date, time and destination. Typing a place name finds the matching activity and opens it on the map. The globe screen carries its own separate search bar for finding trips.

### O20. Trip menu

The trip menu offers sharing the trip, managing guests, editing its name, changing its dates or background, duplicating it, merging it into another trip, turning off notifications, and removing it. Duplicating a trip asks what to copy, with every content type preselected by default, then asks for new dates, and warns that cancelling loses the duplicate. Merging into another trip lists the user's other trips to choose from. Changing the background offers a choice of images or colors.

### O21. Forwarding a reservation

Forwarding a flight confirmation to the personal Tripsy address adds the flight to the trip automatically. A forwarded accommodation booking adds the stay with its check-in and check-out times filled in, places the confirmation email among the trip's documents, and counts it into expenses. Forwarded train tickets are added the same way. A stay's check-in time can land in the itinerary before an earlier flight's arrival time, which then needs correcting by hand, and Tripsy uses the booking's stated checkout time as when the traveler leaves the accommodation. Reservation forwarding worked without a Pro trial ever being started, even though Tripsy's own plan comparison lists it under Pro.

### O22. Emails Tripsy can't parse

Settings holds a Forwarded emails list that, when empty, states there is nothing needing action. Tripsy explains that a reservation it can parse becomes a new activity with all available details, while one it can't parse is kept in this list so it can be attached to an activity or trip by hand. A Copy email address button copies the account's personal Tripsy address for forwarding. We did not trigger the unparsed path in this analysis.

### O23. Schedule conflict warning

With a stay's checkout time set for 11:00 and a train booked for 9:30 the same morning, Tripsy displayed a warning on the train entry indicating the schedule was too tight to make, appearing on its own as soon as the conflicting times were both in place.

### O24. Saved addresses

Settings holds a Saved addresses list with At home and At work entries and an option to add further addresses. Tripsy states that saved addresses stay private, are never shared without consent, and are used only to plan trips and routes. The itinerary's leave-for-the-airport row draws on a saved address to make its calculation. We could not tell whether adding a home address recalculates the itinerary's existing timings.

### O25. App preferences

The Customize group in Settings covers currency, distance units in kilometers or miles, language, the trips timeline, and the app icon. The trips timeline offers opening the current trip automatically when the app starts, and hiding past trips. Currency defaults to the user's local currency, with a large number of alternatives available.

---

## Goals and progression

Tripsy tracks progress two ways: a simple completed mark on individual activities, and a cumulative travel record kept across every trip in My Tripsy Book.

### O26. Marking activities complete

Marking an activity as completed puts a green check mark next to it, and trip lists can be sorted by completion or filtered to completed or uncompleted items. The completion state is set by the user rather than evaluated by Tripsy itself.

### O27. Browsing trips by year

The globe screen carries a year selector for viewing trips by year, alongside a search bar for trips, a My Tripsy Book button and a button for starting a new trip. Past trips stay listed unless the Hide past trips setting is turned on.

### O28. My Tripsy Book

The My Tripsy Book button opens an overlay with a world map and travel statistics: trips, countries and territories, stays and nights, then total trips, days traveling, and the proportion of shared, international and domestic trips. Tapping a statistic composes it into a shareable image, and the whole book can be shared as well. Every figure read zero on the account this record was built from.

### O29. Countries visited count

My Tripsy Book reports countries and territories visited against a world total of 250, shown inside a circular progress ring. A Show visited control opens a list of every country in the world marking which ones the user has visited. The count stood at zero with no trip changing it, and what counts as visited is adjustable in the book's own settings.

### O30. Counting settings

My Tripsy Book's settings include Count transit countries, which counts a country as visited even when the only activity there is a flight or train connection, on by default, and Display cities on the map, which shows each visited city instead of one point per country, off by default.

### O31. Tripsy recap button

Scrolling to the bottom of My Tripsy Book brings up a sticky Tripsy recap button. The book held no trips at the point this appeared, and we did not see what the recap contains in this analysis.

---

## Access and eligibility

Every Pro lock in Tripsy sits on top of a fully working free trip, visible but inactive, while an account is required only for the features that leave the device.

### O32. Pro locks on a free trip

On the first trip a user creates, Documents and Expenses show as locked behind Tripsy Pro, and the itinerary's tiles for knowing when to leave, using smart routes, and for the daily forecast, both carry Pro buttons. The basic flight alerts group in notification settings is labelled Pro as well.

### O33. Sample trip vs. free trip

In the sample trip, documents, expenses with category totals, daily weather and the leave-for-the-airport row are all displayed and functional; an added cost updates the expense total directly. On a user's own free trip, the same documents, expenses, forecast and leave-time sections show as Pro locks instead.

### O34. Advanced stats lock

Advanced travel stats for Seasons and for Continents inside My Tripsy Book each show an Unlock Pro button. We did not cover their contents in this analysis.

### O35. Forwarding despite Pro label

Under Integrations, the option to add reservations via email carries a Pro label but opens to its full instructions regardless. Forwarding reservations then worked without a Pro trial ever being started.

### O36. Account required for web links

Choosing to create a web link without an account opens account creation, which explains that data is stored in the cloud for access from other devices and that the account can be deleted from the app at any time. The options are signing in with Apple, signing up with email, or an existing-account route. After signing in with Apple, Tripsy opens an edit-profile screen with photo, name and email, then returns to the trip. Everything before this point, including the sample trip, runs without an account, and the profile, including the password, can later be edited from Settings.

### O37. Locked app icons

The App Icon setting offers a large set of alternative app icons, three available from the start and the rest locked behind the paywall. The option sits in the Customize group alongside currency, units and language, and no icon choice changes how the app works.

---

## Economy and resources

Empty. Tripsy issues no currency, points or resource of its own. The expense figures it tracks are a user's own travel costs, not a quantity the product creates or spends.

---

## Social

Sharing a trip in Tripsy creates named guest roles rather than a single link. Guests are set as view-only or collaborators, with a separate setting controlling whether a shared trip counts as the guest's own.

### O38. Sharing a trip

Sharing a trip opens a sheet showing an image of the trip, its end date and duration, and four routes: inviting new guests, who can view or collaborate; sharing with a friend, who can follow the user's activities; creating a view-only web link; and sharing to social media as a post. Guests are set as view-only or collaborator. Tripsy states that a view-only guest can view trip details but cannot add, edit or remove activities or content, with separate view permissions for documents and expenses, and that a collaborator can additionally be given the right to invite and remove other guests. Guests collaborate for free, and the free plan allows an unlimited number of them.

### O39. Traveling together setting

Guest settings include a Traveling together option. Tripsy states that a guest who is not traveling together sees the trip in a friends list instead of in My Trips, and that the trip does not appear in that guest's own travel log. We did not reach the guest side of this setting in this analysis.

### O40. Managing guests

Manage guests lists everyone traveling, starting with the owner's own profile, and offers a button to invite more guests. An invited guest did not appear in this list immediately after being invited. The trip's invite card describes the owner as the admin of the shared trip.

### O41. Pending invites

Settings holds a Pending invites option where invitations received from other users are shown.

### O42. Guest attribution

Trip lists can be filtered to items added by guests, and sorted or filtered by which guest they're assigned to, with options for everyone or the user alone. Tripsy's 3.9 release notes list clearer guest assignments among their changes.

### O43. Sharing with a friend

Share with a friend is offered as a way for a friend to follow the user's activities. Choosing it opens a sheet with view-only and collaborator choices, with view-only selected first. We did not reach the friend's side of this feature in this analysis.

---

## Reach beyond the app

Tripsy sends a trip outward through view-only web links, social posts, and a personal forwarding address, and connects inward through Claude, Apple Shortcuts and a TripIt importer.

### O44. Creating a web link

Once signed in, creating a web link explains that it invites people to view the trip without needing an account, that any number of links can be made, and that each one can include or leave out the trip's documents. Each link takes a title and a Hide documents switch that is on by default. The opened link shows a web page naming who shared the trip, a button to download the app, and the trip's itinerary and movements. A link made with the Hide documents switch on was nonetheless confirmed inside the app as showing documents as visible.

### O45. Social media share designs

Sharing on social media offers three alternative post designs for the trip, with share targets including Instagram, saving the image, or further options.

### O46. Personal forwarding address

Tripsy gives every account a personal email address and asks the user to forward reservations to it from their own mail app. The route is offered on the My Trips welcome card and automation card, inside a new trip, on the flight search screen, in the forwarded emails list, and under Integrations. The Integrations page lays out the steps, finding the reservation, opening the mail app, forwarding it to the Tripsy address, and receiving a confirmation email with the details, and lets the user register further email addresses to forward from.

### O47. Claude connector

Integrations includes a Claude connector, presenting Tripsy as a custom MCP connector that compatible clients can use to create or manage trips. The steps describe adding a custom connector in Claude Desktop with a copyable Tripsy URL, signing in, and asking Claude about flights, stays, activities, expenses or anything else in the itinerary. Tripsy frames the connector around keeping the user in charge of their own data. We did not complete this connection in this analysis.

### O48. Shortcuts and ChatGPT actions

Integrations lists premade Apple Shortcuts usable with a tap or through Siri, covering saving a URL in Tripsy, getting directions to a place, between two places, or to the hotel, adding photos from a date, and saving the user's location. A separate ChatGPT group of shortcuts covers extracting places from a URL or text, requesting travel recommendations, searching and saving multiple places, creating a trip digest, tracking an expense from a receipt, asking about the itinerary, and finding the season of a trip.

### O49. TripIt importer

A TripIt importer offers to bring in all trips and activities from a connected TripIt account, which can be disconnected at any time. We did not connect a TripIt account in this analysis.

### O50. Exporting data

Storage and Data lists counts of trips, documents, emails and activities and offers an option to export all data. The export produces a zip file of everything, including documents and emails, with a warning that the backup is not encrypted and should be stored carefully. Flight lists separately export as their own CSV file.

### O51. Help and sharing links

Settings links to a help center website, an email contact option, and an About page with the makers' statement, links to several social profiles, terms of service, a privacy policy, and a button to share Tripsy with a friend, which opens the system's own sharing options.

---

## Monetization

Tripsy's Pro offer appears before any trip exists and keeps reappearing everywhere a locked feature sits, backed by a plan catalogue running from a monthly rate to a one-time lifetime purchase.

### O52. Pro trial offer screen

The first-run offer is headed by Tripsy Pro's seven-day free trial, listing what it includes: trip expenses, smart routes, email forwarding, flight updates, trip documents, calendar events and feed, and weather forecasts. A timeline explains that full access unlocks immediately, the trial can be cancelled up to day six, the charge happens on day seven, and cancellation is possible at any time. A reviews section shows a five-star review praising ease of use alongside a count of five-star reviews. The offer's button to start the free trial sits above the stated price of $39.99 a year after the trial, with links to see all plans, what's included, and restoring a purchase.

### O53. Plan catalogue

The full plan list shows an individual section with a monthly option at $7.99 for sporadic trips, a yearly option at $39.99 marked as best value with seven days free and a stated 58% discount, and a lifetime option at $199.99 paid once. A family sharing section splits the purchase across six family members through Apple Family Sharing, with a yearly option at $59.99, also marked best value with seven days free, and a lifetime option at $299.99. The seven-day trial is shown only on the yearly plans.

### O54. Free vs. Pro comparison

The comparison of Free and Pro lists unlimited trips, cloud sync, unlimited guests and flight search on the free side, and expense management, smart routes, reservation forwarding, advanced travel stats, flight update alerts, adding and managing documents, calendar feed and calendar events, and 10-day weather forecasts on the Pro side. TripIt integration, time zone changes and data export also appear on the free side of the comparison.

### O55. Pro cards across the app

Tripsy places a Pro card on My Trips promoting flight update alerts, expense management, and reservation forwarding among other features. Further Pro cards sit inside a trip and at the top of Settings, offering unlimited image, note, video and PDF storage with seven days free, and a Pro section appears inside activity details as well.

### O56. Pop-up after trip creation

The moment a user's first own trip is created, a Tripsy Pro pop-up describing the benefits of Pro appears before the trip itself is shown. Declining the pop-up leads straight into the new trip.

### O57. Problem-framed Pro tiles

Locked itinerary tiles on a free trip name the question each Pro feature answers, framing smart routes as knowing when to leave and the weather forecast as knowing when to bring an umbrella.

### O58. Release notes to Pro page

Opening app updates shows the Tripsy 3.9 release notes, describing smart routes that consider the schedule and real travel times, route previews with estimated time and distance, multi-stop routes that set each stop's time, saved addresses for knowing when to leave for the airport, clearer guest assignments, improved location search, and general reliability improvements. The notes end with a button to see what's included in Tripsy Pro, which opens a page stating Tripsy was an App of the Year finalist in 2024, citing over 14,000 reviews at 4.7 stars and over a million downloads, followed by a feature slider and the Pro offer.

### O59. Membership screen

The membership screen offers a button to buy Tripsy Pro and describes the family plan as sharing up to six memberships for less than the price of two.

---

## Return triggers

Tripsy asks for notification permission right after account creation, then organizes what it sends into four alert categories alongside trip countdowns, home and lock screen widgets, and a review prompt.

### O60. Notification permission request

Immediately after signing in with Apple, Tripsy asks for permission to send notifications. The request came during web link creation rather than at launch.

### O61. Notification categories

Notification settings group alerts into general trip alerts (one month before a trip starts, seven days before, and the day it starts), flight alerts labelled Pro (gate changes, time changes, baggage claim assignment and cancellation), departure and arrival alerts, and collaboration alerts for when a collaborator adds a new activity to a trip. General trip alerts, flight alerts, and departure and arrival alerts are on by default. The flight alerts setting shows a sample of what an alert looks like.

### O62. Per-trip notification switch

Turning off notifications in the trip menu confirms that preferences were updated, and the same menu item then reads as turning notifications back on.

### O63. Trip countdowns

Trip cards and trip headers state time remaining, counting down to a trip's end, and a new trip states when it starts and how long it will last.

### O64. Home and lock screen widgets

A widgets page previews home screen widgets that track trip progress with a day counter, preview the upcoming itinerary, or create shortcuts to a to-do list, and lock screen widgets that show the next flight or upcoming activities. The widgets shown here were previewed in the app rather than added to a device in this analysis.

### O65. Review the app link

Settings includes a Review the app option, which opens the App Store to review Tripsy. It sits as a row in Settings rather than as an unprompted request.
