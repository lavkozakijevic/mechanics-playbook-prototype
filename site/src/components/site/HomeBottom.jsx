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
          <span className="sec-head__aside">Each mechanic comes with the psychology behind it, the players it fits, and what your app needs in place to use it well.</span>
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

/** Value proposition 2 — a custom category report with recommendations for the
 *  visitor's own app. */
function CategoryReport() {
  return (
    <section className="band" id="reports" aria-labelledby="report-h">
      <div className="container">
        <div className="showcase">
          <div className="showcase__body">
            <div className="eyebrow">Custom report</div>
            <h2 id="report-h">Get a report built for your category</h2>
            <p>Tell us your app and your industry. We'll show you which mechanics your category already relies on, which ones are still open, and the few worth trying first, each with a recommendation for your product.</p>
            <Button variant="primary" size="lg" as="a" href="/work-with-us/" trailingIcon={<i data-lucide="arrow-right" />}>Get your category report</Button>
          </div>
          <div className="showcase__map">
            <div className="report">
              <div className="report__head">
                <span className="report__kicker">Category report</span>
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
          </div>
        </div>
      </div>
    </section>
  );
}

/** New this week: the latest case study entries, dated. Proves the cadence. */
function NewThisWeek({ items }) {
  return (
    <section className="band" aria-labelledby="new-h">
      <div className="container">
        <div className="sec-head">
          <h2 className="sec-head__t" id="new-h">Latest entries</h2>
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

/** Work with us bridge: short, what the engagement is, one action, with the
 *  three steps numbered on the right. */
function WorkWithUsBridge() {
  return (
    <section className="band band--ink" id="work" aria-labelledby="work-h" style={{ borderTop: "none" }}>
      <div className="container">
        <div className="workbridge">
          <div>
            <div className="eyebrow">Work with us</div>
            <h2 id="work-h">A practice you can hire, not just a library you can read</h2>
            <p>We start from the features you already have, then find the mechanics that fit your app and your users.</p>
            <Button variant="accent" size="lg" as="a" href="https://calendar.app.google/EvXYKKXGxJvKbxns5" target="_blank" rel="noopener noreferrer" trailingIcon={<i data-lucide="arrow-up-right" />}>Book a discovery call</Button>
          </div>
          <ol className="worklist" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {ENGAGEMENT.map((t, i) => (
              <li className="worklist__item" key={t.h}>
                <span className="worklist__num" aria-hidden="true">{i + 1}</span>
                <span className="worklist__text"><b>{t.h}</b><span>{t.p}</span></span>
              </li>
            ))}
          </ol>
        </div>
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
      <CategoryReport />
      {newThisWeek?.length > 0 && <NewThisWeek items={newThisWeek} />}
      <WorkWithUsBridge />
    </>
  );
}
