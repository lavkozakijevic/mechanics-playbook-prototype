/* Website kit — Subscribe page. Friction-free entry to the library, with the free
   tier explained honestly. Hero + placeholder checkout moment (no transaction),
   what's inside with live counts, an honest free/full comparison (no prices, no
   decoy, no "most popular"), the weekly cadence as pure evidence, and one line of
   reassurance. Converted from the design bundle; counts and the cadence feed
   arrive as props computed from the content collections. */
import React, { useState, useEffect } from "react";
import { Button } from "../ds/Button.jsx";
import { Input } from "../ds/Input.jsx";

const CheckIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const CloseIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const MailIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const FREE = [
  "The Royal Match case study, in full",
  "A preview of every other case study, mechanic, and system map",
  "The opening of each cheatsheet",
  "The complete glossary",
];
const FULL = [
  "Every case study, mechanic, system map, and cheatsheet, in full",
  "Every system map, complete with its connections and requirements",
  "New app breakdowns added every week",
  "The complete glossary",
];

/* The placeholder checkout moment. A calm, dismissible sheet — the start of a
   subscription, designed before payments exist. Never traps; Esc or the scrim
   closes it. */
function CheckoutSheet({ open, onClose }) {
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  useEffect(() => { if (!open) setDone(false); }, [open]);
  if (!open) return null;
  return (
    <div className="sub-sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-h" onMouseDown={onClose}>
      <div className="sub-sheet__card" onMouseDown={(e) => e.stopPropagation()}>
        <button className="sub-sheet__close" onClick={onClose} aria-label="Close">{CloseIcon}</button>
        {!done ? (
          <React.Fragment>
            <div className="eyebrow">Start your subscription</div>
            <h2 id="sheet-h" className="sub-sheet__title">Save your place in the library</h2>
            <p className="sub-sheet__p">Checkout opens soon. Leave your email and we'll set up your account the moment it's ready — full access from your first sign-in.</p>
            <form className="sub-sheet__form" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
              <Input label="Email" size="lg" type="email" required placeholder="you@company.com" leadingIcon={MailIcon} aria-label="Email address" />
              <Button variant="accent" size="lg" type="submit">Continue</Button>
            </form>
          </React.Fragment>
        ) : (
          <div className="sub-sheet__done">
            <span className="sub-sheet__check" aria-hidden="true">{CheckIcon}</span>
            <h2 className="sub-sheet__title">You're on the list</h2>
            <p className="sub-sheet__p">We'll email you the moment checkout opens. Until then, the Royal Match case study and every preview are yours to read.</p>
            <Button variant="secondary" size="lg" as="a" href="/case-studies/royal-match/">Read the free case study</Button>
          </div>
        )}
      </div>
    </div>
  );
}

/** Subscribe page body. `inside` = the five live counts; `newThisWeek` = the
 *  latest dated additions, both computed from content at build time. */
export function SubscribePage({ inside, newThisWeek }) {
  const [open, setOpen] = useState(false);
  const openSheet = (e) => { if (e) e.preventDefault(); setOpen(true); };

  return (
    <main id="main">
      {/* 1. Hero */}
      <section className="sub-hero" aria-labelledby="sub-h">
        <div className="container">
          <div className="sub-hero__in">
            <div className="eyebrow">The library</div>
            <h1 id="sub-h">The reference library for how the best apps and games build engagement.</h1>
            <p className="sub-hero__sub">Full access to every case study, mechanic, system map, and cheatsheet. New apps added every week.</p>
            <div className="sub-hero__cta">
              <Button variant="accent" size="lg" as="a" href="#start" onClick={openSheet}>Subscribe</Button>
              <a className="sub-hero__alt" href="/login/">Already a subscriber? Log in</a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What's inside */}
      <section className="band band--sheet" aria-labelledby="inside-h">
        <div className="container">
          <div className="mech-section__kicker">What's inside</div>
          <h2 className="mech-section__title" id="inside-h">Five kinds of reference, one library</h2>
          <div className="sub-inside">
            {inside.map((c) => (
              <div className="sub-inside__card" key={c.label}>
                <span className="sub-inside__count">{c.count}</span>
                <span className="sub-inside__label">{c.label}</span>
                <span className="sub-inside__desc">{c.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Free and full, side by side */}
      <section className="band" aria-labelledby="tiers-h">
        <div className="container">
          <div className="mech-section__kicker">Free and full</div>
          <h2 className="mech-section__title" id="tiers-h">What you can read, either way</h2>
          <div className="sub-tiers">
            <div className="sub-tier">
              <div className="sub-tier__head">
                <h3 className="sub-tier__name">Free</h3>
                <p className="sub-tier__note">No account needed to start reading.</p>
              </div>
              <ul className="sub-tier__list">
                {FREE.map((f) => (
                  <li key={f}><span className="sub-tier__check" aria-hidden="true">{CheckIcon}</span>{f}</li>
                ))}
              </ul>
              <Button variant="secondary" size="lg" as="a" href="/case-studies/royal-match/">Read the free case study</Button>
            </div>

            <div className="sub-tier sub-tier--full">
              <div className="sub-tier__head">
                <h3 className="sub-tier__name">Full access</h3>
                <p className="sub-tier__note">Everything, plus every new addition.</p>
              </div>
              <ul className="sub-tier__list">
                {FULL.map((f) => (
                  <li key={f}><span className="sub-tier__check" aria-hidden="true">{CheckIcon}</span>{f}</li>
                ))}
              </ul>
              <Button variant="accent" size="lg" as="a" href="#start" onClick={openSheet}>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The cadence — pure evidence */}
      <section className="band band--sunken" aria-labelledby="cadence-h">
        <div className="container">
          <div className="mech-section__kicker">The cadence</div>
          <h2 className="mech-section__title" id="cadence-h">New this week</h2>
          <div className="feed sub-feed">
            {newThisWeek.map((it) => (
              <div className="feed__row" key={it.title}>
                <span className="feed__main"><span className="feed__title">{it.title}</span></span>
                <span className="feed__date">{it.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. One-line reassurance */}
      <section className="sub-reassure">
        <div className="container">
          <p>Cancel anytime, keep what you've learned.</p>
        </div>
      </section>

      <CheckoutSheet open={open} onClose={() => setOpen(false)} />
    </main>
  );
}
