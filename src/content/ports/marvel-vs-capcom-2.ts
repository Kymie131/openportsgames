import type { Port } from "@/lib/ports/schema";

export const MarvelVsCapcom2: Port = {
  schema: "port",
  id: "marvel-vs-capcom-2",
  title: "Marvel vs. Capcom 2",
  game: "Marvel vs. Capcom 2",
  developers: ["g-guthrie"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/g-guthrie/mvc2-ps2-decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation 2",
};
