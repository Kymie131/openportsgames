import type { Port } from "@/lib/ports/schema";

export const buckshotRouletteMobile: Port = {
  schema: "port",
  id: "buckshot-roulette-mobile",
  title: "Buckshot Roulette Mobile",
  game: "Buckshot Roulette",
  developers: ["officialmelon"],
  publisher: "Mike Klubnika",
  originalYear: 2023,
  portType: "runtime-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android", "ios"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/officialmelon/Buckshot-Roulette-Mobile"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Mobile port of Buckshot Roulette for Android and iOS. It needs your own game data and is a community project.",
  notesEs:
    "Port móvil de Buckshot Roulette para Android e iOS. Necesita tus propios datos del juego y es un proyecto comunitario.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/72/Buckshot_Roulette_Cover.jpg",
    alt: "Buckshot Roulette (box art)",
    credit: "Wikipedia",
  },
};
