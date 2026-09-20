# API — `/api/ports.json`

Static, versioned snapshot of the complete catalog. It is emitted at build
time (`src/app/api/ports.json/route.ts` via `src/lib/ports/api-json.ts`):
the same file every consumer reads is the one validated in CI.

## Payload (v1)

```jsonc
{
  "schema": "openportsgames/catalog", // fixed marker
  "version": 1,                       // bump when breaking fields change
  "generatedAt": "2026-09-19",        // build date, YYYY-MM-DD
  "site": "https://openportsgames.example",
  "ports": [
    {
      "id": "2ship2harkinian",
      "title": "2 Ship 2 Harkinian",
      "game": "The Legend of Zelda: Majora's Mask",
      "developers": ["…"],
      "publisher": "…",
      "originalYear": 2000,
      "portType": "decompilation",
      "platforms": ["windows"],
      "status": "stable",
      "release": { "version": "5.0.1", "date": "2026-09-18" },
      "sources": ["https://github.com/HarbourMasters/2ship2harkinian"],
      "website": "…",
      "docs": "…",
      "discord": "…",      // optional, official community server
      "license": { "spdx": "CC0-1.0" },
      "aiDisclosure": false,
      "verified": true,
      "verifiedAt": "2026-09-19",
      "notes": "…",
      "originalSystem": "Nintendo 64",
      "features": ["…"],      // optional
      "requirements": {},     // optional { minimum?, recommended? }
      "screenshots": []       // optional [{ src, alt, credit }]
    }
    // …every port
  ],
  "hardware": [ /* HardwareProfile records */ ],
  "tests": [   /* TestRecord records; empty until first badged test */ ]
}
```

Notes:

- `ports` excludes `takedown` entries.
- `sources`, `website`, `docs`, `discord` are always `https:` official links.
- `release.version` is nullable and `release.date` nullable; content
  invariants are documented in `docs/DATA_MODEL.md`.

## Schema

The authoritative schema is `catalogApiSchema` in
`src/lib/ports/api-json.ts` (zod), unit-tested in
`tests/unit/api-json.test.ts`. Consumers should parse against that shape and
treat unknown fields as forwards-compatible.