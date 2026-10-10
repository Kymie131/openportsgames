import type { Port } from "@/lib/ports/schema";

export const starWarsJediPowerBattlesRecomp: Port = {
  schema: "port",
  id: "star-wars-jedi-power-battles-recomp",
  title: "Jedi Power Battles Recompiled",
  game: "Star Wars Episode I: Jedi Power Battles",
  developers: ["PortsDR"],
  publisher: "LucasArts",
  originalYear: 2000,
  portType: "recompilation",
  genre: "action-adventure",
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
    "Recompilation of Star Wars Episode I: Jedi Power Battles (PlayStation) listed by the PortsDR community index. No public repository or release is linked, and it needs your own copy of the game.",
  notesEs:
    "Recompilación de Star Wars Episode I: Jedi Power Battles (PlayStation) listada en el índice comunitario PortsDR. No hay repositorio ni release públicos enlazados, y necesita tu propia copia del juego.",
};
