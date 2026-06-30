import React from "react";

function injectOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id; el.textContent = css; document.head.appendChild(el);
}

injectOnce("gb-evidence-css", `
.gb-evidence { display: flex; flex-direction: column; gap: 10px; }
.gb-evidence__label { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
.gb-evidence__title { font-family: var(--font-mono); font-size: 11px; font-weight: var(--weight-medium);
  text-transform: uppercase; letter-spacing: 0.09em; color: var(--ink-700); }
.gb-evidence__date { font-family: var(--font-mono); font-size: 11px; color: var(--text-faint); white-space: nowrap; }

.gb-evidence__frame {
  position: relative; background: var(--surface-sunken);
  border: 1px solid var(--border-default); border-radius: var(--radius-md);
  padding: 10px; overflow: hidden;
}
.gb-evidence__media {
  position: relative; border-radius: var(--radius-sm); overflow: hidden;
  background: var(--sheet); aspect-ratio: var(--_ar, 16 / 10);
  display: grid; place-items: center;
}
.gb-evidence__media img { width: 100%; height: 100%; object-fit: cover; display: block; }
.gb-evidence__placeholder {
  width: 100%; height: 100%; display: grid; place-items: center;
  font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.06em; color: var(--text-faint);
  background:
    linear-gradient(135deg, transparent 46%, var(--ink-200) 46% 54%, transparent 54%) 0 0 / 16px 16px,
    var(--paper-deep);
}

/* the analyst's pen: numbered red annotation pins over the specimen */
.gb-pin {
  position: absolute; transform: translate(-50%, -50%);
  width: 22px; height: 22px; border-radius: 50%;
  background: var(--accent); color: #fff; border: 2px solid #fff;
  display: grid; place-items: center;
  font-family: var(--font-mono); font-size: 11px; font-weight: var(--weight-semibold);
  box-shadow: 0 1px 4px rgba(240,54,54,0.45); z-index: 2;
}

.gb-evidence__caption { font-family: var(--font-body); font-size: 14px; line-height: 1.55;
  color: var(--text-secondary); margin: 0; text-wrap: pretty; }
.gb-evidence__caption b { color: var(--ink-900); font-weight: var(--weight-semibold); }

.gb-evidence__notes { list-style: none; margin: 4px 0 0; padding: 0; display: flex; flex-direction: column; gap: 7px; }
.gb-evidence__note { display: flex; gap: 9px; align-items: baseline;
  font-family: var(--font-body); font-size: 13px; line-height: 1.5; color: var(--text-secondary); }
.gb-evidence__note .n { font-family: var(--font-mono); font-size: 10px; font-weight: var(--weight-semibold);
  color: #fff; background: var(--accent); width: 16px; height: 16px; border-radius: 50%;
  display: grid; place-items: center; flex: none; position: relative; top: 2px; }
`);

/**
 * AnnotatedScreenshot — the brand's standard way to present evidence. A
 * consistently framed specimen, clearly labeled, with numbered red annotation
 * pins and a real-sentence caption. The screenshot is the color; the frame stays calm.
 */
export function AnnotatedScreenshot({
  src,
  alt = "",
  appName,
  screenLabel,
  date,
  caption,
  annotations = [],
  aspectRatio = "16 / 10",
  className = "",
  ...rest
}) {
  return (
    <figure className={["gb-evidence", className].filter(Boolean).join(" ")} style={{ margin: 0 }} {...rest}>
      {(appName || screenLabel || date) && (
        <figcaption className="gb-evidence__label">
          <span className="gb-evidence__title">
            {[appName, screenLabel].filter(Boolean).join(" · ")}
          </span>
          {date && <span className="gb-evidence__date">{date}</span>}
        </figcaption>
      )}

      <div className="gb-evidence__frame">
        <div className="gb-evidence__media" style={{ "--_ar": aspectRatio }}>
          {src
            ? <img src={src} alt={alt} />
            : <div className="gb-evidence__placeholder">{alt || "app screenshot"}</div>}
          {annotations.map((a, i) => (
            <span key={i} className="gb-pin" style={{ left: `${a.x}%`, top: `${a.y}%` }}>
              {a.n != null ? a.n : i + 1}
            </span>
          ))}
        </div>
      </div>

      {caption && <p className="gb-evidence__caption">{caption}</p>}

      {annotations.some((a) => a.note) && (
        <ul className="gb-evidence__notes">
          {annotations.filter((a) => a.note).map((a, i) => (
            <li key={i} className="gb-evidence__note">
              <span className="n">{a.n != null ? a.n : i + 1}</span>
              <span>{a.note}</span>
            </li>
          ))}
        </ul>
      )}
    </figure>
  );
}
