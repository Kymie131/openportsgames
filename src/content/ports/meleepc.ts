import type { Port } from "@/lib/ports/schema";

export const Meleepc: Port = {
  schema: "port",
  id: "meleepc",
  title: "MeleePC",
  game: "MeleePC",
  developers: ["999sian"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.4.2", date: "2026-10-21" },
  sources: ["https://github.com/999sian/melee-pc"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "MeleePC is a action-adventure game, released in 2000.",
  summaryEs: "MeleePC es un videojuego de acci�n y aventura, lanzado en 2000.",
  summaryGenerated: true,
  downloads: [
    {
      label: "Linux AppImage",
      url: "https://github.com/999sian/melee-pc/releases/download/v0.4.2/Melee-aarch64.AppImage",
      size: "19.0 MB",
    },
    {
      label: "Android APK",
      url: "https://github.com/999sian/melee-pc/releases/download/v0.4.2/Melee-Android-arm64.apk",
      size: "36.7 MB",
    },
    {
      label: "iOS IPA",
      url: "https://github.com/999sian/melee-pc/releases/download/v0.4.2/Melee-iOS-arm64.ipa",
      size: "9.7 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/999sian/melee-pc/releases/download/v0.4.2/melee-linux-aarch64.tar.gz",
      size: "20.3 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/999sian/melee-pc/releases/download/v0.4.2/melee-linux-x86_64.tar.gz",
      size: "20.9 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/999sian/melee-pc/releases/download/v0.4.2/Melee-macOS-arm64.zip",
      size: "12.1 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/meleepc.svg",
    alt: "MeleePC (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Native PC port of Super Smash Bros. Melee (NTSC-U 1.02), built from doldecomp/melee on aurora. No game data; bring your own disc.",
  notesEs:
    "Port para PC nativo de Super Smash Bros. Melee (NTSC-U 1.02), hecho desde doldecomp/melee sobre aurora. Sin datos del juego: aporta tu propio disco.",
};
