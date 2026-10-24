import type { Port } from "@/lib/ports/schema";

export const kirby64Recomp: Port = {
  schema: "port",
  id: "kirby-64-recomp",
  title: "Kirby 64 Recompiled",
  game: "Kirby 64: The Crystal Shards",
  developers: ["Kirby64Ret"],
  publisher: "Nintendo",
  originalYear: 2000,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Kirby64Ret/Kirby64Recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  summary: "Kirby 64: The Crystal Shards is a 2000 platform game developed by HAL Laboratory and published by Nintendo for the Nintendo 64 (N64). It is the first Kirby game to feature 3D computer graphics and follows Kirby as he attempts to reassemble a sacred crystal shattered by Dark Matter. Gameplay is viewed from a 2.5D perspective and is similar to previous Kirby titles; the player traverses levels and obtains powers by eating enemies. Kirby 64 introduces Power Combos, the ability to mix powers to create more powerful ones. In a multiplayer mode, up to four players can compete in three minigames.",
  summaryEs: "Kirby 64: The Crystal Shards es un videojuego de plataformas desarrollado por HAL Laboratory y publicado por Nintendo para la Nintendo 64 (N64). Es el primer juego de Kirby que cuenta con gráficos 3D generados por ordenador y sigue las aventuras del protagonista mientras intenta recomponer un cristal sagrado destrozado por Dark Matter. La mecánica se ve desde una perspectiva 2.5D y es similar a la de títulos anteriores; el jugador recorre los niveles y obtiene poderes al comerse a los enemigos.",
  notes:
    "Static recompilation of Kirby 64: The Crystal Shards (Nintendo 64) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Kirby 64: The Crystal Shards (Nintendo 64) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Hoshi%20no%20Kirby%2064%20(Japan)%20(Rev%202).png",
    alt: "Kirby 64: The Crystal Shards (box art)",
    credit: "Box art",
  },
};
