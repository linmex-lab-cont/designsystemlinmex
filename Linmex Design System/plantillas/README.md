# Plantillas oficiales de Studio

Plantillas aprobadas por diseño, para que Linx (`BuildLetter` y demás herramientas del
backend) las tome de aquí. Es copia fiel de la carpeta `plantillas/` del editor Studio:
los cambios se hacen allá y se copian aquí sin editarlos a mano.

## Orden

```
plantillas/
  <tipo>/                 documentos, posts, presentaciones…
    LEEME.md              qué plantillas hay, cómo leerlas y reglas de exportación
    campos.json           campos de cada plantilla: tipo, ejemplo, defecto, máximos
    <tipo>.css            estilos compartidos, encerrados en su clase raíz
    <plantilla>.html      maqueta de referencia, abre sola en el navegador
    <recursos>            logos o imágenes que usan las maquetas
```

## Reglas

- Un tipo por carpeta, en plural y en minúsculas; una plantilla por archivo `.html`,
  con el mismo nombre en `campos.json`.
- `campos.json` manda: Studio pinta los campos, los ejemplos y el pie a partir de él.
  Cambiar un campo aquí lo cambia en el editor y en lo que se le pide a Linx.
- El CSS va encerrado en la clase raíz de la hoja (`.hoja`) para no filtrarse a la app;
  el tamaño de página (`@page`) vive solo en cada `.html`.
- Nada de `clip-path`, `mask`, `filter`, `backdrop-filter` ni `calc()`: el conversor de PNG
  del backend (WeasyPrint) no los dibuja.
- Los datos de contacto salen de la ficha vigente de la empresa (A1.4), no del manual de marca.
