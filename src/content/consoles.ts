/**
 * Consoles that receive native ports and homebrew builds. Powers the /console
 * section, grouped by console the way /emulators groups emulators. A port
 * appears here when its build target is a console (not PC or Android).
 */
import type { PlatformKey } from "@/lib/ports/schema";

export interface ConsoleDef {
  slug: string;
  /** The platform key a port carries when it targets this console. */
  platform: PlatformKey;
  name: { en: string; es: string };
  manufacturer: string;
  year: number;
  /** Monogram shown when no logo artwork exists. */
  abbreviation: string;
  /** Brand color used for the monogram chip. */
  color: string;
  /** Logo slug under public/logos/console, when artwork exists. */
  logo?: string;
}

export const consoleDefs: ConsoleDef[] = [
  {
    slug: "playstation-2",
    platform: "ps2",
    name: { en: "PlayStation 2", es: "PlayStation 2" },
    manufacturer: "Sony",
    year: 2000,
    abbreviation: "PS2",
    color: "#003791",
    logo: "playstation-2",
  },
  {
    slug: "playstation-portable",
    platform: "psp",
    name: { en: "PlayStation Portable", es: "PlayStation Portable" },
    manufacturer: "Sony",
    year: 2004,
    abbreviation: "PSP",
    color: "#003791",
  },
  {
    slug: "nintendo-ds",
    platform: "ds",
    name: { en: "Nintendo DS", es: "Nintendo DS" },
    manufacturer: "Nintendo",
    year: 2004,
    abbreviation: "NDS",
    color: "#9AA0A6",
    logo: "nds",
  },
  {
    slug: "playstation-3",
    platform: "ps3",
    name: { en: "PlayStation 3", es: "PlayStation 3" },
    manufacturer: "Sony",
    year: 2006,
    abbreviation: "PS3",
    color: "#003791",
    logo: "playstation-3",
  },
  {
    slug: "wii",
    platform: "wii",
    name: { en: "Wii", es: "Wii" },
    manufacturer: "Nintendo",
    year: 2006,
    abbreviation: "WII",
    color: "#00A0C6",
    logo: "wii",
  },
  {
    slug: "nintendo-3ds",
    platform: "3ds",
    name: { en: "Nintendo 3DS", es: "Nintendo 3DS" },
    manufacturer: "Nintendo",
    year: 2011,
    abbreviation: "3DS",
    color: "#CE181E",
    logo: "3ds",
  },
  {
    slug: "playstation-vita",
    platform: "psvita",
    name: { en: "PlayStation Vita", es: "PlayStation Vita" },
    manufacturer: "Sony",
    year: 2011,
    abbreviation: "VITA",
    color: "#003791",
  },
  {
    slug: "wii-u",
    platform: "wiiu",
    name: { en: "Wii U", es: "Wii U" },
    manufacturer: "Nintendo",
    year: 2012,
    abbreviation: "WIIU",
    color: "#00A0C6",
  },
  {
    slug: "playstation-4",
    platform: "ps4",
    name: { en: "PlayStation 4", es: "PlayStation 4" },
    manufacturer: "Sony",
    year: 2013,
    abbreviation: "PS4",
    color: "#003791",
    logo: "playstation-4",
  },
  {
    slug: "switch",
    platform: "switch",
    name: { en: "Nintendo Switch", es: "Nintendo Switch" },
    manufacturer: "Nintendo",
    year: 2017,
    abbreviation: "NS",
    color: "#E60012",
  },
];

export function getConsoleDef(slug: string): ConsoleDef | undefined {
  return consoleDefs.find((c) => c.slug === slug);
}
