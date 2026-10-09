import type { Port } from "@/lib/ports/schema";

export const jazz2Native: Port = {
  schema: "port",
  id: "jazz2-native",
  title: "Jazz² Resurrection",
  game: "Jazz Jackrabbit 2",
  developers: ["deathkiller"],
  publisher: "Epic MegaGames",
  originalYear: 1998,
  portType: "reimplementation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos", "android"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/deathkiller/jazz2-native"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Open-source reimplementation of Jazz Jackrabbit 2 in C++, covering the shareware demo, Holiday Hare '98, The Secret Files and Christmas Chronicles, with some JJ2+ and MLLE features. Builds run on Windows, Linux, macOS and Android and use your own game files.",
  notesEs:
    "Reimplementación libre de Jazz Jackrabbit 2 en C++, que cubre la demo shareware, Holiday Hare '98, The Secret Files y Christmas Chronicles, con algunas funciones de JJ2+ y MLLE. Sus builds funcionan en Windows, Linux, macOS y Android y usan tus propios archivos del juego.",
};
