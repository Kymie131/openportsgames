import type { Port } from "@/lib/ports/schema";

export const segaRallyPort0r: Port = {
  schema: "port",
  id: "sega-rally-port0r",
  title: "Sega Rally (Port0r)",
  game: "Sega Rally Championship",
  developers: ["jacquesdupontd"],
  publisher: "Sega",
  originalYear: 1994,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["switch", "android", "linux", "macos"],
  status: "beta",
  release: { version: "0.5.3", date: "2026-10-08" },
  sources: ["https://github.com/jacquesdupontd/port0r"],
  website: "https://port0r.com",
  license: { spdx: "NOASSERTION", note: "license not declared in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Arcade"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/e/eb/Sega_Rally_flyer.jpg",
    alt: "Sega Rally Championship (box art)",
    credit: "Wikipedia",
  },
  summary: "Sega Rally Championship is a 1995 racing game developed and published by Sega. Originally released for arcades using the Sega Model 2 board, ports were published for the Sega Saturn in 1995 and Microsoft Windows in 1997. It is a rally racing game that simulates driving on different surfaces with varying friction, with the car's handling changing accordingly. As the first racing game to incorporate this feature, Sega Rally Championship is considered to be a milestone in the evolution of the racing game genre.",
  summaryEs: "Sega Rally Championship es un videojuego de carreras desarrollado por el estudio interno AM3 de Sega en 1995 para la placa de recreativas arcade Sega Model 2.",
  notes:
    "Sega Rally Championship (Sega, 1994) ported natively to Switch, Android, Linux and macOS from the arcade original. You need your own ROM.",
  notesEs:
    "Sega Rally Championship (Sega, 1994) portado de forma nativa a Switch, Android, Linux y macOS desde el arcade. Necesitas tu propia ROM.",
};
