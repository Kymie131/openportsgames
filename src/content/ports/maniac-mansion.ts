import type { Port } from "@/lib/ports/schema";

export const ManiacMansion: Port = {
  schema: "port",
  id: "maniac-mansion",
  title: "Maniac Mansion",
  game: "Maniac Mansion",
  developers: ["pditincho"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/pditincho/mm-explained"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
