# OpenPortsGames

OpenPortsGames es una biblioteca pública y sin fines de lucro de ports
nativos de videojuegos: decompilaciones, recompilaciones estáticas y
reimplementaciones de motor para PC y Android. Cada ficha apunta a la fuente
oficial del proyecto: repositorio, releases, Discord o el sitio de sus
autores. El sitio no aloja ni enlaza archivos descargables.

Sitio totalmente estático. Sin cuentas, comentarios ni base de datos en esta
etapa (ver `docs/ROADMAP.md`).

## Stack técnico

- Next.js (App Router) con TypeScript en modo estricto
- Tailwind CSS v4
- Export estático completo (`output: "export"`), desplegable en cualquier
  hosting estático
- zod para esquemas de contenido, MiniSearch para búsqueda en cliente
- next-intl para localización inglés/español
- ESLint, Prettier, Vitest, Playwright

## Requisitos

- Node.js LTS (>= 22)
- npm

## Puesta en marcha

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Scripts

| Script              | Descripcion                      |
| ------------------- | -------------------------------- |
| `npm run dev`       | Servidor de desarrollo           |
| `npm run build`     | Export estatico a `out/`         |
| `npm run lint`      | ESLint                           |
| `npm run typecheck` | Tipos con `tsc --noEmit`         |
| `npm run test`      | Tests unitarios (Vitest)         |
| `npm run validate`  | Valida ports, hardware y pruebas |
| `npm run test:e2e`  | Smoke tests de Playwright        |

## Estructura

```
content/            Datos del catalogo (ports, hardware, pruebas)
docs/               Arquitectura, modelo de datos, politica editorial
src/
  app/              Paginas y rutas del App Router
  components/       Componentes de interfaz
  lib/              Capa de datos y utilidades
tests/
  unit/             Tests unitarios
  content/          Tests de validacion de datos
  e2e/              Smoke tests de Playwright
```

Los datos viven en `content/` como JSON validados con zod. Todo el acceso
pasa por una capa unica (`src/lib/ports`) para poder sustituir el origen JSON
por una base de datos sin tocar los componentes.

## Localizacion

Ingles por defecto. La interfaz y las guias estan tambien en espanol, con
deteccion del idioma del navegador y selector manual EN/ES.

## Variables de entorno

Copia `.env.example` a `.env.local` y ajusta. `NEXT_PUBLIC_SITE_URL` es
necesaria para metadatos y `sitemap.xml`. `PAYPAL_DONATION_URL` activa el
enlace opcional de la pagina `/support`.

## Despliegue

Objetivos soportados: Cloudflare Pages, Vercel, GitHub Pages. Instrucciones
en `docs/DEPLOYMENT.md`.

## Como contribuir

Ver `CONTRIBUTING.md`. Las plantillas de issue cubren proponer un port,
agregar una prueba, reportar un enlace roto y solicitar una retirada.

## Licencias

- Codigo: MIT License (`LICENSE`)
- Datos del catalogo: CC BY 4.0 (`LICENSE-DATA`)

Sin afiliacion con ninguna compania de videojuegos. Las marcas de los juegos
pertenecen a sus propietarios y se usan solo para identificar los proyectos.
