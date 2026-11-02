import type { Port } from "@/lib/ports/schema";

export const jfsw: Port = {
  schema: "port",
  id: "jfsw",
  title: "JonoF Shadow Warrior",
  game: "Shadow Warrior",
  developers: ["jonof"],
  publisher: "3D Realms",
  originalYear: 1997,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/jonof/jfsw"],
  license: { spdx: "NOASSERTION", note: "custom license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["MS-DOS"],
  summary:
    "Shadow Warrior is a first-person shooter developed by 3D Realms and published in 1997. It follows ninja Lo Wang through a comic-book campaign against the Zilla Corporation and its demon army.",
  summaryEs:
    "Shadow Warrior es un shooter en primera persona desarrollado por 3D Realms y publicado en 1997. Sigue al ninja Lo Wang en una campaña de cómic contra la corporación Zilla y su ejército de demonios.",
  cover: {
    src: "https://openportsgames.com/covers/generated/jfsw.svg",
    alt: "JonoF Shadow Warrior (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "JonoF Shadow Warrior (JFSW) is a port of the Shadow Warrior source code to SDL2 with modern platform support. It requires the original game data.",
  notesEs:
    "JonoF Shadow Warrior (JFSW) es un port del código fuente de Shadow Warrior a SDL2 con soporte para plataformas modernas. Requiere los datos originales del juego.",
};
