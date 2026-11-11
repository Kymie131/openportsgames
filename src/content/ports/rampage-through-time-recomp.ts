import type { Port } from "@/lib/ports/schema";

export const rampageThroughTimeRecomp: Port = {
  schema: "port",
  id: "rampage-through-time-recomp",
  title: "Rampage: Through Time Recompiled",
  game: "Rampage: Through Time",
  developers: ["PortsDR"],
  publisher: "Midway Games",
  originalYear: 2000,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "0.1.23", date: "2026-10-01" },
  sources: ["https://github.com/TechnicallyComputers/Rampage---Through-Time-Recomp"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  summary: "Rampage Through Time is a 2000 action game developed by Avalanche Software and published by Midway Games for the PlayStation. It is the fourth game in the Rampage series, and a sequel to 1999's Rampage 2: Universal Tour. In the game, seven previous Scumlabs monsters and one new one use a time machine to rampage through time.",
  summaryEs: "Rampage Through Time es un juego de acción de 2000 desarrollado por Avalanche Software y publicado por Midway Games. Es el cuarto juego de la serie Rampage y una secuela de Rampage 2: Universal Tour de 1999. En el juego, siete monstruos de Scumlabs anteriores y uno nuevo usan una máquina del tiempo para arrasar en el tiempo.",
  notes:
    "Listed on the PortsDR community index with no public repository. You need the original game.",
  notesEs:
    "Listado en el índice comunitario PortsDR, sin repositorio público. Necesitas el juego original.",
  downloads: [
    {
      label: "Linux",
      url: "https://github.com/TechnicallyComputers/Rampage---Through-Time-Recomp/releases/download/v0.1.23/rtt-0.1.23-linux-x64.zip",
      size: "79.4 MB",
    },
    {
      label: "Macos",
      url: "https://github.com/TechnicallyComputers/Rampage---Through-Time-Recomp/releases/download/v0.1.23/rtt-0.1.23-macos-arm64.zip",
      size: "42.5 MB",
    },
    {
      label: "Macos",
      url: "https://github.com/TechnicallyComputers/Rampage---Through-Time-Recomp/releases/download/v0.1.23/rtt-0.1.23-macos-x64.zip",
      size: "43.9 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/TechnicallyComputers/Rampage---Through-Time-Recomp/releases/download/v0.1.23/rtt-0.1.23-windows-x64.zip",
      size: "58.0 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Rampage%20-%20Through%20Time%20(Europe)%20(En,Fr,De).png",
    alt: "Rampage: Through Time (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Rampage%20-%20Through%20Time%20(Europe)%20(En,Fr,De).png",
      alt: "Rampage: Through Time (screenshot)",
      credit: "Libretro",
    },
  ],
};
