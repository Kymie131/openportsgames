import type { Port } from "@/lib/ports/schema";

export const megaManX6Recomp: Port = {
  schema: "port",
  id: "mega-man-x6-recomp",
  title: "MegaManX6Recomp",
  game: "Mega Man X6",
  developers: ["mstan"],
  publisher: "Capcom",
  originalYear: 2001,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/MegaManX6Recomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Mega Man X6, known as Rockman X6 (ロックマンエックス6) in Japan, is a 2001 action-platform game developed and published by Capcom. The sixth main entry in the Mega Man X series, it was first released on the PlayStation in Japan on November 29, 2001, and was later made available in both North America and Europe.",
  summaryEs: "Mega Man X6 es el sexto juego de la serie Mega Man X creado por Capcom. Es el primero que no dirigió el creador de la serie, Keiji Inafune.",
  notes:
    "Native recompilation of Mega Man X6 (PlayStation). The player supplies their own legally obtained disc image; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Mega Man X6 (PlayStation). El jugador aporta su propio material obtenido legalmente (imagen de disco); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Mega%20Man%20X6%20(USA).png",
    alt: "Mega Man X6 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Mega%20Man%20X6%20(USA).png",
      alt: "Mega Man X6 (screenshot)",
      credit: "Libretro",
    },
  ],
};
