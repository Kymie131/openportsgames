import type { Port } from "@/lib/ports/schema";

export const dinoCrisisRecomp: Port = {
  schema: "port",
  id: "dino-crisis-recomp",
  title: "Dino Crisis Recompiled",
  game: "Dino Crisis",
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
  sources: ["https://github.com/alexbeavs-ps1-ports/dino-crisis-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Dino Crisis is a 1999 survival horror game developed and published by Capcom for the PlayStation. It is the first installment in the Dino Crisis series and was developed by the same team behind Capcom's Resident Evil series, including director Shinji Mikami. The story follows Regina, a special operations agent sent with a team to investigate a secluded island research facility. Finding it overrun with dinosaurs, Regina must fight through the facility to discover its secrets and escape alive with her team.",
  summaryEs: "Dino Crisis es un videojuego de terror y supervivencia de acción y aventuras desarrollado y publicado por Capcom originalmente para la PlayStation. Se trata de la primera entrega de la serie Dino Crisis y fue desarrollada por el mismo equipo que creó la serie Resident Evil de Capcom, incluido el director Shinji Mikami, y comparte muchas similitudes con ella. La historia sigue a Regina, una agente de operaciones especiales enviada con un equipo para investigar una instalación de investigación en una isla aislada.",
  notes:
    "Recompilation of Dino Crisis (PS1, USA SLUS-00922) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Dino Crisis (PS1, USA SLUS-00922) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Dino%20Crisis%20(Europe).png",
    alt: "Dino Crisis (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Dino%20Crisis%20(Europe).png",
      alt: "Dino Crisis (screenshot)",
      credit: "Libretro",
    },
  ],
};
