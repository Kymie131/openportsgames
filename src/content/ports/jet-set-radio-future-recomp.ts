import type { Port } from "@/lib/ports/schema";

export const jetSetRadioFutureRecomp: Port = {
  schema: "port",
  id: "jet-set-radio-future-recomp",
  title: "Jet Set Radio Future Recompiled",
  game: "Jet Set Radio Future",
  developers: ["andeecollard"],
  publisher: "Sega",
  originalYear: 2002,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/andeecollard/jsrf-recomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox"],
  notes:
    "Static recompilation of Jet Set Radio Future (Xbox) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Jet Set Radio Future (Xbox) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/7a/JetSetRadioFuturebox.jpg",
    alt: "Jet Set Radio Future (cover)",
    credit: "Wikipedia",
  },
};
