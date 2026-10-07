# Propuesta de plantillas por marca

Qué plantillas construir en Studio para Capitalia, Soletta y Recoleta, a partir de cómo se ven
de verdad sus piezas. Es una propuesta: no hay HTML ni `campos.json` todavía.

Fuentes estudiadas:

- Brandbook Capitalia, aplicaciones pp. 29–41 (`capitalia/referencias/brandbook-pNN.png`).
- Bono Capitalia, 4 mesas, y Promoción bono Soletta, 5 mesas (`<marca>/referencias/bono-mesa-N.png`;
  desarme completo en `plataforma-diseno/marcas/piezas-origen/<marca>/bono/`).
- Skills `soletta-design` y `recoleta-design`: guías y piezas publicadas antes
  (`soletta/referencias/previo-*.png`, `recoleta/referencias/legado-*.png`).
- Demanda real: `plataforma-diseno/CATALOGO-PLANTILLAS-STUDIO.md` (Ventas produce ~85% del volumen
  con tres anatomías: pieza comercial de desarrollo, flyer por cliente y tabla de precios).

Formatos como en `piezas/LEEME.md`: `1x1` 1080×1080, `4x5` 1080×1350, `9x16` 1080×1920,
`16x9` 1920×1080. Los campos usan los tipos que ya existen (`texto`, `parrafo`, `imagen`,
`serie`); donde hace falta algo nuevo se dice.

Prioridad: **Capitalia** (brandbook nuevo), **Soletta** (las dos playas), **Recoleta** como
distrito de Capitalia.

---

## 1. Capitalia

### 1.1 Lenguaje visual observado

1. **Morado dominante, foto cálida que se funde.** En las promociones la mitad de arriba es un
   render a sangre (atardecer, jacarandas, glorieta) y la de abajo un campo morado #311E34; en las
   piezas institucionales el morado ocupa ~60% y la foto entra por un lado
   (bono, mesas 1–4; post 1 de p. 38; lona p. 31).
2. **La foto se recorta con formas del símbolo, nunca en rectángulo.** Pétalo (pp. 28 y 40),
   pétalos naranjas montados sobre la foto y fotos dentro de pétalos (lona p. 31), arco o elipse
   (p. 38), círculo (cartel de Recoleta, p. 41), curva que sube desde abajo (slide de Recoleta,
   p. 40). La única foto rectangular es la que va a sangre.
3. **Una familia: DM Sans.** Titular en dos tiempos donde la palabra clave cambia de color y pasa
   a mayúsculas («Una ciudad planeada no solo se construye; **SE VIVE**», p. 38); en carteles, la
   segunda línea en itálica («Donde la ciudad / *respira*», p. 41). Cifras en Black con la
   unidad en Regular pequeña («**$2,900** mxn», p. 38).
4. **Naranja solo para lo que se tiene que ver**: la cifra, la palabra clave, la banda de
   llamada. El texto sobre morado va en crema, no en blanco puro (bono; tarjeta p. 30).
5. **Etiqueta con una esquina en curva** (forma de hoja): «capitalia.mx», «ETAPA 1», losetas de
   íconos de urbanización (pp. 28, 38, 40; bono). Es el segundo recurso de la marca después del
   pétalo.
6. **Composición:** centrada y simétrica en las promociones (bono); alineada a la izquierda con
   mucho aire en lo institucional (p. 31, p. 38 post 1, p. 40).
7. **Logo arriba al centro en redes**, a veces solo la palabra (p. 38, ver nota); en impresos y
   lonas, abajo a la derecha (pp. 31, 39). Dominio capitalia.mx en etiqueta al pie.
8. **Respaldo LINMEX al pie, abajo a la derecha**, en las versiones comerciales (bono, mesas 3 y
   4: logo LINMEX en crema, ~200 px de ancho, con el pie alineado a la izquierda).

