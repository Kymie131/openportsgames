import type { Port } from "@/lib/ports/schema";

export const zeldaAlttpSnesRecomp: Port = {
  schema: "port",
  id: "zelda-alttp-snes-recomp",
  title: "ZeldaAlttPSNESRecomp",
  game: "The Legend of Zelda: A Link to the Past",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 1991,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/ZeldaAlttPSNESRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "Super Nintendo",
  notes:
    "Native recompilation of The Legend of Zelda: A Link to the Past (Super Nintendo). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de The Legend of Zelda: A Link to the Past (Super Nintendo). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Legend%20of%20Zelda%2C%20The%20-%20A%20Link%20to%20the%20Past%20(USA).png",
    alt: "The Legend of Zelda: A Link to the Past (box art)",
    credit: "Box art",
  },
};
