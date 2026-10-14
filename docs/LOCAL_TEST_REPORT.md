# Local Test Report — Phase T (full LOCAL verification)

- Date: 2026-10-14
- Scope: local only (no push, no deploy, no `--remote`, no real Cloudflare resources).
- Result: **BLOCKED at step 1 (prechecks).** Nothing beyond the prechecks was executed.

## Step 1 — Prechecks: FAIL

Required local env files are missing:

| File | Expected | Actual |
| ---- | -------- | ------ |
| `api/.dev.vars` | exists, contains all key names from `api/.dev.vars.example` | **MISSING** |
| `.env.local` | exists, contains all key names from `.env.example` | **MISSING** |

Both files are gitignored local-only files (`.gitignore`: `.env*` except `.env.example`; `api/.dev.vars`), so their absence is a local setup gap, not a repo defect. Because step 1 defines a hard gate ("If something is missing, STOP and list it"), the phase was stopped here.

### Key names required in `api/.dev.vars` (from `api/.dev.vars.example`)

```
ENVIRONMENT
SITE_ORIGIN
BETTER_AUTH_SECRET
BETTER_AUTH_URL
COOKIE_DOMAIN
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
DISCORD_CLIENT_ID
DISCORD_CLIENT_SECRET
GITHUB_CLIENT_ID
GITHUB_CLIENT_SECRET
TURNSTILE_SECRET
```

### Key names required in `.env.local` (from `.env.example`)

```
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_BASE_PATH
NEXT_PUBLIC_SUPPORT_PAYPAL_URL
NEXT_PUBLIC_API_URL
NEXT_PUBLIC_TURNSTILE_SITE_KEY
NEXT_PUBLIC_CONTACT_EMAIL
```

## Status per step

| # | Step | Status |
| - | ---- | ------ |
| 1 | Prechecks (`.dev.vars`, `.env.local`, key names) | **FAIL — files missing** |
| 2 | Static checks (api typecheck+test, root typecheck/lint/test/build, static-export leak check) | BLOCKED (not run) |
| 3 | DB local migrations + table check | BLOCKED (not run) |
| 4 | Start API on :8787 + poll `/health` | BLOCKED (not run) |
| 5 | API smoke tests (a–p) | BLOCKED (not run) |
| 6 | Rate-limit check (40 rapid requests) | BLOCKED (not run) |
| 7 | Web dev on :3000 + page/log checks | BLOCKED (not run) |
| 8 | CSP / `public/_headers` / component review | BLOCKED (not run) |
| 9 | Security grep (SQL concat, tracked secrets) | BLOCKED (not run) |
| 10 | Cleanup (kill background processes) | N/A — no processes started |

## Bugs fixed

None. No code was changed; no fixes were warranted.

## Human action required

1. Create `api/.dev.vars` from `api/.dev.vars.example` with real local OAuth/test values (never commit it).
2. Create `.env.local` from `.env.example` with the local values (at minimum `NEXT_PUBLIC_API_URL=http://localhost:8787` for the local smoke tests).
3. Re-run Phase T; stepping past the gate should then be possible.

Note: OAuth login itself is verified manually by a human, not by this automated run.
