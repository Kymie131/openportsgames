import type { Port } from "@/lib/ports/schema";

export const starWarsEpisodeIThePhantomMenaceRecomp: Port = {
  schema: "port",
  id: "star-wars-episode-i-the-phantom-menace-recomp",
  title: "Star Wars Episode I: The Phantom Menace Recompiled",
  game: "Star Wars Episode I: The Phantom Menace",
  developers: ["alexbeavs"],
  publisher: "LucasArts",
  originalYear: 1999,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/star-wars-episode-i-the-phantom-menace-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Star Wars Episode I: The Phantom Menace (PS1, Europe SLES-02034) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Star Wars Episode I: The Phantom Menace (PS1, Europe SLES-02034) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
};
