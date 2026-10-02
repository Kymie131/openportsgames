# OpenPortsGames

**Sitio: <https://kymie131.github.io/openportsgames/>**

Catálogo de **ports nativos de videojuegos** — decompilaciones, recompilaciones
y reimplementaciones de motor que traen juegos clásicos a PC y Android. Cada
ficha apunta solo a la fuente oficial del proyecto (repo, releases, docs,
web). Sin archivos descargables, nunca.

Lo hice porque me cansé de clicar enlaces de "pack de ISOs" en foros y acabar
con malware, o de descubrir que el espejo que guardé estaba muerto una semana
después. Los únicos enlaces que sobreviven son los del proyecto mismo. Esa es
más o menos toda la idea.

También porque Super Mario Bros. 3 me voló la cabeza cuando entendí que el
cartucho era solo software — algo que se puede desmontar y correr en cualquier
aparato. La mayoría de los proyectos de aquí hacen exactamente eso.

Sitio estático. Sin cuentas, sin base de datos, sin trackers. Solo archivos.

- EN/ES, temas claro y oscuro
- [Roadmap](docs/ROADMAP.md) · [Diseño](docs/DESIGN.md)

## Stack

Next.js 16 (App Router, TypeScript estricto) + Tailwind CSS v4. Export
estático, así que funciona en cualquier hosting. i18n propia en el cliente
(sin next-intl), `zod` para esquemas, MiniSearch para buscar, Radix UI para
lo más complejo.

Tests con Vitest, smoke tests con Playwright.

## Puesta en marcha

```bash
npm install
npm run dev        # http://localhost:3000
```

Comandos útiles:

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Export estático a `out/` |
| `npm run lint` / `typecheck` | ESLint / tsc |
| `npm test` | Todos los tests |
| `npm run validate` | Validación de datos del catálogo |
| `npx playwright test` | Smoke tests (compilar antes) |

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
docs/           Arquitectura, política, diseño, etc.
scripts/        Comprobador de releases, servidor de preview
```

## Variables de entorno

Copia `.env.example` a `.env.local` si necesitas ajustar algo:

| Variable | Propósito |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URLs canónicas, sitemap |
| `NEXT_PUBLIC_BASE_PATH` | Despliegue en subcarpeta (GitHub Pages) |
| `NEXT_PUBLIC_SUPPORT_PAYPAL_URL` | Enlace de donación en /support |

## Docs

[Arquitectura](docs/ARCHITECTURE.md) · [Modelo de datos](docs/DATA_MODEL.md) ·
[API](docs/API.md) · [Política editorial](docs/EDITORIAL_POLICY.md) ·
[Pruebas](docs/TESTING_METHODOLOGY.md) · [Diseño](docs/DESIGN.md) ·
[Despliegue](docs/DEPLOYMENT.md) · [Roadmap](docs/ROADMAP.md)

## Contribuir

Ver [CONTRIBUTING.md](CONTRIBUTING.md). Hay plantillas de issue para proponer
un port, reportar una prueba, corregir datos o solicitar una retirada.

## Licencias

Código MIT (`LICENSE`). Datos del catálogo CC BY 4.0 (`LICENSE-DATA`).

Sin afiliación con ninguna compañía de videojuegos. Las marcas pertenecen a
sus propietarios.
