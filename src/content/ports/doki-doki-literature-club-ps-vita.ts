import type { Port } from "@/lib/ports/schema";

export const dokiDokiLiteratureClubPsVita: Port = {
  schema: "port",
  id: "doki-doki-literature-club-ps-vita",
  title: "Doki Doki Literature Club! (PS Vita)",
  game: "Doki Doki Literature Club!",
  developers: ["LukeZGD"],
  publisher: "Team Salvato",
  originalYear: 2017,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["psvita"],
  status: "beta",
  release: { version: "1.2.3", date: "2021-09-16" },
  sources: ["https://github.com/LukeZGD/DDLC-LOVE"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  downloads: [
    {
      label: "Psvita",
      url: "https://github.com/LukeZGD/DDLC-LOVE/releases/download/v1.2.3/DDLC-LOVE-PSP.zip",
      size: "83.4 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/7c/Doki_Doki_Literature_Club_Cover.jpg",
    alt: "Doki Doki Literature Club! (box art)",
    credit: "Wikipedia",
  },
  summary: "The Literature Club is full of cute girls! Will you write the way into their heart? This game is not suitable for children or those who are easily disturbed.",
  summaryEs: "Doki Doki Literature Club! es un videojuego de acción y aventura publicado por Team Salvato en 2017.",
  notes: "Doki Doki Literature Club! (Team Salvato, 2017) running on PlayStation Vita through source port. Latest release: v1.2.3. You need your own copy of the game.",
  notesEs: "Doki Doki Literature Club! (Team Salvato, 2017) en PlayStation Vita mediante port de código. Última release: v1.2.3. Necesitas tu propia copia del juego.",
};
