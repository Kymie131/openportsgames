import type { Port } from "@/lib/ports/schema";

export const unnethackAndroid: Port = {
  schema: "port",
  id: "unnethack-android",
  title: "UnNetHack (Android)",
  game: "UnNetHack",
  developers: ["gurrhack"],
  publisher: "UnNetHack DevTeam",
  originalYear: 2009,
  portType: "source-port",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "open",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/gurrhack/UnNetHack-Android"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "MS-DOS",
  notes:
    "Android port of UnNetHack, a variant of NetHack with extra content and tweaks. It is a standalone build that does not need the original game.",
  notesEs:
    "Port a Android de UnNetHack, una variante de NetHack con contenido y ajustes extra. Es una build independiente que no necesita el juego original.",
};
