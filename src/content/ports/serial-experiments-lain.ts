import type { Port } from "@/lib/ports/schema";

export const SerialExperimentsLain: Port = {
  schema: "port",
  id: "serial-experiments-lain",
  title: "Serial Experiments Lain",
  game: "Serial Experiments Lain",
  developers: ["Y0oshi"],
  publisher: "Unknown",
  originalYear: 1998,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Y0oshi/lain-psx-decompiled"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  summary: "The Serial Experiments Lain video game, based on the anime of the same name, was released for PlayStation exclusively in Japan on November 26, 1998, by Pioneer LDC. It is largely dialogue-centric, differing from traditional video game gameplay structures. Throughout the game, the player, in the role of a therapist, unlocks pieces of information and multimedia with the assistance of the source material's protagonist, Lain Iwakura, to explore her mental state. This material includes Lain's therapy sessions, her diary, notes from her therapist, and video segments.",
  summaryEs: "Serial Experiments Lain es un videojuego lanzado exclusivamente en Japón para la consola PlayStation de Sony en el 26 de noviembre de 1998, dos meses después del último episodio del anime homónimo. Fue diseñado por Chiaki J. Konaka y Yasuyuki Ueda, y se convirtió en un \"simulador de red\" en el que el jugador navega para explorar la historia de Lain. MediaWorks publicó el mismo mes una guía del juego llamada Serial Experiments Lain Official Guide (ISBN 4-07-310083-1). El juego no fue clasificado en un género en particular y está completamente en japonés.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Serial%20Experiments%20Lain%20(Japan).png",
    alt: "Serial Experiments Lain (box art)",
    credit: "libretro",
  },
  notes:
    "Decompilation of Serial Experiments Lain (PlayStation) and a native Windows, macOS and Linux client.",
  notesEs:
    "Decompilación de Serial Experiments Lain (PlayStation) y cliente nativo para Windows, macOS y Linux.",
};
