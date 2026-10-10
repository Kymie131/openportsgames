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
  sources: ["https://portsdr.com/"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  originalSystem: "PlayStation Portable",
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
