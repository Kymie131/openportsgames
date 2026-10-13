import type { Port } from "@/lib/ports/schema";

export const RhythmHeavenFever: Port = {
  schema: "port",
  id: "rhythm-heaven-fever",
  title: "Rhythm Heaven Fever",
  game: "Rhythm Heaven Fever",
  developers: ["conhlee"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "music",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/conhlee/rhf"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
