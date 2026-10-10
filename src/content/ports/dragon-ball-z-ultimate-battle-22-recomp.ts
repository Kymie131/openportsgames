import type { Port } from "@/lib/ports/schema";

export const dragonBallZUltimateBattle22Recomp: Port = {
  schema: "port",
  id: "dragon-ball-z-ultimate-battle-22-recomp",
  title: "Dragon Ball Z: Ultimate Battle 22 Recompiled",
  game: "Dragon Ball Z: Ultimate Battle 22",
  developers: ["alexbeavs"],
  publisher: "Bandai",
  originalYear: 1995,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/dragon-ball-z-ultimate-battle-22-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Dragon Ball Z: Ultimate Battle 22 (PS1, Europe SLES-03736) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Dragon Ball Z: Ultimate Battle 22 (PS1, Europe SLES-03736) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Dragon%20Ball%20Z%20-%20Ultimate%20Battle%2022%20(Europe).png",
    alt: "Dragon Ball Z: Ultimate Battle 22 (box art)",
    credit: "Box art",
  },
};
