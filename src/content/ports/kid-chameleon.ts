import type { Port } from "@/lib/ports/schema";

export const KidChameleon: Port = {
  schema: "port",
  id: "kid-chameleon",
  title: "Kid Chameleon",
  game: "Kid Chameleon",
  developers: ["sonicretro"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/sonicretro/kid-chameleon-disasm"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
