import type { Port } from "@/lib/ports/schema";

export const chameleonTwistRecomp: Port = {
  schema: "port",
  id: "chameleon-twist-recomp",
  title: "Chameleon Twist",
  game: "Chameleon Twist",
  developers: ["Rainchus"],
  publisher: "Sunsoft",
  originalYear: 1997,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Rainchus/ChameleonTwist1-JP-Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Nintendo 64"],
  summary: "Chameleon Twist is a 1997 video game developed by Japan System Supply, published by Japan System Supply in Japan, and published by Sunsoft in North America and Europe for the Nintendo 64.",
  summaryEs: "Chameleon Twist es un videojuego de plataformas de aspecto infantil lanzado para Nintendo 64 en 1997. El protagonista del juego es un camaleón llamado Davy quien sigue a un conejo dentro de un mágico agujero encontrando en él una extraña nueva tierra adoptando repentinamente una forma humana al entrar en el mundo. Fue uno de los primeros juegos en salir después del lanzamiento de la consola. Respecto a la calidad gráfica y sonora no consiguió exprimir el potencial de la consola. El juego tiene una secuela, Chameleon Twist 2, que salió en 1999.",
  notes:
    "Static recompilation of Chameleon Twist (N64) with N64Recomp and the RT64 renderer. It requires a copy of the game.",
  notesEs:
    "Recompilación estática de Chameleon Twist (N64) con N64Recomp y el renderizador RT64. Requiere una copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Chameleon%20Twist%20(Europe).png",
    alt: "Chameleon Twist (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Chameleon%20Twist%20(Europe).png",
      alt: "Chameleon Twist (screenshot)",
      credit: "Libretro",
    },
  ],
};
