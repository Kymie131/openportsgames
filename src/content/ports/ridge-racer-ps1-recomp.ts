import type { Port } from "@/lib/ports/schema";

export const ridgeRacerPs1Recomp: Port = {
  schema: "port",
  id: "ridge-racer-ps1-recomp",
  title: "Ridge Racer PS1 Recomp",
  game: "Ridge Racer",
  developers: ["RobGreenUK"],
  publisher: "Namco",
  originalYear: 1993,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/RobGreenUK/Ridge-Racer-PS1-Recomp"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Native recompilation of Ridge Racer (PlayStation). The player supplies their own legally obtained disc image; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Ridge Racer (PlayStation). El jugador aporta su propio material obtenido legalmente (imagen de disco); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Ridge%20Racer%20(USA).png",
    alt: "Ridge Racer (box art)",
    credit: "Box art",
  },
};
