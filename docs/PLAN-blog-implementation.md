# Plan: Blogg-implementering för AgenterGroup

Detta dokument beskriver planen för att implementera en estetiskt tilltalande blogg på AgenterGroup.com, fullt integrerad med befintlig design och teknikstack (Astro + Tailwind CSS v4).

## 🎯 Mål
- Lägga till "Blogg" i navigeringen.
- Skapa en modern, "premium" blogg-sida (listing) och inläggs-sida.
- Implementera ett första blogginlägg (Markdown-baserat).
- Matcha den befintliga "glassmorphism" och mörka estetiken.

## 🛠 Teknikval
- **Astro Content Collections**: För typ-säker hantering av lokala Markdown-filer.
- **Tailwind CSS v4**: För styling, med utnyttjande av befintliga design-tokens.
- **Astro Image**: För optimerade bilder i blogginlägg.

---

## 📅 Fas 1: Struktur & Data
### [NEW] `src/content/config.ts`
- Definiera blogg-kollektionen med schema för titel, datum, beskrivning, bild och författare.

### [NEW] `src/content/blog/forsta-inlagget.md`
- Skapa det första inlägget på svenska om AI-agenter och framtidens kundtjänst.

### [MODIFY] `src/data/site.ts`
- Lägg till `/blogg` i navigationslänkarna.

---

## 🎨 Fas 2: Design & Komponenter
### [NEW] `src/components/BlogCard.astro`
- En vacker kort-komponent med hovringseffekter, glassmorphism och subtila animationer som matchar övriga sajten.

### [NEW] `src/pages/blogg/index.astro`
- Blogg-listning med en "Hero"-sektion och ett rutnät av inlägg.
- Utnyttja `data-scroll-scene` för att bibehålla den dynamiska känslan.

---

## 📝 Fas 3: Inläggs-sidan
### [NEW] `src/pages/blogg/[slug].astro`
- Dynamisk route för enskilda inlägg.
- Typografi-fokuserad design (Instrument Sans) med optimerad läsbarhet.
- Integrerad "Boka möte" CTA i slutet av inlägget.

---

## ✅ Verifiering & Checklista
- [ ] Navigationslänk fungerar på desktop och mobil.
- [ ] Blogg-listningen ser "super fin" ut och följer designsystemet.
- [ ] Inget "layout shift" vid laddning.
- [ ] SEO-taggar (titlar, beskrivningar) är korrekta för bloggen.
- [ ] Responsivitet testad från iPhone till Ultra-Wide monitorer.

---

## 💡 Öppna frågor till användaren
> [!IMPORTANT]
> 1. **Innehåll**: Har du ett specifikt ämne för det första inlägget, eller ska jag skriva något generellt om AI-agenter?
> 2. **Layout**: Föredrar du ett rutnät (grid) av kort eller en mer minimalistisk lista för inlägg-listningen?
> 3. **Hantering**: Är det okej att vi börjar med Markdown-filer (lokalt i koden), vilket är snabbast och mest stabilt för Astro?
