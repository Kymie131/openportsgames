import type { Port } from "@/lib/ports/schema";

export const wolfensteinRpgClassicCoreEngines: Port = {
  schema: "port",
  id: "wolfenstein-rpg-classic-core-engines",
  title: "Wolfenstein RPG (Classic Core Engines)",
  game: "Wolfenstein RPG",
  developers: ["sandstranger"],
  publisher: "id Software",
  originalYear: 2008,
  portType: "source-port",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: "3.6.0", date: "2026-11-11" },
  sources: ["https://github.com/sandstranger/com.mobilerpgpack.phone"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Mobile"],
  summary: "Wolfenstein RPG is a 2008 role-playing video game developed by id Software and Fountainhead Entertainment and published by EA Mobile. It was initially released for Java ME and BREW, before being ported to iOS the following year.",
  summaryEs: "Wolfenstein RPG es un videojuego para teléfonos móviles y iOS creado en 2010 por la empresa id Software.",
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
    src: "https://openportsgames.com/covers/generated/wolfenstein-rpg.svg",
    alt: "Wolfenstein RPG (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Wolfenstein RPG (id Software, 2008) for Android (source port). Latest release: 3.5.0. Needs your own copy of the game (Wolfenstein RPG.ipa).",
  notesEs: "Wolfenstein RPG (id Software, 2008) para Android (port de código). Última release: 3.5.0. Necesita tu propia copia del juego.",
};
