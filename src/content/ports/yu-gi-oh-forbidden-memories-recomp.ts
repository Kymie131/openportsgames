import type { Port } from "@/lib/ports/schema";

export const yuGiOhForbiddenMemoriesRecomp: Port = {
  schema: "port",
  id: "yu-gi-oh-forbidden-memories-recomp",
  title: "Yu-Gi-Oh! Forbidden Memories Recompiled",
  game: "Yu-Gi-Oh! Forbidden Memories",
  developers: ["Unchiga"],
  publisher: "Konami",
  originalYear: 1999,
  portType: "recompilation",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "0.3.0", date: "2026-10-11" },
  sources: ["https://github.com/Unchiga/Yu-Gi-Oh-Forbidden-Memories-Recompiled"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Yu-Gi-Oh! Forbidden Memories is a 1999 digital collectible card game developed and published by Konami for the PlayStation. It is based on the Kazuki Takahashi manga Yu-Gi-Oh! and operates on a modified version of the Yu-Gi-Oh! Trading Card Game. The single-player campaign follows an ancient Egyptian prince, an ancestor of series protagonist Yugi Mutou, who must recover the Millennium Items and thwart the scheme of the evil high priest Heishin. The game was originally released in Japan in 1999, followed by releases in North America in 2002 and in Europe in 2003.",
  summaryEs: "Yu-Gi-Oh! Forbidden Memories, es un videojuego basado en el manga y series de anime Yu-Gi-Oh!.",
  notes:
    "Decompilation and recompilation of Yu-Gi-Oh! Forbidden Memories (PlayStation) to a native executable. It needs the original game.",
  notesEs:
    "Decompilación y recompilación de Yu-Gi-Oh! Forbidden Memories (PlayStation) a un ejecutable nativo. Necesita el juego original.",
  downloads: [
    {
      label: "Linux",
      url: "https://github.com/Unchiga/Yu-Gi-Oh-Forbidden-Memories-Recompiled/releases/download/v0.3.0/fm-editor-v0.3.0-linux.tar.gz",
      size: "25.3 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/Unchiga/Yu-Gi-Oh-Forbidden-Memories-Recompiled/releases/download/v0.3.0/fm-editor-v0.3.0-windows.zip",
      size: "14.2 MB",
    },
    {
      label: "yfm-redecomp-hd-mod-v0.3.0",
      url: "https://github.com/Unchiga/Yu-Gi-Oh-Forbidden-Memories-Recompiled/releases/download/v0.3.0/yfm-redecomp-hd-mod-v0.3.0.zip",
      size: "108.0 MB",
    },
    {
      label: "Android APK",
      url: "https://github.com/Unchiga/Yu-Gi-Oh-Forbidden-Memories-Recompiled/releases/download/v0.3.0/yfm-redecomp-v0.3.0-android-arm64.apk",
      size: "9.7 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/Unchiga/Yu-Gi-Oh-Forbidden-Memories-Recompiled/releases/download/v0.3.0/yfm-redecomp-v0.3.0-linux.tar.gz",
      size: "8.5 MB",
    },
    {
      label: "Macos",
      url: "https://github.com/Unchiga/Yu-Gi-Oh-Forbidden-Memories-Recompiled/releases/download/v0.3.0/yfm-redecomp-v0.3.0-macos-arm64.zip",
      size: "4.7 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Yu-Gi-Oh!%20Forbidden%20Memories%20(Europe).png",
    alt: "Yu-Gi-Oh! Forbidden Memories (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Yu-Gi-Oh!%20Forbidden%20Memories%20(Europe).png",
      alt: "Yu-Gi-Oh! Forbidden Memories (screenshot)",
      credit: "Libretro",
    },
  ],
};
