import type { Port } from "@/lib/ports/schema";

export const blueDroid: Port = {
  schema: "port",
  id: "blue-droid",
  title: "Blue Dragon (BlueDroid)",
  game: "Blue Dragon",
  developers: ["RedZeroGotcha"],
  publisher: "Microsoft Game Studios",
  originalYear: 2006,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/RedZeroGotcha/BlueDroid"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Android recompilation of Blue Dragon (Xbox 360), separate from the desktop reblue project. It is an early build that needs your own game files.",
  notesEs:
    "Recompilación para Android de Blue Dragon (Xbox 360), distinta del proyecto reblue de escritorio. Es una build temprana que necesita tus propios archivos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/f/f7/Blue_Dragon_Box_Art.jpeg",
    alt: "Blue Dragon (box art)",
    credit: "Wikipedia",
  },
};
