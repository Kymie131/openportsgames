import type { Port } from "@/lib/ports/schema";

export const pokerogueApp: Port = {
  schema: "port",
  kind: "tool",
  id: "pokerogue-app",
  title: "PokeRogue App",
  game: "PokéRogue",
  developers: ["Admiral-Billy"],
  publisher: "PokeRogue contributors",
  originalYear: 2023,
  portType: "runtime-port",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "open",
  platforms: ["android"],
  status: "beta",
  release: { version: "2.4.6f", date: "2026-09-07" },
  sources: ["https://github.com/Admiral-Billy/Pokerogue-App"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystems: ["Other"],
  summary: "PokeRogue App is a desktop wrapper for PokéRogue, the 2023 browser-based creature-collecting roguelike made by its community.",
  summaryEs: "PokeRogue App es un envoltorio de escritorio para PokéRogue, el roguelike de colección de criaturas de 2023 para navegador hecho por su comunidad.",  notes:
    "Android app that opens the PokeRogue web game in its own window. It is a wrapper around pokerogue.net and does not bundle the game.",
  notesEs:
    "App para Android que abre el juego web PokeRogue en su propia ventana. Es un envoltorio sobre pokerogue.net y no incluye el juego.",
  downloads: [
    {
      label: "Android",
      url: "https://github.com/Admiral-Billy/Pokerogue-App/releases/download/v2.4.6f/PokeRogue-Android-Modern-PodarSmarty.apk",
      size: "22.2 MB",
    },
    {
      label: "Android",
      url: "https://github.com/Admiral-Billy/Pokerogue-App/releases/download/v2.4.6f/PokeRogue-Android-Legacy.apk",
      size: "5.6 MB",
    },
  ],
  cover: {
    src: "https://pokerogue.net/logo512.png",
    alt: "PokeRogue (cover)",
    credit: "PokeRogue",
  },
};
