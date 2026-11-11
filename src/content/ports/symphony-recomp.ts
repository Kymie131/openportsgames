import type { Port } from "@/lib/ports/schema";

export const symphonyRecomp: Port = {
  schema: "port",
  id: "symphony-recomp",
  title: "SymphonyRecomp",
  game: "Castlevania: Symphony of the Night",
  developers: ["Konami"],
  publisher: "Konami",
  originalYear: 1997,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "1.1.2p", date: "2026-11-03" },
  sources: ["https://github.com/BlackLabelHQ/SymphonyRecomp"],
  discord: "https://discord.gg/65g8ZEPnbR",
  license: {
    spdx: "NOASSERTION",
    note: "no SPDX license in the repository",
  },
  verified: false,
  originalSystems: ["PlayStation"],
  features: [
    "Widescreen and resolution scaling",
    "Built-in modding and asset replacement system",
    "Multiple UI languages and a themed interface",
    "Randomizer support with save metadata",
  ],
  featuresEs: [
    "Panorámico y escalado de resolución",
    "Sistema integrado de modding y reemplazo de recursos",
    "Interfaz en varios idiomas y una interfaz temática",
    "Soporte de randomizer con metadatos de guardado",
  ],
  summary:
    "Castlevania: Symphony of the Night is a 1997 action role-playing game developed and published by Konami for the PlayStation and Sega Saturn. It is a direct sequel to Castlevania: Rondo of Blood, set five years after its events. It was directed and produced by Toru Hagihara, with Koji Igarashi acting as assistant director.",
  summaryEs:
    "Castlevania: Symphony of the Night, conocido en Japón como Akumajō Dracula X: Gekka no Yasōkyoku , es un videojuego de acción-aventura de gráficos 2D desarrollado y publicado por Konami en el año 1997. Es el XIII episodio de las series de Castlevania, siendo este el primero lanzado para las consolas PlayStation y Saturn. Por otro lado, hablamos de una secuela directa de su antecesor solo lanzado en Japón: Akumajou Dracula X: Chi no Rondo para la plataforma de NEC PC-Engine CD.",
  notes:
    "Recompilation of Castlevania: Symphony of the Night (PS1) that runs natively on Windows (x64 and ARM64), Linux and macOS (Intel and Apple silicon). The v1.1.2p open-beta release adds language packs, a separate game-text language option, widescreen room-extension fills for most of the castle and libretro shader presets. The maintainers state the port is hand-written and does not use AI. Requires the game files from a disc copy you own and the .NET 10 runtime.",
  notesEs:
    "Recompilación de Castlevania: Symphony of the Night (PS1) que corre nativa en Windows (x64 y ARM64), Linux y macOS (Intel y Apple silicon). La versión beta abierta v1.1.2p añade paquetes de idioma, una opción separada para el idioma del texto del juego, relleno panorámico de salas para la mayor parte del castillo y presets de shaders de libretro. Los mantenedores afirman que el port está escrito a mano y no usa IA. Requiere los archivos de una copia en disco que poseas y el runtime .NET 10.",
  downloads: [
    {
      label: "Linux",
      url: "https://github.com/BlackLabelHQ/SymphonyRecomp/releases/download/v1.1.2p/SymphonyRecomp-v1.1.2p-linux-x64.tar.gz",
      size: "55.9 MB",
    },
    {
      label: "macOS x64",
      url: "https://github.com/BlackLabelHQ/SymphonyRecomp/releases/download/v1.1.2p/SymphonyRecomp-v1.1.2p-macos-x64.zip",
      size: "55.5 MB",
    },
    {
      label: "Windows x64",
      url: "https://github.com/BlackLabelHQ/SymphonyRecomp/releases/download/v1.1.2p/SymphonyRecomp-v1.1.2p-windows-x64.zip",
      size: "55.0 MB",
    },
    {
      label: "macOS arm64",
      url: "https://github.com/BlackLabelHQ/SymphonyRecomp/releases/download/v1.1.2p/SymphonyRecomp-v1.1.2p-macos-arm64.zip",
      size: "54.0 MB",
    },
    {
      label: "Windows arm64",
      url: "https://github.com/BlackLabelHQ/SymphonyRecomp/releases/download/v1.1.2p/SymphonyRecomp-v1.1.2p-windows-arm64.zip",
      size: "53.4 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Castlevania%20-%20Symphony%20of%20the%20Night%20(USA).png",
    alt: "Castlevania: Symphony of the Night (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Castlevania%20-%20Symphony%20of%20the%20Night%20(USA).png",
      alt: "Castlevania: Symphony of the Night (screenshot)",
      credit: "Libretro",
    },
  ],
};
