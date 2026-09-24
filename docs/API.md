# API — `/api/ports.json`

A static, versioned snapshot of the complete catalog. It is emitted at build
time (`src/app/api/ports.json/route.ts` via `src/lib/ports/api-json.ts`): the
exact file a consumer reads is the same artifact CI validated. No live
endpoint, no rate limiting, no token — if you can open GitHub, you can mirror
this dataset, which seems like the right spirit for a preservation catalog.

## Payload (v2)

```jsonc
{
  "schema": "openportsgames/catalog", // fixed marker
  "version": 2, // bump when breaking fields change
  "generatedAt": "2026-09-22", // build date, YYYY-MM-DD
  "site": "https://openportsgames.example",
  "ports": [
    {
      "id": "2ship2harkinian",
      "title": "2 Ship 2 Harkinian",
      "game": "The Legend of Zelda: Majora's Mask",
      "developers": ["…"],
      "publisher": "…",
      "originalYear": 2000,
      "genre": "action-adventure", // added in v2
      "openSource": true, // added in v2
      "portType": "decompilation",
      "platforms": ["windows"],
      "status": "stable",
      "release": { "version": "5.0.1", "date": "2026-09-18" },
      "sources": ["https://github.com/HarbourMasters/2ship2harkinian"],
      "website": "…",
      "docs": "…",
      "discord": "…", // optional, official community server
      "license": { "spdx": "CC0-1.0" },
      "aiDisclosure": false,
      "verified": true,
      "verifiedAt": "2026-09-19",
      "notes": "…",
      "originalSystem": "Nintendo 64",
      "features": ["…"], // optional
      "requirements": {}, // optional { minimum?, recommended? }
      "screenshots": [], // optional [{ src, alt, credit }]
    },
    // …every port
  ],
  "hardware": [/* HardwareProfile records */],
  "tests": [/* TestRecord records; empty until first badged test */],
}
```

Notes:

- `ports` excludes `takedown` entries.
- `sources`, `website`, `docs`, `discord` are always `https:` official links.
- `release.version` is nullable and `release.date` nullable; content
  invariants are documented in `docs/DATA_MODEL.md`.
- v2 adds the required `genre` (enum) and `openSource` (boolean) fields to
  every port; v1 consumers must tolerate the new keys or parse against v2.

## Schema

The authoritative schema is `catalogApiSchema` in
`src/lib/ports/api-json.ts` (zod), unit-tested in
`tests/unit/api-json.test.ts`. Consumers should parse against that shape and
treat unknown fields as forwards-compatible — new versions may add keys, and
the `version` field is the switch to check first.
