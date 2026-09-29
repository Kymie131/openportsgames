import type { Port } from "@/lib/ports/schema";

export const paperMarioReCut: Port = {
  schema: "port",
  id: "paper-mario-recut",
  title: "Paper Mario ReCut",
  game: "Paper Mario",
  developers: ["Intelligent Systems"],
  publisher: "Nintendo",
  originalYear: 2000,
  genre: "rpg",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/SMCGames/Paper-Mario-ReCut"],
  license: { spdx: "MIT" },
  aiDisclosure: false,
  verified: false,
  originalSystem: "Nintendo 64",
  features: [
    "Controller and keyboard configuration windows",
    "Bundled PaperAtlasTool for graphics settings",
    "SDL2 windowing, input, controller and audio support",
  ],
  notes:
    "Native Windows recompilation of Paper Mario; the player supplies their own legally dumped ROM. The project describes the build as an early working one and warns that save states currently break the game.",
};
