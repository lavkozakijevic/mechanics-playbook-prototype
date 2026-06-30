import React from "react";

function injectOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id; el.textContent = css; document.head.appendChild(el);
}

injectOnce("gb-card-css", `
.gb-card {
  background: var(--surface-card); border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md); box-shadow: var(--shadow-xs);
  transition: var(--transition-base); position: relative;
}
.gb-card--pad { padding: var(--space-5); }
.gb-card--interactive { cursor: pointer; text-decoration: none; color: inherit; display: block; }
.gb-card--interactive:hover { border-color: var(--border-strong); box-shadow: var(--shadow-sm); }
.gb-card--interactive:focus-visible { outline: none; box-shadow: var(--ring); }
.gb-card--flat { box-shadow: none; }
.gb-card--sunken { background: var(--surface-sunken); border-color: transparent; box-shadow: none; }
`);

/**
 * Card — the base specimen sheet. Defined by a hairline border on the sheet,
 * not by a glossy lift. Everything else in the library composes this.
 */
export function Card({
  pad = true,
  interactive = false,
  variant = "default",
  as,
  className = "",
  children,
  ...rest
}) {
  const Tag = as || (interactive ? "a" : "div");
  const cls = [
    "gb-card",
    pad ? "gb-card--pad" : "",
    interactive ? "gb-card--interactive" : "",
    variant === "flat" ? "gb-card--flat" : "",
    variant === "sunken" ? "gb-card--sunken" : "",
    className,
  ].filter(Boolean).join(" ");
  return <Tag className={cls} {...rest}>{children}</Tag>;
}
