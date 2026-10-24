import type { Port } from "@/lib/ports/schema";

export const marioKart8DeluxeRecomp: Port = {
  schema: "port",
  id: "mario-kart-8-deluxe-recomp",
  title: "Mario Kart 8 Deluxe Recompiled",
  game: "Mario Kart 8 Deluxe",
  developers: ["dougchansan"],
  publisher: "Nintendo",
  originalYear: 2017,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/dougchansan/mk8-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Wii U"],
  summary: "Mario Kart 8 is a 2014 kart racing game developed and published by Nintendo for the Wii U. It retains the gameplay of previous Mario Kart games, with players controlling characters from the Mario series and other Nintendo characters in races around tracks. Tracks are themed around locales from the Super Mario series populated with power-ups that help players gain advantages in races. Different difficulties are selectable prior to a race; harder difficulties make gameplay faster. In the new anti-gravity sequences, players drive on walls and ceilings.",
  summaryEs: "Mario Kart 8 Deluxe es un videojuego de carreras desarrollado y publicado por Nintendo para la consola Nintendo Switch. Es la undécima entrega de la serie Mario Kart, novena en consolas de Nintendo, y hasta el momento, el videojuego más vendido de la consola, lanzado mundialmente el 28 de abril de 2017. Cuenta con todo lo visto previamente en Mario Kart 8. Aunque no incluye nuevas pistas de carreras incluye nuevos personajes y un mejorado modo batalla..",
  notes:
    "Static recompilation of Mario Kart 8 Deluxe (AArch64 to x86-64) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Mario Kart 8 Deluxe (AArch64 a x86-64) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/b/b5/MarioKart8Boxart.jpg",
    alt: "Mario Kart 8 (cover)",
    credit: "Wikipedia",
  },
};