Nota: la p. 21 prohíbe separar el símbolo de la palabra, pero la p. 38 lo hace. Hay archivos
`capitalia-palabra*.svg` por si diseño lo confirma; mientras tanto, las plantillas usan el logo
completo.

### 1.2 Plantillas propuestas

| # | Plantilla | Para qué | Formatos | Campos | Inspiración |
|---|---|---|---|---|---|
| C1 | **Bono de descuento** | Promoción con monto de bono, precio o mensualidad y urbanización incluida. Es la pieza que Ventas sube a diario | 4x5 (origen), 1x1, 9x16 | foto de fondo; rótulo y titular de la cápsula; monto del bono; precio anterior; precio o mensualidad nueva; condiciones; mensaje de cierre; superficie de lotes; ubicación; vigencia; respaldo LINMEX sí/no. Las seis obras de urbanización con su ícono quedan fijas | Bono, mesas 1–4 |
| C2 | **Mensualidad con foto en arco** | Post de precio de entrada con familia o render | 1x1, 4x5, 9x16 | foto; titular; palabra clave (naranja, mayúsculas); rótulo de la cifra («Mensualidades desde»); cifra; unidad | p. 38, post 1 |
| C3 | **Frase sobre foto difuminada** | Mensaje institucional o de marca sin precio | 1x1, 4x5, 9x16, 16x9 | foto (con copia difuminada, como ya hace el motor); titular; palabra clave; párrafo corto | p. 38, post 2; web p. 39 |
| C4 | **Tarjeta crema sobre foto** | Precio con dos datos (superficie, entrega) dentro de una tarjeta vertical | 4x5, 1x1, 9x16 | foto de fondo; foto de la tarjeta (en elipse); titular; palabra clave; rótulo; cifra; unidad; dato 1; dato 2 | p. 38, post 3 |
| C5 | **Cartel de distrito** | Presentar un distrito con su color, su frase y una foto | 9x16 (origen vertical), 4x5, 1x1 | distrito (lista cerrada de los seis: pone color, símbolo y palabra); frase; frase en itálica; foto (círculo o curva). Fijo: trazo del símbolo a gran escala y Capitalia + dominio al pie | p. 41 |
| C6 | **Lona de pétalos** | Portada horizontal, banner web o pantalla | 16x9 | titular; párrafo; foto principal; dos fotos dentro de pétalos; dominio | p. 31 |
| C7 | **Presentación Capitalia** | Presentación comercial o de avance | 16x9 | Láminas: portada (foto en gris, titular, logo); lista numerada sobre morado con arcos («Beneficios»); foto en pétalo + cifra en pétalo naranja + lista; lámina de distrito (color, etiqueta de etapa, foto en curva) | p. 40 |
| C8 | **Hoja membretada Capitalia** | Cartas y oficios de Capitalia en el motor de documentos | carta (documentos) | fecha; destinatario; cuerpo; firma. Fijo: símbolo arriba a la derecha, contacto en vertical al margen, logo vertical al pie | p. 33 |
| C9 | **Tabla de precios Capitalia** | Precio de lista y esquemas de pago | 1x1, 4x5 | los de la tabla actual, con la tabla en filas crema sobre morado y cabecera naranja | Pieza actual `tablaPrecios` + bono (losetas) |

Fuera de esta propuesta: tarjeta de presentación (p. 30), firma de correo (p. 32), uniformes,
taza y bolsa (pp. 34–35) y perfil de redes (p. 36, formato de portada que Studio no tiene).

### 1.3 Piezas actuales que sirven para Capitalia

