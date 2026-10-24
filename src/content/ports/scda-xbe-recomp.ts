import type { Port } from "@/lib/ports/schema";

export const scdaXbeRecomp: Port = {
  schema: "port",
  id: "scda-xbe-recomp",
  title: "Splinter Cell: Double Agent (Xbox Recomp)",
  game: "Tom Clancy's Splinter Cell: Double Agent",
  developers: ["TGP482"],
  publisher: "Ubisoft",
  originalYear: 2006,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/TGP482/SCDA-XBERecomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox"],
  summary: "Tom Clancy's Splinter Cell: Double Agent is a 2006 action-adventure stealth game co-developed by Ubisoft Milan and Ubisoft Shanghai, and published by Ubisoft. The Splinter Cell series, endorsed by American author Tom Clancy, follows Sam Fisher, an agent employed by a black-ops division of the National Security Agency (NSA), dubbed Third Echelon. The game was released for GameCube, PlayStation 2, Xbox and Xbox 360 in October 2006. The Wii and Windows versions were released in November 2006. A PlayStation 3 version was released in March 2007.",
  summaryEs: "Tom Clancy´s Splinter Cell: Double Agent es el cuarto episodio de la saga de videojuegos de aventura/acción/infiltración Splinter Cell, a la venta para las consolas GameCube, Wii, PlayStation 2, PlayStation 3, Xbox 360, xbox, PSP y ordenadores personales. Además el título también fue publicado para teléfonos móviles.",
  notes:
    "Unofficial PC port of the original Xbox version of Splinter Cell: Double Agent via static recompilation. Needs your own game files.",
  notesEs:
    "Port no oficial para PC de la versión de Xbox original de Splinter Cell: Double Agent mediante recompilación estática. Necesita tus propios archivos del juego.",
  cover: {
    src: "https://cdn2.steamgriddb.com/icon/6775a0635c302542da2c32aa19d86be0/32/256x256.png",
    alt: "Tom Clancy's Splinter Cell: Double Agent (cover)",
    credit: "SteamGridDB",
  },
};
