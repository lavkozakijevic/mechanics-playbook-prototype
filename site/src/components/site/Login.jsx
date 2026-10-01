/* Website kit — Log in page. One field: an email address. The server emails a
   one-time sign-in link (and creates the account the first time an address is
   used). No password, no third-party login yet. Posts to /api/auth/login, which
   holds every key; nothing about the sign-in service is in this file. */
import React, { useEffect, useState } from "react";
import { Button } from "../ds/Button.jsx";
import { Input } from "../ds/Input.jsx";

const LOGO_INK = "/assets/logo/appservatory-logo.png";

const MailIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const MESSAGES = {
  invalid: "That doesn't look like an email address. Check it and try again.",
  limited: "Too many requests. Wait a minute and try again.",
  error: "We couldn't send the link just now. Try again in a moment.",
};

/** Log in page — returning subscribers and new accounts use the same form. */
export function LoginPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | invalid | limited | error
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    try {
      if (new URLSearchParams(window.location.search).get("error") === "expired") setExpired(true);
    } catch {
      /* no query string to read */
    }
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
        credentials: "same-origin",
      });
      if (res.ok) setStatus("sent");
      else if (res.status === 429) setStatus("limited");
      else if (res.status === 400) setStatus("invalid");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const sent = status === "sent";

  return (
    <main className="login" id="main">
      <div className="login__card">
        <a className="login__brand" href="/" aria-label="Appservatory home">
          <img src={LOGO_INK} alt="Appservatory" width="123" height="25" />
        </a>

        {sent ? (
          <div className="login__form" aria-live="polite">
            <h1 className="login__heading">Check your email</h1>
            <p className="login__lead">
              If that address can receive mail, a sign-in link is on its way to <strong>{email.trim()}</strong>. The link
              works once and expires soon.
            </p>
            <Button variant="secondary" size="lg" type="button" className="login__submit" onClick={() => setStatus("idle")}>
              Use a different email
            </Button>
          </div>
        ) : (
          <form className="login__form" onSubmit={submit} noValidate>
            <h1 className="login__heading">Log in or create an account</h1>
            <p className="login__lead">Enter your email and we'll send you a link. No password needed.</p>
            {expired && status === "idle" && (
              <p className="login__status login__status--error" role="alert">
                That sign-in link has expired or was already used. Enter your email for a new one.
              </p>
            )}
            {MESSAGES[status] && (
              <p className="login__status login__status--error" role="alert">{MESSAGES[status]}</p>
            )}
            <Input
              id="login-email"
              label="Email"
              size="lg"
              type="email"
              name="email"
              required
              placeholder="you@company.com"
              leadingIcon={MailIcon}
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button variant="primary" size="lg" type="submit" className="login__submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Email me a link"}
            </Button>
          </form>
        )}
      </div>

      <p className="login__alt">
        Not a subscriber yet? <a href="/subscribe/">See what's inside</a>
      </p>
    </main>
  );
}
