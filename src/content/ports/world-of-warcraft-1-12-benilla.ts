import type { Port } from "@/lib/ports/schema";

export const WorldOfWarcraft112Benilla: Port = {
  schema: "port",
  id: "world-of-warcraft-1-12-benilla",
  title: "World of Warcraft 1.12 (benilla)",
  game: "World of Warcraft 1.12 (benilla)",
  developers: ["samwhosung"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/samwhosung/benilla"],
  license: { spdx: "Apache-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
