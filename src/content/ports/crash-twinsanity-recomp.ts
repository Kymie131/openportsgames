import type { Port } from "@/lib/ports/schema";

export const crashTwinsanityRecomp: Port = {
  schema: "port",
  id: "crash-twinsanity-recomp",
  title: "Crash Twinsanity Recompiled",
  game: "Crash Twinsanity",
  developers: ["menaman123"],
  publisher: "Vivendi Universal Games",
  originalYear: 2004,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/menaman123/Ps2Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 2"],
  notes:
    "Static recompilation of Crash Twinsanity (PlayStation 2) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Crash Twinsanity (PlayStation 2) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/e/e3/Crash_Twinsanity_North_American_PS2_cover.jpg",
    alt: "Crash Twinsanity (cover)",
    credit: "Wikipedia",
  },
};
