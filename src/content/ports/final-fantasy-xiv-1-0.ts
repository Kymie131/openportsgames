import type { Port } from "@/lib/ports/schema";

export const FinalFantasyXiv10: Port = {
  schema: "port",
  id: "final-fantasy-xiv-1-0",
  title: "Final Fantasy XIV (1.0)",
  game: "Final Fantasy XIV (1.0)",
  developers: ["swstegall"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/swstegall/meteor-decomp"],
  license: { spdx: "AGPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
