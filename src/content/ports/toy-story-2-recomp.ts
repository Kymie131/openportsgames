import type { Port } from "@/lib/ports/schema";

export const toyStory2Recomp: Port = {
  schema: "port",
  id: "toy-story-2-recomp",
  title: "Toy Story 2 Recompiled",
  game: "Toy Story 2: Buzz Lightyear to the Rescue",
  developers: ["PeriBluGaming"],
  publisher: "Activision",
  originalYear: 1999,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/PeriBluGaming/ToyStory2Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Static recompilation of Toy Story 2: Buzz Lightyear to the Rescue (PlayStation) using PSXRecomp. It needs your own game files.",
  notesEs:
    "Recompilación estática de Toy Story 2: Buzz Lightyear to the Rescue (PlayStation) con PSXRecomp. Necesita tus propios archivos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/2/21/Buzz_Lightyear_to_the_Rescue_art.png",
    alt: "Toy Story 2: Buzz Lightyear to the Rescue (box art)",
    credit: "Wikipedia",
  },
};
