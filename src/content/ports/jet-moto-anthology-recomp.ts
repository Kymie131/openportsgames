import type { Port } from "@/lib/ports/schema";

export const jetMotoAnthologyRecomp: Port = {
  schema: "port",
  id: "jet-moto-anthology-recomp",
  title: "Jet Moto Anthology Recompiled",
  game: "Jet Moto",
  developers: ["GTTeancum"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1996,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/GTTeancum/Jet-Moto-Anthology"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Cumulative recompilation project for the Jet Moto games (PlayStation) with rendering improvements. It needs your own copy of the games.",
  notesEs:
    "Proyecto de recompilación acumulativo de los juegos Jet Moto (PlayStation) con mejoras de renderizado. Necesita tu propia copia de los juegos.",
};
