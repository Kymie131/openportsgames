import type { Port } from "@/lib/ports/schema";

export const streetFighterExPlusAlphaRecomp: Port = {
  schema: "port",
  id: "street-fighter-ex-plus-alpha-recomp",
  title: "Street Fighter EX Plus Alpha Recompiled",
  game: "Street Fighter EX Plus Alpha",
  developers: ["PortsDR"],
  publisher: "Capcom",
  originalYear: 1997,
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
    "Recompilation of Street Fighter EX Plus Alpha (PlayStation) listed by the PortsDR community index. No public repository or release is linked, and it needs your own copy of the game.",
  notesEs:
    "Recompilación de Street Fighter EX Plus Alpha (PlayStation) listada en el índice comunitario PortsDR. No hay repositorio ni release públicos enlazados, y necesita tu propia copia del juego.",
};
