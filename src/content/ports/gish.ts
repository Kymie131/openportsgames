import type { Port } from "@/lib/ports/schema";

export const gish: Port = {
  schema: "port",
  id: "gish",
  title: "Gish (Android)",
  game: "Gish",
  developers: ["EXL"],
  publisher: "Chronic Logic",
  originalYear: 2004,
  portType: "source-port",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/EXL/Gish"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "Gish isn't your average hero. In fact, he's not your average anything...you see, Gish is a ball of tar. A Sunday stroll with his lady friend, Brea, goes awry when a shadowy figure emerges from an open manhole and pulls Brea below ground.",
  summaryEs: "Gish es un videojuego de plataformas publicado por Chronic Logic en 2007.",
  notes:
    "Android port of the physics platformer Gish, built on SDL2, OpenAL and GL4ES. It uses the game's released source and needs the original data files.",
  notesEs:
    "Port a Android del plataformas físico Gish, construido sobre SDL2, OpenAL y GL4ES. Usa el código liberado del juego y necesita los archivos de datos originales.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/55/Gish_%28video_game%29.jpg",
    alt: "Gish (box art)",
    credit: "Wikipedia",
  },
};
