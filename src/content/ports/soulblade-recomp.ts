import type { Port } from "@/lib/ports/schema";

export const soulbladeRecomp: Port = {
  schema: "port",
  id: "soulblade-recomp",
  title: "SoulBlade Recompiled",
  game: "SoulBlade",
  developers: ["PortsDR"],
  publisher: "Namco",
  originalYear: 1996,
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
    "Recompilation of SoulBlade (PlayStation) listed by the PortsDR community index. No public repository or release is linked, and it needs your own copy of the game.",
  notesEs:
    "Recompilación de SoulBlade (PlayStation) listada en el índice comunitario PortsDR. No hay repositorio ni release públicos enlazados, y necesita tu propia copia del juego.",
};
