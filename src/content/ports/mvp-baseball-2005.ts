import type { Port } from "@/lib/ports/schema";

export const MvpBaseball2005: Port = {
  schema: "port",
  id: "mvp-baseball-2005",
  title: "MVP Baseball 2005",
  game: "MVP Baseball 2005",
  developers: ["mitsevox"],
  publisher: "Unknown",
  originalYear: 2005,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/mitsevox/mvp2005"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "GameCube",
};
