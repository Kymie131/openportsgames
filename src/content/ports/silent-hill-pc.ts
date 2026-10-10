import type { Port } from "@/lib/ports/schema";

export const silentHillPc: Port = {
  schema: "port",
  id: "silent-hill-pc",
  title: "Silent Hill PC Port",
  game: "Silent Hill",
  developers: ["KushAstronaut", "SlickAmogus"],
  publisher: "Konami",
  originalYear: 1999,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/SlickAmogus/silent-hill-decomp"],
  website: "https://sh1pc.com/",
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Native PC port of the original PlayStation Silent Hill, built on the silent-hill-decomp decompilation with PsyCross (a PsyQ SDK compatibility layer). It runs as a real Windows/Linux executable compiled from the decompiled C source, not an emulator or a static recompilation, and is playable start to finish with widescreen, high resolution, uncapped FPS, alternate cameras and mod support. Development is openly AI-assisted (Claude) over reviewed, hand-directed edits; you must supply your own game dump.",
  notesEs:
    "Port nativo para PC del Silent Hill original de PlayStation, construido sobre la decompilación silent-hill-decomp con PsyCross (una capa de compatibilidad del SDK PsyQ). Se ejecuta como un binario real de Windows/Linux compilado desde el código C decompilado, no es un emulador ni una recompilación estática, y es jugable de principio a fin con panorámico, alta resolución, FPS sin límite, cámaras alternativas y soporte de mods. El desarrollo es abiertamente asistido por IA (Claude) sobre ediciones revisadas y dirigidas a mano; debes aportar tu propio volcado del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Silent%20Hill%20(USA).png",
    alt: "Silent Hill (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Silent%20Hill%20(USA).png",
      alt: "Silent Hill (screenshot)",
      credit: "Libretro",
    },
  ],
};