| Pieza actual | ¿Sirve? | Por qué |
|---|---|---|
| `posts/promocion` | **Sí, remapeando** | Mismos campos que pide Ventas (beneficio, superficie, mensualidad, vigencia, contacto). Morado por navy, naranja Capitalia por naranja LINMEX, logo Capitalia, DM Sans en titular y rótulos. Pierde la diagonal |
| `posts/tablaPrecios` | **Sí, remapeando** | La tabla es neutra; DM Sans Black en cifras funciona. Revisar anchos: DM Sans es más ancha que Barlow Condensed |
| `posts/aliados` | **Sí, remapeando** | Vidrio sobre foto con cuatro beneficios y CTA; mismo ajuste de colores y fuentes |
| `posts/referidos` | **Solo para LINMEX** | Es un programa de todo el grupo (ya muestra Recoleta y Soletta). Para Capitalia sola se haría con C2 |
| `presentaciones/presentacionBloques` | **A medias** | Los bloques sólidos sí remapean a morado / naranja / crema, pero las esquinas rectas y la geometría dura chocan con las curvas de Capitalia |
| `presentaciones/presentacionRecorte` | **No con remapeo; sí como base** | La idea (foto recortada por el símbolo) es la de Capitalia, pero la forma es el símbolo de LINMEX. Cambiando el recorte por el pétalo es C7 |
| `presentaciones/presentacionPliegue` | **No** | Los pliegues diagonales son el gesto de LINMEX |
| `presentaciones/presentacionBrasa` | **No** | Campo oscuro con luz naranja y vidrio: lenguaje de la plataforma, no de Capitalia |
| `capas/*` (13 piezas) | **No** | Comunicación interna (bienvenida, cumpleaños, gracias, día inhábil): es de LINMEX. Además la palabra gigante en Barlow Condensed y los bloques del símbolo LINMEX son el estilo; con DM Sans la palabra se encoge mucho al ajustarse al ancho |
| `carruseles/carrusel` | **No** | Guía de la plataforma, interna |
| `posts/aviso` | **No** | Aviso interno |

---

## 2. Soletta

### 2.1 Lenguaje visual observado

