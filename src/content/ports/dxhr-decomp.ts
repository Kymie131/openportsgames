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
  wip: true,
  release: { version: null, date: null },
  sources: ["https://github.com/rrika/cdcEngineDXHR"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  summary: "Deus Ex: Human Revolution is an action role-playing game developed by Eidos-Montréal and published by Square Enix. The game is a prequel to the original Deus Ex (2000) and the third installment in the Deus Ex series. The gameplay combines first-person shooter, stealth, and role-playing elements. It features exploration and combat in environments connected to multiple city-based hubs, in addition to quests that grant experience and allow customization of the main character's abilities with items called Praxis Kits.",
  summaryEs: "Deus Ex: Human Revolution es el tercer videojuego de la serie de videojuegos de rol y acción en primera persona Deus Ex. Es la precuela de Deus Ex. Ha sido desarrollado por la empresa Eidos Montréal.",
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
