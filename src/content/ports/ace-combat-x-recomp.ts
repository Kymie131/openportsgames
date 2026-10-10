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
    "Recompilation of Ace Combat X: Skies of Deception (PlayStation Portable) listed by the PortsDR community index. No public repository or release is linked, and it needs your own copy of the game.",
  notesEs:
    "Recompilación de Ace Combat X: Skies of Deception (PlayStation Portable) listada en el índice comunitario PortsDR. No hay repositorio ni release públicos enlazados, y necesita tu propia copia del juego.",
};
