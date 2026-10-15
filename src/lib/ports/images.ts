import type { Port } from "./schema";

/**
 * Systems whose games are pixel art and must not be smoothed when scaled up.
 * Labels match `originalSystem` in `meta.ts`.
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

/**
 * Single source of truth for the remote hosts we are willing to render art
 * from. We hotlink only; nothing is downloaded or copied into the repository.
 * `tests/content/images.test.ts` fails the build when a data URL falls outside
 * this list, and `scripts/check-images.mjs` probes each URL.
 */
export const IMAGE_HOST_WHITELIST = [
  // Screenshot/box-art mirrors.
  "thumbnails.libretro.com",
  "upload.wikimedia.org",
  "thumb.wikimedia.org",
  "cdn2.steamgriddb.com",
  "cdn.cloudflare.steamstatic.com",
  "images.launchbox-app.com",
  // Project-owned art (repository or its own site).
  "raw.githubusercontent.com",
  "user-images.githubusercontent.com",
  "github.com",
  "i.imgur.com",
  "i.ibb.co",
  "img.itch.zone",
  "randovania.org",
  "pokerogue.net",
  "www.kartkrew.org",
  "wiki.arx-libertatis.org",
  "www.chocolate-doom.org",
  "corsixth.com",
  "www.dfworkshop.net",
  "dhewm3.org",
  "files.facepunch.com",
  "twilitrealm.dev",
  "www.eduke32.com",
  "gemrb.github.io",
  "openmw.org",
  "www.openra.net",
  "www.openttd.org",
  "openxcom.org",
  "www.shipofharkinian.com",
] as const;

const WHITELIST = new Set<string>(IMAGE_HOST_WHITELIST);

/** Hosts owned by the port's own repository, used as SourceMark in the UI. */
const PROJECT_HOSTS = new Set([
  "raw.githubusercontent.com",
  "user-images.githubusercontent.com",
  "github.com",
]);

const LIBRETRO_HOST = "thumbnails.libretro.com";
const WIKIMEDIA_HOSTS = new Set(["upload.wikimedia.org", "thumb.wikimedia.org"]);

export function imageHost(url: string): string | null {
  try {
    return new URL(url).host;
  } catch {
    return null;
  }
}

/** True when the URL is https and its host is on the whitelist. */
export function isAllowedImageUrl(url: string): boolean {
  if (!url.startsWith("https://")) return false;
  const host = imageHost(url);
  return host !== null && WHITELIST.has(host);
}

export type ImageKind = "cover" | "screenshot";

export type ImageCandidate = {
  src: string;
  kind: ImageKind;
  host: string;
  /** 0 = project repo, 1 = libretro, 2 = other, 3 = Wikimedia (last resort). */
  rank: number;
};

/** Rank a source host: project art > libretro > other > Wikimedia. */
export function hostRank(host: string): number {
  if (PROJECT_HOSTS.has(host)) return 0;
  if (host === LIBRETRO_HOST) return 1;
  if (WIKIMEDIA_HOSTS.has(host)) return 3;
  return 2;
}

/**
 * Ordered image candidates for a port: project-repo art first, then the
 * libretro cover, then other mirrors; Wikimedia is only used when nothing else
 * exists. A cover beats a screenshot at the same rank.
 */
export function imageCandidates(port: Port): ImageCandidate[] {
  const candidates: ImageCandidate[] = [];
  if (port.cover) {
    const host = imageHost(port.cover.src) ?? "";
    candidates.push({ src: port.cover.src, kind: "cover", host, rank: hostRank(host) });
  }
  for (const shot of port.screenshots ?? []) {
    const host = imageHost(shot.src) ?? "";
    candidates.push({ src: shot.src, kind: "screenshot", host, rank: hostRank(host) });
  }
  return candidates.sort((a, b) => a.rank - b.rank || (a.kind === "cover" ? -1 : 1));
}

/** Chosen primary image for a port, or undefined when it has no art at all. */
export function primaryImage(port: Port): ImageCandidate | undefined {
  return imageCandidates(port)[0];
}

/** True when a port's only art comes from Wikimedia. */
export function dependsOnlyOnWikimedia(port: Port): boolean {
  const candidates = imageCandidates(port);
  return candidates.length > 0 && candidates.every((candidate) => candidate.rank === 3);
}

const IMAGE_ALT: Record<ImageKind, { en: (game: string) => string; es: (game: string) => string }> =
  {
    cover: {
      en: (game) => `${game}, native port cover`,
      es: (game) => `${game}, portada del port nativo`,
    },
    screenshot: {
      en: (game) => `${game} screenshot`,
      es: (game) => `Captura de ${game}`,
    },
  };

/** Localized alt text for cover art or a screenshot. */
export function imageAlt(kind: ImageKind, game: string, locale: "en" | "es"): string {
  return IMAGE_ALT[kind][locale](game);
}
