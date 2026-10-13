import type { Port } from "@/lib/ports/schema";

export const CrashTagTeamRacing: Port = {
  schema: "port",
  id: "crash-tag-team-racing",
  title: "Crash Tag Team Racing",
  game: "Crash Tag Team Racing",
  developers: ["bluisblu"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/bluisblu/cttr"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "GameCube",
};
