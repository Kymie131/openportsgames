import type { Port } from "@/lib/ports/schema";

export const dk64Recompiled: Port = {
  schema: "port",
  id: "dk64-recompiled",
  title: "DK64 Recompiled",
  game: "Donkey Kong 64",
  developers: ["Rare"],
  publisher: "Nintendo",
  originalYear: 1999,
  genre: "platformer",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.0.3", date: "2026-09-30" },
  sources: ["https://github.com/Rainchus/Donkey-Kong-64-Recompiled"],
  license: { spdx: "GPL-3.0" },
  verified: true,
  verifiedAt: "2026-09-22",
  originalSystems: ["Nintendo 64"],
  features: [
    "Windows, Linux (x86-64/ARM64/Flatpak) and macOS ARM64 builds",
    "High refresh rates without affecting gameplay",
    "Widescreen and ultrawide with a repositionable HUD",
    "In-game config menus and instant saves",
  ],
  featuresEs: [
    "Builds para Windows, Linux (x86-64/ARM64/Flatpak) y macOS ARM64",
    "Refrescos altos sin afectar la jugabilidad",
    "Panorámico y ultrapanorámico con HUD reposicionable",
    "Menús de configuración en el juego y guardados instantáneos",
  ],
  summary: "Donkey Kong 64 is a 1999 platform game developed by Rare and published by Nintendo for the Nintendo 64. It is the first Donkey Kong game to feature 3D gameplay. As the gorilla Donkey Kong, the player explores themed levels to collect items and rescue his family members from the crocodile King K. Rool. The player completes minigames and puzzles as five playable Kong characters—each with their own special abilities—to receive bananas and other collectibles. In multiplayer modes, up to four players can compete in deathmatch and last man standing games.",
  summaryEs: "Donkey Kong 64 es un videojuego de plataformas de 1999 desarrollado por Rare y publicado por Nintendo para Nintendo 64. Es el primer juego en 3D de la serie Donkey Kong. Como el gorila Donkey Kong, se explora niveles temáticos para recolectar artículos y rescatar a sus amigos secuestrados por el rey K. Rool. El jugador completa minijuegos y rompecabezas como cinco personajes Kong jugables, cada uno con sus propias habilidades especiales, para recibir plátanos y otros objetos coleccionables.",
  notes:
    "Native recompilation of Donkey Kong 64 produced with N64Recomp. The player loads their own legally obtained N64 ROM; the port recompiles the game code instead of emulating it.",
  notesEs:
    "Recompilación nativa de Donkey Kong 64 realizada con N64Recomp. El jugador carga su propia ROM de N64 obtenida legalmente; el port recompila el código del juego en lugar de emularlo.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Donkey%20Kong%2064%20(USA).png",
    alt: "Donkey Kong 64 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Donkey%20Kong%2064%20(USA).png",
      alt: "Donkey Kong 64 (screenshot)",
      credit: "Libretro",
    },
  ],
};
