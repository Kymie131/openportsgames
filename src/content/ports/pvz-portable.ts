import type { Port } from "@/lib/ports/schema";

export const pvzPortable: Port = {
  schema: "port",
  id: "pvz-portable",
  title: "PvZ Portable",
  game: "Plants vs Zombies",
  developers: ["wszqkzqk"],
  publisher: "PopCap Games",
  originalYear: 2009,
  portType: "source-port",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: "0.2.7", date: "2026-11-07" },
  sources: ["https://github.com/wszqkzqk/PvZ-Portable"],
  license: { spdx: "LGPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  downloads: [
    {
      label: "Android APK",
      url: "https://github.com/wszqkzqk/PvZ-Portable/releases/download/0.2.7/pvz-portable-android-arm64-v8a.apk",
      size: "12.4 MB",
    },
    {
      label: "iOS IPA",
      url: "https://github.com/wszqkzqk/PvZ-Portable/releases/download/0.2.7/pvz-portable-ios-arm64.ipa",
      size: "4.1 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/wszqkzqk/PvZ-Portable/releases/download/0.2.7/pvz-portable-macos-aarch64.zip",
      size: "3.5 MB",
    },
    {
      label: "Android",
      url: "https://github.com/wszqkzqk/PvZ-Portable/releases/download/0.2.7/pvz-portable-wasm.zip",
      size: "2.2 MB",
    },
    {
      label: "Windows EXE",
      url: "https://github.com/wszqkzqk/PvZ-Portable/releases/download/0.2.7/pvz-portable-windows-msvc-x64-static.exe",
      size: "7.6 MB",
    },
    {
      label: "Windows EXE",
      url: "https://github.com/wszqkzqk/PvZ-Portable/releases/download/0.2.7/pvz-portable-windows-msvc-x86-static.exe",
      size: "6.7 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/9/9c/PlantsvsZombiesCoverArt.jpg",
    alt: "Plants vs Zombies (box art)",
    credit: "Wikipedia",
  },
  summary: "Plants vs. Zombies is a 2009 tower defense video game developed and published by PopCap Games. First released for Windows and macOS, the game has since been ported to consoles, handhelds, and mobile devices. The player takes the role of a homeowner amid a zombie apocalypse. As a horde of zombies approaches along several parallel lanes, the player must defend their home by placing plants or fungi, which fire projectiles at the zombies, or otherwise detrimentally affect them, or aid the player. The player collects a resource called \"sun\" to place plants.",
  summaryEs: "Plantas contra Zombis es un videojuego de defensa de torres desarrollado y publicado por PopCap Games. Lanzado inicialmente para Windows y Mac OS X, se ha adaptado desde entonces a consolas, videoconsolas portátiles y dispositivos móviles. El jugador asume el papel de un propietario en medio de una epidemia de muertos vivientes. A medida que una horda de zombis se acerca por varias vías paralelas, debe defender su casa al colocar plantas u hongos que disparan proyectiles, les causan algún otro tipo de daño o ayudan. Se recoge un recurso llamado «sol» para poner mantas.",
  notes: "Plants vs Zombies (PopCap Games, 2009) for Android (source port). Latest release: 0.2.5. Needs your own copy of the game (Needs Goty Edition).",
  notesEs: "Plants vs Zombies (PopCap Games, 2009) para Android (port de código). Última release: 0.2.5. Necesita tu propia copia del juego.",
};
