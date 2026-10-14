# OpenPortsGames

**Sitio: <https://openportsgames.com/>**

Catálogo de ports nativos de videojuegos: decompilaciones, recompilaciones y
reimplementaciones, para PC y Android. Cada entrada enlaza a la fuente oficial
del proyecto.

El sitio no aloja ni enlaza archivos descargables. Es un export estático de
Next.js más un pequeño backend en Cloudflare Workers (`api/`) que da soporte al
inicio de sesión opcional, las valoraciones y los comentarios.

- EN/ES, temas claro y oscuro.
- Las traducciones fueron asistidas por un LLM.

## Stack

Next.js 16 (App Router, TypeScript) + Tailwind CSS v4, export estático. i18n en
el cliente, esquemas con zod, MiniSearch, Radix UI. Tests con Vitest, smoke
tests con Playwright.

El backend comunitario opcional vive en `api/`: Hono sobre Cloudflare Workers,
Cloudflare D1 (SQLite) con Drizzle ORM y Better Auth para OAuth de Google,
Discord y GitHub (sin contraseñas). Cada endpoint de escritura valida con zod y
tiene límite de peticiones. Ver [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md).

## Inicio rápido

```bash
npm install
npm run dev        # sitio en http://localhost:3000
```

El backend es opcional: sin él, el sitio compila y funciona, pero el inicio de
sesión, las valoraciones y los comentarios quedan desactivados.

```bash
cd api
npm install
cp .dev.vars.example .dev.vars   # rellena BETTER_AUTH_* y los secretos OAuth
npm run db:local                 # aplica las migraciones D1 en local
npm run dev                      # Worker en http://localhost:8787
```

Apunta el sitio al Worker con `NEXT_PUBLIC_API_URL=http://localhost:8787`
(ver [`.env.example`](.env.example)). El origen también debe figurar en
`connect-src` dentro de `public/_headers`.

| Comando                      | Qué hace                         |
| ---------------------------- | -------------------------------- |
| `npm run dev`                | Servidor de desarrollo           |
| `npm run build`              | Export estático a `out/`         |
| `npm run lint` / `typecheck` | ESLint / tsc                     |
| `npm test`                   | Todos los tests                  |
| `npm run validate`           | Validación de datos del catálogo |
| `npx playwright test`        | Smoke tests (compilar antes)     |
| `cd api && npm run dev`      | Worker de desarrollo (`:8787`)   |
| `cd api && npm test`         | Tests del backend                |
| `cd api && npm run gen:ids`  | Regenerar ids de ports (abajo)   |

## Estructura

```
src/
  app/          Rutas, API, sitemap
  components/   Componentes de UI
  content/      Datos del catálogo (ports, hardware, tests)
  lib/          Capa de datos, i18n, helpers
api/            Backend en Cloudflare Workers (Hono, D1, Drizzle, Better Auth)
tests/
  unit/         Tests unitarios
  content/      Tests de validación de datos
  e2e/          Smoke tests con Playwright
docs/           Desarrollo, política, diseño, etc.
scripts/        Comprobador de releases, servidor de preview
```

### Ids de ports del backend

El Worker solo acepta valoraciones y comentarios de ids conocidos del catálogo.
Tras cualquier cambio en `src/content/ports/`, compila y regenera la lista de ids:

```bash
npm run build            # genera out/api/ports.json
cd api && npm run gen:ids  # reescribe api/src/port-ids.json
```

## Contribuir

Ver [CONTRIBUTING.md](CONTRIBUTING.md). Hay plantillas de issue para proponer un
port, reportar una prueba, corregir datos o solicitar una retirada.

## Licencias

Código MIT (`LICENSE`). Datos del catálogo CC BY 4.0 (`LICENSE-DATA`).

Sin afiliación con ninguna compañía de videojuegos. Las marcas pertenecen a sus
propietarios.
