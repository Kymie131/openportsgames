import type { Port } from "@/lib/ports/schema";

export const spaceChannel5Recomp: Port = {
  schema: "port",
  id: "space-channel-5-recomp",
  title: "Space Channel 5 Recompiled",
  game: "Space Channel 5",
  developers: ["PortsDR"],
  publisher: "Sega",
  originalYear: 1999,
  portType: "recompilation",
  genre: "music",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/ZoomiesZaggy/Space-Channel-5"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Dreamcast"],
  summary: "Space Channel 5 is a 1999 music video game developed and published by Sega for the Dreamcast. It was later ported to the PlayStation 2 and Game Boy Advance. Following space-faring reporter Ulala as she investigates an alien invasion, players engage in rhythm-based combat where Ulala mimics the actions of rivals in time to musical tracks.",
  summaryEs: "Space Channel 5 es un videojuego de ritmo de 1999, desarrollado por Sega AM9 y publicado por Sega para la consola Dreamcast. El juego está ambientado en el espacio exterior y su protagonista es Ulala, una joven reportera cuyo objetivo es salvar a los humanos de una invasión extraterrestre a través del baile y la música.",
  notes:
    "A PortsDR community listing; no repository or release is public. The original game is required.",
  notesEs:
    "Ficha comunitaria de PortsDR; no hay repositorio ni release públicos. Hace falta el juego original.",
  cover: {
    src: "https://thumbnails.libretro.com/Sega%20-%20Dreamcast/Named_Boxarts/Space%20Channel%205%20(Europe)%20(En,Fr,De,Es).png",
    alt: "Space Channel 5 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sega%20-%20Dreamcast/Named_Snaps/Space%20Channel%205%20(Europe)%20(En,Fr,De,Es).png",
      alt: "Space Channel 5 (screenshot)",
      credit: "Libretro",
    },
  ],
};
