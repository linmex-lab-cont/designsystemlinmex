# Marcas de Grupo LINMEX para Studio y Linx

Recursos oficiales de las cuatro marcas: logos en vector y PNG, colores, tipografías, temas
listos para el editor y piezas de referencia. Studio los lee de aquí y Linx debe tomarlos de
esta misma carpeta (copia idéntica en el design system, sin lo marcado como privado).

## Jerarquía

```
LINMEX (marca madre)
├── Capitalia — complejo urbano en Motul, Yucatán
│   └── seis distritos: Recoleta (en comercialización, Etapa 1), Providencia,
│       Carrasco, Miraflores, Marbella, Condado
└── Soletta — lotes frente al mar: Chicxulub y Sisal
```

- LINMEX es la marca madre. Capitalia y Soletta tienen estética propia y heredan la voz y los
  claims de LINMEX.
- Recoleta es el primer distrito de Capitalia. **Nunca se presenta como desarrollo aparte**:
  lleva el logo de Capitalia al pie.
- Las piezas comerciales llevan el respaldo «Un desarrollo de Grupo LINMEX» (o el logo de
  LINMEX al pie, según la marca: ver `respaldo` en cada `marca.json`).

## Orden

```
marcas/
  LEEME.md                    este archivo
  PROPUESTA-PLANTILLAS.md     qué plantillas construir por marca y qué piezas actuales sirven
  <clave>/
    marca.json                identidad completa (esquema abajo)
    logos/                    SVG + PNG de 2000 px con fondo transparente, mismo nombre
    fuentes/                  fuentes.css (@font-face de los archivos + respaldo de Google) y los
                              archivos de fuente con licencia (solo en el repo privado)
    referencias/              PNG de las fuentes: páginas del brandbook o manual, piezas reales
    ilustraciones/            ilustraciones aprobadas de la marca (solo Soletta)
```

Claves: `linmex`, `capitalia`, `recoleta`, `soletta`.

## Logos

Todos los SVG salen del vector original (brandbook, .ai o el SVG oficial de LINMEX), sin
reconstruir formas: las variantes de color solo cambian el relleno. No llevan clases ni
`<style>`, así que se pueden incrustar varios en la misma página sin que se pisen.

Cada SVG tiene al lado su PNG de 2000 px de ancho con transparencia (`logosPng` en el JSON).

Claves de `logos` comunes a todas las marcas:

| Clave | Qué es |
|---|---|
| `color` | Logo principal para fondo claro |
| `inverso` | Versión oficial para fondo oscuro, si la marca la tiene (LINMEX: símbolo naranja y palabra blanca; Capitalia y Recoleta: todo crema). Si falta, usar `blanco` |
| `blanco` | Todo blanco #FFFFFF, para foto o color saturado |
| `mono` | Todo negro #000000 |
| `simbolo`, `simboloBlanco` | El símbolo solo |
| `palabra`, `palabraBlanco` | La palabra sola (LINMEX y Soletta; en Capitalia ver la nota de su JSON) |

Equivalencia con Studio para LINMEX: `corporativa` = `color`, `blanco` («Texto blanco») =
`inverso`, `solido` = `blanco`.

`logos.zonaSegura` describe la regla con palabras; `zonaSeguraFactor` la da como fracción del
alto del logo (margen = factor × alto). `minimoPx` es el ancho mínimo en pantalla; `null`
cuando la fuente no lo dice.

## marca.json

```json
{
  "version": 1,
  "clave": "capitalia",
  "nombre": "Capitalia",
  "padre": "linmex",
  "linaje": ["linmex"],
  "claim": "…",
  "frases": ["…"],
  "voz": ["…"],
  "dominio": "capitalia.mx",
  "colores": {
    "primario": "#311E34", "secundario": "#D86F3A", "fondo": "#E9E3D8",
    "texto": "#311E34", "acento": "#D86F3A",
    "paleta": [{ "nombre": "Morado", "hex": "#311E34", "uso": "…", "fuente": "Brandbook p. 23" }]
  },
  "tipografias": {
    "titular": { "familia": "DM Sans", "peso": 800, "archivo": "fuentes/dm-sans-extrabold.ttf",
                 "google": "DM+Sans:ital,wght@…" },
    "cuerpo": { … }, "rotulo": { … },
    "archivos": [{ "familia": "DM Sans", "peso": 400, "estilo": "normal", "archivo": "fuentes/dm-sans-regular.ttf" }],
    "sustitutos": { "Saudagar": "Italiana" },
    "licencias": { "DM Sans": "OFL (Google Fonts)" }
  },
  "logos": { "color": "logos/….svg", "blanco": "…", "mono": "…", "simbolo": "…",
             "zonaSegura": "…", "zonaSeguraFactor": 0.7265, "minimoPx": 100 },
  "logosPng": { "color": "logos/….png", … },
  "ilustraciones": [{ "clave": "ilustracion-1", "archivo": "ilustraciones/ilustracion-1.png", "nota": "…" }],
  "variantes": [{ "clave": "chicxulub", "nombre": "…", "colores": { … }, "logos": { … } }],
  "submarcas": [{ "clave": "recoleta", "nombre": "Recoleta", "color": "#C86C41",
                  "simbolo": "logos/sub-recoleta-simbolo.svg", "logo": "…", "frase": "…" }],
  "respaldo": { "marca": "linmex", "texto": "Un desarrollo de Grupo LINMEX", "logo": "blanco" },
  "reglas": ["…"],
  "temas": [{ "clave": "morado", "nombre": "Morado", "uso": "…", "fondo": "#311E34",
              "texto": "#E9E3D8", "acento": "#D86F3A", "logo": "inverso", "claro": false,
              "contraste": { "texto": 12.04, "nivelTexto": "AAA", "acento": 4.58, "nivelAcento": "AA" } }],
  "notas": ["contradicciones y pendientes"]
}
```

