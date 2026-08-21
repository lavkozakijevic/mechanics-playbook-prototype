import React, { useState } from "react";
import { Button } from "../ds/Button.jsx";
import { Input } from "../ds/Input.jsx";

/**
 * Email-gated report. The visitor enters an email and clicks; the submission
 * is POSTed to the /api/lead Cloudflare Function, which notifies the owner
 * server-side. On success the report opens as an HTML page in a new tab
 * (falling back to the same tab if the browser blocks the popup).
 *
 * The report URL is derived from the category slug: /{category}/report.
 * Reusable: `source`/`category` are passed through so the same endpoint can
 * back other capture points without change.
 */
export function ReportCapture({
  category,
  source = "category-report",
  submitLabel = "Get the free report",
  note,
}) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle"); // idle | sending | done | error
  const [error, setError] = useState("");

  const reportUrl = `/${category}/report`;
  const valid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim());

  function openReport() {
    // window.open can return null when called after an async boundary because
    // some browsers treat it as a popup rather than a direct user gesture.
    // Fall back to same-tab navigation so the reader always reaches the report.
    const w = window.open(reportUrl, "_blank", "noopener,noreferrer");
    if (!w) window.location.href = reportUrl;
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!valid || state === "sending") return;
    setState("sending");
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), category, source }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setState("done");
      openReport();
    } catch {
      setState("error");
      setError("Something went wrong sending that. Try again, or email us directly.");
    }
  }

  if (state === "done") {
    return (
      <div className="capture capture--done" role="status">
        <p className="capture__done-h">Opening your report now.</p>
        <p className="capture__done-p">
          <a href={reportUrl} target="_blank" rel="noopener noreferrer">Click here if it didn't open.</a>
        </p>
      </div>
    );
  }

  return (
    <form className="capture" onSubmit={onSubmit} noValidate>
      <div className="capture__row">
        <Input
          type="email"
          size="lg"
          placeholder="you@company.com"
          aria-label="Work email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={state === "error" ? error : undefined}
          className="capture__field"
        />
        <Button
          type="submit"
          variant="accent"
          size="lg"
          disabled={!valid || state === "sending"}
        >
          {state === "sending" ? "Sending…" : submitLabel}
        </Button>
      </div>
      {note && <p className="capture__fine">{note}</p>}
    </form>
  );
}
