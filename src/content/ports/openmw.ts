import type { Port } from "@/lib/ports/schema";

export const openmw: Port = {
  schema: "port",
  id: "openmw",
  title: "OpenMW",
  game: "The Elder Scrolls III: Morrowind",
  developers: ["Bethesda Game Studios"],
  publisher: "Bethesda Softworks",
  originalYear: 2002,
  portType: "reimplementation",
  genre: "rpg",
  openSource: true,
  platforms: ["windows", "linux", "macos", "android"],
  status: "stable",
  release: { version: "0.51.0", date: "2026-06-19" },
  sources: ["https://github.com/OpenMW/openmw"],
  website: "https://openmw.org/",
  discord: "https://discord.gg/bWuqq2e",
  license: {
    spdx: "GPL-3.0",
  },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-19",
  screenshots: [
    {
      src: "https://openmw.org/wp-content/uploads/2022/02/screenshot029-min.png",
      alt: "A distant view across Morrowind rendered by OpenMW",
      credit: "OpenMW",
    },
    {
      src: "https://openmw.org/wp-content/uploads/2022/02/2022-01-28-1643417815-min.png",
      alt: "Godray light shafts cutting through Morrowind's sky",
      credit: "OpenMW",
    },
    {
      src: "https://openmw.org/wp-content/uploads/2022/04/screenshot865.png",
      alt: "Balmora's streetscene in Morrowind rendered by OpenMW",
      credit: "OpenMW",
    },
    {
      src: "https://openmw.org/wp-content/uploads/2022/04/screenshot052.png",
      alt: "Post-processing effects on a Morrowind ashland exterior",
      credit: "OpenMW",
    },
  ],
  notes:
    "Recreation of the Morrowind engine with mod support and an official Android build. Requires the original Morrowind game files.",
  installGuide: {
    steps: [
      "Own a copy of The Elder Scrolls III: Morrowind; the Tribunal and Bloodmoon expansions add their content too.",
      "Install the original game on your machine, any edition is fine as long as the Data Files folder ends up on disk.",
      "Install OpenMW from the official site, choosing the release build for your platform.",
      "Create a new profile in the OpenMW launcher and point it at the Morrowind Data Files directory.",
      "Launch the game from the launcher; OpenMW plays the original assets with modern rendering.",
    ],
    stepsEs: [
      "Ten una copia de The Elder Scrolls III: Morrowind; las expansiones Tribunal y Bloodmoon añaden además su contenido.",
      "Instala el juego original en tu equipo; vale cualquier edición siempre que la carpeta Data Files quede en el disco.",
      "Instala OpenMW desde el sitio oficial, eligiendo la compilación publicada para tu plataforma.",
      "Crea un nuevo perfil en el lanzador de OpenMW y apúntalo al directorio Data Files de Morrowind.",
      "Inicia el juego desde el lanzador; OpenMW reproduce los recursos originales con renderizado moderno.",
    ],
  },
};
