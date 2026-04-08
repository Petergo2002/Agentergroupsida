# PLAN: Mobile Fix & Responsiveness

Fixing horizontal overflow, mobile navigation behavior, and chat widget interactions.

## Task Breakdown

### Phase 1: Global Layout Fixes
- Add `overflow-x: hidden` to root elements.
- Fix viewport meta tag if necessary.
- Ensure `noise-overlay` doesn't block interactions.

### Phase 2: Component Hardening (Mobile)
- **Hero**: Clip horizontal leaks from blurs.
- **Navbar**: Ensure `fixed` position works smoothly on mobile.
- **Pricing**: Adjust card width and padding for small screens.

### Phase 3: Widget Debugging
- Investigate the `toggle` logic.
- Ensure the 'X' button is reachable and correctly triggers the close event.
- Fix any mobile-specific z-index issues.

## Verification Checklist
- [ ] No horizontal scrollbar on mobile view.
- [ ] Navbar stays fixed at the top during scroll.
- [ ] Widget 'X' closes the chat on first click.
- [ ] No "blank space" on the right when zooming.
