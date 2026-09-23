# OpenPortsGames

Un catálogo curado y sin fines de lucro de **ports nativos de videojuegos**:
decompilaciones, recompilaciones y reimplementaciones de motor para PC y
Android. Cada ficha apunta a la fuente oficial del proyecto: repositorio,
releases, sitio web o documentación. **Nada se aloja ni se enlaza como archivo
descargable.**

Sitio totalmente estático: sin cuentas, sin comentarios, sin base de datos y
sin rastreadores.

- Interfaz EN/ES · temas claro y oscuro · orientado a WCAG
- [Roadmap](docs/ROADMAP.md) · [Diseño](docs/DESIGN.md)

## Stack técnico

- **Next.js 16** (App Router, TypeScript estricto), **Tailwind CSS v4**
- Export estático completo (`output: "export"`), desplegable en cualquier
  hosting estático
- i18n EN/ES propia en el cliente (sin next-intl), `zod` para los esquemas de
  datos, MiniSearch para la búsqueda en cliente, primitivas de Radix UI
- Vitest (unit + validación de contenido), Playwright (e2e de humo),
  ESLint/Prettier

## Requisitos

- **Node.js ≥ 22** y npm

## Puesta en marcha (menos de 5 minutos)

```bash
npm install        # Linux: npm install --omit=optional si glibc se queja
npm run dev        # http://localhost:3000
```

Comandos útiles:

| Script                       | Qué hace                                            |
| ---------------------------- | --------------------------------------------------- |
| `npm run dev`                | Servidor de desarrollo en `http://localhost:3000`   |
| `npm run build`              | Export estático a `out/`                            |
| `npm run lint` / `typecheck` | ESLint / `tsc --noEmit`                             |
| `npm test`                   | Todos los tests de Vitest (unit + contenido)        |
| `npm run validate`           | Validación de datos del catálogo únicamente         |
| `npm run check:updates`      | Informa de versiones desactualizadas (mantenedores) |
| `npm run test:e2e`           | Tests de humo sobre el export (ver abajo)           |

### Tests de humo

```bash
npm run build
PLAYWRIGHT_CHANNEL=msedge npm run test:e2e   # cambia msedge por el canal de tu navegador
```

## Estructura del repositorio

```
src/
  app/          Rutas (server), incl. /api/ports.json y sitemap/robots
  components/   UI en cliente (catálogo, detalle, docs, header/footer, i18n, tema)
  content/      Datos del catálogo: ports/*.ts, hardware, pruebas, meta
  lib/          Capa de datos (ports), diccionarios i18n, helpers de sitio/seo/fechas
tests/
  unit/         Vitest — utilidades y capa de datos
  content/      Vitest — invariantes de datos exigidas en CI
  e2e/          Tests de humo de Playwright
docs/           Arquitectura, modelo de datos, API, política editorial, pruebas,
                diseño, despliegue, roadmap, verificación pendiente
scripts/        Comprobador de últimas releases, servidor de previsualización
```

## Variables de entorno

Copia `.env.example` a `.env.local` (opcional) y ajusta:

| Variable                         | Propósito                                        |
| -------------------------------- | ------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`           | Canónicas, OG, sitemap, robots (sin barra final) |
| `NEXT_PUBLIC_BASE_PATH`          | Prefijo de subcarpeta (GitHub Pages)             |
| `NEXT_PUBLIC_SUPPORT_PAYPAL_URL` | Enlace de donación opcional en `/support`        |

## Documentación

- [Arquitectura](docs/ARCHITECTURE.md) · [Modelo de datos](docs/DATA_MODEL.md) · [API](docs/API.md)
- [Política editorial](docs/EDITORIAL_POLICY.md) · [Metodología de pruebas](docs/TESTING_METHODOLOGY.md)
- [Diseño](docs/DESIGN.md) · [Despliegue](docs/DEPLOYMENT.md) · [Roadmap](docs/ROADMAP.md)
- [Verificación pendiente](docs/PENDING_VERIFICATION.md)

## Contribuciones

Ver [CONTRIBUTING.md](CONTRIBUTING.md). Las plantillas de issue cubren
proponer un port, reportar una prueba, reportar datos incorrectos y solicitar
una retirada (la página **Submit** enlaza a ellas).

## Licencias

- Código: MIT — ver `LICENSE`
- Datos del catálogo: CC BY 4.0 — ver `LICENSE-DATA`

Sin afiliación con ninguna compañía de videojuegos. Las marcas de los juegos
pertenecen a sus propietarios y se usan solo para identificar los proyectos.
