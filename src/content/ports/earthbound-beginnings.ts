import type { Port } from "@/lib/ports/schema";

export const EarthboundBeginnings: Port = {
  schema: "port",
  id: "earthbound-beginnings",
  title: "Earthbound Beginnings",
  game: "Earthbound Beginnings",
  developers: ["GrasonHumphrey"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/GrasonHumphrey/Earthbound-Zero-Decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/c/c4/EarthBound_Beginnings_cover_art.png",
    alt: "Earthbound Beginnings (cover)",
    credit: "Wikipedia",
  },
  notes: "Ghidra decompilation of Earthbound Zero (Mother) with no copyrighted material.",
  notesEs:
    "Decompilación con Ghidra de EarthBound Zero (Mother), sin material con derechos de autor.",
};
