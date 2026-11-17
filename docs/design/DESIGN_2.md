# DESIGN.md — Mobile App Pitch Deck Design System

> Single source of truth for building a mobile-app pitch deck (web slide deck) with an AI coding agent.
> Read this whole file before writing any code. If a rule here conflicts with an assumption, this file wins.

## 0. Provenance and confidence (read first)

- **Reference:** Pitch.com "Mobile App Pitch Deck" template.
- **What could be verified:** the template page is client-rendered, so only its metadata was retrievable: it is a free, investor-oriented mobile-app pitch deck template built on pitch-deck best practices. Its individual slides, colors and fonts could NOT be read.
- **What the structure below is based on:** the slide order and content rules common to published mobile-app pitch deck templates (Sharpsheets 14-slide structure, PandaDoc, SlideTeam, Waveup 14-slide, Slidegenius key elements).
- **Visual tokens (colors, type, spacing) are PROPOSED DEFAULTS**, not values extracted from the Pitch template. Replace them in section 3 if you obtain the real template's values (export it to PDF/PPTX or share screenshots) and keep everything else.
- Tag used in this file: `[DEFAULT]` = proposed, safe to override. `[RULE]` = do not violate.

## 1. Purpose and principles

1. `[RULE]` One idea per slide. The slide title is a full-sentence claim, not a label ("Students waste 6 hrs/week on X", not "Problem").
2. `[RULE]` Text-light, visual-first. Max ~35 words of body text per slide excluding labels.
3. `[RULE]` The phone mockup is the hero of product slides. Show the app, not descriptions of it.
4. `[RULE]` Numbers beat adjectives. Every claim on market, traction or finance carries a figure and a source/period.
5. `[RULE]` Consistency over novelty: reuse the layouts in section 5; do not invent new ones per slide.
6. Avoid generic AI-slop: no purple-to-blue gradient defaults, no emoji as icons, no stock "glassmorphism" cards on every element, no centered-everything layouts, no lorem ipsum in final output.

## 2. Slide architecture (information design)

Target length: **12-15 slides** (hard range 10-20). Order is fixed; drop slides, don't reorder.

| #   | Slide                    | Layout (sec. 5)  | Must contain                                                           | Investor question answered |
| --- | ------------------------ | ---------------- | ---------------------------------------------------------------------- | -------------------------- |
| 1   | Title                    | `L-COVER`        | App name, one-line tagline, logo, presenter/contact, date              | What is this?              |
| 2   | Problem                  | `L-STATEMENT`    | The pain point, who has it, 1 stat                                     | Is the pain real?          |
| 3   | Solution                 | `L-SPLIT-PHONE`  | How the app solves it in one sentence, hero screenshot                 | Does this fix it?          |
| 4   | Value proposition        | `L-TRIPLE`       | 3 benefits (outcome-phrased, not features)                             | Why you?                   |
| 5   | Product walkthrough      | `L-PHONE-FLOW`   | 3-4 key screens in user order, caption per screen = what the user does | How does it work?          |
| 6   | Key features             | `L-FEATURE-GRID` | Max 6 features, icon + 5-word label                                    | What can it do?            |
| 7   | Market size              | `L-BIGNUM`       | TAM / SAM / SOM with sources                                           | Is it big enough?          |
| 8   | Business model           | `L-SPLIT-TEXT`   | How money is made, pricing / in-app purchase tiers                     | How does it earn?          |
| 9   | Traction / validation    | `L-METRICS`      | Downloads, MAU, retention, waitlist, revenue, whatever is real         | Is anyone using it?        |
| 10  | Competition              | `L-MATRIX`       | 2x2 or feature table, you vs 3-4 alternatives                          | Why will you win?          |
| 11  | Go-to-market             | `L-TIMELINE`     | Channels, first 1,000 users plan                                       | How will you grow?         |
| 12  | Roadmap                  | `L-TIMELINE`     | 3-4 milestones with dates                                              | What happens next?         |
| 13  | Financials / projections | `L-CHART`        | Revenue growth chart, key assumptions                                  | Where does it go?          |
| 14  | Team                     | `L-TEAM`         | Founders: photo, role, one credibility line                            | Can they execute?          |
| 15  | The ask                  | `L-ASK`          | Amount, use of funds (percent split), runway, contact, store badges    | What do you want?          |

