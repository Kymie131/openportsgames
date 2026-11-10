# Other sources audit - 2026-11-10

Reviewed the main competing catalogs and launchers. Counts are page-level and may
include multiple projects for the same game; repository-level verification is the
next step for the remaining lists.

| Source | What it is | Count seen | Status |
| --- | --- | --- | --- |
| RecompLauncher | Recomp/decomp launcher | 1,439 game pages | Main source; already mined |
| PortsDR | Port catalog | 317 projects | 27 repo-unmatched; reasons in `docs/PORTSDR-REASONS.md` |
| PortMaster | Linux handheld launcher | 1,530 packages | 1,438 title-level unmatched; mostly wrappers/indie, see `docs/PORTMASTER-MISSING.md` |
| INXANITY Labs | Browser-game directory | 176 games | 11 browser ports added; see `docs/INXANITY-WEB.md` |
| Decompdex | Decomp/recomp catalog | 796 games | 174 name-level candidates; repo-level pass pending |
| RecompHub | Recomp catalog | 50+ per page | Not fully enumerated |
| Decomps.net | Decomp catalog | 158+ links | Not fully enumerated |
| TabPlay Games | Browser/PC ports | 120 | Not fully enumerated |
| MegaClip Games | Decomp/port directory | 1,094 links | Not fully enumerated |

## Genuine additions from this pass

- 13 Sentinels: Aegis Rim PC (`13-sentinels-aegis-rim-pc`) - PS4 runtime port with Windows/Linux releases.
- OpenPete (`spyro-openpete`) - native Spyro the Dragon recompilation with Windows/Linux downloads.
- Pokémon X/Y Recomp (`pokemon-x-recomp`) - unreleased 3DS recompilation; redirect to official repos.
- 11 INXANITY browser ports - web entries with official redirects.

## Remaining work

1. Repository-level check of Decompdex's 174 name-level candidates.
2. Enumerate RecompHub, Decomps.net, TabPlay and MegaClip pagination.
3. Keep PortMaster as a separate "handheld packages" backlog; do not mix wrappers with native ports.
