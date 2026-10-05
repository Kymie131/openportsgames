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
  release: { version: "3.8.0", date: "2026-09-17" },
  sources: ["https://github.com/DabDavis/perfect-dark-dabs-mod"],
  license: { spdx: "MIT" },
  verified: true,
  verifiedAt: "2026-09-22",
  originalSystem: "Nintendo 64",
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
  notes:
    "Community decompilation of Perfect Dark with extended mod features, published as 'Dab's Mod'. The repository documents its AI-assisted development process. Requires the player's own legally obtained Perfect Dark ROM.",
  notesEs:
    "Decompilación comunitaria de Perfect Dark con funciones de mod ampliadas, publicada como 'Dab's Mod'. El repositorio documenta su proceso de desarrollo asistido por IA. Requiere la ROM de Perfect Dark obtenida legalmente por el jugador.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Perfect%20Dark%20(USA).png",
    alt: "Perfect Dark (box art)",
    credit: "Box art",
  },
};
