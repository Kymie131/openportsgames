import type { Port } from "@/lib/ports/schema";

export const Glover: Port = {
  schema: "port",
  id: "glover",
  title: "Glover",
  game: "Glover",
  developers: ["ThatGuyMcd"],
  publisher: "Unknown",
  originalYear: 2022,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "1.0.1", date: "2026-10-06" },
  sources: ["https://github.com/ThatGuyMcd/Glover-R"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  summary: "Glover is a puzzle-intensive adventure game made up of 6 worlds with 30 different levels. You control a charismatic glove that walks on two fingers, slaps harder than Steve Austin, dribbles faster than Scottie Pippen, and plays with a bouncy rubber ball.",
  summaryEs: "Glover es un videojuego de acción y aventura publicado por Piko Interactive LLC en 2022.",
  downloads: [
    {
      label: "Linux x64",
      url: "https://github.com/ThatGuyMcd/Glover-R/releases/download/v1.0.1/Glover-R-1.0.1-Linux-x86_64-SteamDeck.tar.gz",
      size: "18.7 MB",
    },
    {
      label: "Linux x64",
      url: "https://github.com/ThatGuyMcd/Glover-R/releases/download/v1.0.1/Glover-R-1.0.1-Linux-x86_64.AppImage",
      size: "18.1 MB",
    },
    {
      label: "Linux x64",
      url: "https://github.com/ThatGuyMcd/Glover-R/releases/download/v1.0.1/Glover-R-1.0.1-Linux-x86_64-Portable.tar.gz",
      size: "17.6 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/ThatGuyMcd/Glover-R/releases/download/v1.0.1/Glover-R-1.0.1-Windows-x64.zip",
      size: "17.4 MB",
    },
  ],
  cover: {
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Donald_Glover_TIFF_2015.jpg/960px-Donald_Glover_TIFF_2015.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    alt: "Glover (box art)",
    credit: "Wikipedia",
  },
  notes: "A Static Recompilation of Glover by ThatGuyMcd.",
  notesEs: "Recompilación estática de Glover por ThatGuyMcd.",
};
