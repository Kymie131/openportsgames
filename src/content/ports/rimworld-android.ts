import type { Port } from "@/lib/ports/schema";

export const rimworldAndroid: Port = {
  schema: "port",
  id: "rimworld-android",
  title: "RimDroid",
  game: "RimWorld",
  developers: ["udarmolota"],
  publisher: "Ludeon Studios",
  originalYear: 2013,
  portType: "runtime-port",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/udarmolota/rimdroid"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "RimWorld is a construction and management simulation video game developed by Canadian game designer Tynan Sylvester and published by Ludeon Studios. Originally called Eclipse Colony, it was initially released as a Kickstarter crowdfunding project in early access for Microsoft Windows, macOS, and Linux in November 2013, and version 1.0 was released on October 17, 2018. The game was ported to the PlayStation 4 and Xbox One as RimWorld Console Edition on July 29, 2022, with development and publishing being handled by Double Eleven.",
  summaryEs: "RimWorld es un videojuego de construcción y gestión desarrollado por Ludeon Studios. Inicialmente se lanzó una alpha para Linux, Mac OS X y Windows el 4 de noviembre de 2013. Posteriormente, fue publicado en Steam como juego de acceso anticipado el 15 de julio de 2016. El juego tuvo su lanzamiento definitivo el 17 de octubre de 2018.El 9 de julio de 2020 fue publicado en la tienda de juegos Epic Store.",
  notes:
    "Android launcher that runs RimWorld on phones and tablets. It requires the desktop game files from your own copy.",
  notesEs:
    "Lanzador para Android que ejecuta RimWorld en teléfonos y tablets. Requiere los archivos del juego de escritorio de tu propia copia.",
  cover: {
    src: "https://cdn.cloudflare.steamstatic.com/steam/apps/294100/header.jpg",
    alt: "RimWorld (cover)",
    credit: "Steam",
  },
};
