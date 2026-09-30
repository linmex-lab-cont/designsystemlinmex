# Documentos · tamaño Carta

| Archivo | Clave | Plantilla | Audiencia |
|---|---|---|---|
| `oficio.html` | `oficio` | Hoja membretada | interna |
| `carta-liquidacion.html` | `liquidacion` | Carta de liquidación | cliente |
| `ficha-pago.html` | `ficha` | Ficha de pago | cliente |

- `documento.css`: estilos de las tres. La hoja es `.hoja` (816 × 1056 px, Carta a 96 ppp) y
  todo lo demás cuelga de ella. Las fuentes se piden como `var(--font-cairo, 'Cairo')` y
  `var(--font-barlow, 'Barlow Condensed')`: en la app vienen de `next/font` y en la maqueta
  suelta, de Google Fonts.
- `campos.json`: campos de cada plantilla, los comunes, el membrete (lugar, pie y lema) y los
  textos fijos. La clave de cada plantilla es la que usa Studio.
- `linmex-logo.svg`: el logo a color, idéntico a `public/linmex-logo.svg`.

## Cómo leer el HTML

- `data-campo="clave"`: el texto del elemento es el valor del campo `clave`.
- `data-lista="parrafos"` con hijos `data-item`: un elemento por párrafo.
- `data-tabla="…"` con filas `data-fila="clave"`: la segunda celda (`data-valor`) es el valor;
  la fila `destacada` es la del monto.
- Lo que está entre corchetes es el `ejemplo` del campo.

## Tipos de campo

| Tipo | Se guarda | Se pinta |
|---|---|---|
| `texto`, `parrafo` | texto | tal cual |
| `lista` | lista de textos | un párrafo por elemento |
| `tabla` | un valor por fila (`clave`) | la fila con su etiqueta |
| `fecha` | `AAAA-MM-DD` | con su `formato` (`d 'de' MMMM 'de' yyyy` → 30 de septiembre de 2026; `dd · MMM · yyyy` → 30 · sep · 2026) |
| `monto` | número (`12500.5`) | `$12,500.50`, la moneda aparte |

Un campo vacío muestra su `ejemplo`; uno con `defecto` nace con ese valor (`hoy` = fecha del día).
`soloEn` limita un campo común a las plantillas listadas.

## Documento editable en Studio

Para que un documento hecho por Linx se abra en el editor, se guarda con
`POST /api/v1/studio/documents` usando el `templateId` de su plantilla (está en `campos.json`) y
este `document` mínimo; lo que falte lo completa Studio al abrirlo:

```json
{
  "motor": "ficha",
  "pages": [
    {
      "kind": "carta",
      "data": {
        "valores": { "fecha": "2026-09-30", "folio": "LS-2026-0042", "pago.cliente": "Juana Pérez", "monto": "12500.5" },
        "listas": {}
      }
    }
  ]
}
```

- `valores`: una clave por campo simple; las filas de una tabla van como `tabla.fila`
  (`pago.cliente`, `inmueble.monto`). Texto plano o HTML sencillo; fecha `AAAA-MM-DD`; monto
  solo número.
- `listas`: los campos `lista` (en el oficio, `parrafos`: un texto por párrafo).
- Claves que no existan en la plantilla se descartan. Lo que falte queda con su ejemplo y el
  editor no deja exportar hasta llenarlo.

## Reglas de exportación

Están en `reglas` de `campos.json`: texto entre corchetes bloquea; en la ficha, 18 dígitos
seguidos (una CLABE) bloquean; si el cuerpo no cabe en su alto fijo se avisa en lugar de
cortarlo; una sola hoja por documento.

## Para el conversor del backend (PNG)

`POST /studio/documents/{id}/png` pide el CSS dentro de un `<style>` y las imágenes como
`data:`. Las hojas usan posición absoluta, flex sin `gap`, tablas, `float`, degradados lineal y
radial y bordes redondeados. Si el servidor no tiene Cairo y Barlow Condensed instaladas ni
salida a internet, hay que incrustarlas con `@font-face`.
