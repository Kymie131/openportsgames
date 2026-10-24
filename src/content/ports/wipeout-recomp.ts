import type { Port } from "@/lib/ports/schema";

export const wipeoutRecomp: Port = {
  schema: "port",
  id: "wipeout-recomp",
  title: "WipEout Recompiled",
  game: "WipEout",
  developers: ["alexbeavs"],
  publisher: "Psygnosis",
  originalYear: 1995,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/wipeout-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Wipeout 3 is a 1999 racing video game developed by Psygnosis and published by Sony Computer Entertainment for the PlayStation. It is the fourth game and third main instalment in the Wipeout series, following Wipeout 64 (1998), and the third on PlayStation following Wipeout 2097 (1996). It is the first game in the series to be released on neither a Sega or Nintendo console nor personal computers. Players control anti-gravity ships and use weapons to force other contenders out of the race.",
  summaryEs: "El término Wipeout puede referirse a:",
  notes:
    "Recompilation of WipEout (PS1, Europe SCES-00010) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de WipEout (PS1, Europe SCES-00010) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/WipEout%20(Europe)%20(Rev%201).png",
    alt: "WipEout (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/WipEout%20(Europe)%20(Rev%201).png",
      alt: "WipEout (screenshot)",
      credit: "Libretro",
    },
  ],
};
