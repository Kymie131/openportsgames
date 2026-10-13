import type { Port } from "@/lib/ports/schema";

export const F15Ii: Port = {
  schema: "port",
  id: "f-15-ii",
  title: "F-15 II",
  game: "F-15 II",
  developers: ["neuviemeporte"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/neuviemeporte/f15se2-re"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "MS-DOS",
};
