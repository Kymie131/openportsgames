import type { Port } from "@/lib/ports/schema";

export const FiveNightsAtFreddys: Port = {
  schema: "port",
  id: "five-nights-at-freddys",
  title: "Five Nights At Freddy's",
  game: "Five Nights At Freddy's",
  developers: ["fr3dsp"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/fr3dsp/FNaF-Decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
