import type { Port } from "@/lib/ports/schema";

export const gearsOfWar3Recomp: Port = {
  schema: "port",
  id: "gears-of-war-3-recomp",
  title: "Gears of War 3 Recomp",
  game: "Gears of War 3",
  developers: ["Flippage"],
  publisher: "Microsoft Studios",
  originalYear: 2011,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "0.3.1", date: "2026-10-30" },
  sources: ["https://github.com/Flippage/gears-of-war-3-recomp"],
  license: { spdx: "BSD-3-Clause" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-11",
  originalSystems: ["Xbox 360"],
  summary:
    "Gears of War 3 is a 2011 third-person shooter developed by Epic Games and published by Microsoft Studios. Marcus Fenix and Delta Squad make a final stand against the Locust and the Lambent.",
  summaryEs:
    "Gears of War 3 es un shooter en tercera persona de 2011 desarrollado por Epic Games y publicado por Microsoft Studios. Marcus Fenix y el Escuadrón Delta resisten el último embate de los Locust y los Lambent.",
  notes:
    "Static recompilation of the Xbox 360 game to native Windows x64 with the ReXGlue SDK. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática del juego de Xbox 360 a Windows x64 nativo con el SDK ReXGlue. Requiere tu propia copia del juego.",
  downloads: [
    {
      label: "Windows x64",
      url: "https://github.com/Flippage/gears-of-war-3-recomp/releases/download/v0.3.1/gow3-recomp-0.3.1-win64.zip",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/dc/Gears_of_War_3_box_artwork.png",
    alt: "Gears of War 3 (box art)",
    credit: "Wikipedia",
  },
};
