import type { Port } from "@/lib/ports/schema";

export const crashBandicoot3WarpedRecomp: Port = {
  schema: "port",
  id: "crash-bandicoot-3-warped-recomp",
  title: "Crash Bandicoot 3: Warped Recompiled",
  game: "Crash Bandicoot 3: Warped",
  developers: ["alexbeavs"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1998,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/crash-bandicoot-3-warped-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Crash Bandicoot is a video game franchise created by Naughty Dog as a flagship title for Sony's PlayStation console. The series began with the development of the first game in 1994, inspired by the emerging capabilities of 3D consoles and games like Donkey Kong Country (1994). The protagonist, initially conceived as \"Willy the Wombat\", evolved into Crash Bandicoot, a goofy, genetically mutated eastern barred bandicoot who escapes the clutches of the mad scientist Doctor Neo Cortex.",
  summaryEs: "Crash Bandicoot: Warped, conocido en Europa como Crash Bandicoot 3: Warped, es un videojuego de plataformas desarrollado por Naughty Dog y publicado por Sony Computer Entertainment para PlayStation. Es la tercera entrega de la serie Crash Bandicoot, tras Crash Bandicoot 2: Cortex Strikes Back.",
  notes:
    "Recompilation of Crash Bandicoot 3: Warped (PS1, USA SCUS-94244) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Crash Bandicoot 3: Warped (PS1, USA SCUS-94244) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Crash%20Bandicoot%203%20-%20Warped%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "Crash Bandicoot 3: Warped (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Crash%20Bandicoot%203%20-%20Warped%20(Europe)%20(En,Fr,De,Es,It).png",
      alt: "Crash Bandicoot 3: Warped (screenshot)",
      credit: "Libretro",
    },
  ],
};
