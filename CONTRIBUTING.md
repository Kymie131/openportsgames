# Contributing

Thanks for helping OpenPortsGames grow. The project is a community catalog of
native game ports; contributions come in two flavors: code and data. This
guide describes both.

## Ground rules

- No direct links to downloadable files (ROMs, ISOs, BIOS, APKs, zips, or any
  other archive). Only official project pages: repository, releases page,
  Discord invite or the authors' website.
- No emojis in UI copy, docs, commits or issues.
- Write port summaries like a factual editor: what it is, platforms, what
  makes it distinct. Under 220 characters. No marketing language.
- Never invent data. If you cannot verify a fact, leave `verified: false` and
  note it in `docs/PENDING_VERIFICATION.md`.

## Workflow

1. Every change starts on a branch with a prefix: `feat/`, `fix/`, `docs/`,
   `chore/`, `content/`.
2. Submit a pull request into `main`.
3. Use Conventional Commits: `feat:`, `fix:`, `docs:`, `chore:` followed by a
   short imperative summary.
4. Keep commits small and self-contained.

The maintainers review the PR. Most submissions will come from the issue
templates, which keep reports structured.

## Adding or updating a port

1. Read `docs/DATA_MODEL.md` for the field list and `content/ports/` for
   existing examples.
2. Only use links that pass the editorial rules in `docs/EDITORIAL_POLICY.md`.
3. Set `verified: true` only if you checked the repository or official site
   yourself (URL, latest version, date, platforms, license).
4. Run `npm run validate` before pushing. CI runs it again.

## Adding a team test

Only project-maintained tests earn the "Tested" badge, and they are added by
the project team, not by random contributors. If you are a community tester,
read `docs/TESTING_METHODOLOGY.md` first. Community reports never show the
official badge.

## Code style

- Run `npm run lint` and `npm run typecheck` before committing.
- Prettier is enforced: `npm run format:check`.
- Comment the why, not the what.
- Keep dependencies minimal. Ask before adding one.

## Reporting issues

Use the issue templates. For broken links or wrong data the template builds a
prefilled issue automatically from each port page.

For anything safety-related, see `SECURITY.md`.
