import type { Port } from "@/lib/ports/schema";

export const perfectDarkZeroRecomp: Port = {
  schema: "port",
  id: "perfect-dark-zero-recomp",
  title: "Perfect Dark Zero Recompiled",
  game: "Perfect Dark Zero",
  developers: ["nikolaygorb"],
  publisher: "Microsoft Game Studios",
  originalYear: 2005,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/nikolaygorb/PerfectDarkZeroRecomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  notes:
    "Static recompilation of Perfect Dark Zero (Xbox 360) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Perfect Dark Zero (Xbox 360) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/b/b7/Perfect_Dark_Zero_Coverart.png",
    alt: "Perfect Dark Zero (cover)",
    credit: "Wikipedia",
  },
};
