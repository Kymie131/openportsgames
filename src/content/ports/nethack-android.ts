import type { Port } from "@/lib/ports/schema";

export const nethackAndroid: Port = {
  schema: "port",
  id: "nethack-android",
  title: "NetHack (Android)",
  game: "NetHack",
  developers: ["gurrhack"],
  publisher: "NetHack DevTeam",
  originalYear: 1987,
  portType: "source-port",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "open",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/gurrhack/NetHack-Android"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "NetHack is a free and open-source, single-player roguelike video game developed by the NetHack Development Team, a group of developers who collaborate over the internet. It was first released on 28 July 1987 as a fork of Hack, and it is one of the oldest video games still in active development. In the game, the player creates a character, then descends through the Mazes of Menace, a multi-level dungeon, fighting monsters and collecting treasure, with the goal of retrieving the Amulet of Yendor and escaping with it. NetHack has been cited as an influence on later games, including Diablo.",
  summaryEs: "NetHack es un videojuego libre perteneciente al género roguelike. La última versión oficial es la 5.0.0, lanzada el 2 de mayo de 2026.",
  notes:
    "Android port of NetHack, the classic open-source roguelike. It is a standalone build that does not need the original game.",
  notesEs:
    "Port a Android de NetHack, el roguelike clásico de código abierto. Es una build independiente que no necesita el juego original.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d6/NetHack.png",
    alt: "NetHack (box art)",
    credit: "Wikipedia",
  },
};
