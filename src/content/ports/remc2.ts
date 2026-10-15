import type { Port } from "@/lib/ports/schema";

export const Remc2: Port = {
  schema: "port",
  id: "remc2",
  title: "Remc2",
  game: "remc2",
  developers: ["turican0"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "reimplementation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/turican0/remc2"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  notes: "Recode Binary code of game Magic Carpet2 to C/C++ language(remake MC2 for any platform).",
  notesEs:
    "Recodificación a C/C++ del código binario de Magic Carpet 2 (remake para cualquier plataforma).",
};
