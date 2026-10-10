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
    "Recompiled Guitar Hero: Warriors of Rock (Xbox 360) to run natively on Windows through ReXGlue. Own the game to play.",
  notesEs:
    "Recompilado Guitar Hero: Warriors of Rock (Xbox 360) para ejecutarse de forma nativa en Windows con ReXGlue. Necesitas el juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/b/bb/Guitar_Hero_Warriors_of_Rock_Game_Cover.jpg",
    alt: "Guitar Hero: Warriors of Rock (box art)",
    credit: "Wikipedia",
  },
};
