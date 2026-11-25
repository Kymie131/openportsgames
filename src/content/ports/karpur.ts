import type { Port } from "@/lib/ports/schema";

export const karpur: Port = {
  schema: "port",
  id: "karpur",
  title: "KarPur (Scarlet & Violet)",
  game: "Pokémon Scarlet and Violet",
  developers: ["Grunttanamo"],
  publisher: "Nintendo",
  originalYear: 2022,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "0.3.8", date: "2026-11-15" },
  sources: ["https://github.com/Grunttanamo/KarPur"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-16",
  originalSystems: ["Nintendo Switch"],
  summary:
    "Pokémon Scarlet and Violet are 2022 role-playing games developed by Game Freak and published by Nintendo for the Nintendo Switch. Set in the Paldea region, they follow a student's Treasure Hunt across an open world.",
  summaryEs:
    "Pokémon Escarlata y Púrpura son videojuegos de rol de 2022 desarrollados por Game Freak y publicados por Nintendo para Nintendo Switch. Ambientados en la región de Paldea, siguen la Búsqueda del Tesoro de un estudiante por un mundo abierto.",
  notes:
    "Native Windows recompilation of Pokémon Scarlet and Violet with a Vulkan renderer. Ships no game files: you must supply your own copy.",
  notesEs:
    "Recompilación nativa para Windows de Pokémon Escarlata y Púrpura con renderizador Vulkan. No incluye archivos del juego: debes aportar tu propia copia.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/0/00/Pok%C3%A9mon_Scarlet_and_Violet_banner.png",
    alt: "Pokémon Scarlet and Violet (box art)",
    credit: "Wikipedia",
  },
};
