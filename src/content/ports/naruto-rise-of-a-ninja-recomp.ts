import type { Port } from "@/lib/ports/schema";

export const narutoRiseOfANinjaRecomp: Port = {
  schema: "port",
  id: "naruto-rise-of-a-ninja-recomp",
  title: "Naruto: Rise of a Ninja (Port)",
  game: "Naruto: Rise of a Ninja",
  developers: ["Masterllgod"],
  publisher: "Ubisoft",
  originalYear: 2007,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android", "windows"],
  status: "alpha",
  release: { version: "0.2", date: "2026-10-14" },
  sources: ["https://github.com/Masterllgod/naruto-rise-of-a-ninja-port-nativo"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  downloads: [
    {
      label: "Android APK",
      url: "https://github.com/Masterllgod/naruto-rise-of-a-ninja-port-nativo/releases/download/v0.2/NarutoRiseOfANinja-PortNativo-v0.2-arm64.apk",
      size: "38.6 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/f/fa/Naruto_ROANfront.jpg",
    alt: "Naruto: Rise of a Ninja (box art)",
    credit: "Wikipedia",
  },
  summary: "Naruto: Rise of a Ninja is an action adventure game for the Xbox 360 with high emphasis on fighting and platforming mechanics, like with most Naruto games, it features cel-shaded graphics. The game was developed by Ubisoft Montreal, making it the first Naruto game to be developed by a non-Japanese company. The game is specifically based on the English dubbed version of the anime. The game was released in 2007. A sequel titled Naruto: The Broken Bond was released in the following year.",
  summaryEs: "Naruto: Rise of a Ninja es un videojuego para Xbox 360 desarrollo por Ubisoft Montreal, siendo así el primer juego de Naruto no desarrollado por una compañía japonesa. El juego mezcla plataforma, combates uno contra uno, diálogos y toques de RPG. La estética del juego es en Cel shading.",
  notes: "Naruto: Rise of a Ninja (Xbox 360, 2007) running natively on Android (ARM64) and PC (Windows x64) via static recompilation, no CPU emulator. Built by Masterllgod; no game files are included, you need your own copy. Latest release: v0.2.",
  notesEs: "Naruto: Rise of a Ninja (Xbox 360, 2007) corriendo de forma nativa en Android (ARM64) y PC (Windows x64) por recompilación estática, sin emulador de CPU. Hecho por Masterllgod; no incluye archivos del juego, necesitas tu propia copia. Última release: v0.2.",
};
