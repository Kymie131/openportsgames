import type { Port } from "@/lib/ports/schema";

export const JurassicParkOperationGenesis: Port = {
  schema: "port",
  id: "jurassic-park-operation-genesis",
  title: "Jurassic Park: Operation Genesis",
  game: "Jurassic Park: Operation Genesis",
  developers: ["AdventureT"],
  publisher: "Unknown",
  originalYear: 2003,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/AdventureT/OpenJPOG"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Sega Mega Drive / Genesis"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/0/0b/Jurassic_Park_Operation_Genesis_Cover.jpg",
    alt: "Jurassic Park: Operation Genesis (cover)",
    credit: "Wikipedia",
  },
  summary: "Jurassic Park: Operation Genesis is a construction and management simulation video game based on the Jurassic Park franchise. It was developed by Blue Tongue Entertainment and published by Universal Interactive. The game was released for Windows, Xbox, and PlayStation 2. Its primary objective is to establish and operate a five-star dinosaur theme park on custom-generated islands. Players hatch and manage dinosaurs, construct attractions and facilities, entertain visitors, and maintain park security while developing the park's rating and profitability.",
  summaryEs: "Jurassic Park Operation Genesis, abreviado como JP:OG o JPOG es un videojuego de simulación creado por Blue Tongue Entertainment y publicado por Vivendi Universal Games, se trata de crear un parque temático donde ves como los dinosaurios se alimentan, juegan, etc. y hacer que este parque sea 5 estrellas volviendo el sueño de John Hammond realidad. Fue lanzado para Xbox, PlayStation 2 y PC, el juego se basa en las películas de Jurassic Park, principalmente en Jurassic Park 3 Una versión para Gamecube estuvo en desarrollo pero fue cancelada.",
  notes:
    "Decompilation of Jurassic Park: Operation Genesis (JPOG) and the Toshi Engine version 1.0.",
  notesEs:
    "Decompilación de Jurassic Park: Operation Genesis (JPOG) y del motor Toshi versión 1.0.",
};
