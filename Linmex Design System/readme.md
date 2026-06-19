# Linmex Design System

> **Grupo Linmex** — desarrolladora inmobiliaria en Mérida, Yucatán. Proyectos basados en la rentabilidad, cada uno con un propósito preciso. Este sistema de diseño codifica su identidad para producir interfaces, materiales y prototipos bien marcados.

Tagline: **"Desarrollos Inmobiliarios con Rentabilidad y Propósito."** Posicionamiento: Ser el referente inmobiliario de Yucatán que **identifica oportunidades, ejecuta con excelencia y genera valor** para inversionistas, aliados, comunidades y actores de interés.

---

## Sources

This system was built from the brand's official materials:

- **`uploads/01 Manual de identidad gráfica corporativa Linmex.pdf`** — the 39-page corporate identity manual (concept, imagotipo, typography, colour, clear-space, misuse, applications). Logo geometry, colours and fonts were extracted from it.
- **`uploads/Captura de pantalla …png`** — a brand strategy slide showing the applied system (navy headings, orange sub-heads, line icons, light surface).
- Real application mockups extracted from the manual live in `assets/mockups/` (stationery, caps, hoarding, billboard) and informed tone & devices.

No codebase or Figma file was provided. The website UI kit and slide templates in this system are **brand-faithful constructions** built on the manual's foundations, not recreations of an existing product. They should be reviewed against any live Linmex web/print work when it becomes available.

Contact details (from the manual, for reference in mockups): `grupolinmex.com.mx · (+52) 999 345 28 93 · Calle 9 por 40 y 42 #279 H, Col. Campestre, C.P. 97120, Mérida, Yucatán · @linmex`

---

## The four communication axes

Each axis activates a distinct dimension of the brand; together they form a coherent narrative. Lean on the matching pillar when writing copy or choosing imagery:

| Axis | Idea | Content pillars |
| --- | --- | --- |
| **A · Liderazgo Visionario** | Entiende el mercado antes que los demás | Inteligencia Inmobiliaria · Anticipación de Tendencias |
| **B · Guía Confiable** | Reduce el riesgo con evidencia real | Experiencia Comprobada · Desarrollo de Proyectos |
| **C · Partner Clave** | Acompañamiento útil en cada etapa | Rentabilidad Absoluta · Soporte Especializado · Certeza Legal |
| **D · Construcción de Comunidad** | Impulsa el desarrollo regional | Generación de Valor · Responsabilidad Social |

---

## CONTENT FUNDAMENTALS

**Language.** Spanish (Mexico), with select English allowed in product/UI work. Confident, plain and direct — "de manera formal y directa," as the manual itself puts it.

**Voice — second person, informal "tú."** Advertising speaks straight to the investor: *"Crece tu inversión. Asegura tu patrimonio."* The brand is a partner, not a vendor; it says *"acompañamos," "desarrollamos," "generamos valor."*

**Headlines: imperative + benefit.** Short, two-beat, sentence case with a full stop. Strong verbs lead: *Crece. Asegura. Construye. Invierte.* Pair an emotional promise with a concrete one (*"Crece tu inversión. Asegura tu patrimonio."*).

**Section titles / eyebrows: ALL CAPS.** Navigational and structural labels are set in caps with wide tracking (Barlow Condensed) — e.g. `VISIÓN ESTRATÉGICA`, `DESARROLLOS`, `EJE · PARTNER CLAVE`. Sentence case for the headline beneath.

**Sub-heads in orange, title case.** A short orange phrase frequently introduces or labels a block (e.g. *"El Sabio Visionario"*), sitting between the caps eyebrow and the navy headline.

**Substance over adjectives.** Prefer evidence and numbers — *+18% de plusvalía, 12 desarrollos, 100% escriturado* — to vague praise. The manual's three goals anchor the message: desarrollar negocios exitosos, incrementar el patrimonio del cliente, contribuir al desarrollo de Yucatán.

**Vocabulary.** inversión, patrimonio, plusvalía, rentabilidad, desarrollo, certeza (legal), oportunidad, sustentable, integral, comunidad, Yucatán/Mérida.

**No emoji.** Never in headlines, UI or marketing. Iconography carries the visual shorthand instead.

**Casing recap:** Eyebrows & data → CAPS. Headlines → Sentence case. Body → sentence case. Wordmark → LINMEX (always caps). Prices/figures → Barlow Condensed.

---

## VISUAL FOUNDATIONS

**Two corporate colours, used with discipline.** Orange `#FF5100` ("Modernidad") is the single accent — it must stay the hero, so it is used sparingly and deliberately (CTAs, the symbol, key numbers, the diagonal device). Navy `#0F1820` ("Formalidad," Pantone 445 C) is the primary ink and the dark surface. Everything else is a cool neutral grey tuned toward the navy. Avoid introducing any third hue, and **never** use blue/purple gradients.

**Backgrounds.** Three modes: (1) light — `--surface-page` `#F6F6F4`, the default, calm and editorial; (2) dark — solid navy `#0F1820`; (3) orange — solid `#FF5100`, often carrying faint **diagonal tonal bands** (`--bg-orange-bands`), the brand's signature flat texture seen on the billboard. No photographic or blurred backgrounds behind text; no soft radial glows.

**The diagonal / banner device.** The imagotipo's forward-leaning cut is echoed across the system: angled orange banners (`--clip-banner`), the skewed accent rule under headings (`.accent-rule`), and the diagonal slicing of duotone photos (seen in the stationery). Angle leans forward (right), \~20°. Use it as the one recurring graphic gesture; don't over-apply.

