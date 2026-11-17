import type { Port } from "@/lib/ports/schema";

export const doomPlaystationClassicCoreEngines: Port = {
  schema: "port",
  id: "doom-playstation-classic-core-engines",
  title: "Doom (PlayStation, Classic Core Engines)",
  game: "Doom (PlayStation)",
  developers: ["sandstranger"],
  publisher: "id Software",
  originalYear: 1995,
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
  originalSystems: ["PlayStation"],
  summary:
    "Doom for the original PlayStation is a 1995 console conversion of id Software's shooter. It remixes the PC levels, adds a darker ambient soundtrack and introduces new enemies and lighting effects.",
  summaryEs:
    "Doom para la primera PlayStation es una conversión de 1995 del shooter de id Software. Reorganiza los niveles de PC, añade una banda sonora ambiental más oscura e introduce nuevos enemigos y efectos de iluminación.",
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
    src: "https://openportsgames.com/covers/generated/doom-playstation.svg",
    alt: "Doom (PlayStation) (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Doom (Playstation) (id Software, 1995) for Android (source port). Latest release: 3.5.0. Needs your own copy of the game (.bin and .cue files).",
  notesEs: "Doom (Playstation) (id Software, 1995) para Android (port de código). Última release: 3.5.0. Necesita tu propia copia del juego.",
};
