# Changelog

Notable changes to OpenPortsGames. Versioning follows semver; commits use
conventional prefixes.

## [Unreleased]

### Added

- Box art for the whole catalog: every port now shows a cover. Classic
  systems use libretro-thumbnails; the modern consoles (PS4, PS5, Xbox 360,
  Switch) use official cover art from Wikipedia/Wikimedia, credited as such.
- P.T. native PC port (`LoreanXavier/pt-pc`): the cancelled teaser rebuilt in
  C++ with a Vulkan renderer, reading your own PS4 files; playable start to
  finish with DLSS/FSR/XeSS, ray tracing and mods.
- Silent Hill native PC port (`SlickAmogus/silent-hill-decomp`) and Silent
  Engine (`Sezzary/SilentEngine`), two independent ports built on the Silent
  Hill PSX decompilation.
- NFS Most Wanted (2005) recompilation (`madelrandel-blip/NFSMW-Recompiled`),
  with its Switch and Android community ports.
- re:Blue (Blue Dragon) updated to v1.3.1.
- Bloodborne (unofficial native runtime port, "bbport"): runs the PS4 x86-64
  executable natively with no emulation, a custom runtime replacing the PS4
  libraries and graphics translated to Vulkan via a shadPS4-derived renderer.
  It required a new `runtime-port` technique (the Wine/DXVK approach for one
  title), added to the catalog filters and the guides.
- New `/emulators` section: browse emulators by console generation. Pick a
  generation to see its consoles (with logo or a brand-colored monogram), then
  a console to see its emulators ranked by compatibility, with the best pick
  flagged, official source, platforms and license. Consoles with no public
  emulator show an explicit empty state, and each console links to the native
  ports we have for it. Covers generations 1–10, including the early PS5
  emulators (SharpEmu, KytyPS5, RPCSX, KytyPlus) and the Switch 2
  proof-of-concepts (Ubelisk, oboromi).
- 39 more verified ports from the scene's primary lists (Recompendium,
  recomp.fyi, decomp.dev, readonlymemo), including closed-code games with
  public port code:
  - NES: Duck Hunt, Dr. Mario, The Legend of Zelda, Faxanadu, Yoshi, Yoshi's
    Cookie, Mega Man 3, Gumshoe, Pac-Man, Super Mario Bros. (SMB Vanilla).
  - SNES: A Link to the Past, Super Metroid. Genesis: Sonic 1, Streets of Rage.
  - PS1: Tsumu Light, Xenogears, R4: Ridge Racer Type 4, King's Field.
  - N64: Mega Man 64, Rocket: Robot on Wheels, San Francisco Rush 2, Chameleon
    Twist 2, Superman, WCW/nWo Revenge, Hamster Monogatari 64, Super Smash Bros.
    (BattleShip), Paper Mario (PaperBoat).
  - GameCube: Animal Crossing, Metroid Prime.
  - Xbox: Halo: Combat Evolved. Xbox 360: Lost Odyssey, Dead Rising 2: Case
    Zero, Ninja Gaiden II, Perfect Dark (XBLA), Sonic Free Riders, Superman
    Returns, Wet, Too Human, Spider-Man: Edge of Time.
- Official box-art `cover` for 108 ports total (added 42 more, from
  libretro-thumbnails), so nearly every card shows real art instead of a
  placeholder.
- Optional `cover` field: an official box-art fallback shown only when a port
  has no project screenshots, so every card has real art instead of a placeholder.
  Added for 66 ports (sourced from libretro-thumbnails box art).
- Screenshots are now presented with `object-contain` over a blurred copy of
  the same image, so 4:3, 1:1, 10:9 and 2:1 captures are never cropped; pixel-art
  systems render with `image-rendering: pixelated`.
- Catalog pagination: 30 ports per page, reflected in the URL (`?page=N`) with
  accessible Previous/Next and numbered controls.
- Home page now leads with a computed "Latest releases" section ordered by each
  project's own release date, above the curated "Featured ports" block.
- Per-system registry (`src/content/systems.ts`) with normalized labels and
  brand colors, and a `SystemBadge` shown on tiles and detail pages.
- Spanish `notesEs`/`featuresEs` for every port, with an "available only in
  English" notice when a translation is missing.
- 15 new verified ports, all recompilations: Metroid NES, Donkey Kong Country
  2 & 3, Mega Man X2, Mario Kart: Super Circuit, Ape Escape, Tomba! 1 & 2,
  Super Mario Bros. (NES), Link's Awakening DX, Oracle of Ages/Seasons, The
  Wind Waker, SoulCalibur II (RingOut), Dr. Mario 64 and Snowboard Kids 2.
- Support for ports of proprietary games: Forza Horizon (Pinyon Shift) and
  Gears of War (gears1), with an optional `originalGameLicense` field and a
  "Proprietary game" badge distinct from "Closed source".
- Home page: live stats, a curated "Featured ports" section and new landing
  sections.
