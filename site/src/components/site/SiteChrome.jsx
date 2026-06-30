/* Website kit chrome: primary navigation, newsletter block, and footer. */
import React, { useState } from "react";
import { Button } from "../ds/Button.jsx";
import { Input } from "../ds/Input.jsx";

const LOGO = "/assets/logo/gamebiz-logo.svg";
const LOGO_INK = "/assets/logo/gamebiz-logo-ink.svg";

const NAV = [
  {
    label: "Library",
    href: "/mechanics/",
    children: [
      { label: "Mechanics", href: "/mechanics/", key: "mechanics", desc: "The core building blocks, with the psychology behind each one." },
      { label: "Systems", href: "/systems/", key: "systems", desc: "How mechanics combine into the loops that keep users coming back." },
      { label: "Cheatsheets", href: "/cheatsheets/", key: "cheatsheets", desc: "Practical guides for putting mechanics into your product." },
      { label: "Glossary", href: "/glossary/", key: "glossary", desc: "Plain-language definitions for every term we use." },
    ],
  },
  { label: "Case studies", href: "/case-studies/", key: "case-studies" },
  { label: "Work with us", href: "/work-with-us/", key: "work" },
];

function Caret() {
  return (
    <svg className="nav__caret" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

/** Primary site navigation. Sticky, paper, hairline rule. Three groups, two with
 *  dropdown menus (hover and keyboard-focus on desktop). Collapses to a drawer
 *  below 1024px. Subscribe is the one accent action. */
export function SiteNav({ current }) {
  const [open, setOpen] = useState(false);
  const nav = NAV;
  const isCurrent = (key) => (current && key && key === current ? "page" : undefined);
  const isCurrentItem = (item) =>
    item.key
      ? isCurrent(item.key)
      : item.children && item.children.some((c) => c.key === current)
        ? "page"
        : undefined;

  return (
    <>
      <header className="nav">
        <div className="container nav__in">
          <a className="nav__brand" href="/" aria-label="GameBiz home">
            <img className="nav__logo" src={LOGO} alt="GameBiz" width="100" height="22" />
          </a>

          <div className="nav__spacer" />

          <nav className="nav__links" aria-label="Primary">
            {nav.map((item) =>
              item.children ? (
                <div className="nav__item" key={item.label}>
                  <a className="nav__link nav__trigger" href={item.href} aria-haspopup="true" aria-current={isCurrentItem(item)}>
                    {item.label}<Caret />
                  </a>
                  <div className="nav__menu" role="menu" aria-label={item.label}>
                    {item.children.map((c) => (
                      <a key={c.label} role="menuitem" href={c.href}>
                        <span className="nav__menu-t">{c.label}</span>
                        <span className="nav__menu-d">{c.desc}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a key={item.label} className="nav__link" href={item.href} aria-current={isCurrent(item.key)}>{item.label}</a>
              )
            )}
          </nav>

          <div className="nav__actions">
            <Button variant="secondary" size="sm" as="a" href="/login/">Log in</Button>
            <Button variant="accent" size="sm" as="a" href="/subscribe/">Subscribe</Button>
          </div>

          <button
            className="nav__burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open
                ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
            </svg>
          </button>
        </div>
      </header>

      <div className="nav__drawer" data-open={open} role="dialog" aria-label="Menu" aria-hidden={!open}>
        {nav.map((item) => (
          <div className="nav__drawer-group" key={item.label}>
            <a className="nav__drawer-head" href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
            {item.children && (
              <div className="nav__drawer-sub">
                {item.children.map((c) => (
                  <a key={c.label} href={c.href} onClick={() => setOpen(false)}>
                    <span className="nav__menu-t">{c.label}</span>
                    <span className="nav__menu-d">{c.desc}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="nav__drawer-actions">
          <Button variant="secondary" size="sm" as="a" href="/login/" onClick={() => setOpen(false)}>Log in</Button>
          <Button variant="accent" size="sm" as="a" href="/subscribe/" onClick={() => setOpen(false)}>Subscribe</Button>
        </div>
      </div>
    </>
  );
}

/** Newsletter signup: one field, one sentence on what subscribers get. */
export function NewsletterBlock() {
  return (
    <section className="band band--sheet" aria-labelledby="newsletter-h">
      <div className="container">
        <div className="newsletter">
          <div>
            <h2 id="newsletter-h">Three new case studies every week</h2>
            <p>Each week we add three fresh app breakdowns to the library. We'll send them straight to your inbox, dated, with a line on what makes each one worth your time.</p>
          </div>
          <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
            <Input label="Email" size="lg" type="email" placeholder="you@company.com" aria-label="Email address" />
            <Button variant="primary" size="lg" type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  );
}

const FOOTER_LIBRARY = {
  h: "Library",
  links: [
    { label: "Mechanics", href: "/mechanics/" },
    { label: "Apps", href: "/case-studies/" },
    { label: "Systems", href: "/systems/" },
    { label: "Cheatsheets", href: "/cheatsheets/" },
    { label: "Glossary", href: "/glossary/" },
  ],
};
const FOOTER_ACCOUNT = {
  h: "Account",
  links: [
    { label: "Subscribe", href: "/subscribe/" },
    { label: "Log in", href: "/login/" },
  ],
};

/** Footer: all navigation, the one-liner, contact, freshness, copyright. The
 *  "Practice" column lists Work with us plus the category landing pages. */
export function SiteFooter({ lastUpdated, categories }) {
  const practice = {
    h: "Practice",
    links: [
      { label: "Work with us", href: "/work-with-us/" },
      ...(categories ?? []).map((c) => ({ label: c.name, href: `/${c.slug}/` })),
    ],
  };
  const footerCols = [FOOTER_LIBRARY, practice, FOOTER_ACCOUNT];
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <img className="footer__brand-logo" src={LOGO_INK} alt="GameBiz" width="120" height="24" />
            <p className="footer__desc">We study how the best apps and games keep their players, mechanic by mechanic, and help your team apply what fits your product, so your users stay, engage, and grow.</p>
          </div>
          <div className="footer__cols">
            {footerCols.map((c) => (
              <div className="footer__col" key={c.h}>
                <h4>{c.h}</h4>
                {c.links.map((l) => (
                  <a key={l.label} href={l.href}>{l.label}</a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="footer__bottom">
          <span className="footer__fresh"><span className="pip" />Updated weekly</span>
          <span className="footer__meta">
            <a className="footer__email" href="mailto:lav@gamebizconsulting.com">lav@gamebizconsulting.com</a>
            <span className="footer__sep" aria-hidden="true">·</span>
            © 2026 GameBiz Consulting
          </span>
        </div>
      </div>
    </footer>
  );
}
