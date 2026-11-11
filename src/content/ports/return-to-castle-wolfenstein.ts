import type { Port } from "@/lib/ports/schema";

export const rtcWolfenstein: Port = {
  schema: "port",
  id: "return-to-castle-wolfenstein",
  title: "Return to Castle Wolfenstein",
  game: "Return to Castle Wolfenstein",
  developers: ["iortcw team"],
  publisher: "Gray Matter Interactive",
  originalYear: 2001,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/iortcw/iortcw"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "Return to Castle Wolfenstein is a 2001 first-person shooter game developed by Gray Matter Studios and published by Activision. It was initially released for Microsoft Windows and subsequently for the PlayStation 2, Xbox, Linux, and Macintosh in the following years. The game serves as a reboot of the Wolfenstein series. id Software, the developers of Wolfenstein 3D, oversaw the development and were credited as executive producers.",
  summaryEs: "Return to Castle Wolfenstein es la tercera secuela del videojuego creado por id Software Wolfenstein 3D. Creado en el año 2001 por la desarrolladora Gray Matter Studios usando la tecnología de Quake III Arena. Fue un juego altamente esperado y de un éxito bastante marcado sobre todo en su aspecto multijugador. El 12 de agosto de 2010 el código fuente, tanto sencillo como multiplayer, fue liberado bajo los términos de la licencia GPL.",
  notes:
    "Open source reimplementation of the original game code. The upstream tag 1.51c combines three revisions in one string and cannot be represented as a semantic version, so no release version is recorded.",
  notesEs:
    "Reimplementación de código abierto del código del juego original. La etiqueta upstream 1.51c combina tres revisiones en una sola cadena y no puede representarse como versión semántica, así que no se registra versión de release.",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/iortcw/iortcw/master/MP/misc/wolf128.png",
      alt: "iortcw logo",
      credit: "iortcw",
    },
  ],
  downloads: [
    {
      label: "macOS",
      url: "https://github.com/iortcw/iortcw/releases/download/1.51c/iortcw-1.51c-mac-ub.zip",
      size: "26.4 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/iortcw/iortcw/releases/download/1.51c/iortcw-1.51c-mac-term.zip",
      size: "24.3 MB",
    },
    {
      label: "Windows x64",
      url: "https://github.com/iortcw/iortcw/releases/download/1.51c/iortcw-1.51c-win-x64.zip",
      size: "14.7 MB",
    },
    {
      label: "Windows x86",
      url: "https://github.com/iortcw/iortcw/releases/download/1.51c/iortcw-1.51c-win-x86.zip",
      size: "12.1 MB",
    },
    {
      label: "Linux x64",
      url: "https://github.com/iortcw/iortcw/releases/download/1.51c/iortcw-1.51c-linux-x86_64.zip",
      size: "10.3 MB",
    },
    {
      label: "Linux x86",
      url: "https://github.com/iortcw/iortcw/releases/download/1.51c/iortcw-1.51c-linux-x86.zip",
      size: "9.1 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/b/b0/Return_to_Castle_Wolfenstein_Coverart.jpg",
    alt: "Return to Castle Wolfenstein (box art)",
    credit: "Wikipedia",
  },
};
