import type { Port } from "@/lib/ports/schema";

export const DragonWarriorMonsters: Port = {
  schema: "port",
  id: "dragon-warrior-monsters",
  title: "Dragon Warrior Monsters",
  game: "Dragon Warrior Monsters",
  developers: ["NiyaDev"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/NiyaDev/DWM"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
