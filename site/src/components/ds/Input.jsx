import React from "react";

function injectOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id; el.textContent = css; document.head.appendChild(el);
}

injectOnce("gb-input-css", `
.gb-field { display: flex; flex-direction: column; gap: 6px; }
.gb-field__label { font-family: var(--font-body); font-size: 13px; font-weight: var(--weight-semibold); color: var(--ink-800); }
.gb-field__req { color: var(--accent); margin-left: 2px; }
.gb-field__hint { font-family: var(--font-body); font-size: 12px; color: var(--text-muted); }
.gb-field__hint--error { color: var(--red-600); }

.gb-input {
  display: flex; align-items: center; gap: 8px;
  height: 40px; padding: 0 12px;
  background: var(--sheet); border: 1px solid var(--border-default);
  border-radius: var(--radius-md); transition: var(--transition-base);
}
.gb-input:hover { border-color: var(--border-strong); }
.gb-input:focus-within { border-color: var(--accent); box-shadow: 0 0 0 3px var(--red-wash); }
.gb-input--sm { height: 32px; }
.gb-input--lg { height: 48px; }
.gb-input--error { border-color: var(--red-500); }
.gb-input--error:focus-within { box-shadow: 0 0 0 3px var(--red-wash); }
.gb-input--disabled { background: var(--paper-deep); border-color: var(--border-subtle); cursor: not-allowed; }

.gb-input svg { width: 17px; height: 17px; stroke-width: 2; color: var(--ink-500); flex: none; }
.gb-input input {
  flex: 1; min-width: 0; border: none; outline: none; background: transparent;
  font-family: var(--font-body); font-size: 15px; color: var(--ink-900);
}
.gb-input input::placeholder { color: var(--text-faint); }
.gb-input input:disabled { cursor: not-allowed; }
`);

/**
 * Input — a single-line text field on the sheet. Hairline border, red focus.
 * Errors explain what went wrong, plainly, without apology.
 */
export function Input({
  label,
  hint,
  error,
  required = false,
  size = "md",
  leadingIcon = null,
  trailingIcon = null,
  disabled = false,
  id,
  className = "",
  ...rest
}) {
  const fieldId = id || `gb-input-${Math.random().toString(36).slice(2, 8)}`;
  const boxCls = [
    "gb-input",
    size !== "md" ? `gb-input--${size}` : "",
    error ? "gb-input--error" : "",
    disabled ? "gb-input--disabled" : "",
  ].filter(Boolean).join(" ");

  return (
    <div className={["gb-field", className].filter(Boolean).join(" ")}>
      {label && (
        <label className="gb-field__label" htmlFor={fieldId}>
          {label}{required && <span className="gb-field__req">*</span>}
        </label>
      )}
      <div className={boxCls}>
        {leadingIcon}
        <input id={fieldId} disabled={disabled} aria-invalid={!!error} {...rest} />
        {trailingIcon}
      </div>
      {(error || hint) && (
        <span className={`gb-field__hint ${error ? "gb-field__hint--error" : ""}`}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
