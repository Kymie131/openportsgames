/**
 * Canonical original-system registry.
 *
 * A single source of truth for the console/system a port came from: a stable
 * slug, a localized display name, an optional logo under `public/logos/console`
 * and a brand color pair tuned for the dark ("terminal CRT") and light
 * ("paper") themes.
 *
 * `meta.ts` still keys ports by the exact `originalSystem` label; this module
 * normalizes those labels (duplicates, composed systems) into one entry each.
 */
import { assetPath } from "@/lib/utils";

export const systemSlugs = [
  "nes",
  "snes",
  "n64",
  "gamecube",
  "wii",
  "game-boy",
  "gba",
  "nds",
  "3ds",
  "playstation",
  "playstation-2",
  "playstation-3",
  "playstation-4",
  "psp",
  "xbox",
  "xbox-360",
  "sega-md",
  "sega-saturn",
  "sega-cd",
  "dreamcast",
  "ms-dos",
  "windows",
  "macintosh",
  "commodore-64",
  "arcade",
  "atari",
  "other",
] as const;

export type SystemSlug = (typeof systemSlugs)[number];

export interface SystemDefinition {
  slug: SystemSlug;
  name: { en: string; es: string };
  /** Slug of the logo file in `public/logos/console`, when artwork exists. */
  logo?: string;
  /** Brand color used on light backgrounds. */
  color: string;
  /** Brand color tuned for dark backgrounds. */
  colorOnDark: string;
}

export const systems: Record<SystemSlug, SystemDefinition> = {
  nes: {
    slug: "nes",
    name: { en: "NES", es: "NES" },
    logo: "nes",
    color: "#E60012",
    colorOnDark: "#FF5A5F",
  },
  snes: {
    slug: "snes",
    name: { en: "Super Nintendo", es: "Super Nintendo" },
    logo: "snes",
    color: "#7B5EA7",
    colorOnDark: "#B79BE0",
  },
  n64: {
    slug: "n64",
    name: { en: "Nintendo 64", es: "Nintendo 64" },
    logo: "n64",
    color: "#009E60",
    colorOnDark: "#3DDC84",
  },
  gamecube: {
    slug: "gamecube",
    name: { en: "GameCube", es: "GameCube" },
    logo: "gamecube",
    color: "#6A5ACD",
    colorOnDark: "#A99BFF",
  },
  wii: {
    slug: "wii",
    name: { en: "Wii", es: "Wii" },
    logo: "wii",
    color: "#00A0C6",
    colorOnDark: "#4FD3F0",
  },
  "game-boy": {
    slug: "game-boy",
    name: { en: "Game Boy", es: "Game Boy" },
    logo: "game-boy",
    color: "#8BAC0F",
    colorOnDark: "#C6D96B",
  },
  gba: {
    slug: "gba",
    name: { en: "Game Boy Advance", es: "Game Boy Advance" },
    logo: "gba",
    color: "#4B3FA0",
    colorOnDark: "#9C90F0",
  },
  nds: {
    slug: "nds",
    name: { en: "Nintendo DS", es: "Nintendo DS" },
    logo: "nds",
    color: "#9AA0A6",
    colorOnDark: "#C3C8CC",
  },
  "3ds": {
    slug: "3ds",
    name: { en: "Nintendo 3DS", es: "Nintendo 3DS" },
    logo: "3ds",
    color: "#CE181E",
    colorOnDark: "#FF6B6B",
  },
  playstation: {
    slug: "playstation",
    name: { en: "PlayStation", es: "PlayStation" },
    logo: "playstation",
    color: "#003791",
    colorOnDark: "#6E9BFF",
  },
  "playstation-2": {
    slug: "playstation-2",
    name: { en: "PlayStation 2", es: "PlayStation 2" },
    logo: "playstation-2",
    color: "#003791",
    colorOnDark: "#6E9BFF",
  },
  "playstation-3": {
    slug: "playstation-3",
    name: { en: "PlayStation 3", es: "PlayStation 3" },
    logo: "playstation-3",
    color: "#003791",
    colorOnDark: "#6E9BFF",
  },
  "playstation-4": {
    slug: "playstation-4",
    name: { en: "PlayStation 4", es: "PlayStation 4" },
    logo: "playstation-4",
    color: "#003791",
    colorOnDark: "#6E9BFF",
  },
  psp: {
    slug: "psp",
    name: { en: "PlayStation Portable", es: "PlayStation Portable" },
    color: "#003791",
    colorOnDark: "#6E9BFF",
  },
  xbox: {
    slug: "xbox",
    name: { en: "Xbox", es: "Xbox" },
    logo: "xbox",
    color: "#107C10",
    colorOnDark: "#4CBB4C",
  },
  "xbox-360": {
    slug: "xbox-360",
    name: { en: "Xbox 360", es: "Xbox 360" },
    logo: "xbox-360",
    color: "#107C10",
    colorOnDark: "#4CBB4C",
  },
  "sega-md": {
    slug: "sega-md",
    name: { en: "Mega Drive / Genesis", es: "Mega Drive / Genesis" },
    color: "#0089CF",
    colorOnDark: "#57C5FF",
  },
  "sega-saturn": {
    slug: "sega-saturn",
    name: { en: "Sega Saturn", es: "Sega Saturn" },
    color: "#0089CF",
    colorOnDark: "#57C5FF",
  },
  "sega-cd": {
    slug: "sega-cd",
    name: { en: "Sega CD / Mega-CD", es: "Sega CD / Mega-CD" },
    color: "#0089CF",
    colorOnDark: "#57C5FF",
  },
  dreamcast: {
    slug: "dreamcast",
    name: { en: "Dreamcast", es: "Dreamcast" },
    color: "#0089CF",
    colorOnDark: "#57C5FF",
  },
  "ms-dos": {
    slug: "ms-dos",
    name: { en: "MS-DOS", es: "MS-DOS" },
    logo: "ms-dos",
    color: "#6B6B6B",
    colorOnDark: "#B0B0B0",
  },
  windows: {
    slug: "windows",
    name: { en: "Windows", es: "Windows" },
    color: "#0078D4",
    colorOnDark: "#5FB4FF",
  },
  macintosh: {
    slug: "macintosh",
    name: { en: "Macintosh", es: "Macintosh" },
    color: "#6B6B6B",
    colorOnDark: "#B0B0B0",
  },
  "commodore-64": {
    slug: "commodore-64",
    name: { en: "Commodore 64", es: "Commodore 64" },
    color: "#6B6B6B",
    colorOnDark: "#B0B0B0",
  },
  arcade: {
    slug: "arcade",
    name: { en: "Arcade", es: "Arcade" },
    color: "#8A5CF6",
    colorOnDark: "#B79BFF",
  },
  atari: {
    slug: "atari",
    name: { en: "Atari", es: "Atari" },
    color: "#C1121F",
    colorOnDark: "#FF6B6B",
  },
  other: {
    slug: "other",
    name: { en: "Other", es: "Otros" },
    color: "#6B6B6B",
    colorOnDark: "#B0B0B0",
  },
};

