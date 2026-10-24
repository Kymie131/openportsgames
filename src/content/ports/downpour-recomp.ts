import type { Port } from "@/lib/ports/schema";

export const downpourRecomp: Port = {
  schema: "port",
  id: "downpour-recomp",
  title: "Downpour Recompilation",
  game: "Silent Hill: Downpour",
  developers: ["Vatra Games"],
  publisher: "Konami Digital Entertainment",
  originalYear: 2012,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  platforms: ["windows"],
  status: "stable",
  release: { version: "1.1.8", date: "2026-09-02" },
  sources: ["https://github.com/LittleBitUA/DownpourRecomp"],
  license: { spdx: "BSD-3-Clause" },
  verified: true,
  verifiedAt: "2026-09-19",
  originalSystems: ["Xbox 360"],
  features: [
    "Native 60 FPS at 1080p (scales with your display)",
    "Keyboard and mouse controls",
    "Steam Deck support",
    "DLL-based mod framework",
  ],
  featuresEs: [
    "60 FPS nativos a 1080p (escala según tu pantalla)",
    "Controles de teclado y ratón",
    "Soporte para Steam Deck",
    "Marco de mods basado en DLL",
  ],
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/LittleBitUA/DownpourRecomp/main/docs/screenshots/v1-preview-yard-twilight.png",
      alt: "Silent Hill: Downpour outdoors at twilight in Downpour Recompilation",
      credit: "Downpour Recompilation",
    },
    {
      src: "https://raw.githubusercontent.com/LittleBitUA/DownpourRecomp/main/docs/screenshots/v1-preview-bedroom-ua.png",
      alt: "Silent Hill: Downpour inside a lit bedroom in Downpour Recompilation",
      credit: "Downpour Recompilation",
    },
    {
      src: "https://raw.githubusercontent.com/LittleBitUA/DownpourRecomp/main/docs/screenshots/v1-preview-silent-hill-sign.png",
      alt: "The Silent Hill welcome sign in Downpour Recompilation",
      credit: "Downpour Recompilation",
    },
    {
      src: "https://raw.githubusercontent.com/LittleBitUA/DownpourRecomp/main/docs/screenshots/v1-preview-rusty-key.png",
      alt: "Picking up a rusty key in Downpour Recompilation",
      credit: "Downpour Recompilation",
    },
  ],
  summary: "Silent Hill: Downpour is a 2012 survival horror game developed by Vatra Games and published by Konami. The seventh installment in the Silent Hill series, the game centers on Murphy Pendleton, a prisoner who enters the town of Silent Hill, periodically entering the otherworld, leading him to unlock repressed memories. The game uses a third-person view and can be played in 3D. It was released in March 2012.",
  summaryEs: "Silent Hill: Downpour es un videojuego de terror y supervivencia de 2012 desarrollado por Vatra Games y publicado por Konami. Downpour está ambientada en la serie de la ciudad americana ficticia del mismo nombre y se centra en Murphy Pendleton, un prisionero que entra en la ciudad, entrando periódicamente en el otro mundo, lo que lo lleva a desbloquear recuerdos reprimidos. El juego utiliza una vista en tercera persona y se puede jugar en 3D. Fue lanzado en marzo de 2012.",
  notes:
    "Native Windows port of the Xbox 360 version of Silent Hill: Downpour, produced by statically recompiling the PowerPC binary into x64 code. Requires you to dump the game partition from your own legally owned disc or digital copy — the launcher does the extraction. The developers named it 'Downpour Recompilation' and confirmed the extensive use of AI-assisted tooling during development.",
  notesEs:
    "Port nativo para Windows de la versión de Xbox 360 de Silent Hill: Downpour, producido recompilando estáticamente el binario PowerPC a código x64. Requiere que extraigas la partición del juego de tu propio disco o copia digital obtenida legalmente; el lanzador hace la extracción. Sus desarrolladores lo llamaron 'Downpour Recompilation' y confirmaron un uso intensivo de herramientas asistidas por IA durante el desarrollo.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/e/e2/Silent_Hill_Downpour_box_art.jpg",
    alt: "Silent Hill: Downpour (box art)",
    credit: "Wikipedia",
  },
};
