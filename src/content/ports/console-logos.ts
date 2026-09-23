/**
 * Console logo badge artwork.
 *
 * Maps an `originalSystem` label (see `meta.ts`) to a real logo artwork under
 * `public/logos/console/`. Only files that physically exist are considered
 * available: `consoleLogoForSystem` returns `null` (and the UI falls back to
 * the textual `SystemMark`) when the artwork is missing, so a badge can never
 * render a broken image.
 */
import { assetPath } from "@/lib/utils";

export const consoleLogoSlugBySystem: Record<string, string> = {
  "Nintendo 64": "n64",
  "GameCube": "gamecube",
  "Nintendo GameCube": "gamecube",
  "Wii": "wii",
  "Nintendo Entertainment System": "nes",
  "Super Nintendo": "snes",
  "Game Boy": "game-boy",
  "Game Boy Advance": "gba",
  "Nintendo DS": "nds",
  "Nintendo 3DS": "3ds",
  "Sega Mega Drive / Genesis": "sega-genesis",
  "Sega Saturn": "saturn",
  "PlayStation": "playstation",
  "PlayStation 2": "playstation-2",
  "PlayStation 3": "playstation-3",
  "PlayStation 4": "playstation-4",
  "Xbox": "xbox",
  "Xbox 360": "xbox-360",
  "MS-DOS": "ms-dos",
  "PlayStation / Sega Saturn": "playstation",
};

/**
 * Keep in sync with `public/logos/console/*.png`. Scripts and tests may
 * verify this list against the folder to prevent 404 badges.
 */
export const consoleLogoSlugs = [
  "3ds",
  "android",
  "gba",
  "game-boy",
  "gamecube",
  "ms-dos",
  "n64",
  "nds",
  "nes",
  "playstation",
  "playstation-2",
  "playstation-3",
  "playstation-4",
  "snes",
  "wii",
  "xbox",
  "xbox-360",
] as const;

export type ConsoleLogoSlug = (typeof consoleLogoSlugs)[number];

const availableLogos = new Set<string>(consoleLogoSlugs);

/** Path of the console logo for `system`, or `null` if none exists. */
export function consoleLogoForSystem(system: string | undefined | null): string | null {
  if (!system) return null;
  const slug = consoleLogoSlugBySystem[system];
  if (typeof slug !== "string" || !availableLogos.has(slug)) return null;
  return assetPath(`/logos/console/${slug}.png`);
}