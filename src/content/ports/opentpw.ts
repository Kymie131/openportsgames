import type { Port } from "@/lib/ports/schema";

export const Opentpw: Port = {
  schema: "port",
  id: "opentpw",
  title: "OpenTPW",
  game: "OpenTPW",
  developers: ["OpenTPW"],
  publisher: "Unknown",
  originalYear: 1999,
  portType: "reimplementation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/OpenTPW/OpenTPW"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  notes: "An open-source re-implementation of Bullfrog's Sim Theme Park / Theme Park World (1999).",
  notesEs:
    "Reimplementación de código abierto de Sim Theme Park / Theme Park World (1999) de Bullfrog.",
};
