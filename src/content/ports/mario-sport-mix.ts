import type { Port } from "@/lib/ports/schema";

export const MarioSportMix: Port = {
  schema: "port",
  id: "mario-sport-mix",
  title: "Mario Sport Mix",
  game: "Mario Sport Mix",
  developers: ["EltyDev"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/EltyDev/MSM-decomp"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
