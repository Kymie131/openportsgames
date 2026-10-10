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
  release: { version: null, date: null },
  sources: ["https://github.com/alondero/automobililamborghini-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "Static recompilation of Automobili Lamborghini (N64) with N64Recomp and the RT64 renderer. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Automobili Lamborghini (N64) con N64Recomp y el renderizador RT64. Requiere tu propia copia del juego.",
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
