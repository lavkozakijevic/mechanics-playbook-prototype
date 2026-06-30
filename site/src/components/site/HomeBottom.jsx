/* Website kit — bottom homepage sections. */
import React from "react";
import { Button } from "../ds/Button.jsx";
import { Badge } from "../ds/Badge.jsx";
import { MechanicCard } from "../ds/MechanicCard.jsx";
import { SystemMap } from "./SystemDetail.jsx";

/** Value proposition 1 — the mechanics library: featured mechanics with real
 *  titles, working as a teaser for the full index. */
function LibraryPreview({ featured }) {
  return (
    <section className="band band--sheet" id="mechanics" aria-labelledby="lib-h">
      <div className="container">
        <div className="sec-head">
          <h2 className="sec-head__t" id="lib-h">Start with the mechanics</h2>
          <span className="sec-head__aside">Each mechanic comes with the psychology behind it, the users it fits, and what your app needs in place to use it well.</span>
        </div>
        <div className="cardgrid">
          {featured.map((m) => (
            <MechanicCard key={m.name} {...m} />
          ))}
        </div>
        <div style={{ marginTop: 28 }}>
          <Button variant="secondary" size="lg" as="a" href="/mechanics/" trailingIcon={<i data-lucide="arrow-right" />}>Browse all mechanics</Button>
        </div>
      </div>
    </section>
  );
}

/** System map showcase — the rotating free app's loop, drawn in the house
 *  language. The app is free while it holds the slot, so this never links
 *  into the paywall. */
function SystemShowcase({ showcase }) {
  const byId = Object.fromEntries(showcase.nodes.map((n) => [n.id, n]));
  return (
    <section className="band band--sunken" id="systems" aria-labelledby="showcase-h">
      <div className="container">
        <div className="showcase">
          <div className="showcase__body">
            <div className="eyebrow">This week's system map</div>
            <h2 id="showcase-h">How the {showcase.name} system holds together</h2>
            <div className="spotlight__meta">
              <Badge tone="accent" variant="solid">Free</Badge>
              <span style={{ font: "var(--type-data)", fontSize: 12, color: "var(--text-muted)" }}>{showcase.name}</span>
            </div>
            <p>{showcase.tagline}</p>
            <Button variant="primary" size="lg" as="a" href={showcase.href} trailingIcon={<i data-lucide="arrow-up-right" />}>Explore the {showcase.name} map</Button>
          </div>
          <div className="showcase__map">
            <div className="smap-stage">
              <SystemMap nodes={showcase.nodes} connections={showcase.connections} byId={byId} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const REPORT_ROWS = [
  { name: "Daily streaks", state: "common", label: "Common" },
  { name: "Milestone rewards", state: "common", label: "Common" },
  { name: "Social challenges", state: "untapped", label: "Untapped" },
  { name: "Loss-framed nudges", state: "recommend", label: "Try first" },
  { name: "Team leaderboards", state: "recommend", label: "Try first" },
];

/** Work with us — maps the engagement to our consulting offer. */
function WorkWithUsSection() {
  return (
    <section className="band" id="reports" aria-labelledby="report-h">
      <div className="container">
        <div className="showcase">
          <div className="showcase__body">
            <div className="eyebrow">Work with us</div>
            <h2 id="report-h">We find the mechanics that fit your app</h2>
            <p>We study the features you already ship, your users, and your category, then map where engagement is leaking and which mechanics would take root in your product. You walk away with three things: a map of what your app is already doing, a comparison of what your category relies on and leaves untapped, and a prioritized roadmap of the mechanics worth building, in order, each with what it asks of your product and why it earns its place.</p>
            <Button variant="primary" size="lg" as="a" href="https://calendar.app.google/EvXYKKXGxJvKbxns5" trailingIcon={<i data-lucide="arrow-up-right" />}>Book a discovery call</Button>
          </div>
          <div className="showcase__map">
            <div className="report">
              <div className="report__head">
                <span className="report__kicker">Category comparison</span>
                <span className="report__app">Fitness · your app</span>
              </div>
              <ul className="report__rows">
                {REPORT_ROWS.map((r) => (
                  <li className="report__row" key={r.name}>
                    <span className="report__name">{r.name}</span>
                    <span className={`report__pill report__pill--${r.state}`}>{r.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="report__caption">A category comparison, simplified.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** New this week: the latest case study entries, dated. Proves the cadence. */
function NewThisWeek({ items }) {
  const since = items[0]?.date;
  return (
    <section className="band" aria-labelledby="new-h">
      <div className="container">
        <div className="sec-head">
          <h2 className="sec-head__t" id="new-h">Latest entries</h2>
          {since && <span className="sec-head__since">as of {since}</span>}
        </div>
        <div className="feed">
          {items.map((it) => (
            <a className="feed__row" href={it.href} key={it.title}>
              <span className="feed__main">
                <span className="feed__title">{it.title}</span>
              </span>
              <span className="feed__date">{it.date}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const ENGAGEMENT = [
  { h: "Discovery", p: "We learn your product, your users, and your goals." },
  { h: "Analysis", p: "We review your app and your category to find the best openings." },
  { h: "Gamification recommendations for your app", p: "An evidence-backed roadmap your team can ship." },
];

/** How we work: presented like the finance landing's "how we work" section —
 *  kicker, heading, and the numbered steps in catland-steps layout. */
function WorkWithUsBridge() {
  return (
    <section className="band" id="work" aria-labelledby="work-h">
      <div className="container">
        <div className="mech-section__kicker">How we work</div>
        <h2 className="mech-section__title" id="work-h">A practice you can hire, not just a library you can read</h2>
        <ol className="catland-steps">
          {ENGAGEMENT.map((t, i) => (
            <li className="catland-step" key={t.h}>
              <span className="catland-step__n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="catland-step__title">{t.h}</h3>
                <p className="catland-step__body">{t.p}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Bottom homepage sections, in page order. */
export function HomeBottom({ featured, newThisWeek, showcase }) {
  return (
    <>
      {featured?.length > 0 && <LibraryPreview featured={featured} />}
      {showcase && <SystemShowcase showcase={showcase} />}
      <WorkWithUsSection />
      {newThisWeek?.length > 0 && <NewThisWeek items={newThisWeek} />}
      <WorkWithUsBridge />
    </>
  );
}
