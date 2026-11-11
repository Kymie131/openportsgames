import type { Port } from "@/lib/ports/schema";

export const starWarsBattlefrontRenegadeSquadronPc: Port = {
  schema: "port",
  id: "star-wars-battlefront-renegade-squadron-pc",
  title: "Star Wars Battlefront: Renegade Squadron (PC)",
  game: "Star Wars Battlefront: Renegade Squadron",
  developers: ["GTTeancum"],
  publisher: "LucasArts",
  originalYear: 2007,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "alpha",
  release: { version: "0.9.1", date: "2026-10-28" },
  sources: ["https://github.com/GTTeancum/StarWars-RenegadeSquadron-PC"],
  license: { spdx: "NOASSERTION", note: "license not declared in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation Portable"],
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/GTTeancum/StarWars-RenegadeSquadron-PC/releases/download/v0.9.1/RenegadeSquadronPC-0.9.1.zip",
      size: "53.1 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/GTTeancum/StarWars-RenegadeSquadron-PC/releases/download/v0.9.1/RenegadeSquadronPC-0.9.1-linux-ubuntu26.04-x86_64.tar.gz",
      size: "27.0 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/d3/Star_Wars_Battlefront_-_Renegade_Squadron_Coverart.png",
    alt: "Star Wars Battlefront: Renegade Squadron (box art)",
    credit: "Wikipedia",
  },
  summary: "Star Wars Battlefront: Renegade Squadron is a third-person shooter video game based on the Star Wars franchise. It is the third entry in the Star Wars: Battlefront series and the first handheld exclusive. It was released on October 9, 2007 in North America and later in Australia and Europe, as a PlayStation Portable (PSP) exclusive. Renegade Squadron was one of the first games available in a bundle pack with the newly released PSP redesign.",
  summaryEs: "Star Wars Battlefront: Renegade Squadron es el tercer videojuego de la saga Star Wars Battlefront. Este videojuego fue desarrollado por LucasArts y Rebellion Developments. Se lanzó en Norteamérica el 9 de octubre de 2007 y en Europa tres días después. El juego solo está disponible para la PlayStation Portable. Está recomendado para mayores de 12 años. Fue uno de los primerios videojuegos disponibles en forma de pack con las nuevas versiones de la PSP como la PlayStation Portable Slim.",
  notes: "Star Wars Battlefront: Renegade Squadron (LucasArts, 2007) running on Windows through static recompilation. You need your own copy of the game.",
  notesEs: "Star Wars Battlefront: Renegade Squadron (LucasArts, 2007) en Windows mediante recompilación estática. Necesitas tu propia copia del juego.",
};
