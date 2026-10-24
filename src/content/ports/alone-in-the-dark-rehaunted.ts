import type { Port } from "@/lib/ports/schema";

export const aloneInTheDarkRehaunted: Port = {
  schema: "port",
  id: "alone-in-the-dark-rehaunted",
  title: "Alone in the Dark ReHaunted",
  game: "Alone in the Dark",
  developers: ["spacefarergames"],
  publisher: "Infogrames",
  originalYear: 1992,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/spacefarergames/AloneInTheDarkReHaunted"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["MS-DOS"],
  summary: "Alone in the Dark is a 1992 survival horror video game designed by Frédérick Raynal. Developed and published by Infogrames in 1992 for MS-DOS, the game was eventually ported to Mac OS, the PC-98, the FM Towns, the 3DO, RISC OS, and iOS. Alone in the Dark is set in 1920s Louisiana and challenges the player to escape a haunted mansion. To advance, the player must solve puzzles while banishing, slaying, or eluding various ghosts and monsters. The player can collect and use weapons, manage a weight-based inventory system, and explore a partially nonlinear map.",
  summaryEs: "Alone in the Dark es un videojuego desarrollado por Infogrames en 1992 para PC. Fue precursor del género terror y supervivencia junto al videojuego Sweet Home desarrollado por Capcom en 1989, y cuyos mayores exponentes en un futuro serían Resident Evil de Capcom y Silent Hill de Konami.",
  notes:
    "Enhanced port and dynamic recompilation of the original Alone in the Dark (1992), with textured models, HD backgrounds, quality-of-life options and controller support. It needs the game itself.",
  notesEs:
    "Port mejorado y recompilación dinámica del Alone in the Dark original (1992), con modelos texturizados, fondos en HD, opciones de comodidad y soporte de mando. Necesita el propio juego.",
  cover: {
    src: "https://thumbnails.libretro.com/DOS/Named_Boxarts/Alone%20in%20the%20Dark%20(1992).png",
    alt: "Alone in the Dark (box art)",
    credit: "Box art",
  },
};
