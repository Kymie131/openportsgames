import type { Port } from "@/lib/ports/schema";

export const Contra: Port = {
  schema: "port",
  id: "contra",
  title: "Contra",
  game: "Contra",
  developers: ["vermiceli"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/vermiceli/nes-contra-us"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo Entertainment System",
  notes:
    "An annotated disassembly with supplemental materials of the Contra (US) and Probotector NES game.",
  notesEs: "Desensamblado anotado, con material adicional, de Contra (US) y Probotector para NES.",
};
