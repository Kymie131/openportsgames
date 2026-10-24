import type { Port } from "@/lib/ports/schema";

export const superMarioSunshineAndroid: Port = {
  schema: "port",
  id: "super-mario-sunshine-android",
  title: "Super Mario Sunshine (Android)",
  game: "Super Mario Sunshine",
  developers: ["jbcgames"],
  publisher: "Nintendo",
  originalYear: 2002,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/jbcgames/sms-android"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["GameCube"],
  summary: "Super Mario Sunshine is a 2002 platform game developed and published by Nintendo for the GameCube. It is the second 3D game in the Super Mario series, following Super Mario 64 (1996). The game was directed by Yoshiaki Koizumi and Kenta Usui, produced by series creators Shigeru Miyamoto and Takashi Tezuka, written by Makoto Wada, and scored by Koji Kondo and Shinobu Tanaka.",
  summaryEs: "Super Mario Sunshine es un videojuego de plataformas japonés de 2002 desarrollado y publicado por Nintendo para GameCube. Es el segundo juego en 3D de la serie Super Mario, después de Super Mario 64 (1996). El juego fue dirigido por Yoshiaki Koizumi y Kenta Usui, producido por los creadores de la serie Shigeru Miyamoto y Takashi Tezuka, escrito por Makoto Wada y musicalizado por Koji Kondo y Shinobu Tanaka.",
  notes:
    "Native port of Super Mario Sunshine (GameCube) for Android (ARM64, OpenGLES 3.0) with on-screen touch controls. It requires your own game files.",
  notesEs:
    "Port nativo de Super Mario Sunshine (GameCube) para Android (ARM64, OpenGLES 3.0) con controles táctiles en pantalla. Requiere tus propios archivos del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Boxarts/Super%20Mario%20Sunshine%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "Super Mario Sunshine (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Snaps/Super%20Mario%20Sunshine%20(Europe)%20(En,Fr,De,Es,It).png",
      alt: "Super Mario Sunshine (screenshot)",
      credit: "Libretro",
    },
  ],
};
