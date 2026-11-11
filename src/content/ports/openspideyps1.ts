import type { Port } from "@/lib/ports/schema";

export const Openspideyps1: Port = {
  schema: "port",
  id: "openspideyps1",
  title: "OpenSpideyPS1",  game: "Spider-Man",
  developers: ["GTTeancum"],  publisher: "Activision",  originalYear: 2000,
  portType: "recompilation",  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/GTTeancum/SpideyPS1recomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,  originalSystems: ["PlayStation"],  summary: "Spider-Man is a 2000 action-adventure game developed by Neversoft and published by Activision for the PlayStation. Spider-Man swings across New York to stop a symbiote invasion orchestrated by Doctor Octopus and Venom.",  summaryEs: "Spider-Man es un juego de acción y aventura de 2000 desarrollado por Neversoft y publicado por Activision para PlayStation. Spider-Man se balancea por Nueva York para detener una invasión simbiote orquestada por Doctor Octopus y Venom.",  downloads: [
    {
      label: "Windows",
      url: "https://github.com/GTTeancum/SpideyPS1recomp/releases/download/sm2-v1.1/Spider-Man-2-1.1-Windows-x64.zip",
      size: "171.4 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/openspideyps1.svg",
    alt: "OpenSpideyPS1 (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Native recompilations of Neversoft's PlayStation Spider-Man games, built with RecompOne. Games are siloed; only the recompiler and runtime are shared.",
  notesEs:
    "Recompilaciones nativas de los juegos de Spider-Man de Neversoft para PlayStation, hechas con RecompOne.",
};
