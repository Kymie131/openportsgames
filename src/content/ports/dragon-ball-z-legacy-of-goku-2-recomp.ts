import type { Port } from "@/lib/ports/schema";

export const dragonBallZLegacyOfGoku2Recomp: Port = {
  schema: "port",
  id: "dragon-ball-z-legacy-of-goku-2-recomp",
  title: "Dragon Ball Z: The Legacy of Goku II",
  game: "Dragon Ball Z: The Legacy of Goku II",
  developers: ["mstan"],
  publisher: "Atari",
  originalYear: 2003,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/DragonBallZLegacyofGokuIIRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "Game Boy Advance",
  notes:
    "Static recompilation of Dragon Ball Z: The Legacy of Goku II (GBA) with the gbarecomp framework. It requires a copy of the game.",
  notesEs:
    "Recompilación estática de Dragon Ball Z: The Legacy of Goku II (GBA) con el framework gbarecomp. Requiere una copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Boxarts/Dragon%20Ball%20Z%20-%20The%20Legacy%20of%20Goku%20II%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "Dragon Ball Z: The Legacy of Goku II (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Snaps/Dragon%20Ball%20Z%20-%20The%20Legacy%20of%20Goku%20II%20(Europe)%20(En,Fr,De,Es,It).png",
      alt: "Dragon Ball Z: The Legacy of Goku II (screenshot)",
      credit: "Libretro",
    },
  ],
};
