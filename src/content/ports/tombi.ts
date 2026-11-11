import type { Port } from "@/lib/ports/schema";

export const Tombi: Port = {
  schema: "port",
  id: "tombi",
  title: "Tombi!",
  game: "Tombi!",
  developers: ["afsenovilla"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.5.0", date: "2026-11-11" },
  sources: ["https://github.com/afsenovilla/Tombi-Decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,  sourceVerified: true,
  originalSystems: ["PlayStation"],
  downloads: [
    {
      label: "Android APK",
      url: "https://github.com/afsenovilla/Tombi-Decomp/releases/download/v0.5.0/tombi-port-0.5.0-android.apk",
      size: "21.9 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/afsenovilla/Tombi-Decomp/releases/download/v0.5.0/tombi-port-0.5.0-linux-x64.tar.gz",
      size: "106.2 MB",
    },
    {
      label: "Windows EXE",
      url: "https://github.com/afsenovilla/Tombi-Decomp/releases/download/v0.5.0/tombi-port-0.5.0-windows-x64.exe",
      size: "66.6 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/afsenovilla/Tombi-Decomp/releases/download/v0.5.0/Tombi-Tools-0.5.0-linux-x64.tar.gz",
      size: "191.5 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/afsenovilla/Tombi-Decomp/releases/download/v0.5.0/Tombi-Tools-0.5.0-windows-x64.zip",
      size: "118.4 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/75/Tomba%21_NTSC.png",
    alt: "Tombi! (box art)",
    credit: "Wikipedia",
  },
  summary: "Tombi may refer to:",
  summaryEs: "Tombi! 2: Contra los cerdiablos, también conocido en inglés como Tomba! 2: The Evil Swine Return en région NTSC, simplemente Tombi! 2 en la región PAL (europea) o トンバ! ザ・ワイルドアドベンチャー en Japón), es un videojuego de acción y aventuras de plataformas, desarrollado por Whoopee Camp y publicado por Sony Computer Entertainment para la videoconsola PlayStation. Salió a la venta en el año 1999 para Japón y Norteamérica, y en el año 2000 para la región PAL. El juego es una secuela de Tombi!",
  notes:
    "A work-in-progress matching decompilation of Tombi! (known as Tomba! in North America and Ore! Tomba in Japan) for the original PlayStation. The goal is C source code that compiles, with the game's original toolchain, into byte-identical machine code.",
  notesEs:
    "Decompilación que coincide de Tombi! (Tomba! en Norteamérica y Ore! Tomba en Japón) para el PlayStation original, en desarrollo. El objetivo es código C que compile, con las herramientas originales del juego, a código máquina idéntico byte a byte.",
};
