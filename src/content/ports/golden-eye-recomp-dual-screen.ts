import type { Port } from "@/lib/ports/schema";

export const goldenEyeRecompDualScreen: Port = {
  schema: "port",
  id: "golden-eye-recomp-dual-screen",
  title: "Golden Eye Recomp (Dual Screen)",
  game: "GoldenEye 007: Reloaded",
  developers: ["jeffory"],
  publisher: "Microsoft Game Studios",
  originalYear: 2010,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: "1.7.1", date: "2026-08-28" },
  sources: ["https://github.com/jeffory/GoldenEye-Recomp"],
  license: { spdx: "Unlicense" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  summary: "GoldenEye 007: Reloaded is a shooter game.",
  summaryEs: "GoldenEye 007: Reloaded es un videojuego de disparos.",
  downloads: [
    {
      label: "Android APK",
      url: "https://github.com/jeffory/GoldenEye-Recomp/releases/download/v1.7.1/GoldenEye-Recomp-v1.7.1-android-arm64.apk",
      size: "32.8 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/jeffory/GoldenEye-Recomp/releases/download/v1.7.1/GoldenEye-Recomp-v1.7.1-linux-amd64.tar.gz",
      size: "49.5 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/goldeneye-007-reloaded.svg",
    alt: "GoldenEye 007: Reloaded (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "GoldenEye 007: Reloaded (Microsoft Game Studios, 2010) for Android (static recompilation). Latest release: v1.7.1. Needs your own copy of the game (Golden Eye 007 Remaster folder).",
  notesEs: "GoldenEye 007: Reloaded (Microsoft Game Studios, 2010) para Android (recompilación estática). Última release: v1.7.1. Necesita tu propia copia del juego.",
};
