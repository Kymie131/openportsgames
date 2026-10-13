import type { Port } from "@/lib/ports/schema";

export const GuitarHero2: Port = {
  schema: "port",
  id: "guitar-hero-2",
  title: "Guitar Hero 2",
  game: "Guitar Hero 2",
  developers: ["YoshiCrystal9"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "recompilation",
  genre: "music",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/YoshiCrystal9/re-gh2"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Xbox 360",
};
