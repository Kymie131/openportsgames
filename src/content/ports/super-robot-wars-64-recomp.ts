import type { Port } from "@/lib/ports/schema";

export const superRobotWars64Recomp: Port = {
  schema: "port",
  id: "super-robot-wars-64-recomp",
  title: "Super Robot Wars 64",
  game: "Super Robot Wars 64",
  developers: ["dyzz"],
  publisher: "Banpresto",
  originalYear: 1999,
  portType: "recompilation",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "0.5.3", date: "2026-11-04" },
  sources: ["https://github.com/dyzz/srw64-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Nintendo 64"],
  summary: "Super Robot Wars 64 is a tactical role-playing game for the Nintendo 64 and part of the Super Robot Wars series. It was released only in Japan in 1999, and features extensive connectivity with Super Robot Wars: Link Battler for Game Boy Color.",
  summaryEs: "Super Robot Wars 64 es un videojuego de estrategia publicado por Banpresto en 1999.",
  notes:
    "Static recompilation of Super Robot Wars 64 (N64) with N64Recomp and the RT64 renderer. It requires your own game data.",
  notesEs:
    "Recompilación estática de Super Robot Wars 64 (N64) con N64Recomp y el renderizador RT64. Requiere tus propios datos del juego.",
  downloads: [
    {
      label: "Android APK",
      url: "https://github.com/dyzz/srw64-recomp/releases/download/v0.5.3/Marchwind64-0.5.3-android-arm64.apk",
      size: "56.2 MB",
    },
    {
      label: "Marchwind64-0.5.3-linux-x64",
      url: "https://github.com/dyzz/srw64-recomp/releases/download/v0.5.3/Marchwind64-0.5.3-linux-x64.tar.gz",
      size: "64.6 MB",
    },
    {
      label: "Marchwind64-0.5.3-macos14-arm64",
      url: "https://github.com/dyzz/srw64-recomp/releases/download/v0.5.3/Marchwind64-0.5.3-macos14-arm64.zip",
      size: "60.1 MB",
    },
    {
      label: "Marchwind64-0.5.3-switch",
      url: "https://github.com/dyzz/srw64-recomp/releases/download/v0.5.3/Marchwind64-0.5.3-switch.zip",
      size: "52.9 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/dyzz/srw64-recomp/releases/download/v0.5.3/Marchwind64-0.5.3-windows-x64.zip",
      size: "69.5 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/9/99/Super_Robot_Wars_64_Coverart.png",
    alt: "Super Robot Wars 64 (box art)",
    credit: "Wikipedia",
  },
};
