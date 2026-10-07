import type { Port } from "@/lib/ports/schema";

export const megaManX4Recomp: Port = {
  schema: "port",
  id: "mega-man-x4-recomp",
  title: "MegaManX4Recomp",
  game: "Mega Man X4",
  developers: ["mstan"],
  publisher: "Capcom",
  originalYear: 1997,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/MegaManX4Recomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Native recompilation of Mega Man X4 (PlayStation). The player supplies their own legally obtained disc image; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Mega Man X4 (PlayStation). El jugador aporta su propio material obtenido legalmente (imagen de disco); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Mega%20Man%20X4%20(USA).png",
    alt: "Mega Man X4 (box art)",
    credit: "Box art",
  },
};
