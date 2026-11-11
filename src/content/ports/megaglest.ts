import type { Port } from "@/lib/ports/schema";

export const Megaglest: Port = {
  schema: "port",
  id: "megaglest",
  title: "MegaGlest",
  game: "MegaGlest",
  developers: ["MegaGlest"],
  publisher: "Unknown",
  originalYear: 2010,
  portType: "source-port",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "3.13.0", date: "2017-03-08" },
  sources: ["https://github.com/MegaGlest/megaglest-source"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  downloads: [
    {
      label: "Linux AppImage",
      url: "https://github.com/MegaGlest/megaglest-source/releases/download/3.13.0/MegaGlest-3.13.0-x86_64.AppImage",
      size: "323.5 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/MegaGlest/megaglest-source/releases/download/3.13.0/megaglest-binary-linux-i686-3.13.0.tar.xz",
      size: "34.6 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/MegaGlest/megaglest-source/releases/download/3.13.0/megaglest-binary-linux-x86_64-3.13.0.tar.xz",
      size: "35.4 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/MegaGlest/megaglest-source/releases/download/3.13.0/megaglest-binary-win32-i386-3.13.0.7z",
      size: "5.0 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/MegaGlest/megaglest-source/releases/download/3.13.0/megaglest-binary-win64-x86_64-3.13.0.7z",
      size: "6.6 MB",
    },
    {
      label: "macOS DMG",
      url: "https://github.com/MegaGlest/megaglest-source/releases/download/3.13.0/MegaGlest-game-macos-3.13.0.dmg",
      size: "347.3 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/08/MegaGlest_Main_Menu.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
    alt: "MegaGlest (cover)",
    credit: "Wikipedia",
  },
  summary: "MegaGlest is a free and open source real-time strategy computer game in a fantasy world, mixing elements of re-imagined past civilizations, magic and steampunk. It is an actively developed fork of the 2004 game Glest, which is no longer under development.",
  summaryEs: "MegaGlest es un videojuego de plataformas en 2010.",
  notes: "MegaGlest real-time strategy game engine (cross-platform, 3-d).",
  notesEs: "Motor de juego de estrategia en tiempo real MegaGlest (multiplataforma, 3D).",
};
