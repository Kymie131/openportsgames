# Sección de consolas (homebrew, ports y proyectos de la comunidad)

## Rutas

| Ruta | Qué muestra |
| --- | --- |
| `/[lang]/console/` | Índice: una tarjeta por consola con cuántas builds corren en ella y cuántos ports hay de sus juegos. Incluye buscador (filtra en cliente, sin tocar la URL). |
| `/[lang]/console/<slug>/` | Página real de una consola: builds para ese hardware, ports de sus juegos y **todos** los sitios que los publican. |

Las tarjetas del índice son enlaces reales (`LocalizedLink`), así que funcionan con JavaScript desactivado, se
pueden abrir en otra pestaña y las indexan los buscadores. Las 10 páginas se generan en el build
(`generateStaticParams`) y entran al `sitemap.xml`.

## Por qué se cambió

Antes la sección usaba `?console=<slug>` y un componente cliente que leía `window.location.search` y solo
escuchaba `popstate`. Al pulsar una tarjeta, Next cambiaba la URL **sin** que el componente se enterara: la vista
seguía mostrando la lista y parecía que el enlace no hacía nada (en español y en inglés). El mismo patrón afectaba
al drill-down de `/emulators`, que ahora sincroniza estado y URL con un `onClick` que intercepta solo el clic
normal (Ctrl/Cmd/clic central siguen abriendo en otra pestaña).

## Modelo de datos (`src/lib/console-hub.ts`)

Cada consola del registro (`src/content/consoles.ts`) genera un `ConsoleHub` con:

- **`running`**: fichas cuyo destino es esa consola (`platforms` incluye su `platform`). Son los ports, recomps y
  homebrew que se ejecutan en el hardware.
- **`games`**: fichas de juegos que salieron originalmente en esa consola (`originalSystems` coincide con las
  etiquetas de `SYSTEM_LABELS_BY_CONSOLE`). Es la parte que hace útil la página: casi todos los recomps y
  decomps corren en PC o Android, pero son juegos de esa consola.
- **`sources`**: todos los sitios que publican esos proyectos, agrupados por host, **sean o no GitHub**, con
  cuántos proyectos lleva cada uno. La sección "Dónde lo publica la comunidad" los lista con enlaces directos.

El catálogo acepta cualquier URL `https` en `sources`, así que los proyectos que solo viven en una web propia,
en GameJolt, en itch.io o en un foro se pueden fichar igual: no hay ningún filtro por GitHub.

## Cómo añadir una consola nueva

1. Añade su plataforma a `platformKeys` (`src/lib/ports/schema.ts`) si no existe.
2. Añade la entrada a `consoleDefs` (`src/content/consoles.ts`) con `slug`, `platform`, nombre EN/ES, fabricante,
   año, abreviatura y color (y `logo` si hay arte en `public/logos/console`).
3. Si sus juegos tienen etiquetas propias en `meta.ts`, añádelas a `SYSTEM_LABELS_BY_CONSOLE`
   (`src/lib/console-hub.ts`).
4. Listo: la ruta, el índice, el sitemap y los contadores se generan solos.
