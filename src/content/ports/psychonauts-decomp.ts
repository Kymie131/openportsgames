import type { Port } from "@/lib/ports/schema";

export const psychonautsDecomp: Port = {
  schema: "port",
  id: "psychonauts-decomp",
  title: "Psychonauts Decompilation",
  game: "Psychonauts",
  developers: ["DrDecki"],
  publisher: "Majesco Entertainment",
  originalYear: 2005,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  wip: true,
  release: { version: null, date: null },
  sources: ["https://github.com/DrDecki/psychonauts-decomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  summary: "Psychonauts is a 2005 platform game developed by Double Fine Productions and published by Majesco for Microsoft Windows, Xbox, and PlayStation 2. The game follows Razputin \"Raz\" Aquato, a young boy gifted with psychic abilities, who runs away from a circus to try to sneak into a summer camp for those with similar powers to become a \"Psychonaut\", a spy with psychic abilities. He finds that there is a sinister plot occurring at the camp that only he can stop.",
  summaryEs: "Psychonauts es un videojuego de plataformas de la compañía Double Fine Productions lanzado en 2005. El juego fue publicado inicialmente por Majesco Entertainment para Microsoft Windows, Xbox y PlayStation 2. A pesar de ser bien recibido, Psychonauts se consideró un fracaso comercial en su momento de lanzamiento, con solo alrededor de 100,000 unidades vendidas. Desde entonces, el juego ha ganado varios premios de la industria y ha ganado seguimiento de culto.",
  notes:
    "Decompilation of Psychonauts. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación de Psychonauts. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/1/12/Psychonautsbox.png",
    alt: "Psychonauts (cover)",
    credit: "Wikipedia",
  },
};
