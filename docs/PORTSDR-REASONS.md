# PortsDR: specific reason per unmatched project

Audit 2026-11-10. “Unmatched” means the repository URL did not match a catalog source;
it does **not** automatically mean the game is missing.

| Project | Reason | Action |
| --- | --- | --- |
| 2 Ship 2 Harkinian | Already catalogued as `2ship2harkinian`. | None |
| Street Fighter III - 3SXW | Same game as `street-fighter-iii-3rd-strike-3sx`; different project. | Candidate, not a missing game |
| Ace Combat 3 USA Recomp | Already catalogued as `ace-combat-3-electrosphere-usa-recomp`. | None |
| Banjo-Tooie Recompiled | Already catalogued as `banjo-tooie-recomp`. | None |
| DOAXBV Recomp | Already catalogued as `doaxbv-re`. | None |
| Extreme-G Recomp | Already catalogued as `extreme-g-recomp`. | None |
| Kameo RePowered | Same game as `maxdeadbear-kameorepowered`; different repo. | Candidate, not a missing game |
| LADXHD Updated | Same game as `links-awakening-dx-hd-switch`; the listed repo URL is not a valid GitHub repo. | Redirect to official page if one exists |
| Luigi's Mansion PC Port | Already catalogued as `rob646464-luigis-mansion-recompiled`. | None |
| MediEvil Recomp | Already catalogued as `medievil-recomp`. | None |
| Nelumbo (Lotus Trilogy) | Already catalogued as `nelumbo`. | None |
| NFS II SE + NFS III Recomp | NFS II SE is `nfsiise`; NFS III is not covered by that entry. | Candidate for NFS III |
| Open Nectar (Pikmin) | Already catalogued as `open-nectar`. | None |
| OpenGOAL (Jak) | Already catalogued as `open-goal`. | None |
| OpenPete (Spyro) | No public repo in PortsDR; official site exists. | Add redirect entry to openpete.com |
| Parasite Eve Recomp | Already catalogued as `parasite-eve-recomp`. | None |
| Project Reignition (Sonic) | No public repo; GameJolt page exists. | Add redirect entry to GameJolt |
| project-tandem (Mario Kart DD) | Repo returns 404; game already covered by `mkdd`. | No reliable source to add |
| PvZ2 Gardendless | Already catalogued as `gzh0821-pvzge-web`. | None |
| SMAS Launcher | Launcher/tool; game covered by `super-mario-all-stars-recomp`. | Tools section, not a game port |
| SMS Launcher | Launcher/tool; game covered by `super-mario-sunshine-pc`. | Tools section, not a game port |
| Super Mario 64 DS PC Port | Already catalogued as `mstan-supermario64dsrecomp`. | None |
| Super Metroid Launcher | Launcher/tool; game covered by `super-metroid-snes-recomp`. | Tools section, not a game port |
| Syphon Filter 2 Recomp | Already catalogued as `syphon-filter-2-recompiled`. | None |
| Xena Recomp | Already catalogued as `xena-warrior-princess-recomp`. | None |
| Z3R Launcher | Launcher/tool; game covered by `zelda3launcher`. | Tools section, not a game port |
| Zelda 3 Launcher | Launcher/tool; already catalogued as `zelda3launcher`. | None |

So the exact blockers are: duplicate game coverage, launcher/tool classification, invalid or missing repository, and partial coverage (NFS III).
