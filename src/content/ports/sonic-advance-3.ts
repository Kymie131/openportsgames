import type { Port } from "@/lib/ports/schema";

export const SonicAdvance3: Port = {
  schema: "port",
  id: "sonic-advance-3",
  title: "Sonic Advance 3",
  game: "Sonic Advance 3",
  developers: ["SAT-R"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/SAT-R/sa3"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
