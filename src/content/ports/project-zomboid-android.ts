import type { Port } from "@/lib/ports/schema";

export const projectZomboidAndroid: Port = {
  schema: "port",
  id: "project-zomboid-android",
  title: "Project Zomboid (Android)",
  game: "Project Zomboid",
  developers: ["udarmolota"],
  publisher: "The Indie Stone",
  originalYear: 2013,
  portType: "runtime-port",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/udarmolota/zomdroid"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "Project Zomboid is an upcoming survival video game developed by British and Canadian independent developer The Indie Stone. The game is set in 1993 in the post-apocalyptic, zombie-infested exclusion zone of the fictional Knox Country, Kentucky, in the United States. The player is challenged to survive for as long as possible before inevitably dying.",
  summaryEs: "Project Zomboid es un videojuego de supervivencia isométrico de mundo abierto desarrollado por el estudio independiente británico y canadiense The Indie Stone. El videojuego se desarrolla en la zona de exclusión postapocalíptica e infestada de zombis en una versión ficticia de Knox County, Kentucky, donde el jugador tiene el desafío de sobrevivir el mayor tiempo posible antes de morir. Fue uno de los primeros cinco videojuegos lanzados en la sección de financiación alfa del portal de videojuegos Desura.",
  notes:
    "Unofficial Android launcher for Project Zomboid. It needs a purchased copy of the desktop game and its files.",
  notesEs:
    "Lanzador no oficial para Android de Project Zomboid. Necesita una copia comprada del juego de escritorio y sus archivos.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/0/0c/Boxshot_of_video_game_Project_zomboid.jpg",
    alt: "Project Zomboid (box art)",
    credit: "Wikipedia",
  },
};
