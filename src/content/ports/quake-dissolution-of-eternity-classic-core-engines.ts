import type { Port } from "@/lib/ports/schema";

export const quakeDissolutionOfEternityClassicCoreEngines: Port = {
  schema: "port",
  id: "quake-dissolution-of-eternity-classic-core-engines",
  title: "Quake: Dissolution of Eternity (Classic Core Engines)",
  game: "QUAKE Mission Pack 2: Dissolution of Eternity",
  developers: ["sandstranger"],
  publisher: "Rogue Entertainment",
  originalYear: 1997,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: "3.6.0", date: "2026-11-11" },
  sources: ["https://github.com/sandstranger/com.mobilerpgpack.phone"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "QUAKE Mission Pack 2: Dissolution of Eternity is a shooter game in 1997.",
  summaryEs: "QUAKE Mission Pack 2: Dissolution of Eternity es un videojuego de disparos en 1997.",
  downloads: [
    {
      label: "Android arm64",
      url: "https://github.com/sandstranger/com.mobilerpgpack.phone/releases/download/3.6.0/Classic_Core_fdroid_release_arm64-v8a_v3.6.0_b142_2026_11_11_15_18.apk",
      size: "152.0 MB",
    },
    {
      label: "Android armv7",
      url: "https://github.com/sandstranger/com.mobilerpgpack.phone/releases/download/3.6.0/Classic_Core_fdroid_release_armeabi-v7a_v3.6.0_b142_2026_11_11_15_18.apk",
      size: "151.4 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/quake-mission-pack-2-dissolution-of-eternity.svg",
    alt: "QUAKE Mission Pack 2: Dissolution of Eternity (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "QUAKE Mission Pack 2: Dissolution of Eternity (Rogue Entertainment, 1997) for Android (source port). Latest release: 3.5.0. Needs your own copy of the game (rogue folder).",
  notesEs: "QUAKE Mission Pack 2: Dissolution of Eternity (Rogue Entertainment, 1997) para Android (port de código). Última release: 3.5.0. Necesita tu propia copia del juego.",
};
