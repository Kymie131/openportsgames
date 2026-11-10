# Competitor and web-port audit - 2026-11-10

Sources checked:

- **RecompLauncher** (`recomplauncher.com`): 1,439 game pages; 1,181 at the first pass and 1,439 now. Most of the recent additions are already imported or covered.
- **PortsDR** (`portsdr.com`): 317 catalogued projects. 27 do not match a repository already in the catalog, but several of those games are already represented by another project. See `docs/PORTSDR-MISSING.md`.
- **PortMaster** (`portmaster.games`): 1,530 packages. 1,438 titles are not in the catalog by name; most are Linux handheld wrappers, setup packages or indie games rather than new native console ports. See `docs/PORTMASTER-MISSING.md`.
- **Web/WASM**: 47 browser ports are catalogued. None of the three launchers exposes an additional web-port catalog; the current list is in `docs/WEB-PORTS.md`.
- **INXANITY Labs** (`inxanitylabs.com/games`): 176 browser games, verified 2026-11-10. It is a link directory, not a download host. 11 browser ports were added as web entries with the INXANITY page as the official redirect; the full list is in `docs/INXANITY-WEB.md`.

Result: no separate web-game catalog was found. The main remaining discovery source is PortsDR's 27 unmatched projects, followed by a manual relevance review of PortMaster's 1,438 unmatched titles.
