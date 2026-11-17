import type { Port } from "@/lib/ports/schema";

export const hydraCastleLabyrinthPsp: Port = {
  schema: "port",
  id: "hydra-castle-labyrinth-psp",
  title: "Hydra Castle Labyrinth (PSP)",
  game: "Hydra Castle Labyrinth",
  developers: ["JeffRuLz"],
  publisher: "Buster",
  originalYear: 2010,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["psp"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/JeffRuLz/OpenHCL"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  summary: "Hydra Castle Labyrinth is a 2010 exploration-focused action game developed by Buster. It sends the player into a castle of interconnected rooms, hidden items and bosses in the style of classic 2D action-adventure games.",
  summaryEs: "Hydra Castle Labyrinth es un juego de acción centrado en la exploración de 2010 desarrollado por Buster. Sumerge al jugador en un castillo de salas interconectadas, objetos ocultos y jefes al estilo de los clásicos de acción y aventura en 2D.",  downloads: [
    {
      label: "Psp",
      url: "https://github.com/JeffRuLz/OpenHCL/releases/download/untagged-289a342ec6863598160c/OpenHCL_PSP.zip",
      size: "9.3 MB",
    },
    {
      label: "Psp",
      url: "https://github.com/JeffRuLz/OpenHCL/releases/download/untagged-289a342ec6863598160c/OpenHCL_Wii.zip",
      size: "9.0 MB",
    },
    {
      label: "Psp",
      url: "https://github.com/JeffRuLz/OpenHCL/releases/download/untagged-289a342ec6863598160c/OpenHCL_3DS_3DSX.zip",
      size: "8.9 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/hydra-castle-labyrinth.svg",
    alt: "Hydra Castle Labyrinth (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Hydra Castle Labyrinth (Buster, 2010) running on PlayStation Portable through source port. Latest release: untagged-289a342ec6863598160c. You need your own copy of the game.",
  notesEs: "Hydra Castle Labyrinth (Buster, 2010) en PlayStation Portable mediante port de código. Última release: untagged-289a342ec6863598160c. Necesitas tu propia copia del juego.",
};
