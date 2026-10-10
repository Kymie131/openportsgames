import type { Port } from "@/lib/ports/schema";

export const tetrisGbRecomp: Port = {
  schema: "port",
  id: "tetris-gb-recomp",
  title: "Tetris (Game Boy) Recompiled",
  game: "Tetris",
  developers: ["PortsDR"],
  publisher: "Nintendo",
  originalYear: 1989,
  portType: "recompilation",
  genre: "puzzle",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://portsdr.com/"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  originalSystem: "Game Boy",
  notes:
    "Recompilation of Tetris (Game Boy) listed by the PortsDR community index. No public repository or release is linked, and it needs your own copy of the game.",
  notesEs:
    "Recompilación de Tetris (Game Boy) listada en el índice comunitario PortsDR. No hay repositorio ni release públicos enlazados, y necesita tu propia copia del juego.",
};
