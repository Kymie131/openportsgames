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
  originalSystem: "Nintendo 64",
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
  notes:
    "Static recompilation of Beetle Adventure Racing; the player supplies their own legally obtained game. The project describes itself as an alpha with a handful of polish items left.",
  notesEs:
    "Recompilación estática de Beetle Adventure Racing; el jugador aporta su propio juego obtenido legalmente. El proyecto se describe como una alfa con algunos detalles de pulido pendientes.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Beetle%20Adventure%20Racing!%20(USA)%20(En%2CFr%2CDe).png",
    alt: "Beetle Adventure Racing (box art)",
    credit: "Box art",
  },
};
