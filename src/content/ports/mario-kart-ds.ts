import type { Port } from "@/lib/ports/schema";

export const MarioKartDs: Port = {
  schema: "port",
  id: "mario-kart-ds",
  title: "Mario Kart DS",
  game: "Mario Kart DS",
  developers: ["XorTroll"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "reimplementation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/XorTroll/mkds-re"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo DS",
};
