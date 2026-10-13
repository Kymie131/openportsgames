import type { Port } from "@/lib/ports/schema";

export const fightNightChampionRecomp: Port = {
  schema: "port",
  id: "fight-night-champion-recomp",
  title: "Fight Night Champion Recompiled",
  game: "Fight Night Champion",
  developers: ["whompay"],
  publisher: "EA Sports",
  originalYear: 2011,
  portType: "recompilation",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/whompay/FNCReborn"],
  license: { spdx: "Apache-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Xbox 360",
  notes:
    "Static recompilation of Fight Night Champion (Xbox 360) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Fight Night Champion (Xbox 360) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/3/34/Fight_Night_Champion.jpg",
    alt: "Fight Night Champion (cover)",
    credit: "Wikipedia",
  },
};
