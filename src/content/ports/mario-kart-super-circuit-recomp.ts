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
  originalSystems: ["Game Boy Advance"],
  summary: "Mario Kart: Super Circuit is a 2001 kart racing game for the Game Boy Advance (GBA). It is the third Mario Kart game and retains its predecessors' gameplay: as a Mario franchise character, the player races opponents around tracks based on locales from the Super Mario platform games. Tracks contain obstacles and power-ups that respectively hamper and aid the player's progress. Super Circuit includes various single-player and multiplayer game modes, including a Grand Prix racing mode and a last man standing battle mode.",
  summaryEs: "Mario Kart: Super Circuit es un videojuego de carreras desarrollado por Intelligent Systems y distribuido por Nintendo para la Game Boy Advance (GBA). Se trata del tercer título de la saga Mario Kart y mantiene la mecánica de sus predecesores: el jugador, en el papel de un personaje de la franquicia Mario, compite contra sus rivales en circuitos inspirados en escenarios de las entregas de plataformas de Super Mario. Contienen obstáculos y potenciadores que, respectivamente, dificultan y facilitan el avance.",
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
