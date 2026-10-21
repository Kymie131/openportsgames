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
    logo: "psp",
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
    logo: "psvita",
  },
  {
    slug: "wii-u",
    platform: "wiiu",
    name: { en: "Wii U", es: "Wii U" },
    manufacturer: "Nintendo",
    year: 2012,
    abbreviation: "WIIU",
    color: "#00A0C6",
    logo: "wiiu",
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
    logo: "switch",
  },
  {
    slug: "playstation",
    platform: "ps1",
    name: { en: "PlayStation", es: "PlayStation" },
    manufacturer: "Sony",
    year: 1994,
    abbreviation: "PS1",
    color: "#003791",
    logo: "playstation",
  },
  {
    slug: "nes",
    platform: "nes",
    name: { en: "NES", es: "NES" },
    manufacturer: "Nintendo",
    year: 1983,
    abbreviation: "NES",
    color: "#E60012",
    logo: "nes",
  },
  {
    slug: "snes",
    platform: "snes",
    name: { en: "Super Nintendo", es: "Super Nintendo" },
    manufacturer: "Nintendo",
    year: 1990,
    abbreviation: "SNES",
    color: "#7B5EA7",
    logo: "snes",
  },
  {
    slug: "nintendo-64",
    platform: "n64",
    name: { en: "Nintendo 64", es: "Nintendo 64" },
    manufacturer: "Nintendo",
    year: 1996,
    abbreviation: "N64",
    color: "#009E60",
    logo: "n64",
  },
  {
    slug: "game-boy",
    platform: "gb",
    name: { en: "Game Boy", es: "Game Boy" },
    manufacturer: "Nintendo",
    year: 1989,
    abbreviation: "GB",
    color: "#8BAC0F",
    logo: "game-boy",
  },
  {
    slug: "game-boy-color",
    platform: "gbc",
    name: { en: "Game Boy Color", es: "Game Boy Color" },
    manufacturer: "Nintendo",
    year: 1998,
    abbreviation: "GBC",
    color: "#8BAC0F",
  },
  {
    slug: "game-boy-advance",
    platform: "gba",
    name: { en: "Game Boy Advance", es: "Game Boy Advance" },
    manufacturer: "Nintendo",
    year: 2001,
    abbreviation: "GBA",
    color: "#4B3FA0",
    logo: "gba",
  },
  {
    slug: "mega-drive",
    platform: "genesis",
    name: { en: "Mega Drive / Genesis", es: "Mega Drive / Genesis" },
    manufacturer: "Sega",
    year: 1988,
    abbreviation: "MD",
    color: "#0089CF",
  },
  {
    slug: "sega-saturn",
    platform: "saturn",
    name: { en: "Sega Saturn", es: "Sega Saturn" },
    manufacturer: "Sega",
    year: 1994,
    abbreviation: "SAT",
    color: "#0089CF",
  },
  {
    slug: "dreamcast",
    platform: "dreamcast",
    name: { en: "Dreamcast", es: "Dreamcast" },
    manufacturer: "Sega",
    year: 1998,
    abbreviation: "DC",
    color: "#0089CF",
  },
  {
    slug: "xbox",
    platform: "xbox",
    name: { en: "Xbox", es: "Xbox" },
    manufacturer: "Microsoft",
    year: 2001,
    abbreviation: "XBOX",
    color: "#107C10",
    logo: "xbox",
  },
  {
    slug: "xbox-360",
    platform: "xbox360",
    name: { en: "Xbox 360", es: "Xbox 360" },
    manufacturer: "Microsoft",
    year: 2005,
    abbreviation: "X360",
    color: "#107C10",
    logo: "xbox-360",
  },
  {
    slug: "playstation-5",
    platform: "ps5",
    name: { en: "PlayStation 5", es: "PlayStation 5" },
    manufacturer: "Sony",
    year: 2020,
    abbreviation: "PS5",
    color: "#003791",
  },
  {
    slug: "arcade",
    platform: "arcade",
    name: { en: "Arcade", es: "Arcade" },
    manufacturer: "Arcade",
    year: 1971,
    abbreviation: "ARC",
    color: "#8A5CF6",
  },
];

export function getConsoleDef(slug: string): ConsoleDef | undefined {
  return consoleDefs.find((c) => c.slug === slug);
}
