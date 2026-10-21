import type { Port } from "@/lib/ports/schema";

export const F15IiEnhanced: Port = {
  schema: "port",
  id: "f-15-ii-enhanced",
  title: "F-15 II Enhanced",
  game: "F-15 II Enhanced",
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
  sources: ["https://github.com/neuviemeporte/f15se2-ex"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["MS-DOS"],
  notes:
    "Port of the reconstructed MS-DOS game F-15 Strike Eagle 2 to modern architectures, with bugfixes and enhancements.",
  notesEs:
    "Port del reconstruido F-15 Strike Eagle 2 (MS-DOS) a arquitecturas modernas, con correcciones y mejoras.",
};
