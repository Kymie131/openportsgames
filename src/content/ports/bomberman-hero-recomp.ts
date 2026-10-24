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
  originalSystems: ["Nintendo 64"],
  summary: "Bomberman Hero is a platform video game developed by A.I Co., Ltd. and published by Hudson Soft for the Nintendo 64. It is the second Bomberman game to be released on the system, following Bomberman 64 (1997). It is notable for being a dramatic deviation from previous Bomberman titles, featuring predominant platforming gameplay as opposed to the series' traditional top-down strategy gameplay.",
  summaryEs: "Bomberman Hero es un videojuego de acción y la continuación de Bomberman 64 para la consola Nintendo 64.",
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
