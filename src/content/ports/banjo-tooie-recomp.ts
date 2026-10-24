import type { Port } from "@/lib/ports/schema";

export const banjoTooieRecomp: Port = {
  schema: "port",
  id: "banjo-tooie-recomp",
  title: "Banjo-Tooie Recompiled",
  game: "Banjo-Tooie",
  developers: ["some-scurvy-dog"],
  publisher: "Rare",
  originalYear: 2000,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/some-scurvy-dog/banjo-tooie-scurvy-dog-port"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  summary: "Banjo-Tooie is a 2000 platform game developed by Rare and published by Nintendo for the Nintendo 64 console. It is the second game in the Banjo-Kazooie series and the sequel to Banjo-Kazooie. The game follows the returning protagonists Banjo and Kazooie as they attempt to stop the plans of the witch Gruntilda and two of her sisters, who intend to vaporise the inhabitants of the game's island setting.",
  summaryEs: "Banjo-Tooie es la secuela directa del juego de Nintendo 64 de 1998 llamado Banjo-Kazooie. Se publicó el 1 de noviembre de 2000 para la consola Nintendo 64. Creado por Rareware, sus personajes principales son Banjo y Kazooie del popular juego original.",
  notes: "Native Windows PC port of Banjo-Tooie (Nintendo 64). It needs your own copy of the game.",
  notesEs:
    "Port nativo para Windows de Banjo-Tooie (Nintendo 64). Necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Banjo-Tooie%20(USA).png",
    alt: "Banjo-Tooie (box art)",
    credit: "Box art",
  },
};
