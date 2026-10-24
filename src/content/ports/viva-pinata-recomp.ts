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

  originalSystems: ["Xbox 360"],
  summary: "Viva Piñata is a 2006 life simulation game developed by Rare and published by Microsoft Game Studios for the Xbox 360. The game revolves around the player tending to a neglected garden on Piñata Island, in which different variations of piñatas based on animals must be bred whilst fending off disruptive interlopers. The project was headed by Gregg Mayles and the team behind the Banjo-Kazooie series, based on an idea from Rare co-founder Tim Stamper. Microsoft wanted the game to become a key franchise for the platform, and developed a tie-in television series to accompany the series.",
  summaryEs: "Viva Piñata es un videojuego de simulación para Xbox 360, PC y Nintendo DS desarrollado por Rare y distribuido por Microsoft Game Studios, en la cual tiene como objetivo cuidar un jardín de animales piñata.",
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
