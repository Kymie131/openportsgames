import type { Port } from "@/lib/ports/schema";

export const tetrisGbRecomp: Port = {
  schema: "port",
  id: "tetris-gb-recomp",
  title: "Tetris (Game Boy) Recompiled",
  game: "Tetris",
  developers: ["PortsDR"],
  publisher: "Nintendo",
  originalYear: 1989,
  portType: "recompilation",
  genre: "puzzle",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "0.10.2", date: "2026-10-21" },
  sources: ["https://github.com/etroimcasso/Kirpich"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Game Boy"],
  summary: "Tetris is a puzzle video game created by Alexey Pajitnov, a Soviet software engineer, in the mid-1980s. In Tetris, falling pieces consisting of four connected blocks, known as tetrominoes, must be sorted into a pile. Once a horizontal line of the playfield is filled with blocks, the line disappears, granting points and preventing the pile from reaching the top. The objective is to score as much points as possible before the game ends when the blocks do reach the top. This gameplay has been used in approximately 220 versions across at least 70 platforms.",
  summaryEs: "Tetris es un videojuego de lógica soviético originalmente diseñado y programado por Alekséi Pázhitnov. Se publicó el 6 de junio de 1984, mientras trabajaba para la Academia de Ciencias de la Unión Soviética en Moscú, RSFS de Rusia. Su nombre deriva del prefijo numérico griego tetra- (cuatro), ya que todas las piezas del juego, conocidas como tetrominós, contienen cuatro segmentos y, del tenis, el deporte favorito de Pázhitnov.",
  notes: "Community entry from PortsDR. No repository is public; the game is not included.",
  notesEs: "Entrada comunitaria de PortsDR. No hay repositorio público; el juego no se incluye.",
  downloads: [
    {
      label: "Linux",
      url: "https://github.com/etroimcasso/Kirpich/releases/download/v0.10.2/Kirpich-linux-arm64.zip",
      size: "2.2 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/etroimcasso/Kirpich/releases/download/v0.10.2/Kirpich-linux-x64.zip",
      size: "2.4 MB",
    },
    {
      label: "macOS DMG",
      url: "https://github.com/etroimcasso/Kirpich/releases/download/v0.10.2/Kirpich-macOS-arm64.dmg",
      size: "2.0 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/etroimcasso/Kirpich/releases/download/v0.10.2/Kirpich-windows-arm64.zip",
      size: "1.7 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/etroimcasso/Kirpich/releases/download/v0.10.2/Kirpich-windows-x64.zip",
      size: "1.8 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy/Named_Boxarts/Tetris%20(Japan)%20(En).png",
    alt: "Tetris (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy/Named_Snaps/Tetris%20(Japan)%20(En).png",
      alt: "Tetris (screenshot)",
      credit: "Libretro",
    },
  ],
};
