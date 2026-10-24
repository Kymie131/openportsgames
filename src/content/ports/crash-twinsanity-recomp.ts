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
  sources: ["https://github.com/menaman123/NativeEE"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 2"],
  summary: "Crash Twinsanity is a 2004 platform game developed by Traveller's Tales Oxford Studio and published by Vivendi Universal Games for the PlayStation 2 and Xbox. It is the eleventh installment in the Crash Bandicoot series and the fifth game in the main series. The game's story takes place three years after the events of Crash Bandicoot: The Wrath of Cortex and follows the main protagonist and antagonist of the series, Crash Bandicoot and Doctor Neo Cortex, who must work together to stop the Evil Twins — a pair of interdimensional parrots — from destroying N. Sanity Island.",
  summaryEs: "Crash Twinsanity es un videojuego de plataformas desarrollado por Traveller's Tales y publicado por Vivendi Universal Games para PlayStation 2 y Xbox. Es la undécima entrega de la serie Crash Bandicoot y el quinto de la principal. La historia tiene lugar tres años después de los acontecimientos de Crash Bandicoot: la venganza de Cortex y sigue al protagonista y antagonista, Crash Bandicoot y Doctor Neo Cortex, quienes deben trabajar juntos para impedir que los Gemelos Malvados, un par de loros interdimensionales, destruyan la isla N. Sanity.",
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
