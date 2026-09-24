# Contributing

Thanks for helping OpenPortsGames grow. It's a community catalog of native
game ports, and contributions come in two flavors: code and data. This guide
describes both, and the ground rules that keep the catalog worth trusting.

## Ground rules

- **No direct links to downloadable files** (ROMs, ISOs, BIOS, APKs, zips, or
  any other archive). Only official project pages: repository, releases page,
  Discord invite or the authors' website. This is the one rule I will not
  negotiate — the whole editorial policy hangs on it. See
  `docs/EDITORIAL_POLICY.md` for the reasoning.
- No emojis in UI copy, docs, commits or issues.
- Write port summaries like a factual editor: what it is, platforms, what
  makes it distinct. Under 220 characters. No marketing language — "amazing",
  "revolutionary" is what we do not do here.
- Never invent data. If you cannot verify a fact, leave `verified: false` and
  note it in `docs/PENDING_VERIFICATION.md`. An honest blank beats a confident
  guess.

## Workflow

1. Every change starts on a branch with a prefix: `feat/`, `fix/`, `docs/`,
   `chore/`, `content/`.
2. Submit a pull request into `main`.
3. Write conventional commits (`feat:`, `fix:`, `docs:`, `chore:` followed by
   a short summary), but write them about what you actually did — a commit
   message that names the thing is better than one that names the category.
4. Keep commits small and self-contained.

The maintainers review the PR. Most submissions will come from the issue
templates, which keep reports structured.

## Adding or updating a port

1. Read `docs/DATA_MODEL.md` for the field list and `src/content/ports/` for
   existing examples.
2. Only use links that pass the editorial rules in `docs/EDITORIAL_POLICY.md`.
3. Set `verified: true` only if you checked the repository or official site
   yourself (URL, latest version, date, platforms, license). A `verified`
   entry that nobody could reproduce is worse than no entry.
4. Run `npm run validate` before pushing. CI runs it again.

## Adding a team test

Only project-maintained tests earn the "Tested" badge, and they are added by
the project team, not by random contributors. That is not gatekeeping: the
whole point of the badge is that it comes from a declared hardware profile
and a named tester. If you are a community tester, read
`docs/TESTING_METHODOLOGY.md` first and consider proposing a test through the
template. Community reports never show the official badge.

## Code style

- Run `npm run lint` and `npm run typecheck` before committing.
- Prettier is enforced: `npm run format:check`.
- Comment the why, not the what.
- Keep dependencies minimal. Ask before adding one — a hobby project with
  ten dev dependencies is easier to keep alive than one with a hundred.

## Reporting issues

Use the issue templates. For broken links or wrong data the template builds a
prefilled issue automatically from each port page.

For anything safety-related, see `SECURITY.md`.
