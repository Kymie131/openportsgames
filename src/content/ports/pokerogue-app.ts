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
  release: { version: "2.4.6f", date: "2026-09-07" },
  sources: ["https://github.com/Admiral-Billy/Pokerogue-App"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "PokeRogue is a role-playing game published by PokeRogue contributors for Windows, released in 2023.",
  summaryEs: "PokeRogue es un videojuego de rol publicado por PokeRogue contributors para Windows, lanzado en 2023.",
  summaryGenerated: true,
  notes:
    "Android app that opens the PokeRogue web game in its own window. It is a wrapper around pokerogue.net and does not bundle the game.",
  notesEs:
    "App para Android que abre el juego web PokeRogue en su propia ventana. Es un envoltorio sobre pokerogue.net y no incluye el juego.",
  downloads: [
    {
      label: "Android APK",
      url: "https://github.com/Admiral-Billy/Pokerogue-App/releases/download/v2.4.6f/PokeRogue-Android-Legacy.apk",
      size: "5.6 MB",
    },
    {
      label: "Android APK",
      url: "https://github.com/Admiral-Billy/Pokerogue-App/releases/download/v2.4.6f/PokeRogue-Android-Modern-PodarSmarty.apk",
      size: "22.2 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/Admiral-Billy/Pokerogue-App/releases/download/v2.4.6f/PokeRogue-Linux.zip",
      size: "101.2 MB",
    },
    {
      label: "Macos",
      url: "https://github.com/Admiral-Billy/Pokerogue-App/releases/download/v2.4.6f/PokeRogue-macOS.zip",
      size: "271.8 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/Admiral-Billy/Pokerogue-App/releases/download/v2.4.6f/PokeRogue-Windows.zip",
      size: "106.3 MB",
    },
    {
      label: "Windows EXE",
      url: "https://github.com/Admiral-Billy/Pokerogue-App/releases/download/v2.4.6f/PokeRogue.Setup.2.4.6-f.exe",
      size: "75.1 MB",
    },
  ],
  cover: {
    src: "https://pokerogue.net/logo512.png",
    alt: "PokeRogue (cover)",
    credit: "PokeRogue",
  },
};
