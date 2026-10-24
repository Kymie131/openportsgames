import type { Port } from "@/lib/ports/schema";

export const openjazz: Port = {
  schema: "port",
  id: "openjazz",
  title: "OpenJazz",
  game: "Jazz Jackrabbit",
  developers: ["Epic MegaGames"],
  publisher: "Epic MegaGames",
  originalYear: 1994,
  portType: "reimplementation",
  genre: "platformer",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "2026.3.1", date: "2026-03-01" },
  sources: ["https://github.com/AlisterT/openjazz"],
  license: {
    spdx: "GPL-2.0",
  },
  verified: false,
  summary: "Jazz Jackrabbit is a 1994 platform game developed and published by Epic MegaGames. It was released for MS-DOS-based computers. The game was re-released on GOG.com along with Jazz Jackrabbit 2 on November 30, 2017, with support for Windows, macOS, and Linux.",
  summaryEs: "Jazz Jackrabbit es un videojuego de plataformas en 1994.",
  notes:
    "Free, open-source version of the classic Jazz Jackrabbit games, started in 2005. Project activity has slowed and there is no clear roadmap.",
  notesEs:
    "Versión libre y de código abierto de los clásicos Jazz Jackrabbit, iniciada en 2005. La actividad del proyecto se ha ralentizado y no hay una hoja de ruta clara.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/b/b4/Jazz_Jackrabbit.jpg",
    alt: "Jazz Jackrabbit (box art)",
    credit: "Wikipedia",
  },
  originalSystems: ["MS-DOS"],
};
