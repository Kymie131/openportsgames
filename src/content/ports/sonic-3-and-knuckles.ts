import type { Port } from "@/lib/ports/schema";

export const Sonic3AndKnuckles: Port = {
  schema: "port",
  id: "sonic-3-and-knuckles",
  title: "Sonic 3 & Knuckles",
  game: "Sonic 3 & Knuckles",
  developers: ["mstan"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/Sonic3AndKnucklesRecomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Sega Mega Drive / Genesis",
};
