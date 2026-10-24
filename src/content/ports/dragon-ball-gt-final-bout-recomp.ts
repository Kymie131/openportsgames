import type { Port } from "@/lib/ports/schema";

export const dragonBallGtFinalBoutRecomp: Port = {
  schema: "port",
  id: "dragon-ball-gt-final-bout-recomp",
  title: "Dragon Ball GT: Final Bout Recompiled",
  game: "Dragon Ball GT: Final Bout",
  developers: ["novapowers0"],
  publisher: "Bandai",
  originalYear: 1997,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/novapowers0/DB-Final-Bout-Recomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  summary: "Dragon Ball GT: Final Bout, known in Japan and Europe as Dragon Ball: Final Bout , is a fighting game for the PlayStation. The game was developed by TOSE and released by Bandai in Japan, Europe and North America in 1997, making it the first North American release for a Dragon Ball video game.",
  summaryEs: "Dragon Ball Final Bout, conocido en América del Norte como Dragon Ball GT: Final Bout, es un videojuego del género de lucha en 3D, basado en el universo de Dragon Ball, para PlayStation en 1997. Es el primer juego de Dragon Ball que tiene gráficos completamente poligonales. Los personajes que aparecen abarcan el final de Dragon Ball Z y Dragon Ball GT. Fue el último juego de Dragon Ball para PlayStation, y también fue el primer juego en aparecer en Norteamérica con la licencia Dragon Ball.",
  notes:
    "Static recompilation of Dragon Ball GT: Final Bout (PlayStation, SLUS-00493) for Windows, with widescreen, Vulkan and LAN/direct-IP netplay. Bring your own disc.",
  notesEs:
    "Recompilación estática de Dragon Ball GT: Final Bout (PlayStation, SLUS-00493) para Windows, con panorámico, Vulkan y netplay por LAN/IP directa. Aporta tu propio disco.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Dragon%20Ball%20GT%20-%20Final%20Bout%20(USA).png",
    alt: "Dragon Ball GT: Final Bout (cover)",
    credit: "Box art",
  },
};
