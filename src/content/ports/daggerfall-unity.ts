import type { Port } from "@/lib/ports/schema";

export const daggerfallUnity: Port = {
  schema: "port",
  id: "daggerfall-unity",
  title: "Daggerfall Unity",
  game: "The Elder Scrolls II: Daggerfall",
  developers: ["Bethesda Softworks"],
  publisher: "Bethesda Softworks",
  originalYear: 1996,
  portType: "reimplementation",
  genre: "rpg",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.1.1-cve-2025", date: "2025-10-05" },
  sources: ["https://github.com/Interkarma/daggerfall-unity"],
  website: "https://www.dfworkshop.net/",
  docs: "https://github.com/Interkarma/daggerfall-unity/wiki",
  license: {
    spdx: "MIT",
    note: "game assets remain under their original license",
  },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-19",
  screenshots: [
    {
      src: "https://www.dfworkshop.net/wp-content/uploads/2023/12/screen-scaled.jpg",
      alt: "A Daggerfall exterior at the coast rendered by Daggerfall Unity",
      credit: "Daggerfall Workshop",
    },
    {
      src: "https://www.dfworkshop.net/wp-content/uploads/2021/11/image-17-1024x576.png",
      alt: "Privateer's Hold dungeon corridor lit by torches in Daggerfall Unity",
      credit: "Daggerfall Workshop",
    },
    {
      src: "https://www.dfworkshop.net/wp-content/uploads/2021/11/image-19-1024x576.png",
      alt: "ColorBoost dungeon lighting ramping into darkness in Daggerfall Unity",
      credit: "Daggerfall Workshop",
    },
    {
      src: "https://www.dfworkshop.net/wp-content/uploads/2021/11/image-21-1024x576.png",
      alt: "Retro mode at 320x200 with ColorBoost post-processing in Daggerfall Unity",
      credit: "Daggerfall Workshop",
    },
  ],
  notes:
    "Open source recreation of Daggerfall on the Unity engine, now free to play for everyone. The Daggerfall Unity Installer bundles the required game data.",
  installGuide: {
    steps: [
      "Install the Daggerfall Unity Installer from the project's releases; Daggerfall itself is freeware and the installer handles the data.",
      "Point the installer at an existing Daggerfall installation if you have one, otherwise let it download the free release.",
      "Choose the optional mods and classic-difficulty options you prefer, then launch the game.",
    ],
    stepsEs: [
      "Instala el instalador de Daggerfall Unity desde las publicaciones del proyecto; Daggerfall es freeware y el instalador se encarga de los datos.",
      "Señala al instalador una instalación existente de Daggerfall si tienes una; si no, deja que descargue la versión gratuita.",
      "Elige los mods opcionales y las opciones de dificultad clásica que prefieras y, después, inicia el juego.",
    ],
  },
};
