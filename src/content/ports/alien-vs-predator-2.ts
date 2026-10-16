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
  notes: "Reconstruction of Aliens versus Predator 2. It requires game files from a copy you own.",
  notesEs:
    "Reconstrucción de Aliens versus Predator 2. Requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a7/Aliens_vs._Predator_2_Box_Cover.jpg",
    alt: "Aliens versus Predator 2 (cover)",
    credit: "Wikipedia",
  },
};
