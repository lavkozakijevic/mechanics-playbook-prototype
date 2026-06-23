/* Website kit — top homepage sections. */
import React from "react";
import { Button } from "../ds/Button.jsx";
import { Badge } from "../ds/Badge.jsx";
import { Tag } from "../ds/Tag.jsx";
import { Card } from "../ds/Card.jsx";
import { AnnotatedScreenshot } from "../ds/AnnotatedScreenshot.jsx";

const CAT_LABEL = { retention: "Retention", monetization: "Monetization", social: "Social" };

function logoInitials(name) {
  const words = name.replace(/[^a-zA-Z ]/g, "").split(" ").filter(Boolean);
  return (words.length >= 2 ? words[0][0] + words[1][0] : (words[0] ?? "??").slice(0, 2)).toUpperCase();
}

/** Hero: the promise, in the visitor's language, beside a self-sliding carousel
 *  of real mechanics drawn from the library. Exported so category landing pages
 *  can reuse the same layout with their own copy and CTAs. */
export function Hero({ carousel, eyebrow, headline, sub, ctas, className = "" }) {
  const items = carousel || [];
  const loop = items.concat(items);
  const buttons = ctas || [
    { label: "Subscribe", href: "/subscribe/", variant: "primary" },
    { label: "Gamify your app", href: "/work-with-us/", variant: "secondary" },
  ];
  const sectionClass = ["hero", className].filter(Boolean).join(" ");
  return (
    <section className={sectionClass} id="top" aria-labelledby="hero-h">
      <div className="container hero__grid">
        <div className="hero__body">
          <div className="eyebrow hero__eyebrow">{eyebrow ?? "Explore gamification options for your app"}</div>
          <h1 id="hero-h">{headline ?? "Power up your app with proven game mechanics"}</h1>
          <p className="hero__sub">{sub ?? "See how the best apps use gamification to turn everyday features into habits. We break down each mechanic, map how they fit together, and help your team apply the ones that suit your product."}</p>
          <div className="hero__cta">
            {buttons.map(({ label, variant, href, ...rest }) => (
              <Button key={label} variant={variant} size="lg" as="a" href={href} {...rest}>{label}</Button>
            ))}
          </div>
        </div>
        <div className="hero__evidence">
          <div className="carousel" aria-label="Mechanics from the library">
            <div className="carousel__track">
              {loop.map((m, i) =>
                m.logoOnly ? (
                  <article className="mcard mcard--logo" key={i} aria-hidden={i >= items.length ? "true" : undefined}>
                    <div className="mcard__shot mcard__logo-slot">
                      <span className="mcard__mark">{logoInitials(m.name)}</span>
                      <picture>
                        <source srcSet={`/icons/${m.id}.webp`} type="image/webp" />
                        <img
                          src={`/icons/${m.id}.png`}
                          alt=""
                          className="mcard__logo-img"
                          onError={(e) => { const p = e.currentTarget.parentElement; if (p) p.style.display = "none"; }}
                        />
                      </picture>
                    </div>
                    <div className="mcard__body">
                      <p className="mcard__name">{m.name}</p>
                    </div>
                  </article>
                ) : (
                  <article className="mcard" key={i} aria-hidden={i >= items.length ? "true" : undefined}>
                    <div className="mcard__shot">{m.app} · {m.screen}</div>
                    <div className="mcard__body">
                      <Tag category={m.cat} dot>{m.mechanic}</Tag>
                      <p className="mcard__title">{m.title}</p>
                    </div>
                  </article>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Library contents: what's inside, as three counted cards. */
function LibraryContents({ stats }) {
  const lib = [
    { count: stats.caseStudies, h: "Case studies", p: "Full breakdowns of how real apps build engagement, mechanic by mechanic.", link: "Browse case studies", href: "/case-studies/" },
    { count: stats.systems, h: "Systems", p: "How mechanics combine into the loops that keep players coming back.", link: "Explore systems", href: "/systems/" },
    { count: stats.cheatsheets, h: "Cheatsheets", p: "Practical implementation guides your team can build straight from.", link: "Open cheatsheets", href: "/cheatsheets/" },
  ];
  return (
    <section className="band" id="library" aria-labelledby="lib-contents-h">
      <div className="container">
        <div className="sec-head">
          <h2 className="sec-head__t" id="lib-contents-h">What's inside the library</h2>
        </div>
        <div className="libgrid">
          {lib.map((c) => (
            <Card key={c.h} className="libcard">
              <div className="libcard__count">{c.count}</div>
              <h3>{c.h}</h3>
              <p>{c.p}</p>
              <a className="libcard__link" href={c.href}>{c.link} <i data-lucide="arrow-right" /></a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Free case study spotlight: the one breakdown open to everyone. The
 *  transitional call to action, with a screenshot and a line describing it. */
function CaseStudySpotlight({ spotlight }) {
  return (
    <section className="band band--sunken" id="case-studies" aria-labelledby="spot-h">
      <div className="container">
        <div className="spotlight">
          <div className="spotlight__body">
            <div className="eyebrow">Free case study</div>
            <h2 id="spot-h">See exactly what a full breakdown looks like</h2>
            <div className="spotlight__meta">
              <Badge tone="accent" variant="solid">Free</Badge>
              <Tag category={spotlight.category} dot>{CAT_LABEL[spotlight.category]}</Tag>
              <span style={{ font: "var(--type-data)", fontSize: 12, color: "var(--text-muted)" }}>{spotlight.name} · {spotlight.date}</span>
            </div>
            <p>{spotlight.overview}</p>
            <Button variant="primary" size="lg" as="a" href={spotlight.href} trailingIcon={<i data-lucide="arrow-up-right" />}>Read the {spotlight.name} breakdown</Button>
          </div>
          <div className="spotlight__evidence">
            <AnnotatedScreenshot
              src={spotlight.imageSrc || undefined}
              appName={spotlight.name}
              screenLabel={spotlight.screenLabel}
              date={spotlight.date}
              alt={spotlight.imageAlt}
              caption={spotlight.keyInsight}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Top homepage sections, in page order. */
export function HomeTop({ carousel, stats, spotlight }) {
  return (
    <>
      <Hero carousel={carousel || []} />
      {stats && <LibraryContents stats={stats} />}
      {spotlight && <CaseStudySpotlight spotlight={spotlight} />}
    </>
  );
}
