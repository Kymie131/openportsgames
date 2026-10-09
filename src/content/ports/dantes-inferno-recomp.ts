import type { Port } from "@/lib/ports/schema";

export const dantesInfernoRecomp: Port = {
  schema: "port",
  id: "dantes-inferno-recomp",
  title: "Dante's Inferno Recompiled",
  game: "Dante's Inferno",
  developers: ["florinp93"],
  publisher: "Electronic Arts",
  originalYear: 2010,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/florinp93/hells-gate-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Static recompilation of Dante's Inferno (Xbox 360) with the ReXGlue SDK, building native Windows and Linux executables. It needs a copy of the original game, since no assets are included.",
  notesEs:
    "Recompilación estática de Dante's Inferno (Xbox 360) con el SDK ReXGlue, que genera ejecutables nativos para Windows y Linux. Necesita una copia del juego original, ya que no incluye ningún recurso.",
};
