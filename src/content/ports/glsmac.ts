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
  release: { version: null, date: null },
  sources: ["https://github.com/afwbkbc/glsmac"],
  license: { spdx: "AGPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  notes:
    "Unofficial open-source OpenGL/SDL2 reimplementation of Sid Meier's Alpha Centauri ( + Alien Crossfire ).",
  notesEs:
    "Reimplementación no oficial de código abierto (OpenGL/SDL2) de Sid Meier's Alpha Centauri (+ Alien Crossfire).",
};
