# PLAN-landing-page-redesign

## Goal Description
Redesign the Agentergroup landing page completely to match the provided modern SaaS dashboard UI screenshot, using the new clean, blue-and-white aesthetic. We will remove extraneous pages and maintain only the English and Swedish (SV) landing pages.

## User Review Required
> [!IMPORTANT]
> Please review the open questions below before we proceed with the implementation.

## Open Questions
1. **Copy & Content:** Do we have the exact Swedish and English copy ready for the new sections (Hero, Stats, Services, Audience, Pricing), or should I create placeholders based on the current website's context?
2. **Branding Elements:** What are the exact primary colors (e.g., the specific blue hex code) and typography (e.g., Inter, Roboto) you want to use for the "Agentergroup" brand compared to the screenshot?
3. **Dashboard Image Placeholder:** Since you will add the dashboard image later, what dimensions or aspect ratio should I reserve in the hero section to ensure the layout remains stable?

## Proposed Changes
### Pages & Routing
#### [DELETE] `src/pages/blog` (directory and contents)
#### [DELETE] `src/pages/websites-with-ai-chatbot.astro`
#### [MODIFY] `src/pages/index.astro` (English Landing Page)
#### [MODIFY] `src/pages/sv/index.astro` (Swedish Landing Page)

### Components (New Design System)
#### [NEW] `src/components/Header.astro`
#### [NEW] `src/components/HeroSection.astro`
#### [NEW] `src/components/StatsGrid.astro`
#### [NEW] `src/components/ServicesGrid.astro`
#### [NEW] `src/components/TargetAudience.astro`
#### [NEW] `src/components/PricingPlans.astro`
#### [NEW] `src/components/Footer.astro`

## Verification Plan
### Automated Tests
- Build verification using `npm run build` or `npm run check`.
- Linting using `npm run check`.

### Manual Verification
- Start dev server via `npm run dev`.
- Visually verify the English and Swedish landing pages match the requested design structure and are responsive.
- Confirm all other routes result in 404s (as intended).