Optional: "Find the app" slide with App Store / Google Play badges and QR code (merge into slide 15 if space is tight). Add a "Thank you / contact" slide only if the deck is presented live.

## 3. Design tokens `[DEFAULT]`

Implement as CSS custom properties on `:root`. Never hard-code hex values in components.

### 3.1 Color

```css
:root {
  /* Brand (replace with real brand) */
  --color-primary: #2f5bff;
  --color-primary-ink: #ffffff; /* text on primary */
  --color-accent: #ff7a45;

  /* Neutrals */
  --color-bg: #ffffff;
  --color-surface: #f5f6f8;
  --color-surface-alt: #e9ecf1;
  --color-border: #d9dde5;
  --color-text: #12151c;
  --color-text-muted: #5b6475;

  /* Semantic (charts, deltas) */
  --color-positive: #1f9d55;
  --color-negative: #d64545;

  /* Dark slide variant */
  --color-bg-dark: #0e1118;
  --color-text-on-dark: #f2f4f8;
}
```

Rules:

- `[RULE]` Text contrast >= 4.5:1 (large text >= 3:1).
- `[RULE]` Max 1 primary + 1 accent per slide; the rest neutral.
- `[RULE]` Alternate light and dark slides deliberately (cover, big number, ask = dark), not randomly.
- `[RULE]` Color is never the only carrier of meaning in charts (use labels or patterns).

### 3.2 Typography

- Display: a geometric or grotesque sans with personality (e.g. "Plus Jakarta Sans", "Space Grotesk"). Body: a neutral sans ("Inter"). Always include a system fallback stack.
- Scale is based on a 1920x1080 canvas, defined in `rem` after scaling (section 4):

| Token             | Size  | Weight | Line height | Use                      |
| ----------------- | ----- | ------ | ----------- | ------------------------ |
| `--text-hero`     | 120px | 700    | 1.0         | Big numbers, cover title |
| `--text-title`    | 64px  | 700    | 1.1         | Slide titles             |
| `--text-subtitle` | 36px  | 500    | 1.25        | Sub-claims               |
| `--text-body`     | 28px  | 400    | 1.4         | Body copy                |
| `--text-caption`  | 20px  | 500    | 1.3         | Labels, sources          |

- `[RULE]` Minimum text size on a slide: 20px at 1920 wide. Never smaller.
- `[RULE]` Max 2 font families, max 3 weights.
- `[RULE]` Titles: sentence case, max 2 lines, max ~12 words.

### 3.3 Spacing, radius, elevation

- Spacing scale (px at 1920): 8, 16, 24, 32, 48, 64, 96, 128. Use only these.
- Slide safe margin: 96px all sides. Content never touches the edge.
- Radius: `--radius-sm: 12px`, `--radius-md: 24px`, `--radius-lg: 40px` (phone frame uses lg).
- Elevation: at most one soft shadow style: `0 24px 60px rgba(18,21,28,.14)` for phone mockups only. Cards use borders, not shadows.

### 3.4 Motion `[DEFAULT]`

- Slide transition: 250ms ease-out fade or 12px upward translate. No spins, bounces or zoom.
- Within-slide: stagger entrance of list items 60ms apart, max 400ms total.
- `[RULE]` Respect `prefers-reduced-motion`: disable all non-essential motion.

## 4. Canvas and responsiveness

- Design canvas: **16:9, 1920x1080**. Scale the whole slide with a single CSS transform (`scale = min(vw/1920, vh/1080)`), letterboxed on the surrounding `--color-bg-dark`.
- Navigation: Left/Right arrows, Space, PageUp/PageDown, click zones, swipe on touch; Home/End jump; `F` toggles fullscreen; `?`/`H` shows shortcuts; URL hash `#/n` reflects the slide (use plain `#n` if the host restricts hash formats).
- Show a slim progress bar (4px, `--color-primary`) and slide counter `n / total` in caption size.
- `[RULE]` On portrait mobile, show a "rotate your device" hint, or fall back to a vertically stacked scroll layout with the same content order. Do not shrink text below legibility.
- Print: `@media print` renders one slide per page, light theme, no animation.

## 5. Layout library

