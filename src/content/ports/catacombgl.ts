import type { Port } from "@/lib/ports/schema";

export const catacombgl: Port = {
  schema: "port",
  id: "catacombgl",
  title: "CatacombGL",
  game: "Catacomb 3-D",
  developers: ["ArnoAnsems"],
  publisher: "Softdisk",
  originalYear: 1991,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/ArnoAnsems/CatacombGL"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["MS-DOS"],
  summary:
    "Catacomb 3-D is a first-person shooter developed by id Software and published by Softdisk in 1991. The wizard Nemesis descends into the catacombs to defeat the lich Grelminar.",
  summaryEs:
    "Catacomb 3-D es un shooter en primera persona desarrollado por id Software y publicado por Softdisk en 1991. El mago Nemesis desciende a las catacumbas para derrotar al liche Grelminar.",
  cover: {
    src: "https://openportsgames.com/covers/generated/catacombgl.svg",
    alt: "Catacomb 3-D (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "CatacombGL is a source port with OpenGL graphics for Catacomb 3D (1991), The Catacomb Abyss (1992), The Catacomb Armageddon (1992) and The Catacomb Apocalypse (1993).",
  notesEs:
    "CatacombGL es un port con gráficos OpenGL de Catacomb 3D (1991), The Catacomb Abyss (1992), The Catacomb Armageddon (1992) y The Catacomb Apocalypse (1993).",
};
