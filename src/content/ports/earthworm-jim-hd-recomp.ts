import type { Port } from "@/lib/ports/schema";

export const earthwormJimHdRecomp: Port = {
  schema: "port",
  id: "earthworm-jim-hd-recomp",
  title: "Earthworm Jim HD Recompiled",
  game: "Earthworm Jim HD",
  developers: ["TekRantGaming"],
  publisher: "Interplay Entertainment",
  originalYear: 2010,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/TekRantGaming/earthworm-jim-hd-recompiled"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  notes:
    "Static recompilation of Earthworm Jim HD for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Earthworm Jim HD para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/6f/Earthworm_Jim_Neutral_Cover.jpg",
    alt: "Earthworm Jim (cover)",
    credit: "Wikipedia",
  },
};
