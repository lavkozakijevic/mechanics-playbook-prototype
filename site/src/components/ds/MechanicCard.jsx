import React from "react";
import { Card } from "./Card.jsx";
import { Tag } from "./Tag.jsx";

function injectOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id; el.textContent = css; document.head.appendChild(el);
}

injectOnce("gb-mechanic-css", `
.gb-mechanic { display: flex; flex-direction: column; gap: 12px; min-height: 168px; }
.gb-mechanic__top { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.gb-mechanic__num { font-family: var(--font-mono); font-size: 12px; font-weight: var(--weight-medium);
  letter-spacing: 0.08em; color: var(--text-faint); }
.gb-mechanic__name { font-family: var(--font-display); font-size: 19px; font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-heading); color: var(--ink-900); line-height: 1.25; margin: 0; }
.gb-mechanic__def { font-family: var(--font-body); font-size: 14px; line-height: 1.55; color: var(--text-secondary);
  margin: 0; text-wrap: pretty; }
.gb-mechanic__tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: auto; padding-top: 4px; }
.gb-mechanic__lock { display: inline-flex; align-items: center; gap: 5px; font-family: var(--font-mono);
  font-size: 11px; letter-spacing: 0.04em; color: var(--text-muted); }
.gb-mechanic__lock svg { width: 13px; height: 13px; stroke-width: 2; }
.gb-card--interactive:hover .gb-mechanic__name { text-decoration: underline;
  text-decoration-color: var(--accent); text-underline-offset: 3px; text-decoration-thickness: 2px; }
`);

const LABEL = {
  retention: "Retention", monetization: "Monetization", social: "Social", neutral: "Mechanic",
};

/**
 * MechanicCard — one of the 22 mechanics as a browsable specimen. Number,
 * category, name, one-sentence definition, and context tags as filter links.
 */
export function MechanicCard({
  number,
  category = "neutral",
  name,
  definition,
  contextTags = [],
  locked = false,
  href,
  ...rest
}) {
  return (
    <Card interactive href={href} {...rest}>
      <div className="gb-mechanic">
        <div className="gb-mechanic__top">
          <Tag category={category} dot>{LABEL[category]}</Tag>
          {number != null && <span className="gb-mechanic__num">{String(number).padStart(2, "0")}</span>}
        </div>
        <h3 className="gb-mechanic__name">{name}</h3>
        <p className="gb-mechanic__def">{definition}</p>
        <div className="gb-mechanic__tags">
          {locked ? (
            <span className="gb-mechanic__lock"><i data-lucide="lock"></i>In the full library</span>
          ) : (
            contextTags.map((t) => (
              <Tag key={t} category="neutral">{t}</Tag>
            ))
          )}
        </div>
      </div>
    </Card>
  );
}
