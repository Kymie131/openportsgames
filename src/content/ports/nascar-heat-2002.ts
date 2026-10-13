import type { Port } from "@/lib/ports/schema";

export const NascarHeat2002: Port = {
  schema: "port",
  id: "nascar-heat-2002",
  title: "NASCAR Heat 2002",
  game: "NASCAR Heat 2002",
  developers: ["shohamc1"],
  publisher: "Unknown",
  originalYear: 2002,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/shohamc1/heat2002"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Game Boy Advance",
};