1. **Fondo crema (#F3EFE8) con la imagen en los bordes** —collage de playa, arco de agua,
   ventanas redondas— y el centro libre para el texto (bono, mesas 1–5).
2. **Color por playa:** durazno para Chicxulub (mesas 1, 3, 5), azul para Sisal (mesa 2); la pieza
   de las dos playas va en azul con ambas lado a lado y un divisor (mesa 4).
3. **Titular en tres voces:** línea fina en gris #606060, la palabra clave grande en el color de
   la playa y una línea manuscrita debajo («Multiplica tu / **inversión** / *en la Costa
   Yucateca*», mesas 1 y 2; «Invierte / *a pasos del mar*», mesa 4).
4. **Cifra heroica en serif fina** con «$» y «MXN» pequeños; si hay condiciones, tabla de dos
   columnas con cabecera de color y filas crema (mesas 1 y 2).
5. **Banda rectangular de color** con un rótulo en mayúsculas («BONO DIRECTO», «BONO DE
   DESCUENTO») y **botón redondeado** durazno para la llamada («Agenda tu cita»). Es la banda de
   titular que el skill ya describía (`previo-post-familia.png`).
6. **Logo de la playa arriba al centro**; el sol del logo se repite, cortado, contra el borde
   inferior como firma (mesas 1, 2 y 4). En piezas para aliados, el logo va arriba a la izquierda
   (mesas 3 y 5).
7. **Ilustraciones de costa** cálidas y luminosas (terrazas, palapas, sombreros, mar turquesa),
   aprobadas por diseño el 2026-10-06 (`soletta/ilustraciones/`). Son ilustraciones generadas por
   IA: se usan como ilustración, nunca como foto del lugar. Mucho aire y una idea por pieza.
8. **Respaldo LINMEX** solo en la mesa 3 (aliados), no en la 5 (clientes). El catálogo tiene
   pendiente la regla de «lockup externo»; mientras no se firme, todas con respaldo.

### 2.2 Plantillas propuestas

| # | Plantilla | Para qué | Formatos | Campos | Inspiración |
|---|---|---|---|---|---|
| S1 | **Bono directo por playa** | Promoción de una playa con monto y condiciones | 4x5 (origen), 1x1, 9x16 | playa (Chicxulub / Sisal: pone color y logo); ilustración o foto; línea fina; palabra clave; línea manuscrita; rótulo de la banda; monto; nota del monto; tabla de dos columnas (filas editables); línea de MSI; frase de cierre; vigencia | Bono, mesas 1 y 2 |
| S2 | **Las dos playas** | Promoción que cubre Chicxulub y Sisal | 4x5, 1x1, 9x16 | ilustración; titular; línea manuscrita; rótulo; monto; nota; pregunta o frase («Tú eliges tu lugar en la costa»); descripción de cada playa; botón; vigencia | Bono, mesa 4 |
| S3 | **Promoción exclusiva (aliados / clientes)** | Condición de contado o enganche con número gigante | 4x5, 1x1, 9x16 | audiencia (aliados / clientes: cambia el texto de la banda y el respaldo); titular en dos líneas; línea manuscrita; cifra 1; cifra 2; etiquetas manuscritas de cada cifra; banda; vigencia | Bono, mesas 3 y 5 |
| S4 | **Plan de financiamiento** | Comparar planes con cifras grandes y etiquetas en pastilla | 4x5, 1x1 | titular en dos pesos; nombre del plan; dos cifras con su etiqueta; descuento; vigencia | `previo-plan-estrategico.png` |
| S5 | **Por qué Sisal / por qué Chicxulub** | Credenciales del lugar con datos y sellos | 4x5, 1x1, 9x16 | foto; titular; hasta tres datos con ícono en disco; sellos (Playa Platino, Pueblo Mágico) sí/no; fuente del dato | `previo-post-sellos.png`, `previo-post-familia.png` |
| S6 | **Ficha de características** | Ubicación, fecha de entrega, tamaño de lote, escrituración, condiciones | carta (documentos) y 4x5 | lista de datos con ícono (repetidor); tabla de condiciones; nota legal | `previo-flyer-caracteristicas.png` |
| S7 | **Historia «Agenda tu cita»** | Historia de una sola llamada | 9x16 | ilustración; titular; línea manuscrita; botón; vigencia | Bono, mesa 4 llevada a vertical |
| S8 | **Presentación Soletta** | Presentación a cliente o aliado | 16x9 | portada (ilustración en borde + logo); dato grande; dos playas; plan; cierre | Skill (`templates/editorial-slide`) + lenguaje del bono |

**Tipografía:** Saudagar y Snell Roundhand son compradas por Grupo LINMEX y sus archivos están en
`soletta/fuentes/` (solo en el repo privado). Studio y el PNG del backend tienen que cargarlas
desde ahí para que la pieza salga igual que el .ai; Italiana y Great Vibes quedan como respaldo.

### 2.3 Piezas actuales que sirven para Soletta

| Pieza actual | ¿Sirve? | Por qué |
|---|---|---|
| `posts/promocion`, `posts/tablaPrecios`, `posts/aliados` | **Los campos sí, el diseño no** | Vidrio oscuro sobre foto, rótulos condensados y esquinas duras frente a crema, serif fina y manuscrita. Conviene reutilizar sus `campos.json` (son los que pide Ventas) y dibujar S1–S3 encima |
| `posts/referidos` | **Solo para LINMEX** | Programa del grupo |
| `presentaciones/*` | **No** | Las cuatro dependen del símbolo o la diagonal de LINMEX y de campos oscuros |
| `capas/*`, `carruseles/carrusel`, `posts/aviso` | **No** | Comunicación interna de LINMEX |

---

## 3. Recoleta (distrito de Capitalia)

Recoleta no tiene sistema propio en el brandbook nuevo: es un distrito con símbolo y color
(terracota #C86C41) dentro de Capitalia. Todo lo de §1 aplica; esto es lo que cambia.

### 3.1 Lenguaje visual observado

1. **Campo terracota completo** con el símbolo del distrito en trazo fino y a gran escala detrás
   (p. 41).
2. **Palabra RECOLETA en DM Sans** con la «C» del símbolo; frase debajo con la segunda línea en
   itálica («Recoleta, donde / *la vida inicia*», pp. 40 y 41).
3. **Foto en círculo** grande arriba (p. 41) o **en curva que sube desde abajo** (p. 40).
4. **Etiqueta de etapa** con esquina curva («ETAPA 1», p. 40).
5. **Capitalia al pie**, en crema, con capitalia.mx (p. 41). Nunca Recoleta sola.
6. El sistema verde fue reemplazado el 2026-10-06. De él solo se rescata el **contenido**, no el
   estilo: precio de entrada, mensualidad, ubicación y el patrón rótulo > cifra > cierre
   (`legado-post-*.png`).

### 3.2 Plantillas propuestas

| # | Plantilla | Para qué | Formatos | Campos | Inspiración |
|---|---|---|---|---|---|
| R1 | **Cartel de Recoleta** | Presentación del distrito | 9x16, 4x5, 1x1 | Es C5 con distrito = Recoleta | p. 41 |
| R2 | **Avance de etapa** | Comunicar la etapa, obra o entrega | 4x5, 1x1, 16x9 | etapa; frase; frase en itálica; párrafo; foto en curva | p. 40, lámina de Recoleta |
| R3 | **Precio de entrada** | Precio o mensualidad desde | 1x1, 4x5, 9x16 | rótulo de tensión; cifra; unidad; plazo; vigencia; foto en círculo | `legado-post-precio-entrada.png`, `legado-post-mensualidad.png`, p. 38 |
| R4 | **Ubicación** | Distancias y contexto de Motul | 1x1, 4x5 | titular; hasta tres datos (valor + rótulo); foto; fuente del dato | `legado-post-ubicacion.png` |
| R5 | **Amenidad del parque** | Una amenidad por pieza (anfiteatro, área infantil, food trucks…) | 1x1, 4x5, 9x16 | foto de la amenidad (círculo o pétalo); nombre; una línea | Skill `AmenidadesPost` + p. 28 |
| R6 | **Bono de descuento Recoleta** | El bono de Capitalia con el distrito al frente | 4x5, 1x1, 9x16 | Es C1 con distrito = Recoleta: logo del distrito arriba, Capitalia al pie | Bono, mesas 1–4 |

Dato a confirmar antes de R4: las piezas viejas dicen «a 20 min de Mérida» y el bono de
Capitalia «a 25 min del periférico norte de Mérida».

### 3.3 Piezas actuales que sirven para Recoleta

Las mismas que para Capitalia (§1.3), con el color del distrito en lugar del naranja y el logo de
Recoleta arriba y el de Capitalia al pie. Ninguna pieza actual sirve con la identidad verde
anterior, y no conviene construirla: el brandbook la reemplaza.

---

## 4. Lo que el motor necesita para estas plantillas

Sin código, solo para dimensionar:

1. **Elegir distrito o playa** como un campo de lista cerrada que cambia color, símbolo y logo
   a la vez (C5, R1, R6, S1).
2. **Recorte por forma**: pétalo, círculo, elipse y curva inferior. Hoy el motor recorta con el
   símbolo de LINMEX; los recortes de Capitalia salen de `logos/capitalia-petalo.svg` y de formas
   simples. WeasyPrint no dibuja `clip-path`: el recorte tiene que ser un `<image>` dentro de un
   `clipPath` de SVG, como ya hacen las piezas actuales.
3. **Segunda línea en itálica o manuscrita** dentro del mismo titular (C5, S1–S3, R1).
4. **Tabla con filas editables** (S1, C9).
5. **Respaldo LINMEX como interruptor** con posición fija por marca.
6. **Fuentes**: registrar las de `<marca>/fuentes/` (`tipografias.archivos` en cada `marca.json`):
   DM Sans para Capitalia y Recoleta; Saudagar y Snell Roundhand para Soletta. Los sustitutos de
   Google solo como respaldo.
