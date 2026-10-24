import type { Port } from "@/lib/ports/schema";

export const openGoal: Port = {
  schema: "port",
  id: "open-goal",
  title: "OpenGOAL",
  game: "Jak and Daxter / Jak II / Jak 3",
  developers: ["Naughty Dog"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2001,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.3.8", date: "2026-09-20" },
  sources: ["https://github.com/open-goal/jak-project"],
  website: "https://opengoal.dev",
  docs: "https://opengoal.dev/docs/intro",
  discord: "https://discord.gg/VZbXMHXzWv",
  license: { spdx: "ISC" },
  verified: true,
  verifiedAt: "2026-09-30",
  originalSystems: ["PlayStation 2"],
  features: [
    "Original GOAL code decompiled and recompiled for x86-64",
    "Jak and Daxter treated as complete, Jak II in beta, Jak 3 in progress",
    "Asset extraction and repacking tools shipped in the repository",
  ],
  featuresEs: [
    "Código GOAL original decompilado y recompilado para x86-64",
    "Jak and Daxter considerada completa, Jak II en beta, Jak 3 en progreso",
    "Herramientas de extracción y reempaquetado de recursos incluidas en el repositorio",
  ],
  summary: "Jak and Daxter is a platform video game franchise created by Andy Gavin and Jason Rubin and owned by Sony Interactive Entertainment. The series was originally developed by Naughty Dog with a number of installments being outsourced to Ready at Dawn and High Impact Games. The first game, Jak and Daxter: The Precursor Legacy, released on December 4, 2001, was one of the earliest titles for the PlayStation 2, and the series collectively is regarded as a defining franchise for the console.",
  summaryEs: "Jak and Daxter es una serie de videojuegos creada por Naughty Dog. Hay tres juegos de la serie principal y tres spin-off, aunque estos también se consideran parte del argumento de la serie principal.",
  cover: {
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Jak_and_Daxter_logo_black.svg/960px-Jak_and_Daxter_logo_black.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    alt: "Jak and Daxter / Jak II / Jak 3 (box art)",
    credit: "Wikipedia",
  },
  notes:
    "Decompilation of the Jak trilogy from Naughty Dog's GOAL language, running on PC. Needs your own PS2 disc of each game; PS3, PS4 and PS5 releases are not supported.",
  notesEs:
    "Decompilación de la trilogía Jak del lenguaje GOAL de Naughty Dog, ejecutándose en PC. Necesita tu propio disco de PS2 de cada juego; las versiones de PS3, PS4 y PS5 no están soportadas.",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/open-goal/jak-project/master/docs/img/promosmall1.png",
      alt: "Jak and Daxter running on OpenGOAL",
      credit: "OpenGOAL",
    },
    {
      src: "https://raw.githubusercontent.com/open-goal/jak-project/master/docs/img/promosmall2.png",
      alt: "Jak II running on OpenGOAL",
      credit: "OpenGOAL",
    },
  ],
};
