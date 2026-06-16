/* Website kit — top homepage sections. */
import React from "react";
import { Button } from "../ds/Button.jsx";
import { Badge } from "../ds/Badge.jsx";
import { Tag } from "../ds/Tag.jsx";
import { Card } from "../ds/Card.jsx";
import { AnnotatedScreenshot } from "../ds/AnnotatedScreenshot.jsx";

const CAT_LABEL = { retention: "Retention", monetization: "Monetization", social: "Social" };

/** Hero: the promise, in the visitor's language, beside a self-sliding carousel
 *  of real mechanics drawn from the library. Exported so category landing pages
 *  can reuse the same layout with their own copy and CTAs. */
export function Hero({ carousel, eyebrow, headline, sub, ctas, className = "" }) {
  const items = carousel || [];
  const loop = items.concat(items);
  const buttons = ctas || [
    { label: "Explore the library", href: "/mechanics/", variant: "primary" },
    { label: "Work with us", href: "/work-with-us/", variant: "secondary" },
  ];
  const sectionClass = ["hero", className].filter(Boolean).join(" ");
  return (
    <section className={sectionClass} id="top" aria-labelledby="hero-h">
      <div className="container hero__grid">
        <div className="hero__body">
          <div className="eyebrow hero__eyebrow">{eyebrow ?? "Explore gamification options for your app"}</div>
          <h1 id="hero-h">{headline ?? "Power up your app with proven game mechanics"}</h1>
          <p className="hero__sub">{sub ?? "See how the best apps and games turn everyday features into habits. We break down each mechanic, map how they fit together, and help your team apply the ones that suit your product."}</p>
          <div className="hero__cta">
            {buttons.map((c) => (
              <Button key={c.label} variant={c.variant} size="lg" as="a" href={c.href}>{c.label}</Button>
            ))}
          </div>
        </div>
        <div className="hero__evidence">
          <div className="carousel" aria-label="Mechanics from the library">
            <div className="carousel__track">
              {loop.map((m, i) => (
                <article className="mcard" key={i} aria-hidden={i >= items.length ? "true" : undefined}>
                  <div className="mcard__shot">{m.app} · {m.screen}</div>
                  <div className="mcard__body">
                    <Tag category={m.cat} dot>{m.mechanic}</Tag>
                    <p className="mcard__title">{m.title}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Logo strip: a curated sample of the apps studied, as 60×60 marks.
 *  Real app icons where they exist (v44 behaviour), initials otherwise. */
function LogoStrip({ apps }) {
  return (
    <section className="band band--tight band--sheet" aria-label="Apps in the library">
      <div className="container">
        <p className="logostrip__lead">A few of the apps in the library</p>
        <div className="logostrip">
          {apps.map((a) => (
            <span className="applogo" key={a.name} role="img" aria-label={a.name} title={a.name}>
              {a.iconSrc
                ? <img src={a.iconSrc} alt="" width="60" height="60" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit", display: "block" }} />
                : a.mark}
            </span>
          ))}
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
export function HomeTop({ carousel, logoApps, stats, spotlight }) {
  return (
    <>
      <Hero carousel={carousel || []} />
      {logoApps?.length > 0 && <LogoStrip apps={logoApps} />}
      {stats && <LibraryContents stats={stats} />}
      {spotlight && <CaseStudySpotlight spotlight={spotlight} />}
    </>
  );
}
