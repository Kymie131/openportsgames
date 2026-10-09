import type { Port } from "@/lib/ports/schema";

export const legacyOfKainSoulReaverRecomp: Port = {
  schema: "port",
  id: "legacy-of-kain-soul-reaver-recomp",
  title: "Legacy of Kain: Soul Reaver Recompiled",
  game: "Legacy of Kain: Soul Reaver",
  developers: ["alexbeavs"],
  publisher: "Eidos Interactive",
  originalYear: 1999,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/legacy-of-kain-soul-reaver-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Legacy of Kain: Soul Reaver (PS1, Europe SLES-01301) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Legacy of Kain: Soul Reaver (PS1, Europe SLES-01301) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
};
