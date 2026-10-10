import type { Port } from "@/lib/ports/schema";

export const slyCooperRecomp: Port = {
  schema: "port",
  id: "sly-cooper-recomp",
  title: "Sly Cooper Recompiled",
  game: "Sly Cooper and the Thievius Raccoonus",
  developers: ["PortsDR"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2002,
  portType: "recompilation",
  genre: "platformer",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://portsdr.com/"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  originalSystem: "PlayStation 2",
  notes: "PortsDR lists this recompilation without a public repository. Own the game to play it.",
  notesEs:
    "PortsDR lista esta recompilación sin repositorio público. Necesitas el juego para jugarla.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/8e/SlyCooper2002cover.jpg",
    alt: "Sly Cooper and the Thievius Raccoonus (box art)",
    credit: "Wikipedia",
  },
};
