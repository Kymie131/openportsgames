import type { Port } from "@/lib/ports/schema";

export const Vorpalfix: Port = {
  schema: "port",
  id: "vorpalfix",
  title: "VorpalFix",
  game: "VorpalFix",
  developers: ["Wemino"],
  publisher: "Unknown",
  originalYear: 2011,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Wemino/VorpalFix"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "VorpalFix is a action-adventure game, released in 2011.",
  summaryEs: "VorpalFix es un videojuego de acci�n y aventura, lanzado en 2011.",
  summaryGenerated: true,
  cover: {
    src: "https://openportsgames.com/covers/generated/vorpalfix.svg",
    alt: "VorpalFix (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "A patch that addresses various technical issues and adds quality-of-life improvements to the 2011 remaster of American McGee's Alice.",
  notesEs:
    "Parche que corrige varios problemas técnicos y añade mejoras de calidad de vida al remaster de 2011 de American McGee's Alice.",
};
