/* Website kit — System detail page. The signature asset made interactive: a
   node-based map of one app's mechanics with typed, labeled connections, "+" tap
   targets that open a connection-detail modal, a legend, and a flat mechanic
   list as the mobile fallback. */
import React, { useState, useEffect } from "react";
import { Tag } from "../ds/Tag.jsx";

const CAT_COLOR = {
  retention: "var(--cat-retention)", monetization: "var(--cat-monetization)", social: "var(--cat-social)",
};
const CAT_LABEL = { retention: "Retention", monetization: "Monetization", social: "Social" };

const ArrowIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
  </svg>
);
const ArrowRight = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);
const CloseIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const LINE_TYPE = {
  spine: "App spine", mechanic: "Mechanic connection",
  retention: "Retention", monetization: "Monetization", social: "Social",
};
const TYPE_COLOR = {
  spine: "var(--ink-600)", mechanic: "var(--ink-400)",
  retention: "var(--cat-retention)", monetization: "var(--cat-monetization)", social: "var(--cat-social)",
};

/* Nodes' x/y are percentages on a 1000x560 conceptual canvas. `spine` marks the
   core-action anchor. */
const W = 1000, H = 560;

/* Quadratic-curve geometry shared by the SVG path and the chip placement. The
   chip sits at parameter t along the curve (default mid), tuned per connection
   so the bubbles never overlap each other or a node. */
function geom(c, byId) {
  const a = byId[c.from], b = byId[c.to];
  const x1 = (a.x / 100) * W, y1 = (a.y / 100) * H;
  const x2 = (b.x / 100) * W, y2 = (b.y / 100) * H;
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
  const cy = my - Math.min(40, Math.abs(x2 - x1) * 0.18);
  const t = c.t != null ? c.t : 0.5, it = 1 - t;
  const ax = it * it * x1 + 2 * it * t * mx + t * t * x2;
  const ay = it * it * y1 + 2 * it * t * cy + t * t * y2;
  return { d: `M ${x1} ${y1} Q ${mx} ${cy} ${x2} ${y2}`, apex: { x: (ax / W) * 100, y: (ay / H) * 100 } };
}

/** The system map. Without `onOpen` it renders statically — nodes and lines,
 *  no connection tap targets — for reuse outside the system page (homepage
 *  showcase). */
export function SystemMap({ nodes, connections, byId, onOpen }) {
  return (
    <div className="smap">
      <div className="smap__paper" />
      <svg className="smap__svg" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
        {connections.map((c, i) => (
          <path key={i} className={`smap__line smap__line--${c.type}`} d={geom(c, byId).d} />
        ))}
      </svg>

      {nodes.map((n) => (
        <a
          key={n.id}
          href={n.href}
          className={"smap__node" + (n.spine ? " smap__node--spine" : "")}
          style={{ left: n.x + "%", top: n.y + "%" }}
        >
          <span className="smap__cat">
            <span className="smap__dot" style={{ background: CAT_COLOR[n.category] }} />
            {CAT_LABEL[n.category]}
          </span>
          <span className="smap__label">{n.label}</span>
        </a>
      ))}

      {onOpen && connections.map((c, i) => {
        const { apex } = geom(c, byId);
        return (
          <button
            key={i}
            type="button"
            className="conn"
            style={{ left: apex.x + "%", top: apex.y + "%" }}
            onClick={() => onOpen(c)}
            aria-label={`How ${byId[c.from].label} connects to ${byId[c.to].label}`}
          >
            <span className="conn__label">{c.label}</span>
            <span className="conn__plus" aria-hidden="true">+</span>
          </button>
        );
      })}
    </div>
  );
}

const LEGEND = ["spine", "mechanic", "retention", "monetization", "social"];

function MapLegend() {
  return (
    <div className="maplegend" aria-label="Connection types">
      {LEGEND.map((t) => (
        <span className="maplegend__item" key={t}>
          <span className={`maplegend__sw maplegend__sw--line maplegend__sw--${t}`} />
          {LINE_TYPE[t]}
        </span>
      ))}
    </div>
  );
}

/* Mobile fallback: a flat list of the mechanics, each with category, name, and a
   description paragraph. */
function MechanicList({ items }) {
  return (
    <div className="syslist">
      {items.map((n) => (
        <div className="sysrow" key={n.id}>
          <div className="sysrow__head">
            <Tag category={n.cat} dot>{CAT_LABEL[n.cat]}</Tag>
            <span className="sysrow__name">{n.name}</span>
          </div>
          <p>{n.description}</p>
        </div>
      ))}
    </div>
  );
}

