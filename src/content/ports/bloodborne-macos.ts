import type { Port } from "@/lib/ports/schema";

export const bloodborneMacos: Port = {
  schema: "port",
  id: "bloodborne-macos",
  title: "Bloodborne (macOS)",
  game: "Bloodborne",
  developers: ["Wooloomooloo2"],
  publisher: "FromSoftware",
  originalYear: 2015,
  portType: "runtime-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["macos"],
  status: "beta",
  release: { version: "0.5.15", date: "2026-11-10" },
  sources: ["https://github.com/Wooloomooloo2/bloodborne_mac_port"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 4"],
  downloads: [
    {
      label: "macOS",
      url: "https://github.com/Wooloomooloo2/bloodborne_mac_port/releases/download/mac-v0.5.15/Bloodborne-macOS-0.5.15.zip",
      size: "46.5 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/Wooloomooloo2/bloodborne_mac_port/releases/download/mac-v0.5.15/pkg_extract-macOS.zip",
      size: "553 KB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/68/Bloodborne_Cover_Wallpaper.jpg",
    alt: "Bloodborne (box art)",
    credit: "Wikipedia",
  },
  summary: "Bloodborne is a 2015 action role-playing game developed by FromSoftware and published by Sony Computer Entertainment for the PlayStation 4. The game follows a Hunter through the decrepit Gothic, Victorian-era inspired city of Yharnam, whose inhabitants are afflicted with a blood-borne disease. Attempting to find the source of the plague, the player's character unravels the city's mysteries while fighting beasts and eldritch beings.",
  summaryEs: "Bloodborne es un videojuego de rol de acción dirigido por Hidetaka Miyazaki, desarrollado por From Software y distribuido por JapanStudio y Sony Computer Entertainment para la plataforma de PlayStation 4. El videojuego sigue las acciones del personaje del jugador, el Cazador, a través de Yharnam, una ciudad ficticia de estilo victoriano, cuyos habitantes han sido afectados con una enfermedad de transmisión sanguínea anormal.",
  notes: "Bloodborne (FromSoftware, 2015) running on macOS through runtime layer. Latest release: mac-v0.5.2. You need your own copy of the game.",
  notesEs: "Bloodborne (FromSoftware, 2015) en macOS mediante capa de ejecución. Última release: mac-v0.5.2. Necesitas tu propia copia del juego.",
};
