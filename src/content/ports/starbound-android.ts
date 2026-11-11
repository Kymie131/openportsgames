import type { Port } from "@/lib/ports/schema";

export const starboundAndroid: Port = {
  schema: "port",
  id: "starbound-android",
  title: "OpenStarbound Mobile",
  game: "Starbound",
  developers: ["RohanBhattacharyya"],
  publisher: "Chucklefish",
  originalYear: 2016,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: "1.1", date: "2026-07-24" },
  sources: ["https://github.com/RohanBhattacharyya/oSBM"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "You’ve fled your home, only to find yourself lost in space with a damaged ship. Your only option is to beam down to the planet below, repair your ship and set off to explore the universe...",
  summaryEs: "Starbound es un videojuego de acción y aventura publicado por Chucklefish en 2016.",
  notes:
    "OpenStarbound port to mobile devices, bringing the Starbound sandbox to Android. It needs the game itself.",
  notesEs:
    "Port de OpenStarbound a dispositivos móviles, que lleva el sandbox Starbound a Android. Necesita el propio juego.",
  downloads: [
    {
      label: "Android",
      url: "https://github.com/RohanBhattacharyya/oSBM/releases/download/v1.1/oSBM-1.1-android-universal.apk",
      size: "61.3 MB",
    },
    {
      label: "Android x64",
      url: "https://github.com/RohanBhattacharyya/oSBM/releases/download/v1.1/oSBM-1.1-android-x86_64.apk",
      size: "29.5 MB",
    },
    {
      label: "Android arm64",
      url: "https://github.com/RohanBhattacharyya/oSBM/releases/download/v1.1/oSBM-1.1-android-arm64-v8a.apk",
      size: "28.9 MB",
    },
    {
      label: "Android armv7",
      url: "https://github.com/RohanBhattacharyya/oSBM/releases/download/v1.1/oSBM-1.1-android-armeabi-v7a.apk",
      size: "26.8 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/06/Starbound_Logo.png",
    alt: "Starbound (box art)",
    credit: "Wikipedia",
  },
};
