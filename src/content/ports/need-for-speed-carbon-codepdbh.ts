import type { Port } from "@/lib/ports/schema";

export const NeedForSpeedCarbonCodepdbh: Port = {
  schema: "port",
  id: "need-for-speed-carbon-codepdbh",
  title: "Need for Speed Carbon",
  game: "Need for Speed Carbon",
  developers: ["codepdbh"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/codepdbh/NFS-CARBON-360-ANDROID-RECOMP"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a4/Need_for_Speed_Carbon_Game_Cover.jpg",
    alt: "Need for Speed Carbon (cover)",
    credit: "Wikipedia",
  },
  notes:
    "Experimental static recompilation of Need for Speed Carbon for Xbox 360 using ReXGlue. Windows x64 prototype, analysis fixes and build instructions.",
  notesEs:
    "Recompilación estática experimental de Need for Speed Carbon para Xbox 360 con ReXGlue. Prototipo para Windows x64.",
};
