import type { Port } from "@/lib/ports/schema";

export const playstationAllStarsRecomp: Port = {
  schema: "port",
  id: "playstation-all-stars-recomp",
  title: "PlayStation All-Stars Recompiled",
  game: "PlayStation All-Stars Battle Royale",
  developers: ["ColinGamez"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2012,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/ColinGamez/allstars-ps3"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation 3"],
  summary: "PlayStation All-Stars Battle Royale is a 2012 crossover fighting game developed by SuperBot Entertainment and published by Sony Computer Entertainment for the PlayStation 3 and PlayStation Vita. It features various characters drawn from video game franchises owned by or strongly associated with PlayStation competing against each other in multiplayer battles.",
  summaryEs: "PlayStation All-Stars Battle Royale, conocido primeramente como Title Fight, es el cruce entre videojuegos creado por petición de los seguidores de Sony, fue desarrollado por SuperBot Entertainment en conjunto con Santa Monica Studio y publicado por Sony Computer Entertainment, y está disponible para las consolas PlayStation 3 y PlayStation Vita desde el 20 de noviembre de 2012 en América del Norte, 21 de noviembre de 2012 en Europa, 22 de noviembre de 2012 en Australia, 23 de noviembre de 2012 en el Reino Unido y el 31 de enero de 2013 en Japón.",
  notes:
    "Native PC port of PlayStation All-Stars Battle Royale (PS3) built with ps3recomp, still in active development. It needs a copy of the game.",
  notesEs:
    "Port nativo para PC de PlayStation All-Stars Battle Royale (PS3) construido con ps3recomp, todavía en desarrollo activo. Necesita una copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/c/ca/PlayStationAllStars.jpg",
    alt: "PlayStation All-Stars Battle Royale (box art)",
    credit: "Wikipedia",
  },
};
