import type { Port } from "@/lib/ports/schema";

export const godOfThunderAndroid: Port = {
  schema: "port",
  id: "god-of-thunder-android",
  title: "God of Thunder (Android)",
  game: "God of Thunder",
  developers: ["wootbeer"],
  publisher: "Software Creations",
  originalYear: 1993,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/wootbeer/gotandroid"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "MS-DOS",
  notes:
    "Source port of the 1993 DOS game God of Thunder for Android, with extra quality-of-life features. It needs the original game files, whose license is free.",
  notesEs:
    "Source port para Android del juego de DOS God of Thunder (1993), con funciones de comodidad adicionales. Necesita los archivos del juego original, cuya licencia es gratuita.",
};
