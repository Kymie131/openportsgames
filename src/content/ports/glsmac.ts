import type { Port } from "@/lib/ports/schema";

export const Glsmac: Port = {
  schema: "port",
  id: "glsmac",
  title: "GLSMAC",
  game: "GLSMAC",
  developers: ["afwbkbc"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.3-db4dbc9", date: "2026-05-31" },
  sources: ["https://github.com/afwbkbc/glsmac"],
  license: { spdx: "AGPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "GLSMAC is a action-adventure game, released in 2000.",
  summaryEs: "GLSMAC es un videojuego de acci�n y aventura, lanzado en 2000.",
  summaryGenerated: true,
  downloads: [
    {
      label: "macOS",
      url: "https://github.com/afwbkbc/glsmac/releases/download/v0.3-db4dbc9/glsmac-ubuntu64-v0.3-db4dbc9.tar.gz",
      size: "3.7 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/afwbkbc/glsmac/releases/download/v0.3-db4dbc9/glsmac-win64-v0.3-db4dbc9.zip",
      size: "3.5 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/glsmac.svg",
    alt: "GLSMAC (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Unofficial open-source OpenGL/SDL2 reimplementation of Sid Meier's Alpha Centauri ( + Alien Crossfire ).",
  notesEs:
    "Reimplementación no oficial de código abierto (OpenGL/SDL2) de Sid Meier's Alpha Centauri (+ Alien Crossfire).",
};
