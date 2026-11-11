import type { Port } from "@/lib/ports/schema";

export const augustus: Port = {
  schema: "port",
  id: "augustus",
  title: "Augustus",
  game: "Caesar III",
  developers: ["Keriew"],
  publisher: "Sierra On-Line",
  originalYear: 1998,
  portType: "source-port",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: "4.0.0", date: "2023-12-28" },
  sources: ["https://github.com/Keriew/augustus"],
  license: { spdx: "AGPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  downloads: [
    {
      label: "Android APK",
      url: "https://github.com/Keriew/augustus/releases/download/v4.0.0/augustus-4.0.0-android.apk",
      size: "22.5 MB",
    },
    {
      label: "Linux AppImage",
      url: "https://github.com/Keriew/augustus/releases/download/v4.0.0/augustus-4.0.0-linux.AppImage",
      size: "20.0 MB",
    },
    {
      label: "macOS DMG",
      url: "https://github.com/Keriew/augustus/releases/download/v4.0.0/augustus-4.0.0-mac.dmg",
      size: "16.5 MB",
    },
    {
      label: "Switch NRO",
      url: "https://github.com/Keriew/augustus/releases/download/v4.0.0/augustus-4.0.0-switch.nro",
      size: "22.1 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/Keriew/augustus/releases/download/v4.0.0/augustus-4.0.0-windows.zip",
      size: "24.6 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/56/Caeser_III_Coverart.jpg",
    alt: "Caesar III (box art)",
    credit: "Wikipedia",
  },
  summary: "Caesar III is a city-building game released on September 30, 1998, for Microsoft Windows and Mac OS, developed by Impressions Games and published by Sierra On-Line. It is the third installment of the Caesar series of games and is part of Sierra's City Building series. Players assume the role of a provincial governor to build thriving cities across the Roman Empire, in which they must ensure their citizens have their needs met, and deal with various disasters, angry gods and hostile enemies.",
  summaryEs: "Caesar III es un juego de ordenador desarrollado por Impressions Games y distribuido por Sierra Entertainment; es el tercer título de la saga de juegos Caesar, concretamente de la serie de juegos de Sierra City Building Series y se lanzó al mercado en 1998.",
  notes: "Caesar III (Sierra On-Line, 1998) for Android (source port). Latest release: v4.0.0. Needs your own copy of the game (Game Files).",
  notesEs: "Caesar III (Sierra On-Line, 1998) para Android (port de código). Última release: v4.0.0. Necesita tu propia copia del juego.",
};
