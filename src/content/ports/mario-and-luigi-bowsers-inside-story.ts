import type { Port } from "@/lib/ports/schema";

export const MarioAndLuigiBowsersInsideStory: Port = {
  schema: "port",
  id: "mario-and-luigi-bowsers-inside-story",
  title: "Mario & Luigi: Bowser's Inside Story",
  game: "Mario & Luigi: Bowser's Inside Story",
  developers: ["istornz"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/istornz/bowsers-inside-story-decomp"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo DS",
};
