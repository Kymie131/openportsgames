import type { Port } from "@/lib/ports/schema";

export const minecraftStoryModePsp: Port = {
  schema: "port",
  id: "minecraft-story-mode-psp",
  title: "Minecraft: Story Mode (PSP)",
  game: "Minecraft: Story Mode",
  developers: ["entitybtw"],
  publisher: "Telltale Games",
  originalYear: 2015,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["psp"],
  status: "beta",
  release: { version: "1.7", date: "2025-12-31" },
  sources: ["https://github.com/entitybtw/mcsm_portable"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  downloads: [
    {
      label: "cleanversion",
      url: "https://github.com/entitybtw/mcsm_portable/releases/download/1.7/cleanversion.zip",
      size: "233.1 MB",
    },
    {
      label: "ep4_ellegaard",
      url: "https://github.com/entitybtw/mcsm_portable/releases/download/1.7/ep4_ellegaard.zip",
      size: "1740.4 MB",
    },
    {
      label: "ep4_magnus",
      url: "https://github.com/entitybtw/mcsm_portable/releases/download/1.7/ep4_magnus.zip",
      size: "1748.4 MB",
    },
    {
      label: "episode1",
      url: "https://github.com/entitybtw/mcsm_portable/releases/download/1.7/episode1.zip",
      size: "1111.2 MB",
    },
    {
      label: "episode2",
      url: "https://github.com/entitybtw/mcsm_portable/releases/download/1.7/episode2.zip",
      size: "1178.6 MB",
    },
    {
      label: "episode3",
      url: "https://github.com/entitybtw/mcsm_portable/releases/download/1.7/episode3.zip",
      size: "1204.0 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/0/04/Minecraft_Story_Mode_cover.jpeg",
    alt: "Minecraft: Story Mode (box art)",
    credit: "Wikipedia",
  },
  summary: "Minecraft: Story Mode is a discontinued episodic point-and-click video game developed and published by Telltale Games, based on Mojang Studios' sandbox game Minecraft. The first five episodes were released from October 2015 to March 2016, and an additional three episodes were released as downloadable content (DLC) in mid-2016. A second season consisting of five episodes was released from July to December 2017.",
  summaryEs: "Minecraft: Story Mode es un videojuego point-and-click desarrollada y publicada por Telltale Games. Está basado en el videojuego Minecraft. Es un videojuego gráfico de aventura similar a otros juegos de Telltale Games, lanzado como una serie de episodios. El jugador recogerá artículos, resolverá puzles y hablará con personajes que no son jugadores a través de árboles de conversación para aprender sobre la historia y determinar qué hacer a continuación.",
  notes: "Minecraft: Story Mode (Telltale Games, 2015) running on PlayStation Portable through source port. Latest release: 1.7. You need your own copy of the game.",
  notesEs: "Minecraft: Story Mode (Telltale Games, 2015) en PlayStation Portable mediante port de código. Última release: 1.7. Necesitas tu propia copia del juego.",
};
