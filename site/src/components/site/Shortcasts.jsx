/* Website kit — Shortcasts index. Short audio analyses of single apps, each in
   its own card: metadata, summary, and either an inline player (free episodes)
   or a subscribe prompt (subscriber episodes). */
import React from "react";
import { Tag } from "../ds/Tag.jsx";
import { Badge } from "../ds/Badge.jsx";
import { AudioPlayer } from "./AudioPlayer.jsx";

const LockIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);
function ShortcastCard({ s }) {
  return (
    <article className={"scast" + (s.locked ? " scast--locked" : "")}>
      <div className="scast__top">
        <div className="scast__tags">
          {s.category && <Tag category="neutral" variant="outline">{s.category}</Tag>}
          {s.app && <span className="scast__app">{s.app}</span>}
        </div>
        <span className="scast__badge">
          {s.locked
            ? <Badge tone="neutral" variant="outline" icon={LockIcon}>For subscribers</Badge>
            : <Badge tone="ok" variant="soft">Free</Badge>}
        </span>
      </div>

      <h2 className="scast__title">{s.title}</h2>
      <p className="scast__summary">{s.summary}</p>

      {s.locked ? (
        <a className="scast__gate" href="/subscribe/">
          <span className="scast__gate-ico" aria-hidden="true">{LockIcon}</span>
          <span className="scast__gate-txt">Subscribe to listen</span>
        </a>
      ) : (
        <AudioPlayer src={s.audioSrc} title={s.title} />
      )}

      {s.date && (
        <div className="scast__foot">
          <span className="scast__date">{s.date}</span>
        </div>
      )}
    </article>
  );
}

export function ShortcastsPage({ shortcasts }) {
  const free = shortcasts.filter((s) => !s.locked).length;
  return (
    <main id="main">
      <section className="cs-head" aria-labelledby="scast-h">
        <div className="container">
          <nav className="crumb" aria-label="Breadcrumb">
            <a href="/mechanics/">Library</a>
            <span className="crumb__sep" aria-hidden="true">/</span>
            <span>Shortcasts</span>
          </nav>
          <div className="eyebrow cs-head__eyebrow">The library</div>
          <h1 id="scast-h">Shortcasts</h1>
          <p className="cs-head__def">
            Short audio breakdowns — up to ten minutes each — of how one app uses game mechanics to
            keep people coming back. The same analysis as a case study, for your commute.
          </p>
        </div>
      </section>

      <div className="container cs-wrap">
        {shortcasts.length > 0 ? (
          <>
            <div className="cs-bar">
              <span className="cs-bar__count"><b>{shortcasts.length}</b> {shortcasts.length === 1 ? "episode" : "episodes"}</span>
              <span className="cs-bar__hint">{free} free to listen · updated weekly</span>
            </div>
            <div className="scast-list">
              {shortcasts.map((s) => <ShortcastCard key={s.id} s={s} />)}
            </div>
          </>
        ) : (
          <p className="cs-head__def">The first shortcasts are on the way — check back soon.</p>
        )}
      </div>
    </main>
  );
}
