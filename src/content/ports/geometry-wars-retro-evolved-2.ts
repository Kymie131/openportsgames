import type { Port } from "@/lib/ports/schema";

export const GeometryWarsRetroEvolved2: Port = {
  schema: "port",
  id: "geometry-wars-retro-evolved-2",
  title: "Geometry Wars: Retro Evolved 2",
  game: "Geometry Wars: Retro Evolved 2",
  developers: ["saulob"],
  publisher: "Unknown",
  originalYear: 2008,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.6.1", date: "2026-10-25" },
  sources: ["https://github.com/saulob/geometry-wars-retro-evolved-2-recompiled"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  downloads: [
    {
      label: "Linux",
      url: "https://github.com/saulob/geometry-wars-retro-evolved-2-recompiled/releases/download/v0.6.1/GeometryWarsRetroEvolved2Recompiled-v0.6.1-x86_64.AppImage",
      size: "10.5 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/saulob/geometry-wars-retro-evolved-2-recompiled/releases/download/v0.6.1/GeometryWarsRetroEvolved2-v0.6.1-windows-x64.zip",
      size: "9.2 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/4/4b/Geometrywars2cover.jpg",
    alt: "Geometry Wars: Retro Evolved 2 (cover)",
    credit: "Wikipedia",
  },
  summary: "Geometry Wars: Retro Evolved 2 is a multidirectional shooter developed by Bizarre Creations and published by Microsoft Game Studios and Activision. It was released on Xbox Live Arcade on July 30, 2008 as a sequel to Geometry Wars: Retro Evolved. It was followed by Geometry Wars 3: Dimensions, a sequel published in 2014 by Lucid Games, which was founded by former members of Bizarre Creations.",
  summaryEs: "Geometry Wars: Retro Evolved 2 es un videojuego de acción y aventura en 2008.",
  notes:
    "Geometry Wars: Retro Evolved 2 native PC port via static recompilation, with TRG launcher, high frame rates, local achievements and offline leaderboards.",
  notesEs:
    "Port para PC nativo de Geometry Wars: Retro Evolved 2 mediante recompilación estática, con lanzador TRG, altos fps, logros locales y clasificaciones sin conexión.",
};
