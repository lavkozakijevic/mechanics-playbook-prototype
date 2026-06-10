# Gamification Service: Design System Brief

*GameBiz Consulting, June 2026. This document instructs the design of a comprehensive design system for the gamification service brand (Mechanics Playbook library, category reports, consulting deliverables, and marketing surfaces). Follow it exactly where it specifies. Where it leaves an axis free, make choices that serve the organizing idea, and state them.*

## Strategy context (read first, design from this)

We are an evidence-based gamification practice. We maintain a reference library of how the world's best apps and games actually build their mechanics, and we use it to find what will work in a client's app. Our buyers are CPOs, CMOs, senior PMs, and product-oriented founders. Their motive is conversion, retention, and engagement. Our enemy is "pointsification": leaderboards and points slapped onto apps without foundations. Our proof is the visible effort of the work: weekly analysis, system maps, requirements. Claims don't differentiate us. Evidence does.

The brand consequence: the category's default look is playful. Ours is serious, with the play living in the subject matter. Rigor in the substance, warmth in the telling.

## The organizing idea: the analyst's archive

Everything should look like the work of someone who studies things carefully. Part field guide, part intelligence report, part well-kept research library. Real-world anchors: The Economist's editorial discipline, Stripe Press's typographic care, a natural history museum's specimen labeling. Explicitly not: a SaaS landing page, a startup template, or anything resembling a game.

Test for every design decision: would a serious analyst's archive do this? If not, cut it.

## Core principles

**1. The evidence is the decoration.** Color, energy, and play come from the app screenshots and game material we present. The frame around them stays calm and neutral so the evidence pops. GameBiz never competes visually with the material it presents. Screenshots are specimens: present them carefully framed, consistently sized, and clearly labeled.

**2. Red is the analyst's pen.** The accent red (#F03636) behaves like a marker in the margins: annotations on screenshots, highlights, connection lines in system maps, the one underline that says "look here." It appears sparingly and always means "this is the point." It is never used for large surfaces, backgrounds, or decoration.

**3. System maps are the signature asset.** Diagrams showing how mechanics interconnect are our most ownable visual device. Define a strict, consistent diagram language: node shapes, line weights, connection style, label typography, and the red for relationships. The same diagram style must work in the library, reports, slide decks, and social posts. Someone seeing the diagram style in a LinkedIn feed should recognize it as ours before reading a word.

**4. Warmth lives in the writing and the type, not in visual noise.** The voice is observational, friendly, and sage-like. Captions are real sentences. Whitespace is generous. The design never shouts.

**5. Restraint is the pitch.** Our own surfaces stay un-gamified: no streaks, no points, no badges for subscribers. Knowing when mechanics belong and when they don't is literally what we sell.

## Tokens to build from

These exist and are confirmed. Extend them into a full token system.

- **Background:** #f5f4f0. It reads as paper, not pixels. Keep it.
- **Accent:** #F03636, used per principle 2 only.
- **Type:** Sora for headings (the humanity), Inter for body (the rigor and legibility). Add a third utility role if needed for data, captions, and diagram labels; choose something that disappears into function.
- **Layout:** 1100px max content width, 24px horizontal padding.

To define: a full neutral scale (ink colors on the paper background), semantic colors for the three mechanic categories (Retention, Monetization, Social) that stay quiet next to the red, spacing scale, type scale with explicit sizes and weights per role, border and radius rules, elevation rules (prefer flat or near-flat; an archive is not glossy).

## Components the system must cover

- Navigation and footer (GameBiz logo SVG already exists in nav bars)
- Mechanic card, app case study card, system map card, cheatsheet card
- The annotated screenshot: the standard way we present evidence, including modal viewer treatment, captions, and red annotation marks
- The system diagram language (principle 3), as a documented spec
- Filters and sidebar (category, product context, player type)
- Glossary entries
- Stat displays and data tables (source-labeled; we never show numbers without provenance)
- Pricing and report purchase surfaces
- Auth and gating treatment for the freemium layer (locked content should feel like a closed archive drawer, not a paywall pop-up)
- Newsletter and contact blocks
- Slide deck templates that inherit the same system (decks follow the four acts: Prologue, Current Level, Power Ups, Epilogue)

## UX principles

This is a reference tool. Optimize for the return visit, not the first impression.

- A subscriber should reach any mechanic in three clicks or fewer
- Fast, dense, filterable; density with legibility beats airy minimalism here
- No scroll-jacking, no hero animations, no entrance choreography
- Motion only where it explains: a hover that reveals an annotation, a diagram connection that highlights on focus
- Responsive to mobile, visible keyboard focus, reduced motion respected
- Interface copy follows the brand voice: plain verbs, sentence case, active voice, labels that say exactly what happens

## The forbidden list

Never use: trophy, badge, or medal iconography; neon gradients; mascots; 3D game assets; dark "gamer" aesthetics; confetti or celebration effects; stock photos of people; the word "fun" as a selling point; gamified elements on our own surfaces.

## Expected deliverable

A comprehensive design system document and token set covering everything above: foundations (color, type, spacing, layout, motion), the component library, the system diagram specification, and usage rules with do/don't examples. Where you make a choice this brief leaves open, name the choice and justify it against the organizing idea in one sentence.