- Las rutas son relativas a la carpeta de la marca.
- `tipografias.*.archivo` es la fuente real (ruta relativa) y manda; `tipografias.archivos` lista
  todas las caras para registrarlas con `@font-face`. `google` es el parámetro `family=` de la API
  css2 de Google Fonts (o `null` si no existe ahí) y `sustituto` la familia de respaldo. En el
  design system público no hay `archivo` ni `archivos`: solo el nombre y el sustituto.
- `temas[].logo` es una clave de `logos` (`color`, `inverso`, `blanco` o `mono`).
- `temas[].contraste` es la razón WCAG 2.1 entre fondo y texto, y entre fondo y acento.
  Niveles: `AAA` ≥ 7, `AA` ≥ 4.5, `AA grande` ≥ 3 (solo texto de 24 px o más, o 18.7 px en
  negrita), `insuficiente` < 3. El `texto` cumple AA en 15 de los 18 temas; las tres excepciones
  son el tema Naranja de LINMEX (el vigente de Studio, 3.27:1), el Terracota de Recoleta (el
  color del distrito, 3.7:1) y el Azul Sisal de Soletta (4.46:1), los tres solo para texto grande. Donde el texto o el acento no
  alcanzan, la `nota` del tema dice dónde sí usarlos.
- `legado` (solo Recoleta) guarda la identidad verde, reemplazada el 2026-10-06 por el Brandbook
  Capitalia. Sirve para reconocer piezas viejas; no es para piezas nuevas.

## Fuentes

**La licencia de Saudagar, Snell Roundhand y Myriad Pro la tiene Grupo LINMEX** (compradas por
la empresa). Sus archivos y los de DM Sans viven en `<marca>/fuentes/` del repo privado del
frontend, con su `@font-face` en `fuentes.css` (`font-display: swap`). No se copian al design
system público: ahí `fuentes.css` carga solo los sustitutos de Google.

| Marca | Titular | Cuerpo | Rótulo | Archivos | Sustituto |
|---|---|---|---|---|---|
| LINMEX | Cairo 800 | Cairo 400 | Barlow Condensed 600 | — (Google Fonts) | — |
| Capitalia | DM Sans 800 | DM Sans 400 | DM Sans 700 | `dm-sans-{regular,bold,extrabold,black}.ttf` | DM Sans de Google (itálicas y 500) |
| Recoleta | DM Sans 800 | DM Sans 400 | DM Sans 700 | los mismos de Capitalia | DM Sans de Google |
| Soletta | Saudagar | Saudagar | Saudagar en mayúsculas | `saudagar.otf`, `snell-roundhand-regular.ttf` (línea manuscrita), `myriad-pro-regular.otf` | Italiana, Great Vibes, Source Sans 3 |

## Referencias

`referencias/` guarda las páginas que sostienen cada decisión (`brandbook-pNN.png`,
`manual-pNN.png`, `bono-mesa-N.png`, `previo-*.png` y `legado-*.png` de piezas ya publicadas).
Las de 256 colores con tramado son para consulta, no para producción.

Las ilustraciones de Soletta (`soletta/ilustraciones/`) son imágenes generadas por IA y aprobadas
por diseño como material de la marca (2026-10-06). Se usan como ilustración, nunca como
fotografía de Chicxulub o Sisal.

## Qué no va al design system público

El brandbook de Capitalia (p. 2) y el manual de LINMEX (p. 3) son de distribución restringida.
La copia del design system lleva `marca.json` (sin rutas a archivos de fuente), `logos/`,
`fuentes/fuentes.css` (solo sustitutos de Google), `soletta/ilustraciones/`, este LEEME, la
propuesta y solo las referencias que son piezas publicadas (`bono-mesa-*`, `previo-*`,
`legado-*`, `logotipo-*`). No lleva:

- los archivos de fuente (`.otf`, `.ttf`)
- `referencias/brandbook-p*.png` ni `referencias/manual-p*.png`

El desarme por mesa de las piezas .ai (textos con posición, SVG, renders e íconos) vive en el repo
privado de diseño: `plataforma-diseno/marcas/piezas-origen/<marca>/bono/`.

## Originales

Los .ai y PDF viven en `plataforma-diseno/marcas/originales/` (repo privado de diseño), con los
scripts que generaron esta carpeta en `plataforma-diseno/marcas/scripts/`.

## Estado comercial (`comercial` en `marca.json`)

Lo que está en venta y lo que ya se agotó, por marca y variante, con la fecha `actualizado`. Lo
usa Linx para no ofrecer lo agotado (p. ej. frente de playa en Sisal) y las plantillas para
hablar de la etapa correcta. Se actualiza a mano cuando Ventas lo informe; la fecha dice qué tan
viejo es el dato.
