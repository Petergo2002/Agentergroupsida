# Project Plan: PRO SLIM UI

This plan details the visual and structural overhaul of AgenterGroup to achieve a "High-End Enterprise SaaS" aesthetic.

## 🟢 Phase 1: Foundations & Typography
- [ ] Update `Layout.astro` to import **Instrument Sans** and set it as the primary typeface.
- [ ] Set global typography weights to `500` (Medium) for headings and `400` (Regular) for body.
- [ ] Refine `global.css` to remove heavy border-glows and replace them with hairline dividers (`border-white/5`).

## 🔵 Phase 2: Asymmetric Hero & Core Components
- [ ] **Refactor Hero.astro**: Switch from centered layout to a 2-column asymmetric grid.
  - Text Left (60%), Dashboard Visual Right (40% with overflow).
- [ ] **Refactor Navbar.astro**: Remove floating capsules. Use a minimalist, full-width border-bottom divider.
- [ ] **Refactor FeatureGrid.astro**: Remove cards. Use a clean, magazine-style grid with hairline dividers between items.

## 🟡 Phase 3: Refined Sections & Conversions
- [ ] **Refactor KnowledgeBase.astro**: Clean up text placement and use higher contrast for hierarchy.
- [ ] **Refactor Pricing.astro**: Simplify table borders for a more 'technical/pro' look.
- [ ] **Refactor Footer.astro**: Fine-tune spacing and font weights for professional elegance.

## 🏁 Phase 4: Final Polish & Verification
- [ ] Run `npx astro check` to verify build integrity.
- [ ] Verify responsive behavior on Mobile/Desktop.
- [ ] Performance audit for font loading optimization.

---

### Agent Assignments
- **Orchestrator**: Lead the transformation.
- **Frontend Specialist**: Implement the "Instrument Sans" typography and grid refinements.
- **UI/UX Auditor**: Verify "no weird borders" and "slimness" before completion.

---

### Verification Checklist
- [ ] All headings use `font-medium` (500).
- [ ] Hero text is left-aligned.
- [ ] Boxed cards have been replaced by divider-based grid.
- [ ] No dominant "gaming" glows remain.
