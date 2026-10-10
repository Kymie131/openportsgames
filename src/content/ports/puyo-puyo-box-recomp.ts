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
  notes:
    "Recompilation of Puyo Puyo Box (PlayStation) listed by the PortsDR community index. No public repository or release is linked, and it needs your own copy of the game.",
  notesEs:
    "Recompilación de Puyo Puyo Box (PlayStation) listada en el índice comunitario PortsDR. No hay repositorio ni release públicos enlazados, y necesita tu propia copia del juego.",
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
