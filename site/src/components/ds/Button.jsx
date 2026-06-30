import React from "react";

/* Inject component CSS once at module load. Keeps the component self-contained
   (React only) while giving real :hover / :focus-visible states. */
function injectOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}

injectOnce("gb-button-css", `
.gb-btn {
  --_h: 40px; --_px: 18px; --_fs: 15px;
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  height: var(--_h); padding: 0 var(--_px);
  font-family: var(--font-body); font-size: var(--_fs); font-weight: var(--weight-semibold);
  line-height: 1; letter-spacing: 0.005em; white-space: nowrap;
  border: 1px solid transparent; border-radius: var(--radius-md);
  cursor: pointer; user-select: none; text-decoration: none;
  transition: var(--transition-base); position: relative;
}
.gb-btn:focus-visible { outline: none; box-shadow: var(--ring); }
.gb-btn:disabled, .gb-btn[aria-disabled="true"] { cursor: not-allowed; opacity: 0.45; }
.gb-btn svg { width: 1.1em; height: 1.1em; stroke-width: 2; flex: none; }

.gb-btn--sm { --_h: 32px; --_px: 12px; --_fs: 13px; }
.gb-btn--lg { --_h: 48px; --_px: 24px; --_fs: 16px; }

/* primary: serious ink CTA */
.gb-btn--primary { background: var(--ink-900); color: var(--paper); }
.gb-btn--primary:hover:not(:disabled) { background: var(--ink-800); }
.gb-btn--primary:active:not(:disabled) { background: #000; }

/* accent: the one red action. used sparingly. */
.gb-btn--accent { background: var(--accent); color: var(--text-on-accent); }
.gb-btn--accent:hover:not(:disabled) { background: var(--accent-hover); }
.gb-btn--accent:active:not(:disabled) { background: var(--accent-press); }

/* secondary: bordered sheet */
.gb-btn--secondary { background: var(--sheet); color: var(--ink-900); border-color: var(--border-default); }
.gb-btn--secondary:hover:not(:disabled) { background: var(--paper); border-color: var(--border-strong); }
.gb-btn--secondary:active:not(:disabled) { background: var(--paper-deep); }

/* ghost: chromeless */
.gb-btn--ghost { background: transparent; color: var(--ink-800); }
.gb-btn--ghost:hover:not(:disabled) { background: var(--paper-edge); }
.gb-btn--ghost:active:not(:disabled) { background: var(--paper-deep); }

/* link: text with the red underline */
.gb-btn--link { background: transparent; color: var(--ink-900); height: auto; padding: 0;
  border-radius: var(--radius-sm); text-decoration: underline;
  text-decoration-color: var(--accent); text-underline-offset: 3px; text-decoration-thickness: 1.5px; }
.gb-btn--link:hover:not(:disabled) { text-decoration-thickness: 2px; }
`);

/**
 * Button — the brand's action. Five variants: primary (serious ink), accent
 * (the one red action, used sparingly), secondary, ghost, link.
 */
export function Button({
  variant = "primary",
  size = "md",
  leadingIcon = null,
  trailingIcon = null,
  disabled = false,
  type = "button",
  as = "button",
  className = "",
  children,
  ...rest
}) {
  const cls = [
    "gb-btn",
    `gb-btn--${variant}`,
    size !== "md" ? `gb-btn--${size}` : "",
    className,
  ].filter(Boolean).join(" ");

  const Tag = as;
  const tagProps = Tag === "button" ? { type, disabled } : { "aria-disabled": disabled || undefined };

  return (
    <Tag className={cls} {...tagProps} {...rest}>
      {leadingIcon}
      {children}
      {trailingIcon}
    </Tag>
  );
}
