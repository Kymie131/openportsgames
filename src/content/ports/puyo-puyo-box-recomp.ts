import type { Port } from "@/lib/ports/schema";

export const puyoPuyoBoxRecomp: Port = {
  schema: "port",
  id: "puyo-puyo-box-recomp",
  title: "Puyo Puyo Box Recompiled",
  game: "Puyo Puyo Box",
  developers: ["PortsDR"],
  publisher: "Compile",
  originalYear: 2000,
  portType: "recompilation",
  genre: "puzzle",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/kirby1237/PuyoPuyoBoxRecomp"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  summary: "Puyo Puyo Box is a 2000 puzzle video game compilation developed by Compile for the PlayStation. It is Compile's last Puyo Puyo game before Sega, previously only owning the character rights, fully obtained the rights to the series. Puyo Puyo Box, being a compilation, primarily consists of earlier Puyo Puyo games, but also contains original content.",
  summaryEs: "Puyo Puyo BOX es un videojuego compilatorio desarrollado por Compile para Sony PlayStation. Es el último título reconocido de Compile de Puyo Puyo en la serie antes de que Sega, que anteriormente solo poseía los derechos de los personajes, obtuviera los derechos de la serie. Puyo Puyo BOX, al ser una compilación, consiste principalmente en juegos anteriores de Puyo Puyo, pero también contiene contenido original.",
  notes: "Community entry from PortsDR. No repository is public; the game is not included.",
  notesEs: "Entrada comunitaria de PortsDR. No hay repositorio público; el juego no se incluye.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Puyo%20Puyo%20Box%20(Japan).png",
    alt: "Puyo Puyo Box (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Puyo%20Puyo%20Box%20(Japan).png",
      alt: "Puyo Puyo Box (screenshot)",
      credit: "Libretro",
    },
  ],
};
