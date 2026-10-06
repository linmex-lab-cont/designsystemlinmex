# Piezas de Studio: posts, carruseles y presentaciones

Diseños aprobados en el lienzo «Plantillas de Studio», convertidos a HTML con campos para
que Studio los llene y los descargue en PNG o PDF, y para que Linx sepa qué pedir.

## Orden

```
piezas/
  _img/                              fotos por defecto, sus versiones difuminadas y logos
  <familia>/<pieza>/campos.json      qué se puede cambiar y cómo
  <familia>/<pieza>/<formato>.html            piezas de una lámina
  <familia>/<pieza>/<lámina>-<formato>.html   piezas de varias láminas
```

Familias: `posts`, `capas`, `carruseles`, `presentaciones`.

Formatos de redes: `1x1` 1080×1080, `4x5` 1080×1350, `3x4` 1080×1440,
`9x16` 1080×1920 (250 px libres arriba y abajo), `16x9` 1920×1080. Las presentaciones
solo existen en `16x9`.

Cada `.html` abre solo en el navegador (con las fuentes de Google) y su raíz es el primer
`<div>` del `<body>`, de tamaño fijo igual al del formato.

## campos.json

```json
{
  "version": 1,
  "clave": "aviso",
  "templateId": "uuid v4 propio, único",
  "nombre": "Aviso con ilustración",
  "desc": "Una línea para el catálogo.",
  "categoria": "comunicacion",
  "audiencia": "interna",
  "formatos": { "1x1": { "w": 1080, "h": 1080 } },
  "campos": { "titulo": { "etiqueta": "Título", "tipo": "texto", "defecto": "…", "maximo": 40 } }
}
```

Una pieza de varias láminas cambia `campos` por
`"laminas": [{ "clave": "portada", "nombre": "Portada", "campos": { … } }]`; las claves de
campo no se repiten entre láminas.

### Tipos de campo

- `texto` y `parrafo`: `etiqueta`, `defecto` (el texto del diseño, idéntico y sin
  marcas), `maximo` (caracteres que caben en el formato más estrecho), `nota` y `opcional`
  si aplican. `texto` guarda texto plano. `parrafo` guarda HTML saneado con lista blanca:
  solo `<b>` (Ctrl+B; `<strong>` se convierte en `<b>`) y `<br>`; todo lo demás se quita
  al guardar y al pintar, y el motor arma los nodos sin pasar el valor por `innerHTML`.
  `maximo` cuenta el texto plano, sin etiquetas.
- `imagen`: `etiqueta`, `archivo` (en `_img/`), `difuminada` si el diseño usa una copia
  difuminada para el vidrio, `desenfoque` en px (por defecto 40). Por cada imagen el
  registro agrega un campo interno `<clave>__encuadre` (tipo `texto`, opcional, sin control
  propio ni lugar en Linx) donde se guarda el encuadre que elige la persona; ver
  «Encuadre de fotos».
- `serie`: los datos de una gráfica. `etiqueta`, `grafica` (`barras`, `linea`, `dona` o
  `barras-html`), `unidad` si la hay, y `puntos`: `[{ "etiqueta": "Ene", "valor": 64 }]`.

## Marcas en el HTML

- `data-campo="clave"`: el texto completo del elemento se reemplaza por el valor. Si el
  diseño trae negritas o saltos dentro de un `parrafo` (`<b style="font-weight: 700">`,
  `<br>`), el HTML los conserva tal cual: mientras el valor sea el `defecto` el motor no
  toca el elemento, y cuando la persona lo edita sus `<b>` heredan el peso de la primera
  negrita del diseño. El exportador marca esos párrafos comparando su texto plano (los
  `<br>` cuentan como espacio) con el `defecto`.
- `data-imagen="clave"` en la `<img>` principal y `data-imagen-difuminada="clave"` en su
  copia del vidrio: si la persona cambia la foto, el motor pone la nueva en las dos y a la
  copia le aplica `filter: blur(<desenfoque>px)`. Si la foto es un `<image>` de SVG
  (recortada con `clipPath`), la marca va en ese `<image>` y el motor cambia su `href`.
