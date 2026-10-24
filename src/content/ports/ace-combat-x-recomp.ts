import type { Port } from "@/lib/ports/schema";

export const aceCombatXRecomp: Port = {
  schema: "port",
  id: "ace-combat-x-recomp",
  title: "Ace Combat X Recompiled",
  game: "Ace Combat X: Skies of Deception",
  developers: ["PortsDR"],
  publisher: "Namco",
  originalYear: 2006,
  portType: "recompilation",
  genre: "shooter",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/sal063/Ace-Combat-X-Recompilation"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation Portable"],
  summary: "Ace Combat X: Skies of Deception is a 2006 combat flight simulation video game for the PlayStation Portable. It is the first installment of the Ace Combat franchise for the PlayStation Portable, and the second for a handheld game system.",
  summaryEs: "Ace Combat X: Skies of Deception es un videojuego de disparos publicado por Namco en 2006.",
  notes:
    "Listed on the PortsDR community index with no public repository. You need the original game.",
  notesEs:
    "Listado en el índice comunitario PortsDR, sin repositorio público. Necesitas el juego original.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation%20Portable/Named_Boxarts/Ace%20Combat%20X%20-%20Skies%20of%20Deception%20(Europe)%20(En,Ja,Fr,De,Es,It,Ko).png",
    alt: "Ace Combat X: Skies of Deception (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation%20Portable/Named_Snaps/Ace%20Combat%20X%20-%20Skies%20of%20Deception%20(Europe)%20(En,Ja,Fr,De,Es,It,Ko).png",
      alt: "Ace Combat X: Skies of Deception (screenshot)",
      credit: "Libretro",
    },
  ],
};
