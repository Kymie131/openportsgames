import type { Port } from "@/lib/ports/schema";

export const automobiliLamborghiniRecomp: Port = {
  schema: "port",
  id: "automobili-lamborghini-recomp",
  title: "Automobili Lamborghini",
  game: "Automobili Lamborghini",
  developers: ["alondero"],
  publisher: "Titus",
  originalYear: 1997,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "android"],
  status: "beta",
  release: { version: "0.11.0", date: "2026-11-10" },
  sources: ["https://github.com/alondero/automobililamborghini-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Nintendo 64"],
  summary: "Automobili Lamborghini is a 1997 racing video game developed and published by Titus France for the Nintendo 64. It is a successor to Lamborghini American Challenge.",
  summaryEs: "Automobili Lamborghini es un videojuego de carreras de 1997 desarrollado y publicado por Titus Software para Nintendo 64. Es el sucesor de Lamborghini American Challenge.",
  notes:
    "Static recompilation of Automobili Lamborghini (N64) with N64Recomp and the RT64 renderer. It requires a copy of the game.",
  notesEs:
    "Recompilación estática de Automobili Lamborghini (N64) con N64Recomp y el renderizador RT64. Requiere una copia del juego.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/alondero/automobililamborghini-recomp/releases/download/v0.11.0/lamborghini-recomp-windows-x64.zip",
      size: "35.7 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/alondero/automobililamborghini-recomp/releases/download/v0.11.0/lamborghini-recomp-linux-x64.zip",
      size: "23.0 MB",
    },
    {
      label: "Android",
      url: "https://github.com/alondero/automobililamborghini-recomp/releases/download/v0.11.0/lamborghini-recomp-android-arm64.apk",
      size: "7.7 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Automobili%20Lamborghini%20(Europe).png",
    alt: "Automobili Lamborghini (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Automobili%20Lamborghini%20(Europe).png",
      alt: "Automobili Lamborghini (screenshot)",
      credit: "Libretro",
    },
  ],
};
