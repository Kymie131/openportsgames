import type { Port } from "@/lib/ports/schema";

export const ghostship: Port = {
  schema: "port",
  id: "ghostship",
  title: "Ghostship",
  game: "Super Mario 64",
  developers: ["HarbourMasters"],
  publisher: "Nintendo",
  originalYear: 1996,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos", "android", "ios", "switch"],
  status: "beta",
  release: { version: "3.0.0", date: "2026-09-07" },
  sources: [
    "https://github.com/HarbourMasters/Ghostship",
    "https://www.harbourmasters.org/game/ghostship",
  ],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  summary: "Super Mario 64 is a 1996 platform game developed and published by Nintendo for the Nintendo 64. It is the first Super Mario game to feature 3D graphics, combining traditional Super Mario gameplay, visual style, and characters in a large open world. In the game, Bowser invades Princess Peach's castle, kidnaps her, and hides the castle's Power Stars in different worlds inside magical paintings. As Mario, the player traverses levels and collects Power Stars to unlock areas of the castle, reach Bowser and rescue Peach.",
  summaryEs: "Super Mario 64 es un videojuego de plataformas desarrollado y publicado por Nintendo para la Nintendo 64. Es la primera entrega de Super Mario en mostrar gráficos 3D, que combina la mecánica tradicional de la franquicia, su estilo visual y sus personajes en un amplio mundo abierto. En la historia, Bowser invade el castillo de la Princesa Peach, la secuestra y esconde las Estrellas de Poder en diferentes mundos situados dentro de cuadros mágicos. En el papel de Mario, el jugador recorre los niveles y recoge las estrellas para desbloquear zonas, llegar hasta Bowser y rescatar a Peach.",
  notes:
    "Native port of Super Mario 64 from the decompilation, by the HarbourMasters team. Uses the game's data from your own legally obtained ROM. Multiplatform, including Android, iOS and Switch.",
  notesEs:
    "Port nativo de Super Mario 64 a partir de la decompilación, del equipo HarbourMasters. Usa los datos del juego de tu propia ROM obtenida legalmente. Multiplataforma, incluidos Android, iOS y Switch.",
  downloads: [
    {
      label: "macOS",
      url: "https://github.com/HarbourMasters/Ghostship/releases/download/3.0.0/Nautilus-Alfa-Mac.zip",
      size: "22.2 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/HarbourMasters/Ghostship/releases/download/3.0.0/Nautilus-Alfa-Win64.zip",
      size: "19.4 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/HarbourMasters/Ghostship/releases/download/3.0.0/Nautilus-Alfa-Linux.zip",
      size: "17.2 MB",
    },
    {
      label: "Android",
      url: "https://github.com/HarbourMasters/Ghostship/releases/download/3.0.0/Nautilus-Alfa-Android.zip",
      size: "13.5 MB",
    },
    {
      label: "iOS",
      url: "https://github.com/HarbourMasters/Ghostship/releases/download/3.0.0/Nautilus-Alfa-iOS.zip",
      size: "4.9 MB",
    },
  ],
  cover: {
    src: "https://raw.githubusercontent.com/HarbourMasters/Ghostship/refs/heads/develop/nx-logo.jpg",
    alt: "Super Mario 64 (cover)",
    credit: "SteamGridDB",
  },
};
