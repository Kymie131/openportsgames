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
  originalSystem: "PlayStation 2",
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
