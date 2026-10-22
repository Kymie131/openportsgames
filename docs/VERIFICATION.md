# Verification

How the `verified` flag works and how the update queue is produced.

## The flag

- `verified: true` means a release was confirmed against the entry's declared source. It requires a `release.version` and a `verifiedAt` date.
- `verified: false` means the version has not been re-checked (or the entry is held on editorial grounds). A release version may still be present.

The queue is derived, not hand-maintained:

```bash
npm run check:updates
```

The script compares the declared versions against upstream releases and writes `catalog-check-report.md`.

## Editorial exclusions

These are never promoted to the catalog:

- Decompilations whose only build target is a console ROM.
- Mods that redistribute retail assets.
- Store-ripped packages.
- Projects with no usable official source.

## Source verification vs. hardware verification

- `sourceVerified: true` means the official source URL was checked and resolves.
- `verified: true` is stronger: it also means a release was checked against that source.
- A hardware test is a separate record in `src/content/tests/` and is shown on the port page.
