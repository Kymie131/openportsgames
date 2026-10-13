import type { Port } from "@/lib/ports/schema";

export const marioStrikersChargedRecomp: Port = {
  schema: "port",
  id: "mario-strikers-charged-recomp",
  title: "Mario Strikers Charged Recompiled",
  game: "Mario Strikers Charged",
  developers: ["yannicksuter"],
  publisher: "Nintendo",
  originalYear: 2007,
  portType: "recompilation",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/yannicksuter/mscharged-port"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Wii",
  notes:
    "Mario Strikers Charged (Wii) ported to PC, macOS and Linux from its decompilation. It needs your own copy of the game.",
  notesEs:
    "Mario Strikers Charged (Wii) portado a PC, macOS y Linux desde su decompilación. Necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Wii/Named_Boxarts/Mario%20Strikers%20Charged%20(USA)%20(En,Fr,Es)%20(Rev%201).png",
    alt: "Mario Strikers Charged (box art)",
    credit: "Box art",
  },
};
