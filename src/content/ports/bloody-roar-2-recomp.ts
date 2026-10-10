import type { Port } from "@/lib/ports/schema";

export const bloodyRoar2Recomp: Port = {
  schema: "port",
  id: "bloody-roar-2-recomp",
  title: "Bloody Roar 2 Recompiled",
  game: "Bloody Roar 2",
  developers: ["PortsDR"],
  publisher: "Hudson Soft",
  originalYear: 1999,
  portType: "recompilation",
  genre: "fighting",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://portsdr.com/"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Bloody Roar 2 (PlayStation) listed by the PortsDR community index. No public repository or release is linked, and it needs your own copy of the game.",
  notesEs:
    "Recompilación de Bloody Roar 2 (PlayStation) listada en el índice comunitario PortsDR. No hay repositorio ni release públicos enlazados, y necesita tu propia copia del juego.",
};
