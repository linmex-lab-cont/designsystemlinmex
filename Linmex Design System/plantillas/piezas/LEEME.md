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

Familias: `posts`, `promociones`, `capas`, `carruseles`, `presentaciones`. En la galería `capas`
se llama «Capital Humano».

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
  "etiquetas": ["aviso", "comunicado", "whatsapp", "historia"],
  "formatos": { "1x1": { "w": 1080, "h": 1080 } },
  "campos": { "titulo": { "etiqueta": "Título", "tipo": "texto", "defecto": "…", "maximo": 40 } }
}
```

Una pieza de varias láminas cambia `campos` por
`"laminas": [{ "clave": "portada", "nombre": "Portada", "campos": { … } }]`; las claves de
campo no se repiten entre láminas.

### Etiquetas de búsqueda

`etiquetas` es una lista de 4 a 10 palabras con las que la gente nombra la pieza, además de su
`nombre` y `desc`: cómo la llama Ventas o Capital Humano («flyer», «volante», «promo»,
«onboarding», «ranking»), el canal («instagram», «historia», «whatsapp») y sinónimos
(«brochure», «precio», «festivo»). La marca no se repite: la galería ya busca en `marca`.
El buscador de la galería compara sin acentos ni mayúsculas contra nombre, descripción,
etiquetas, familia, sección y marca; con varias palabras deben coincidir todas, cada una en
cualquiera de esos textos. Si falta, la pieza solo se encuentra por nombre y descripción.

### Tipos de campo

- `texto` y `parrafo`: `etiqueta`, `defecto` (el texto del diseño, idéntico y sin
  marcas), `maximo` (caracteres que caben en el formato más estrecho), `nota` y `opcional`
  si aplican. `texto` guarda texto plano. `parrafo` guarda HTML saneado con lista blanca:
  solo `<b>` (Ctrl+B; `<strong>` se convierte en `<b>`) y `<br>`; todo lo demás se quita
  al guardar y al pintar, y el motor arma los nodos sin pasar el valor por `innerHTML`.
  `maximo` cuenta el texto plano, sin etiquetas.
- `deUsuario` (solo en `texto`): el campo es un dato de quien crea la pieza y nace lleno con
  su sesión. Vale `"nombre"`, `"puesto"`, `"correo"`, `"telefono"` o `"departamento"` (los
  campos `name`, `title`, `email`, `phone` y `department` de `GET /api/v1/auth/me`; el departamento
  sale con la primera letra en mayúscula). Con un solo dato, la guía completa se reemplaza
  (`"[Nombre Apellido]"` → `"Ana Pérez"`). Si el campo mezcla guías con texto fijo, es una lista
  y cada dato llena el tramo entre corchetes que le toca, en orden: `"deUsuario": ["puesto",
  "correo"]` sobre `"[Puesto] · [nombre@grupolinmex.mx]"` da `"Analista · ana@grupolinmex.mx"`;
  el texto fuera de corchetes no cambia. Un dato que la sesión no trae deja su guía tal cual. Se
  marca solo lo que es de quien presenta o firma, nunca el nombre de un cliente, de una persona
  bienvenida ni de un cumpleañero. Solo cuenta al crear la pieza: lo que la persona edite después
  manda, y «Restaurar» vuelve a la guía.
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
- Esta carpeta se copia tal cual al design system público para Linx.

## Marca

Las piezas se diseñan con LINMEX y Studio las pinta con la marca del documento (`doc.marca`:
`linmex`, `capitalia`, `recoleta` o `soletta`, y `doc.variante` en Soletta: `chicxulub` o
`sisal`) sin tocar estos HTML. Con LINMEX el motor no cambia nada. Los datos de cada marca
salen de `plantillas/marcas/<clave>/marca.json`.

### Mapa de colores base de LINMEX

Toda la paleta de las piezas se reduce a tres anclas; cada color del diseño es una de ellas
mezclada con blanco o con negro en una proporción fija:

| Ancla | LINMEX | Se vuelve, en la marca |
|---|---|---|
| `naranja` | `#FF5100` | `primario`; si choca con el oscuro (contraste menor a 2:1), `acento` |
| `navy` | `#0F1820` | el más oscuro de `texto`, `secundario` y `primario` |
| `crema` | `#F3F1EC` | `fondo` si es claro; si no, el color más claro de la paleta |

Colores del diseño y su mezcla (extraídos con grep de los HTML):

- Familia naranja: `#FF5100`, `#FF7A3D` y `#FF7A3A` (24 % hacia blanco), `#FF8A52` (32 %),
  `#FFB08A` (54 %), `#FFCDB0` (70 %), `#FFD6B4` (72 %), `#FFD9C2` (77 %), `#FFDECE` (81 %),
  `#FFF1EA` (92 %); `#E84A00` (9 % hacia negro), `#CF4205` (19 %), `#B83A02` (28 %),
  `rgba(110,36,6)` (57 %); los `rgba(255,81,0,α)` conservan su alfa.
