import type { Port } from "@/lib/ports/schema";

export const breathOfFireIiiRecomp: Port = {
  schema: "port",
  id: "breath-of-fire-iii-recomp",
  title: "Breath of Fire III Recompiled",
  game: "Breath of Fire III",
  developers: ["kerokline"],
  publisher: "Capcom",
  originalYear: 1997,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/kerokline/BreathOfFire3Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  summary: "Breath of Fire III is a role-playing video game developed and published by Capcom originally for the PlayStation console as part of the Breath of Fire series. It was released in Japan on September 11, 1997, and in North America and Europe in 1998. It is the first game in the franchise to feature three-dimensional graphics and voice acting. On August 25, 2005, the game was ported and released for the PlayStation Portable handheld system in Japan, and was also released in Europe on February 3, 2006.",
  summaryEs: "Breath of Fire III es un videojuego de rol desarrollado por Capcom para la consola PlayStation. Lanzado originalmente en Japón en 1997, fue posteriormente lanzado para Norteamérica en 1998. Es el tercer videojuego de la saga Breath of Fire, y el primero en mostrar ambientes y efectos tridimensionales, así como varios elementos de jugabilidad nuevos, entre ellos un sistema de combate ampliado, la capacidad de aprender las habilidades del enemigo, y la interacción con el medio ambiente.",
  notes:
    "Recompilation of Breath of Fire III (PlayStation) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación de Breath of Fire III (PlayStation) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Breath%20of%20Fire%20III%20(USA).png",
    alt: "Breath of Fire III (box art)",
    credit: "Box art",
  },
};
