import type { Port } from "@/lib/ports/schema";

export const tsumuLightRecomp: Port = {
  schema: "port",
  id: "tsumu-light-recomp",
  title: "TsumuLightRecomp",
  game: "Tsumu Light",
  developers: ["mstan"],
  publisher: "Taito",
  originalYear: 1999,
  portType: "recompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/TsumuLightRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Native recompilation of Tsumu Light (PlayStation). The player supplies their own legally obtained disc image; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Tsumu Light (PlayStation). El jugador aporta su propio material obtenido legalmente (disc image); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Tsumu%20Light%20(Japan).png",
    alt: "Tsumu Light (box art)",
    credit: "Box art",
  },
};
