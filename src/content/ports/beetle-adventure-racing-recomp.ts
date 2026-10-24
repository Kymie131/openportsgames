import type { Port } from "@/lib/ports/schema";

export const beetleAdventureRacingRecomp: Port = {
  schema: "port",
  id: "beetle-adventure-racing-recomp",
  title: "Beetle Adventure Racing Recompiled",
  game: "Beetle Adventure Racing",
  developers: ["Electronic Arts"],
  publisher: "Electronic Arts",
  originalYear: 1999,
  genre: "racing",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows"],
  status: "alpha",
  release: { version: "0.4.2-alpha", date: "2026-09-20" },
  sources: ["https://github.com/danielgomesvieira2000/beetle-adventure-racing-recomp"],
  license: { spdx: "AGPL-3.0" },
  verified: false,
  originalSystems: ["Nintendo 64"],
  features: [
    "High framerate with high-FPS interpolation and working audio",
    "RecompFrontend launcher with settings, input binding and pause menu",
    "Widescreen with a HUD that expands with the aspect ratio",
    "Selectable divot seam filter",
  ],
  featuresEs: [
    "Framerate alto con interpolación de FPS y audio funcional",
    "Lanzador RecompFrontend con ajustes, asignación de controles y menú de pausa",
    "Panorámico con HUD que se expande según la relación de aspecto",
    "Filtro seleccionable de costuras del terreno",
  ],
  summary: "Beetle Adventure Racing! is a racing game released for the Nintendo 64 in 1999. It was developed by Paradigm Entertainment and EA Canada, and published by Electronic Arts. Each vehicle in the game is a Volkswagen New Beetle, which was released the previous year. The gameplay involves racing other players on unlocked tracks, finding and destroying crates, and collecting colored ladybugs while battling other players. The single-player championship offers three circuits and a secret bonus circuit with new vehicles and tracks available upon completion.",
  summaryEs: "Beetle Adventure Racing! es un videojuego de carreras lanzado para Nintendo 64 en 1999. Fue desarrollado por Paradigm Entertainment junto con EA Canada y publicado por Electronic Arts.",
  notes:
    "Static recompilation of Beetle Adventure Racing! (N64, USA) with N64Recomp and RT64. Playable: it boots through the menus into races at 60 fps, with widescreen, a 1x/2x/4x draw distance and internal-resolution scaling.",
  notesEs:
    "Recompilación estática de Beetle Adventure Racing! (N64, USA) con N64Recomp y RT64. Jugable: arranca, pasa por los menús y llega a las carreras a 60 fps, con widescreen, distancia de dibujado de 1x/2x/4x y escalado de resolución interna.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Beetle%20Adventure%20Racing!%20(USA)%20(En%2CFr%2CDe).png",
    alt: "Beetle Adventure Racing (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Beetle%20Adventure%20Racing!%20(USA)%20(En,Fr,De).png",
      alt: "Beetle Adventure Racing (screenshot)",
      credit: "Libretro",
    },
  ],
};
