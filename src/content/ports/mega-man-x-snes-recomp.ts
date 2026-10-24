import type { Port } from "@/lib/ports/schema";

export const megaManXSnesRecomp: Port = {
  schema: "port",
  id: "mega-man-x-snes-recomp",
  title: "Mega Man X SNES Recompiled",
  game: "Mega Man X",
  developers: ["Capcom"],
  publisher: "Capcom",
  originalYear: 1993,
  genre: "platformer",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "2.2.3-alpha", date: "2026-10-14" },
  sources: ["https://github.com/mstan/MegaManXSNESRecomp"],
  discord: "https://discord.gg/Ad9BwSzctP",
  license: {
    spdx: "NOASSERTION",
    note: "Repository declares no SPDX license, so reuse rights are unstated.",
  },
  verified: false,
  originalSystems: ["Super Nintendo"],
  features: [
    "Adaptive and fixed widescreen respecting display aspect",
    "Launcher can be reopened mid-game with Ctrl+L or Select+L3",
    "Shared SNES shader presets and pixel-aspect geometry, saved on close",
  ],
  featuresEs: [
    "Panorámico adaptativo y fijo que respeta la relación de aspecto de la pantalla",
    "El lanzador puede reabrirse a mitad de partida con Ctrl+L o Select+L3",
    "Ajustes predefinidos de shaders de SNES compartidos y geometría con aspect ratio de píxel, guardados al cerrar",
  ],
  summary: "Mega Man X is a 1993 platform game developed and published by Capcom for the Super Nintendo Entertainment System. It was the first Mega Man game for the 16-bit console and the first game in the Mega Man X series, a spin-off of the original Mega Man series that began on the Super NES's predecessor, the Nintendo Entertainment System. The game takes place a century after the original Mega Man series, and is set in a futuristic world populated by both humans and \"Reploids\", robots capable of thinking, feeling, and growing like their human creators.",
  summaryEs: "Mega Man X, conocido como Rockman X en Japón, es un videojuego desarrollado en 1993 por Capcom, es el primer videojuego de la serie Mega Man X. Mega Man X es la primera subsaga de Mega Man, y fue creada principalmente como el escalón para progresar desde los videojuegos de Mega Man de la NES a los de la Super Nintendo.",
  notes:
    "Mega Man X recompiled for the Super Nintendo with snesrecomp; the player supplies their own legally obtained game.",
  notesEs:
    "Mega Man X recompilado para Super Nintendo con snesrecomp; el jugador aporta su propio juego obtenido legalmente.",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/mstan/MegaManXSNESRecomp/main/docs/screenshots/widescreen-ocean.png",
      alt: "Ocean stage in widescreen on Mega Man X SNES Recompiled",
      credit: "MegaManXSNESRecomp",
    },
    {
      src: "https://raw.githubusercontent.com/mstan/MegaManXSNESRecomp/main/docs/screenshots/widescreen-highway.png",
      alt: "Highway stage in widescreen on MegaManXSNESRecomp",
      credit: "MegaManXSNESRecomp",
    },
    {
      src: "https://raw.githubusercontent.com/mstan/MegaManXSNESRecomp/main/docs/screenshots/widescreen-snow-base.png",
      alt: "Snow base stage in widescreen on MegaManXSNESRecomp",
      credit: "MegaManXSNESRecomp",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mega%20Man%20X%20(Europe).png",
    alt: "Mega Man X (box art)",
    credit: "Box art",
  },
};
