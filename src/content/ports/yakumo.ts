import type { Port } from "@/lib/ports/schema";

export const yakumo: Port = {
  schema: "port",
  id: "yakumo",
  title: "Yakumo (Monster Hunter Portable 3rd HD)",
  game: "Monster Hunter Portable 3rd HD",
  developers: ["TeamGDB"],
  publisher: "Capcom",
  originalYear: 2010,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos", "android"],
  status: "beta",
  release: { version: "0.7.5", date: "2026-10-13" },
  sources: ["https://github.com/TeamGDB/Yakumo"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystems: ["PlayStation Portable"],
  summary: "Monster Hunter Portable 3rd is a 2010 action role-playing game developed and published by Capcom for the PlayStation Portable. It is the third handheld installment in the Monster Hunter franchise. Like its predecessor, Monster Hunter Freedom 2, Portable 3rd is an original title that adapts the core content of Monster Hunter Tri into a new single player campaign, adding supplemental original content. The game introduces regions, monsters, and a revised Felyne combat system.",
  summaryEs: "Monster Hunter Portable 3rd es la última entrega de la franquicia Monster Hunter para el sistema PlayStation Portable que fue lanzado en Japón el 1 de diciembre de 2010. El juego fue lanzado luego como parte de la PlayStation Portable Remaster Series, para PlayStation 3. El juego introduce nuevas regiones, monstruos y un sistema de combate Felyne revisado. Monster Hunter Portable 3rd no es una actualización de Monster Hunter Freedom Unite. Por el contrario es diferente del resto de la serie, y la mayor parte ha sido totalmente rehecha.",
  notes:
    "Static recompilation of Monster Hunter Portable 3rd HD (PSP) into a native executable, using Vulkan and SDL3. It builds for desktop and Android and requires a copy of the game.",
  notesEs:
    "Recompilación estática de Monster Hunter Portable 3rd HD (PSP) a un ejecutable nativo, con Vulkan y SDL3. Compila para escritorio y Android y requiere una copia del juego.",
  downloads: [
    {
      label: "ffmpeg-7.1.5",
      url: "https://github.com/TeamGDB/Yakumo/releases/download/v0.7.5/ffmpeg-7.1.5.tar.xz",
      size: "10.5 MB",
    },
    {
      label: "Android APK",
      url: "https://github.com/TeamGDB/Yakumo/releases/download/v0.7.5/yakumo-0.7.5-android-arm64.apk",
      size: "193.9 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/TeamGDB/Yakumo/releases/download/v0.7.5/yakumo-0.7.5-linux-x86_64.tar.gz",
      size: "214.7 MB",
    },
    {
      label: "macOS DMG",
      url: "https://github.com/TeamGDB/Yakumo/releases/download/v0.7.5/yakumo-0.7.5-macos-arm64.dmg",
      size: "106.6 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/TeamGDB/Yakumo/releases/download/v0.7.5/yakumo-0.7.5-macos-arm64.zip",
      size: "193.4 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/TeamGDB/Yakumo/releases/download/v0.7.5/yakumo-0.7.5-windows-x86_64-portable.zip",
      size: "210.2 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation%20Portable/Named_Boxarts/Monster%20Hunter%20Portable%203rd%20(Japan,%20Korea).png",
    alt: "Monster Hunter Portable 3rd HD (cover)",
    credit: "Box art",
  },
};
