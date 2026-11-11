import type { Port } from "@/lib/ports/schema";

export const openborAndroid: Port = {
  schema: "port",
  id: "openbor-android",
  kind: "tool",
  title: "OpenBoR (Android)",
  game: "OpenBoR",
  developers: ["DCurrent"],
  publisher: "DCurrent",
  originalYear: 2001,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/DCurrent/openbor"],
  license: { spdx: "BSD-3-Clause" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  downloads: [
    {
      label: "Android APK",
      url: "https://github.com/DCurrent/openbor/releases/download/v7533/OpenBOR-Android.v4.0.Build.7533.apk",
      size: "5.3 MB",
    },
    {
      label: "Linux AppImage",
      url: "https://github.com/DCurrent/openbor/releases/download/v7533/OpenBOR-Linux-x64-v4.0.Build.7533.AppImage",
      size: "4.8 MB",
    },
    {
      label: "Linux AppImage",
      url: "https://github.com/DCurrent/openbor/releases/download/v7533/OpenBOR-Linux-x86-v4.0.Build.7533.AppImage",
      size: "2.4 MB",
    },
    {
      label: "Android",
      url: "https://github.com/DCurrent/openbor/releases/download/v7533/OpenBOR.v4.0.Build.7533.rar",
      size: "1.3 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/openbor.svg",
    alt: "OpenBoR (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "OpenBoR (DCurrent, 2001) an Android tool. Latest release: v7533. Needs your own copy of the game (YES).",
  notesEs: "OpenBoR (DCurrent, 2001) una herramienta para Android. Última release: v7533. Necesita tu propia copia del juego.",
};