- Familia navy: `#0F1820`; hacia blanco `#121C25`, `#131E28`, `#15202A`, `#18242E`, `#1B2731`,
  `#1C2733`, `#1F2C38`, `#22313F`, `#2A3843`, `#3A4A57` (21 %), `#3F4A54`, `#56616B` (32 %),
  `#5A6B7B`, `#6E7780` (41 %), `#7A8A99`, `#B9BEC2` (72 %), `#E4E7E9` (90 %); hacia negro
  `#0B1219`, `#0D151C`, `#060A0E`, `#04090E` (60 %).
- Familia crema: `#F3F1EC`, `#FBFAF7` (62 % hacia blanco), `#E4E1DA` (7 % hacia negro).
- `#FFFFFF` y `#000000` no cambian.

En tiempo de render el motor reemplaza esos valores en el `<style>` de la pieza, en el `style`
de cada elemento y en `fill`, `stroke` y `stop-color` de los SVG; lo que va dentro de `url(…)`
no se toca. Un color que no se reduce a ninguna ancla (error mayor a 18 en 0–255) se queda
igual.

### Logos, respaldo y sitio

- Cada `<img>` con `src` en `_img/linmex-logo-*.png` cambia al logo equivalente de la marca:
  `linmex-logo-blanco` → `inverso` (o `blanco`), `linmex-logo-blanco-solido` → `blanco`,
  `linmex-logo-color` → `color`.
- En marcas hijas el logo del pie (el que queda en la mitad inferior de la lámina; si no hay,
  el primero) se acompaña con el respaldo del json: «Un desarrollo de Grupo» y el logo LINMEX
  pequeño, en la misma versión que tenía la pieza. Si `respaldo.marca` es otra marca hija
  (Recoleta → Capitalia), su logo va antes del respaldo.
- El texto `grupolinmex.mx` que no es campo cambia al `dominio` de la marca si lo trae.

### Tipografías

`Cairo` toma la fuente de cuerpo de la marca; los titulares (peso 700 o más, o `h1`–`h3`)
toman la de titular; `Barlow Condensed` la de rótulo y `Great Vibes` la de caligrafía si la
marca la declara. Si la fuente oficial no está en Google Fonts se usa su `sustituto`.

### Contraste

Tras el remapeo, el Chequeo mide cada texto contra el fondo que lo contiene y avisa cuando
queda bajo 4,5:1 y además peor que en el diseño de LINMEX.

## Quién ve qué

Dos filtros deciden qué plantillas ve cada persona en la galería, en la tarjeta «¿Con qué
diseño?» del chat, en el selector de diseño y en sus favoritas. La plantilla que no pasa no
aparece; no se muestra con candado.

**Por marca.** Las piezas con `"categoria": "comunicacion"` y `"audiencia": "interna"` (hoy las
de `capas/`, `posts/aviso` y `carruseles/carrusel`) son comunicación interna de LINMEX: solo
salen con LINMEX elegida, también al buscar, y se crean siempre con LINMEX. Si alguien las pide
por chat con Capitalia, Recoleta o Soletta, la tarjeta avisa que son internas y las arma en
LINMEX. Las presentaciones no cuentan como comunicación interna. El orden de las secciones
por marca está en `ORDEN_DE_SECCIONES` (`src/lib/studio/secciones.ts`).

**Por área.** La matriz es `MATRIZ_DE_ACCESOS`, arriba de `src/lib/studio/accesos-plantillas.ts`:

| `department` | Ve |
|---|---|
| Dirección, Marketing, Diseño, Sistemas (Investigación y Desarrollo), Administración | todo |
| Tesorería, Cobranza, Contabilidad, Finanzas | Documentos (todos: carta de liquidación, recibo de pago, pago al cliente, ficha de pago, esquela, hoja membretada) y Presentaciones |
| Capital Humano, Recursos Humanos, RH | Capital Humano, Posts (solo `aviso`), Carrusel, Documentos (`oficio`, `esquela`), Presentaciones |
| Ventas, Comercial, Consultores | Promociones, Presentaciones, Posts (`promocion`, `tablaPrecios`, `aliados`, `referidos`), Documentos (`ficha` de pago y `oficio`) |
| Otra o vacía (hoy Operaciones, Experto Patrimonial, Gestión de Proyectos) | Presentaciones y la hoja membretada (`oficio`), con la línea para pedir por ticket lo que falte |

Los documentos de cobranza (liquidación, recibo, pago al cliente) salen del descubrimiento F0 del
13 de agosto de 2026: los produce Tesorería/Cobranza «a manivela»; Ventas pidió solo la
«plantilla para pago» (9/9) para mandarla al cliente al momento, y la esquela la levantó
Administración/Capital Humano.

