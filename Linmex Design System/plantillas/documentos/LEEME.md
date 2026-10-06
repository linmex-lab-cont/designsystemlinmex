# Documentos · tamaño Carta

| Archivo | Clave | Plantilla | Audiencia |
|---|---|---|---|
| `oficio.html` | `oficio` | Hoja membretada | interna |
| `carta-liquidacion.html` | `liquidacion` | Carta de liquidación | cliente |
| `ficha-pago.html` | `ficha` | Ficha de pago | cliente |
| `recibo-pago.html` | `recibo` | Recibo de pago | cliente |
| `pago-cliente.html` | `pagoCliente` | Pago al cliente | cliente |
| `esquela.html` | `esquela` | Esquela | interna |

- `documento.css`: estilos de las seis. La hoja es `.hoja` (816 × 1056 px, Carta a 96 ppp) y
  todo lo demás cuelga de ella. Las fuentes se piden como `var(--font-cairo, 'Cairo')` y
  `var(--font-barlow, 'Barlow Condensed')`: en la app vienen de `next/font` y en la maqueta
  suelta, de Google Fonts.
- `campos.json`: campos de cada plantilla, los comunes, el membrete (lugar, pie y lema) y los
  textos fijos. La clave de cada plantilla es la que usa Studio.
- `linmex-logo.svg`: el logo a color, idéntico a `public/linmex-logo.svg`.

## Cómo leer el HTML

- `data-campo="clave"`: el texto del elemento es el valor del campo `clave`.
- `data-cuerpo="parrafos"` (clase `cuerpo-rico`): el cuerpo continuo, en HTML sencillo con `p`, `br`,
  `strong`, `em`, `u`, `ul`, `ol` y `li`.
- `data-tabla="…"` con filas `data-fila="clave"`: la segunda celda (`data-valor`) es el valor;
  la fila `destacada` es la del monto.
- Lo que está entre corchetes es el `ejemplo` del campo.

## Tipos de campo

| Tipo | Se guarda | Se pinta |
|---|---|---|
| `texto`, `parrafo` | texto | tal cual |
| `lista` | el cuerpo en HTML saneado (`ricos`) y un texto por párrafo (`listas`) | texto continuo, como en Word: párrafos, saltos de línea, negrita, cursiva, subrayado y listas |
| `tabla` | un valor por fila (`clave`) | la fila con su etiqueta |
| `fecha` | `AAAA-MM-DD` | con su `formato` (`d 'de' MMMM 'de' yyyy` → 30 de septiembre de 2026; `dd · MMM · yyyy` → 30 · sep · 2026) |
| `monto` | número (`12500.5`) | `$12,500.50`, la moneda aparte |

Un campo vacío muestra su `ejemplo` en gris solo como guía mientras se edita: nunca se imprime ni cuenta como
contenido. Uno con `defecto` nace con ese valor (`hoy` = fecha del día).
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
- `listas`: los campos `lista` (en el oficio, `parrafos`: un texto por párrafo, en texto plano). Es lo que
  manda Linx; al abrir, Studio lo convierte en el cuerpo continuo.
- `ricos` (opcional): el cuerpo como HTML con lista blanca (`p`, `br`, `strong`/`b`, `em`/`i`, `u`, `ul`, `ol`,
  `li`; sin atributos). Si viene, manda sobre `listas`. Studio guarda los dos: `ricos` con el formato y
  `listas` con el texto de cada párrafo, para quien solo lea texto.
- Claves que no existan en la plantilla se descartan. Lo que falte queda con su ejemplo y el
  editor no deja exportar hasta llenarlo.

## Variante sobria (esquela)

La hoja lleva además la clase `sobria`: el filo pasa a navy, no hay folio ni lema y el cuerpo
va centrado (`.cuerpo.esquela`). Lo marca `membrete` dentro de su plantilla en `campos.json`
(`folio: false`, `lema: false`, `filo: "navy"`).

## Reglas de exportación

Están en `reglas` de `campos.json`: un campo vacío o con texto entre corchetes bloquea; en la ficha, el recibo
y el pago al cliente, 18 dígitos seguidos (una CLABE) bloquean, también dentro del cuerpo; si el cuerpo no cabe,
el documento sigue en otra hoja, hasta `hoja.hojas` (2); pasar de ahí bloquea.

## Hojas de continuación

Si el cuerpo no cabe, Studio agrega otra `.hoja` con el mismo filo, logo, encabezado, pie y lema. Su ventana es
`.cuerpo.continuacion` (arriba 150 px, alto 750 px) y no repite destinatario, asunto ni saludo. Los párrafos y
los elementos de lista no se parten entre hojas, y la firma se lleva consigo el último párrafo para no quedarse
sola. Con más de una hoja, el encabezado de cada una dice «Hoja n de N» (`.hoja-numero`).

## Para el conversor del backend (PNG)

`POST /studio/documents/{id}/png` pide el CSS dentro de un `<style>` y las imágenes como
`data:`. Las hojas usan posición absoluta, flex sin `gap`, tablas, `float`, degradados lineal y
radial y bordes redondeados. Si el servidor no tiene Cairo y Barlow Condensed instaladas ni
salida a internet, hay que incrustarlas con `@font-face`.
