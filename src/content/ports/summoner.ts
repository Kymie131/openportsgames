import type { Port } from "@/lib/ports/schema";

export const Summoner: Port = {
  schema: "port",
  id: "summoner",
  title: "Summoner",
  game: "Summoner",
  developers: ["AARosson48"],
  publisher: "Unknown",
  originalYear: 2001,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/AARosson48/SummonerDecomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
