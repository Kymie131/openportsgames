import type { Port } from "@/lib/ports/schema";

export const yoshisCookieRecomp: Port = {
  schema: "port",
  id: "yoshis-cookie-recomp",
  title: "YoshisCookieRecomp",
  game: "Yoshi's Cookie",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 1992,
  portType: "recompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/YoshisCookieRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "Nintendo Entertainment System",
  notes:
    "Native recompilation of Yoshi's Cookie (Nintendo Entertainment System). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Yoshi's Cookie (Nintendo Entertainment System). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Boxarts/Yoshi's%20Cookie%20(USA).png",
    alt: "Yoshi's Cookie (box art)",
    credit: "Box art",
  },
};
