import type { Port } from "@/lib/ports/schema";

export const residentEvil3Recomp: Port = {
  schema: "port",
  id: "resident-evil-3-recomp",
  title: "Resident Evil 3: Nemesis Recompiled",
  game: "Resident Evil 3: Nemesis",
  developers: ["alexbeavs"],
  publisher: "Capcom",
  originalYear: 1999,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/resident-evil-3-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Resident Evil 3: Nemesis is a 1999 survival horror game developed and published by Capcom for the PlayStation. It takes place almost concurrently with the events of Resident Evil 2. The player controls the former elite agent Jill Valentine as she escapes from Raccoon City, which has been overrun by zombies. The game uses the same engine as its predecessors and features 3D models over pre-rendered backgrounds with fixed camera angles. Choices through the game affect how the story unfolds and which ending is achieved.",
  summaryEs: "Resident Evil 3: Nemesis —cuyo título original es Biohazard 3: Last Escape es un videojuego de acción-aventura de terror y supervivencia desarrollado y distribuido por Capcom originalmente para PlayStation. Es el tercer juego de la serie Resident Evil y tiene lugar casi al mismo tiempo que los eventos de Resident Evil 2. El jugador debe controlar a la exagente de élite Jill Valentine mientras escapa de Raccoon City, que ha sido invadida por zombies. El juego utiliza el mismo motor que sus predecesores y presenta modelos 3D sobre fondos prerenderizados con ángulos de cámara fijos.",
  notes:
    "Recompilation of Resident Evil 3: Nemesis (PS1, Europe SLES-02529) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Resident Evil 3: Nemesis (PS1, Europe SLES-02529) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Resident%20Evil%203%20-%20Nemesis%20(Europe).png",
    alt: "Resident Evil 3: Nemesis (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Resident%20Evil%203%20-%20Nemesis%20(Europe).png",
      alt: "Resident Evil 3: Nemesis (screenshot)",
      credit: "Libretro",
    },
  ],
};
