import type { Port } from "@/lib/ports/schema";

export const ridgeRacerType4Recomp: Port = {
  schema: "port",
  id: "ridge-racer-type-4-recomp",
  title: "RidgeRacerType4Recomp",
  game: "R4: Ridge Racer Type 4",
  developers: ["tetrisgm"],
  publisher: "Namco",
  originalYear: 1998,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/tetrisgm/RidgeRacerType4Recomp"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Native recompilation of R4: Ridge Racer Type 4 (PlayStation). The player supplies their own legally obtained disc image; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de R4: Ridge Racer Type 4 (PlayStation). El jugador aporta su propio material obtenido legalmente (disc image); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/R4%20-%20Ridge%20Racer%20Type%204%20(USA).png",
    alt: "R4: Ridge Racer Type 4 (box art)",
    credit: "Box art",
  },
};
