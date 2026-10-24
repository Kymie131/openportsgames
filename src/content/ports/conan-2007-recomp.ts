import type { Port } from "@/lib/ports/schema";

export const conan2007Recomp: Port = {
  schema: "port",
  id: "conan-2007-recomp",
  title: "Conan (2007) Recompiled",
  game: "Conan",
  developers: ["crazyriddler"],
  publisher: "THQ",
  originalYear: 2007,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/crazyriddler/Conan2007Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  summary: "Conan Exiles is a survival video game developed and published by Funcom for PlayStation 4, Windows, and Xbox One. The game is set in the world of Conan the Barbarian, with the custom playable character being rescued by Conan, beginning their journey. Early access versions of the game were released in early 2017, leaving early access on 8 May 2018. An enhanced version of the game for Xbox Series X and Series S was released on 8 June 2021. Conan Exiles Enhanced was released on May 5, 2026, updating the game to Unreal Engine 5.",
  summaryEs: "Conan el Bárbaro es una serie literaria de relatos y novelas creada en 1932 por el escritor Robert E. Howard publicados en la revista pulp Weird Tales. Conan, su protagonista, es un personaje arquetípico, el más famoso representante del género de la espada y brujería, y un clásico de la fantasía estadounidense del siglo XX.",
  notes:
    "Native DirectX 12 rendering. Controller only. Up to 120 FPS, because physics break above that.",
  notesEs:
    "Render nativo en DirectX 12. Solo mando. Hasta 120 FPS, porque por encima se rompe la física.",
  aiDisclosure: {
    source: "https://github.com/crazyriddler/Conan2007Recomp#readme",
    quote: "I've relied on Claude to carry out this project",
  },
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/d7/Conan_%282004_video_game%29.jpg",
    alt: "Conan (box art)",
    credit: "Wikipedia",
  },
};
