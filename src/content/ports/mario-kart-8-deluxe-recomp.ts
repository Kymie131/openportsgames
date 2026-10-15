import type { Port } from "@/lib/ports/schema";

export const marioKart8DeluxeRecomp: Port = {
  schema: "port",
  id: "mario-kart-8-deluxe-recomp",
  title: "Mario Kart 8 Deluxe Recompiled",
  game: "Mario Kart 8 Deluxe",
  developers: ["dougchansan"],
  publisher: "Nintendo",
  originalYear: 2017,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/dougchansan/mk8-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Wii U"],
  notes:
    "Static recompilation of Mario Kart 8 Deluxe (AArch64 to x86-64) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Mario Kart 8 Deluxe (AArch64 a x86-64) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/b/b5/MarioKart8Boxart.jpg",
    alt: "Mario Kart 8 (cover)",
    credit: "Wikipedia",
  },
};
