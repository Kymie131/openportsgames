import type { Port } from "@/lib/ports/schema";

export const FroggerHesBack: Port = {
  schema: "port",
  id: "frogger-hes-back",
  title: "Frogger: He's Back!",
  game: "Frogger: He's Back!",
  developers: ["HighwayFrogs"],
  publisher: "Unknown",
  originalYear: 1997,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/HighwayFrogs/frogger-psx"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation",
};
