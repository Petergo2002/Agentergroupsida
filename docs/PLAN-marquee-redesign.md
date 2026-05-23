# PLAN-marquee-redesign

## Goal Description
Redesign the integrations marquee in the Hero section to look 100x more premium. Replace monochrome simple-icons with real, full-color brand logos. Upgrade the animation and styling so each integration looks like a high-end SaaS "pill" or "card" floating across the screen.

## User Review Required
> [!IMPORTANT]
> Please review the open questions below to ensure we get the perfect design before implementation.

## Open Questions
1. **Logo Source:** I plan to use a logo API (like Clearbit) to dynamically fetch the official, full-color logos for Gmail, Slack, HubSpot, etc. Is this acceptable, or do you have specific image files you want to upload?
2. **Pill Design:** Instead of just floating text, I plan to put each integration inside a beautiful white "pill" (rounded rectangle) with a subtle shadow, the colorful logo on the left, and the name on the right. Does this match your vision for a "100x better" design?
3. **Animation Speed:** Should the marquee scroll slowly and elegantly, or a bit faster to show more apps quickly?

## Proposed Changes
### Components
#### [MODIFY] `src/components/HeroSection.astro`
- **Integrations Data:** Update the `integrations` array to use full-color logo URLs (e.g., `https://logo.clearbit.com/slack.com`).
- **Marquee Styling:** 
  - Wrap the marquee track in a `flex gap-6` container.
  - Style each item as a premium glass/white pill: `flex items-center gap-3 px-6 py-3 bg-white border border-slate-100 shadow-sm rounded-full`.
  - Fix the CSS animation to ensure perfectly smooth, infinite scrolling without any jitter.
- **Visuals:** Add better fade gradients on the left and right edges so the pills smoothly emerge and disappear.

#### [MODIFY] `src/styles/global.css`
- Ensure the `@keyframes marquee` is perfectly calculated for a seamless loop based on the new gap spacing.

## Verification Plan
- Run the local server (`npm run dev`).
- Visually verify that all logos load in full color.
- Confirm the animation is perfectly smooth and the design feels incredibly high-end.
