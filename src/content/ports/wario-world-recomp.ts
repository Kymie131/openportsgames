import type { Port } from "@/lib/ports/schema";

export const warioWorldRecomp: Port = {
  schema: "port",
  id: "wario-world-recomp",
  title: "Wario World Recomp",
  game: "Wario World",
  developers: ["BigSnek9"],
  publisher: "Nintendo",
  originalYear: 2003,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "1.0", date: "2026-10-27" },
  sources: ["https://github.com/BigSnek9/wario-world-recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-16",
  originalSystems: ["GameCube"],
  summary:
    "Wario World is a 2003 platform game developed by Treasure and published by Nintendo for the GameCube. The player controls Wario as he attempts to regain his treasure and castle from the evil sentient gem, Black Jewel. The gameplay sees Wario progressing through a series of 3D linear levels in a bid to find collectibles and defeat enemies in order to progress.",
  summaryEs:
    "Wario World es un juego de plataformas desarrollado por Treasure Co. Ltd y distribuido por Nintendo para la consola Nintendo GameCube. Fue publicado en Europa el 20 de junio de 2003, en Norteamérica el 23 de junio de 2003, en Australia el 10 de junio de 2003, y en Japón el 27 de mayo de 2004. Representa la primera aparición protagónica de Wario en una videoconsola de sobremesa. La historia del juego se centra en Wario y su aventura para recuperar su tesoro y su castillo de manos de Black Jewel, una joya malvada.",
  notes:
    "Native Windows recompilation of Wario World with widescreen, high frame rates and HDR. Ships no game files: you must supply your own disc.",
  notesEs:
    "Recompilación nativa para Windows de Wario World con pantalla ancha, altas tasas de refresco y HDR. No incluye archivos del juego: debes aportar tu propio disco.",
  aiDisclosure: {
    source: "https://github.com/BigSnek9/wario-world-recomp",
    quote: "Made entirely by Claude (Anthropic's AI)",
  },
  cover: {
    src: "https://openportsgames.com/covers/generated/wario-world.svg",
    alt: "Wario World (generated cover)",
    credit: "OpenPortsGames",
  },
};
