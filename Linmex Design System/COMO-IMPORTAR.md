# Cómo importar el Linmex Design System

Guía rápida para poner en marcha este Design System en **otra cuenta**.

---

## 1. Importar el proyecto
1. Descarga el archivo `.zip` que se generó.
2. En la cuenta destino, crea un **proyecto nuevo** e importa/sube el contenido del `.zip`
   (mantén la estructura de carpetas tal cual).
3. Abre el proyecto. El sistema se **recompila automáticamente** al cargar:
   se regeneran `_ds_bundle.js`, `_ds_manifest.json` y `_adherence.oxlintrc.json`.
   > No edites esos tres archivos a mano — son generados.

## 2. Verificar que quedó bien
- Abre la pestaña **Design System**: deberías ver las tarjetas agrupadas en
  *Brand, Colors, Type, Spacing, Components, Slides, Website*.
- Si algo no aparece, vuelve a guardar cualquier archivo para forzar la recompilación.

## 3. Qué incluye el paquete
| Carpeta | Contenido |
|---|---|
| `tokens/` | Color, tipografía, espaciado y efectos (punto de entrada: `styles.css`) |
| `components/` | Componentes (`Button`, `Badge`, `Card`, `Input`, `Stat`, `PropertyCard`) |
| `assets/` | Logotipo oficial, símbolo, imágenes duotono y mockups |
| `slides/` | Plantillas de presentación |
| `guidelines/cards/` | Tarjetas de especificación de la pestaña Design System |
| `ui_kits/website/` | Sitio de marketing de ejemplo |
| `readme.md` | Documentación completa del sistema |

## 4. Reglas de marca imprescindibles
- **Logotipo:** usa SIEMPRE el archivo oficial, nunca lo reconstruyas.
  - `assets/logo/Linmex-Logo-Principal-Full Color.png` → fondos claros
  - `assets/logo/Linmex-Logo-Blanco.png` → fondos navy
  - `assets/logo/Linmex-Logo-Blanco-Solido.png` → fondos naranja
  - El **símbolo solo** (recoloreable): `assets/logo/linmex-symbol.svg`
- **Wordmark:** "LINMEX" es un logotipo dibujado, **no** una fuente. No lo escribas
  en Raleway ni en ninguna tipografía; coloca el asset oficial.
- **Color y tipografía:** consume los tokens de `styles.css`
  (naranja `--orange-500: #FF5100`, navy `--navy-800: #0F1820`; fuentes Cairo / Barlow Condensed / Raleway).

## 5. Cómo consumirlo desde otro proyecto
- Enlaza los estilos: `<link rel="stylesheet" href="styles.css">`
- Carga el bundle: `<script src="_ds_bundle.js"></script>`
- Usa los componentes desde el espacio de nombres global que reporta el compilador
  (p. ej. `const { Button } = window.LinmexDesignSystem_xxxxxx`).

---

¿Dudas? Revisa `readme.md` — documenta a detalle tokens, componentes y uso.
