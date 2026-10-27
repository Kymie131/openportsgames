# Backend

Worker de Cloudflare + D1 para cuentas, comentarios, respuestas, corazones y el tablón de ports faltantes.

## Estado actual

| Pieza | Valor |
| --- | --- |
| Worker | `openportsgames-api` |
| URL | `https://api.openportsgames.com` |
| Health | `https://api.openportsgames.com/health` |
| D1 | `openportsgames-db` (`8f93d4d1-d729-4bf8-97d8-69610e64d8b8`) |
| Front | `NEXT_PUBLIC_API_URL=https://api.openportsgames.com` |
| Auth | Better Auth con Google, Discord y GitHub |
| Turnstile | opcional; sin secreto solo actúan los rate limits |

## Endpoints

| Método | Ruta | Qué hace |
| --- | --- | --- |
| `GET` | `/health` | Estado del Worker |
| `GET` | `/me` | Usuario de la sesión |
| `DELETE` | `/me` | Borra la cuenta y todo lo asociado |
| `GET` | `/ratings/:portId` | Media y número de corazones |
| `PUT` | `/ratings/:portId` | Puntúa con `{ "hearts": 1..5 }` |
| `DELETE` | `/ratings/:portId` | Quita tu puntuación |
| `GET` | `/comments/:portId` | Comentarios paginados (incluye `sentiment` si es reseña) |
| `POST` | `/comments/:portId` | Comenta o responde (`parentId`); acepta `sentiment: positive\|negative` |
| `GET` | `/reviews/:portId` | Resumen de reseñas: positivas, negativas, total y porcentaje |
| `DELETE` | `/comments/:id` | Borra tu comentario o sus respuestas |
| `POST` | `/comments/:id/report` | Denuncia un comentario |
| `GET` | `/missing` | Ports faltantes (`status=open|done|all`) |
| `POST` | `/missing` | Propone un port faltante |
| `GET` | `/missing/:id/comments` | Comentarios de una propuesta |
| `POST` | `/missing/:id/comments` | Comenta una propuesta |
| `DELETE` | `/missing/:id/comments/:commentId` | Borra tu comentario |
| `PATCH` | `/missing/:id/status` | Admin: marca `open`, `done` o `hidden` |
| `GET` | `/admin/reports` | Admin: denuncias de comentarios, paginadas |
| `DELETE` | `/admin/reports/:id` | Admin: descarta una denuncia |
| `GET` | `/admin/missing-comments` | Admin: comentarios del tablón (`status=visible|hidden|all`) |
| `PATCH` | `/admin/missing-comments/:id` | Admin: oculta o vuelve a mostrar un comentario del tablón |
| `PATCH` | `/admin/comments/:id` | Admin: oculta o vuelve a mostrar un comentario |
| `DELETE` | `/admin/users/:id` | Admin: borra una cuenta y sus datos |

## Pegar en los proveedores OAuth

Crea una app en cada proveedor que quieras habilitar. La URL de callback es siempre:

```
https://api.openportsgames.com/api/auth/callback/github
https://api.openportsgames.com/api/auth/callback/google
https://api.openportsgames.com/api/auth/callback/discord
```

### GitHub

1. GitHub → Settings → Developer settings → OAuth Apps → New OAuth App.
2. Homepage URL: `https://openportsgames.com`
3. Authorization callback URL: `https://api.openportsgames.com/api/auth/callback/github`
4. Copia el Client ID y genera un Client Secret.

### Google

1. Google Cloud Console → APIs & Services → OAuth consent screen.
2. Credentials → Create credentials → OAuth client ID → Web application.
3. Authorized JavaScript origins: `https://openportsgames.com`
4. Authorized redirect URI: `https://api.openportsgames.com/api/auth/callback/google`

### Discord

1. Discord Developer Portal → New Application → OAuth2.
2. Redirect: `https://api.openportsgames.com/api/auth/callback/discord`
3. Copia Client ID y Client Secret.

## Guardar los secretos

Desde `api/`:

```bash
"TU_CLIENT_ID"     | npx wrangler secret put GITHUB_CLIENT_ID
"TU_CLIENT_SECRET" | npx wrangler secret put GITHUB_CLIENT_SECRET

"TU_CLIENT_ID"     | npx wrangler secret put GOOGLE_CLIENT_ID
"TU_CLIENT_SECRET" | npx wrangler secret put GOOGLE_CLIENT_SECRET

"TU_CLIENT_ID"     | npx wrangler secret put DISCORD_CLIENT_ID
"TU_CLIENT_SECRET" | npx wrangler secret put DISCORD_CLIENT_SECRET

npx wrangler deploy
```

Ya están puestos: `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL` y las variables `SITE_ORIGIN`, `ENVIRONMENT` y `COOKIE_DOMAIN`.

## Turnstile (opcional)

Sin `TURNSTILE_SECRET` el backend acepta comentarios solo con rate limiting. Para activarlo:

1. Cloudflare → Turnstile → Add widget para `openportsgames.com`.
2. Worker: `"TU_SECRET" | npx wrangler secret put TURNSTILE_SECRET` y `npx wrangler deploy`.
3. Pages: añade `NEXT_PUBLIC_TURNSTILE_SITE_KEY` con la site key y vuelve a desplegar el front.

## Base de datos

```bash
cd api
npx wrangler d1 migrations apply DB --remote
```

Las migraciones viven en `api/drizzle/`. La última añade `missing_port`, `missing_port_comment` y `comment.parent_id`.

## Desarrollo local

```bash
cd api
cp .dev.vars.example .dev.vars   # rellena los secretos
npx wrangler d1 migrations apply DB --local
npm run dev                      # http://localhost:8787
```

En el front, `NEXT_PUBLIC_API_URL=http://localhost:8787`.

## Estado y administración

- `GET /config` indica qué proveedores OAuth tienen credenciales. El menú de acceso solo muestra los configurados y avisa cuando no hay ninguno.
- El apodo se valida en el servidor: 2-40 caracteres, se recorta y se aplica al crear la cuenta y al actualizarlo.
- Para moderar, inicia sesión y promueve tu cuenta una vez (el usuario debe existir):

```bash
cd api
npm run promote-admin -- tu@email.com
```

Después, abre `https://openportsgames.com/es/admin` (o `/en/admin`) con esa cuenta para moderar denuncias y comentarios del tablón desde la web. La página también está disponible por API: `GET /admin/reports`, `PATCH /admin/comments/:id` (`{"status":"hidden"}` o `{"status":"visible"}`) y `DELETE /admin/users/:id` requieren la cookie de una cuenta con rol `admin`. Para moderar el tablón usa `GET /admin/missing-comments` y `PATCH /admin/missing-comments/:id`; para cerrar una denuncia, `DELETE /admin/reports/:id`. Las propuestas ocultas dejan de mostrar y aceptar comentarios. Si los llamas con `curl`, añade `-H "Origin: https://openportsgames.com"`: el Worker rechaza toda escritura sin un origen permitido.

## Notas

- `api/src/port-ids.json` se genera con `npm run gen:ids` desde `api/`. **Regénéralo cada vez que añadas ports** o la API devolverá 404 en sus ratings/comentarios.
- El Worker solo acepta el origen `https://openportsgames.com` (y localhost en `ENVIRONMENT=dev`).
- Los comentarios son texto plano; el front los renderiza con `whitespace-pre-wrap`, nunca como HTML.
