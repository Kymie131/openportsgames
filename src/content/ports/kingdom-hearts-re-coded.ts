import type { Port } from "@/lib/ports/schema";

export const KingdomHeartsReCoded: Port = {
  schema: "port",
  id: "kingdom-hearts-re-coded",
  title: "Kingdom Hearts Re:coded",
  game: "Kingdom Hearts Re:coded",
  developers: ["kh-recoded-decomp"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/kh-recoded-decomp/kh-recoded-decomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  notes:
    "Matching decompilation of Kingdom Hearts Re:coded (US/EU). EU: 88.65% C code and 99.98% DATA, byte-exact.",
  notesEs:
    "Decompilación que coincide de Kingdom Hearts Re:coded (US/EU). Versión EU: 88,65% de código C y 99,98% de datos, idénticos byte a byte.",
};
