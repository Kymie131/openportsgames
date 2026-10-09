import type { Port } from "@/lib/ports/schema";

export const guitarHeroWarriorsOfRockRecomp: Port = {
  schema: "port",
  id: "guitar-hero-warriors-of-rock-recomp",
  title: "Guitar Hero: Warriors of Rock Recompiled",
  game: "Guitar Hero: Warriors of Rock",
  developers: ["ronniecloud"],
  publisher: "Activision",
  originalYear: 2010,
  portType: "recompilation",
  genre: "music",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/ronniecloud/re-wor"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Static recompilation of Guitar Hero: Warriors of Rock (Xbox 360) with ReXGlue. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Guitar Hero: Warriors of Rock (Xbox 360) con ReXGlue. Requiere tu propia copia del juego.",
};
