import type { Port } from "@/lib/ports/schema";

export const perfectDarkDabsMod: Port = {
  schema: "port",
  id: "perfect-dark-dabs-mod",
  title: "Dab's Mod",
  game: "Perfect Dark",
  developers: ["Rare"],
  publisher: "Nintendo",
  originalYear: 2000,
  genre: "shooter",
  openSource: true,
  portType: "decompilation",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "3.15.1", date: "2026-10-21" },
  sources: ["https://github.com/DabDavis/perfect-dark-dabs-mod"],
  license: { spdx: "MIT" },
  verified: true,
  verifiedAt: "2026-10-27",
  originalSystems: ["Nintendo 64"],
  features: [
    "Jump, combat roll, melee combos and third-person camera",
    "Combat Simulator raised to 80 simulants",
    "GE-X Plus GoldenEye remake loading from your ROM",
    "One-key bug reporting from the game",
  ],
  featuresEs: [
    "Salto, voltereta de combate, combos cuerpo a cuerpo y cámara en tercera persona",
    "Simulador de combate ampliado a 80 simulantes",
    "Remake GE-X Plus de GoldenEye cargado desde tu ROM",
    "Reporte de errores con una tecla desde el juego",
  ],
  summary: "Perfect Dark is a 2000 first-person shooter game developed and published by Rare for the Nintendo 64. The first game of the Perfect Dark series, it follows Joanna Dark, an agent of the Carrington Institute research centre, as she attempts to stop an extraterrestrial conspiracy by rival corporation dataDyne. The game features a campaign mode where the player must complete a series of levels to progress through the story, as well as a range of multiplayer options, including a co-operative mode and traditional deathmatch settings with computer-controlled bots.",
  summaryEs: "Perfect Dark es un videojuego de disparos en primera persona de 2000 desarrollado y publicado por Rare para Nintendo 64. Es el primer juego de la serie Perfect Dark y sigue a Joanna Dark, una agente del centro de investigación del Instituto Carrington, mientras intenta detener una conspiración extraterrestre por una corporación rival llamada dataDyne.",
  notes:
    "Community decompilation of Perfect Dark with extended mod features, published as 'Dab's Mod'. The repository documents its AI-assisted development process. Requires the player's own legally obtained Perfect Dark ROM.",
  notesEs:
    "Decompilación comunitaria de Perfect Dark con funciones de mod ampliadas, publicada como 'Dab's Mod'. El repositorio documenta su proceso de desarrollo asistido por IA. Requiere la ROM de Perfect Dark obtenida legalmente por el jugador.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Perfect%20Dark%20(USA).png",
    alt: "Perfect Dark (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Perfect%20Dark%20(USA).png",
      alt: "Perfect Dark (screenshot)",
      credit: "Libretro",
    },
  ],
};
