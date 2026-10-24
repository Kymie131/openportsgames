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
  originalSystems: ["Nintendo Entertainment System"],
  summary: "Faxanadu is an action role-playing platform video game for the Nintendo Entertainment System. The name was licensed by computer game developer Falcom and was developed and released in Japan by Hudson Soft in 1987. Nintendo released the game in the United States and Europe as a first-party title under license from Hudson Soft.",
  summaryEs: "Faxanadu es el título de un videojuego de la empresa Hudson Soft para la consola NES Nintendo. Fue lanzado al mercado en el año 1987, siendo lanzado en América en 1989 y en Europa en 1990 (distribuido por Mattel. Fue desarrollando por Hudson Soft con licencia de Nihon Falcom.",
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
