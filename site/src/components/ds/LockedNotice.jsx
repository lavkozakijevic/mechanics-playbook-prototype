import React from "react";
import { Button } from "./Button.jsx";

function injectOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id; el.textContent = css; document.head.appendChild(el);
}

injectOnce("gb-locked-css", `
.gb-locked {
  display: flex; flex-direction: column; align-items: center; text-align: center; gap: 12px;
  padding: var(--space-6) var(--space-5);
  background: var(--surface-card);
  border: 1px solid var(--border-default); border-radius: var(--radius-md);
  position: relative; overflow: hidden;
}
/* a closed archive drawer: a quiet ink band, not an alarm */
.gb-locked::before {
  content: ""; position: absolute; inset: 0 0 auto 0; height: 3px;
  background: repeating-linear-gradient(90deg, var(--ink-300) 0 10px, transparent 10px 20px);
  opacity: 0.7;
}
.gb-locked__icon {
  width: 38px; height: 38px; display: grid; place-items: center;
  border-radius: var(--radius-md); background: var(--paper-deep); color: var(--ink-600);
}
.gb-locked__icon svg { width: 18px; height: 18px; stroke-width: 2; }
.gb-locked__title { font-family: var(--font-display); font-size: 17px; font-weight: var(--weight-semibold);
  color: var(--ink-900); margin: 0; letter-spacing: var(--tracking-heading); }
.gb-locked__body { font-family: var(--font-body); font-size: 14px; line-height: 1.55;
  color: var(--text-secondary); margin: 0; max-width: 42ch; text-wrap: pretty; }
.gb-locked__actions { display: flex; gap: 10px; margin-top: 4px; }
`);

/**
 * LockedNotice — the freemium gate as an invitation, not a wall. Reads like a
 * closed archive drawer. Copy invites ("This breakdown is part of the full
 * library"); one click to Subscribe.
 */
export function LockedNotice({
  title = "This breakdown is part of the full library",
  children = "Subscribers see every annotated screenshot, the system map, and the requirements behind this mechanic. New entries land every week.",
  primaryLabel = "Subscribe",
  primaryHref = "/subscribe",
  secondaryLabel = "Log in",
  secondaryHref = "/login",
  className = "",
  ...rest
}) {
  return (
    <div className={["gb-locked", className].filter(Boolean).join(" ")} {...rest}>
      <span className="gb-locked__icon"><i data-lucide="lock"></i></span>
      <h3 className="gb-locked__title">{title}</h3>
      <p className="gb-locked__body">{children}</p>
      <div className="gb-locked__actions">
        <Button variant="accent" as="a" href={primaryHref}>{primaryLabel}</Button>
        {secondaryLabel && <Button variant="ghost" as="a" href={secondaryHref}>{secondaryLabel}</Button>}
      </div>
    </div>
  );
}
