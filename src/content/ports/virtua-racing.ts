import type { Port } from "@/lib/ports/schema";

export const VirtuaRacing: Port = {
  schema: "port",
  id: "virtua-racing",
  title: "Virtua Racing",
  game: "Virtua Racing",
  developers: ["matiaszanolli"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/matiaszanolli/sega-vr-disasm"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/1/12/Virtua_Racing_arcade_flyer.jpg",
    alt: "Virtua Racing (box art)",
    credit: "Wikipedia",
  },
  notes:
    "Complete static recompilation of Virtua Racing for the Sega 32X (optimization in progress).",
  notesEs:
    "Recompilación estática completa de Virtua Racing para Sega 32X (optimización en curso).",
};
