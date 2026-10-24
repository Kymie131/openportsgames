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
  sourceDead: true,
  warning: "The original repository was taken down and the link no longer resolves.",
  warningEs: "El repositorio original fue retirado y el enlace ya no responde.",
  originalSystems: ["Xbox 360"],
  summary: "Dante's Inferno is a 2010 action-adventure game developed by Visceral Games and published by Electronic Arts. The game was released for PlayStation 3, Xbox 360 and PlayStation Portable in February 2010. The PlayStation Portable version was developed by Artificial Mind and Movement.",
  summaryEs: "Dante's Inferno es un videojuego de acción perteneciente al género secundario hack and slash desarrollado por Visceral Games y publicado por Electronic Arts para PlayStation 3, Xbox 360 y PlayStation Portable. Está basado en la primera parte de la Divina Comedia del poeta Dante Alighieri.",
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
