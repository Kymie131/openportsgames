import type { Port } from "@/lib/ports/schema";

export const Remc2: Port = {
  schema: "port",
  id: "remc2",
  title: "Remc2",  game: "Magic Carpet 2: The Netherworlds",
  developers: ["turican0"],  publisher: "Electronic Arts",  originalYear: 1995,
  portType: "reimplementation",  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.99", date: "2021-04-15" },
  sources: ["https://github.com/turican0/remc2"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,  originalSystems: ["MS-DOS"],  summary: "Magic Carpet 2: The Netherworlds is a 1995 first-person shooter and god game developed by Bullfrog Productions and published by Electronic Arts. The player flies a magic carpet, builds castles and battles rival wizards.",  summaryEs: "Magic Carpet 2: The Netherworlds es un shooter en primera persona y juego de dioses de 1995 desarrollado por Bullfrog Productions y publicado por Electronic Arts. El jugador vuela en una alfombra mágica, construye castillos y lucha contra magos rivales.",  downloads: [
    {
      label: "Windows",
      url: "https://github.com/turican0/remc2/releases/download/0.99/Release_0.99.zip",
      size: "251.4 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/remc2.svg",
    alt: "remc2 (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Recode Binary code of game Magic Carpet2 to C/C++ language(remake MC2 for any platform).",
  notesEs:
    "Recodificación a C/C++ del código binario de Magic Carpet 2 (remake para cualquier plataforma).",
};
