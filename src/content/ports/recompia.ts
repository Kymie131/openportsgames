import type { Port } from "@/lib/ports/schema";

export const recompia: Port = {
  schema: "port",
  id: "recompia",
  title: "Recompia (Pokémon Pokopia)",
  game: "Pokémon Pokopia",
  developers: ["Dittobyte"],
  publisher: "Nintendo",
  originalYear: 2026,
  portType: "recompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.14.1", date: "2026-11-16" },
  sources: ["https://github.com/Dittobyte/Recompia"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-16",
  originalSystems: ["Nintendo Switch 2"],
  summary:
    "Pokémon Pokopia is a 2026 social simulation game co-developed by Game Freak and Koei Tecmo's Omega Force and published by Nintendo and The Pokémon Company for the Nintendo Switch 2. A spin-off of the Pokémon series, it stars a Ditto that transforms into a human to cultivate a post-apocalyptic world and help the Pokémon it meets.",
  summaryEs:
    "Pokémon Pokopia es un videojuego de simulación social de 2026 codirigido por Game Freak y Omega Force (Koei Tecmo) y publicado por Nintendo y The Pokémon Company para Nintendo Switch 2. Es un spin-off de la serie Pokémon protagonizado por un Ditto que se transforma en humano para cultivar un mundo postapocalíptico y ayudar a los Pokémon que encuentra.",
  notes:
    "Native recompilation of Pokémon Pokopia for Windows, Linux and macOS, with multiplayer. Ships no game files: you must supply your own copy.",
  notesEs:
    "Recompilación nativa de Pokémon Pokopia para Windows, Linux y macOS, con multijugador. No incluye archivos del juego: debes aportar tu propia copia.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/6a/Pok%C3%A9mon_Pokopia_box_art.png",
    alt: "Pokémon Pokopia (box art)",
    credit: "Wikipedia",
  },
};
