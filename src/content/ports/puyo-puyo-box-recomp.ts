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
  sources: ["https://portsdr.com/"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  originalSystem: "PlayStation",
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
