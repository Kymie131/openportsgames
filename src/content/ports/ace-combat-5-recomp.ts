import type { Port } from "@/lib/ports/schema";

export const aceCombat5Recomp: Port = {
  schema: "port",
  id: "ace-combat-5-recomp",
  title: "Ace Combat 5 Recompiled",
  game: "Ace Combat 5: The Unsung War",
  developers: ["PortsDR"],
  publisher: "Namco",
  originalYear: 2004,
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
  originalSystem: "PlayStation 2",
  notes:
    "Recompilation of Ace Combat 5: The Unsung War (PlayStation 2) listed by the PortsDR community index. No public repository or release is linked, and it needs your own copy of the game.",
  notesEs:
    "Recompilación de Ace Combat 5: The Unsung War (PlayStation 2) listada en el índice comunitario PortsDR. No hay repositorio ni release públicos enlazados, y necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Ace_Combat_5_The_Unsung_War_Game_Cover.png",
    alt: "Ace Combat 5: The Unsung War (box art)",
    credit: "Wikipedia",
  },
};
