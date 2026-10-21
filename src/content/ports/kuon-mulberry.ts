import type { Port } from "@/lib/ports/schema";

export const KuonMulberry: Port = {
  schema: "port",
  id: "kuon-mulberry",
  title: "Kuon (Mulberry)",
  game: "Kuon (Mulberry)",
  developers: ["weirdbeardgame"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/weirdbeardgame/Mulberry"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 2"],
  notes:
    "Decompilation of Kuon (PlayStation 2) through the Mulberry project. The repository is public and hosts the source code.",
  notesEs:
    "Decompilación de Kuon (PlayStation 2) mediante el proyecto Mulberry. El repositorio es público y aloja el código fuente.",
};
