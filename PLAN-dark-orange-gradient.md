# Overview
The objective is to implement a cohesive, aesthetic gradient background across the entire website. This gradient will utilize the existing dark color palette and dark orange, creating a premium, dynamic, and visually unified experience throughout the site. The goal is to make the design feel "smart and nice" without being overpowering.

# Project Type
WEB

# Success Criteria
- A unified gradient background is applied globally across the website.
- The gradient seamlessly blends the existing dark theme colors with the specific dark orange brand color.
- The gradient enhances readability and does not clash with foreground text or components.
- The website aesthetic feels premium, high-end, and cohesive (no generic AI patterns).
- The transition between sections feels smooth and natural.

# Tech Stack
- Astro (Framework)
- CSS (Vanilla CSS in `global.css` or Tailwind if configured, but favoring CSS for custom gradients per guidelines)

# File Structure
- `src/styles/global.css` (Target for global gradient variables and classes)
- `src/layouts/Layout.astro` (Target for applying the global wrapper if necessary)
- `src/components/*.astro` (Check for hardcoded backgrounds that might need to be made transparent to reveal the gradient)

# Task Breakdown

## Task 1: Define Gradient Tokens
- **Agent**: `frontend-specialist`
- **Skill**: `frontend-design`, `high-end-visual-design`
- **Priority**: P1
- **Dependencies**: None
- **INPUT**: Existing dark and dark orange color values from `global.css`.
- **OUTPUT**: CSS variables in `global.css` defining the gradient (e.g., `--bg-gradient`).
- **VERIFY**: The CSS variables are present and syntactically correct in `global.css`.

## Task 2: Apply Global Gradient Background
- **Agent**: `frontend-specialist`
- **Skill**: `frontend-design`
- **Priority**: P1
- **Dependencies**: Task 1
- **INPUT**: The defined `--bg-gradient` variable.
- **OUTPUT**: Application of the gradient to the `body` or a main wrapper in `Layout.astro` or `global.css`.
- **VERIFY**: Inspecting the body element in the browser shows the gradient background applied globally.

## Task 3: Adjust Component Backgrounds for Transparency
- **Agent**: `frontend-specialist`
- **Skill**: `clean-code`
- **Priority**: P2
- **Dependencies**: Task 2
- **INPUT**: `Layout.astro` and individual section components (Hero, About, Pricing, etc.).
- **OUTPUT**: Removal or adjustment of opaque background colors in individual sections to allow the global gradient to show through seamlessly.
- **VERIFY**: Scrolling through the page reveals a continuous gradient without sudden blocky background color changes.

## Task 4: Add Subtle Noise/Texture (Optional but Recommended for Premium Feel)
- **Agent**: `frontend-specialist`
- **Skill**: `high-end-visual-design`
- **Priority**: P3
- **Dependencies**: Task 2
- **INPUT**: The global gradient background.
- **OUTPUT**: A subtle SVG noise overlay or CSS mix-blend-mode texture to make the gradient look more premium and less flat.
- **VERIFY**: The background has a subtle texture that prevents color banding and elevates the design.

# Phase X: Verification
- [ ] Lint: Verify CSS syntax is correct.
- [ ] Visual Audit: Ensure no text readability issues due to the new background.
- [ ] Component Audit: Ensure all sections blend well with the new background.
- [ ] Build: `npm run build` completes successfully.
- [ ] Rule Compliance: No purple/violet hex codes, no standard template layouts, Socratic gate respected.

## Open Socratic Questions for User
1. Do you want the gradient to be static, or would you like a subtle, slow-moving animated gradient to make the site feel more alive?
2. Are there any specific sections (e.g., the footer or navbar) that should remain completely solid dark rather than showing the gradient?
3. Should the orange be concentrated in certain areas (e.g., glowing around the top or corners), or spread evenly across the page flow?
