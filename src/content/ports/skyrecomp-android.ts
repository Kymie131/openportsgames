import type { Port } from "@/lib/ports/schema";

export const skyrecompAndroid: Port = {
  schema: "port",
  id: "skyrecomp-android",
  title: "Sky Recomp (Android)",
  game: "The Legend of Zelda: Skyward Sword HD",
  developers: ["printfFriendo"],
  publisher: "Nintendo",
  originalYear: 2021,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "alpha",
  release: { version: "1.0.9", date: "2026-11-12" },
  sources: ["https://github.com/printfFriendo/SkyRecomp-Android"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-16",
  originalSystems: ["Nintendo Switch"],
  summary:
    "The Legend of Zelda: Skyward Sword is a 2011 action-adventure game developed and published by Nintendo for the Wii. A mainline entry in The Legend of Zelda series, Skyward Sword is the first game in the Zelda timeline, and details the origins of the Triforce and the Master Sword. The series main protagonist Link, a resident of a floating town called Skyloft, sets out to rescue his childhood friend Zelda after she is kidnapped and brought to the abandoned lands below the clouds.",
  summaryEs:
    "The Legend of Zelda: Skyward Sword es un videojuego de acción y aventura de 2011 de la serie The Legend of Zelda, desarrollado por la filial Nintendo EAD en colaboración con Tantalus Media y publicado por Nintendo para la consola Wii. Fue lanzado el 18 de noviembre de 2011 en Europa y el 20 de noviembre de 2011 en América.",
  notes:
    "Android continuation of Sky Recomp for Skyward Sword HD, with a standalone launcher and an NSP extractor. It requires your own 1.0.0 or 1.0.1 copy of the game and ships no game files.",
  notesEs:
    "Continuación Android de Sky Recomp para Skyward Sword HD, con launcher autónomo y extractor de NSP. Requiere tu propia copia 1.0.0 o 1.0.1 del juego y no incluye archivos del juego.",
  related: ["apolinario-coder-skyrecomp"],
  cover: {
    src: "https://openportsgames.com/covers/generated/the-legend-of-zelda-skyward-sword-hd.svg",
    alt: "The Legend of Zelda: Skyward Sword HD (generated cover)",
    credit: "OpenPortsGames",
  },
};
