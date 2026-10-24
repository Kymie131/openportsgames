import type { Port } from "@/lib/ports/schema";

export const stardewCinderbox: Port = {
  schema: "port",
  id: "stardew-cinderbox",
  title: "Cinderbox (Stardew Valley)",
  game: "Stardew Valley",
  developers: ["Ekyso"],
  publisher: "ConcernedApe",
  originalYear: 2016,
  portType: "runtime-port",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Ekyso/Cinderbox"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "Stardew Valley is a 2016 farm life simulation video game developed by Eric \"ConcernedApe\" Barone. Players take the role of a character who inherits their deceased grandfather's dilapidated farm. The game is open-ended, with players managing the farm by clearing land, growing seasonal crops, and raising animals. Players can acquire skills in farming, foraging, fishing, mining, and combat. Social features include building relationships with townspeople, with the option to marry and have a child. A later update added multiplayer, allowing online play with others.",
  summaryEs: "Stardew Valley es un videojuego indie de simulación de granja desarrollado por Eric \"ConcernedApe\" Barone y publicado por Chucklefish Games. El juego se lanzó en primer lugar para Windows el 26 de febrero de 2016, y luego para los sistemas operativos OS X y Linux.",
  notes:
    "Native Android launcher for the desktop version of Stardew Valley, distributed as Cinderbox. It requires your own game data.",
  notesEs:
    "Lanzador nativo para Android de la versión de escritorio de Stardew Valley, distribuido como Cinderbox. Requiere tus propios datos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/f/fd/Logo_of_Stardew_Valley.png",
    alt: "Stardew Valley (box art)",
    credit: "Wikipedia",
  },
};
