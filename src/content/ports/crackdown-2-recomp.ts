import type { Port } from "@/lib/ports/schema";

export const crackdown2Recomp: Port = {
  schema: "port",
  id: "crackdown-2-recomp",
  title: "Crackdown 2 Recompiled",
  game: "Crackdown 2",
  developers: ["matty45"],
  publisher: "Microsoft Game Studios",
  originalYear: 2010,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/matty45/Crackdown2-Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Recompilation of Crackdown 2 (Xbox 360) to a native Windows executable. As with the project for the first game, you must supply your own copy.",
  notesEs:
    "Recompilación de Crackdown 2 (Xbox 360) a un ejecutable nativo para Windows. Igual que en el proyecto del primer juego, debes aportar tu propia copia.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/3/31/Crackdown2Cover.jpg",
    alt: "Crackdown 2 (box art)",
    credit: "Wikipedia",
  },
};