- `data-ajustar="ancho"` en un texto de un solo renglón (las palabras gigantes): si el
  valor no cabe, el motor reduce `font-size` en proporción hasta que el texto quepa en su
  `width` si lo trae, o si no en el ancho de la raíz menos dos veces su `left`. Nunca lo
  agranda por encima del tamaño del diseño ni le pone piso: es la única marca que encoge
  sin límite.
- Gráficas: el contenedor lleva `data-serie="clave"`. Las piezas de cada gráfica llevan
  `data-indice="i"` (posición en `puntos`), y el contenedor dice cómo se mide:
  - `barras` (SVG): cada barra es un `<path data-barra>` y el contenedor trae
    `data-base` (y del eje cero) y `data-alto` (px que ocupa el máximo del eje). El trazo
    es `M x base V y+r A r r 0 0 1 x+r y H x+w−r A r r 0 0 1 x+w y+r V base Z`: el motor
    conserva `x`, `w` y `r` y cambia `y = base − valor ÷ máximo × alto`.
  - `linea` (SVG): `<polyline data-linea>` y un `<circle data-punto>` por punto, con el
    mismo `data-base` y `data-alto`: cada `y` de la línea y cada `cy` pasan a
    `base − valor ÷ máximo × alto`; las `x` no cambian.
  - `dona` (SVG): un `<circle data-segmento>` por punto con `stroke-dasharray`, y el
    contenedor trae `data-circunferencia` (C). Con S = suma de los valores, el segmento i
    lleva `stroke-dasharray="Lᵢ C"`, con Lᵢ = valorᵢ ÷ S × C, y `stroke-dashoffset` igual a
    menos la suma de los L anteriores. Los cortes entre segmentos son
    `<line data-separador data-indice="i">` radiales al inicio del segmento i: el motor los
    gira a −90° + 360° × (suma de los valores anteriores ÷ S) y conserva sus dos radios.
  - `barras-html`: un `<div data-barra>` por punto con su alto en px y el contenedor trae
    `data-alto`; el alto es `valor ÷ máximo × data-alto`. Con
    `data-orientacion="horizontal"` en el contenedor la barra crece a lo ancho: el motor
    cambia `width` en vez de `height` y `data-alto` mide el largo de la barra máxima.
  - Etiquetas: `data-categoria` (nombre del punto), `data-valor` (cifra del punto) y
    `data-eje="k"` (marcas del eje, de arriba abajo, `k` desde 1; la última es el cero).
  - `data-total="clave"`, en cualquier lugar de la lámina: la suma de los valores de esa
    serie.
  - Varias series en una gráfica: un campo `serie` por cada una, el contenedor las lista
    separadas por espacio (`data-serie="real meta"`) y cada pieza dice de cuál es con
    `data-de="clave"`; el eje se calcula con todas y `data-categoria` sale de la primera.
  Máximo de la escala: `data-maximo` si el contenedor lo trae (100 en avances en %); si
  hay `n` marcas `data-eje`, el paso es el menor de 1, 2, 2.5, 4 o 5 × 10ᵏ que sea mayor o
  igual que el mayor valor ÷ (n − 1), el máximo es paso × (n − 1) y la marca k dice
  máximo − (k − 1) × paso; sin ninguna de las dos, el mayor valor ocupa todo `data-alto`.
  En `data-valor`, `data-eje` y `data-total` el motor cambia solo el número del texto:
  conserva los signos que lo rodean (`%`, `$`) y quita los corchetes de ejemplo. Una
  `data-valor` colocada junto a su barra o punto (`y` en SVG, `top` en HTML) se desplaza lo
  mismo que el extremo de su barra o punto.
  La serie trae tantos puntos como piezas tiene el diseño: el motor no agrega ni quita
  barras. Si una gráfica no lleva alguna de estas marcas, esa parte queda fija.

