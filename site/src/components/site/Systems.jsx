/* Website kit — Systems index. A grid of the apps whose mechanic loops we have
   mapped, with the app name, a one-line description of what the system achieves,
   and the mechanics the loop runs. */
import React from "react";
import { Tag } from "../ds/Tag.jsx";
import { Badge } from "../ds/Badge.jsx";

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

function SystemCard({ sys }) {
  const mechanics = (Array.isArray(sys.nodes) ? sys.nodes : Object.values(sys.nodes || {})).map((n) => n.label);
  return (
    <a className={"csc" + (sys.locked ? " csc--locked" : "")} href={sys.href || "/subscribe/"}>
      <div className="csc__top">
        <Tag category="neutral" variant="outline">{sys.type}</Tag>
        <span className="csc__badge">
          {sys.locked
            ? <Badge tone="neutral" variant="outline" icon={LockIcon}>For subscribers</Badge>
            : <Badge tone="ok" variant="soft">Free</Badge>}
        </span>
      </div>

      <h3 className="csc__name">{sys.name}</h3>
      <p className="csc__desc">{sys.oneLiner}</p>

      <div className="csc__tags">
        {mechanics.map((m) => <span className="pillchip" key={m}>{m}</span>)}
      </div>

      <div className="csc__foot">
        <span className="csc__count"><b>{mechanics.length}</b> mechanics linked</span>
        <span className="csc__go">{sys.locked ? "Subscribe to explore" : "Explore the map"} {ArrowIcon}</span>
      </div>
    </a>
  );
}

/** Systems index: the signature asset, every app's loop drawn in the house language. */
export function SystemsPage({ systems }) {
  return (
    <main id="main">
      <section className="cs-head" aria-labelledby="sys-h">
        <div className="container">
          <nav className="crumb" aria-label="Breadcrumb">
            <a href="/mechanics/">Library</a>
            <span className="crumb__sep" aria-hidden="true">/</span>
            <span>Systems</span>
          </nav>
          <div className="eyebrow cs-head__eyebrow">The library</div>
          <h1 id="sys-h">Systems</h1>
          <p className="cs-head__def">
            A system is the <b>loop</b>, not the parts. A system map shows how one app's mechanics
            connect and feed each other: the streak that protects a reward, the reward that pulls the
            next session. Each map is drawn in our house language, nodes for mechanics and red lines
            for the connections that carry the most weight.
          </p>
        </div>
      </section>

      <div className="container cs-wrap">
        <div className="cs-bar">
          <span className="cs-bar__count"><b>{systems.length}</b> system maps</span>
          <span className="cs-bar__hint">Updated weekly</span>
        </div>

        <div className="csgrid">
          {systems.map((s) => <SystemCard key={s.id || s.name} sys={s} />)}
        </div>
      </div>
    </main>
  );
}
