import type { Port } from "@/lib/ports/schema";

export const amethystAndroid: Port = {
  schema: "port",
  id: "amethyst-android",
  title: "Amethyst (Minecraft Java)",
  game: "Minecraft: Java Edition",
  developers: ["AngelAuraMC"],
  publisher: "Mojang Studios",
  originalYear: 2011,
  portType: "runtime-port",
  kind: "tool",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android", "ios"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/AngelAuraMC/Amethyst-Android"],
  license: { spdx: "LGPL-3.0" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "Minecraft is a sandbox video game developed and published by the Swedish company Mojang Studios. Following its initial public alpha release as an early access title on 17 May 2009, it was formally released on 18 November 2011 for personal computers. The game has since been ported to numerous platforms, including mobile devices and various video game consoles.",
  summaryEs: "Minecraft es un videojuego de construcción de tipo «mundo abierto» o en inglés sandbox creado originalmente por el sueco Markus Persson, que creó posteriormente Mojang Studios. Está programado en el lenguaje de programación Java para la versión Java Edition y posteriormente desarrollado en C++ para la versión de Bedrock Edition. Fue lanzado el 17 de mayo de 2009, y después de numerosos cambios, su primera versión estable «1.0» fue publicada el 18 de noviembre de 2011.",
  notes:
    "Minecraft: Java Edition launcher for Android and iOS, based on PojavLauncher. It runs the Java version of Minecraft and requires your own account and game files.",
  notesEs:
    "Lanzador de Minecraft: Java Edition para Android e iOS, basado en PojavLauncher. Ejecuta la versión Java de Minecraft y requiere tu propia cuenta y archivos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Caves_%26_Cliffs_II_-_Alex_%26_Steve_I.png",
    alt: "Minecraft (key art)",
    credit: "Wikimedia Commons",
  },
};
