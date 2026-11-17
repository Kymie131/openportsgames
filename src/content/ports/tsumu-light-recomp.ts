import type { Port } from "@/lib/ports/schema";

export const tsumuLightRecomp: Port = {
  schema: "port",
  id: "tsumu-light-recomp",
  title: "Tsumu Light",
  game: "Tsumu Light",
  developers: ["mstan"],
  publisher: "Taito",
  originalYear: 1999,
  portType: "recompilation",
  genre: "puzzle",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.1.1", date: "2026-10-31" },
  sources: ["https://github.com/mstan/TsumuLightRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Tsumu Light is a 1999 puzzle game developed and published by Taito for the PlayStation.",
  summaryEs: "Tsumu Light es un juego de puzles de 1999 desarrollado y publicado por Taito para PlayStation.",  notes:
    "Native recompilation of Tsumu Light (PlayStation). The player supplies their own legally obtained disc image; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Tsumu Light (PlayStation). El jugador aporta su propio material obtenido legalmente (disc image); el repositorio no incluye contenido del juego.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/mstan/TsumuLightRecomp/releases/download/v0.1.1/TsumuLightRecomp-v0.1.1-windows-x64.zip",
      size: "29.1 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Tsumu%20Light%20(Japan).png",
    alt: "Tsumu Light (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Tsumu%20Light%20(Japan).png",
      alt: "Tsumu Light (screenshot)",
      credit: "Libretro",
    },
  ],
};
