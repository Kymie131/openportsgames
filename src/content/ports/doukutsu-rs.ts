import type { Port } from "@/lib/ports/schema";

export const doukutsuRs: Port = {
  schema: "port",
  id: "doukutsu-rs",
  title: "doukutsu-rs",
  game: "Cave Story",
  developers: ["doukutsu-rs contributors"],
  publisher: "Pixel",
  originalYear: 2004,
  genre: "platformer",
  openSource: true,
  portType: "reimplementation",
  platforms: ["windows", "linux", "macos", "android"],
  status: "stable",
  release: { version: "1.0.0", date: "2026-06-03" },
  sources: ["https://github.com/doukutsu-rs/doukutsu-rs"],
  discord: "https://discord.gg/fbRsNNB",
  website: "https://doukutsu.rs",
  license: { spdx: "MIT" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystems: ["Windows"],
  features: ["Cross-platform desktop builds", "Android build", "Multiple unofficial translations"],
  featuresEs: [
    "Builds de escritorio multiplataforma",
    "Build para Android",
    "Múltiples traducciones no oficiales",
  ],
  summary: "Cave Story is a 2004 Metroidvania game developed by Daisuke \"Pixel\" Amaya. It was released on December 20, 2004 for Microsoft Windows. The game revolves around Quote, a robot who wakes up suffering from amnesia and explores in diverse cavernous areas in order to uncover his backstory and escape from the cave. The character gains access to new areas as he powers up his weapons by collecting triangular experience crystals and solves various platforming puzzles. Quote speaks to non-player characters scattered around the game world in order to learn more about the world and its inhabitants.",
  summaryEs: "Cave Story es un videojuego freeware desarrollado originalmente para PC y versionado tiempo después a PlayStation Portable, GP2X, Xbox, Nintendo DSi, Nintendo 3DS, Nintendo Switch y en la consola Wii bajo el sistema de tienda WiiWare. Creado en Japón por Daisuke Amaya en 5 años de desarrollo continuo, Cave Story es un título de acción-plataformas estilo Metroidvania, es decir, combinando elementos de acción/aventura en 2D y exploración.",
  notes:
    "Unofficial open source port of Cave Story. The original freeware game data is required and is not distributed with the repository.",
  notesEs:
    "Port no oficial de código abierto de Cave Story. Se requieren los datos del juego original gratuito y el repositorio no los distribuye.",
  screenshots: [
    {
      src: "https://i.imgur.com/3dJ7WMB.png",
      alt: "example root directory with doukutsu-rs and vanilla Cave Story",
      credit: "doukutsu-rs",
    },
    {
      src: "https://user-images.githubusercontent.com/53099651/155904982-eb6032d8-7a4d-4af7-ae6f-b69041ecfaa4.png",
      alt: "image",
      credit: "doukutsu-rs",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/83/Cave_Story_title_screen.png",
    alt: "Cave Story (box art)",
    credit: "Wikipedia",
  },
};
