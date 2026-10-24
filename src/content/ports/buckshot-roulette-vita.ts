import type { Port } from "@/lib/ports/schema";

export const buckshotRouletteVita: Port = {
  schema: "port",
  id: "buckshot-roulette-vita",
  title: "Buckshot Roulette (PS Vita)",
  game: "Buckshot Roulette",
  developers: ["voidchecksam"],
  publisher: "Mike Klubnika",
  originalYear: 2023,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["psvita"],
  status: "beta",
  release: { version: "1.0.1", date: "2026-10-20" },
  sources: ["https://github.com/voidchecksam/BuckshotRoulettePortable-BSHT"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  related: ["buckshot-roulette-mobile"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/72/Buckshot_Roulette_Cover.jpg",
    alt: "Buckshot Roulette (box art)",
    credit: "Wikipedia",
  },
  summary: "Buckshot Roulette is a 2023 indie tabletop horror video game developed and published by Estonian video game developer Mike Klubnika on itch.io. It was released on Steam by Critical Reflex on 4 April 2024 to coincide with a new update. The game has been likened to the 2021 roguelike video game Inscryption, despite contrasting visual styles. Klubnika developed the game in the Godot game engine and also composed the game's soundtrack.",
  summaryEs: "Buckshot Roulette es un videojuego de terror independiente de mesa desarrollado y publicado por el desarrollador de juegos estonio Mike Klubnika el 28 de diciembre de 2023. En un inicio fue publicado en itch.io, y más tarde fue lanzado en Steam por Critical Reflex el 4 de abril de 2024 para coincidir con una nueva actualización.[cita requerida]",
  notes:
    "Buckshot Roulette (Mike Klubnika, 2023) ported natively to PS Vita at 60 fps, with the full single-player campaign. You need your own Steam copy of the game.",
  notesEs:
    "Buckshot Roulette (Mike Klubnika, 2023) portado de forma nativa a PS Vita a 60 fps, con toda la campaña individual. Necesitas tu copia de Steam.",
};
