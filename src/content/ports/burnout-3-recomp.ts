import type { Port } from "@/lib/ports/schema";

export const burnout3Recomp: Port = {
  schema: "port",
  id: "burnout-3-recomp",
  title: "Burnout 3: Takedown",
  game: "Burnout 3: Takedown",
  developers: ["sp00nznet"],
  publisher: "Electronic Arts",
  originalYear: 2004,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/sp00nznet/burnout3"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox",
  notes:
    "Static recompilation of Burnout 3: Takedown (Xbox) with ReXGlue. It requires a copy of the game.",
  notesEs:
    "Recompilación estática de Burnout 3: Takedown (Xbox) con ReXGlue. Requiere una copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Microsoft%20-%20Xbox/Named_Boxarts/Burnout%203%20-%20Takedown%20(USA).png",
    alt: "Burnout 3: Takedown (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Microsoft%20-%20Xbox/Named_Snaps/Burnout%203%20-%20Takedown%20(USA).png",
      alt: "Burnout 3: Takedown (screenshot)",
      credit: "Libretro",
    },
  ],
};
