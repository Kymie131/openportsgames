import type { Port } from "@/lib/ports/schema";

export const madStalkerRecomp: Port = {
  schema: "port",
  id: "mad-stalker-recomp",
  title: "Mad Stalker: Full Metal Force Recompiled",
  game: "Mad Stalker: Full Metal Force",
  developers: ["omegakatana92"],
  publisher: "Family Soft",
  originalYear: 1994,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/omegakatana92/MadStalkerRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Fan-made recompilation of Mad Stalker: Full Metal Force (PlayStation), still in progress. It requires your own disc and ships no assets.",
  notesEs:
    "Recompilación hecha por fans de Mad Stalker: Full Metal Force (PlayStation), todavía en progreso. Requiere tu propio disco y no incluye recursos.",
};
