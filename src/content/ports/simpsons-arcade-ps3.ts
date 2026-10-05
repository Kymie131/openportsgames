import type { Port } from "@/lib/ports/schema";

export const simpsonsArcadePs3: Port = {
  schema: "port",
  id: "simpsons-arcade-ps3",
  title: "The Simpsons Arcade Game - Static Recompilation",
  game: "The Simpsons Arcade Game",
  developers: ["sp00nznet"],
  publisher: "Konami",
  originalYear: 2012,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/sp00nznet/simpsonsarcade-ps3"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation 3",
  notes:
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
};
