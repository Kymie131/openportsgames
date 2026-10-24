import type { Port } from "@/lib/ports/schema";

export const crashBandicoot: Port = {
  schema: "port",
  id: "crash-bandicoot",
  title: "Crash Bandicoot Launcher",
  game: "Crash Bandicoot",
  developers: ["Naughty Dog"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1996,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  platforms: ["windows", "linux", "android"],
  status: "stable",
  release: { version: "2.2", date: "2026-10-14" },
  sources: ["https://github.com/Matteo842/CrashBandicoot-Launcher"],
  license: { spdx: "MIT" },
  verified: true,
  verifiedAt: "2026-10-14",
  originalSystems: ["PlayStation"],
  features: [
    "Native widescreen support with retail-parity entity culling",
    "High frame rate fixes and PC GPU workarounds",
    "Windows, Linux and Android builds from official releases",
  ],
  featuresEs: [
    "Soporte panorámico nativo con descarte de entidades igual al minorista",
    "Arreglos de framerate alto y soluciones para GPU de PC",
    "Builds para Windows, Linux y Android desde releases oficiales",
  ],
  screenshots: [
    {
      src: "https://github.com/user-attachments/assets/749a8631-fb87-4a33-8149-ccbb104d6412",
      alt: "Crash Bandicoot running as a native recompilation with the pause overlay open",
      credit: "Crash Bandicoot Launcher",
    },
  ],
  summary: "Crash Bandicoot is a video game franchise created by Naughty Dog as a flagship title for Sony's PlayStation console. The series began with the development of the first game in 1994, inspired by the emerging capabilities of 3D consoles and games like Donkey Kong Country (1994). The protagonist, initially conceived as \"Willy the Wombat\", evolved into Crash Bandicoot, a goofy, genetically mutated eastern barred bandicoot who escapes the clutches of the mad scientist Doctor Neo Cortex.",
  summaryEs: "Crash Bandicoot es una franquicia de videojuegos creada por Naughty Dog como título insignia para la consola PlayStation de Sony. La serie comenzó con el desarrollo del primer juego en 1994, inspirado en las capacidades emergentes de las consolas 3D y en juegos como Donkey Kong Country (1994). El protagonista, concebido inicialmente como «Willy the Wombat», evolucionó hasta convertirse en Crash Bandicoot, un bandicoot rayado oriental, torpe y genéticamente mutado, que escapa de las garras del científico loco Doctor Neo Cortex.",
  notes:
    "Native PC port of Crash Bandicoot (PS1) produced via the RecompOne static recompilation stack, distributed as versioned releases. Requires your own PS1 disc dump. The project is not affiliated with the original developer.",
  notesEs:
    "Port nativo para PC de Crash Bandicoot (PS1) realizado con la pila de recompilación estática RecompOne y distribuido como releases versionadas. Requiere tu propio volcado del disco de PS1. El proyecto no está afiliado al desarrollador original.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Crash%20Bandicoot%20(Europe).png",
    alt: "Crash Bandicoot (box art)",
    credit: "Box art",
  },
};
