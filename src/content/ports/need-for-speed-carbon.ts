import type { Port } from "@/lib/ports/schema";

export const NeedForSpeedCarbon: Port = {
  schema: "port",
  id: "need-for-speed-carbon",
  title: "Need for Speed: Carbon",
  game: "Need for Speed: Carbon",
  developers: ["Sampreeth004"],
  publisher: "Electronic Arts",
  originalYear: 2006,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Sampreeth004/nfs-carbon-recomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a4/Need_for_Speed_Carbon_Game_Cover.jpg",
    alt: "Need for Speed: Carbon (box art)",
    credit: "Wikipedia",
  },
  summary: "Need for Speed: Carbon is a 2006 racing video game and the tenth installment in the Need for Speed series. Developed by EA Black Box, Rovio Mobile and published by Electronic Arts, it was released on October 31, 2006, for the PlayStation 2, Xbox, Xbox 360, GameCube, Windows, and Mac OS X, on November 17, 2006 as a launch title for the PlayStation 3, and November 19, 2006 as a launch title for the Wii and in 2008 for arcade cabinets. A portable version, Need for Speed: Carbon – Own the City, was released for the PlayStation Portable, Game Boy Advance, Nintendo DS and Zeebo.",
  summaryEs: "Need for Speed: Carbon (En castellano: Need for Speed: Carbono) es un videojuego de carreras desarrollado por EA Black Box y publicado por Electronic Arts. Es la décima entrega de la saga de videojuegos Need for Speed. Fue mostrado por primera vez en la conferencia de Sony durante el E3 de 2006. Es el primer juego de la saga lanzado para PlayStation 3 y Wii y presenta un énfasis marcado en las carreras ilegales nocturnas. El videojuego presenta a la actriz y modelo Emmanuelle Vaugier como su modelo.",
  notes:
    "Static recompilation of Need for Speed: Carbon (Xbox 360) to native C++ via the ReXGlue SDK.",
  notesEs:
    "Recompilación estática de Need for Speed: Carbon (Xbox 360) a C++ nativo con el SDK ReXGlue.",
};