- Brand logo in the site header (transparent/dark variants per theme).
- Console logos: Nintendo 3DS, Game Boy Advance, Nintendo DS.
- Optional donation link on `/support` via `NEXT_PUBLIC_SUPPORT_PAYPAL_URL`.
- Team credits section on the `/about` page.
- First registered test record (Silent Hill: Downpour) and its Tested badge.
- First round of official project screenshots: Downpour Recompilation,
  TriAevum, Metroid Prime Hunters Recompiled, NxEngine-Evo and PrBoom-Plus RT.
- Second round (F-Zero SNES Recompiled, OpenTTD, EDuke32, OpenMW) and then a
  third picking up OpenRA, Daggerfall Unity and OpenXcom.
- Fourth round, the biggest so far: DevilutionX, DKR-R, Dusklight, GemRB,
  Ship of Harkinian and Xash3D FWGS.
- Latest round: GZDoom, OpenRCT2, DUDE (via its official dhewm3.org homepage),
  Sonic 1 & 2 (2013) and Pokémon Red/Blue Disassembly.
- Catalog grid: every card now shows the port's first official screenshot as a
  16:9 cover, falling back to the console logo when a port has no screenshots.
- Site icon: the brand mark is served as favicon (`src/app/icon.svg` and
  `icon.png`) plus an Apple touch icon, so the browser tab shows the "O" mark.
- Official in-game screenshot for Sonic Unleashed, taken from the hedge-dev
  resources repository (`UnleashedRecompResources`) that ships the game's own
  options-menu preview frames.
- New ports round: dhewm3, ioquake3, DXX-Rebirth, Julius, CorsixTH, Raze,
  Arx Libertatis and OpenDUNE (catalog now covers 62 games).
- GitHub logo next to every source link that points at a repository, rendered
  from the official Simple Icons path instead of a font glyph.
- Screenshot round: OpenLara (two), Starship, Crash Bandicoot, Super Mario
  Bros. Remastered, Marathon Recompilation, CorsixTH (two) and Arx Libertatis
  (two), all sourced from official pages or repository content.

### Changed

- Image loading: preconnect hints for the busiest art hosts, `decoding="async"`
  and `fetchpriority` on screenshots, and the first row of catalog/home tiles
  now loads eagerly. The rest stay lazy. This cuts the cold-cache delay when
  the catalog hotlinks art from external hosts.
- Brand logo recolored from the blue gradient to the green accent gradient
  (`#6ED7A0` → `#56C589` → `#4FC3BA`), matching the site theme.
- Dusklight updated to `2.0.2` (2026-09-25), the one real update found by the
  release checker among the five it flagged.
- OpenJK now lists macOS support and links its official builds site
  (`builds.openjk.org`) instead of the repository redirect.
- Repo line endings normalized to LF (`.editorconfig` + Prettier `endOfLine`).
- Vitest configuration loaded as ESM (`vitest.config.mts`).
- `actions/checkout` pinned to a full commit SHA across all workflows.

### Fixed

- Vitest warning about ESM syntax in a CommonJS-loaded config file.
- Catalog search: a query matching nothing returned the full catalog; the
  empty state is now shown. Free-text queries are capped at 200 characters
  (protects the MiniSearch index) and the search input enforces
  the same limit.
- OpenXcom source link now points at the canonical repository
  (`OpenXcom/OpenXcom`) instead of the redirecting account.
- Social preview image: the 1200x630 card is now a real PNG served from
  `public/` (`opengraph-image.png`) and every page references it by absolute URL,
  instead of an extensionless generated asset that some hosts served as
  `application/octet-stream`.
- Sitemap: every URL (home, sections and port pages) now ends with a trailing
  slash, matching the static export's `trailingSlash` routing.
- Port pages: long meta descriptions (e.g. full `notes`) are now summarized to
  a 155-character word-boundary snippet for the tag, leaving the on-page copy
  untouched.
- Super Mario Bros. Remastered: the repository publishes versioned releases;
  the entry now lists stable `1.1.0` (2026-09-04). Pokémon Red/Blue
  Disassembly ships no releases, so its note now says builds track the
  repository (same stance as sm64ex).

### Tooling

- New local tooling to preview and audit the static export the way GitHub
  Pages serves it: `npm run serve:pages` (base path, directory redirects,
  `404.html`) and `npm run audit:site` (crawls the sitemap and reports
  FAIL/WARN/INFO). Documented in `docs/DEPLOYMENT.md`.

## [0.1.0] - 2026-09-19

### Added

- Project scaffold: Next.js App Router, TypeScript, Tailwind CSS v4.
- Static export configuration, deployment-ready for any static host.
- Tooling: ESLint, Prettier, Vitest, Playwright.
- GitHub issue templates and pull request template.
- Community files: CONTRIBUTING, CODE_OF_CONDUCT, SECURITY.
- Licenses: MIT for code, CC BY 4.0 for catalog data.
- Bilingual README (English and Spanish).

The site launched with the catalog, design system and editorial pages
finished; the phase checklist that took it there lives in `docs/ROADMAP.md`.
