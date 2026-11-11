import type { Port } from "@/lib/ports/schema";

export const xMenLegendsRecomp: Port = {
  schema: "port",
  id: "x-men-legends-recomp",
  title: "X-Men Legends Recompiled",
  game: "X-Men Legends",
  developers: ["GTTeancum"],
  publisher: "Activision",
  originalYear: 2004,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "1.0.1", date: "2026-10-31" },
  sources: ["https://github.com/GTTeancum/OpenXML1xbox"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Xbox"],
  summary: "X-Men Legends is an action role-playing video game developed by Raven Software and published by Activision. It was released on the GameCube, PlayStation 2 and Xbox consoles in 2004. Barking Lizards Technologies developed the N-Gage port of the game, which was released in early 2005. Players can play as one of fifteen X-Men characters, with the ability to switch between four computer- or human-controlled characters at any time.",
  summaryEs: "X-Men Legends es un videojuego de rol de acción desarrollado por Raven Software y publicado por Activision. Fue lanzado en las consolas GameCube, PlayStation 2 y Xbox en 2004. Barking Lizards Technologies desarrolló el puerto N-Gage del juego, que fue lanzado a principios de 2005. Los jugadores pueden jugar como uno de los quince personajes de X-Men de Marvel Comics, con la habilidad para cambiar entre cuatro personajes controlados por computadora o humanos en cualquier momento.",
  notes: "Static recompilation of X-Men Legends (Xbox) with ReXGlue. It requires the game itself.",
  notesEs: "Recompilación estática de X-Men Legends (Xbox) con ReXGlue. Requiere el propio juego.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/GTTeancum/XML1-recomp/releases/download/1.0.1/XML1-recomp-1.0.1-texture-template.zip",
      size: "138.7 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/GTTeancum/XML1-recomp/releases/download/1.0.1/XML1-recomp-1.0.1-win64.zip",
      size: "42.7 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Microsoft%20-%20Xbox/Named_Boxarts/X-Men%20Legends%20(USA).png",
    alt: "X-Men Legends (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Microsoft%20-%20Xbox/Named_Snaps/X-Men%20Legends%20(USA).png",
      alt: "X-Men Legends (screenshot)",
      credit: "Libretro",
    },
  ],
};
