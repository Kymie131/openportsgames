import type { Port } from "@/lib/ports/schema";

export const tombaRecomp: Port = {
  schema: "port",
  id: "tomba-recomp",
  title: "TombaRecomp",
  game: "Tomba!",
  developers: ["mstan"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1997,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/TombaRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Static recompilation of Tomba! (USA, SCUS-94236) with PSXRecomp. It includes the Seamless Loading mod, which swaps asset-loading routines for native equivalents.",
  notesEs:
    "Recompilación estática de Tomba! (USA, SCUS-94236) con PSXRecomp. Incluye el mod Seamless Loading, que cambia rutinas de carga de recursos por equivalentes nativos.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Tomba!%20(USA).png",
    alt: "Tomba! (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Tomba!%20(USA).png",
      alt: "Tomba! (screenshot)",
      credit: "Libretro",
    },
  ],
};
