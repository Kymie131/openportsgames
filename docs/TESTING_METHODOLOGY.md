# Testing methodology

This is how ports earn their **Tested** badge, how a test is recorded, and why
the badge means something. The public-facing page (`/testing`) says the same
thing.

I never wanted this site to repeat the classic forum move: someone posts "I
tested it, runs perfect, 10/10" and there's no way to know on what machine,
which version, or whether the post is even from the same person. Test records
exist so a claim can be checked. The badge is the smallest honest unit this
project can promise.

## Rules

1. Tests run only on the team's **public hardware profiles** (`/testing`).
2. A test records the **port**, the **version** tested, the **result**
   (`pass`/`fail`), the **hardware profile**, the **tester** and the **date**.
3. A port shows a **Tested** badge only when a registered test exists for it.
4. A test on a version **older** than the latest release is dimmed and marked
   as potentially outdated (`Tested · older version`).

Rule 4 matters more than it looks. A port that shipped five releases ago may
run nothing like it did then, and promising otherwise helps nobody. Better to
show "this was tested, on this version" and let the dimming say the rest.

## Hardware profiles

Declared in `src/content/hardware`. Each profile is public, identified by a
slug, describes one machine (PC) or device (Android), and names its tester.
A test may only claim the profile its tester owns.

- `pc-primary` — Kymie131.
- `android-primary` — Kymie131.

Why public hardware and not "trust me"? Because a test result is only
interpretable with its machine: a port that stutters on a 4GB Android phone
is different news than the same port on a flagship. The profile turns a
claim into a spec sheet.

## Registering a test

1. Run the port on a declared profile at a pinned version.
2. Open a **test report** from `/submit` (uses the `test-report.yml` template
   in `.github/ISSUE_TEMPLATE`).
3. After review, a `tests/*` record is added: it drives the badge on the port
   page automatically.

## No test, no badge

Badges derive exclusively from `tests` data (`getTestStatuses`). There is no
manual "tested" flag on ports, so a stale claim cannot survive a rebuild.
If a rebuild happens and the test record is gone, the badge disappears with
it — the site cannot lie by accident.
