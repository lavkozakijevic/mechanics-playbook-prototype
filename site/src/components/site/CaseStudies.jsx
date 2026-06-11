/* Website kit — Case studies (apps index). Title block defining a "system",
   then a 3-up grid of system cards, one per analyzed app/game. */
import React from "react";
import { Tag } from "../ds/Tag.jsx";
import { Badge } from "../ds/Badge.jsx";

/* Lucide-style inline glyphs (created inline so they render before the CDN
   pass and never turn red). */
const LockIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);
const ArrowIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
  </svg>
);

function SystemCard({ s }) {
  return (
    <a className={"csc" + (s.locked ? " csc--locked" : "")} href={s.href || "/subscribe/"}>
      <div className="csc__top">
        <Tag category="neutral" variant="outline">{s.category}</Tag>
        <span className="csc__badge">
          {s.locked
            ? <Badge tone="neutral" variant="outline" icon={LockIcon}>For subscribers</Badge>
            : s.free
              ? <Badge tone="ok" variant="soft">Free</Badge>
              : null}
        </span>
      </div>

      <h3 className="csc__name">{s.name}</h3>

      <p className="csc__desc">{s.desc}</p>

      {s.tags?.length > 0 && (
        <div className="csc__tags">
          {s.tags.map((t) => <span className="pillchip" key={t}>{t}</span>)}
        </div>
      )}

      <div className="csc__foot">
        <span className="csc__count"><b>{s.mechanicCount}</b> mechanics mapped</span>
        <span className="csc__go">{s.locked ? "Subscribe to read" : "View case study"} {ArrowIcon}</span>
      </div>
    </a>
  );
}

/** Case studies: the apps index, each app studied as a system. */
export function CaseStudiesPage({ apps, intro }) {
  const free = apps.filter((s) => !s.locked).length;
  return (
    <main id="main">
      <section className="cs-head" aria-labelledby="cs-h">
        <div className="container">
          <nav className="crumb" aria-label="Breadcrumb">
            <a href="/mechanics/">Library</a>
            <span className="crumb__sep" aria-hidden="true">/</span>
            <span>Case studies</span>
          </nav>
          <div className="eyebrow cs-head__eyebrow">The library</div>
          <h1 id="cs-h">Case studies</h1>
          {intro && (
            <p className="cs-head__def">{intro}</p>
          )}
        </div>
      </section>

      <div className="container cs-wrap">
        <div className="cs-bar">
          <span className="cs-bar__count"><b>{apps.length}</b> systems in the library</span>
          <span className="cs-bar__hint">{free} free to read · updated weekly</span>
        </div>

        <div className="csgrid">
          {apps.map((s) => <SystemCard key={s.id} s={s} />)}
        </div>
      </div>
    </main>
  );
}
