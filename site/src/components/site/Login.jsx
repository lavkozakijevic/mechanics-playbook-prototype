/* Website kit — Log in page. Minimal to the point of austerity: email + password,
   a Log in button, a forgot-password link, and one quiet line for non-members.
   No imagery, no marketing copy. Email-based entry only (no third-party login).
   Converted from the design bundle. The form is cosmetic until the paywall
   project ships authentication (migration brief: build the field, not the wall). */
import React from "react";
import { Button } from "../ds/Button.jsx";
import { Input } from "../ds/Input.jsx";

const LOGO_INK = "/assets/logo/gamebiz-logo-ink.svg";

const MailIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const LockIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);

/** Log in page — a returning subscriber coming back to a tool. */
export function LoginPage() {
  return (
    <main className="login" id="main">
      <div className="login__card">
        <a className="login__brand" href="/" aria-label="GameBiz home">
          <img src={LOGO_INK} alt="GameBiz" width="124" height="25" />
        </a>

        <form className="login__form" onSubmit={(e) => e.preventDefault()}>
          <Input label="Email" size="lg" type="email" required placeholder="you@company.com" leadingIcon={MailIcon} autoComplete="email" />
          <div className="login__pw">
            <Input label="Password" size="lg" type="password" required placeholder="Your password" leadingIcon={LockIcon} autoComplete="current-password" />
            <a className="login__forgot" href="#reset">Forgot password</a>
          </div>
          <Button variant="primary" size="lg" type="submit" className="login__submit">Log in</Button>
        </form>
      </div>

      <p className="login__alt">
        Not a subscriber yet? <a href="/subscribe/">See what's inside</a>
      </p>
    </main>
  );
}
