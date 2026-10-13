import type { Port } from "@/lib/ports/schema";

export const DragonQuestIx: Port = {
  schema: "port",
  id: "dragon-quest-ix",
  title: "Dragon Quest IX",
  game: "Dragon Quest IX",
  developers: ["DQIX"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/DQIX/dqix-decomp"],
  license: { spdx: "Unlicense" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo DS",
};
