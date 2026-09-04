import React, { useState, useEffect, useRef } from "react";
import { Button } from "../ds/Button.jsx";
import { Input } from "../ds/Input.jsx";

const STORAGE_KEY = "ei-dismissed";
const MIN_TIME_MS = 3000;

export function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState("idle");
  const titleRef = useRef(null);
  const readyRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const timer = setTimeout(() => { readyRef.current = true; }, MIN_TIME_MS);

    const onLeave = (e) => {
      if (!readyRef.current) return;
      if (e.clientY > 10) return;
      if (sessionStorage.getItem(STORAGE_KEY)) return;
      setVisible(true);
    };

    document.addEventListener("mouseleave", onLeave);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;
    titleRef.current?.focus();
    const onKey = (e) => { if (e.key === "Escape") dismiss(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [visible]);

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!consent) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, category: "newsletter", source: "exit-intent", consent: true }),
      });
      if (res.ok) {
        setStatus("success");
        sessionStorage.setItem(STORAGE_KEY, "1");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (!visible) return null;

  return (
    <div className="ei-backdrop" onClick={dismiss} role="presentation">
      <div
        className="ei-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ei-h"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="wl-close" onClick={dismiss} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {status === "success" ? (
          <div className="wl-success" style={{ padding: "8px 0 16px" }}>
            <p className="ei-title" id="ei-h" style={{ marginBottom: 8 }}>You're on the list.</p>
            <p style={{ color: "var(--text-secondary)", margin: 0 }}>We'll send the next batch of case studies your way.</p>
          </div>
        ) : (
          <>
            <div className="eyebrow" style={{ marginBottom: 10 }}>Before you go</div>
            <h2 className="ei-title" id="ei-h" ref={titleRef} tabIndex={-1}>
              Register for our newsletter and get fresh gamification case studies and app breakdowns
            </h2>
            <p className="ei-body">Each week we add three fresh breakdowns of how successful apps implement game mechanics. Get the most interesting ones straight into your inbox.</p>
            <form className="wl-form" onSubmit={handleSubmit}>
              <Input label="Email" size="lg" type="email" placeholder="you@company.com" aria-label="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <label className="newsletter__consent">
                <input type="checkbox" className="newsletter__check" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
                <span>I agree to receive occasional relevant emails from Appservatory about behavioral design and gamification.</span>
              </label>
              {status === "error" && <p className="wl-error">Something went wrong — please try again.</p>}
              <Button variant="primary" size="lg" type="submit" disabled={!consent || status === "loading"}>Sign up</Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
