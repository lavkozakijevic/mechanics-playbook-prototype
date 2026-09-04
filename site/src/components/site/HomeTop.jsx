/* Website kit — top homepage sections. */
import React from "react";
import { Button } from "../ds/Button.jsx";
import { Badge } from "../ds/Badge.jsx";
import { Tag } from "../ds/Tag.jsx";
import { Card } from "../ds/Card.jsx";
import { AnnotatedScreenshot } from "../ds/AnnotatedScreenshot.jsx";

const CAT_LABEL = { retention: "Retention", monetization: "Monetization", social: "Social" };

function imgFallback(img) {
  if (img.src.match(/\.png$/)) img.src = img.src.replace(/\.png$/, ".webp");
  else if (img.src.match(/\.webp$/)) img.src = img.src.replace(/\.webp$/, ".jpg");
  else img.style.display = "none";
}

function LogoImg({ id }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) imgFallback(img);
  }, []);
  return (
    <img
      ref={ref}
      src={`/icons/${id}.png`}
      alt=""
      className="mcard__logo-img"
      onError={(e) => imgFallback(e.currentTarget)}
    />
  );
}

function logoInitials(name) {
  const words = name.replace(/[^a-zA-Z ]/g, "").split(" ").filter(Boolean);
  return (words.length >= 2 ? words[0][0] + words[1][0] : (words[0] ?? "??").slice(0, 2)).toUpperCase();
}

/** Hero: the promise, in the visitor's language, beside a self-sliding carousel
 *  of real mechanics drawn from the library. Exported so category landing pages
 *  can reuse the same layout with their own copy and CTAs. Pass `heroImage`
 *  instead of `carousel` to show one static, annotated case-study visual in
 *  the evidence slot rather than the sliding carousel. */
export function Hero({ carousel, heroImage, eyebrow, headline, sub, ctas, className = "" }) {
  const items = carousel || [];
  const loop = items.concat(items);
  const buttons = ctas || [
    { label: "Subscribe", href: "/subscribe/", variant: "primary" },
    { label: "Gamify your app", href: "/work-with-us/", variant: "secondary" },
  ];
  const sectionClass = ["hero", className].filter(Boolean).join(" ");
  // No eyebrow prop at all keeps the homepage's default kicker; an explicit
  // empty string (category pages that want no kicker line) suppresses it.
  const eyebrowText = eyebrow === undefined ? "Explore gamification options for your app" : eyebrow;
  return (
    <section className={sectionClass} id="top" aria-labelledby="hero-h">
      <div className="container hero__grid">
        <div className="hero__body">
          {eyebrowText && <div className="eyebrow hero__eyebrow">{eyebrowText}</div>}
          <h1 id="hero-h">{headline ?? "Power up your app with proven game mechanics"}</h1>
          <p className="hero__sub">{sub ?? "See how the best apps use gamification to turn everyday features into habits. We break down each mechanic, map how they fit together, and help your team apply the ones that suit your product."}</p>
          <div className="hero__cta">
            {buttons.map(({ label, variant, href, ...rest }) => (
              <Button key={label} variant={variant} size="lg" as="a" href={href} {...rest}>{label}</Button>
            ))}
          </div>
        </div>
        <div className="hero__evidence">
          {heroImage ? (
            <AnnotatedScreenshot
              src={heroImage.src}
              alt={heroImage.alt}
              appName={heroImage.appName}
              screenLabel={heroImage.screenLabel}
              className="hero__shot"
            />
          ) : (
            <div className="carousel" aria-label="Mechanics from the library">
              <div className="carousel__track">
                {loop.map((m, i) =>
                  m.logoOnly ? (
                    <article className="mcard mcard--logo" key={i} aria-hidden={i >= items.length ? "true" : undefined}>
                      <div className="mcard__shot mcard__logo-slot">
                        <span className="mcard__mark">{logoInitials(m.name)}</span>
                        <LogoImg id={m.id} />
                      </div>
                      <div className="mcard__body">
                        <p className="mcard__name">{m.name}</p>
                      </div>
                    </article>
                  ) : (
                    <article className="mcard mcard--logo" key={i} aria-hidden={i >= items.length ? "true" : undefined}>
                      <div className="mcard__shot mcard__logo-slot">
                        <span className="mcard__mark">{logoInitials(m.app)}</span>
                        <LogoImg id={m.appId} />
                      </div>
                      <div className="mcard__body">
                        <Tag category={m.cat} dot>{m.mechanic}</Tag>
                        <p className="mcard__title">{m.title}</p>
                      </div>
                    </article>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/** Library contents: what's inside, as three counted cards. */
function LibraryContents({ stats }) {
  const lib = [
    { count: stats.caseStudies, h: "Case studies", p: "Full breakdowns of how real apps build engagement, mechanic by mechanic.", link: "Browse case studies", href: "/case-studies/" },
    { count: stats.systems, h: "Systems", p: "How mechanics combine into the loops that keep users coming back.", link: "Explore systems", href: "/systems/" },
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
              <span style={{ font: "var(--type-data)", fontSize: 12, color: "var(--text-muted)" }}>{spotlight.name}</span>
            </div>
            <p>{spotlight.overview}</p>
            <Button variant="primary" size="lg" as="a" href={spotlight.href} trailingIcon={<i data-lucide="arrow-up-right" />}>Read the {spotlight.name} breakdown</Button>
          </div>
          <div className="spotlight__evidence">
            <AnnotatedScreenshot
              src={spotlight.imageSrc || undefined}
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
