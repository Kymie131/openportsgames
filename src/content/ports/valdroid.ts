import type { Port } from "@/lib/ports/schema";

export const valdroid: Port = {
  schema: "port",
  id: "valdroid",
  title: "ValDroid",
  game: "Valheim",
  developers: ["udarmolota"],
  publisher: "Iron Gate Studio",
  originalYear: 2021,
  portType: "runtime-port",
  genre: "open-world",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/udarmolota/ValDroid"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "Valheim is a survival game by the Swedish developer Iron Gate Studio and published by Coffee Stain Publishing. It was released in early access for Linux and Microsoft Windows via Steam on 2 February 2021, and for Xbox One and Xbox Series X/S on 14 March 2023. The full version was released on 9 September 2026 alongside versions for the PlayStation 5 and Nintendo Switch 2.",
  summaryEs: "Valheim es un videojuego de supervivencia y sandbox del desarrollado por el estudio sueco Iron Gate Studio y publicado por Coffee Stain Studios. Se lanzó en acceso anticipado el 2 de febrero de 2021 para Linux y Windows a través de Steam, y para Xbox One y Xbox Series X/S el 14 de marzo de 2023. El juego fue desarrollado por un equipo de cinco personas, basándose en el trabajo de desarrollo que el CEO del estudio, Richard Svensson, había realizado como proyecto paralelo en su tiempo libre.",
  notes:
    "Unofficial Android launcher for Valheim. It requires the desktop game files from your own copy.",
  notesEs:
    "Lanzador no oficial para Android de Valheim. Requiere los archivos del juego de escritorio de tu propia copia.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/77/Valheim_2021_logo.jpg",
    alt: "Valheim (box art)",
    credit: "Wikipedia",
  },
};
