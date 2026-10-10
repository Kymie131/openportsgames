import type { Port } from "@/lib/ports/schema";

export const zeroRacersRecomp: Port = {
  schema: "port",
  id: "zero-racers-recomp",
  title: "Zero Racers Recompiled",
  game: "Zero Racers",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 1996,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/ZeroRacersVirtualBoyRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Virtual Boy",
  notes:
    "Native recompilation of the unreleased Virtual Boy game Zero Racers, built with recomp-ui and a cosimulation harness. It needs your own ROM and ships no game data.",
  notesEs:
    "Recompilación nativa del juego no publicado de Virtual Boy Zero Racers, construida con recomp-ui y un sistema de cosimulación. Necesita tu propia ROM y no incluye datos del juego.",
};