/** Exact `originalSystem` label (from `meta.ts`) -> canonical slug. */
export const systemSlugByLabel: Record<string, SystemSlug> = {
  "Nintendo Entertainment System": "nes",
  "Super Nintendo": "snes",
  "Nintendo 64": "n64",
  GameCube: "gamecube",
  "Nintendo GameCube": "gamecube",
  Wii: "wii",
  "Game Boy": "game-boy",
  "Game Boy / Game Boy Color": "game-boy",
  "Game Boy Color": "game-boy",
  "Game Boy Advance": "gba",
  "Nintendo DS": "nds",
  "Nintendo 3DS": "3ds",
  PlayStation: "playstation",
  "PlayStation 2": "playstation-2",
  "PlayStation 3": "playstation-3",
  "PlayStation 4": "playstation-4",
  "PlayStation Portable": "psp",
  Xbox: "xbox",
  "Xbox 360": "xbox-360",
  "Sega Mega Drive / Genesis": "sega-md",
  "Sega Saturn": "sega-saturn",
  "Sega CD / Mega-CD": "sega-cd",
  Dreamcast: "dreamcast",
  "MS-DOS": "ms-dos",
  "Microsoft Windows": "windows",
  Macintosh: "macintosh",
  "Commodore 64": "commodore-64",
  Atari: "atari",
  "Atari 2600": "atari",
  "Namco System 22": "arcade",
  "PlayStation / Sega Saturn": "playstation",
  "MS-DOS / Amiga": "ms-dos",
  "MS-DOS / Microsoft Windows": "ms-dos",
  "Microsoft Windows / MS-DOS": "windows",
};

/** Supplementary label shown next to the primary system for composed systems. */
const secondaryLabelBySystem: Record<string, { en: string; es: string }> = {
  "PlayStation / Sega Saturn": { en: "Sega Saturn", es: "Sega Saturn" },
  "MS-DOS / Amiga": { en: "Amiga", es: "Amiga" },
  "MS-DOS / Microsoft Windows": { en: "Windows", es: "Windows" },
  "Microsoft Windows / MS-DOS": { en: "MS-DOS", es: "MS-DOS" },
  "Game Boy / Game Boy Color": { en: "Game Boy Color", es: "Game Boy Color" },
};

export interface ResolvedSystem {
  slug: SystemSlug;
  definition: SystemDefinition;
  /** Full original label, shown as the human-readable system name. */
  label: string;
  /** Concise badge name (localized), e.g. "N64". */
  name: { en: string; es: string };
  /** Extra label for systems that combine two platforms. */
  secondary?: { en: string; es: string };
  logo: string | null;
}

/** Resolves any `originalSystem` label to its canonical system definition. */
export function resolveSystem(label: string | undefined | null): ResolvedSystem | null {
  if (!label) return null;
  const slug = systemSlugByLabel[label];
  if (slug === undefined) return null;
  const definition = systems[slug];
  return {
    slug,
    definition,
    label,
    name: definition.name,
    secondary: secondaryLabelBySystem[label],
    logo: definition.logo ? assetPath(`/logos/console/${definition.logo}.png`) : null,
  };
}

/** Convenience accessor by slug. */
export function getSystem(slug: SystemSlug): SystemDefinition {
  return systems[slug];
}
