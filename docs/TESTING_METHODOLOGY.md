# Testing methodology

How ports are verified, what a test records and when a port earns a badge.
The public-facing page (`/testing`) states the same rules.

## Rules

1. Tests run only on the team's **public hardware profiles** (`/testing`).
2. A test records the **port**, the **version** tested, the **result**
   (`pass`/`fail`), the **hardware profile**, the **tester** and the **date**.
3. A port shows a **Tested** badge only when a registered test exists for it.
4. A test on a version **older** than the latest release is dimmed and marked
   as potentially outdated (`Tested · older version`).

## Hardware profiles

Declared in `src/content/hardware`. Each profile is public, identified by a
slug, describes one machine (PC) or device (Android), and names its tester.
A test may only claim the profile its tester owns.

- `pc-primary` — Kymie131.
- `android-primary` — Kymie131.

## Registering a test

1. Run the port on a declared profile at a pinned version.
2. Open a **test report** from `/submit` (uses the `test-report.yml` template
   in `.github/ISSUE_TEMPLATE`).
3. After review, a `tests/*` record is added: it drives the badge on the port
   page automatically.

## No test, no badge

Badges derive exclusively from `tests` data (`getTestStatuses`). There is no
manual “tested” flag on ports, so a stale claim cannot survive a rebuild.