Each layout is a reusable component. Grid is 12 columns, 32px gutter within the safe margin.

| Layout           | Structure                                                                                                                              |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `L-COVER`        | Dark. Left 7 cols: logo, title (`hero`), tagline. Right 5 cols: tilted or straight phone mockup bleeding off bottom edge.              |
| `L-STATEMENT`    | One large claim (`title`, up to 3 lines) left-aligned across 8 cols, supporting stat as `hero` number in accent on the right.          |
| `L-SPLIT-PHONE`  | Text 6 cols (title, subtitle, 2-3 short lines); phone mockup 5 cols, vertically centered.                                              |
| `L-TRIPLE`       | Title top; three equal cards (icon, 3-word heading, one sentence). Cards use `--color-surface`, `--radius-md`.                         |
| `L-PHONE-FLOW`   | 3-4 phone mockups in a row, connected by thin arrows; caption under each in `caption` size, numbered 1-4.                              |
| `L-FEATURE-GRID` | 3x2 grid; each cell icon + label + optional 1 line.                                                                                    |
| `L-BIGNUM`       | Dark. Concentric circles or nested blocks for TAM/SAM/SOM, big numbers in `hero`, source in `caption`.                                 |
| `L-SPLIT-TEXT`   | Two columns of text/pricing cards; highlight the recommended tier with a primary border.                                               |
| `L-METRICS`      | 3-4 KPI tiles (`hero` number, label, delta chip in semantic color), optional small sparkline.                                          |
| `L-MATRIX`       | Either a 2x2 positioning map with the product in the top-right quadrant in accent, or a table with check/cross icons (SVG, not emoji). |
| `L-TIMELINE`     | Horizontal line with 3-5 nodes; dates above, milestone below; current/next node filled with primary.                                   |
| `L-CHART`        | One chart max, 8 cols; assumptions list 4 cols. Axis labels with units, direct labels over legends.                                    |
| `L-TEAM`         | 2-4 circular portraits (160px), name, role, one credibility line each.                                                                 |
| `L-ASK`          | Dark. Amount as `hero`, use-of-funds as a horizontal stacked bar with percentages, contact + store badges + QR.                        |

## 6. Component specifications

### 6.1 Phone mockup (`<PhoneFrame>`)

- Props: `src` (screenshot), `alt` (required), `tilt` (-8 to 8 deg, default 0), `size` (`md` | `lg`).
- Aspect 9:19.5, outer radius `--radius-lg`, bezel 12px in `#0B0D12`, notch/dynamic island as a pill, soft shadow from 3.3.
- `[RULE]` Screenshots must be real app UI or high-fidelity placeholders in the brand palette. Never gray boxes in final output.
- Clip content with `overflow: hidden`; use `object-fit: cover; object-position: top`.

### 6.2 Card

- `--color-surface` background, 1px `--color-border`, `--radius-md`, padding 32px. No shadow.

### 6.3 Stat tile

- Number (`hero` or 80px), label (`caption`, muted), optional delta chip: 8px/16px padding, pill radius, semantic color at 12% opacity background with solid text.

### 6.4 Badge / chip

- Pill, `caption` size, 8px 16px padding, neutral or primary tint.

### 6.5 Store badges

- Use official App Store / Google Play badge artwork with required clear-space; link or QR to the real store page. Never recreate the badges by hand.

### 6.6 Icons

- One consistent SVG line set (2px stroke, rounded caps). Inline SVG or a single icon library; no emoji, no mixed styles.

### 6.7 Charts

- Inline SVG or a pinned-version library. Max 2 series, direct labels, units on axes, gridlines at 8% opacity, accent for the highlighted series, neutral for the rest.

## 7. Content rules

- Titles are claims; subtitles give evidence.
- Use plain language; most readers scan.
- Each stat shows: value, unit, period, source (e.g. "$4.2B, 2025, Statista"). Mark estimates as "est.".
- Competition: be honest; include real incumbents and "doing nothing" as a competitor.
- Ask slide: state amount, instrument/round if known, runway in months, and the % split of use of funds that sums to 100.
- Speaker notes (when supported): 2-4 sentences per slide, spoken voice, <= 45 seconds.
- Placeholder data must be visibly flagged in code with a `TODO(content)` comment and listed in the final report.

