import type { Port } from "@/lib/ports/schema";

export const DragonQuestIv: Port = {
  schema: "port",
  id: "dragon-quest-iv",
  title: "Dragon Quest IV",
  game: "Dragon Quest IV",
  developers: ["GoldieLeGenie"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/GoldieLeGenie/DQIV-DECOMP"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo DS",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/db/Dragon_Quest_IV_cover.jpg",
    alt: "Dragon Quest IV (cover)",
    credit: "Wikipedia",
  },
};
