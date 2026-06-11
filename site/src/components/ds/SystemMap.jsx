import React from "react";

function injectOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id; el.textContent = css; document.head.appendChild(el);
}

injectOnce("gb-map-css", `
.gb-map { position: relative; width: 100%; background: var(--surface-card);
  border: 1px solid var(--border-subtle); border-radius: var(--radius-md); overflow: hidden; }
.gb-map__paper { position: absolute; inset: 0;
  background-image: radial-gradient(var(--ink-200) 1px, transparent 1px);
  background-size: 22px 22px; opacity: 0.5; }
.gb-map__lines { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
.gb-map__line { fill: none; stroke: var(--map-line); stroke-width: 1.5; transition: stroke var(--duration-base) var(--ease-standard), stroke-width var(--duration-base) var(--ease-standard); }
.gb-map__line--active { stroke: var(--map-line-active); stroke-width: 2; }
.gb-map__linelabel { font-family: var(--font-mono); font-size: 10px; fill: var(--text-muted); letter-spacing: 0.04em; }

.gb-node {
  position: absolute; transform: translate(-50%, -50%);
  min-width: 116px; max-width: 168px; padding: 9px 12px;
  background: var(--node-fill); border: 1px solid var(--node-border);
  border-radius: var(--radius-sm); box-shadow: var(--shadow-xs);
  z-index: 2; transition: var(--transition-base); cursor: default; text-decoration: none;
}
a.gb-node:hover { border-color: var(--ink-900); box-shadow: var(--shadow-sm); }
.gb-node__cat { display: inline-flex; align-items: center; gap: 5px;
  font-family: var(--font-mono); font-size: 9px; font-weight: var(--weight-medium);
  text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); margin-bottom: 3px; }
.gb-node__dot { width: 6px; height: 6px; border-radius: 50%; flex: none; }
.gb-node__label { font-family: var(--font-display); font-size: 13px; font-weight: var(--weight-semibold);
  color: var(--ink-900); line-height: 1.2; letter-spacing: -0.01em; }
.gb-node--accent { border-color: var(--accent); }
`);

const CAT_COLOR = {
  retention: "var(--cat-retention)", monetization: "var(--cat-monetization)",
  social: "var(--cat-social)", neutral: "var(--ink-500)",
};
const CAT_LABEL = {
  retention: "Retention", monetization: "Monetization", social: "Social", neutral: "Mechanic",
};

/**
 * SystemMap — the signature diagram language. Renders mechanic nodes and the red
 * connection lines between them over a faint dotted ground. Strict, consistent,
 * recognizable as ours before a word is read.
 */
export function SystemMap({
  nodes = [],
  connections = [],
  width = 640,
  height = 360,
  className = "",
  ...rest
}) {
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
  const px = (v) => (typeof v === "number" ? v : parseFloat(v));

  return (
    <div
      className={["gb-map", className].filter(Boolean).join(" ")}
      style={{ aspectRatio: `${width} / ${height}` }}
      {...rest}
    >
      <div className="gb-map__paper" />
      <svg className="gb-map__lines" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
        {connections.map((c, i) => {
          const a = byId[c.from], b = byId[c.to];
          if (!a || !b) return null;
          const x1 = (px(a.x) / 100) * width, y1 = (px(a.y) / 100) * height;
          const x2 = (px(b.x) / 100) * width, y2 = (px(b.y) / 100) * height;
          const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
          const cx = mx, cy = my - Math.min(40, Math.abs(x2 - x1) * 0.18);
          return (
            <g key={i}>
              <path
                className={`gb-map__line ${c.active ? "gb-map__line--active" : ""}`}
                d={`M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`}
              />
              {c.label && (
                <text className="gb-map__linelabel" x={mx} y={cy - 4} textAnchor="middle">{c.label}</text>
              )}
            </g>
          );
        })}
      </svg>
      {nodes.map((n) => {
        const Tag = n.href ? "a" : "div";
        return (
          <Tag
            key={n.id}
            href={n.href}
            className={`gb-node ${n.active ? "gb-node--accent" : ""}`}
            style={{ left: `${px(n.x)}%`, top: `${px(n.y)}%` }}
          >
            <span className="gb-node__cat">
              <span className="gb-node__dot" style={{ background: CAT_COLOR[n.category || "neutral"] }} />
              {CAT_LABEL[n.category || "neutral"]}
            </span>
            <div className="gb-node__label">{n.label}</div>
          </Tag>
        );
      })}
    </div>
  );
}
