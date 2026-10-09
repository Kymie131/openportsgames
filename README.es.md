# OpenPortsGames

**Sitio: <https://kymie131.github.io/openportsgames/>**

Un catálogo comunitario de ports nativos de videojuegos: decompilaciones,
recompilaciones y reimplementaciones, para PC y Android. Cada entrada enlaza a
la fuente oficial del proyecto.

Lo hice porque me cansé de clicar enlaces de "pack de ISOs" en foros y acabar
con malware, o de descubrir que el espejo que guardé estaba muerto una semana
después. Los únicos enlaces que sobreviven son los del proyecto mismo. Esa es
más o menos toda la idea.

También porque Super Mario Bros. 3 me voló la cabeza cuando entendí que el
cartucho era solo software, algo que se puede desmontar y correr en cualquier
aparato. La mayoría de los proyectos de aquí hacen exactamente eso.

Este sitio no aloja ni enlaza archivos descargables. Por ahora el sitio es
estático: sin cuentas ni base de datos.

- EN/ES, temas claro y oscuro
- Interfaz en varios idiomas. Las traducciones fueron asistidas por un LLM.

## Stack

Next.js 16 (App Router, TypeScript estricto) + Tailwind CSS v4. Export
estático, así que funciona en cualquier hosting. i18n propia en el cliente,
zod para esquemas, MiniSearch para buscar, Radix UI.

Tests con Vitest, smoke tests con Playwright.

## Inicio rápido

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

## Contribuir

Ver [CONTRIBUTING.md](CONTRIBUTING.md). Hay plantillas de issue para proponer
un port, reportar una prueba, corregir datos o solicitar una retirada.

## Licencias

Código MIT (`LICENSE`). Datos del catálogo CC BY 4.0 (`LICENSE-DATA`).

Sin afiliación con ninguna compañía de videojuegos. Las marcas pertenecen a sus
propietarios.
