import type { Port } from "@/lib/ports/schema";

export const Wild9: Port = {
  schema: "port",
  id: "wild-9",
  title: "Wild 9",
  game: "Wild 9",
  developers: ["plinkr"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/plinkr/Wild9-Decompilation"],
  license: { spdx: "AGPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation",
};
