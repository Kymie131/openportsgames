import type { Port } from "@/lib/ports/schema";

export const pokerogueApp: Port = {
  schema: "port",
  id: "pokerogue-app",
  title: "PokeRogue App",
  game: "PokeRogue",
  developers: ["Admiral-Billy"],
  publisher: "PokeRogue contributors",
  originalYear: 2023,
  portType: "runtime-port",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "open",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Admiral-Billy/Pokerogue-App"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Android app that opens the PokeRogue web game in its own window. It is a wrapper around pokerogue.net and does not bundle the game.",
  notesEs:
    "App para Android que abre el juego web PokeRogue en su propia ventana. Es un envoltorio sobre pokerogue.net y no incluye el juego.",
};
