import type { Port } from "@/lib/ports/schema";

export const hybridHeavenRecompiled: Port = {
  schema: "port",
  id: "hybrid-heaven-recompiled",
  title: "Hybrid Heaven Recompiled",
  game: "Hybrid Heaven",
  developers: ["ogdanimal"],
  publisher: "Konami",
  originalYear: 1999,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: "1.0.1", date: "2026-10-04" },
  sources: ["https://github.com/ogdanimal/HybridHeaven-Recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  downloads: [
    {
      label: "Android APK",
      url: "https://github.com/ogdanimal/HybridHeaven-Recomp/releases/download/v1.0.1/HybridHeaven-1.0.1-android-arm64-v8a.apk",
      size: "27.9 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/ogdanimal/HybridHeaven-Recomp/releases/download/v1.0.1/HybridHeaven-1.0.1-linux-x86_64.tar.gz",
      size: "18.5 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/ogdanimal/HybridHeaven-Recomp/releases/download/v1.0.1/HybridHeaven-1.0.1-windows-x64.zip",
      size: "27.0 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/db/Hybridheaven.jpg",
    alt: "Hybrid Heaven (box art)",
    credit: "Wikipedia",
  },
  summary: "Hybrid Heaven is a 1999 action role playing game developed by Konami Computer Entertainment Osaka and published by Konami for Nintendo 64. This game is most notable for its peculiar mix of genres: it has aspects of both role-playing video games and action-adventure games. It is also one of the few Nintendo 64 titles to support a widescreen mode.",
  summaryEs: "Hybrid Heaven es un videojuego desarrollado por Konami Computer Entertainment Osaka y lanzado para la Nintendo 64 en 1999. El juego es una notable mezcla de diferentes géneros siendo sus principales dos géneros como el rol y los juegos de aventura de acción. Los diseñadores tenían la esperanza de crear una nueva mecánica de un sistema de batallas RPG. Es también uno de los pocos títulos de Nintendo 64 que tiene soporte en formato widescreen.",
  notes: "Hybrid Heaven (Konami, 1999) for Android (static recompilation). Latest release: v1.0.1. Needs your own copy of the game (Need USA Rom).",
  notesEs: "Hybrid Heaven (Konami, 1999) para Android (recompilación estática). Última release: v1.0.1. Necesita tu propia copia del juego.",
};
