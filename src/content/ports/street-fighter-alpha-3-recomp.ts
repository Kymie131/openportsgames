import type { Port } from "@/lib/ports/schema";

export const streetFighterAlpha3Recomp: Port = {
  schema: "port",
  id: "street-fighter-alpha-3-recomp",
  title: "Street Fighter Alpha 3 Recompiled",
  game: "Street Fighter Alpha 3",
  developers: ["TechnicallyComputers"],
  publisher: "Capcom",
  originalYear: 1998,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/TechnicallyComputers/Street-Fighter-Alpha-3-Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Street Fighter Alpha 3, released as Street Fighter Zero 3 in Japan, Asia, South America, and Oceania, is a 1998 fighting game developed and published by Capcom for arcades. It is the third and final installment in the Street Fighter Alpha series, and runs on the same CP System II hardware as previous Alpha games. Alpha 3 further expanded the playable fighter roster from Street Fighter Alpha 2 and added new features such as selectable fighting styles called \"isms\".",
  summaryEs: "Street Fighter Alpha 3, conocido como Street Fighter Zero 3 en Japón, Asia, América del Sur y Oceanía, es un videojuego de lucha en 2D, uno contra uno, lanzado para Arcade por Capcom en 1998, para el hardware CP System II. Es parte de la serie de juegos Street Fighter, es el tercero de la serie Alpha, siendo la continuación directa de Street Fighter Alpha 2.",
  notes:
    "Static recompilation of Street Fighter Alpha 3 (PlayStation) built with the PSXRecomp toolkit. It requires a copy of the game.",
  notesEs:
    "Recompilación estática de Street Fighter Alpha 3 (PlayStation) construida con el kit PSXRecomp. Requiere una copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Street%20Fighter%20Alpha%203%20(Europe).png",
    alt: "Street Fighter Alpha 3 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Street%20Fighter%20Alpha%203%20(Europe).png",
      alt: "Street Fighter Alpha 3 (screenshot)",
      credit: "Libretro",
    },
  ],
};
