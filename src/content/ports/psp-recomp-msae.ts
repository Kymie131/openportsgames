import type { Port } from "@/lib/ports/schema";

export const pspRecompMsae: Port = {
  schema: "port",
  id: "psp-recomp-msae",
  title: "PSP Recomp - MSAE",
  game: "MotorStorm: Arctic Edge",
  developers: ["coole42-pixel"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2009,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: "0.2.0", date: "2026-10-09" },
  sources: ["https://github.com/coole42-pixel/PSPRecomp-MSAE"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  downloads: [
    {
      label: "Android APK",
      url: "https://github.com/coole42-pixel/PSPRecomp-MSAE/releases/download/v0.2.0/MotorStorm-0.2.0-android-arm64-release.apk",
      size: "22.0 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/coole42-pixel/PSPRecomp-MSAE/releases/download/v0.2.0/MotorStorm-0.2.0-windows-x64.zip",
      size: "66.2 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/f/f7/MotorStorm_Arctic_Edge.jpg",
    alt: "MotorStorm: Arctic Edge (box art)",
    credit: "Wikipedia",
  },
  summary: "MotorStorm: Arctic Edge is a 2009 racing video game developed by Bigbig Studios and published by Sony Computer Entertainment for the PlayStation Portable. A port developed by Virtuos for the PlayStation 2 was released the same year. It is the third game in the MotorStorm series and the only one to not be released on the PlayStation 3.",
  summaryEs: "MotorStorm: Arctic Edge es el tercer juego de la serie de videojuegos MotorStorm, desarrollado por Bigbig Studios y publicado por Sony Computer Entertainment para PlayStation Portable y PlayStation 2, que se lanzó en 2009.",
  notes: "MotorStorm: Arctic Edge (Sony Computer Entertainment, 2009) for Android (static recompilation). Latest release: v0.2.0. Needs your own copy of the game.",
  notesEs: "MotorStorm: Arctic Edge (Sony Computer Entertainment, 2009) para Android (recompilación estática). Última release: v0.2.0. Necesita tu propia copia del juego.",
};
