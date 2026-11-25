import type { Port } from "@/lib/ports/schema";

export const brawlRecompiled: Port = {
  schema: "port",
  id: "brawl-recompiled",
  title: "Brawl Recompiled",
  game: "Super Smash Bros. Brawl",
  developers: ["josiahg2502-glitch"],
  publisher: "Nintendo",
  originalYear: 2008,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "0.5.3", date: "2026-10-31" },
  sources: ["https://github.com/josiahg2502-glitch/BrawlRecompiled"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-16",
  originalSystems: ["Wii"],
  summary:
    "Super Smash Bros. Brawl is a 2008 fighting game developed by Sora Ltd. and published by Nintendo for the Wii. The third installment in the Super Smash Bros. series and the successor to Super Smash Bros. Melee, it was the first game in the series not to be developed primarily by HAL Laboratory. The crossover game was developed by a creative team under Sora that included members from several Nintendo and third-party development teams. It was announced at a pre-E3 2005 press conference by Nintendo president Satoru Iwata.",
  summaryEs:
    "Super Smash Bros. Brawl es un videojuego de lucha distribuido por Nintendo para la videoconsola Wii. Como la tercera entrega de la serie Super Smash Bros., la lista de personajes de Brawl se expande con respecto a la de su predecesor Super Smash Bros. Melee, y es el primer juego dentro de la serie en presentar personajes de franquicias externas a Nintendo, con la inclusión de Solid Snake de la serie Metal Gear de Konami, y Sonic de la serie Sonic the Hedgehog de Sega.",
  notes:
    "Native recompilation of Super Smash Bros. Brawl built with WiiCompiled. Ships no game files: you must supply your own disc image.",
  notesEs:
    "Recompilación nativa de Super Smash Bros. Brawl creada con WiiCompiled. No incluye archivos del juego: debes aportar tu propia imagen de disco.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/f/f3/SSBB_Cover.jpg",
    alt: "Super Smash Bros. Brawl (box art)",
    credit: "Wikipedia",
  },
};
