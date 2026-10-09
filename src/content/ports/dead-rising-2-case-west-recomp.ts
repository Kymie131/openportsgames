import type { Port } from "@/lib/ports/schema";

export const deadRising2CaseWestRecomp: Port = {
  schema: "port",
  id: "dead-rising-2-case-west-recomp",
  title: "Dead Rising 2: Case West Recompiled",
  game: "Dead Rising 2: Case West",
  developers: ["wivi514"],
  publisher: "Capcom",
  originalYear: 2010,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/wivi514/Dead_Rising_2_Case_West_Xenon_Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Static recompilation of Dead Rising 2: Case West (Xbox 360) with ReXGlue. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Dead Rising 2: Case West (Xbox 360) con ReXGlue. Requiere tu propia copia del juego.",
};
