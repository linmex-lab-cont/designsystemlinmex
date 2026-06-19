Linmex action button — sharp-cornered, Cairo-bold, brand orange by default; use for primary and secondary CTAs.

```jsx
<Button variant="primary" size="lg" iconRight={<ArrowRight />}>Agenda una cita</Button>
<Button variant="secondary">Ver desarrollos</Button>
<Button variant="outline">Descargar brochure</Button>
```

Variants: `primary` (orange, the default CTA), `secondary` (navy), `outline` (hairline, on light), `ghost` (text orange), `onDark` (white, for dark/orange sections). Sizes `sm | md | lg` (md = 44px hit target). `full` stretches to container width; `iconLeft` / `iconRight` accept any node (Lucide icons recommended).
