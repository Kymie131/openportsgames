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
  platforms: ["windows"],
  status: "alpha",
  release: { version: "0.4.0", date: "2026-10-03" },
  sources: ["https://github.com/arcanite24/pinyon-shift"],
  license: { spdx: "BSD-3-Clause" },
  verified: true,
  verifiedAt: "2026-10-03",
  originalSystem: "Xbox 360",
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
