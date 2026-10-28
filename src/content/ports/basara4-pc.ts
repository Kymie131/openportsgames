import type { Port } from "@/lib/ports/schema";

export const basara4Pc: Port = {
  schema: "port",
  id: "basara4-pc",
  title: "Sengoku Basara 4: Sumeragi (PC)",
  game: "Sengoku Basara 4: Sumeragi",
  developers: ["razzconnect"],
  publisher: "Capcom",
  originalYear: 2015,
  portType: "runtime-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "1.0.2", date: "2026-10-24" },
  sources: ["https://github.com/razzconnect/basara4-native-pc"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-10-26",
  originalSystems: ["PlayStation 4"],
  summary: "Sengoku Basara 4: Sumeragi is a 2015 hack-and-slash game developed and published by Capcom for PlayStation 4. It expands Sengoku Basara 4 with new characters, stages and story routes set in a stylised Warring States Japan.",
  summaryEs: "Sengoku Basara 4: Sumeragi es un videojuego de acción y hack and slash de 2015 desarrollado y publicado por Capcom para PlayStation 4. Amplía Sengoku Basara 4 con nuevos personajes, escenarios y rutas argumentales ambientadas en un Japón feudal estilizado.",
  cover: {
    src: "https://openportsgames.com/covers/generated/sengoku-basara-4-sumeragi.svg",
    alt: "Sengoku Basara 4: Sumeragi (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Sengoku Basara 4: Sumeragi (Capcom, 2015) running natively on Windows. You need your own PS4 dump (CUSA01159); no game files are included.",
  notesEs: "Sengoku Basara 4: Sumeragi (Capcom, 2015) en Windows de forma nativa. Necesitas tu propio dump de PS4 (CUSA01159); no incluye archivos del juego.",
};

