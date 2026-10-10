import type { Port } from "@/lib/ports/schema";

export const slyCooperRecomp: Port = {
  schema: "port",
  id: "sly-cooper-recomp",
  title: "Sly Cooper Recompiled",
  game: "Sly Cooper and the Thievius Raccoonus",
  developers: ["PortsDR"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2002,
  portType: "recompilation",
  genre: "platformer",
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
    "Recompilation of Sly Cooper and the Thievius Raccoonus (PlayStation 2) listed by the PortsDR community index. No public repository or release is linked, and it needs your own copy of the game.",
  notesEs:
    "Recompilación de Sly Cooper and the Thievius Raccoonus (PlayStation 2) listada en el índice comunitario PortsDR. No hay repositorio ni release públicos enlazados, y necesita tu propia copia del juego.",
};
