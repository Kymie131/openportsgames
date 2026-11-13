import type { Port } from "@/lib/ports/schema";

export const StarWarsEpisode1Racer: Port = {
  schema: "port",
  id: "star-wars-episode-1-racer",
  title: "Star Wars Episode 1: Racer",  game: "Star Wars: Episode I - Racer",
  developers: ["tim-tim707"],  publisher: "LucasArts",  originalYear: 1999,
  portType: "decompilation",  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.17", date: "2026-08-28" },
  sources: ["https://github.com/tim-tim707/SW_RACER_RE"],
  license: { spdx: "AGPL-3.0" },
  verified: false,
  sourceVerified: true,  originalSystems: ["Nintendo 64"],  summary: "Star Wars: Episode I - Racer is a 1999 racing game developed and published by LucasArts. Players pilot podracers across tracks from the film and beyond, upgrading engines and repairing damage between races.",  summaryEs: "Star Wars: Episode I - Racer es un juego de carreras de 1999 desarrollado y publicado por LucasArts. El jugador pilota pods en circuitos de la película y más allá, mejorando motores y reparando daños entre carreras.",  downloads: [
    {
      label: "Windows",
      url: "https://github.com/tim-tim707/SW_RACER_RE/releases/download/v0.17/community_improvement_mod_v0_17.zip",
      size: "83.4 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/star-wars-episode-1-racer.svg",
    alt: "Star Wars Episode 1: Racer (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Star Wars Episode 1 Racer Decompilation project.",
  notesEs: "Proyecto de decompilación de Star Wars Episode I: Racer.",
};
