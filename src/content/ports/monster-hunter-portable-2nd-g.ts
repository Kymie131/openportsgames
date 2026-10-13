import type { Port } from "@/lib/ports/schema";

export const MonsterHunterPortable2ndG: Port = {
  schema: "port",
  id: "monster-hunter-portable-2nd-g",
  title: "Monster Hunter Portable 2nd G",
  game: "Monster Hunter Portable 2nd G",
  developers: ["tclamb"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/tclamb/mhp2g-decomp"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
