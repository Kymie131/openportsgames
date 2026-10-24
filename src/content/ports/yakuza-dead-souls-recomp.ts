import type { Port } from "@/lib/ports/schema";

export const yakuzaDeadSoulsRecomp: Port = {
  schema: "port",
  id: "yakuza-dead-souls-recomp",
  title: "Yakuza: Dead Souls Recompiled",
  game: "Yakuza: Dead Souls",
  developers: ["canersaka"],
  publisher: "Sega",
  originalYear: 2011,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/canersaka/Yakuza-Dead-Souls-Recompiled"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 3"],
  summary: "Yakuza: Dead Souls is a 2011 action-adventure survival horror video game developed and published by Sega for the PlayStation 3. The game is a spin-off of the Like a Dragon series. The game was originally scheduled for release in Japan on March 17, 2011 two days after the release of Yakuza 4 in North America; however, after the 2011 Tōhoku earthquake and tsunami, the release was indefinitely delayed. A new release date, setting the game's release for June 9, was announced on April 7. The game was also released in North America and Europe by Sega in March 2012.",
  summaryEs: "Yakuza: Dead Souls, conocido en Japón como Ryū ga Gotoku OF THE END, es un videojuego de acción-aventura, desarrollado y distribuido por Sega en exclusividad para la consola PlayStation 3. Se trata del sexto juego de la serie de videojuegos Yakuza, pero su argumento no es canónico al tratarse de un spin-off. Una imagen promocional del juego publicada en la revista japonesa Famitsu presentaba a Kamurocho, ciudad principal de la saga, totalmente en ruinas.",
  notes:
    "Static recompilation of Yakuza: Dead Souls (PlayStation 3) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Yakuza: Dead Souls (PlayStation 3) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/e/e5/Yakuza-dead-souls-ps3-cover-1.jpg",
    alt: "Yakuza: Dead Souls (cover)",
    credit: "Wikipedia",
  },
};
