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
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android", "ios"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/AngelAuraMC/Amethyst-Android"],
  license: { spdx: "LGPL-3.0" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Minecraft: Java Edition launcher for Android and iOS, based on PojavLauncher. It runs the Java version of Minecraft and requires your own account and game files.",
  notesEs:
    "Lanzador de Minecraft: Java Edition para Android e iOS, basado en PojavLauncher. Ejecuta la versión Java de Minecraft y requiere tu propia cuenta y archivos del juego.",
};
