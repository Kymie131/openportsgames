import type { Port } from "@/lib/ports/schema";

export const DisneyPigletsBigGame: Port = {
  schema: "port",
  id: "disney-piglets-big-game",
  title: "Disney Piglet's Big Game",
  game: "Disney Piglet's Big Game",
  developers: ["tgsm"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/tgsm/pbg"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
