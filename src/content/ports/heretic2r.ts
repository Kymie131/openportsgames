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
  originalSystem: "Other",
  notes: "Heretic II (1998, Raven Software) reverse-engineered source port.",
  notesEs:
    "Port del código fuente reconstruido por ingeniería inversa de Heretic II (Raven Software, 1998).",
};
