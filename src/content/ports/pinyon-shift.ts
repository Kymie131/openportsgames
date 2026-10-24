import type { Port } from "@/lib/ports/schema";

export const pinyonShift: Port = {
  schema: "port",
  title: "Pinyon Shift",
  id: "pinyon-shift",
  game: "Forza Horizon",
  developers: ["arcanite24"],
  publisher: "Microsoft Studios",
  originalYear: 2012,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos", "android"],
  status: "alpha",
  release: { version: "0.5.1", date: "2026-10-12" },
  sources: ["https://github.com/arcanite24/pinyon-shift"],
  license: { spdx: "BSD-3-Clause" },
  verified: true,
  verifiedAt: "2026-10-14",
  originalSystems: ["Xbox 360"],
  summary: "Forza Horizon is a 2012 racing video game developed by Playground Games and published by Microsoft Studios for the Xbox 360 on 23 October 2012. The game is the fifth instalment of the Forza series, having originally spun-off from Turn 10 Studios-developed Forza Motorsport titles. Taking place during the fictitious Horizon Festival, a street racing event, the player's aim is to progress via winning races, while also increasing their popularity level by performing stunts and activities.",
  summaryEs: "Forza Horizon es un videojuego de carreras de mundo abierto para los dispositivos Xbox 360. Desarrollado principalmente por el desarrollador de juegos británico Playground Games y el desarrollador indie Rodrigo Martínez en asociación con Turn 10 Studios, el juego es parte de la franquicia de Forza Motorsport, pero se considera más un spin-off en lugar del siguiente juego de la serie.",
  notes:
    "Playable preview of a static recompilation of Forza Horizon (Xbox 360) for PC, distributed as versioned releases. The port code is public (BSD-3-Clause), but the game itself is proprietary: you must supply your own Xbox 360 copy, and the repository ships no game content. Several similarly named forks exist; this is the original repository.",
  notesEs:
    "Vista previa jugable de una recompilación estática de Forza Horizon (Xbox 360) para PC, distribuida como releases versionadas. El código del port es público (BSD-3-Clause), pero el juego es propietario: debes aportar tu propia copia de Xbox 360, y el repositorio no incluye contenido del juego. Existen varios forks con un nombre parecido; este es el repositorio original.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/77/Forza_Horizon_boxart.jpg",
    alt: "Forza Horizon (box art)",
    credit: "Wikipedia",
  },
};
