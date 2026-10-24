import type { Port } from "@/lib/ports/schema";

export const Zeldawwhdrecompandroid: Port = {
  schema: "port",
  id: "zeldawwhdrecompandroid",
  title: "ZeldaWWHDRecompAndroid (Enhanced)",
  game: "The Legend of Zelda: The Wind Waker HD",
  developers: ["SSunnKing"],
  publisher: "Nintendo",
  originalYear: 2013,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/SSunnKing/ZeldaWWHDRecompAndroid---ENHANCED"],
  license: { spdx: "MPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Wii U"],
  related: ["wind-waker-hd-recomp", "wind-waker-recomp", "switch-waker-hd"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/79/The_Legend_of_Zelda_The_Wind_Waker.jpg",
    alt: "The Legend of Zelda: The Wind Waker HD (box art)",
    credit: "Wikipedia",
  },
  summary: "The Legend of Zelda: The Wind Waker is a 2002 action-adventure game developed and published by Nintendo for the GameCube. An installment in The Legend of Zelda series, it was released in Japan on December 13, 2002, in North America on March 23, 2003, and in Europe on May 2, 2003.",
  summaryEs: "The Legend of Zelda: The Wind Waker HD es un videojuego de acción y aventura publicado por Nintendo en 2013.",
  notes:
    "Wind Waker HD recompiled for Android (native ARM + Vulkan, no emulator), enhanced: native widescreen, fixed shadows, pinch-to-zoom camera, phone-made touch controls with in-game icons, 60 fps interpolation and performance work. Bring your own game dump.",
  notesEs:
    "Wind Waker HD recompilado para Android (ARM nativo + Vulkan, sin emulador), con panorámico nativo, sombras corregidas, 60 fps interpolados y más. Aporta tu propio volcado del juego.",
};
