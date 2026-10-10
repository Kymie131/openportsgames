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
  originalSystem: "Microsoft Windows",
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
