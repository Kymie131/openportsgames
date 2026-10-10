import type { Port } from "@/lib/ports/schema";

export const legendOfDragoonSeveredChains: Port = {
  schema: "port",
  id: "legend-of-dragoon-severed-chains",
  title: "Severed Chains (The Legend of Dragoon)",
  game: "The Legend of Dragoon",
  developers: ["Legend-of-Dragoon-Modding"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1999,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Legend-of-Dragoon-Modding/Severed-Chains"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Severed Chains ports The Legend of Dragoon to PC, macOS and Linux from a reverse-engineered codebase. It adds modern options and needs your own disc.",
  notesEs:
    "Severed Chains lleva The Legend of Dragoon a PC, macOS y Linux a partir de un código reversado. Añade opciones modernas y necesita tu propio disco.",
};
