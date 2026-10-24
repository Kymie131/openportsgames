import type { Port } from "@/lib/ports/schema";

export const Heretic2r: Port = {
  schema: "port",
  id: "heretic2r",
  title: "Heretic2R",
  game: "Heretic2R",
  developers: ["m-x-d"],
  publisher: "Unknown",
  originalYear: 1998,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/m-x-d/Heretic2R"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "Heretic2R is a action-adventure game, released in 1998.",
  summaryEs: "Heretic2R es un videojuego de acci�n y aventura, lanzado en 1998.",
  summaryGenerated: true,
  notes: "Heretic II (1998, Raven Software) reverse-engineered source port.",
  notesEs:
    "Port del código fuente reconstruido por ingeniería inversa de Heretic II (Raven Software, 1998).",
};
