/* Website kit — Case study detail (full breakdown). A long-form, single-app
   breakdown: header, mechanics-observed chips, the core loop, a section per
   mechanic (observed / presented / worth noting / key findings / screenshots),
   how the mechanics connect, the key insight, numbered takeaways, and a sticky
   table-of-contents sidebar with scroll-spy. */
import React, { useState, useEffect, useMemo } from "react";
import { Tag } from "../ds/Tag.jsx";
import { SubscribeCard, WaitlistModal } from "./Subscribe.jsx";

const CAT_COLOR = { retention: "var(--cat-retention)", monetization: "var(--cat-monetization)", social: "var(--cat-social)" };
const CAT_LABEL = { retention: "Retention", monetization: "Monetization", social: "Social" };

const ArrowIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
  </svg>
);
const LinkIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" /><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" />
  </svg>
);
const PairIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" /><polyline points="11 6 5 12 11 18" />
  </svg>
);

/* A mechanic gets its own full section only when a writeup exists for it. */
const hasWriteup = (m) => !!(m.observed || m.presented || m.noting || (m.findings && m.findings.length));

function Shot({ shot }) {
  if (shot.image) {
    return (
      <figure className="shot shot--real">
        <img src={shot.image} alt={shot.label || ""} className="shot__img" />
        {shot.label && <figcaption className="shot__cap">{shot.label}</figcaption>}
      </figure>
    );
  }
  return (
    <figure className="shot">
      <div className="shot__frame"><span className="shot__ph">screenshot</span></div>
      {shot.label && <figcaption className="shot__cap">{shot.label}</figcaption>}
    </figure>
  );
}

