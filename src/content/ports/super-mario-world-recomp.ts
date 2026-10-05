import type { Port } from "@/lib/ports/schema";

export const superMarioWorldRecomp: Port = {
  schema: "port",
  id: "super-mario-world-recomp",
  title: "Super Mario World Recompiled",
  game: "Super Mario World",
  developers: ["Nintendo EAD"],
  publisher: "Nintendo",
  originalYear: 1990,
  genre: "platformer",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "0.14.2", date: "2026-09-22" },
  sources: ["https://github.com/mstan/SuperMarioWorldRecomp"],
  discord: "https://discord.gg/S4MvUGQFwd",
  license: {
    spdx: "NOASSERTION",
    note: "Repository declares no SPDX license, so reuse rights are unstated.",
  },
  verified: false,
  originalSystem: "Super Nintendo",
  features: [
    "SMW Adaptive Widescreen mod enabled from the launcher's Mods page",
    "Aspect ratio options: fit to screen by default, plus fixed ratios",
  ],
  featuresEs: [
    "Mod SMW Adaptive Widescreen activado desde la página Mods del lanzador",
    "Opciones de relación de aspecto: ajustar a pantalla por defecto, más relaciones fijas",
  ],
  notes:
    "Super Mario World recompiled for the Super Nintendo with snesrecomp; the player supplies their own legally obtained game.",
  notesEs:
    "Super Mario World recompilado para Super Nintendo con snesrecomp; el jugador aporta su propio juego obtenido legalmente.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Mario%20World%20(USA).png",
    alt: "Super Mario World (box art)",
    credit: "Box art",
  },
};
