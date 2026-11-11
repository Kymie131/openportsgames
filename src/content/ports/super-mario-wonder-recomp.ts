import type { Port } from "@/lib/ports/schema";

export const superMarioWonderRecomp: Port = {
  schema: "port",
  id: "super-mario-wonder-recomp",
  title: "Super Mario Bros. Wonder Recomp (Vulkan)",
  game: "Super Mario Bros. Wonder",
  developers: ["BluetufieBugado"],
  publisher: "Nintendo",
  originalYear: 2023,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "macos", "android"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/BluetufieBugado/SuperMarioWonderRecomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-11",
  wip: true,
  originalSystems: ["Nintendo Switch"],
  summary:
    "Super Mario Bros. Wonder is a 2023 side-scrolling platform game by Nintendo for the Nintendo Switch. Mario and friends travel through the Flower Kingdom, where the Wonder Flower bends the rules of each level.",
  summaryEs:
    "Super Mario Bros. Wonder es un juego de plataformas de desplazamiento lateral de 2023 de Nintendo para Nintendo Switch. Mario y sus amigos recorren el Reino Flor, donde la Flor Maravilla altera las reglas de cada nivel.",
  notes:
    "Static recompilation of the Nintendo Switch game running NVN on Vulkan and MoltenVK, with Windows, macOS and Android targets. It is a work in progress and needs your own copy of the game.",
  notesEs:
    "Recompilación estática del juego de Nintendo Switch que ejecuta NVN sobre Vulkan y MoltenVK, con objetivos para Windows, macOS y Android. Está en desarrollo y requiere tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a3/Mariowonder.png",
    alt: "Super Mario Bros. Wonder (box art)",
    credit: "Wikipedia",
  },
};
