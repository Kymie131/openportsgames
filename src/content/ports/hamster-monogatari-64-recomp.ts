import type { Port } from "@/lib/ports/schema";

export const hamsterMonogatari64Recomp: Port = {
  schema: "port",
  id: "hamster-monogatari-64-recomp",
  title: "Hamster Monogatari 64 Recomp",
  game: "Hamster Monogatari 64",
  developers: ["SrBananaMan"],
  publisher: "Culture Brain",
  originalYear: 2001,
  portType: "recompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/SrBananaMan/Hamster64Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "Native recompilation of Hamster Monogatari 64 (Nintendo 64). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Hamster Monogatari 64 (Nintendo 64). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Hamster%20Monogatari%2064%20(Japan).png",
    alt: "Hamster Monogatari 64 (box art)",
    credit: "Box art",
  },
};
