import type { Port } from "@/lib/ports/schema";

export const BattleCity: Port = {
  schema: "port",
  id: "battle-city",
  title: "Battle City",
  game: "Battle City",
  developers: ["vgrichina"],
  publisher: "Unknown",
  originalYear: 1985,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/vgrichina/battlecity"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo Entertainment System",
};
