import type { Port } from "@/lib/ports/schema";

export const superMetroidSnesRecomp: Port = {
  schema: "port",
  id: "super-metroid-snes-recomp",
  title: "SuperMetroidRecomp",
  game: "Super Metroid",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 1994,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/SuperMetroidRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "Super Nintendo",
  notes:
    "Static recompilation of Super Metroid (SNES) with the snesrecomp framework: the 65816 code is translated to C and compiled natively.",
  notesEs:
    "Recompilación estática de Super Metroid (SNES) con el framework snesrecomp: el código 65816 se traduce a C y se compila a nativo.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Metroid%20-%20Redux%20(USA).png",
    alt: "Super Metroid (box art)",
    credit: "Box art",
  },
};
