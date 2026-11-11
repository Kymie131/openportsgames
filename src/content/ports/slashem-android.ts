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
  release: { version: "2.6.6", date: "2020-06-13" },
  sources: ["https://github.com/gurrhack/SlashEM-Android"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["MS-DOS"],
  summary: "Slash'EM is a variantof the roguelike game NetHack that offers extra features, monsters, and items. Several of its novel features, such as the Monk class, \"conducts\", and the Sokoban levels, have been reincorporated into NetHack.",
  summaryEs: "El término null, nulo o nil es a menudo utilizado en la computación para hacer referencia a la nada. Su significado y uso varía según el lenguaje de programación.",
  notes:
    "Android port of SLASH'EM, the NetHack variant known for its expanded classes and items. It is a standalone build that does not need the original game.",
  notesEs:
    "Port a Android de SLASH'EM, la variante de NetHack conocida por sus clases y objetos ampliados. Es una build independiente que no necesita el juego original.",
  screenshots: [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Slash%27_EM.jpg",
      alt: "SLASH'EM (screenshot)",
      credit: "Wikimedia Commons",
    },
  ],
  downloads: [
    {
      label: "Android",
      url: "https://github.com/gurrhack/SlashEM-Android/releases/download/v2.6.6/slex-2.6.6.apk",
      size: "15.7 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Slash%27_EM.jpg",
    alt: "SLASH'EM (box art)",
    credit: "Wikipedia",
  },
};
