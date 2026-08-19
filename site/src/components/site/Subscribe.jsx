import React, { useState, useEffect, useRef } from "react";
import { Button } from "../ds/Button.jsx";
import { Input } from "../ds/Input.jsx";

const CheckIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const UNLOCKS = [
  "Unlock all of the content.",
  "An in-depth gamification case study every week, 52 a year.",
  "Access to all examples of mechanic application.",
  "Access to all gamification systems across dozens of best-in-class apps.",
];

const VALUE = [
  {
    kicker: "Mechanics",
    title: "Every mechanic, broken down",
    body: "Each game mechanic in the library is explained on its own: what it is, when it works, what it needs to run, and how real apps have used it. You get a reference your product team can pull from when deciding what to build, instead of guessing from memory of games you have played.",
    band: "band--sheet",
  },
  {
    kicker: "Systems",
    title: "See how mechanics fit together",
    body: "Mechanics rarely work alone. The library maps how they connect inside real apps, so you can see the full system a feature sits in, not just the feature on its own, and copy the structure rather than the surface.",
    band: "",
  },
  {
    kicker: "Case studies",
    title: "A new teardown every week",
    body: "Each week we publish a close analysis of how a best-in-class app uses a mechanic, with the screens and the reasoning. Over a year that is fifty-two worked examples, building into a record of what actually ships and what actually works.",
    band: "band--sheet",
  },
];

/** The offer card — price, unlocks list, and the Subscribe button. Reused on
 *  the subscribe page and as the paywall on locked case study pages. */
/** The two plans. The tag is shown on any plan that carries one. */
const PLANS = [
  { id: "monthly", amount: "$25", per: "/m", cycle: "billed quarterly" },
  { id: "annual", amount: "$250", per: "/y", cycle: "billed annually", tag: "15% off" },
];

/** The offer card: both plans side by side over the shared unlocks list. Reused
 *  on the subscribe page and as the paywall on locked case study and system pages. */
export function SubscribeCard({ onSubscribe }) {
  return (
    <div className="sp-card">
      <div className="sp-plans">
        {PLANS.map((p) => (
          <div className="sp-plan" key={p.id}>
            {p.tag && <span className="sp-plan__tag">{p.tag}</span>}
            <div className="sp-price">
              <span className="sp-price__amt">{p.amount}<span className="sp-price__per">{p.per}</span></span>
              <span className="sp-price__cycle">{p.cycle}</span>
            </div>
            <Button variant="accent" size="lg" onClick={onSubscribe}>Subscribe</Button>
          </div>
        ))}
      </div>
      <div className="sp-card__rule" aria-hidden="true" />
      <ul className="sp-list">
        {UNLOCKS.map((u) => (
          <li key={u}><span className="sp-list__check" aria-hidden="true">{CheckIcon}</span>{u}</li>
        ))}
      </ul>
    </div>
  );
}

export function WaitlistModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const titleRef = useRef(null);

  useEffect(() => {
    titleRef.current?.focus();
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, category: "subscribe", source: "subscribe-page" }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="wl-backdrop" onClick={onClose} role="presentation">
      <div
        className="wl-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="wl-h"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="wl-close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {status === "success" ? (
          <div className="wl-success">
            <span className="wl-success__icon" aria-hidden="true">{CheckIcon}</span>
            <p className="wl-success__msg">You're on the list. We'll be in touch.</p>
          </div>
        ) : (
          <>
            <h2 id="wl-h" className="wl-title" ref={titleRef} tabIndex={-1}>
              We're wrapping up a few things, and you'll be the first to know when the library goes live
            </h2>
            <form className="wl-form" onSubmit={handleSubmit} noValidate>
              <Input
                label="Email address"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button variant="accent" size="lg" type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Sending…" : "Notify me"}
              </Button>
              {status === "error" && (
                <p className="wl-error" role="alert">Something went wrong — please try again.</p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}

/** Subscribe page body. */
export function SubscribePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main id="main">

      {modalOpen && <WaitlistModal onClose={() => setModalOpen(false)} />}

      {/* 1. The offer */}
      <section className="band sp-offer" aria-labelledby="offer-h">
        <div className="container container--narrow">
          <div className="eyebrow">Subscribe</div>
          <h1 className="sp-offer__h" id="offer-h">Get weekly gamification case studies and examples</h1>

          <SubscribeCard onSubscribe={() => setModalOpen(true)} />
        </div>
      </section>

      {/* 2. Value props */}
      {VALUE.map((v) => (
        <section className={"band sp-vp " + v.band} key={v.kicker} aria-labelledby={"vp-" + v.kicker}>
          <div className="container container--narrow">
            <div className="mech-section__kicker">{v.kicker}</div>
            <h2 className="mech-section__title" id={"vp-" + v.kicker}>{v.title}</h2>
            <div className="sp-vp__body">
              <p>{v.body}</p>
            </div>
          </div>
        </section>
      ))}

      {/* 3. Closing call */}
      <section className="band band--ink sp-close" aria-labelledby="close-h">
        <div className="container container--narrow">
          <h2 className="sp-close__h" id="close-h">Power up your app with proven game mechanics</h2>
          <Button variant="accent" size="lg" onClick={() => setModalOpen(true)}>Subscribe</Button>
        </div>
      </section>

    </main>
  );
}
