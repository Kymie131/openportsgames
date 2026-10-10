import type { Port } from "@/lib/ports/schema";

export const marioKartSuperCircuitRecomp: Port = {
  schema: "port",
  id: "mario-kart-super-circuit-recomp",
  title: "Mario Kart: Super Circuit Recomp",
  game: "Mario Kart: Super Circuit",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 2001,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/MarioKartSuperCircuitRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "Game Boy Advance",
  notes:
    "Static recompilation of Mario Kart: Super Circuit (GBA, USA) with the gbarecomp framework. It needs the ROM and the GBA BIOS; it adds optional 60 FPS and adaptive widescreen mods, plus two-player netplay over an emulated link cable.",
  notesEs:
    "Recompilación estática de Mario Kart: Super Circuit (GBA, USA) con el framework gbarecomp. Necesita la ROM y la BIOS de GBA; añade mods opcionales de 60 FPS y widescreen adaptativo, y netplay de dos jugadores por cable link emulado.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Boxarts/Mario%20Kart%20-%20Super%20Circuit%20(USA).png",
    alt: "Mario Kart: Super Circuit (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Snaps/Mario%20Kart%20-%20Super%20Circuit%20(USA).png",
      alt: "Mario Kart: Super Circuit (screenshot)",
      credit: "Libretro",
    },
  ],
};
