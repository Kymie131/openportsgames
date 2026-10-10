import type { Port } from "@/lib/ports/schema";

export const xenaWarriorPrincessRecomp: Port = {
  schema: "port",
  id: "xena-warrior-princess-recomp",
  title: "Xena: Warrior Princess Recompiled",
  game: "Xena: Warrior Princess",
  developers: ["alexbeavs"],
  publisher: "Electronic Arts",
  originalYear: 1999,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/xena-warrior-princess-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Xena: Warrior Princess (PS1, USA SLUS-00977) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Xena: Warrior Princess (PS1, USA SLUS-00977) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Xena%20-%20Warrior%20Princess%20(Europe).png",
    alt: "Xena: Warrior Princess (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Xena%20-%20Warrior%20Princess%20(Europe).png",
      alt: "Xena: Warrior Princess (screenshot)",
      credit: "Libretro",
    },
  ],
};
