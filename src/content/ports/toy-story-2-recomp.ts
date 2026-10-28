import type { Port } from "@/lib/ports/schema";

export const toyStory2Recomp: Port = {
  schema: "port",
  id: "toy-story-2-recomp",
  title: "Toy Story 2 Recomp (PS1)",
  game: "Toy Story 2: Buzz Lightyear to the Rescue!",
  developers: ["PeriBluGaming"],
  publisher: "Activision",
  originalYear: 1999,
  genre: "platformer",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/PeriBluGaming/ToyStory2Recomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  features: [
    "Native recompilation for modern platforms",
    "Cross-platform support",
  ],
  notes:
    "Recompilation of Toy Story 2: Buzz Lightyear to the Rescue! for PlayStation. Requires original game assets.",
  notesEs:
    "Recompilación nativa de Toy Story 2: Buzz Lightyear to the Rescue! para PlayStation. Requiere los archivos originales del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/82/Toy_Story_2_Buzz_Lightyear_to_the_Rescue_Coverart.png",
    alt: "Toy Story 2: Buzz Lightyear to the Rescue!",
    credit: "Wikipedia",
  },
};
