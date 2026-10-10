import type { Port } from "@/lib/ports/schema";

export const darkCloud2Recomp: Port = {
  schema: "port",
  id: "dark-cloud-2-recomp",
  title: "Dark Cloud 2 Recompiled",
  game: "Dark Cloud 2",
  developers: ["PortsDR"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2002,
  portType: "recompilation",
  genre: "rpg",
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
    "Recompilation of Dark Cloud 2 (PlayStation 2) listed by the PortsDR community index. No public repository or release is linked, and it needs your own copy of the game.",
  notesEs:
    "Recompilación de Dark Cloud 2 (PlayStation 2) listada en el índice comunitario PortsDR. No hay repositorio ni release públicos enlazados, y necesita tu propia copia del juego.",
};
