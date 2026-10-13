import type { Port } from "@/lib/ports/schema";

export const WorldOfGoo: Port = {
  schema: "port",
  id: "world-of-goo",
  title: "World of Goo",
  game: "World of Goo",
  developers: ["Fancy2209"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Fancy2209/wog-wiiware"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
