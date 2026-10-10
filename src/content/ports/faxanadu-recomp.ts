import type { Port } from "@/lib/ports/schema";

export const faxanaduRecomp: Port = {
  schema: "port",
  id: "faxanadu-recomp",
  title: "FaxanaduRecomp",
  game: "Faxanadu",
  developers: ["mstan"],
  publisher: "Hudson Soft",
  originalYear: 1987,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/FaxanaduRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "Nintendo Entertainment System",
  notes:
    "Static recompilation of Faxanadu (NES) with the NESRecomp framework. Playable from start to finish, with mantra (password) auto-load so you don't have to type them by hand.",
  notesEs:
    "Recompilación estática de Faxanadu (NES) con el framework NESRecomp. Jugable de principio a fin, con autoguardado de los mantras (contraseñas) para no tener que escribirlos a mano.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Boxarts/Faxanadu%20(USA).png",
    alt: "Faxanadu (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Snaps/Faxanadu%20(USA).png",
      alt: "Faxanadu (screenshot)",
      credit: "Libretro",
    },
  ],
};
