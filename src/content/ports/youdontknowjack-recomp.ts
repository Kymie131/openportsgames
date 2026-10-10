import type { Port } from "@/lib/ports/schema";

export const youdontknowjackRecomp: Port = {
  schema: "port",
  id: "youdontknowjack-recomp",
  title: "You Don't Know Jack - Static Recompilation",
  game: "You Don't Know Jack",
  developers: ["sp00nznet"],
  publisher: "THQ",
  originalYear: 2011,
  portType: "recompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/sp00nznet/youdontknowjack"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation 3",
  notes:
    "Native recompilation of You Don't Know Jack (PlayStation 3). The player supplies their own legally obtained disc dump; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de You Don't Know Jack (PlayStation 3). El jugador aporta su propio material obtenido legalmente (volcado del disco); el repositorio no incluye contenido del juego.",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/sp00nznet/youdontknowjack/master/docs/ydkj-attract-screen.png",
      alt: "Attract screen of You Don't Know Jack static recompilation",
      credit: "sp00nznet/youdontknowjack",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/d2/You_Don%27t_Know_Jack_%281995%29_cover.jpg",
    alt: "You Don't Know Jack (box art)",
    credit: "Wikipedia",
  },
};
