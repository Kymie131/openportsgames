import type { Port } from "@/lib/ports/schema";

export const metroidNesRecomp: Port = {
  schema: "port",
  id: "metroid-nes-recomp",
  title: "MetroidNESRecomp",
  game: "Metroid",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 1986,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/MetroidNESRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "Nintendo Entertainment System",
  notes:
    "Static recompilation of Metroid (NES) with the nesrecomp framework: the 6502 code is translated to C and compiled natively. It ships separate USA/NTSC and Europe/PAL builds, each one only with its matching ROM.",
  notesEs:
    "Recompilación estática de Metroid (NES) con el framework nesrecomp: el código 6502 se traduce a C y se compila a nativo. Trae builds separadas para USA/NTSC y Europa/PAL, cada una solo con su ROM correspondiente.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Boxarts/Metroid%20(USA).png",
    alt: "Metroid (box art)",
    credit: "Box art",
  },
};
