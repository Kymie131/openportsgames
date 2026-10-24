import type { Port } from "@/lib/ports/schema";

export const opensage: Port = {
  schema: "port",
  id: "opensage",
  title: "OpenSAGE",
  game: "Command & Conquer: Generals",
  developers: ["Electronic Arts"],
  publisher: "Electronic Arts",
  originalYear: 2003,
  portType: "reimplementation",
  genre: "strategy",
  openSource: true,
  platforms: ["windows"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/OpenSAGE/OpenSAGE"],
  discord: "https://discord.gg/G2FhZUT",
  website: "https://opensage.github.io",
  license: {
    spdx: "GPL-3.0",
    note: "Code is GPL-3.0; game data stays under EA rights.",
  },
  verified: false,
  summary: "Command & Conquer: Generals is a real-time strategy video game and the seventh installment in the Command & Conquer series. It was released for Microsoft Windows and Mac OS X in 2003 and 2004. The Windows version of Generals was developed by EA Pacific and published by EA Games, the Mac OS X version was developed by i5works and published by Aspyr Media. The Mac OS X version was released by Aspyr on April 12, 2004. In the game, the player can choose from three different factions: the United States, China and the Global Liberation Army (GLA).",
  summaryEs: "Command & Conquer: Generals es un videojuego de estrategia en tiempo real, desarrollado por Electronic Arts para Microsoft Windows en 2003 y para el sistema Mac OS en 2004. Continuó perpetuando la serie Command & Conquer dándole un giro alternativo a las anteriores secuelas en cuanto a su historia se refiere. Le siguió una expansión llamada Command & Conquer: Generals – Zero Hour, que salió para PC en 2003 y para Mac OS en 2005.",
  notes:
    "Reimplementation of the SAGE engine behind Command & Conquer: Generals and Zero Hour, written in C#. Windows is the primary target and no tagged releases exist yet.",
  notesEs:
    "Reimplementación del motor SAGE de Command & Conquer: Generals y Zero Hour, escrita en C#. Windows es el destino principal y aún no existen releases etiquetadas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/0/0f/Cncgen-win-cover.jpg",
    alt: "Command & Conquer: Generals (box art)",
    credit: "Wikipedia",
  },
  originalSystems: ["Windows"],
};
