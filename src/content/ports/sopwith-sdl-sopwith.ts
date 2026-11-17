import type { Port } from "@/lib/ports/schema";

export const SopwithSdlSopwith: Port = {
  schema: "port",
  id: "sopwith-sdl-sopwith",
  title: "Sopwith (SDL Sopwith)",
  game: "Sopwith",
  developers: ["fragglet"],
  publisher: "BMB Compuscience",
  originalYear: 1984,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "2.9.0", date: "2025-12-06" },
  sources: ["https://github.com/fragglet/sdl-sopwith"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["MS-DOS"],
  summary: "Sopwith is a 1984 side-scrolling biplane shooter originally developed by BMB Compuscience.",
  summaryEs: "Sopwith es un shooter de biplanos de desplazamiento lateral de 1984 desarrollado originalmente por BMB Compuscience.",  downloads: [
    {
      label: "macOS arm64",
      url: "https://github.com/fragglet/sdl-sopwith/releases/download/sdl-sopwith-2.9.0/sdl-sopwith-2.9.0-macos-arm64.zip",
      size: "1.4 MB",
    },
    {
      label: "macOS x64",
      url: "https://github.com/fragglet/sdl-sopwith/releases/download/sdl-sopwith-2.9.0/sdl-sopwith-2.9.0-macos-x86_64.zip",
      size: "1.4 MB",
    },
    {
      label: "Windows x86",
      url: "https://github.com/fragglet/sdl-sopwith/releases/download/sdl-sopwith-2.9.0/sdl-sopwith-2.9.0-win32.zip",
      size: "1.1 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/fragglet/sdl-sopwith/releases/download/sdl-sopwith-2.9.0/sdl-sopwith-2.9.0-win64.zip",
      size: "1.1 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/sopwith-sdl-sopwith.svg",
    alt: "Sopwith (SDL Sopwith) (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Classic bi-plane shoot-'em up.",
  notesEs: "Clásico juego de disparos de biplano.",
};
