import type { Port } from "@/lib/ports/schema";

export const doom3BfgEditionClassicCoreEngines: Port = {
  schema: "port",
  id: "doom-3-bfg-edition-classic-core-engines",
  title: "Doom 3 BFG Edition (Classic Core Engines)",
  game: "Doom 3 BFG Edition",
  developers: ["sandstranger"],
  publisher: "id Software",
  originalYear: 2012,
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
  originalSystems: ["Windows"],
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
    src: "https://upload.wikimedia.org/wikipedia/en/4/4e/Doom3box.jpg",
    alt: "Doom 3 BFG Edition (box art)",
    credit: "Wikipedia",
  },
  summary: "Doom 3 is a 2004 first-person shooter survival horror game developed by id Software and published by Activision. It was originally released for Windows on August 3, 2004, before being adapted for Linux later that year, and ported by Aspyr Media for Mac OS X in 2005. Vicarious Visions ported the game to the Xbox, releasing it worldwide on April 4, 2005.",
  summaryEs: "Doom 3 BFG Edition es una remasterización de Doom 3, el cual fue lanzado el 15 de octubre de 2012 en Australia, el 16 de octubre de 2012 en América del Norte, el 19 de octubre de 2012 en Europa y el 22 de noviembre de 2012 en Japón para PC, PlayStation 3, y Xbox 360.",
  notes: "Doom 3 BFG Edition (id Software, 2012) for Android (source port). Latest release: 3.5.0. Needs your own copy of the game (base folder).",
  notesEs: "Doom 3 BFG Edition (id Software, 2012) para Android (port de código). Última release: 3.5.0. Necesita tu propia copia del juego.",
};
