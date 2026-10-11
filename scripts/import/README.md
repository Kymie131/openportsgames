# Catalog import scripts

Throwaway Node scripts used to bulk-import port entries into
`src/content/ports/`, kept here for provenance. They are historical: paths are
hardcoded and the scripts are not maintained.

## Inputs

- `gamewave-catalog-2026-10-07.json` — snapshot of
  `https://gamewave.digital/ports/catalog.json` (704 apps), downloaded
  2026-10-07. Console and Android ports.
- PortsDR (`https://portsdr.com/`) was read live; no JSON snapshot is kept.

## Scripts

- `gw-diff.cjs` / `gw-missing.cjs` — diff the GameWave catalog against the
  existing entries and list what is missing.
- `gen-x360-batch.cjs`, `gen-console-batch.cjs` — write the `.ts` files for a
  batch and wire `index.ts` and `meta.ts`.
- `gen-portsdr.cjs` — write the PortsDR entries (no public repository) and add
  them to the test allowlist for the shared `https://portsdr.com/` source.

Each generator writes one `src/content/ports/<id>.ts` per entry. Imported
entries carry `sourceVerified: false` unless checked by hand afterwards.
