import type { Port } from "@/lib/ports/schema";

export const AlienVsPredator2: Port = {
  schema: "port",
  id: "alien-vs-predator-2",
  title: "Alien vs. Predator 2",
  game: "Alien vs. Predator 2",
  developers: ["lemiur"],
  publisher: "Sierra Entertainment",
  originalYear: 2001,
  portType: "reimplementation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/lemiur/AVP2-Reconstructed"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  summary: "Alien vs. Predator is a science fiction action horror media franchise created by comic book writers Randy Stradley and Chris Warner. The series is a crossover between, and part of, the larger Alien and Predator franchises, depicting the two species — Xenomorph (Alien) and Yautja (Predator) — as being in conflict with one another.",
  summaryEs: "Alien vs. Predator es una película de ciencia ficción dirigida por Paul W. S. Anderson, producida por 20th Century Fox y estrenada en 2004. La película es heredera de la influencia de las series cinematográficas iniciadas con las películas Alien (1979) y Predator (1987), a partir de un concepto originado en un cómic de Dark Horse de 1989 y pasando por un videojuego de 1994. Anderson, Dan O'Bannon y Ronald Shusett escribieron la historia mientras que Anderson y Shane Salerno adaptaron el guion. Estuvieron influidos por la mitología azteca, la serie de cómics y los escritos de Erich von Däniken.",
  notes: "Reconstruction of Aliens versus Predator 2. It requires game files from a copy you own.",
  notesEs:
    "Reconstrucción de Aliens versus Predator 2. Requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a7/Aliens_vs._Predator_2_Box_Cover.jpg",
    alt: "Aliens versus Predator 2 (cover)",
    credit: "Wikipedia",
  },
};
