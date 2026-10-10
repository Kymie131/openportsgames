import type { Port } from "@/lib/ports/schema";

export const gumshoeNesRecomp: Port = {
  schema: "port",
  id: "gumshoe-nes-recomp",
  title: "GumshoeNESRecomp",
  game: "Gumshoe",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 1986,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/GumshoeNESRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "Nintendo Entertainment System",
  notes:
    "Static recompilation of Gumshoe (NES) with the NESRecomp framework. Playable end-to-end with the Zapper on the mouse; one known cosmetic bug remains in the corner timer and shot counter.",
  notesEs:
    "Recompilación estática de Gumshoe (NES) con el framework NESRecomp. Jugable de principio a fin con el Zapper en el ratón; queda un fallo cosmético conocido en el marcador de tiempo y disparos de la esquina.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Boxarts/Gumshoe%20(USA%2C%20Europe).png",
    alt: "Gumshoe (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Snaps/Gumshoe%20(USA,%20Europe).png",
      alt: "Gumshoe (screenshot)",
      credit: "Libretro",
    },
  ],
};
