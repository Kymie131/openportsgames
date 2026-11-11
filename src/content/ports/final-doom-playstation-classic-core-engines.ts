import type { Port } from "@/lib/ports/schema";

export const finalDoomPlaystationClassicCoreEngines: Port = {
  schema: "port",
  id: "final-doom-playstation-classic-core-engines",
  title: "Final Doom (PlayStation, Classic Core Engines)",
  game: "Final Doom (Playstation)",
  developers: ["sandstranger"],
  publisher: "id Software",
  originalYear: 1996,
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
  summary: "Final Doom is a 1996 first-person shooter game developed by TeamTNT and published by id Software for MS-DOS and Macintosh computers, as well as for the PlayStation, although the latter featured a selection of levels from the game and from Master Levels for Doom II.",
  summaryEs: "Final Doom es un videojuego de disparos en primera persona que utiliza el motor de juego, objetos y personajes de Doom II, lanzado en 1996 y distribuido como un producto oficial de id Software.",
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
    src: "https://openportsgames.com/covers/generated/final-doom-playstation.svg",
    alt: "Final Doom (Playstation) (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Final Doom (Playstation) (id Software, 1996) for Android (source port). Latest release: 3.5.0. Needs your own copy of the game (.bin and .cue files).",
  notesEs: "Final Doom (Playstation) (id Software, 1996) para Android (port de código). Última release: 3.5.0. Necesita tu propia copia del juego.",
};
