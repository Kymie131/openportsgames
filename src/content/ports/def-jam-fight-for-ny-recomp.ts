import type { Port } from "@/lib/ports/schema";

export const defJamFightForNyRecomp: Port = {
  schema: "port",
  id: "def-jam-fight-for-ny-recomp",
  title: "Def Jam: Fight for NY — Recompiled",
  game: "Def Jam: Fight for NY",
  developers: ["vyanhursky"],
  publisher: "EA",
  originalYear: 2004,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "macos", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/vyanhursky/DefJamFFNY-recomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox"],
  notes:
    "Def Jam: Fight for NY (original Xbox) recompiled to a native port for Windows, macOS and Linux (including Steam Deck), Direct3D 11 / Vulkan. Unofficial fan port; it needs your own game dump. Latest release: v0.9.3.",
  notesEs:
    "Def Jam: Fight for NY (Xbox original) recompilado a un port nativo para Windows, macOS y Linux (incluido Steam Deck), Direct3D 11 / Vulkan. Port fan no oficial; necesita tu propio volcado del juego. Última release: v0.9.3.",
};
