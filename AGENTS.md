# Agent rules
Project: static Next.js 16 site (Cloudflare Pages, output: export) + NEW backend in api/ (Cloudflare Workers). Features: OAuth login, ratings, comments.

## Stack (fixed, do not substitute)
TypeScript, Hono, Cloudflare D1, Drizzle ORM, Better Auth (Google/Discord/GitHub OAuth only, NO passwords), zod, vitest.

## Token rules
- NEVER read or list: src/content/ports/ (1000+ files), .agents/, public/logos/, package-lock.json, node_modules/, out/, .next/.
- Use grep/head/ls on specific paths. Read only files you must edit.
- Pipe noisy commands to tail -20.
- Use installed package types/README for API details. Do not guess APIs.
- No explanations or code dumps in chat. Edit files, then reply max 3 lines.

## Security rules
- Drizzle parameterized queries only; never build SQL by string concatenation.
- Validate every input server-side with zod. Generic error responses, no stack traces.
- Session cookies HttpOnly, Secure (prod), SameSite=Lax. Strict CORS allowlist (site origin only) with credentials. Origin check on POST/PUT/PATCH/DELETE.
- Permissions enforced server-side: users modify only their own data; role "admin" for moderation.
- Comment body is plain text only; never HTML.
- Public user shape is {id, name, image} ONLY. Never return email or provider ids in any response.
- Secrets only in api/.dev.vars (gitignored) and wrangler secrets. Never commit secrets. Keep api/.dev.vars.example updated.

## Workflow
One phase per session. After each phase: run typecheck (and tests), fix errors, verify root `npm run typecheck` and `npm run lint` still pass, git commit, then STOP.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
