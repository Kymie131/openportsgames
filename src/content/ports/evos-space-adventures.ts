import type { Port } from "@/lib/ports/schema";

export const EvosSpaceAdventures: Port = {
  schema: "port",
  id: "evos-space-adventures",
  title: "Evo's Space Adventures",
  game: "Evo's Space Adventures",
  developers: ["mkst"],
  publisher: "Take-Two Interactive",
  originalYear: 2000,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/mkst/esa"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  summary: "Evo's Space Adventures is the 2000 PlayStation version of Space Station Silicon Valley, developed by Runecraft and published by Take-Two Interactive. Players control the robot Evo by taking over robotic animals to solve puzzles and repair his body.",
  summaryEs: "Evo's Space Adventures es la versión para PlayStation de 2000 de Space Station Silicon Valley, desarrollada por Runecraft y publicada por Take-Two Interactive. El jugador controla al robot Evo tomando el cuerpo de animales robóticos para resolver puzles y reparar su cuerpo.",  downloads: [
    {
      label: "Windows",
      url: "https://github.com/mkst/esa/releases/download/psyq-binaries/psyq3.3.tar.gz",
      size: "993 KB",
    },
    {
      label: "Windows",
      url: "https://github.com/mkst/esa/releases/download/psyq-binaries/psyq-obj-parser.tar.gz",
      size: "101 KB",
    },
    {
      label: "Windows",
      url: "https://github.com/mkst/esa/releases/download/psyq-binaries/psyq-compilers.tar.gz",
      size: "9.8 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/mkst/esa/releases/download/psyq-binaries/psyq4.0.tar.gz",
      size: "2.3 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/mkst/esa/releases/download/psyq-binaries/psyq3.6.tar.gz",
      size: "2.2 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/mkst/esa/releases/download/psyq-binaries/psyq3.5.tar.gz",
      size: "1.0 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/evo-s-space-adventures.svg",
    alt: "Evo's Space Adventures (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Evo's Space Adventures for PSX. A proof of concept, matching PSX decompilation, leveraging tools from N64 decomp projects.",
  notesEs:
    "Evo's Space Adventures para PSX. Prueba de concepto, decompilación que coincide para PSX.",
};
