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
  notes:
    "Free, open-source version of the classic Jazz Jackrabbit games, started in 2005. Project activity has slowed and there is no clear roadmap.",
  notesEs:
    "Versión libre y de código abierto de los clásicos Jazz Jackrabbit, iniciada en 2005. La actividad del proyecto se ha ralentizado y no hay una hoja de ruta clara.",
};
