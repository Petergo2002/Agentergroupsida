# Project Documentation

## Overview

This repository contains a single-page landing site for AgenterGroup. It presents the product as an AI frontdesk platform for customer conversations, lead qualification, and meeting booking. The implementation is intentionally lightweight: static Astro components, Tailwind CSS 4 utilities, and minimal browser scripting.

## Goals

- Present a premium Swedish-language landing page
- Communicate product value quickly
- Drive users toward a contact or demo action
- Keep the codebase simple enough to iterate on design and copy

## Tech Stack

- Astro `^6.1.3`
- Tailwind CSS `^4.2.2`
- `@tailwindcss/vite` for Tailwind integration
- `@astrojs/check` and TypeScript for validation

## File Map

### Root

- `astro.config.mjs`: Astro config with the Tailwind Vite plugin
- `package.json`: scripts and dependencies
- `README.md`: quick project overview

### `src/pages`

- `index.astro`: assembles the full landing page from shared components

### `src/layouts`

- `Layout.astro`: shared HTML shell, metadata, font loading, background glows, and global slot wrapper

### `src/components`

- `Navbar.astro`: sticky navigation with internal anchors and CTA links
- `Hero.astro`: hero copy, badge, CTA row, and dashboard visual
- `DashboardPreview.astro`: CSS-only dashboard mockup used in the hero
- `FeatureGrid.astro`: reusable feature-section renderer
- `IntegrationMarquee.astro`: moving integrations strip
- `KnowledgeBase.astro`: training-data and RAG value section
- `Pricing.astro`: plan cards and CTA routing
- `CTA.astro`: final conversion section
- `Footer.astro`: company summary, footer navigation, and contact/legal links

### `src/styles`

- `global.css`: Tailwind import, theme tokens, utility classes, and animation rules

### `docs`

- `PLAN.md`: current status, completed work, and next recommended steps
- `PROJECT.md`: this file

## Rendering Model

The site is statically rendered. There is no backend code, no API integration, and no CMS or database wiring in the current implementation. All content is currently defined inline in Astro components.

## Content Model

The home page uses simple in-file arrays for repeated content:

- `whatIsAgentItems` in `src/pages/index.astro`
- `platformFeatures` in `src/pages/index.astro`
- `plans` in `src/components/Pricing.astro`
- `integrations` in `src/components/IntegrationMarquee.astro`

This keeps iteration simple, but it also means copy changes require code edits. If content editing becomes frequent, move these structures into a local content module or Astro Content Collections.

## Styling System

The project uses Tailwind CSS 4 with a small custom token layer:

- `--color-brand-orange`
- `--color-brand-dark`
- `--color-glow-primary`
- `--color-glow-secondary`

Custom global classes include:

- `.glass`: glassmorphism card surface
- `.noise-overlay`: full-screen texture overlay
- `.animate-fade-up`: shared entrance animation
- `.delay-*`: manual animation delays

Reduced-motion handling is included so users who prefer less motion do not get forced animations.

## Navigation and Anchors

Working section IDs:

- `#hero`
- `#funktioner`
- `#plattform`
- `#prissattning`
- `#cta`
- `#om-oss`

These anchors are used by the navbar and footer. Dead `#` placeholders were removed where a meaningful internal or contact target existed.

## SEO and Metadata

`Layout.astro` provides:

- page title
- meta description
- Open Graph title and description
- Swedish locale metadata
- theme color

Current metadata is generic for the landing page. If the site expands beyond one page, move metadata into per-page props or a shared SEO helper.

## Accessibility Notes

Current improvements in the codebase:

- internal navigation now points to real sections
- legal/contact links no longer use dead placeholders
- reduced-motion support is present
- the navbar scroll script now targets a stable element selector

Remaining work worth considering:

- add visible focus states tailored to the design system
- replace text placeholders like `Mail`, `Demo`, and `Pris` with icons or fuller labels if brand direction becomes more formal
- review color contrast once final copy and palette are locked

## Development Workflow

Install dependencies:

```sh
npm install
```

Run the dev server:

```sh
npm run dev
```

Build production output:

```sh
npm run build
```

Run Astro checks:

```sh
npm run check
```

Preview the production build locally:

```sh
npm run preview
```

## Known Limitations

- No real login flow exists yet
- CTA actions currently route to contact mail or internal anchors, not a live product flow
- No analytics, forms, or backend integrations are connected
- No legal pages exist yet; footer links route through contact mail for now
- Content is hard-coded rather than managed through structured content files

## Recommended Next Steps

1. Replace mailto CTA flows with a real booking or lead form.
2. Add analytics and conversion tracking.
3. Add dedicated legal pages if the site will go live publicly.
4. Extract content into reusable data files or content collections.
5. Add favicon, social image, and brand metadata aligned with production assets.
