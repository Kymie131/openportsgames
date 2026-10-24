import type { Port } from "@/lib/ports/schema";

export const koudelkaRecomp: Port = {
  schema: "port",
  id: "koudelka-recomp",
  title: "Koudelka Recompiled",
  game: "Koudelka",
  developers: ["alexbeavs"],
  publisher: "Infogrames",
  originalYear: 1999,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/koudelka-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Koudelka is a role-playing video game developed by Sacnoth for the PlayStation. The game was published by SNK in Japan in 1999, and by Infogrames internationally in 2000. Set in the haunted Nemeton Monastery in Wales, the plot follows protagonists Koudelka Iasant, Edward Plunkett and Bishop James O'Flaherty as they uncover Nemeton's secrets and confront monsters created from its dark past. Its gameplay blends exploration and puzzle elements with turn-based battles waged on a grid.",
  summaryEs: "Koudelka es un videojuego de rol con temática survival horror desarrollado por Sacnoth para la videoconsola PlayStation. El juego fue lanzado el 16 de diciembre de 1999, en Japón, 29 de junio de 2000, en América del Norte y 29 de septiembre de 2000, en Europa.",
  notes:
    "Recompilation of Koudelka (PS1, Europe SLES-02897) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Koudelka (PS1, Europe SLES-02897) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Koudelka%20(Europe).png",
    alt: "Koudelka (box art)",
    credit: "Box art",
  },
};
