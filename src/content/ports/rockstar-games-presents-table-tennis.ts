import type { Port } from "@/lib/ports/schema";

export const RockstarGamesPresentsTableTennis: Port = {
  schema: "port",
  id: "rockstar-games-presents-table-tennis",
  title: "Rockstar Games Presents Table Tennis",
  game: "Rockstar Games Presents Table Tennis",
  developers: ["OZORDI"],
  publisher: "Unknown",
  originalYear: 2006,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/OZORDI/tt-decomp"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
