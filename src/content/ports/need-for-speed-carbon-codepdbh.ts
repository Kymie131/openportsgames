import type { Port } from "@/lib/ports/schema";

export const NeedForSpeedCarbonCodepdbh: Port = {
  schema: "port",
  id: "need-for-speed-carbon-codepdbh",
  title: "Need for Speed Carbon",
  game: "Need for Speed Carbon",
  developers: ["codepdbh"],
  publisher: "Electronic Arts",
  originalYear: 2006,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/codepdbh/NFS-CARBON-360-ANDROID-RECOMP"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a4/Need_for_Speed_Carbon_Game_Cover.jpg",
    alt: "Need for Speed Carbon (cover)",
    credit: "Wikipedia",
  },
  summary: "Need for Speed: Carbon is a 2006 racing video game and the tenth installment in the Need for Speed series. Developed by EA Black Box, Rovio Mobile and published by Electronic Arts, it was released on October 31, 2006, for the PlayStation 2, Xbox, Xbox 360, GameCube, Windows, and Mac OS X, on November 17, 2006 as a launch title for the PlayStation 3, and November 19, 2006 as a launch title for the Wii and in 2008 for arcade cabinets. A portable version, Need for Speed: Carbon – Own the City, was released for the PlayStation Portable, Game Boy Advance, Nintendo DS and Zeebo.",
  summaryEs: "Need for Speed: Carbon (En castellano: Need for Speed: Carbono) es un videojuego de carreras desarrollado por EA Black Box y publicado por Electronic Arts. Es la décima entrega de la saga de videojuegos Need for Speed. Fue mostrado por primera vez en la conferencia de Sony durante el E3 de 2006. Es el primer juego de la saga lanzado para PlayStation 3 y Wii y presenta un énfasis marcado en las carreras ilegales nocturnas. El videojuego presenta a la actriz y modelo Emmanuelle Vaugier como su modelo.",
  notes:
    "Experimental static recompilation of Need for Speed Carbon for Xbox 360 using ReXGlue. Windows x64 prototype, analysis fixes and build instructions.",
  notesEs:
    "Recompilación estática experimental de Need for Speed Carbon para Xbox 360 con ReXGlue. Prototipo para Windows x64.",
};
