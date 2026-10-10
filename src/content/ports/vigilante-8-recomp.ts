import type { Port } from "@/lib/ports/schema";

export const vigilante8Recomp: Port = {
  schema: "port",
  id: "vigilante-8-recomp",
  title: "Vigilante 8 Recompiled",
  game: "Vigilante 8",
  developers: ["alexbeavs"],
  publisher: "Activision",
  originalYear: 1998,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/vigilante-8-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Vigilante 8 (PS1, Europe SLES-01212) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Vigilante 8 (PS1, Europe SLES-01212) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Vigilante%208%20(Europe).png",
    alt: "Vigilante 8 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Vigilante%208%20(Europe).png",
      alt: "Vigilante 8 (screenshot)",
      credit: "Libretro",
    },
  ],
};
