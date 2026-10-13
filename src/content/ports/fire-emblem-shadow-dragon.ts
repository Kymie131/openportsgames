import type { Port } from "@/lib/ports/schema";

export const FireEmblemShadowDragon: Port = {
  schema: "port",
  id: "fire-emblem-shadow-dragon",
  title: "Fire Emblem: Shadow Dragon",
  game: "Fire Emblem: Shadow Dragon",
  developers: ["Eebit"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Eebit/fe11-us"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
