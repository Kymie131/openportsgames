import type { Port } from "@/lib/ports/schema";

export const CDogsSdl: Port = {
  schema: "port",
  id: "c-dogs-sdl",
  title: "C-Dogs SDL",
  game: "C-Dogs SDL",
  developers: ["cxong"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "2.5.0", date: "2026-10-16" },
  sources: ["https://github.com/cxong/cdogs-sdl"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "C-Dogs, the sequel to Cyberdogs, is a shoot 'em up video game where players work cooperatively during missions and against each other in \"dogfight\" deathmatch mode.",
  summaryEs: "El término null, nulo o nil es a menudo utilizado en la computación para hacer referencia a la nada. Su significado y uso varía según el lenguaje de programación.",
  downloads: [
    {
      label: "Windows x86",
      url: "https://github.com/cxong/cdogs-sdl/releases/download/2.5.0/C-Dogs.SDL-2.5.0-win32.zip",
      size: "32.5 MB",
    },
    {
      label: "Windows x86",
      url: "https://github.com/cxong/cdogs-sdl/releases/download/2.5.0/C-Dogs.SDL-2.5.0-win32.exe",
      size: "30.5 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/cxong/cdogs-sdl/releases/download/2.5.0/C-Dogs.SDL-2.5.0-OSX.dmg",
      size: "29.7 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/cxong/cdogs-sdl/releases/download/2.5.0/C-Dogs.SDL-2.5.0-Linux.tar.gz",
      size: "28.1 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Cdogslogo.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    alt: "C-Dogs SDL (box art)",
    credit: "Wikipedia",
  },
  notes: "Classic overhead run-and-gun game.",
  notesEs: "Clásico juego de acción con vista cenital.",
};
