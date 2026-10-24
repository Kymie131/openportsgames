import type { Port } from "@/lib/ports/schema";

export const openTestDriveUnlimited: Port = {
  schema: "port",
  id: "open-test-drive-unlimited",
  title: "OpenTDU",
  game: "Test Drive Unlimited",
  developers: ["opentestdriveunlimited"],
  publisher: "Atari",
  originalYear: 2006,
  portType: "source-port",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/opentestdriveunlimited/OpenTestDriveUnlimited"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/63/Test_Drive_Unlimited_boxart.jpg",
    alt: "Test Drive Unlimited (box art)",
    credit: "Wikipedia",
  },
  summary: "Test Drive Unlimited is a 2006 racing video game developed by Eden Games for Xbox 360 and Windows, with Atari Melbourne House developed the PlayStation 2 and PlayStation Portable versions, and published by Atari. Being the eighteenth entry in the Test Drive series, Unlimited serves as a reboot of the franchise, discarding the continuity of the previous games. The game features over 125 licensed sports cars and motorcycles and the terrain is modeled after the Hawaiian island of Oʻahu that features over 1,000 miles (1,600 km) of roads and highways.",
  summaryEs: "Test Drive Unlimited es un videojuego de carreras callejeras de 2006 desarrollado por Eden Games y distribuido por Atari para Xbox 360, Microsoft Windows, PlayStation 2 y PlayStation Portable. A pesar de ser la decimoctava entrega de la serie Test Drive, Test Drive Unlimited sirve como un reinicio de la franquicia, descartando la continuidad de sus juegos predecesores.",
  notes:
    "Open source port of Test Drive Unlimited PC (TDU, MC 1.66A). Work in progress: the goal is a new client that fixes issues found in the original. It requires your own copy of the game.",
  notesEs:
    "Port de código abierto de Test Drive Unlimited para PC (TDU, MC 1.66A). En desarrollo: el objetivo es un cliente nuevo que arregle problemas del original. Requiere tu propia copia del juego.",
};
