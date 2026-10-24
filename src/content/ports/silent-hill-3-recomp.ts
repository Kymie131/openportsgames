import type { Port } from "@/lib/ports/schema";

export const silentHill3Recomp: Port = {
  schema: "port",
  id: "silent-hill-3-recomp",
  title: "Silent Hill 3 Recompiled",
  game: "Silent Hill 3",
  developers: ["cutarev"],
  publisher: "Konami",
  originalYear: 2003,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["switch"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/cutarev/sh3-nx"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 2"],
  summary: "Silent Hill 3 is a 2003 survival horror video game developed by Konami's Team Silent and published by Konami for the PlayStation 2. The third installment in the Silent Hill series and a direct sequel to the first Silent Hill game follows Heather Mason, a teenager who becomes entangled in the machinations of the town's cult, which seeks to revive a malevolent deity. A port for Microsoft Windows was released later in November, and a remastered high-definition version was released as part of the Silent Hill HD Collection, for the PlayStation 3 and Xbox 360 in 2012.",
  summaryEs: "Silent Hill 3 es un videojuego de terror psicológico y supervivencia desarrollado por Team Silent, un grupo de Konami Computer Entertainment Tokyo, y publicado por Konami para la PlayStation 2. La tercera entrega de la serie Silent Hill y secuela directa del primer juego de Silent Hill, sigue a Heather, una adolescente que se ve envuelta en las maquinaciones del culto del pueblo, que busca revivir a una deidad malévola.",
  notes:
    "Silent Hill 3 (PlayStation 2) statically recompiled for the Nintendo Switch. It needs your own copy of the game.",
  notesEs:
    "Silent Hill 3 (PlayStation 2) recompilado de forma estática para Nintendo Switch. Necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation%202/Named_Boxarts/Silent%20Hill%203%20(USA)%20(En,Ja,Fr,De,Es,It,Ko).png",
    alt: "Silent Hill 3 (box art)",
    credit: "Box art",
  },
};
