import type { Port } from "@/lib/ports/schema";

export const dxhrDecomp: Port = {
  schema: "port",
  id: "dxhr-decomp",
  title: "Deus Ex: Human Revolution Decompilation",
  game: "Deus Ex: Human Revolution",
  developers: ["rrika"],
  publisher: "Square Enix",
  originalYear: 2011,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/rrika/cdcEngineDXHR"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  notes:
    "Decompilation of the CDC engine used by Deus Ex: Human Revolution. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación del motor CDC usado por Deus Ex: Human Revolution. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/0/06/Deus_Ex_Human_Revolution_cover.jpg",
    alt: "Deus Ex: Human Revolution (cover)",
    credit: "Wikipedia",
  },
};
