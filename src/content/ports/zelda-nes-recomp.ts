import type { Port } from "@/lib/ports/schema";

export const zeldaNesRecomp: Port = {
  schema: "port",
  id: "zelda-nes-recomp",
  title: "LegendOfZeldaNESRecomp",
  game: "The Legend of Zelda",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 1986,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/LegendOfZeldaNESRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "Nintendo Entertainment System",
  notes:
    "Native recompilation of The Legend of Zelda (Nintendo Entertainment System). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de The Legend of Zelda (Nintendo Entertainment System). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Boxarts/Legend%20of%20Zelda%2C%20The%20(USA)%20(Collector's%20Edition).png",
    alt: "The Legend of Zelda (box art)",
    credit: "Box art",
  },
};
