/**
 * Screenshot presentation helpers.
 *
 * Pixel-art systems look wrong when a browser smooths them while scaling up,
 * so the gallery renders those with `image-rendering: pixelated`. The set is
 * intentionally small and enumerates `originalSystem` labels used in `meta.ts`.
 */
const PIXEL_ART_SYSTEMS = new Set<string>([
  "Nintendo Entertainment System",
  "Super Nintendo",
  "Game Boy",
  "Game Boy / Game Boy Color",
  "Game Boy Color",
  "Game Boy Advance",
  "Nintendo DS",
]);

/** True when a system's games are drawn with pixel art that must not be smoothed. */
export function isPixelArtSystem(system: string | undefined | null): boolean {
  return system !== undefined && system !== null && PIXEL_ART_SYSTEMS.has(system);
}
