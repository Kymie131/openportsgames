# Pending verification

This document tracks catalog candidates whose official data (latest release,
license, or a stable distribution channel) could not be confirmed when the
catalog was last audited on **2026-09-19**. Entries below are either excluded
from the catalog or kept with `verified: false`.

## Kept in the catalog (verified: false)

| Port | Reason |
| --- | --- |
| sm64ex | No numbered releases; builds track the repository. |
| OpenLara | No numbered releases; rolling repository builds. |
| Xash3D FWGS | Distribution uses rolling `continuous` releases (marked prerelease). |
| OpenJK | Distribution uses a rolling `latest` release. |
| EDuke32 | Distributed as rolling builds from eduke32.com; no versioned release metadata. |
| OpenXcom | Only tagged release is `v1.0` (2014); current builds are distributed via openxcom.org. |

These ports are shown in the catalog with a visible "not verified" marker. The
weekly `catalog-update` action will flag them once versioned releases exist.

## Excluded from the catalog

The following candidates from the original backlog could not be included for
data integrity reasons. If a verifiable official source appears, reopen the
related proposal.

- **re3 / reVC (GTA III / Vice City)** — the canonical mirrors at
  `GTAModding/re3` and `GTAModding/reVC` return HTTP 451 (removed by GitHub for
  legal reasons). No official distribution remains available.
- **OpenRW (GTA San Andreas)** — project is stalled and its repository is no
  longer reachable under its canonical owner.
- **Mario Party 3 port** — no credible first-party port project with an official
  release channel could be located.
- **Banjo-Kazooie / Perfect Dark recompilations** — these ship via personal
  recompilation releases without a stable official source URL to link to.

Rationale: per editorial policy we only list projects with an official source we
can link to, and we never link to unofficial or re-uploaded binaries.