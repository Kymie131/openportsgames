import type { Port } from "@/lib/ports/schema";

export const arxLibertatis: Port = {
  schema: "port",
  id: "arx-libertatis",
  title: "Arx Libertatis",
  game: "Arx Fatalis",
  developers: ["Arkane Studios"],
  publisher: "JoWooD Productions",
  originalYear: 2002,
  portType: "source-port",
  genre: "rpg",
  openSource: true,
  platforms: ["windows", "linux"],
  status: "stable",
  release: { version: "1.2.1", date: "2022-04-10" },
  sources: ["https://github.com/arx/ArxLibertatis"],
  website: "https://arx-libertatis.org/",
  license: { spdx: "GPL-3.0" },
  verified: true,
  verifiedAt: "2026-09-25",
  screenshots: [
    {
      src: "https://wiki.arx-libertatis.org/images/e/e1/Castle.jpg",
      alt: "Castle of Arx explored in the Arx Libertatis port",
      credit: "Arx Libertatis",
    },
    {
      src: "https://wiki.arx-libertatis.org/images/1/1b/Main-menu.jpg",
      alt: "Main menu of Arx Fatalis running on Arx Libertatis",
      credit: "Arx Libertatis",
    },
  ],
  summary: "Arx Fatalis is a 2002 action role-playing game developed by Arkane Studios and released for Windows and Xbox. The game is played from a first-person perspective and is set on a world whose sun has failed, forcing the above-ground creatures to take refuge in caverns. The game's mechanics include the use of mouse gestures to cast spells. Arx Fatalis received mostly positive reviews from critics but was not commercially successful. In 2011, Arkane Studios released the game's source code under the GNU General Public License (GPL), though the game assets remain proprietary.",
  summaryEs: "Arx Fatalis es un videojuego de rol lanzado el 12 de noviembre de 2002 para PC y el 23 de diciembre de 2003 para Xbox por Arkane Studios.",
  notes:
    "Cross-platform source port of the first-person RPG Arx Fatalis. A free playable experience is possible using the game demo.",
  notesEs:
    "Port de código fuente multiplataforma del RPG en primera persona Arx Fatalis. Puede jugarse gratis usando la demo del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/3/3c/Arx_Fatalis_cover.png",
    alt: "Arx Fatalis (box art)",
    credit: "Wikipedia",
  },
  originalSystems: ["Windows"],
};
