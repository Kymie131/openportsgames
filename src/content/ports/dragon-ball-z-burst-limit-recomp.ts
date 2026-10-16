import type { Port } from "@/lib/ports/schema";

export const dragonBallZBurstLimitRecomp: Port = {
  schema: "port",
  id: "dragon-ball-z-burst-limit-recomp",
  title: "Dragon Ball Z: Burst Limit Recompiled",
  game: "Dragon Ball Z: Burst Limit",
  developers: ["iExplosiveRage"],
  publisher: "Atari",
  originalYear: 2008,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/iExplosiveRage/DBZ-Burst-Limit-Recompiled"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  notes:
    "Native recompilation of Dragon Ball Z: Burst Limit (Xbox 360) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación nativa de Dragon Ball Z: Burst Limit (Xbox 360) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/55/Dragon_Ball_Z_Burst_Limit.jpg",
    alt: "Dragon Ball Z: Burst Limit (cover)",
    credit: "Wikipedia",
  },
};
