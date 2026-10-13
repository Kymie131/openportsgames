import type { Port } from "@/lib/ports/schema";

export const LuigisMansion: Port = {
  schema: "port",
  id: "luigis-mansion",
  title: "Luigi's Mansion",
  game: "Luigi's Mansion",
  developers: ["SomeJakeGuy"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/SomeJakeGuy/lm-decomp"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
