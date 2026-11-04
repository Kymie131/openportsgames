import type { Port } from "@/lib/ports/schema";

export const marioKartWorldSwitch2mac: Port = {
  schema: "port",
  id: "mario-kart-world-switch2mac",
  title: "Mario Kart World (switch2mac)",
  game: "Mario Kart World",
  developers: ["azmasm"],
  publisher: "Nintendo",
  originalYear: 2025,
  portType: "runtime-port",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/azmasm/switch2mac"],
  license: {
    spdx: "MIT",
    note: "MIT, with separate engine licences described in NOTICE.md",
  },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-04",
  originalSystems: ["Nintendo Switch 2"],
  summary:
    "Mario Kart World is a 2025 kart racing game developed by Nintendo EPD and published by Nintendo for the Nintendo Switch 2. It introduces an open world, off-road techniques, an elimination rally mode and unlockable costumes, with races for up to 24 players.",
  summaryEs:
    "Mario Kart World es un juego de carreras de karts de 2025 desarrollado por Nintendo EPD y publicado por Nintendo para Nintendo Switch 2. Introduce un mundo abierto, técnicas todoterreno, un modo de rally eliminatorio y trajes desbloqueables, con carreras de hasta 24 jugadores.",
  notes:
    "Builds a native Mac app for Mario Kart World 1.0.0 from your own dump on Apple silicon. The project's own engine runs the game's ARM64 code directly with NVN2 graphics translated to Metal, using its fork of NxNative; this is not an emulator. The README reports that it plays start to finish (menus, Grand Prix, free roam, traffic and movies) at around 58 fps in races on an M1 Max at 2560x1440. There is no packaged release: you build the app from source. No game files are included.",
  notesEs:
    "Genera una app nativa para Mac de Mario Kart World 1.0.0 a partir de tu propio volcado en Apple silicon. El motor propio del proyecto ejecuta directamente el código ARM64 del juego con los gráficos NVN2 traducidos a Metal, usando su fork de NxNative; no es un emulador. El README indica que se puede jugar de principio a fin (menús, Grand Prix, recorrido libre, tráfico y vídeos) a unos 58 fps en carrera con una M1 Max a 2560x1440. No hay una versión empaquetada: la app se compila desde el código fuente. No incluye archivos del juego.",
  warning:
    "Mario Kart World uses 13-16 GB of memory, up to about 20 GB in long free-roam sessions; 16 GB Macs may not run it smoothly.",
  warningEs:
    "Mario Kart World usa entre 13 y 16 GB de memoria, y hasta unos 20 GB en sesiones largas de recorrido libre; los Mac de 16 GB pueden no moverlo con fluidez.",
  requirements: {
    minimum:
      "Apple silicon Mac with macOS 26 or later, Xcode with the Metal toolchain, .NET 10 and Python 3.12",
  },
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/65/Mario_Kart_World_Cover_Artwork.png",
    alt: "Mario Kart World (box art)",
    credit: "Wikipedia",
  },
};
