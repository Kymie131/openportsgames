import type { Port } from "@/lib/ports/schema";

export const TheWorldEndsWithYou: Port = {
  schema: "port",
  id: "the-world-ends-with-you",
  title: "The World Ends with You",
  game: "The World Ends with You",
  developers: ["Yotona"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Yotona/twewy"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo DS",
};
