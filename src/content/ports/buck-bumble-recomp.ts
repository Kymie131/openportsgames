import type { Port } from "@/lib/ports/schema";

export const buckBumbleRecomp: Port = {
  schema: "port",
  id: "buck-bumble-recomp",
  title: "Buck Bumble Recompiled",
  game: "Buck Bumble",
  developers: ["PortsDR"],
  publisher: "Ubisoft",
  originalYear: 1998,
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
  originalSystem: "Nintendo 64",
  notes:
    "Recompilation of Buck Bumble (Nintendo 64) listed by the PortsDR community index. No public repository or release is linked, and it needs your own copy of the game.",
  notesEs:
    "Recompilación de Buck Bumble (Nintendo 64) listada en el índice comunitario PortsDR. No hay repositorio ni release públicos enlazados, y necesita tu propia copia del juego.",
};
