import type { Port } from "@/lib/ports/schema";

export const starWarsJediPowerBattlesRecomp: Port = {
  schema: "port",
  id: "star-wars-jedi-power-battles-recomp",
  title: "Jedi Power Battles Recompiled",
  game: "Star Wars Episode I: Jedi Power Battles",
  developers: ["PortsDR"],
  publisher: "LucasArts",
  originalYear: 2000,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: [
    "https://github.com/TechnicallyComputers/Star-wars---Episode-I---Jedi-Power-Battles-Recomp",
  ],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  summary: "Star Wars Episode I: Jedi Power Battles is a 2000 action video game based on the 1999 film Star Wars: Episode I – The Phantom Menace. It was released for the PlayStation and Dreamcast in 2000, followed by the Game Boy Advance in 2001. A remastered version of the game was released for Windows, Nintendo Switch, PlayStation 4, PlayStation 5, Xbox One, and Xbox Series X/S in January 2025.",
  summaryEs: "Star Wars Episodio I: Jedi Power Battles es un juego de aventura y acción basado en la película Star Wars Episodio I: La amenaza fantasma. El videojuego salió a la venta para las consolas PlayStation, Dreamcast y Game Boy Advance",
  notes: "Indexed by PortsDR. No official repository is available, and it needs your own copy.",
  notesEs: "Indexado en PortsDR. No hay repositorio oficial disponible y necesita tu propia copia.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Star%20Wars%20-%20Episode%20I%20-%20Jedi%20Power%20Battles%20(Europe).png",
    alt: "Star Wars Episode I: Jedi Power Battles (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Star%20Wars%20-%20Episode%20I%20-%20Jedi%20Power%20Battles%20(Europe).png",
      alt: "Star Wars Episode I: Jedi Power Battles (screenshot)",
      credit: "Libretro",
    },
  ],
};
