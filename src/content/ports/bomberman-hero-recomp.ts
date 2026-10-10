import type { Port } from "@/lib/ports/schema";

export const bombermanHeroRecomp: Port = {
  schema: "port",
  id: "bomberman-hero-recomp",
  title: "Bomberman Hero: Recompiled",
  game: "Bomberman Hero",
  developers: ["Hudson Soft"],
  publisher: "Hudson Soft",
  originalYear: 1998,
  genre: "platformer",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/RevoSucks/BMHeroRecomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "Static recompilation of Bomberman Hero (N64, USA) with N64Recomp and RT64. It adds widescreen, unlocked framerate, instant load times and mod and texture-pack support.",
  notesEs:
    "Recompilación estática de Bomberman Hero (N64, USA) con N64Recomp y RT64. Añade widescreen, framerate libre, cargas instantáneas y soporte de mods y texture packs.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Bomberman%20Hero%20(USA).png",
    alt: "Bomberman Hero (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Bomberman%20Hero%20(USA).png",
      alt: "Bomberman Hero (screenshot)",
      credit: "Libretro",
    },
  ],
};
