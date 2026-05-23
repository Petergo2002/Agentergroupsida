# PLAN-ui-updates

## Goal Description
Implement UI refinements based on user feedback. This includes updating brand colors to a specific orange (`#DF5007`), updating the navbar to a dark theme (`#0C0C0C`) with the official transparent logo, adding a scrolling integrations marquee, and replacing the dashboard skeleton with the provided screenshot.

## User Review Required
> [!IMPORTANT]
> Please review the open questions below before we proceed with the implementation.

## Open Questions
1. **Marquee Styling:** Since the rest of the site is white/light, should the scrolling integrations bar have a light background (white/gray) or a dark background to match the new navbar?
2. **Navbar Transparency:** Should the `#0C0C0C` navbar be completely solid, or slightly translucent (glassmorphism) so the page scrolls nicely underneath it?
3. **Hero Image Shadow/Styling:** Should we keep the rounded corners and shadow around the new `Screenshot 2026-05-23 at 16.19.06.png` or display it exactly as it is without extra borders?

## Proposed Changes
### CSS Variables
#### [MODIFY] `src/styles/global.css`
- Change `--color-brand-blue` to `--color-brand-orange: #DF5007;` and update selection colors.

### Components
#### [MODIFY] `src/components/Navbar.astro`
- Update background to `#0C0C0C`.
- Change text colors to white/slate-200 to ensure contrast.
- Replace text logo with `<img src="/Logotransparant.svg" alt="Agentergroup Logo" class="h-8" />`.

#### [MODIFY] `src/components/HeroSection.astro`
- Remove the skeleton UI from the dashboard section.
- Insert `<img src="/Screenshot 2026-05-23 at 16.19.06.png" ... />`.
- Update the "Works with" section to be a scrolling marquee containing: Google Calendar, HubSpot, Outlook, Gmail, Google Ads, Google Drive. We will use a CSS animation (`animate-marquee`) to make it scroll infinitely.

#### [MODIFY] `src/components/StatsGrid.astro`, `ServicesGrid.astro`, `TargetAudience.astro`, `PricingPlans.astro`, `Footer.astro`
- Replace instances of `text-brand-blue`, `bg-brand-blue`, etc., with `brand-orange` (or whatever Tailwind class we map `#DF5007` to).

## Verification Plan
- Run `npm run dev` and visually confirm:
  - Navbar is dark and logo is visible.
  - Buttons and accents are `#DF5007`.
  - Integrations row scrolls horizontally infinitely.
  - The hero section displays the actual screenshot.
