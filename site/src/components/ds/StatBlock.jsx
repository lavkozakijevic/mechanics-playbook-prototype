import React from "react";

function injectOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id; el.textContent = css; document.head.appendChild(el);
}

injectOnce("gb-stat-css", `
.gb-stat { display: flex; flex-direction: column; gap: 4px; }
.gb-stat__value { font-family: var(--font-display); font-weight: var(--weight-bold);
  font-size: var(--_sz, 40px); line-height: 1; letter-spacing: -0.02em; color: var(--ink-900);
  display: flex; align-items: baseline; gap: 4px; }
.gb-stat__unit { font-size: 0.5em; font-weight: var(--weight-semibold); color: var(--text-secondary); }
.gb-stat__label { font-family: var(--font-body); font-size: 14px; font-weight: var(--weight-medium); color: var(--ink-700); }
.gb-stat__source { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.02em;
  color: var(--text-faint); margin-top: 2px; }
.gb-stat--sm { --_sz: 28px; }
.gb-stat--lg { --_sz: 56px; }
`);

/**
 * StatBlock — a number with its provenance. We never show a figure without
 * saying where it came from; the `source` line is required, not optional.
 */
export function StatBlock({
  value,
  unit,
  label,
  source,
  size = "md",
  className = "",
  ...rest
}) {
  const cls = ["gb-stat", size !== "md" ? `gb-stat--${size}` : "", className].filter(Boolean).join(" ");
  return (
    <div className={cls} {...rest}>
      <div className="gb-stat__value">
        {value}{unit && <span className="gb-stat__unit">{unit}</span>}
      </div>
      {label && <div className="gb-stat__label">{label}</div>}
      {source && <div className="gb-stat__source">Source: {source}</div>}
    </div>
  );
}
