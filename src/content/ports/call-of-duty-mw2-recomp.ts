import type { Port } from "@/lib/ports/schema";

export const callOfDutyMw2Recomp: Port = {
  schema: "port",
  id: "call-of-duty-mw2-recomp",
  title: "Call of Duty: Modern Warfare 2 Recompiled",
  game: "Call of Duty: Modern Warfare 2",
  developers: ["PaulCombal"],
  publisher: "Activision",
  originalYear: 2009,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/PaulCombal/mw2-recompiled"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Recompilation of Call of Duty: Modern Warfare 2 (Xbox 360) to native Windows and Linux. It requires your own copy of the game.",
  notesEs:
    "Recompilación de Call of Duty: Modern Warfare 2 (Xbox 360) a Windows y Linux nativos. Requiere tu propia copia del juego.",
};
