/* Website kit — Subscribe page (single-offer pricing). Integrated as-is from the
   finished design export. Only the page CONTENT is taken from that export; its
   bundled nav and footer are intentionally dropped so the page renders inside
   the site's real Base layout (current SiteNav + footer). */
import React from "react";
import { Button } from "../ds/Button.jsx";

// Placeholder destination for the Subscribe CTAs until checkout exists.
const SUBSCRIBE_HREF = "#subscribe";

const CheckIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const UNLOCKS = [
  "Unlock all of the content.",
  "An in-depth gamification case study every week, 52 a year.",
  "Access to all examples of mechanic application.",
  "Access to all gamification systems across dozens of best-in-class apps.",
];

const VALUE = [
  {
    kicker: "Mechanics",
    title: "Every mechanic, broken down",
    body: "Each game mechanic in the library is explained on its own: what it is, when it works, what it needs to run, and how real apps have used it. You get a reference your product team can pull from when deciding what to build, instead of guessing from memory of games you have played.",
    band: "band--sheet",
  },
  {
    kicker: "Systems",
    title: "See how mechanics fit together",
    body: "Mechanics rarely work alone. The library maps how they connect inside real apps, so you can see the full system a feature sits in, not just the feature on its own, and copy the structure rather than the surface.",
    band: "",
  },
  {
    kicker: "Case studies",
    title: "A new teardown every week",
    body: "Each week we publish a close analysis of how a best-in-class app uses a mechanic, with the screens and the reasoning. Over a year that is fifty-two worked examples, building into a record of what actually ships and what actually works.",
    band: "band--sheet",
  },
];

/** Subscribe page body. */
export function SubscribePage() {
  return (
    <main id="main">

      {/* 1. The offer */}
      <section className="band sp-offer" aria-labelledby="offer-h">
        <div className="container container--narrow">
          <div className="eyebrow">Subscribe</div>
          <h1 className="sp-offer__h" id="offer-h">Get weekly gamification case studies and examples</h1>

          <div className="sp-card">
            <div className="sp-price">
              <span className="sp-price__amt">€25<span className="sp-price__per">/m</span></span>
              <span className="sp-price__cycle">billed quarterly</span>
            </div>
            <div className="sp-card__rule" aria-hidden="true" />
            <ul className="sp-list">
              {UNLOCKS.map((u) => (
                <li key={u}><span className="sp-list__check" aria-hidden="true">{CheckIcon}</span>{u}</li>
              ))}
            </ul>
            <Button variant="accent" size="lg" as="a" href={SUBSCRIBE_HREF}>Subscribe</Button>
          </div>
        </div>
      </section>

      {/* 2. Value props */}
      {VALUE.map((v) => (
        <section className={"band sp-vp " + v.band} key={v.kicker} aria-labelledby={"vp-" + v.kicker}>
          <div className="container container--narrow">
            <div className="mech-section__kicker">{v.kicker}</div>
            <h2 className="mech-section__title" id={"vp-" + v.kicker}>{v.title}</h2>
            <div className="sp-vp__body">
              <p>{v.body}</p>
            </div>
          </div>
        </section>
      ))}

      {/* 3. Closing call */}
      <section className="band band--ink sp-close" aria-labelledby="close-h">
        <div className="container container--narrow">
          <h2 className="sp-close__h" id="close-h">Power up your app with proven game mechanics</h2>
          <Button variant="accent" size="lg" as="a" href={SUBSCRIBE_HREF}>Subscribe</Button>
        </div>
      </section>

    </main>
  );
}