## 8. Accessibility

- Semantic structure: each slide is a `<section aria-label="Slide n of N: <title>">`; one `<h1>` per slide for the title.
- Full keyboard operation; visible focus ring (3px `--color-primary`, 2px offset).
- All images/mockups have meaningful `alt`; decorative graphics `alt=""` / `aria-hidden`.
- Announce slide changes with an `aria-live="polite"` region.
- Support light/dark system preference for the surrounding chrome; slides keep their designed theme.
- Touch targets >= 44px.

## 9. Technical implementation guidance (for the coding agent)

- Default stack: a single static `index.html` (HTML + CSS + vanilla JS), no build step, unless the project specifies otherwise. If a framework is requested, keep slides as data-driven components (`slides[]` config -> layout component).
- Data model:
  ```ts
  type Slide = {
    id: string;
    layout:
      | "cover"
      | "statement"
      | "splitPhone"
      | "triple"
      | "phoneFlow"
      | "featureGrid"
      | "bigNum"
      | "splitText"
      | "metrics"
      | "matrix"
      | "timeline"
      | "chart"
      | "team"
      | "ask";
    theme: "light" | "dark";
    title: string;
    content: Record<string, unknown>; // layout-specific
    notes?: string;
  };
  ```
- Keep content (copy, numbers) in one data file/section, separate from layout code, so the deck can be re-skinned or re-written without touching components.
- Fonts: load via Google Fonts with `display=swap`; always define fallbacks.
- Assets: inline or relative; keep total page weight small. Compress screenshots (WebP/AVIF with PNG fallback).
- No external network calls at runtime beyond fonts/CDN scripts pinned to exact versions.
- Persist nothing sensitive; browser storage only for non-critical convenience (e.g. last slide), wrapped in try/catch.

## 10. Do / Don't

| Do                                 | Don't                                 |
| ---------------------------------- | ------------------------------------- |
| Claim-style titles                 | One-word titles ("Problem")           |
| Real screenshots in phone frames   | Gray placeholder boxes in final       |
| 1 accent color, lots of whitespace | Rainbow palettes, gradient everything |
| Big numbers with sources           | Unsourced market stats                |
| Consistent icons and radii         | Mixed icon styles, random radii       |
| Dark slides for emphasis moments   | Dark/light alternating without reason |
| One chart per slide                | Dense dashboards                      |
| 12-15 slides                       | 25+ slides                            |

## 11. Agent workflow and definition of done

1. Read this file and the product/pitch content (product spec or brief). If content is missing, ask once, then use flagged placeholders.
2. Implement tokens (sec. 3), canvas/navigation (sec. 4), then layouts (sec. 5), then components (sec. 6), then fill slides in the order of sec. 2.
3. Self-review against the checklist:
   - [ ] Slide order and count match sec. 2 (12-15 slides)
   - [ ] Every title is a claim; no slide over ~35 body words
   - [ ] All colors/spacing come from tokens; contrast checked
   - [ ] Min font size 20px at 1920 wide
   - [ ] Phone mockups present on product slides with real or on-brand screens
   - [ ] Every stat has unit, period, source
   - [ ] Keyboard, swipe, fullscreen, progress, hash routing work
   - [ ] Reduced-motion and print styles present
   - [ ] No emoji icons, no lorem ipsum, no leftover TODO(content) unreported
4. Final report: list assumptions, placeholder content, and any token overrides.

## 12. Customization slots (fill per project)

```yaml
app_name: ""
tagline: ""
audience: "investors | accelerator | customers"
stage: "pre-seed | seed | series-a"
brand:
  primary: ""
  accent: ""
  display_font: ""
  body_font: ""
language: "en"
slides_to_drop: []
```

## 13. Sources consulted

- Pitch.com Mobile App Pitch Deck template page (metadata only retrievable)
- Sharpsheets, "14 Slides for your Mobile App Pitch Deck"
- PandaDoc, Mobile App Pitch Deck template (12-15 slides typical)
- SlideTeam, Mobile App Pitch Deck PPT (problem/solution, value prop, market, competition, business model, GTM, roadmap, projections, investment ask)
- Waveup, Free Pitch Deck Template: 14 slides (2026)
- Slidegenius, key elements of a mobile app pitch deck
