import type { Port } from "@/lib/ports/schema";

export const GeometryWarsRetroEvolved2: Port = {
  schema: "port",
  id: "geometry-wars-retro-evolved-2",
  title: "Geometry Wars: Retro Evolved 2",
  game: "Geometry Wars: Retro Evolved 2",
  developers: ["saulob"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/saulob/geometry-wars-retro-evolved-2-recompiled"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/4/4b/Geometrywars2cover.jpg",
    alt: "Geometry Wars: Retro Evolved 2 (cover)",
    credit: "Wikipedia",
  },
  notes:
    "Geometry Wars: Retro Evolved 2 native PC port via static recompilation, with TRG launcher, high frame rates, local achievements and offline leaderboards.",
  notesEs:
    "Port para PC nativo de Geometry Wars: Retro Evolved 2 mediante recompilación estática, con lanzador TRG, altos fps, logros locales y clasificaciones sin conexión.",
};