function Toc({ toc, active }) {
  return (
    <aside className="cs-toc" aria-label="On this page">
      <a className="cs-toc__back" href="/case-studies/">{"←"} All case studies</a>
      <div className="cs-toc__label">On this page</div>
      <nav className="cs-toc__nav">
        {toc.map((t) => (
          <a
            key={t.id}
            href={`#${t.id}`}
            className={"cs-toc__link" + (t.sub ? " cs-toc__link--sub" : "") + (active === t.id ? " is-active" : "")}
          >
            {t.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}

function MechanicSection({ m }) {
  return (
    <section className="cs-msec" id={`m-${m.id}`} aria-labelledby={`m-${m.id}-h`}>
      <div className="cs-msec__head">
        <div className="cs-msec__meta">
          <Tag category={m.cat} dot>{CAT_LABEL[m.cat]}</Tag>
          <h2 className="cs-msec__name" id={`m-${m.id}-h`}>{m.name}</h2>
        </div>
        <a className="cs-msec__link" href={m.href}>Full mechanic page {ArrowIcon}</a>
      </div>

      <div className="cs-msec__body">
        {m.observed && (
          <div className="cs-sub">
            <h3 className="cs-sub__h">What was observed</h3>
            <p>{m.observed}</p>
          </div>
        )}
        {m.presented && (
          <div className="cs-sub">
            <h3 className="cs-sub__h">How it is presented</h3>
            <p>{m.presented}</p>
          </div>
        )}
        {m.noting && (
          <div className="cs-sub">
            <h3 className="cs-sub__h">What is worth noting</h3>
            <p>{m.noting}</p>
          </div>
        )}
        {m.findings?.length > 0 && (
          <div className="cs-sub">
            <h3 className="cs-sub__h">Key findings</h3>
            <ul className="cs-findings">
              {m.findings.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
        )}
      </div>

      {m.shots?.length > 0 && (
        <div className={`shotgallery${m.shots.some((s) => s.image) ? " shotgallery--real" : ""}`}>
          {m.shots.map((s, i) => <Shot key={i} shot={s} />)}
        </div>
      )}
    </section>
  );
}

/** Locked case study: keep the title and opening introduction, then present
 *  the subscribe offer in place of the full breakdown. */
function LockedCaseStudy({ app }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <main id="main">
      {modalOpen && <WaitlistModal onClose={() => setModalOpen(false)} />}
      <div className="container container--narrow">
        <header className="cs-hd" id="overview">
          <nav className="crumb" aria-label="Breadcrumb">
            <a href="/case-studies/">Case studies</a>
            <span className="crumb__sep" aria-hidden="true">/</span>
            <span>{app.name}</span>
            <span className="crumb__sep" aria-hidden="true">/</span>
            <span>Full breakdown</span>
          </nav>
          <div className="cs-hd__row">
            {app.iconSrc ? (
              <div className="cs-hd__icon" aria-hidden="true">
                <img src={app.iconSrc} alt="" style={{ width: "100%", height: "100%" }} />
              </div>
            ) : (
              <div className="cs-hd__icon" aria-hidden="true">{app.iconInitials}</div>
            )}
            <div className="cs-hd__heads">
              <Tag category="neutral" variant="outline">{app.category}</Tag>
              <h1 className="cs-hd__title">{app.name} {"—"} Full Breakdown</h1>
            </div>
          </div>
          <p className="cs-hd__overview">{app.overview}</p>
        </header>

        <div className="cs-gate">
          <div className="cs-gate__lead">
            <div className="eyebrow">Subscribers only</div>
            <h2 className="cs-gate__h">Read the full {app.name} breakdown</h2>
            <p className="cs-gate__p">The complete case study walks every mechanic in the loop with annotated screenshots and the takeaways a product team can use. Subscribe to unlock this and every other breakdown in the library.</p>
          </div>
          <SubscribeCard onSubscribe={() => setModalOpen(true)} />
        </div>
      </div>
    </main>
  );
}

/** Case study full-breakdown page body. */
function FullCaseStudy({ app }) {
  const [active, setActive] = useState("overview");

  const mechanics = app.mechanics || [];
  const sectionMechanics = mechanics.filter(hasWriteup);

  /* Table-of-contents sections, in document order, computed from the data present. */
  const toc = useMemo(() => [
    { id: "overview", label: "Overview" },
    ...(mechanics.length ? [{ id: "mechanics-observed", label: "Mechanics observed" }] : []),
    ...(app.loopParagraphs?.length ? [{ id: "how-it-works", label: "How it works" }] : []),
    ...sectionMechanics.map((m) => ({ id: `m-${m.id}`, label: m.name, sub: true })),
    ...(app.connections?.length ? [{ id: "how-they-connect", label: "How they connect" }] : []),
    ...(app.insight ? [{ id: "key-insight", label: "Key insight" }] : []),
    ...(app.takeaways?.length ? [{ id: "key-takeaways", label: "Key takeaways" }] : []),
  ], [app]);

  useEffect(() => {
    const ids = toc.map((t) => t.id);
    const onScroll = () => {
      const line = window.innerHeight * 0.3;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - line <= 0) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [toc]);

  return (
    <main id="main">
      <div className="container">
        <div className="cs-layout">
          <Toc toc={toc} active={active} />

          <div className="cs-main">
            {/* Header */}
            <header className="cs-hd" id="overview">
              <nav className="crumb" aria-label="Breadcrumb">
                <a href="/case-studies/">Case studies</a>
                <span className="crumb__sep" aria-hidden="true">/</span>
                <span>{app.name}</span>
                <span className="crumb__sep" aria-hidden="true">/</span>
                <span>Full breakdown</span>
              </nav>
              <div className="cs-hd__row">
                {app.iconSrc ? (
                  <div className="cs-hd__icon" aria-hidden="true">
                    <img src={app.iconSrc} alt="" style={{ width: "100%", height: "100%" }} />
                  </div>
                ) : (
                  <div className="cs-hd__icon" aria-hidden="true">{app.iconInitials}</div>
                )}
                <div className="cs-hd__heads">
                  <Tag category="neutral" variant="outline">{app.category}</Tag>
                  <h1 className="cs-hd__title">{app.name} {"—"} Full Breakdown</h1>
                </div>
              </div>
              <p className="cs-hd__overview">{app.overview}</p>
            </header>

            {/* Mechanics observed */}
            {mechanics.length > 0 && (
              <section className="cs-sec" id="mechanics-observed" aria-labelledby="mo-h">
                <div className="mech-section__kicker">Mechanics observed</div>
                <h2 className="mech-section__title" id="mo-h">{app.mechanicsHeading}</h2>
                <div className="cs-chips">
                  {mechanics.map((m) => (
                    <a className="cs-chip" href={`#m-${m.id}`} key={m.id}>
                      <span className="cs-chip__dot" style={{ background: CAT_COLOR[m.cat] }} />
                      <span className="cs-chip__name">{m.name}</span>
                      <span className="cs-chip__cat">{CAT_LABEL[m.cat]}</span>
                    </a>
                  ))}
                </div>
              </section>
            )}

            {/* How it works */}
            {app.loopParagraphs?.length > 0 && (
              <section className="cs-sec" id="how-it-works" aria-labelledby="hiw-h">
                <div className="mech-section__kicker">How it works</div>
                <h2 className="mech-section__title" id="hiw-h">The core loop</h2>
                <div className="mech-prose cs-prose">
                  {app.loopParagraphs.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </section>
            )}

            {/* Mechanic sections */}
            {sectionMechanics.map((m) => <MechanicSection key={m.id} m={m} />)}

            {/* How they connect */}
            {app.connections?.length > 0 && (
              <section className="cs-sec" id="how-they-connect" aria-labelledby="htc-h">
                <div className="mech-section__kicker">How they connect</div>
                <h2 className="mech-section__title" id="htc-h">Where the mechanics meet</h2>
                <div className="cs-conns">
                  {app.connections.map((c, i) => (
                    <div className="cs-conn" key={i}>
                      <h3 className="cs-conn__h">{c.a} <span className="cs-conn__x" aria-hidden="true">{"×"}</span> {c.b}</h3>
                      <p className="cs-conn__d">{c.desc}</p>
                      <div className="cs-conn__label"><span className="cs-conn__icon" aria-hidden="true">{PairIcon}</span>{c.label}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Key insight */}
            {app.insight && (
              <section className="cs-sec" id="key-insight" aria-labelledby="ki-h">
                <div className="mech-section__kicker">Key insight</div>
                <h2 className="mech-section__title" id="ki-h">What the system teaches</h2>
                <div className="cs-insight">
                  <div className="cs-insight__part">
                    <h3 className="cs-insight__h">The single most instructive observation</h3>
                    <p>{app.insight.observation}</p>
                  </div>
                  <div className="cs-insight__part">
                    <h3 className="cs-insight__h">What makes the system work</h3>
                    <p>{app.insight.works}</p>
                  </div>
                </div>
              </section>
            )}

            {/* Key takeaways */}
            {app.takeaways?.length > 0 && (
              <section className="cs-sec" id="key-takeaways" aria-labelledby="kt-h">
                <div className="mech-section__kicker">For your product</div>
                <h2 className="mech-section__title" id="kt-h">Key takeaways</h2>
                <ol className="cs-takelist">
                  {app.takeaways.map((t, i) => (
                    <li className="cs-take" key={i}>
                      <span className="cs-take__n">{String(i + 1).padStart(2, "0")}</span>
                      <p>{t}</p>
                    </li>
                  ))}
                </ol>
              </section>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

/** Case study page: the full breakdown for public apps, or the subscribe
 *  gate (title + opening introduction + offer) for subscriber apps. */
export function CaseStudyDetailPage({ app, locked = false }) {
  return locked ? <LockedCaseStudy app={app} /> : <FullCaseStudy app={app} />;
}
