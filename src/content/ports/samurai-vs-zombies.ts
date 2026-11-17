import type { Port } from "@/lib/ports/schema";

export const SamuraiVsZombies: Port = {
  schema: "port",
  id: "samurai-vs-zombies",
  title: "Samurai vs. Zombies",
  game: "Samurai vs. Zombies",
  developers: ["Decomp-And-Recomp"],
  publisher: "Glu Mobile",
  originalYear: 2013,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "1.2", date: "2025-11-25" },
  sources: ["https://github.com/Decomp-And-Recomp/Samurai-Vs-Zombies"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Other"],
  summary: "Samurai vs. Zombies is a 2013 mobile action game developed and published by Glu Mobile.",
  summaryEs: "Samurai vs. Zombies es un juego de acción móvil de 2013 desarrollado y publicado por Glu Mobile.",  downloads: [
    {
      label: "Windows",
      url: "https://github.com/Decomp-And-Recomp/Samurai-Vs-Zombies/releases/download/1.2/Samurai.Vs.Zombies.PC.7z",
      size: "124.3 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/samurai-vs-zombies.svg",
    alt: "Samurai Vs Zombies (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Decompilation of Samurai Vs Zombies by Glu.",
  notesEs: "Decompilación de Samurai Vs Zombies de Glu.",
};
