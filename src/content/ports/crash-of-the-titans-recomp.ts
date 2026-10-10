import type { Port } from "@/lib/ports/schema";

export const crashOfTheTitansRecomp: Port = {
  schema: "port",
  id: "crash-of-the-titans-recomp",
  title: "Crash of the Titans Recompiled",
  game: "Crash of the Titans",
  developers: ["OAleex"],
  publisher: "Sierra Entertainment",
  originalYear: 2007,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/OAleex/MojoRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Recompilation of Crash of the Titans (Xbox 360) for Windows, still in an early state. It requires your own copy of the game.",
  notesEs:
    "Recompilación de Crash of the Titans (Xbox 360) para Windows, todavía en un estado temprano. Requiere tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/9/98/Crash_of_the_Titans_cover.jpg",
    alt: "Crash of the Titans (box art)",
    credit: "Wikipedia",
  },
};
