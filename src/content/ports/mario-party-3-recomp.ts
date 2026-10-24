import type { Port } from "@/lib/ports/schema";

export const marioParty3Recomp: Port = {
  schema: "port",
  id: "mario-party-3-recomp",
  title: "Mario Party 3 Recompiled",
  game: "Mario Party 3",
  developers: ["Rainchus"],
  publisher: "Nintendo",
  originalYear: 2000,
  portType: "recompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Rainchus/MarioParty3-Recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  summary: "Mario Party 3 is a 2000 party video game developed by Hudson Soft and published by Nintendo for the Nintendo 64. The third installment in the Mario Party series, it was first released in Japan on December 7, 2000, in North America on May 7, 2001, in Australia on September 3, 2001, and in Europe on November 16, 2001. As with the previous installments, the player chooses between eight playable characters: Mario, Luigi, Princess Peach, Yoshi, Wario, and Donkey Kong from the first two games, alongside newcomers Princess Daisy and Waluigi.",
  summaryEs: "Mario Party 3 es un videojuego de tablero desarrollado por Hudson Soft y distribuido por Nintendo. Es la tercera entrega de la serie Mario Party y la última que salió para la consola Nintendo 64. En Europa fue lanzado el 16 de noviembre de 2001 y con un cierto retraso, pues en Japón ya había salido el juego desde el 7 de diciembre de 2000 y en Norteamérica desde el 7 de mayo de 2001, habiendo pasado medio año desde su salida en Norteamérica y casi un año desde su salida en tierras niponas. Además, fue el último juego de Nintendo 64 que vio la luz en Europa y Japón.",
  notes:
    "Static recompilation of Mario Party 3 (Nintendo 64) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Mario Party 3 (Nintendo 64) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Mario%20Party%203%20(USA)%20(LodgeNet).png",
    alt: "Mario Party 3 (box art)",
    credit: "Box art",
  },
};
