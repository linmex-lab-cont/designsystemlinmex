---
name: linmex-design
description: Use this skill to generate well-branded interfaces and assets for Grupo Linmex (a real-estate developer in Mérida, Yucatán), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

# Linmex Design System

Read `readme.md` first — it holds the brand context, the four communication
axes, content fundamentals (voice, casing, vocabulary), visual foundations and
iconography rules. Then explore the other files.

## What's here
- `styles.css` — the single global entry point (`@import` manifest). Link this.
- `tokens/` — colors, typography, spacing, effects, base. CSS custom properties.
- `assets/` — `logo/` (symbol & wordmark SVG/PNG), `imagery/` (duotone photos,
  development renders), `mockups/` (stationery, caps, hoarding, billboard).
- `components/` — React primitives (`Button`, `Badge`, `Card`, `Input`, `Stat`,
  `PropertyCard`). Each has a `.d.ts` contract and a `.prompt.md` usage note.
- `guidelines/cards/` — foundation specimen cards.
- `ui_kits/website/` — the Grupo Linmex marketing site (home, developments,
  detail, contact) — a reference for composing the system.
- `slides/` — brand presentation templates (1280×720).

## How to use it
- **Visual artifacts** (slides, mocks, throwaway prototypes): copy the assets you
  need out of `assets/`, link `styles.css` (or inline the tokens), and write
  static HTML. Mirror `ui_kits/website/` and `slides/` for layout and tone.
- **Production code**: copy assets and read the rules here to design accurately
  in the brand. Mount components from the compiled bundle via
  `window.LinmexDesignSystem_fdd2a9` (see any `*.card.html`).

## Brand in one breath
Orange `#FF5100` is the single accent (used sparingly); navy `#0F1820` is the
ink and dark surface; everything else is cool grey. Cairo for headings & body,
Barlow Condensed for eyebrows/labels/numbers, Raleway only for the LINMEX
wordmark. Sharp corners, one forward-leaning diagonal device, soft neutral
shadows, Lucide outline icons in orange. Spanish (MX), informal "tú", imperative
benefit-led headlines (*"Crece tu inversión. Asegura tu patrimonio."*), CAPS for
eyebrows, no emoji.

If invoked without guidance, ask what the user wants to build, ask a few focused
questions, then act as an expert Linmex designer producing HTML artifacts or
production code as needed.
