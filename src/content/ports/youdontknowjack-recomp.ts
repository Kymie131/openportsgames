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
  originalSystems: ["PlayStation 3"],
  summary: "You Don't Know Jack is an American game show based on the video game series of the same name which aired on ABC in 2001. Paul Reubens played host Troy Stevens. Tom Gottlieb reprised his role as Cookie Masterson, who was the announcer. The show lasted six episodes.",
  summaryEs: "You Don't Know Jack es una aplicación de juego de Facebook basada en la serie longeva de juegos de trivia creada por Jackbox Games. Fue lanzado al público en Facebook en mayo de 2012 tras un periodo beta. El juego se apoya en el éxito del relanzamiento de la serie del videojuego de 2011 para consolas y computadoras personales, pero alterando algunas características para funcionar mejor en la plataforma de red social.",
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
