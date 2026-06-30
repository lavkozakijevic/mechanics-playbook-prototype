/* Website kit — Work with us (the consulting engagement). One job: book a
   discovery call. Hero states the visitor's problem in their words; the approach
   explains the differentiator (start from what the app already has) as three
   steps; deliverables are concrete artifacts; a short "who this is for"; and a
   calm closing call to action. No pricing, testimonials, urgency, or game
   iconography. Converted from the design bundle. */
import React from "react";
import { Button } from "../ds/Button.jsx";

const DownIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="12" y1="5" x2="12" y2="19" /><polyline points="6 13 12 19 18 13" />
  </svg>
);
const CheckIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const STEPS = [
  { h: "Discovery", p: "We start with your goals and pain points: where users stall, what should happen instead." },
  { h: "Analysis", p: "We map your app's features against our mechanic framework and study what your category uses, misses, and where the openings are." },
  { h: "Build together", p: "Working sessions with your product team, ending in an evidence-backed roadmap: which mechanics, why, what they require, in what order." },
];

const DELIVERABLES = [
  { h: "The feature and mechanic map of your app", p: "Every feature you already ship, mapped against the mechanic framework, so you can see what your product is quietly already doing." },
  { h: "The category comparison", p: "What apps in your category rely on, what they leave untouched, and the specific openings that comparison reveals for you." },
  { h: "The prioritized roadmap", p: "The mechanics worth building, in order, each with what it requires of your product and why it earns its place." },
];

/** Work with us page body. */
export function WorkWithUsPage() {
  return (
    <main id="main">
      {/* 1. Hero — the visitor's problem, in their words */}
      <section className="ww-hero" aria-labelledby="ww-h">
        <div className="container">
          <div className="ww-hero__in">
            <div className="eyebrow">Work with us</div>
            <h1 id="ww-h">Your users sign up.<br />Then they drift away.</h1>
            <p className="ww-hero__sub">
              We help product teams turn engagement into retention and conversion, using mechanics proven
              across hundreds of the world's best apps and games.
            </p>
            <div className="ww-hero__cta">
              <Button variant="primary" size="lg" as="a" href="https://calendar.app.google/EvXYKKXGxJvKbxns5" target="_blank" rel="noopener noreferrer">Book a discovery call</Button>
              <Button variant="secondary" size="lg" as="a" href="#approach" trailingIcon={DownIcon}>See how we work</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The approach — the differentiator, then three steps */}
      <section className="band band--sheet" id="approach" aria-labelledby="appr-h">
        <div className="container">
          <div className="ww-approach">
            <div className="ww-approach__lede">
              <div className="mech-section__kicker">The approach</div>
              <h2 className="mech-section__title" id="appr-h">We start from what your app already has</h2>
              <p className="ww-lede">
                We don't arrive with a list of features to bolt on. We study the features you already have,
                your users, and your category, then find the mechanics that will take root in your product.
                A mechanic that works brilliantly in one app fails in another; the difference is what's
                underneath it.
              </p>
            </div>
            <ol className="ww-steps">
              {STEPS.map((s, i) => (
                <li className="ww-step" key={s.h}>
                  <span className="ww-step__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <div className="ww-step__text">
                    <h3>{s.h}</h3>
                    <p>{s.p}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 3. What you walk away with — concrete artifacts */}
      <section className="band" aria-labelledby="deliv-h">
        <div className="container">
          <div className="mech-section__kicker">What you walk away with</div>
          <h2 className="mech-section__title" id="deliv-h">Artifacts, not promises</h2>
          <div className="ww-deliv">
            {DELIVERABLES.map((d) => (
              <div className="ww-deliv__item" key={d.h}>
                <span className="ww-deliv__check" aria-hidden="true">{CheckIcon}</span>
                <div>
                  <h3>{d.h}</h3>
                  <p>{d.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Who this is for */}
      <section className="band" aria-labelledby="who-h">
        <div className="container">
          <div className="ww-who">
            <div className="mech-section__kicker">Who this is for</div>
            <h2 className="mech-section__title" id="who-h">Product teams in any category</h2>
            <p className="ww-who__p">
              Finance, education, health, culture — anywhere engagement matters. You don't need to know
              anything about game mechanics, or even use the word. Understanding which ones fit your product
              is exactly what we're for.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Final call to action — calm, no urgency */}
      <section className="band band--ink ww-final" id="discovery" aria-labelledby="final-h">
        <div className="container">
          <div className="ww-final__in">
            <h2 id="final-h">Book a discovery call</h2>
            <p>A conversation about your goals and your app. No preparation needed.</p>
            <Button variant="accent" size="lg" as="a" href="https://calendar.app.google/EvXYKKXGxJvKbxns5" target="_blank" rel="noopener noreferrer">Book a discovery call</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
