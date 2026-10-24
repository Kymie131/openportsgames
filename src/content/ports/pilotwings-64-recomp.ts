import type { Port } from "@/lib/ports/schema";

export const pilotwings64Recomp: Port = {
  schema: "port",
  id: "pilotwings-64-recomp",
  title: "Pilotwings 64 Recompiled",
  game: "Pilotwings 64",
  developers: ["Nintendo"],
  publisher: "Nintendo",
  originalYear: 1996,
  genre: "simulation",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux"],
  status: "alpha",
  release: { version: "0.1.1", date: "2026-09-17" },
  sources: ["https://github.com/danielgomesvieira2000/pilotwings-64-recomp"],
  license: {
    spdx: "NOASSERTION",
    note: "Repository ships no license file, so reuse rights are unstated.",
  },
  verified: false,
  originalSystems: ["Nintendo 64"],
  features: [
    "Widescreen at the display aspect ratio with the HUD at the screen edges",
    "High frame rate through matrix interpolation, up to the display refresh rate",
    "Launcher with graphics, sound and control settings, remapping and mod support",
    "Keyboard and controller support",
  ],
  featuresEs: [
    "Panorámico según la relación de aspecto de la pantalla con el HUD en los bordes",
    "Framerate alto mediante interpolación de matrices, hasta el refresco de la pantalla",
    "Lanzador con ajustes de gráficos, sonido y control, reasignación y soporte de mods",
    "Soporte de teclado y mando",
  ],
  requirements: {
    minimum: "Linux builds need a Vulkan driver plus SDL2, GTK 3 and FreeType",
  },
  summary: "Pilotwings 64 is a 1996 flight simulation video game developed by Nintendo and Paradigm Simulation and published by Nintendo for the Nintendo 64. It was one of three launch titles for the Nintendo 64 in Japan as well as Europe and one of two launch titles in North America, along with Super Mario 64. Pilotwings 64 is a sequel to Pilotwings for the Super Nintendo Entertainment System, which was a North American launch game for its respective console in 1991. Also like that game, Pilotwings 64 received production input from Nintendo producer and EAD General Manager Shigeru Miyamoto.",
  summaryEs: "Pilotwings 64 es un videojuego para la Nintendo 64 publicado en 1996, junto con el lanzamiento de la consola. Fue el único de los dos títulos lanzados conjuntamente con la consola junto con Super Mario 64. El juego es una secuela de Pilotwings, aparecido para la SNES, el cual fue también un título publicado con el lanzamiento de esta consola.",
  notes:
    "Static recompilation of Pilotwings 64 with N64Recomp; the player supplies their own legally obtained cartridge. The repository describes the port as AI-coded, hence the AI disclosure.",
  notesEs:
    "Recompilación estática de Pilotwings 64 con N64Recomp; el jugador aporta su propio cartucho obtenido legalmente. El repositorio describe el port como programado por IA, de ahí la declaración de IA.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Pilotwings%2064%20(USA).png",
    alt: "Pilotwings 64 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Pilotwings%2064%20(USA).png",
      alt: "Pilotwings 64 (screenshot)",
      credit: "Libretro",
    },
  ],
};
