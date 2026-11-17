import type { Port } from "@/lib/ports/schema";

export const superOdysseyPcRecomp: Port = {
  schema: "port",
  id: "super-odyssey-pc-recomp",
  title: "Super Mario Odyssey (Super Odyssey PC Recomp)",
  game: "Super Mario Odyssey",
  developers: ["Simon3Sarkis"],
  publisher: "Nintendo",
  originalYear: 2017,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "alpha",
  release: { version: "0.3.1", date: "2026-11-16" },
  sources: ["https://github.com/Simon3Sarkis/super-odyssey-pc-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-16",
  originalSystems: ["Nintendo Switch"],
  summary:
    "Super Mario Odyssey is a 2017 platform game developed and published by Nintendo for the Nintendo Switch. An installment in the Super Mario series, it follows Mario and his new ally Cappy—a sentient hat—as they journey across various kingdoms to save Princess Peach from Mario's nemesis Bowser's plans of forced marriage. In contrast to the linear gameplay of prior entries, the game returns to the primarily open-ended, 3D platform gameplay featured in Super Mario 64 and Super Mario Sunshine.",
  summaryEs:
    "Super Mario Odyssey es un videojuego de plataformas desarrollado y publicado por Nintendo para la Switch. Se trata de una entrega de la serie Super Mario, con Mario y su nuevo aliado Cappy —un sombrero con conciencia propia— en un viaje por varios reinos con tal de salvar a la Princesa Peach de los planes para un matrimonio forzoso con Bowser, su enemigo principal. A diferencia de la mecánica lineal de juegos anteriores, vuelve a la de plataformas 3D y de mundo abierto que caracterizaba a Super Mario 64 y Super Mario Sunshine.",
  notes:
    "Static recompilation of Super Mario Odyssey for Windows and Linux, an early preview at version 0.3.1. The project ships no game files: you must supply your own copy. The port's code was written with AI assistance.",
  notesEs:
    "Recompilación estática de Super Mario Odyssey para Windows y Linux, una preview temprana en la versión 0.3.1. El proyecto no incluye archivos del juego: debes aportar tu propia copia. El código del port se escribió con ayuda de IA.",
  related: ["super-mario-odyssey", "coz-0-smo-recomp"],
  aiDisclosure: {
    source: "https://github.com/Simon3Sarkis/super-odyssey-pc-recomp",
    quote: "The code of this port was written by AI: almost all of it by Claude",
  },
  cover: {
    src: "https://openportsgames.com/covers/generated/super-mario-odyssey.svg",
    alt: "Super Mario Odyssey (generated cover)",
    credit: "OpenPortsGames",
  },
};