function ConnectionModal({ conn, byId, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [onClose]);

  const a = byId[conn.from], b = byId[conn.to];
  const dashed = conn.type === "mechanic";
  return (
    <div className="cmodal" role="dialog" aria-modal="true" aria-labelledby="cmodal-title">
      <div className="cmodal__backdrop" onClick={onClose} />
      <div className="cmodal__dialog">
        <button type="button" className="cmodal__close" onClick={onClose} aria-label="Close">{CloseIcon}</button>
        <span className="cmodal__kicker">
          <span className={"conn__bar" + (dashed ? " conn__bar--dashed" : "")} style={dashed ? undefined : { background: TYPE_COLOR[conn.type] }} />
          {LINE_TYPE[conn.type]} connection
        </span>
        <h2 className="cmodal__title" id="cmodal-title">{conn.name}</h2>
        <div className="cmodal__pair">
          <span className="cmodal__chip"><span className="smap__dot" style={{ background: CAT_COLOR[a.category] }} />{a.label}</span>
          <span className="cmodal__arrow" aria-hidden="true">{ArrowRight}</span>
          <span className="cmodal__chip"><span className="smap__dot" style={{ background: CAT_COLOR[b.category] }} />{b.label}</span>
        </div>
        <div className="cmodal__elabel">Effect on the user</div>
        <p className="cmodal__effect">{conn.effect}</p>
      </div>
    </div>
  );
}

/** App system detail page: overview, core loop, the interactive map, the key
 *  insight, what makes it work, and a link to the full case study. */
export function SystemDetailPage({ system }) {
  const [active, setActive] = useState(null);

  const nodes = system.nodes || [];
  const connections = system.connections || [];
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
  const listItems = system.mechanicsList?.length
    ? system.mechanicsList
    : nodes.map((n) => ({ id: n.id, name: n.label, cat: n.category, description: n.description, href: n.href }));
  const overviewParagraphs = Array.isArray(system.overview) ? system.overview : system.overview ? [system.overview] : [];

  return (
    <main id="main">
      {/* System overview block */}
      <section className="mech-head" aria-labelledby="sys-h">
        <div className="container">
          <nav className="crumb" aria-label="Breadcrumb">
            <a href="/systems/">Systems</a>
            <span className="crumb__sep" aria-hidden="true">›</span>
            <span>{system.appName}</span>
          </nav>
          <div className="sys-meta">
            <Tag category="neutral" variant="outline">{system.typeLabel || "App"}</Tag>
            {system.domain && (
              <span className="sys-cat"><span className="sys-cat__dot" style={{ background: CAT_COLOR[system.domain.cat] }} />{system.domain.label}</span>
            )}
          </div>
          <h1 id="sys-h">The {system.appName} system</h1>
          {system.tagline && <p className="mech-head__def">{system.tagline}</p>}
        </div>
      </section>

      {/* Overview + core loop */}
      <section className="band--tight">
        <div className="container">
          <div className="sys-read">
            {overviewParagraphs.length > 0 && (
              <div className="mech-section" style={{ marginBottom: "clamp(28px, 4vw, 44px)" }}>
              <div className="mech-section__kicker">Overview</div>
              <h2 className="mech-section__title">The design logic</h2>
              <div className="mech-prose">
                {overviewParagraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            )}
            {system.walkthroughParagraphs?.length > 0 && (
              <div className="mech-section">
                <div className="mech-section__kicker">Core loop</div>
                <h2 className="mech-section__title">The mechanic sequence</h2>
                <div className="mech-prose">
                  {system.walkthroughParagraphs.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Interactive system map */}
      <section className="band--tight sys-mapsec" aria-labelledby="map-h">
        <div className="container">
          <div className="smap-head">
            <h2 className="smap-head__t" id="map-h">The system map</h2>
            <span className="smap-head__hint">Tap any + on a connection to see how the two mechanics interact</span>
          </div>
          <div className="smap-stage">
            <SystemMap nodes={nodes} connections={connections} byId={byId} onOpen={setActive} />
            <MapLegend />
          </div>
          {listItems.length > 0 && <MechanicList items={listItems} />}
        </div>
      </section>

      {/* Key insight */}
      {system.keyInsight && (
        <section className="band--tight">
          <div className="container">
            <div className="sys-insight">
              <div className="sys-insight__k">Key insight</div>
              <p>{system.keyInsight}</p>
            </div>
          </div>
        </section>
      )}

      {/* What makes it work */}
      {system.whatMakesItWork && (
        <section className="band--tight" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="sys-read">
              <div className="mech-section">
                <div className="mech-section__kicker">What makes it work</div>
                <h2 className="mech-section__title">{system.whatMakesItWork.title}</h2>
                <div className="mech-prose">
                  {(system.whatMakesItWork.paragraphs || []).map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Case study link */}
      {system.appHref && (
        <section className="band--tight" style={{ paddingTop: 0 }}>
          <div className="container">
            <a className="cscard" href={system.appHref}>
              <div className="cscard__body">
                <div className="cscard__k">Full case study</div>
                <div className="cscard__t">See every {system.appName} mechanic up close</div>
                <p className="cscard__p">The case study walks each mechanic in the map with annotated screenshots from the app and the takeaways a product team can use.</p>
              </div>
              <span className="cscard__go">Read the case study {ArrowIcon}</span>
            </a>
          </div>
        </section>
      )}

      {active && <ConnectionModal conn={active} byId={byId} onClose={() => setActive(null)} />}
    </main>
  );
}
