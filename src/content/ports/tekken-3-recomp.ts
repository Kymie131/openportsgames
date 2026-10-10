import type { Port } from "@/lib/ports/schema";

export const tekken3Recomp: Port = {
  schema: "port",
  id: "tekken-3-recomp",
  title: "Tekken 3 Recompiled",
  game: "Tekken 3",
  developers: ["fabioap-cpu"],
  publisher: "Namco",
  originalYear: 1998,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/fabioap-cpu/Tekken3Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Static recompilation of Tekken 3 (PS1, USA) with PSXRecomp. Playable with memory-card saving and HD scaling; it ships a custom CDDA engine patch that removes the music stutters and shows the game's real internal FPS in the title bar.",
  notesEs:
    "Recompilación estática de Tekken 3 (PS1, USA) con PSXRecomp. Jugable con guardado en tarjeta de memoria y escalado HD; incluye un parche propio al motor de CDDA para eliminar los atascos de música y muestra el FPS real del juego en la barra de título.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Tekken%203%20(Europe)%20(Demo).png",
    alt: "Tekken 3 (box art)",
    credit: "Box art",
  },
};
