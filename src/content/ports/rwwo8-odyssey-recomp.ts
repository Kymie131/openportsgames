import type { Port } from "@/lib/ports/schema";

export const rwwo8OdysseyRecomp: Port = {
  schema: "port",
  id: "rwwo8-odyssey-recomp",
  title: "Super Mario Odyssey (OdysseyRecomp)",
  game: "Super Mario Odyssey",
  developers: ["rwwo8"],
  publisher: "Nintendo",
  originalYear: 2017,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.2.6", date: "2026-11-16" },
  sources: ["https://github.com/rwwo8/OdysseyRecomp"],
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
    "Static recompilation of Super Mario Odyssey built against game version 1.0.0, with Vulkan on Windows and Linux and Metal on macOS (early build). It ships no game files: you must supply your own copy.",
  notesEs:
    "Recompilación estática de Super Mario Odyssey sobre la versión 1.0.0 del juego, con Vulkan en Windows y Linux y Metal en macOS (build temprana). No incluye archivos del juego: debes aportar tu propia copia.",
  related: ["super-mario-odyssey", "coz-0-smo-recomp"],
  aiDisclosure: {
    source: "https://github.com/rwwo8/OdysseyRecomp",
    quote: "Built with heavy help from an AI coding agent (Claude), directed and tested by a human.",
  },
  cover: {
    src: "https://openportsgames.com/covers/generated/super-mario-odyssey.svg",
    alt: "Super Mario Odyssey (generated cover)",
    credit: "OpenPortsGames",
  },
};
