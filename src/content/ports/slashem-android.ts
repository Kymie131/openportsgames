import type { Port } from "@/lib/ports/schema";

export const slashemAndroid: Port = {
  schema: "port",
  id: "slashem-android",
  title: "SLASH'EM (Android)",
  game: "SLASH'EM",
  developers: ["gurrhack"],
  publisher: "SLASH'EM DevTeam",
  originalYear: 1997,
  portType: "source-port",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "open",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/gurrhack/SlashEM-Android"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "MS-DOS",
  notes:
    "Android port of SLASH'EM, the NetHack variant known for its expanded classes and items. It is a standalone build that does not need the original game.",
  notesEs:
    "Port a Android de SLASH'EM, la variante de NetHack conocida por sus clases y objetos ampliados. Es una build independiente que no necesita el juego original.",
};
