import type { Port } from "@/lib/ports/schema";

export const doom64RemasteredClassicCoreEngines: Port = {
  schema: "port",
  id: "doom-64-remastered-classic-core-engines",
  title: "Doom 64 Remastered (Classic Core Engines)",
  game: "Doom 64 Remastered",
  developers: ["sandstranger"],
  publisher: "Bethesda Softworks",
  originalYear: 2020,
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
  originalSystems: ["Nintendo Switch"],
  summary:
    "Doom 64 Remastered is the 2020 re-release of the 1997 Nintendo 64 shooter, developed by Nightdive Studios and published by Bethesda Softworks. It adds widescreen support, higher frame rates and a new chapter while keeping the original campaign.",
  summaryEs:
    "Doom 64 Remastered es la reedición de 2020 del shooter de Nintendo 64 de 1997, desarrollada por Nightdive Studios y publicada por Bethesda Softworks. Añade pantalla ancha, mayores tasas de refresco y un nuevo capítulo manteniendo la campaña original.",
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
    src: "https://openportsgames.com/covers/generated/doom-64-remastered.svg",
    alt: "Doom 64 Remastered (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Doom 64 Remastered (id Software, 2020) for Android (source port). Latest release: 3.5.0. Needs your own copy of the game (DOOM64.WAD, DOOMSND.DLS, Doom64.kpf).",
  notesEs: "Doom 64 Remastered (id Software, 2020) para Android (port de código). Última release: 3.5.0. Necesita tu propia copia del juego.",
};
