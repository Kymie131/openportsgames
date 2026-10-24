import type { Port } from "@/lib/ports/schema";

export const ninjaGaiden2Recomp: Port = {
  schema: "port",
  id: "ninja-gaiden-2-recomp",
  title: "Ninja's Dawn",
  game: "Ninja Gaiden II",
  developers: ["TheSaltTrader"],
  publisher: "Microsoft Game Studios",
  originalYear: 2008,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: [
    "https://github.com/TheSaltTrader/Ninja-s-Dawn---A-Ninja-Gaiden-2-Recompilation-Project",
  ],
  license: { spdx: "MIT" },
  verified: false,
  sourceDead: true,
  warning: "The original repository was taken down and the link no longer resolves.",
  warningEs: "El repositorio original fue retirado y el enlace ya no responde.",
  originalSystems: ["Xbox 360"],
  summary: "Ninja Gaiden II is a 2008 action-adventure game developed by Team Ninja and published by Microsoft Game Studios for the Xbox 360. It was the last game directed by Tomonobu Itagaki before his departure from Tecmo. An alternative version, Ninja Gaiden Sigma 2, was released by Tecmo Koei for the PlayStation 3 in 2009, and for the PlayStation Vita in 2013. A remaster, Ninja Gaiden 2 Black, was released for PlayStation 5, Windows and Xbox Series X/S on 23 January 2025.",
  summaryEs: "Ninja Gaiden II es el segundo videojuego en tercera persona de la famosa y aclamada serie Ninja Gaiden. El juego fue creado por Tomonobu Itagaki y por Tecmo.",
  notes:
    "Native recompilation of Ninja Gaiden II (Xbox 360). The player supplies their own legally obtained disc dump; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Ninja Gaiden II (Xbox 360). El jugador aporta su propio material obtenido legalmente (disc dump); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/4/4f/Ninja_Gaiden_II.jpg",
    alt: "Ninja Gaiden II (box art)",
    credit: "Wikipedia",
  },
};
