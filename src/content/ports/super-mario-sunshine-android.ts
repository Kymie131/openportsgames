import type { Port } from "@/lib/ports/schema";

export const superMarioSunshineAndroid: Port = {
  schema: "port",
  id: "super-mario-sunshine-android",
  title: "Super Mario Sunshine (Android)",
  game: "Super Mario Sunshine",
  developers: ["Player124413"],
  publisher: "Nintendo",
  originalYear: 2002,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Player124413/sunpad-android-editon"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "GameCube",
  notes:
    "Native port of Super Mario Sunshine (GameCube) built from its decompilation. It requires your own copy of the game.",
  notesEs:
    "Port nativo de Super Mario Sunshine (GameCube) construido a partir de su decompilación. Requiere tu propia copia del juego.",
};
