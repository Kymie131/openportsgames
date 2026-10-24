import type { Port } from "@/lib/ports/schema";

export const teamBuddiesRecomp: Port = {
  schema: "port",
  id: "team-buddies-recomp",
  title: "Team Buddies Recompiled",
  game: "Team Buddies",
  developers: ["alexbeavs"],
  publisher: "Psygnosis",
  originalYear: 2000,
  portType: "recompilation",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/team-buddies-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Team Buddies is a 2000 action strategy video game developed by Psygnosis and published by Sony Computer Entertainment for the PlayStation. It was released by Midway Games in North America. It was also the last game developed by Psygnosis' Camden Town studio before it was moved to Sony.",
  summaryEs: "Team Buddies es un videojuego para la consola PlayStation lanzado el 15 de septiembre del año 2000. Desarrollado por SCE Studio Soho.",
  notes:
    "Recompilation of Team Buddies (PS1, Europe SCES-02986) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Team Buddies (PS1, Europe SCES-02986) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Team%20Buddies%20(Europe)%20(En,Es,It).png",
    alt: "Team Buddies (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Team%20Buddies%20(Europe)%20(En,Es,It).png",
      alt: "Team Buddies (screenshot)",
      credit: "Libretro",
    },
  ],
};
