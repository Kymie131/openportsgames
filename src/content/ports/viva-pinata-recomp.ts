import type { Port } from "@/lib/ports/schema";

export const vivaPinataRecomp: Port = {
  schema: "port",
  id: "viva-pinata-recomp",
  title: "Viva Piñata Recompiled",
  game: "Viva Piñata",
  developers: ["crabinacrabic"],
  publisher: "Microsoft Game Studios",
  originalYear: 2006,
  portType: "recompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/crabinacrabic/VivaPinataRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Recompilation of the original Viva Piñata (Xbox 360) for Windows. It needs your own game data.",
  notesEs:
    "Recompilación del Viva Piñata original (Xbox 360) para Windows. Necesita tus propios datos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/1/1e/Viva_Pi%C3%B1ata_cover.jpg",
    alt: "Viva Piñata (box art)",
    credit: "Wikipedia",
  },
};
