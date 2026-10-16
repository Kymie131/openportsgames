import type { Port } from "@/lib/ports/schema";

export const OutpostKalokiX: Port = {
  schema: "port",
  id: "outpost-kaloki-x",
  title: "Outpost Kaloki X",
  game: "Outpost Kaloki X",
  developers: ["TekRantGaming"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/TekRantGaming/outpost-kaloki-x-recompiled"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/70/OutpostkalokiXcover.jpg",
    alt: "Outpost Kaloki X (cover)",
    credit: "Wikipedia",
  },
  notes:
    "Native PC port of the XBLA game Outpost Kaloki X via static recompilation (ReXGlue). Bring your own game files.",
  notesEs:
    "Port para PC nativo del juego XBLA Outpost Kaloki X mediante recompilación estática (ReXGlue). Aporta tus propios archivos.",
};
