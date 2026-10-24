import type { Port } from "@/lib/ports/schema";

export const ctrHighOctane: Port = {
  schema: "port",
  id: "ctr-high-octane",
  title: "Crash Team Racing: High Octane",
  game: "Crash Team Racing",
  developers: ["Rinnegatamante"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1999,
  portType: "source-port",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["psvita", "windows", "web"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Rinnegatamante/Crash-Team-Racing-High-Octane"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  summary: "Crash Team Racing is a 1999 kart racing game developed by Naughty Dog and published by Sony Computer Entertainment for the PlayStation. It is the fourth installment in the Crash Bandicoot series and the final Crash Bandicoot game to be developed by Naughty Dog. The game's story focuses on the efforts of Crash Bandicoot, Doctor Neo Cortex, and other ragtag team of characters in the Crash Bandicoot series, who must race against the egomaniacal Nitros Oxide to save the Earth from destruction.",
  summaryEs: "Crash Team Racing es un videojuego de carreras de karts desarrollado por Naughty Dog y publicado por Sony Computer Entertainment para PlayStation. Es la cuarta entrega de la serie Crash Bandicoot y el último hecho por Naughty Dog. La historia se centra en los esfuerzos de Crash Bandicoot, el Doctor Neo Cortex y otros personajes variopintos, que deben competir contra el ególatra Nitros Oxide para salvar la Tierra de la destrucción. En el título, los jugadores pueden controlar a uno de los quince personajes de la saga, aunque al principio solo están disponibles ocho.",
  notes:
    "Advanced source port of Crash Team Racing for PlayStation Vita, PC and the web, built on the CTR decompilation. Bring your own disc image.",
  notesEs:
    "Port avanzado del código fuente de Crash Team Racing para PlayStation Vita, PC y navegador, construido sobre la decompilación de CTR. Aporta tu propia imagen de disco.",
  cover: {
    src: "https://cdn2.steamgriddb.com/thumb/afa10814865d47b74741b44d8fcbb37b.jpg",
    alt: "Crash Team Racing (cover)",
    credit: "SteamGridDB",
  },
};
