import type { Port } from "@/lib/ports/schema";

export const aloneInTheDarkTheNewNightmareRecomp: Port = {
  schema: "port",
  id: "alone-in-the-dark-the-new-nightmare-recomp",
  title: "Alone in the Dark: The New Nightmare Recompiled",
  game: "Alone in the Dark: The New Nightmare",
  developers: ["alexbeavs"],
  publisher: "Infogrames",
  originalYear: 2001,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/alone-in-the-dark-the-new-nightmare-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Alone in the Dark: The New Nightmare is a survival horror video game and the fourth installment and first reboot of the video game series Alone in the Dark, developed by Darkworks and published by Infogrames. The game was released in 2001 on Windows, PlayStation, Dreamcast, and Game Boy Color. A PlayStation 2 version of the game was also released several months after and only in Europe.",
  summaryEs: "Alone in the Dark: The New Nightmare es la cuarta entrega de la saga de videojuegos de terror Alone in the Dark desarrollado por Darkworks y publicada por Infogrames. El juego salió a la venta en distintas plataformas incluyendo PlayStation, Dreamcast, PlayStation 2, Microsoft Windows y Game Boy Color.",
  notes:
    "Recompilation of Alone in the Dark: The New Nightmare (PS1, Europe SLES-02801 / SLES-12801) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Alone in the Dark: The New Nightmare (PS1, Europe SLES-02801 / SLES-12801) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Alone%20in%20the%20Dark%20-%20The%20New%20Nightmare%20(USA).png",
    alt: "Alone in the Dark: The New Nightmare (box art)",
    credit: "Box art",
  },
};
