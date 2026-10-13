import type { Port } from "@/lib/ports/schema";

export const TheSimsBustinOut: Port = {
  schema: "port",
  id: "the-sims-bustin-out",
  title: "The Sims: Bustin' Out",
  game: "The Sims: Bustin' Out",
  developers: ["SimsAdvanceRet"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/SimsAdvanceRet/BustinOutGBADecomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Game Boy Advance",
};
