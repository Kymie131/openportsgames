import type { Port } from "@/lib/ports/schema";

export const simpsonsArcadePs3: Port = {
  schema: "port",
  id: "simpsons-arcade-ps3",
  title: "The Simpsons Arcade Game - Static Recompilation",  game: "The Simpsons Arcade Game",
  developers: ["sp00nznet"],  publisher: "Konami",  originalYear: 1991,
  portType: "recompilation",  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/sp00nznet/simpsonsarcade-ps3"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,  originalSystems: ["Arcade"],  summary: "The Simpsons Arcade Game is a 1991 beat 'em up developed and published by Konami. The Simpsons chase Smithers and Mr. Burns across Springfield to rescue Maggie, with four-player co-op.",  summaryEs: "The Simpsons Arcade Game es un beat 'em up de 1991 desarrollado y publicado por Konami. Los Simpson persiguen a Smithers y al Sr. Burns por Springfield para rescatar a Maggie, con cooperativo para cuatro jugadores.",  notes:
    "Native recompilation of The Simpsons Arcade Game (PlayStation 3). The player supplies their own legally obtained disc dump; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de The Simpsons Arcade Game (PlayStation 3). El jugador aporta su propio material obtenido legalmente (volcado del disco); el repositorio no incluye contenido del juego.",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/sp00nznet/simpsonsarcade-ps3/main/docs/media/04-main-menu.png",
      alt: "The Simpsons Arcade Game main menu in the static recompilation",
      credit: "sp00nznet/simpsonsarcade-ps3",
    },
    {
      src: "https://raw.githubusercontent.com/sp00nznet/simpsonsarcade-ps3/main/docs/media/06-stage1.png",
      alt: "Stage 1 in The Simpsons Arcade Game static recompilation",
      credit: "sp00nznet/simpsonsarcade-ps3",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/00/The_Simpsons_Arcade_Game.jpg",
    alt: "The Simpsons Arcade Game (box art)",
    credit: "Wikipedia",
  },
};
