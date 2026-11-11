import type { Port } from "@/lib/ports/schema";

export const hacxClassicCoreEngines: Port = {
  schema: "port",
  id: "hacx-classic-core-engines",
  title: "HacX (Classic Core Engines)",
  game: "HacX",
  developers: ["sandstranger"],
  publisher: "Banjo Software",
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
  summary: "Doom modding is the practice of creating modifications for games in the first-person shooter franchise Doom developed by id Software, such as the original Doom and its sequel, Doom II: Hell on Earth. These modifications allow players to design new levels, change graphics and sounds, and adjust gameplay mechanics.",
  summaryEs: "HacX es un videojuego de disparos.",
  downloads: [
    {
      label: "Android APK",
      url: "https://github.com/sandstranger/com.mobilerpgpack.phone/releases/download/3.6.0/Classic_Core_fdroid_release_arm64-v8a_v3.6.0_b142_2026_11_11_15_18.apk",
      size: "152.0 MB",
    },
    {
      label: "Android APK",
      url: "https://github.com/sandstranger/com.mobilerpgpack.phone/releases/download/3.6.0/Classic_Core_fdroid_release_armeabi-v7a_v3.6.0_b142_2026_11_11_15_18.apk",
      size: "151.4 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/hacx.svg",
    alt: "HacX (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "HacX (Banjo Software, 1997) for Android (source port). Latest release: 3.5.0. Needs your own copy of the game (HACX.WAD).",
  notesEs: "HacX (Banjo Software, 1997) para Android (port de código). Última release: 3.5.0. Necesita tu propia copia del juego.",
};