**Typography.** Cairo does the heavy lifting — extrabold/black for headings (often tight tracking, sometimes caps), regular for body. Barlow Condensed handles eyebrows, labels, tabular figures and big numbers. Headlines are large and confident; body sits at 15–19px, line-height \~1.6. **The LINMEX wordmark is a drawn logotype, not a font** — always place the official logo asset (see below); never typeset “LINMEX” in Raleway or any other face. Raleway 800 is kept only as the nearest digital substitute for rare display moments where the asset can’t be used.

**Photography.** Aspirational and human: families, couples, lifestyle in warm natural light — plus architectural/development renders (tropical Yucatán greenery, palms). Two treatments: full colour, or **duotone** in orange or navy (grayscale × multiply). Renders skew warm and sunlit; people imagery is bright and optimistic. See `assets/imagery/` and the duotone helper in `tokens/effects.css`.

**Corners & geometry.** Sharp and architectural — radii stay tight (buttons/inputs `4px`, cards `10px`). The brand's confidence comes from crisp right angles and the single diagonal, not from roundness. Pills are used only for small tags.

**Borders & elevation.** Hairline `1px` borders in `--gray-200`. Shadows are soft, neutral and low — never coloured — except the deliberate `--shadow-orange` glow reserved for the primary CTA. Cards = white, hairline border, `--shadow-sm`.

**Motion.** Restrained and purposeful. `--ease-out` for entrances, 120–360ms. Hover = subtle lift (`translateY(-3px)`) + shadow deepening, or a darker orange. Press = darker still (`--orange-700`). Image zoom on property cards is slow (`--dur-slow`). No bounces, no infinite decorative loops.

**Hover / press states.** Primary button: hover → `#E84A08`, active → `#CF4205`. Ghost/soft: hover → `--orange-50` wash. Cards/listings: lift + deepen shadow. Focus: 3px orange ring (`--ring`), or white ring on dark.

**Transparency & blur.** Used minimally — duotone multiply overlays on photos, and translucent white text (`--text-on-dark-dim`) on dark/orange. No glassmorphism.

---

## ICONOGRAPHY

The manual does not ship a proprietary icon set, but the brand's applied materials (notably the strategy deck) use **thin, single-weight outline icons** in brand orange — a magnifier, telescope, handshake, etc. To match that style the system standardises on **[Lucide](https://lucide.dev)** (outline, \~1.75px stroke), loaded from CDN.

> ⚠️ **Substitution flagged:** Lucide is a close stylistic match chosen in the absence of an official Linmex icon set. If Linmex has (or commissions) a bespoke icon library, swap it in here.

Rules: outline only (no filled icons), stroke `1.75`, colour `--color-primary` on light or `currentColor` to inherit; size 18–34px. Icons label the content pillars (search → Inteligencia, telescope → Anticipación, handshake → Partner, building-2 → Desarrollos, trending-up → Rentabilidad, scale → Certeza Legal, map-pin → Yucatán). **No emoji, no Unicode glyphs as icons.**

```html
<script src="https://unpkg.com/lucide@0.453.0/dist/umd/lucide.min.js"></script>
<i data-lucide="building-2"></i><script>lucide.createIcons();</script>
```

---

## Fonts note

Cairo, Raleway and Barlow Condensed — the three genuine brand faces named in the manual — are all available on Google Fonts and are loaded via `@import` in `tokens/fonts.css` (no binaries to self-host). If Linmex licenses specific foundry cuts, replace the import with `@font-face` rules pointing at the binaries.

---

## INDEX — what's in this system

**Root**

- `styles.css` — the single entry point consumers link (an `@import` manifest).
- `readme.md` — this guide. · `SKILL.md` — Agent-Skill wrapper.

**`tokens/`** — foundations (`@import`ed by `styles.css`)

- `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `effects.css` · `base.css`

**`assets/`**

- `logo/` — **the full lockup is always the official PNG asset, never reconstructed:** `Linmex-Logo-Principal-Full Color.png` (orange symbol + navy wordmark — light surfaces), `Linmex-Logo-Blanco.png` (orange symbol + white wordmark — dark navy), `Linmex-Logo-Blanco-Solido.png` (all-white — use on orange or busy/dark photo). The **symbol alone** is `linmex-symbol.svg` (currentColor, exact official geometry, recolourable & infinitely scalable) plus matching PNGs `linmex-symbol-orange / -navy / -white.png` — for watermarks, favicons and decorative marks only. There is **no SVG of the full lockup** (the wordmark is drawn, not a font); reach for the PNG when you need symbol + wordmark together.
- `imagery/` — duotone family photos, development render/street.
- `mockups/` — stationery, caps, hoarding, billboard (brand applications).

**`components/`** — React primitives (namespace `window.LinmexDesignSystem_fdd2a9`)

- `core/` — `Button`, `Badge`, `Card`, `Input`, `Stat`
- `realestate/` — `PropertyCard`

**`guidelines/cards/`** — Design-System specimen cards (colours, type, spacing, brand, devices, imagery, iconography).

**`ui_kits/`**

- `website/` — Grupo Linmex marketing site (home, developments, detail, contact).

**`slides/`** — brand presentation templates (title, section, vision 3-up, quote, project showcase).

> **Namespace:** mount components in card/kit HTML with `const { Button } = window.LinmexDesignSystem_fdd2a9` after loading `_ds_bundle.js`.
