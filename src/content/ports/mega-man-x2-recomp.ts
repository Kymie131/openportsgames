import type { Port } from "@/lib/ports/schema";

export const megaManX2Recomp: Port = {
  schema: "port",
  id: "mega-man-x2-recomp",
  title: "MegaManX2SNESRecomp",
  game: "Mega Man X2",
  developers: ["mstan"],
  publisher: "Capcom",
  originalYear: 1994,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/MegaManX2Recomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystems: ["Super Nintendo"],
  summary: "Mega Man X2, known as Rockman X2 (ロックマンX2) in Japan, is a 1994 platform game developed and published by Capcom for the Super Nintendo Entertainment System (SNES). The game was released in Japan on December 16, 1994, and in North America and PAL regions in 1995. It is the direct sequel to Mega Man X, released one year prior. Mega Man X2 takes place in the near future in which humans try to peacefully coexist with intelligent robots called \"Reploids\", with some of the Reploids going \"Maverick\" and threatening daily life.",
  summaryEs: "Mega Man X2 o conocido como Rockman X2 en Japón, es el segundo juego de la saga Mega Man X, lanzado para Super Nintendo en 1994. El juego tuvo los mismos gráficos que su antecesor, pero mejorado con el chip gráfico \"Cx4\" que da \"semi-transparencia\" y gráficos 3D. Mega Man X3 es el único juego además de este en usar el mencionado chip.",
  notes:
    "Native recompilation of Mega Man X2 for the Super Nintendo. The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Mega Man X2 para Super Nintendo. El jugador aporta su propia ROM obtenida legalmente; el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mega%20Man%20X2%20(USA).png",
    alt: "Mega Man X2 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Snaps/Mega%20Man%20X2%20(USA).png",
      alt: "Mega Man X2 (screenshot)",
      credit: "Libretro",
    },
  ],
};
