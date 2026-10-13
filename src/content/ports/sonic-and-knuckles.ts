import type { Port } from "@/lib/ports/schema";

export const SonicAndKnuckles: Port = {
  schema: "port",
  id: "sonic-and-knuckles",
  title: "Sonic & Knuckles",
  game: "Sonic & Knuckles",
  developers: ["sonicretro"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/sonicretro/skdisasm"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
