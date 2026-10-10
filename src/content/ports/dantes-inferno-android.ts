import type { Port } from "@/lib/ports/schema";

export const dantesInfernoAndroid: Port = {
  schema: "port",
  id: "dantes-inferno-android",
  title: "Dante's Inferno Android",
  game: "Dante's Inferno",
  developers: ["WINDROID-EMU"],
  publisher: "Electronic Arts",
  originalYear: 2010,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/WINDROID-EMU/Dantes-inferno-Android"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Community Android build of Dante's Inferno, separate from the desktop recompilation. It is an experimental project and some of its cases are untested.",
  notesEs:
    "Build comunitaria para Android de Dante's Inferno, distinta de la recompilación de escritorio. Es un proyecto experimental y algunos de sus casos no están probados.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/c/c6/Dante%27s_Inferno.jpg",
    alt: "Dante's Inferno (box art)",
    credit: "Wikipedia",
  },
};
