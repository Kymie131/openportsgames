import type { Port } from "@/lib/ports/schema";

export const RotpFusion: Port = {
  schema: "port",
  id: "rotp-fusion",
  title: "Rotp-Fusion",  game: "Master of Orion",
  developers: ["BrokenRegistry"],  publisher: "MicroProse",  originalYear: 1993,
  portType: "source-port",  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/BrokenRegistry/Rotp-Fusion"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,  originalSystems: ["MS-DOS"],  summary: "Master of Orion is a 1993 turn-based strategy game developed by Simtex and published by MicroProse. Players lead one of ten races in a race to conquer the galaxy through research, diplomacy, espionage and fleet combat.",  summaryEs: "Master of Orion es un juego de estrategia por turnos de 1993 desarrollado por Simtex y publicado por MicroProse. El jugador lidera una de diez razas en una carrera por conquistar la galaxia mediante investigación, diplomacia, espionaje y combate de flotas.",  downloads: [
    {
      label: "Windows",
      url: "https://github.com/BrokenRegistry/Rotp-Fusion/releases/download/2026/11/09/1854/rotp-Fusion-2026-11-09-windows.zip",
      size: "352.8 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/rotp-fusion.svg",
    alt: "Rotp-Fusion (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Created by Ray Fowler, Remnants of the Precursors is an open-source modernization of the original 1993 Master of Orion.",
  notesEs:
    "Remnants of the Precursors es una modernización de código abierto del Master of Orion original de 1993, creada por Ray Fowler.",
};
