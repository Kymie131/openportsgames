import type { Port } from "@/lib/ports/schema";

export const unciv: Port = {
  schema: "port",
  id: "unciv",
  title: "Unciv",
  game: "Civilization V",
  developers: ["yairm210"],
  publisher: "2K Games",
  originalYear: 2010,
  portType: "reimplementation",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos", "android", "ios"],
  status: "stable",
  release: { version: "4.22.19", date: "2026-11-10" },
  sources: ["https://github.com/yairm210/Unciv"],
  license: { spdx: "MPL-2.0" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "Sid Meier's Civilization V is a 4X turn-based strategy video game developed by Firaxis Games and published by 2K. It is the sequel to Civilization IV, and was released for Windows in September 2010, for Mac OS X on November 23, 2010, and for Linux on June 10, 2014.",
  summaryEs: "Sid Meier's Civilization V es un videojuego de estrategia por turnos desarrollado por Firaxis Games y distribuido por 2K Games, y el quinto de la serie Civilization. Fue publicado en Estados Unidos el 21 de septiembre de 2010 y en Europa el 24 de septiembre del mismo año.",
  notes:
    "Open-source remake of Civilization V for Android and desktop, also available on iOS. It is a turn-based strategy game that does not use the original game's assets.",
  notesEs:
    "Remake libre de Civilization V para Android y escritorio, también disponible en iOS. Es un juego de estrategia por turnos que no usa los recursos del juego original.",
  downloads: [
    {
      label: "Linux",
      url: "https://github.com/yairm210/Unciv/releases/download/4.22.19/linuxFilesForJar.zip",
      size: "1 KB",
    },
    {
      label: "Linux",
      url: "https://github.com/yairm210/Unciv/releases/download/4.22.19/Unciv-Linux64.zip",
      size: "103.9 MB",
    },
    {
      label: "Android APK",
      url: "https://github.com/yairm210/Unciv/releases/download/4.22.19/Unciv-signed.apk",
      size: "26.3 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/yairm210/Unciv/releases/download/4.22.19/Unciv-Windows64.zip",
      size: "100.2 MB",
    },
    {
      label: "Unciv",
      url: "https://github.com/yairm210/Unciv/releases/download/4.22.19/Unciv.jar",
      size: "55.3 MB",
    },
    {
      label: "Windows MSI",
      url: "https://github.com/yairm210/Unciv/releases/download/4.22.19/Unciv.msi",
      size: "86.1 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/5c/CIVILIZATION-V-FRONT-OF-BOX.jpg",
    alt: "Civilization V (box art)",
    credit: "Wikipedia",
  },
};
