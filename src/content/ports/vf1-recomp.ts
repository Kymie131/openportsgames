import type { Port } from "@/lib/ports/schema";

export const Vf1Recomp: Port = {
  schema: "port",
  id: "vf1-recomp",
  title: "Vf1 recomp",
  game: "vf1 recomp",
  developers: ["mr-finster"],
  publisher: "Unknown",
  originalYear: 1993,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/mr-finster/vf1-recomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "vf1 recomp is a shooter game, released in 1993.",
  summaryEs: "vf1 recomp es un videojuego de disparos, lanzado en 1993.",
  summaryGenerated: true,
  notes:
    "Virtua Fighter (Sega Model 1, 1993) statically recompiled for Mac, Windows and Steam Deck: up to 6x, widescreen, smooth 120 fps. Bring your own vf.zip.",
  notesEs:
    "Virtua Fighter (Sega Model 1, 1993) recompilado estáticamente para Mac, Windows y Steam Deck: hasta 6x, panorámico y 120 fps suaves. Aporta tu propio vf.zip.",
};
