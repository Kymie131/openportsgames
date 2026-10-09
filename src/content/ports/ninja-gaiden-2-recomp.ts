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
  originalSystem: "Xbox 360",
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
