import type { Port } from "@/lib/ports/schema";

export const tenchuStealthAssassinsRecomp: Port = {
  schema: "port",
  id: "tenchu-stealth-assassins-recomp",
  title: "Tenchu: Stealth Assassins Recompiled",
  game: "Tenchu: Stealth Assassins",
  developers: ["alexbeavs"],
  publisher: "Activision",
  originalYear: 1998,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/tenchu-stealth-assassins-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Tenchu: Stealth Assassins is a 1998 stealth video game, developed by Acquire and published by Sony Music Entertainment Japan for the PlayStation. It is the first installment in the Tenchu series, with Activision releasing the game outside Japan. Following Rikimaru and Ayame of the Azuma ninja clan as they complete missions for their employer Lord Gohda in Sengoku-era Japan, the gameplay involves the player guiding their chosen character through missions. With the aim to being undetected while either avoiding or quietly killing enemies.",
  summaryEs: "Tenchu: Stealth Assassins es un videojuego de sigilo desarrollado por Acquire y publicado por Sony Music y Activision el 26 de febrero de 1998 en Japón, el 31 de agosto de 1998 en Estados Unidos y posteriormente en Europa para las plataformas PlayStation, PlayStation 2, XBox, XBox 360, PlayStation Portable y Nintendo DS. El jugador ejerce el papel de un ninja, a lo largo de 10 pantallas, donde en cada una de ellas deberá cumplir una misión. En esta primera versión de la saga Tenchu están disponibles dos personajes, Rikimaru y Ayame, a las órdenes de su maestro, Lord Gohda.",
  notes:
    "Recompilation of Tenchu: Stealth Assassins (PS1, USA SLUS-00706) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Tenchu: Stealth Assassins (PS1, USA SLUS-00706) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Tenchu%20-%20Stealth%20Assassins%20(Europe)%20(En,Fr,It).png",
    alt: "Tenchu: Stealth Assassins (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Tenchu%20-%20Stealth%20Assassins%20(Europe)%20(En,Fr,It).png",
      alt: "Tenchu: Stealth Assassins (screenshot)",
      credit: "Libretro",
    },
  ],
};
