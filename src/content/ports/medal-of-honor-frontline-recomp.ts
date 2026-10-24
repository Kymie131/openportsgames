import type { Port } from "@/lib/ports/schema";

export const medalOfHonorFrontlineRecomp: Port = {
  schema: "port",
  id: "medal-of-honor-frontline-recomp",
  title: "Medal of Honor: Frontline Recompiled",
  game: "Medal of Honor: Frontline",
  developers: ["ant0-blase"],
  publisher: "Electronic Arts",
  originalYear: 2002,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/ant0-blase/MOHFrontline-GC-RECOMP"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["GameCube"],
  summary: "Medal of Honor: Frontline is a first-person shooter video game in the Medal of Honor series, developed by EA Los Angeles and published by Electronic Arts. It was released in North America for the PlayStation 2 on May 29, 2002, and for the GameCube and Xbox on November 7, 2002. The player character is Lt. Jimmy Patterson, from the American Office of Strategic Services. Frontline takes place during the events of the first game and chronicles Patterson's journey as he fights his way across Europe into Nazi Germany during World War II.",
  summaryEs: "Medal of Honor: Frontline es el cuarto título del videojuego de la serie Medal of Honor, publicado por Electronic Arts en noviembre de 2002 y la segunda, donde el jugador asume el papel del Teniente Jammes Patterson. La música es del compositor norteamericano Michael Giacchino.",
  notes:
    "Static recompilation of Medal of Honor: Frontline (GameCube) with ReXGlue. It requires the original game.",
  notesEs:
    "Recompilación estática de Medal of Honor: Frontline (GameCube) con ReXGlue. Requiere el juego original.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Boxarts/Medal%20of%20Honor%20-%20Frontline%20(Europe).png",
    alt: "Medal of Honor: Frontline (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Snaps/Medal%20of%20Honor%20-%20Frontline%20(Europe).png",
      alt: "Medal of Honor: Frontline (screenshot)",
      credit: "Libretro",
    },
  ],
};
