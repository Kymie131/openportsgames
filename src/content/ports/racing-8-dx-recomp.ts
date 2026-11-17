import type { Port } from "@/lib/ports/schema";

export const racing8DxRecomp: Port = {
  schema: "port",
  id: "racing-8-dx-recomp",
  title: "Racing 8 DX Recomp",
  game: "Mario Kart 8 Deluxe",
  developers: ["galarianpikachu2021-hue"],
  publisher: "Nintendo",
  originalYear: 2017,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "0.2.5", date: "2026-11-16" },
  sources: ["https://github.com/galarianpikachu2021-hue/Racing-8-DX-Recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-16",
  originalSystems: ["Nintendo Switch"],
  summary:
    "Mario Kart 8 is a 2014 kart racing game developed and published by Nintendo for the Wii U. It retains the gameplay of previous Mario Kart games, with players controlling characters from the Mario series and other Nintendo characters in races around tracks. Tracks are themed around locales from the Super Mario series populated with power-ups that help players gain advantages in races. Different difficulties are selectable prior to a race; harder difficulties make gameplay faster. In the new anti-gravity sequences, players drive on walls and ceilings.",
  summaryEs:
    "Mario Kart 8 Deluxe es un videojuego de carreras desarrollado y publicado por Nintendo para la consola Nintendo Switch. Es la undécima entrega de la serie Mario Kart, novena en consolas de Nintendo, y hasta el momento, el videojuego más vendido de la consola, lanzado mundialmente el 28 de abril de 2017. Cuenta con todo lo visto previamente en Mario Kart 8. Aunque no incluye nuevas pistas de carreras incluye nuevos personajes y un mejorado modo batalla..",
  notes:
    "Static recompilation of Mario Kart 8 Deluxe with FSR 3.1 and frame generation, experimental DLSS and HDR10. It requires your own base game 3.0.4 and, optionally, your own DLC; no game files are included.",
  notesEs:
    "Recompilación estática de Mario Kart 8 Deluxe con FSR 3.1 y frame generation, DLSS experimental y HDR10. Requiere tu propia copia base 3.0.4 y, opcionalmente, tus propios DLC; no incluye archivos del juego.",
  related: ["mario-kart-8-deluxe-recomp"],
  cover: {
    src: "https://openportsgames.com/covers/generated/mario-kart-8-deluxe.svg",
    alt: "Mario Kart 8 Deluxe (generated cover)",
    credit: "OpenPortsGames",
  },
};
