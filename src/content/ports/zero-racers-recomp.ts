import type { Port } from "@/lib/ports/schema";

export const zeroRacersRecomp: Port = {
  schema: "port",
  id: "zero-racers-recomp",
  title: "Zero Racers Recompiled",
  game: "Zero Racers",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 1996,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/ZeroRacersVirtualBoyRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Virtual Boy"],
  summary: "Zero Racers is a racing game developed by Nintendo for the Virtual Boy. It is a spin-off of the F-Zero series. Players choose one of four characters and race in hovercars against AI-controlled characters in fifteen tracks divided into three leagues.",
  summaryEs: "Zero Racers fue un videojuego de carreras que estaba en desarrollo por Nintendo y planeado para ser lanzado en 1996 para la Virtual Boy. De haber sido lanzado, se hubiera convertido en el primer juego de la saga F-Zero en utilizar gráficos en 3D. Únicamente divulgado a través de las revistas de videojuegos, fue cancelado debido al fracaso comercial de la consola, pese a que el juego estaba listo para su lanzamiento.",
  notes:
    "Native recompilation of the unreleased Virtual Boy game Zero Racers, built with recomp-ui and a cosimulation harness. It needs your own ROM and ships no game data.",
  notesEs:
    "Recompilación nativa del juego no publicado de Virtual Boy Zero Racers, construida con recomp-ui y un sistema de cosimulación. Necesita tu propia ROM y no incluye datos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/c/cc/Zero_Racers_title_screen.png",
    alt: "Zero Racers (box art)",
    credit: "Wikipedia",
  },
};
