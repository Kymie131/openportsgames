import type { Port } from "@/lib/ports/schema";

export const doa3Recomp: Port = {
  schema: "port",
  id: "doa3-recomp",
  title: "Dead or Alive 3 Recompiled",
  game: "Dead or Alive 3",
  developers: ["parkerallan"],
  publisher: "Tecmo",
  originalYear: 2001,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/parkerallan/doa3-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox",
  notes:
    "Static recompilation of Dead or Alive 3 (Xbox) with ReXGlue. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Dead or Alive 3 (Xbox) con ReXGlue. Requiere tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Microsoft%20-%20Xbox/Named_Boxarts/Dead%20or%20Alive%203%20(USA).png",
    alt: "Dead or Alive 3 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Microsoft%20-%20Xbox/Named_Snaps/Dead%20or%20Alive%203%20(USA).png",
      alt: "Dead or Alive 3 (screenshot)",
      credit: "Libretro",
    },
  ],
};
