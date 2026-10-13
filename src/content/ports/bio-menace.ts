import type { Port } from "@/lib/ports/schema";

export const BioMenace: Port = {
  schema: "port",
  id: "bio-menace",
  title: "Bio Menace",
  game: "Bio Menace",
  developers: ["lethal-guitar"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/lethal-guitar/BioMenaceDecomp"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