## Guías, texto largo y edición en el lienzo

- **Guía**: un campo es guía cuando su `defecto` empieza con `[` y fuera de los tramos
  entre corchetes no tiene letras ni cifras (`[Nombre Apellido]`, `[$0,000]`, `[00]%`,
  `[Puesto] · [correo]`). Los corchetes a media frase (`Hasta [00] MSI.`) no lo vuelven
  guía: siguen siendo texto con un dato pendiente.
- Una guía sin llenar (valor igual al `defecto`) y cualquier campo vacío se muestran así:
  en el lienzo, el texto del diseño atenuado; al enfocarlo se quita y se escribe sobre
  vacío, y si se deja vacío vuelve la guía. En miniaturas, la guía con su texto de
  ejemplo. Al exportar (PNG, PDF, HTML) el elemento sale vacío y conserva su alto, y el
  chequeo lo avisa (texto con corchetes o campo vacío).
- **Texto largo**: todo `texto` o `parrafo` cuyo valor ya no es el del diseño cabe en su
  caja: la que ocupa en el diseño una muestra de `maximo` caracteres hecha con las
  palabras del `defecto` (o el `defecto` si no hay `maximo`). Si el valor no cabe, el
  motor baja `font-size` hasta el 70 % del tamaño del diseño; si ni así cabe, lo recorta
  sin desbordar (`max-height` u `overflow` con puntos suspensivos en un renglón), lo marca
  en el lienzo con un contorno rojo y el panel Campos avisa «no cabe». Las cajas se miden
  una vez por plantilla, con las fuentes ya cargadas, y solo para los campos cambiados.
- En el lienzo cada `data-campo` de texto es editable en su lugar (Enter confirma, en
  `parrafo` Enter hace salto y Ctrl+Enter confirma, Esc deshace lo escrito en esa
  edición, Ctrl+B pone negritas en `parrafo`). Lo demás queda bloqueado: sin selección, sin
  cursor de texto ni contorno. Nada se mueve ni se redimensiona.

## Encuadre de fotos

- Mientras la foto sea la del diseño, se respetan su proporción, `object-fit` y
  `object-position`.
- Con una foto propia (JPG, PNG o WebP) el motor fija el alto de las `<img>` que traen
  `height: auto` a la proporción de la foto del diseño, para que la caja no cambie, y:
  - si la persona eligió encuadre, aplica `object-fit` (`cubrir` → `cover`, `contener` →
    `contain`) y `object-position` en uno de nueve puntos (0, 50 o 100 % por eje); en un
    `<image>` de SVG, `preserveAspectRatio` (`slice` o `meet` con `xMin|xMid|xMax` y
    `YMin|YMid|YMax`). La copia difuminada recibe el mismo encuadre.
  - si no eligió, y la foto tiene transparencia (un recorte PNG o WebP), la muestra
    completa apoyada abajo (`contener`, 50 % 100 %); si es opaca, la deja llenar el espacio
    con la posición del diseño (`cover`, nunca estirada).
- El encuadre se guarda en `valores["<clave>__encuadre"]` como
  `"<cubrir|contener> <x> <y> @<asset>"` y solo vale para esa foto: al cambiarla vuelve el
  automático.

## Reglas

- El texto de `defecto` es exactamente el del diseño: así se marcan solos todos los
  formatos con `herramientas/exportar-piezas.py` del lienzo.
- Cifras de ejemplo entre corchetes (`[00]`), nunca precios ni datos vigentes.
- Nada de datos de clientes ni de personas reales: las fotos de ejemplo son siluetas o
  ilustraciones. Los datos de contacto salen de la ficha vigente de la empresa.
- Esta carpeta es copia de `plantillas/piezas/` del frontend (fuente única). Las fotos de ejemplo de personas (`_img/recortes/`) viven solo en la plataforma privada y no se publican aquí; las piezas por capas las referencian por nombre.
