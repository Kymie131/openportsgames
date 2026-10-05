import type { Port } from "@/lib/ports/schema";

export const castlevaniaLodRecomp: Port = {
  schema: "port",
  id: "castlevania-lod-recomp",
  title: "Castlevania: Legacy of Darkness Recompiled",
  game: "Castlevania: Legacy of Darkness",
  developers: ["Konami"],
  publisher: "Konami",
  originalYear: 1999,
  genre: "action-adventure",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.2.27", date: "2026-09-28" },
  sources: ["https://github.com/fliperama86/cvlod_recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "Nintendo 64",
  features: [
    "Aspect ratio modes (Original, Expand, Manual) cycled with F6",
    "Anti-aliasing up to 8x MSAA, cycled with F7",
    "Configurable gamepad controls through controls.json",
  ],
  featuresEs: [
    "Modos de relación de aspecto (Original, Expandido, Manual) ciclables con F6",
    "Antialiasing de hasta 8x MSAA, ciclable con F7",
    "Controles de mando configurables mediante controls.json",
  ],
  notes:
    "Static recompilation of Castlevania: Legacy of Darkness with N64Recomp. The player supplies their own legally dumped cartridge. macOS builds target Apple Silicon and link against Homebrew SDL2.",
  notesEs:
    "Recompilación estática de Castlevania: Legacy of Darkness con N64Recomp. El jugador aporta su propio cartucho volcado legalmente. Las builds para macOS son para Apple Silicon y enlazan con SDL2 de Homebrew.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Castlevania%20-%20Legacy%20of%20Darkness%20(USA).png",
    alt: "Castlevania: Legacy of Darkness (box art)",
    credit: "Box art",
  },
};
