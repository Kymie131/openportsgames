# Security policy

## Reporting a vulnerability

OpenPortsGames is a static site with no backend and no cookies, which keeps
the attack surface small. If you still find a security issue, do not open a
public issue. Report it privately:

- via the repository's private report flow (Security tab, "Report a
  vulnerability"), or
- by direct message to a maintainer.

Do not include secrets, tokens or personal data in any report.

## What to report

- Code injection or XSS paths in the data layer or components
- Broken link validation that would allow direct links to copyrighted
  content
- Accidental exposure of secrets in the repository history

## Secrets

No tokens or API keys are stored in this repository. CI uses GitHub's
built-in token scoped to the workflow. If you ever find a committed secret,
treat it as compromised and rotate it immediately.

## Supported versions

Only the current `main` branch is supported. This project follows
semantic versioning once tagged releases begin.
