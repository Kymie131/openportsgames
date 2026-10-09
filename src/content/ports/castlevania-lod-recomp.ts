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
    "An in-progress recompilation of Castlevania: Legacy of Darkness (N64). The current goal is to reach stable gameplay while keeping enough telemetry to diagnose the remaining crashes; it uses the Zelda 64: Recompiled menu.",
  notesEs:
    "Recompilación en curso de Castlevania: Legacy of Darkness (N64). El objetivo ahora es llegar a un gameplay estable y conservar la telemetría suficiente para diagnosticar los cierres que quedan; usa el menú de Zelda 64: Recompiled.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Castlevania%20-%20Legacy%20of%20Darkness%20(USA).png",
    alt: "Castlevania: Legacy of Darkness (box art)",
    credit: "Box art",
  },
};
