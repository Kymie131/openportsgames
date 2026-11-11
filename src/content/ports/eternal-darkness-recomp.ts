import type { Port } from "@/lib/ports/schema";

export const eternalDarknessRecomp: Port = {
  schema: "port",
  id: "eternal-darkness-recomp",
  title: "Eternal Darkness Recomp",
  game: "Eternal Darkness: Sanity's Requiem",
  developers: ["griches"],
  publisher: "Nintendo",
  originalYear: 2002,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows","macos","linux"],
  status: "beta",
  release: { version: "0.9.6", date: "2026-10-24" },
  sources: ["https://github.com/griches/EternalDarknessRecomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["GameCube"],
  downloads: [
    {
      label: "Linux",
      url: "https://github.com/griches/EternalDarknessRecomp/releases/download/v0.9.6/EternalDarkness-linux-x86_64-202610242126-e9ff8d6.tar.gz",
      size: "105.7 MB",
    },
    {
      label: "Macos",
      url: "https://github.com/griches/EternalDarknessRecomp/releases/download/v0.9.6/EternalDarkness-mac-202610200024-1cb3fe6.zip",
      size: "76.7 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/griches/EternalDarknessRecomp/releases/download/v0.9.6/EternalDarkness-windows-x64-202610200024-1cb3fe6.zip",
      size: "44.7 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/8d/Eternal_Darkness_box.jpg",
    alt: "Eternal Darkness: Sanity's Requiem (box art)",
    credit: "Wikipedia",
  },
  summary: "Eternal Darkness: Sanity's Requiem is a 2002 horror game developed by Silicon Knights and published by Nintendo for the GameCube. It was produced and directed by Denis Dyack. The game follows the story of several characters across a period of two millennia and four different locations on Earth, as they contend with an ancient evil who seeks to enslave humanity. The gameplay distinguishes itself with unique \"sanity effects\", visual and audial effects that confuse the player and often break the fourth wall.",
  summaryEs: "Eternal Darkness: Sanity's Requiem es un videojuego del género terror psicológico para la plataforma Nintendo GameCube, desarrollado por Silicon Knights. Fue lanzado el 24 de junio de 2002.",
  notes: "Eternal Darkness: Sanity's Requiem (GameCube, 2002) as a native port for windows, macos, linux via static recompilation, not an emulator. It ships no game code or data: bring your own copy. Latest release: v0.9.0.",
  notesEs: "Eternal Darkness: Sanity's Requiem (GameCube, 2002) como port nativo para windows, macos, linux mediante recompilación estática, no un emulador. No incluye código ni datos del juego: aporta tu propia copia. Última release: v0.9.0.",
};
