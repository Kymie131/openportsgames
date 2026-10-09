import type { Port } from "@/lib/ports/schema";

export const aceCombat3ElectrosphereRecomp: Port = {
  schema: "port",
  id: "ace-combat-3-electrosphere-recomp",
  title: "Ace Combat 3: Electrosphere (Japan) Recompiled",
  game: "Ace Combat 3: Electrosphere",
  developers: ["alexbeavs"],
  publisher: "Namco",
  originalYear: 1999,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/ace-combat-3-electrosphere-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Ace Combat 3: Electrosphere (PS1, Japan SLPS-02020 / SLPS-02021) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Ace Combat 3: Electrosphere (PS1, Japan SLPS-02020 / SLPS-02021) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
};
