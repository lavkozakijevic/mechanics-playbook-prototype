import React from "react";

function injectOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id; el.textContent = css; document.head.appendChild(el);
}

injectOnce("gb-badge-css", `
.gb-badge {
  display: inline-flex; align-items: center; gap: 5px;
  height: 22px; padding: 0 8px;
  font-family: var(--font-body); font-size: 12px; font-weight: var(--weight-semibold);
  line-height: 1; border-radius: var(--radius-sm); border: 1px solid transparent;
  white-space: nowrap;
}
.gb-badge svg { width: 12px; height: 12px; stroke-width: 2.25; flex: none; }
.gb-badge__pip { width: 6px; height: 6px; border-radius: 50%; flex: none; }

.gb-badge--neutral { background: var(--ink-100); color: var(--ink-700); }
.gb-badge--accent  { background: var(--red-wash); color: var(--red-600); }
.gb-badge--ok      { background: var(--ok-tint); color: var(--ok); }
.gb-badge--info    { background: var(--info-tint); color: var(--info); }
.gb-badge--warn    { background: var(--warn-tint); color: var(--warn); }

/* solid: rare, for "Free" style call-outs */
.gb-badge--solid.gb-badge--neutral { background: var(--ink-900); color: var(--paper); }
.gb-badge--solid.gb-badge--accent  { background: var(--accent); color: #fff; }

/* outline: hairline only, the quietest badge */
.gb-badge--outline { background: transparent; border-color: var(--border-default); color: var(--ink-600); }
`);

const PIP = {
  neutral: "var(--ink-500)", accent: "var(--accent)",
  ok: "var(--ok)", info: "var(--info)", warn: "var(--warn)",
};

/**
 * Badge — a small status marker. "Free", "Updated weekly", "New this week".
 * Quiet utility, never a celebration. Use `pip` for the live freshness dot.
 */
export function Badge({
  tone = "neutral",
  variant = "soft",
  pip = false,
  icon = null,
  className = "",
  children,
  ...rest
}) {
  const cls = [
    "gb-badge",
    `gb-badge--${tone}`,
    variant !== "soft" ? `gb-badge--${variant}` : "",
    className,
  ].filter(Boolean).join(" ");
  return (
    <span className={cls} {...rest}>
      {pip && <span className="gb-badge__pip" style={{ background: PIP[tone] }} />}
      {icon}
      {children}
    </span>
  );
}
