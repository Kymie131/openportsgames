import type { Port } from "@/lib/ports/schema";

export const oom1: Port = {
  schema: "port",
  id: "1oom",
  title: "1oom",
  game: "Master of Orion",
  developers: ["1oom-fork"],
  publisher: "MicroProse",
  originalYear: 1993,
  portType: "reimplementation",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "stable",
  release: { version: "1.11.9", date: "2026-08-12" },
  sources: ["https://github.com/1oom-fork/1oom"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["MS-DOS"],
  summary:
    "Master of Orion is a turn-based space strategy game developed by Simtex and published by MicroProse in 1993. The player leads one of ten races toward galactic dominance through exploration, colonization, diplomacy and tactical combat.",
  summaryEs:
    "Master of Orion es un juego de estrategia espacial por turnos desarrollado por Simtex y publicado por MicroProse en 1993. El jugador dirige una de diez razas hacia la dominación galáctica mediante exploración, colonización, diplomacia y combate táctico.",
  cover: {
    src: "https://openportsgames.com/covers/generated/1oom.svg",
    alt: "Master of Orion (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "1oom is a Master of Orion Classic (1993) game engine recreation that requires the original files to run.",
  notesEs:
    "1oom es una recreación del motor de Master of Orion Classic (1993) que necesita los archivos originales para funcionar.",
};
