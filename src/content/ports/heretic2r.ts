import type { Port } from "@/lib/ports/schema";

export const heretic2r: Port = {
  schema: "port",
  id: "heretic2r",
  title: "Heretic2R",
  game: "Heretic II",
  developers: ["m-x-d"],
  publisher: "Activision",
  originalYear: 1998,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/m-x-d/Heretic2R"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  summary:
    "Heretic II is an action-adventure game developed by Raven Software and published by Activision in 1998. It continues Corvus's story with third-person combat and a redesigned magic system.",
  summaryEs:
    "Heretic II es un juego de acción y aventura desarrollado por Raven Software y publicado por Activision en 1998. Continúa la historia de Corvus con combate en tercera persona y un sistema de magia renovado.",
  cover: {
    src: "https://openportsgames.com/covers/generated/heretic2r.svg",
    alt: "Heretic2R (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Heretic2R is a reverse-engineered source port of Heretic II with widescreen support and a framerate decoupled from network updates. It needs the original game data updated to v1.06.",
  notesEs:
    "Heretic2R es un port del código fuente reconstruido por ingeniería inversa de Heretic II, con pantalla ancha y framerate independiente de la red. Necesita los datos originales actualizados a la v1.06.",
};
