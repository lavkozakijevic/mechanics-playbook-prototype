/* Website kit — Mechanic detail page. */
import React from "react";
import { Tag } from "../ds/Tag.jsx";

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/* ---- inline icons (static page, but inline SVG is re-render safe) ---- */
const IconKey = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="7.5" cy="15.5" r="4.5" /><path d="M10.7 12.3 21 2" /><path d="m16 7 3 3" /><path d="m18 5 3 3" />
  </svg>
);
const IconAlert = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
const IconArrow = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

const NARR = ["How they use it", "Why it works", "The detail", "Takeaway"];

function Overview({ mech }) {
  const hasMeta = mech.bestFor?.length > 0 || mech.context?.length > 0 || mech.drivers?.length > 0;
  return (
    <section className="band--tight mech-head">
      <div className="container">
        <nav className="crumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span className="crumb__sep">/</span>
          <a href="/mechanics/">Mechanics</a><span className="crumb__sep">/</span>
          <span>{mech.name}</span>
        </nav>
        <div className="mech-head__tagrow">
          <span className="mech-head__num">{String(mech.n).padStart(2, "0")}</span>
          <Tag category={mech.category}>{mech.categoryLabel}</Tag>
        </div>
        <h1>{mech.name}</h1>
        <p className="mech-head__def">{mech.definition}</p>
        {hasMeta && (
          <div className="metarow">
            {mech.bestFor?.length > 0 && (
              <div className="metacol">
                <span className="metacol__label">Best for</span>
                <div className="metachips">
                  {mech.bestFor.map((p) => (
                    <span className="metachip" key={p.label}><span className="metachip__dot" style={{ background: p.color }} />{p.label}</span>
                  ))}
                </div>
              </div>
            )}
            {mech.context?.length > 0 && (
              <div className="metacol">
                <span className="metacol__label">Context</span>
                <div className="metachips">{mech.context.map((c) => <span className="metachip" key={c}>{c}</span>)}</div>
              </div>
            )}
            {mech.drivers?.length > 0 && (
              <div className="metacol">
                <span className="metacol__label">Motivation drivers</span>
                <div className="metachips">{mech.drivers.map((d) => <span className="metachip" key={d}>{d}</span>)}</div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function HowItWorks({ mech }) {
  return (
    <section aria-labelledby="how-h">
      <div className="mech-section__kicker">How it works</div>
      <h2 className="mech-section__title" id="how-h">{mech.howTitle}</h2>
      {mech.how && <div className="mech-prose"><p>{mech.how}</p></div>}
      {(mech.principle || mech.watch) && (
        <div className="callouts">
          {mech.principle && (
            <div className="callout callout--principle">
              <span className="callout__label">{IconKey} Core principle</span>
              <p>{mech.principle}</p>
            </div>
          )}
          {mech.watch && (
            <div className="callout callout--watch">
              <span className="callout__label">{IconAlert} Watch out for</span>
              <p>{mech.watch}</p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

function Variants({ mech }) {
  return (
    <section aria-labelledby="var-h">
      <div className="mech-section__kicker">Structural variants</div>
      <h2 className="mech-section__title" id="var-h">{mech.variantsTitle}</h2>
      <div className="variants">
        {mech.variants.map((v, i) => (
          <div className="variant" key={v.name}>
            <span className="variant__n">{String(i + 1).padStart(2, "0")}</span>
            <div><h4>{v.name}</h4><p>{v.desc}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Lifecycle({ mech }) {
  return (
    <section className="lifecycle" aria-label="Lifecycle placement">
      <div className="lifecycle__label">Lifecycle placement</div>
      <p>{mech.lifecycle}</p>
    </section>
  );
}

function ShotPlaceholder({ label }) {
  return (
    <figure className="shot">
      <div className="shot__frame"><span className="shot__ph">screenshot</span></div>
      {label && <figcaption className="shot__cap">{label}</figcaption>}
    </figure>
  );
}

function CaseStudies({ studies }) {
  return (
    <section aria-labelledby="cs-h">
      <div className="mech-section__kicker">Case studies · {studies.length}</div>
      <h2 className="mech-section__title" id="cs-h">Seen in the wild</h2>
      <div className="cstudies">
        {studies.map((s) => (
          <article className="cstudy" id={`cstudy-${slug(s.app)}`} key={s.app}>
            <div className="cstudy__head">
              <span className="cstudy__app">{s.app}</span>
              <Tag category="neutral">{s.cat}</Tag>
            </div>
            {s.body && (
              <div className="cstudy__narr">
                {s.body.map((b, i) => (
                  <div key={i}><div className="narr__label">{NARR[i]}</div><p>{b}</p></div>
                ))}
              </div>
            )}
            <div className={`shotgallery${s.shots.some((sh) => sh.image) ? " shotgallery--real" : ""}`}>
              {s.shots.map((shot, i) => (
                shot.image
                  ? <figure className="shot shot--real" key={i}>
                      <img src={shot.image} alt={shot.label || ""} className="shot__img" />
                      {shot.label && <figcaption className="shot__cap">{shot.label}</figcaption>}
                    </figure>
                  : <ShotPlaceholder key={i} label={shot.label} />
              ))}
            </div>
            <div className="cstudy__foot">
              <a className="cstudy__link" href={s.href}>View full case study {IconArrow}</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Sidebar({ mech, studies }) {
  return (
    <aside className="mech-aside" aria-label="Related">
      {mech.pairedWith?.length > 0 && (
        <div className="amod">
          <h3>Often paired with</h3>
          <div className="amod__list">
            {mech.pairedWith.map((m) => (
              <a className="amod__item" href={m.href} key={m.name}>
                <span className="amod__dot" style={{ background: `var(--cat-${m.cat})` }} />
                <span className="amod__name">{m.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
      {mech.playerTypes?.length > 0 && (
        <div className="amod">
          <h3>Player types</h3>
          <div className="amod__list">
            {mech.playerTypes.map((p) => (
              <div className="amod__item" key={p.label}>
                <span className="amod__dot" style={{ background: p.color }} />
                <span className="amod__name">{p.label}</span>
                <span className="amod__meta">{p.note}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {studies?.length > 0 && (
        <div className="amod">
          <h3>Seen in</h3>
          <div className="amod__list">
            {studies.map((s) => (
              <a className="amod__item" href={`#cstudy-${slug(s.app)}`} key={s.app}>
                <span className="amod__name">{s.app}</span>
                <span className="amod__meta">{s.cat}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}

/** Mechanic detail page body. */
export function MechanicDetailPage({ mech, studies }) {
  return (
    <main id="main">
      <Overview mech={mech} />
      <div className="container">
        <div className="mech-body">
          <div className="mech-main">
            {(mech.how || mech.howTitle || mech.principle || mech.watch) && <HowItWorks mech={mech} />}
            {mech.variants?.length > 0 && <Variants mech={mech} />}
            {mech.lifecycle && <Lifecycle mech={mech} />}
            {studies?.length > 0 && <CaseStudies studies={studies} />}
          </div>
          <Sidebar mech={mech} studies={studies} />
        </div>
      </div>
    </main>
  );
}
