# Contributing

Contributions come in two flavors: code and data. This guide describes both,
and the ground rules.

## Ground rules

- **No direct links to downloadable files** (ROMs, ISOs, BIOS, APKs, zips, or
  any other archive). Only official project pages: repository, releases page,
  Discord invite or the authors' website. See `docs/EDITORIAL_POLICY.md`.
- No emojis in UI copy, docs, commits or issues.
- Write port summaries like a factual editor: what it is, platforms, what makes
  it distinct. Under 220 characters. No marketing language.
- Never invent data. If you cannot verify a fact, leave `verified: false` and
  say why in the entry's `notes`. A blank is better than a guess.

## Workflow

1. Every change starts on a branch with a prefix: `feat/`, `fix/`, `docs/`,
   `chore/`, `content/`.
2. Submit a pull request into `main`.
3. Write conventional commits (`feat:`, `fix:`, `docs:`, `chore:` followed by a
   short summary).
4. Keep commits small and self-contained.

The maintainers review the PR. Most submissions come from the issue templates,
which keep reports structured.

## Adding or updating a port

1. Read `docs/DATA_MODEL.md` for the field list and `src/content/ports/` for
   existing examples.
2. Only use links that pass the editorial rules in `docs/EDITORIAL_POLICY.md`.
3. Set `verified: true` only if you checked the repository or official site
   yourself (URL, latest version, date, platforms, license).
4. Run `npm run validate` before pushing. CI runs it again.

## Adding a team test

Only project-maintained tests earn the "Tested" badge, and they are added by the
project team. The badge comes from a declared hardware profile and a named
tester. Community testers should read `docs/TESTING_METHODOLOGY.md` first and
propose a test through the template; community reports never show the official
badge.

## Code style

- Run `npm run lint` and `npm run typecheck` before committing.
- Prettier is enforced: `npm run format:check`.
- Keep dependencies minimal.

## Reporting issues

Use the issue templates. For broken links or wrong data the template builds a
prefilled issue automatically from each port page.

For anything safety-related, see `SECURITY.md`.
