# Screenshots

This folder holds all app screenshots used in the Mechanics Playbook library.

## Folder structure

```
screenshots/
  [mechanic-id]/
    [app-id]/
      01.jpg
      02.jpg
      ...
```

One folder per mechanic per app. Up to five screenshots per folder. The site picks them up automatically when the SCREENSHOTS object in data.js is updated.

## Naming convention

Files must be named `01.jpg` through `05.jpg`. JPEG is preferred. PNG works too — just keep the extension consistent with what you register in data.js.

## Image dimensions

All screenshots should be 585x1266px or as close to that ratio (9:20) as possible. The site displays them at this ratio regardless, so images that deviate will be cropped or letterboxed. Mobile screenshots from a current iPhone are 1170x2532px — export at half size (585x1266) before adding.

## Registering screenshots in data.js

Once images are in place, add or update the SCREENSHOTS object in data.js. The key is `mechanic-id_app-id`:

```javascript
const SCREENSHOTS = {
  "streak_strava": [
    "screenshots/streak/strava/01.jpg",
    "screenshots/streak/strava/02.jpg"
  ],
  "energy-lives_royal-match": [
    "screenshots/energy-lives/royal-match/01.jpg"
  ],
};
```

The mechanic page and case study page both check this object. If the key exists, it shows your images. If it does not exist, it shows five placeholders. You can add one app at a time — everything else keeps showing placeholders.

## Full folder list

102 folders across 19 apps and their documented mechanics.

---

### achievements
```
achievements/canva/
achievements/capybara-go/
achievements/fifa-panini-collection/
achievements/fortune-city/
achievements/insight-timer/
achievements/match-creek-motors/
achievements/steam/
achievements/strava/
achievements/subway-surfers/
achievements/swgoh/
achievements/tiimo/
achievements/uptime/
achievements/wispr-flow/
```

### ads
```
ads/capybara-go/
ads/fc-mobile/
ads/fortune-city/
ads/subway-surfers/
```

### challenges
```
challenges/canva/
challenges/fifa-panini-collection/
challenges/insight-timer/
challenges/picsart/
challenges/strava/
```

### clans-guilds
```
clans-guilds/capybara-go/
clans-guilds/fc-mobile/
clans-guilds/fifa-panini-collection/
clans-guilds/fortune-city/
clans-guilds/swgoh/
```

### community-groups
```
community-groups/insight-timer/
community-groups/strava/
```

### cosmetics
```
cosmetics/capybara-go/
cosmetics/steam/
cosmetics/subway-surfers/
```

### credits-tokens
```
credits-tokens/canva/
credits-tokens/picsart/
credits-tokens/steam/
```

### daily-login-reward
```
daily-login-reward/calm/
daily-login-reward/capybara-go/
daily-login-reward/fc-mobile/
daily-login-reward/fifa-panini-collection/
daily-login-reward/fortune-city/
daily-login-reward/solitaire-grand-harvest/
daily-login-reward/subway-surfers/
daily-login-reward/swgoh/
```

### daily-weekly-quests
```
daily-weekly-quests/capybara-go/
daily-weekly-quests/fc-mobile/
daily-weekly-quests/fortune-city/
daily-weekly-quests/swgoh/
```

### energy-lives
```
energy-lives/capybara-go/
energy-lives/chrome-valley-customs/
energy-lives/match-creek-motors/
energy-lives/royal-match/
energy-lives/solitaire-grand-harvest/
energy-lives/swgoh/
```

### first-purchase-bonus
```
first-purchase-bonus/capybara-go/
first-purchase-bonus/fc-mobile/
```

### gifting
```
gifting/calm/
gifting/royal-match/
gifting/uptime/
```

### leaderboards
```
leaderboards/capybara-go/
leaderboards/fc-mobile/
leaderboards/match-creek-motors/
leaderboards/strava/
leaderboards/swgoh/
```

### limited-time-events
```
limited-time-events/chrome-valley-customs/
limited-time-events/fc-mobile/
limited-time-events/royal-match/
limited-time-events/solitaire-grand-harvest/
limited-time-events/swgoh/
```

### monthly-card
```
monthly-card/fc-mobile/
```

### piggy-bank
```
piggy-bank/solitaire-grand-harvest/
```

### season-pass
```
season-pass/capybara-go/
season-pass/fc-mobile/
season-pass/royal-match/
season-pass/swgoh/
```

### set-collection
```
set-collection/fifa-panini-collection/
set-collection/fortune-city/
set-collection/royal-match/
set-collection/solitaire-grand-harvest/
set-collection/subway-surfers/
set-collection/swgoh/
```

### social-feed
```
social-feed/insight-timer/
social-feed/picsart/
social-feed/strava/
```

### streak
```
streak/calm/
streak/insight-timer/
streak/strava/
streak/tiimo/
streak/uptime/
streak/wispr-flow/
```

### variable-reward
```
variable-reward/capybara-go/
variable-reward/chrome-valley-customs/
variable-reward/fc-mobile/
variable-reward/fortune-city/
variable-reward/match-creek-motors/
variable-reward/royal-match/
variable-reward/solitaire-grand-harvest/
variable-reward/subway-surfers/
variable-reward/swgoh/
```

### xp-leveling
```
xp-leveling/capybara-go/
xp-leveling/fc-mobile/
xp-leveling/fortune-city/
```
