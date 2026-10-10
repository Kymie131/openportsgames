import type { Port } from "@/lib/ports/schema";

export const megaManLegendsRecomp: Port = {
  schema: "port",
  id: "mega-man-legends-recomp",
  title: "Mega Man Legends Recompiled",
  game: "Mega Man Legends",
  developers: ["alexbeavs"],
  publisher: "Capcom",
  originalYear: 1997,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/mega-man-legends-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Mega Man Legends (PS1, Europe SLES-01485) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Mega Man Legends (PS1, Europe SLES-01485) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Mega%20Man%20Legends%20(Europe).png",
    alt: "Mega Man Legends (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Mega%20Man%20Legends%20(Europe).png",
      alt: "Mega Man Legends (screenshot)",
      credit: "Libretro",
    },
  ],
};
