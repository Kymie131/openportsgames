import type { Port } from "@/lib/ports/schema";

export const marioStrikersChargedRecomp: Port = {
  schema: "port",
  id: "mario-strikers-charged-recomp",
  title: "Recharged",
  game: "Mario Strikers Charged",
  developers: ["previouslevelgames"],
  publisher: "Nintendo",
  originalYear: 2007,
  portType: "decompilation",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.1.1", date: "2026-10-31" },
  sources: ["https://github.com/previouslevelgames/recharged"],
  license: {
    spdx: "CC0-1.0",
    note: "original code, tools and docs; third-party notices apply",
  },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-05",
  originalSystems: ["Wii"],
  related: ["strikers-wiicompiled", "yannicksuter-mscharged-decomp"],
  summary:
    "Mario Strikers Charged is a 2007 sports game developed by Next Level Games and published by Nintendo for the Wii. It is the sequel to Super Mario Strikers and adds power-ups, Mega Strikes and online play.",
  summaryEs:
    "Mario Strikers Charged es un videojuego deportivo de 2007 desarrollado por Next Level Games y publicado por Nintendo para Wii. Es la secuela de Super Mario Strikers y añade potenciadores, Mega Strikes y juego en línea.",
  features: [
    "The whole game: Domination, Road to the Striker Cup, Strikers 101, the Hall of Fame, cheats, movies, music and sound.",
    "USA, European, Japanese and Korean versions, each with its own languages and saves.",
    "Up to four players with keyboard, gamepads and Wii Remotes with Nunchuk.",
    "3D at your window resolution, 4x antialiasing, 4:3 or 16:9, windowed or fullscreen.",
    "30, 60, 120, 144 fps, display refresh or unlimited, at the original game speed.",
    "Optional tweaks and three original bug fixes; a launcher that checks your disc and updates in place.",
  ],
  featuresEs: [
    "El juego completo: Domination, Road to the Striker Cup, Strikers 101, el Hall of Fame, trucos, vídeos, música y sonido.",
    "Versiones USA, europea, japonesa y coreana, cada una con sus idiomas y partidas.",
    "Hasta cuatro jugadores con teclado, mandos y Wii Remotes con Nunchuk.",
    "3D a la resolución de tu ventana, 4x antialiasing, 4:3 o 16:9, ventana o pantalla completa.",
    "30, 60, 120, 144 fps, refresco del monitor o ilimitado, a la velocidad original.",
    "Ajustes opcionales y tres bugs originales corregidos; lanzador que comprueba tu disco y se actualiza.",
  ],
  notes:
    "Recharged is a native PC port of Mario Strikers Charged built from the mscharged-decomp reconstruction. It is not an emulator: the game's C/C++ code is compiled for your PC and Wii system services are implemented natively. It needs your own .iso, .rvz or .wbfs disc image; no game files are included. Windows, Linux, Steam Deck and macOS (universal, signed and notarized) builds are published.",
  notesEs:
    "Recharged es un port nativo para PC de Mario Strikers Charged construido a partir de la reconstrucción mscharged-decomp. No es un emulador: el código C/C++ del juego se compila para tu PC y los servicios del sistema de Wii se implementan de forma nativa. Necesita tu propia imagen .iso, .rvz o .wbfs; no incluye archivos del juego. Hay builds para Windows, Linux, Steam Deck y macOS (universal, firmada y notarizada).",
  installGuide: {
    title: "Install Recharged",
    steps: [
      "Unpack the package into its own folder. On macOS, open the disk image, drag the Recharged folder to Applications and eject the image.",
      "Start recharged (recharged.exe on Windows). On macOS, open it from Applications the first time, not from the disk image.",
      "In the launcher, add the folder with your own .iso, .rvz or .wbfs game image and press Play.",
      "On Steam Deck, follow the Steam Deck guide to add the game to Steam.",
    ],
    stepsEs: [
      "Descomprime el paquete en su propia carpeta. En macOS, abre la imagen de disco, arrastra la carpeta Recharged a Aplicaciones y expulsa la imagen.",
      "Abre recharged (recharged.exe en Windows). En macOS, ábrelo desde Aplicaciones la primera vez, no desde la imagen de disco.",
      "En el lanzador, añade la carpeta con tu propia imagen .iso, .rvz o .wbfs y pulsa Play.",
      "En Steam Deck, sigue la guía de Steam Deck para añadir el juego a Steam.",
    ],
  },
  downloads: [
    {
      label: "Windows x86_64",
      url: "https://github.com/previouslevelgames/recharged/releases/download/v1.1.1/recharged-1.1.1%2Bgf3664f778955-windows-x86_64.zip",
      size: "44 MB",
      note: "Windows 10/11 · x64",
    },
    {
      label: "Linux x86_64",
      url: "https://github.com/previouslevelgames/recharged/releases/download/v1.1.1/recharged-1.1.1%2Bgf3664f778955-linux-x86_64.tar.gz",
      size: "32 MB",
      note: "Vulkan · x86_64",
    },
    {
      label: "Steam Deck",
      url: "https://github.com/previouslevelgames/recharged/releases/download/v1.1.1/recharged-1.1.1%2Bgf3664f778955-steamdeck-x86_64.tar.gz",
      size: "32 MB",
      note: "SteamOS 3.7+",
    },
    {
      label: "macOS universal",
      url: "https://github.com/previouslevelgames/recharged/releases/download/v1.1.1/recharged-1.1.1%2Bgf3664f778955-macos-universal.dmg",
      size: "49 MB",
      note: "Apple Silicon & Intel · 15+",
    },
  ],
  requirements: {
    minimum:
      "Windows 10/11 x64, Linux x86_64 with Vulkan, or macOS 15+ (Apple Silicon or Intel); plus your own .iso, .rvz or .wbfs disc image",
  },
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Wii/Named_Boxarts/Mario%20Strikers%20Charged%20(USA)%20(En,Fr,Es)%20(Rev%201).png",
    alt: "Mario Strikers Charged (box art)",
    credit: "Box art",
  },
};
