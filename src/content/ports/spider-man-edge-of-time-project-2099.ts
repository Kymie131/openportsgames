import type { Port } from "@/lib/ports/schema";

export const spiderManEdgeOfTimeProject2099: Port = {
  schema: "port",
  id: "spider-man-edge-of-time-project-2099",
  title: "Project 2099",
  game: "Spider-Man: Edge of Time",
  developers: ["GenryTheFox0"],
  publisher: "Activision",
  originalYear: 2011,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/GenryTheFox0/Project-2099"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  related: ["spider-man-edge-of-time-recomp"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/df/Spider-Man_Edge_of_Time.jpg",
    alt: "Spider-Man: Edge of Time (box art)",
    credit: "Wikipedia",
  },
  notes:
    "Project 2099: an unofficial Windows recompilation of Spider-Man: Edge of Time, with PC controls, settings, localization (six-language guides), achievements and mod support. Separate project from the other Spider-Man: Edge of Time entry in the catalog; the README does not state the original platform, so the original system is left as Unknown. Latest release: v2.0.0-beta.5.",
  notesEs:
    "Project 2099: recompilación no oficial para Windows de Spider-Man: Edge of Time, con controles de PC, ajustes, localización (guías en seis idiomas), logros y soporte de mods. Proyecto distinto de la otra ficha de Spider-Man: Edge of Time del catálogo; el README no indica la plataforma original, así que el sistema original queda como Unknown. Última release: v2.0.0-beta.5.",
};