Quien tiene `isAdmin` ve todo. Cuenta solo el `department` (el área), no el puesto. Es un filtro
de la interfaz, no un permiso: el backend no lo aplica. Cada regla de la matriz tiene:

- `area`: el nombre con que se lee.
- `nombres`: cómo puede venir escrito el `department`. Se compara sin acentos ni mayúsculas y
  por palabras completas: «Dirección General» entra por `dirección`; «RH» no entra en otra
  palabra que empiece con esas letras.
- `secciones`: `"todas"`, o por sección `"todas"` o la lista de lo permitido: la `clave` del
  `campos.json` de la pieza, o la `key` de la plantilla si no es pieza (`post`, `presentacion`,
  `oficio`…).

Gana la primera regla que coincide, así que el orden de la lista importa. Para cambiarla se edita
la regla o se agrega un sinónimo en `nombres`, se ajusta `accesos-plantillas.test.mjs` y se corre
`node --test src/lib/studio/*.test.mjs`. Una pieza nueva aparece sola donde su sección dice
`"todas"`; donde la sección se limita por lista (hoy Posts en Ventas y en Capital Humano), hay
que agregarla a la lista de quien deba verla. Más adelante la matriz se administrará en pantalla
(la persona de la plataforma y Marketing); mientras, vive en código.

## Promociones con datos reales

Familia `promociones`: piezas reales aprobadas por diseño, rehechas en HTML con su composición
original (posiciones, tamaños y líneas de base del desarme de cada mesa en
`plataforma-diseno/marcas/piezas-origen/<marca>/bono/`). Cambian estas reglas:

- Se diseñan en su marca, no en LINMEX: `campos.json` lleva `"marca"` (`capitalia`, `soletta`)
  y Studio no les aplica el remapeo de colores ni de logos. Los colores salen de
  `plantillas/marcas/<marca>/marca.json` y los logos son los vectores de `marcas/<marca>/logos/`
  copiados a `_img/` con prefijo `bono-`; ninguno se llama `linmex-logo-*`, así el motor no los
  cambia y el respaldo LINMEX queda como parte del diseño.
- Las fuentes de la marca (DM Sans; Saudagar y Snell Roundhand) van en `@font-face` dentro del
  `<style>`, con ruta `../../../marcas/<marca>/fuentes/<archivo>`, para que el HTML abra solo.
  En Studio el Shadow DOM ignora esas reglas: las fuentes llegan del documento, que registra
  `plantillas/marcas/*/fuentes/`.
- Los `defecto` son los textos reales y aprobados (montos, condiciones, vigencia), sin
  corchetes: la pieza se descarga tal cual o se cambia el dato con Linx o en el lienzo. Solo se
  corrigen las erratas del desarme («Construye», «O 25%», «MXN», «Tú eliges», «m²»).
- Decidido el 2026-10-06 por Grupo LINMEX, no se «corrige»: la vigencia «Septiembre 2026» de las
  láminas Chicxulub y Sisal se queda como fue aprobada; el pictograma de mojoneras del bono
  Capitalia (lote con cuatro mojoneras) se mantiene; «el estado más seguro de México» va sin cita
  de fuente, como en el original.
- `campos.json` lleva además `"audiencia": "externa"`, `"categoria": "promocion"`,
  `"datosReales": true` y `"vigencia": "AAAA-MM"` (último mes en que valen los datos) para que
  el catálogo avise cuando caduque. Una lámina puede traer su propia `vigencia` y su `variante`.
- Cifras: el campo es solo el número; `$`, `MXN` y `.00` son fijos y van en la misma fila con
  `data-ajustar="ancho"` y el ancho disponible. Los tamaños de la fila van en `em`, así que si
  la cifra crece la fila entera se encoge en proporción y sigue centrada.
- Énfasis dentro de un renglón (una cifra más grande o en color): campo `parrafo` con `<b>`. El
  estilo de esa negrita lo da una regla de clase en el `<style>` (`.nota b{…}`) con tamaño en
  `em` y `line-height: 0`: lo que la persona marque con Ctrl+B toma el mismo énfasis y el
  renglón no se mueve.
- Las líneas de base se midieron en Chrome contra las del diseño: no se mueve `top` a ojo.
- Fotos e ilustraciones: la ventana visible del diseño, a lo más 2160 px. Las ilustraciones de
  Soletta se convirtieron de Adobe RGB a sRGB, igual que en la exportación de la mesa.
- No van al design system público: traen precios vigentes, y las ilustraciones de Soletta son
  imágenes generadas por IA que el desarme deja fuera. La copia para Linx debe excluir
  `promociones/` y `_img/bono-*`.
