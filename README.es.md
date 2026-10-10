# OpenPortsGames

**Sitio: <https://kymie131.github.io/openportsgames/>**

Catálogo de ports nativos de videojuegos: decompilaciones, recompilaciones y
reimplementaciones, para PC y Android. Cada entrada enlaza a la fuente oficial
del proyecto.

El sitio no aloja ni enlaza archivos descargables. Build estático: sin cuentas
ni base de datos.

- EN/ES, temas claro y oscuro.
- Las traducciones fueron asistidas por un LLM.

## Stack

Next.js 16 (App Router, TypeScript) + Tailwind CSS v4, export estático. i18n en
el cliente, esquemas con zod, MiniSearch, Radix UI. Tests con Vitest, smoke
tests con Playwright.

## Inicio rápido

```bash
npm install
npm run dev        # http://localhost:3000
```

| Comando                      | Qué hace                         |
| ---------------------------- | -------------------------------- |
| `npm run dev`                | Servidor de desarrollo           |
| `npm run build`              | Export estático a `out/`         |
| `npm run lint` / `typecheck` | ESLint / tsc                     |
| `npm test`                   | Todos los tests                  |
| `npm run validate`           | Validación de datos del catálogo |
| `npx playwright test`        | Smoke tests (compilar antes)     |

## Estructura

```
src/
  app/          Rutas, API, sitemap
  components/   Componentes de UI
  content/      Datos del catálogo (ports, hardware, tests)
  lib/          Capa de datos, i18n, helpers
tests/
  unit/         Tests unitarios
  content/      Tests de validación de datos
  e2e/          Smoke tests con Playwright
docs/           Desarrollo, política, diseño, etc.
scripts/        Comprobador de releases, servidor de preview
```

## Contribuir

Ver [CONTRIBUTING.md](CONTRIBUTING.md). Hay plantillas de issue para proponer un
port, reportar una prueba, corregir datos o solicitar una retirada.

## Licencias

Código MIT (`LICENSE`). Datos del catálogo CC BY 4.0 (`LICENSE-DATA`).

Sin afiliación con ninguna compañía de videojuegos. Las marcas pertenecen a sus
propietarios.
