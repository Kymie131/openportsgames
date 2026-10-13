import type { Port } from "@/lib/ports/schema";

export const StarfoxRecomp: Port = {
  schema: "port",
  id: "starfox-recomp",
  title: "Starfox Recomp",
  game: "Starfox Recomp",
  developers: ["mstan"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/StarFoxSNESRecomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Super Nintendo",
};
