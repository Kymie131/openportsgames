import type { Port } from "@/lib/ports/schema";

export const BattletanxGlobalAssault: Port = {
  schema: "port",
  id: "battletanx-global-assault",
  title: "BattleTanx: Global Assault",
  game: "BattleTanx: Global Assault",
  developers: ["TheGh0stShip"],
  publisher: "The 3DO Company",
  originalYear: 1999,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/TheGh0stShip/BattleTanx-Global-Assault"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/BattleTanx%20-%20Global%20Assault%20(Europe)%20(En,Fr,De).png",
    alt: "BattleTanx: Global Assault (box art)",
    credit: "Box art",
  },
  summary: "BattleTanx: Global Assault is an action game developed and published by The 3DO Company for the Nintendo 64 and PlayStation, in which players control futuristic tanks in a post-apocalyptic scenario. It is a sequel to the Nintendo 64 game BattleTanx, which utilized the same method of game play. Although it earned relatively positive reviews from critics, 3DO went bankrupt before another sequel could be released.",
  summaryEs: "BattleTanx: Global Assault es un videojuego de acción y aventura publicado por The 3DO Company en 1999.",
  notes:
    "100% matching decompilation of BattleTanx: Global Assault (N64, USA Rev 0) — foundation for VitaTanxGA. The playable PC port built on it is catalogued separately.",
  notesEs:
    "Descompilación 100% exacta de BattleTanx: Global Assault (N64, USA Rev 0), base de VitaTanxGA. El port jugable para PC construido sobre ella se cataloga aparte.",
};
