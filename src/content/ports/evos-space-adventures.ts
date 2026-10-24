import type { Port } from "@/lib/ports/schema";

export const EvosSpaceAdventures: Port = {
  schema: "port",
  id: "evos-space-adventures",
  title: "Evo's Space Adventures",
  game: "Evo's Space Adventures",
  developers: ["mkst"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/mkst/esa"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  summary: "Evo's Space Adventures is a action-adventure game for Nintendo 64, released in 2000.",
  summaryEs: "Evo's Space Adventures es un videojuego de acci�n y aventura para Nintendo 64, lanzado en 2000.",
  summaryGenerated: true,
  notes:
    "Evo's Space Adventures for PSX. A proof of concept, matching PSX decompilation, leveraging tools from N64 decomp projects.",
  notesEs:
    "Evo's Space Adventures para PSX. Prueba de concepto, decompilación que coincide para PSX.",
};
