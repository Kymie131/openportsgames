import type { Port } from "@/lib/ports/schema";

export const nycolazsAcnhrecomp: Port = {
  schema: "port",
  id: "nycolazs-acnhrecomp",
  title: "Animal Crossing: New Horizons (ACNHRecomp)",
  game: "Animal Crossing: New Horizons",
  developers: ["Nycolazs"],
  publisher: "Nintendo",
  originalYear: 2020,
  portType: "recompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos", "android"],
  status: "alpha",
  release: { version: "0.7.0", date: "2026-11-03" },
  sources: ["https://github.com/Nycolazs/ACNHRecomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-10-23",
  originalSystems: ["Nintendo Switch"],
  summary:
    "Animal Crossing: New Horizons is a 2020 social simulation game developed and published by Nintendo for the Nintendo Switch. It is the fifth main installment in the Animal Crossing series, following Animal Crossing: New Leaf. In New Horizons, the player controls a character who moves to a deserted island after purchasing a getaway package from Tom Nook, accomplishes assigned tasks, and develops the island as they choose. They can gather and craft items, customize the island, and develop it into a community of anthropomorphic animals.",
  summaryEs:
    "Animal Crossing: New Horizons es un videojuego de simulación social desarrollado y publicado por Nintendo para Nintendo Switch, cuya fecha de lanzamiento mundial fue el 20 de marzo de 2020. Es la novena entrega de la saga Animal Crossing y la quinta dentro de los videojuegos principales.",
  downloads: [
    {
      label: "Android",
      url: "https://github.com/Nycolazs/ACNHRecomp/releases/download/v0.8.1/ACNHRecomp-v0.8.1-android.apk",
      size: "22.0 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/Nycolazs/ACNHRecomp/releases/download/v0.8.1/ACNHRecomp-v0.8.1-macOS-arm64.zip",
      size: "16.2 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/Nycolazs/ACNHRecomp/releases/download/v0.8.1/ACNHRecomp-v0.8.1-linux-x64.tar.gz",
      size: "15.6 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/Nycolazs/ACNHRecomp/releases/download/v0.8.1/ACNHRecomp-v0.8.1-windows-x64.zip",
      size: "14.5 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/animal-crossing-new-horizons.svg",
    alt: "Animal Crossing: New Horizons (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Static recompilation of Animal Crossing: New Horizons for Windows, Linux, macOS (Apple silicon) and Android. Version 0.7.0 adds amiibo support from your own dumps, time travel and a native 60 fps mode, and fixes Android black screens. The game supports versions 3.0.2, 3.0.3, 2.0.7 and 1.0.0; playing requires the project's ACNHRecomp-Importer, distributed through its Discord. This is a work-in-progress fan port: back up your saves. No game code, keys or firmware are included.",
  notesEs:
    "Recompilación estática de Animal Crossing: New Horizons para Windows, Linux, macOS (Apple silicon) y Android. La versión 0.7.0 añade compatibilidad con amiibo a partir de tus propios volcados, viaje en el tiempo y un modo nativo a 60 fps, y corrige las pantallas negras en Android. El juego admite las versiones 3.0.2, 3.0.3, 2.0.7 y 1.0.0; para jugar hace falta el ACNHRecomp-Importer del proyecto, distribuido en su Discord. Es un port fan en desarrollo: haz copia de seguridad de tus partidas. No incluye código, claves ni firmware del juego.",
};
