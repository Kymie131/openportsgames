import type { Port } from "@/lib/ports/schema";

export const newSuperMarioBrosWiiRecomp: Port = {
  schema: "port",
  id: "new-super-mario-bros-wii-recomp",
  title: "New Super Mario Bros. Wii Recompiled",
  game: "New Super Mario Bros. Wii",
  developers: ["WitherBlitz"],
  publisher: "Nintendo",
  originalYear: 2009,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/WitherBlitz/NSMB-Wii-Multiplayer-Recompilation"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Wii"],
  summary: "New Super Mario Bros. Wii is a 2009 platform game developed and published by Nintendo for the Wii. A follow-up to New Super Mario Bros., it was first released in Australia, North America, and Europe in November 2009, followed by Japan a month later. It was released on the Wii U's Virtual Console in 2016, though only in Europe, Australia and Japan. A port in high definition resolution for the Nvidia Shield TV was released only in China in December 2017.",
  summaryEs: "New Super Mario Bros. Wii es un videojuego de plataformas desarrollado y publicado por Nintendo para la Wii. Se trata de la secuela de New Super Mario Bros. y salió a la venta en Australia, Norteamérica y Europa en noviembre de 2009, seguido de Japón un mes después. En 2016 debutó para la Consola Virtual de Wii U, aunque solo en Europa, Australia y Japón. En diciembre de 2017 lanzaron una versión en alta definición para la Nvidia Shield TV solo en China.",
  notes:
    "Static recompilation of New Super Mario Bros. Wii built on WiiCompiled, running natively on Windows and Android, with multiplayer. It needs your own game data.",
  notesEs:
    "Recompilación estática de New Super Mario Bros. Wii construida sobre WiiCompiled, que corre de forma nativa en Windows y Android, con multijugador. Necesita tus propios datos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/8f/NewSuperMarioBrosWiiBoxart.png",
    alt: "New Super Mario Bros. Wii (cover)",
    credit: "Wikipedia",
  },
};
