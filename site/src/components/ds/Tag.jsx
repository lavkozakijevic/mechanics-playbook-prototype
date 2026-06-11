import React from "react";

function injectOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id; el.textContent = css; document.head.appendChild(el);
}

injectOnce("gb-tag-css", `
.gb-tag {
  display: inline-flex; align-items: center; gap: 6px;
  height: 24px; padding: 0 9px;
  font-family: var(--font-mono); font-size: 11px; font-weight: var(--weight-medium);
  letter-spacing: 0.06em; text-transform: uppercase; line-height: 1;
  border-radius: var(--radius-sm); border: 1px solid transparent;
  white-space: nowrap; text-decoration: none; transition: var(--transition-base);
}
a.gb-tag:hover { filter: brightness(0.97); text-decoration: none; }
.gb-tag__dot { width: 6px; height: 6px; border-radius: 50%; flex: none; }

.gb-tag--neutral { background: var(--ink-100); color: var(--ink-700); }
.gb-tag--retention { background: var(--cat-retention-tint); color: var(--cat-retention); }
.gb-tag--monetization { background: var(--cat-monetization-tint); color: var(--cat-monetization); }
.gb-tag--social { background: var(--cat-social-tint); color: var(--cat-social); }

/* outline reading: a quieter classification on the sheet */
.gb-tag--outline { background: transparent; }
.gb-tag--outline.gb-tag--neutral { border-color: var(--border-default); }
.gb-tag--outline.gb-tag--retention { border-color: var(--cat-retention); }
.gb-tag--outline.gb-tag--monetization { border-color: var(--cat-monetization); }
.gb-tag--outline.gb-tag--social { border-color: var(--cat-social); }
`);

const DOT = {
  retention: "var(--cat-retention)",
  monetization: "var(--cat-monetization)",
  social: "var(--cat-social)",
  neutral: "var(--ink-500)",
};

/**
 * Tag — a specimen-label classification chip. Carries one of the three mechanic
 * categories (or neutral context tags). Quiet by design; never competes with red.
 */
export function Tag({
  category = "neutral",
  variant = "soft",
  dot = false,
  as = "span",
  className = "",
  children,
  ...rest
}) {
  const cls = [
    "gb-tag",
    `gb-tag--${category}`,
    variant === "outline" ? "gb-tag--outline" : "",
    className,
  ].filter(Boolean).join(" ");
  const Tag = as;
  return (
    <Tag className={cls} {...rest}>
      {dot && <span className="gb-tag__dot" style={{ background: DOT[category] }} />}
      {children}
    </Tag>
  );
}
