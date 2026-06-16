import React, { useState } from "react";
import { Button } from "../ds/Button.jsx";
import { Input } from "../ds/Input.jsx";

/**
 * Email-gated report download. The visitor enters an email and clicks; the
 * submission is POSTed to the /api/lead Cloudflare Function, which notifies
 * the owner server-side and (here) the client then starts the static-file
 * download. The owner's address lives only in the Function's environment —
 * it is never in this page or its source, and there is no mailto.
 *
 * Reusable: `source`/`category` are passed through so the same endpoint can
 * back other capture points (e.g. the future paywall) without change.
 */
export function ReportCapture({ category, source = "category-report", fileHref, fileLabel = "Get the free report" }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle"); // idle | sending | done | error
  const [error, setError] = useState("");

  const valid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim());

  function startDownload() {
    // Static asset: open in a new tab so the success state stays on screen.
    const a = document.createElement("a");
    a.href = fileHref;
    a.download = "";
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
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
      startDownload();
    } catch {
      setState("error");
      setError("Something went wrong sending that. Try again, or email us directly.");
    }
  }

  if (state === "done") {
    return (
      <div className="capture capture--done" role="status">
        <p className="capture__done-h">Your report is on the way.</p>
        <p className="capture__done-p">
          The download should have started.{" "}
          <a href={fileHref}>Click here if it didn't.</a>
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
          {state === "sending" ? "Sending…" : fileLabel}
        </Button>
      </div>
      <p className="capture__fine">One email, the report by return. No list, no spam.</p>
    </form>
  );
}
