import type { Port } from "@/lib/ports/schema";

export const hereticClassicCoreEngines: Port = {
  schema: "port",
  id: "heretic-classic-core-engines",
  title: "Heretic (Classic Core Engines)",
  game: "Heretic: Shadow of the Serpent Riders",
  developers: ["sandstranger"],
  publisher: "Raven Software",
  originalYear: 1994,
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
  summary: "Heretic: Shadow of the Serpent Riders is a shooter game in 2007.",
  summaryEs: "Heretic: Shadow of the Serpent Riders es un videojuego de disparos en 2007.",
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
    src: "https://openportsgames.com/covers/generated/heretic-shadow-of-the-serpent-riders.svg",
    alt: "Heretic: Shadow of the Serpent Riders (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Heretic: Shadow of the Serpent Riders (Raven Software, 1994) for Android (source port). Latest release: 3.5.0. Needs your own copy of the game (HERETIC.WAD).",
  notesEs: "Heretic: Shadow of the Serpent Riders (Raven Software, 1994) para Android (port de código). Última release: 3.5.0. Necesita tu propia copia del juego.",
};
