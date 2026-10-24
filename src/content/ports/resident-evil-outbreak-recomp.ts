import type { Port } from "@/lib/ports/schema";

export const residentEvilOutbreakRecomp: Port = {
  schema: "port",
  id: "resident-evil-outbreak-recomp",
  title: "Resident Evil Outbreak Recompiled",
  game: "Resident Evil Outbreak",
  developers: ["sp00nznet"],
  publisher: "Capcom",
  originalYear: 2003,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/sp00nznet/reo"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 2"],
  summary: "Resident Evil Outbreak is a survival horror video game developed and published by Capcom for the PlayStation 2. It was released on December 11, 2003 in Japan, on March 30, 2004 in North America, and on September 17, 2004 in PAL regions. It was the first entry in the Resident Evil video game series to feature cooperative gameplay and online multiplayer support, although online support was not available for the PAL versions of the game.",
  summaryEs: "Resident Evil Outbreak conocido en Japón como Biohazard Outbreak es un videojuego de acción-aventura de terror y supervivencia desarrollado por Capcom y producido por Tsuyoshi Tanaka para PlayStation 2. Es la primera entrega de la franquicia que incluye la opción para jugar en línea. Fue publicado por primera vez el 11 de diciembre de 2003 en Japón; posteriormente, el 31 de marzo de 2004 en Norteamérica y el 17 de septiembre de 2004 en Europa.",
  notes:
    "Static recompilation of Resident Evil Outbreak (PlayStation 2) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Resident Evil Outbreak (PlayStation 2) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation%202/Named_Boxarts/Resident%20Evil%20-%20Outbreak%20(USA)%20(v2.00).png",
    alt: "Resident Evil Outbreak (box art)",
    credit: "Box art",
  },
};
